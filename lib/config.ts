// ── Central site configuration ──────────────────────────────────────────────
// Change SITE_URL here when a custom domain is bought — every canonical,
// Open Graph, sitemap, robots and JSON-LD URL is built from this constant.
export const SITE_URL = "https://seasonora.vercel.app";
export const SITE_NAME = "Seasonora";
export const TAGLINE = "Make Every Season Special.";
export const SITE_DESCRIPTION =
  "Seasonora shares seasonal decor, holiday ideas, easy recipes, DIY inspiration and lifestyle finds for readers in the US, UK and Canada — make every season special.";
export const PINTEREST_URL = "https://www.pinterest.com/theseasonora/";
export const FACEBOOK_URL = "https://www.facebook.com/theseasonora/";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Seasonal Living", href: "/seasonal-living" },
  { label: "Holidays", href: "/holidays" },
  { label: "Home & Decor", href: "/home-decor" },
  { label: "Food & Recipes", href: "/food-recipes" },
  { label: "DIY & Crafts", href: "/diy-crafts" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "About", href: "/about" },
] as const;
