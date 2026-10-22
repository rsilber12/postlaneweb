/// <reference lib="dom" />
import { access, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { loadEnv, preview, type Plugin } from "vite";
import puppeteer, { type Browser } from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { SITE_URL, publicProductSlug } from "../src/lib/seo";

const MAX_PRERENDER_PAGES = 200;
type PublishedProduct = { slug: string };

export async function launchRenderer() {
  // Prefer the platform's bundled browser, which includes its runtime libraries.
  const browserRoot = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/ms-playwright";
  const versions = await readdir(browserRoot).catch(() => []);
  let executablePath: string | undefined;
  for (const version of versions.filter((entry) => /^chromium-\d+$/.test(entry)).sort().reverse()) {
    for (const folder of ["chrome-linux", "chrome-linux64"]) {
      const candidate = path.join(browserRoot, version, folder, "chrome");
      if (await access(candidate).then(() => true).catch(() => false)) { executablePath = candidate; break; }
    }
    if (executablePath) break;
  }
  return puppeteer.launch({
    executablePath: executablePath || await chromium.executablePath(),
    args: chromium.args,
    headless: true,
  });
}

export async function renderRoute(browser: Browser, origin: string, route: string, productCount?: number) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 1800 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await page.goto(`${origin}${route}`, { waitUntil: "networkidle0", timeout: 60000 });
    await page.waitForSelector('meta[name="prerender-status"][content="ready"]', { timeout: 30000 });
    if (route === "/" && productCount) {
      await page.waitForFunction((count) => document.querySelectorAll('#products a[href^="/products/"]').length === count, { timeout: 30000 }, productCount);
    }
    if (route.startsWith("/products/")) {
      const valid = await page.$eval('meta[name="robots"]', (el) => el.getAttribute("content") !== "noindex, follow");
      if (!valid) throw new Error(`Cannot prerender missing product ${route}`);
    }
    // Reveal scroll-triggered sections before snapshotting; never leave static content invisible.
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = "auto";
      for (let y = 0; y < document.body.scrollHeight; y += 900) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      window.scrollTo(0, 0);
    });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await page.evaluate(() => {
      document.querySelector('meta[name="prerender-status"]')?.remove();
      document.documentElement.style.removeProperty("scroll-behavior");
    });
    const canonical = await page.$eval('link[rel="canonical"]', (el) => el.getAttribute("href"));
    if (canonical !== `${SITE_URL}${route}`) throw new Error(`Incorrect canonical for ${route}`);
    return await page.content();
  } finally {
    await page.close();
  }
}

export function seoBuildPlugin(): Plugin {
  let routes: string[] = [];
  let productCount = 0;
  let outputDirectory = "dist";
  let mode = "production";
  return {
    name: "postlane-static-seo",
    apply: "build",
    configResolved(config) { outputDirectory = config.build.outDir; mode = config.mode; },
    async buildStart() {
      const env = { ...loadEnv(mode, process.cwd(), "VITE_"), ...process.env };
      const url = env.VITE_SUPABASE_URL;
      const key = env.VITE_SUPABASE_PUBLISHABLE_KEY;
      if (!url || !key) throw new Error("SEO rendering requires the configured public product connection.");
      const response = await fetch(`${url}/rest/v1/products?select=slug&published=eq.true&order=display_order.asc`, {
        headers: { apikey: key, Authorization: `Bearer ${key}` }, signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) throw new Error("Could not load published products for the sitemap and prerender.");
      const products = await response.json() as PublishedProduct[];
      productCount = products.length;
      routes = ["/", "/contact", ...new Set(products.map((p) => `/products/${publicProductSlug(p.slug)}`))];
      if (routes.length > MAX_PRERENDER_PAGES) throw new Error(`Public pages exceed the ${MAX_PRERENDER_PAGES}-page prerender safety cap.`);
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${SITE_URL}${route.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</loc></url>`).join("\n")}\n</urlset>\n`;
      await writeFile("public/sitemap.xml", xml);
    },
    async closeBundle() {
      // Temporary build-only preview; this is not an application backend.
      const server = await preview({ configFile: false, root: process.cwd(), build: { outDir: outputDirectory }, preview: { port: 4179, strictPort: true, host: "127.0.0.1" } });
      let browser: Browser | undefined;
      try {
        browser = await launchRenderer();
        // Keep the root SPA fallback until every route has been captured.
        const rendered: Array<{ route: string; html: string }> = [];
        for (const route of routes) rendered.push({ route, html: await renderRoute(browser, "http://127.0.0.1:4179", route, productCount) });
        for (const { route, html } of rendered) {
          const target = path.join(outputDirectory, route === "/" ? "index.html" : `${route.slice(1)}/index.html`);
          await mkdir(path.dirname(target), { recursive: true });
          await writeFile(target, html);
        }
        console.log(`Prerendered ${routes.length} public pages with route-specific metadata.`);
      } finally {
        await browser?.close();
        await new Promise<void>((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
      }
    },
  };
}