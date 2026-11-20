import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import VideosGallery from "@/components/VideosGallery";
import { CATEGORIES } from "@/lib/posts";
import { VIDEOS } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Seasonora Videos — Watch Our DIY & Seasonal Projects",
  description:
    "Discover creative ideas, helpful tips and beautiful moments in our short and engaging videos — DIY crafts, decor, recipes, holidays and lifestyle, each with a full written guide.",
  alternates: { canonical: "/videos" },
  openGraph: {
    type: "website",
    title: "Seasonora Videos — Watch Our DIY & Seasonal Projects",
    description:
      "Discover creative ideas, helpful tips and beautiful moments in our short and engaging videos.",
    url: "/videos",
    images: ["/img/s-videos"],
  },
};

export default function VideosPage() {
  const cats = CATEGORIES.map((c) => ({ slug: c.slug, nav: c.nav, chipBg: c.chipBg, chipInk: c.chipInk }));
  return (
    <div className="wrap">
      <p className="breadcrumb"><Link href="/">Home</Link> › Videos</p>

      <section className="videos-hero">
        <img className="videos-hero-bg" src="/img/s-videos" alt="" aria-hidden="true" />
        <div className="videos-hero-shade" aria-hidden="true" />
        <div className="videos-hero-text">
          <p className="videos-badge"><span aria-hidden="true">▶</span> Watch • Learn • Get Inspired</p>
          <h1>Seasonora Videos</h1>
          <p className="videos-sub">Discover creative ideas, helpful tips and beautiful moments in our short and engaging videos.</p>
          <p className="videos-note-line">Short vertical project videos — every one plays right here and comes with a full step-by-step guide.</p>
        </div>
        <span className="videos-hero-play" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
        </span>
      </section>

      <VideosGallery videos={VIDEOS} cats={cats} />

      <Newsletter />
    </div>
  );
}
