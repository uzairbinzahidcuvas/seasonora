"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { fmtDate } from "@/lib/posts";
import { fmtDuration, type VideoEntry } from "@/lib/videos";

export type GalleryCat = { slug: string; nav: string; chipBg: string; chipInk: string };

const PAGE_SIZE = 8;

// Short filter labels in the order they appear as pills.
const SHORT: Record<string, string> = {
  "home-decor": "Decor",
  "food-recipes": "Recipes",
  "diy-crafts": "DIY & Crafts",
  "holidays": "Holidays",
  "lifestyle": "Lifestyle",
  "seasonal-living": "Seasonal Living",
};
const ORDER = ["home-decor", "food-recipes", "diy-crafts", "holidays", "lifestyle", "seasonal-living"];

function VideoCard({ v, cat, registerVideo, onPlay }: {
  v: VideoEntry;
  cat?: GalleryCat;
  registerVideo: (slug: string, el: HTMLVideoElement | null) => void;
  onPlay: (slug: string) => void;
}) {
  const [started, setStarted] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const start = () => {
    const el = videoRef.current;
    if (!el) return;
    onPlay(v.slug);
    setWaiting(true);
    el.play().catch(() => setWaiting(false));
  };

  return (
    <article className="vcard">
      <div className="vcard-media">
        <video
          ref={(el) => { videoRef.current = el; registerVideo(v.slug, el); }}
          src={`/videos/${v.slug}.mp4`}
          poster={v.poster}
          preload="none"
          playsInline
          controls={started}
          aria-label={v.title}
          onPlaying={() => { setStarted(true); setWaiting(false); }}
          onPlay={() => onPlay(v.slug)}
          onPause={() => { if (videoRef.current?.ended) setStarted(false); }}
          onEnded={() => setStarted(false)}
        />
        {cat && (
          <span className="vcard-cat" style={{ background: cat.chipBg, color: cat.chipInk }}>{SHORT[cat.slug] ?? cat.nav}</span>
        )}
        <span className="vcard-dur" aria-hidden="true">{fmtDuration(v.durationSec)}</span>
        {!started && (
          <button type="button" className="vcard-play" onClick={start} aria-label={`Play video: ${v.title}`}>
            {waiting ? <span className="vcard-spinner" aria-hidden="true" /> : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
            )}
          </button>
        )}
      </div>
      <div className="vcard-body">
        <h3>{v.title}</h3>
        <p className="vcard-desc">{v.description}</p>
        <p className="vcard-meta">{v.topic} · {fmtDate(v.date)}</p>
        <Link className="vcard-more" href={`/post/${v.articleSlug}`}>Read More <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

export default function VideosGallery({ videos, cats }: { videos: VideoEntry[]; cats: GalleryCat[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [shown, setShown] = useState(PAGE_SIZE);
  const players = useRef(new Map<string, HTMLVideoElement>());

  const registerVideo = (slug: string, el: HTMLVideoElement | null) => {
    if (el) players.current.set(slug, el); else players.current.delete(slug);
  };
  const pauseOthers = (slug: string) => {
    players.current.forEach((el, key) => { if (key !== slug && !el.paused) el.pause(); });
  };
  const pick = (f: string) => { setFilter(f); setShown(PAGE_SIZE); };

  const filtered = filter === "all" ? videos : videos.filter((v) => v.category === filter);
  const visible = filtered.slice(0, shown);
  const catOf = (slug: string) => cats.find((c) => c.slug === slug);

  return (
    <>
      <div className="fpills" role="group" aria-label="Filter videos by category">
        <button type="button" className={`fpill${filter === "all" ? " active" : ""}`} aria-pressed={filter === "all"} onClick={() => pick("all")}>All Videos</button>
        {[...cats].sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug)).map((c) => (
          <button key={c.slug} type="button" className={`fpill${filter === c.slug ? " active" : ""}`} aria-pressed={filter === c.slug} onClick={() => pick(c.slug)}>{SHORT[c.slug] ?? c.nav}</button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="vempty">
          <p className="vempty-title">No videos in this category yet</p>
          <p>We add new project videos every week — the first ones here are on their way. Meanwhile, take a look at everything we have published so far.</p>
          <button type="button" className="vcard-more vempty-btn" onClick={() => pick("all")}>View All Videos</button>
        </div>
      ) : (
        <>
          <div className="vgallery">
            {visible.map((v) => (
              <VideoCard key={v.slug} v={v} cat={catOf(v.category)} registerVideo={registerVideo} onPlay={pauseOthers} />
            ))}
          </div>
          {shown < filtered.length && (
            <div className="vmore">
              <button type="button" className="vmore-btn" onClick={() => setShown(shown + PAGE_SIZE)}>Load More Videos</button>
              <p className="vmore-note">Showing {visible.length} of {filtered.length} videos</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
