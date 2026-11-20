import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, fmtDate } from "@/lib/posts";
import { VIDEOS, fmtDuration } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Seasonora Videos — Watch Our DIY & Seasonal Projects",
  description:
    "Watch Seasonora project videos: short, step-by-step DIY and seasonal craft videos, each with a full written guide — pumpkin candle holders, garlands, wreaths and more.",
  alternates: { canonical: "/videos" },
  openGraph: {
    type: "website",
    title: "Seasonora Videos — Watch Our DIY & Seasonal Projects",
    description:
      "Short step-by-step project videos from Seasonora, each with a full written guide.",
    url: "/videos",
  },
};

export default function VideosPage() {
  const cats = CATEGORIES.filter((c) => VIDEOS.some((v) => v.category === c.slug));
  return (
    <div className="wrap">
      <p className="breadcrumb"><Link href="/">Home</Link> › Videos</p>
      <div className="videos-head">
        <h1>Seasonora Videos</h1>
        <p>
          Short, watchable project videos — every one shows the whole make, start to finish,
          and comes with a full written guide listing what you need and each step in order.
          Press play right here, then open the guide when you are ready to make your own.
        </p>
      </div>

      {cats.map((cat) => (
        <section key={cat.slug} aria-labelledby={`vh-${cat.slug}`}>
          <div className="section-head">
            <h2 id={`vh-${cat.slug}`}>{cat.name} Videos</h2>
            <Link className="section-link" href={`/${cat.slug}`}>All {cat.nav} guides →</Link>
          </div>
          <div className="videos-grid">
            {VIDEOS.filter((v) => v.category === cat.slug).map((v) => (
              <article className="video-card" key={v.slug}>
                <video
                  controls
                  preload="none"
                  poster={v.poster}
                  playsInline
                  src={`/videos/${v.slug}.mp4`}
                  aria-label={v.title}
                />
                <div className="video-card-body">
                  <p className="video-card-top">
                    <span className="cat-chip" style={{ background: cat.chipBg, color: cat.chipInk }}>{v.topic}</span>
                    <span className="video-meta">{fmtDuration(v.durationSec)} · {fmtDate(v.date)}</span>
                  </p>
                  <h3>{v.title}</h3>
                  <Link className="video-guide-link" href={`/post/${v.articleSlug}`}>
                    Read the step-by-step guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <p className="videos-note">
        New project videos land here through the week. Follow us on Pinterest to catch each
        one the day it drops.
      </p>
    </div>
  );
}
