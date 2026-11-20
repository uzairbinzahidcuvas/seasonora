// Registry of site images, stored as base64 WebP and served by
// app/img/[name]/route.ts (the GitHub snapshot push is text-only, so
// images travel as data modules — same approach as the site logo).
// a* = article images (AI-generated); s* = design stock photos (Unsplash).
import a1Hero from "./imgdata/a1-hero";
import a1Entryway from "./imgdata/a1-entryway";
import a1Living from "./imgdata/a1-living";
import a2Hero from "./imgdata/a2-hero";
import a2A from "./imgdata/a2-a";
import a2B from "./imgdata/a2-b";
import a2C from "./imgdata/a2-c";
import a3Hero from "./imgdata/a3-hero";
import a3A from "./imgdata/a3-a";
import a3B from "./imgdata/a3-b";
import a4Hero from "./imgdata/a4-hero";
import a4A from "./imgdata/a4-a";
import a4B from "./imgdata/a4-b";
import a5Hero from "./imgdata/a5-hero";
import a5A from "./imgdata/a5-a";
import a5B from "./imgdata/a5-b";
import sHero from "./imgdata/s-hero";
import sSpring from "./imgdata/s-spring";
import sSummer from "./imgdata/s-summer";
import sAutumn from "./imgdata/s-autumn";
import sWinter from "./imgdata/s-winter";
import sDecor from "./imgdata/s-decor";
import sRecipes from "./imgdata/s-recipes";
import sDiy from "./imgdata/s-diy";
import sHolidays from "./imgdata/s-holidays";
import sLifestyle from "./imgdata/s-lifestyle";
import sFeature from "./imgdata/s-feature";
import sAbout from "./imgdata/s-about";
import sNewsletter from "./imgdata/s-newsletter";

export const IMAGES: Record<string, string> = {
  "a1-hero": a1Hero,
  "a1-entryway": a1Entryway,
  "a1-living": a1Living,
  "a2-hero": a2Hero,
  "a2-a": a2A,
  "a2-b": a2B,
  "a2-c": a2C,
  "a3-hero": a3Hero,
  "a3-a": a3A,
  "a3-b": a3B,
  "a4-hero": a4Hero,
  "a4-a": a4A,
  "a4-b": a4B,
  "a5-hero": a5Hero,
  "a5-a": a5A,
  "a5-b": a5B,
  "s-hero": sHero,
  "s-spring": sSpring,
  "s-summer": sSummer,
  "s-autumn": sAutumn,
  "s-winter": sWinter,
  "s-decor": sDecor,
  "s-recipes": sRecipes,
  "s-diy": sDiy,
  "s-holidays": sHolidays,
  "s-lifestyle": sLifestyle,
  "s-feature": sFeature,
  "s-about": sAbout,
  "s-newsletter": sNewsletter,
};
