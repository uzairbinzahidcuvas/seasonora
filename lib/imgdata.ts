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
import a22Hero from "./imgdata/a22-hero";
import a22A from "./imgdata/a22-a";
import a22B from "./imgdata/a22-b";
import a22C from "./imgdata/a22-c";
import a23Hero from "./imgdata/a23-hero";
import a23A from "./imgdata/a23-a";
import a23B from "./imgdata/a23-b";
import a24Hero from "./imgdata/a24-hero";
import a25Hero from "./imgdata/a25-hero";
import a25A from "./imgdata/a25-a";
import a25B from "./imgdata/a25-b";
import a25C from "./imgdata/a25-c";
import a26Hero from "./imgdata/a26-hero";
import a26A from "./imgdata/a26-a";
import a26B from "./imgdata/a26-b";
import a27Hero from "./imgdata/a27-hero";
import a27A from "./imgdata/a27-a";
import a27B from "./imgdata/a27-b";
import a28Hero from "./imgdata/a28-hero";
import a28A from "./imgdata/a28-a";
import a28B from "./imgdata/a28-b";
import a29Hero from "./imgdata/a29-hero";
import a29A from "./imgdata/a29-a";
import a29B from "./imgdata/a29-b";
import a29C from "./imgdata/a29-c";
import a30Hero from "./imgdata/a30-hero";
import a30A from "./imgdata/a30-a";
import a30B from "./imgdata/a30-b";
import a31Hero from "./imgdata/a31-hero";
import a31A from "./imgdata/a31-a";
import a31B from "./imgdata/a31-b";
import a31C from "./imgdata/a31-c";
import a32Hero from "./imgdata/a32-hero";
import a32A from "./imgdata/a32-a";
import a32B from "./imgdata/a32-b";
import a32C from "./imgdata/a32-c";
import a33Hero from "./imgdata/a33-hero";
import a33A from "./imgdata/a33-a";
import a33B from "./imgdata/a33-b";
import a35Hero from "./imgdata/a35-hero";
import a35A from "./imgdata/a35-a";
import a35B from "./imgdata/a35-b";
import a36Hero from "./imgdata/a36-hero";
import a36A from "./imgdata/a36-a";
import a36B from "./imgdata/a36-b";
import a36C from "./imgdata/a36-c";
import a37Hero from "./imgdata/a37-hero";
import a37A from "./imgdata/a37-a";
import a37B from "./imgdata/a37-b";
import a37C from "./imgdata/a37-c";
import a38Hero from "./imgdata/a38-hero";
import a38A from "./imgdata/a38-a";
import a38B from "./imgdata/a38-b";
import a39Hero from "./imgdata/a39-hero";
import a39A from "./imgdata/a39-a";
import a39B from "./imgdata/a39-b";
import a40Hero from "./imgdata/a40-hero";
import a40A from "./imgdata/a40-a";
import a40B from "./imgdata/a40-b";
import a41Hero from "./imgdata/a41-hero";
import a41A from "./imgdata/a41-a";
import a41B from "./imgdata/a41-b";
import a41C from "./imgdata/a41-c";
import a42Hero from "./imgdata/a42-hero";
import a42A from "./imgdata/a42-a";
import a42B from "./imgdata/a42-b";
import a43Hero from "./imgdata/a43-hero";
import a43A from "./imgdata/a43-a";
import a43B from "./imgdata/a43-b";
import a43C from "./imgdata/a43-c";
import a44Hero from "./imgdata/a44-hero";
import a44A from "./imgdata/a44-a";
import a44B from "./imgdata/a44-b";
import a34Hero from "./imgdata/a34-hero";
import a34A from "./imgdata/a34-a";
import a34B from "./imgdata/a34-b";
import a34C from "./imgdata/a34-c";
import a24A from "./imgdata/a24-a";
import a24B from "./imgdata/a24-b";
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
  "a22-hero": a22Hero,
  "a22-a": a22A,
  "a22-b": a22B,
  "a22-c": a22C,
  "a23-hero": a23Hero,
  "a23-a": a23A,
  "a23-b": a23B,
  "a24-hero": a24Hero,
  "a24-a": a24A,
  "a24-b": a24B,
  "a25-hero": a25Hero,
  "a25-a": a25A,
  "a25-b": a25B,
  "a25-c": a25C,
  "a26-hero": a26Hero,
  "a26-a": a26A,
  "a26-b": a26B,
  "a27-hero": a27Hero,
  "a27-a": a27A,
  "a27-b": a27B,
  "a28-hero": a28Hero,
  "a28-a": a28A,
  "a28-b": a28B,
  "a29-hero": a29Hero,
  "a29-a": a29A,
  "a29-b": a29B,
  "a29-c": a29C,
  "a30-hero": a30Hero,
  "a30-a": a30A,
  "a30-b": a30B,
  "a31-hero": a31Hero,
  "a31-a": a31A,
  "a31-b": a31B,
  "a31-c": a31C,
  "a32-hero": a32Hero,
  "a32-a": a32A,
  "a32-b": a32B,
  "a32-c": a32C,
  "a33-hero": a33Hero,
  "a33-a": a33A,
  "a33-b": a33B,
  "a35-hero": a35Hero,
  "a35-a": a35A,
  "a35-b": a35B,
  "a36-hero": a36Hero,
  "a36-a": a36A,
  "a36-b": a36B,
  "a36-c": a36C,
  "a37-hero": a37Hero,
  "a37-a": a37A,
  "a37-b": a37B,
  "a37-c": a37C,
  "a38-hero": a38Hero,
  "a38-a": a38A,
  "a38-b": a38B,
  "a39-hero": a39Hero,
  "a39-a": a39A,
  "a39-b": a39B,
  "a40-hero": a40Hero,
  "a40-a": a40A,
  "a40-b": a40B,
  "a41-hero": a41Hero,
  "a41-a": a41A,
  "a41-b": a41B,
  "a41-c": a41C,
  "a42-hero": a42Hero,
  "a42-a": a42A,
  "a42-b": a42B,
  "a43-hero": a43Hero,
  "a43-a": a43A,
  "a43-b": a43B,
  "a43-c": a43C,
  "a44-hero": a44Hero,
  "a44-a": a44A,
  "a44-b": a44B,
  "a34-hero": a34Hero,
  "a34-a": a34A,
  "a34-b": a34B,
  "a34-c": a34C,
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
