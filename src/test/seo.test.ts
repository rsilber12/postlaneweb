import { describe, expect, it } from "vitest";
import { canonicalUrl, OLD_SPRING_SLUG, publicProductSlug } from "@/lib/seo";

describe("SEO URL rules", () => {
  it("uses the requested www domain and each page's own path", () => {
    expect(canonicalUrl("/contact?submitted=1")).toBe("https://www.postlaneusa.com/contact");
    expect(canonicalUrl("/products/universal-5ft-pedestal")).toBe("https://www.postlaneusa.com/products/universal-5ft-pedestal");
  });
  it("maps the old spring URL to the requested shorter URL", () => {
    expect(publicProductSlug(OLD_SPRING_SLUG)).toBe("spring-system-wall-mount-cable-management");
    expect(publicProductSlug("4ft-slim-pedestal")).toBe("4ft-slim-pedestal");
  });
});