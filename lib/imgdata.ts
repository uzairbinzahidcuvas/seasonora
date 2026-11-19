// Registry of AI-generated article images, stored as base64 WebP and served
// by app/img/[name]/route.ts (the GitHub snapshot push is text-only, so
// images travel as data modules — same approach as the site logo).
import a1Hero from "./imgdata/a1-hero";
import a1Entryway from "./imgdata/a1-entryway";
import a1Living from "./imgdata/a1-living";

export const IMAGES: Record<string, string> = {
  "a1-hero": a1Hero,
  "a1-entryway": a1Entryway,
  "a1-living": a1Living,
};
