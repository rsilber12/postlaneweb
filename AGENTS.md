# Project architecture
- Centralize canonical domain, product slug aliases, and metadata in the SEO module so links, page heads, and build output agree.
- Keep route metadata in react-helmet-async; prerender public routes after production bundling so static HTML includes current published product content.
- Preserve the spring product's existing database slug through an explicit public URL alias so existing admin content remains connected.
- Generate the sitemap from published products during builds without invented lastmod values; exclude private administration and sign-in pages.
- Vercel redirect configuration only applies on Vercel; Lovable hosting uses client-side alias navigation rather than HTTP 301 redirects.