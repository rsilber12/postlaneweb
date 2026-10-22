export const SITE_URL = "https://www.postlaneusa.com";
export const SPRING_SLUG = "spring-system-wall-mount-cable-management";
export const OLD_SPRING_SLUG = "postlane-usa-spring-system-wall-mounted-ev-charging-cable-management-13-ft-retractable-steel-with-black-powder-coat-fits-cables-up-to-48a";

export function publicProductSlug(slug: string) {
  return slug === OLD_SPRING_SLUG ? SPRING_SLUG : slug;
}

export function canonicalUrl(path: string) {
  return `${SITE_URL}${path.split(/[?#]/)[0] || "/"}`;
}

export const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "EV Charger Pedestals Made in USA | Postlane USA",
    description: "Explore USA-made EV charger pedestals, cable management and protective bollards from Postlane USA. Request a quote for your new charging installation.",
  },
  "/contact": {
    title: "Contact Postlane USA | EV Charger Pedestals",
    description: "Contact Postlane USA for EV charger pedestals, cable management and custom mounting solutions. Tell us about your project and request a project quote.",
  },
  "/products/universal-5ft-pedestal": {
    title: "Universal 5 ft EV Charger Pedestal | Postlane USA",
    description: "Explore the PL-CLASSIC universal EV charger pedestal: steel or aluminum, multiple heights and custom branding. Built in the USA for new installations.",
  },
  "/products/universal-cable-management-pedestal": {
    title: "EV Charger Pedestal with Cable Management | Postlane USA",
    description: "Discover a USA-made EV charger pedestal with integrated cable management and universal mounting. Explore mounting options for clean new installations.",
  },
  "/products/4ft-slim-pedestal": {
    title: "4 ft Slim EV Pedestal for Tesla and Autel Chargers | Postlane USA",
    description: "Explore Postlane USA's compact 4 ft slim EV charger pedestal for tight parking installations. A space-saving mounting solution with firm construction.",
  },
  "/products/counterweight-slim-pedestal": {
    title: "Slim Cable Management EV Pedestal | Postlane USA",
    description: "Meet the PL-PREMIUM slim EV pedestal with integrated cable management, concealed wiring and a powder-coated finish. USA-made and sent fully assembled.",
  },
  [`/products/${SPRING_SLUG}`]: {
    title: "Wall Mount EV Cable Management, Spring Retractable | Postlane USA",
    description: "Keep EV charging cables off the ground with Postlane USA's spring retractable wall mount. Has 13 ft of reach with adapters for EV cables rated to 48A.",
  },
  "/products/pedestal": {
    title: "EV Charger Pedestal Preview | Postlane USA",
    description: "Preview Postlane USA's upcoming EV charger pedestal. Explore our current pedestal and cable management range, or contact our team for project support.",
  },
  "/auth": { title: "Admin Sign In | Postlane USA", description: "Sign in to Postlane USA to manage product information, descriptions and image galleries." },
  "/admin": { title: "Product Administration | Postlane USA", description: "Manage Postlane USA product listings, descriptions and image galleries." },
};

export function productMetadata(slug: string, title: string, content: string) {
  const known = pageMetadata[`/products/${publicProductSlug(slug)}`];
  if (known) return known;
  const text = content.replace(/\s+/g, " ").trim();
  return { title: `${title} | Postlane USA`, description: (text || `Explore ${title} from Postlane USA. Contact our team for product details and a quote.`).slice(0, 150) };
}