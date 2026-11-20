// Seasonora project videos. Each video has a companion article (the
// written step-by-step guide) and plays natively on the site from
// /videos/<slug>.mp4 (decoded at build time from lib/viddata modules).
// Newest first.
export type VideoEntry = {
  slug: string;        // video slug; file is /videos/<slug>.mp4
  title: string;       // display title
  category: string;    // site category slug (matches lib/posts CATEGORIES)
  topic: string;       // subcategory / topic label shown as a chip
  articleSlug: string; // companion guide on /post/<articleSlug>
  poster: string;      // /img/<name> poster image
  durationSec: number;
  date: string;        // YYYY-MM-DD
};

export const VIDEOS: VideoEntry[] = [
  {
    slug: "mini-pumpkin-led-candle-holders",
    title: "DIY Mini Pumpkin LED Candle Holders",
    category: "diy-crafts",
    topic: "Autumn Home Decor",
    articleSlug: "mini-pumpkin-led-candle-holders",
    poster: "/img/a5-a",
    durationSec: 30,
    date: "2026-11-20",
  },
];

export const videoBySlug = (slug: string) => VIDEOS.find((v) => v.slug === slug);

export const fmtDuration = (sec: number) =>
  `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
