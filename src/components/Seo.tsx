import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { canonicalUrl, pageMetadata, SITE_URL } from "@/lib/seo";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ready?: boolean;
  schema?: Record<string, unknown>;
};

export function Seo({ title, description, path, noindex = false, ready = true, schema }: SeoProps) {
  const url = canonicalUrl(path);
  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta name="prerender-status" content={ready ? "ready" : "loading"} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, "\\u003c")}</script>}
    </Helmet>
  );
}

export function RouteSeo() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/products/")) return null;
  const meta = pageMetadata[pathname];
  const schema = pathname === "/" ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Postlane USA",
    url: SITE_URL,
    telephone: "718-355-1808",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6607 14th Ave",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11219",
      addressCountry: "US",
    },
  } : undefined;
  return <Seo path={pathname} title={meta?.title ?? "Page Not Found | Postlane USA"}
    description={meta?.description ?? "The requested page could not be found. Explore Postlane USA EV charger pedestals or contact our team."}
    noindex={!meta || pathname === "/auth" || pathname === "/admin"} schema={schema} />;
}