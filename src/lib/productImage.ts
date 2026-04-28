// Helpers to resolve product image strings to a usable URL.
// Supports legacy seeded values like "/src/assets/foo.jpeg" by mapping them
// to bundled assets via Vite's import.meta.glob, plus full URLs from storage.

const assetModules = import.meta.glob("/src/assets/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export function resolveProductImage(src?: string | null): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("/src/assets/")) {
    return assetModules[src] || src;
  }
  return src;
}
