"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { catBySlug, fmtDate, type Post } from "@/lib/posts";

/**
 * Full-bleed hero slider: the latest posts appear here automatically —
 * each slide is the post's own photo with its title and excerpt overlaid.
 */
export default function HeroSlider({ posts }: { posts: Post[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = posts.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (n < 2 || paused) return;
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [n, paused]);

  if (n === 0) return null;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <section className="hero2" aria-label="Featured stories"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      {posts.map((p, idx) => {
        const cat = catBySlug(p.category);
        const active = idx === i;
        return (
          <div key={p.slug} className={`hero2-slide ${active ? "active" : ""}`} aria-hidden={!active}>
            {p.hero && <img className="hero2-img" src={p.hero.src} alt={active ? p.hero.alt : ""} />}
            <div className="hero2-shade" aria-hidden="true" />
            <div className="hero2-content">
              <Link className="cat-chip" style={{ background: cat.chipBg, color: cat.chipInk }} href={`/${cat.slug}`} tabIndex={active ? 0 : -1}>{cat.name}</Link>
              <h2><Link href={`/post/${p.slug}`} tabIndex={active ? 0 : -1}>{p.title}</Link></h2>
              <p className="hero2-excerpt">{p.excerpt}</p>
              <p className="hero2-meta">{fmtDate(p.date)} · {p.readTime} min read</p>
              <Link className="btn-green" href={`/post/${p.slug}`} tabIndex={active ? 0 : -1}>Read the Guide <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        );
      })}
      {n > 1 && (
        <>
          <div className="hero2-dots" role="tablist" aria-label="Choose slide">
            {posts.map((p, idx) => (
              <button key={p.slug} className={idx === i ? "active" : ""} aria-label={`Show: ${p.title}`} aria-current={idx === i} onClick={() => setI(idx)} />
            ))}
          </div>
          <div className="hero2-nav">
            <button aria-label="Previous slide" onClick={() => go(-1)}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><polyline points="14.5 5 7.5 12 14.5 19" /></svg>
            </button>
            <button aria-label="Next slide" onClick={() => go(1)}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><polyline points="9.5 5 16.5 12 9.5 19" /></svg>
            </button>
          </div>
        </>
      )}
    </section>
  );
}
