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
import a6Hero from "./imgdata/a6-hero";
import a6A from "./imgdata/a6-a";
import a6B from "./imgdata/a6-b";
import a7Hero from "./imgdata/a7-hero";
import a7A from "./imgdata/a7-a";
import a7B from "./imgdata/a7-b";
import a8Hero from "./imgdata/a8-hero";
import a8A from "./imgdata/a8-a";
import a8B from "./imgdata/a8-b";
import a9Hero from "./imgdata/a9-hero";
import a9A from "./imgdata/a9-a";
import a9B from "./imgdata/a9-b";
import a10Hero from "./imgdata/a10-hero";
import a10A from "./imgdata/a10-a";
import a10B from "./imgdata/a10-b";
import a11Hero from "./imgdata/a11-hero";
import a11A from "./imgdata/a11-a";
import a11B from "./imgdata/a11-b";
import a13Hero from "./imgdata/a13-hero";
import a13A from "./imgdata/a13-a";
import a13B from "./imgdata/a13-b";
import a12Hero from "./imgdata/a12-hero";
import a12A from "./imgdata/a12-a";
import a12B from "./imgdata/a12-b";
import a14Hero from "./imgdata/a14-hero";
import a14A from "./imgdata/a14-a";
import a14B from "./imgdata/a14-b";
import a15Hero from "./imgdata/a15-hero";
import a15A from "./imgdata/a15-a";
import a15B from "./imgdata/a15-b";
import a15C from "./imgdata/a15-c";
import a16Hero from "./imgdata/a16-hero";
import a16A from "./imgdata/a16-a";
import a16B from "./imgdata/a16-b";
import a17Hero from "./imgdata/a17-hero";
import a17A from "./imgdata/a17-a";
import a17B from "./imgdata/a17-b";
import a17C from "./imgdata/a17-c";
import a18Hero from "./imgdata/a18-hero";
import a18A from "./imgdata/a18-a";
import a18B from "./imgdata/a18-b";
import a19Hero from "./imgdata/a19-hero";
import a19A from "./imgdata/a19-a";
import a19B from "./imgdata/a19-b";
import a19C from "./imgdata/a19-c";
import a20Hero from "./imgdata/a20-hero";
import a20A from "./imgdata/a20-a";
import a20B from "./imgdata/a20-b";
import a20C from "./imgdata/a20-c";
import a21Hero from "./imgdata/a21-hero";
import a21A from "./imgdata/a21-a";
import a21B from "./imgdata/a21-b";
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
import sVideos from "./imgdata/s-videos";

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
  "a6-hero": a6Hero,
  "a6-a": a6A,
  "a6-b": a6B,
  "a7-hero": a7Hero,
  "a7-a": a7A,
  "a7-b": a7B,
  "a8-hero": a8Hero,
  "a8-a": a8A,
  "a8-b": a8B,
  "a9-hero": a9Hero,
  "a9-a": a9A,
  "a9-b": a9B,
  "a10-hero": a10Hero,
  "a10-a": a10A,
  "a10-b": a10B,
  "a11-hero": a11Hero,
  "a11-a": a11A,
  "a11-b": a11B,
  "a13-hero": a13Hero,
  "a13-a": a13A,
  "a13-b": a13B,
  "a12-hero": a12Hero,
  "a12-a": a12A,
  "a12-b": a12B,
  "a14-hero": a14Hero,
  "a14-a": a14A,
  "a14-b": a14B,
  "a15-hero": a15Hero,
  "a15-a": a15A,
  "a15-b": a15B,
  "a15-c": a15C,
  "a16-hero": a16Hero,
  "a16-a": a16A,
  "a16-b": a16B,
  "a17-hero": a17Hero,
  "a17-a": a17A,
  "a17-b": a17B,
  "a17-c": a17C,
  "a18-hero": a18Hero,
  "a18-a": a18A,
  "a18-b": a18B,
  "a19-hero": a19Hero,
  "a19-a": a19A,
  "a19-b": a19B,
  "a19-c": a19C,
  "a20-hero": a20Hero,
  "a20-a": a20A,
  "a20-b": a20B,
  "a20-c": a20C,
  "a21-hero": a21Hero,
  "a21-a": a21A,
  "a21-b": a21B,
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
  "s-videos": sVideos,
};
