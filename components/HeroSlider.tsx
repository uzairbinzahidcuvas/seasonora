"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Visual from "./Visual";
import { catBySlug, fmtDate, type Post } from "@/lib/posts";

export default function HeroSlider({ posts }: { posts: Post[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const n = posts.length;
  const go = useCallback((i: number) => setIdx(((i % n) + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    timer.current = setInterval(() => setIdx((v) => (v + 1) % n), 6500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [paused, n]);

  if (n === 0) return null;
  return (
    <div className="hero-slider" role="region" aria-roledescription="carousel" aria-label="Featured articles"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      {posts.map((post, i) => {
        const cat = catBySlug(post.category);
        const active = i === idx;
        return (
          <article key={post.slug} className={`hero-slide ${active ? "active" : ""}`} aria-hidden={!active}>
            <Link href={`/post/${post.slug}`} className="hero-media" aria-label={post.title} tabIndex={active ? 0 : -1}>
              {post.hero ? <img src={post.hero.src} alt={post.hero.alt} /> : <Visual post={post} large />}
            </Link>
            <div className="hero-shade" aria-hidden="true" />
            <div className="hero-content">
              <div className="hero-kicker">
                <span className="hero-featured">Featured</span>
                <Link className="cat-chip" style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})` }} href={`/${cat.slug}`} tabIndex={active ? 0 : -1}>{cat.name}</Link>
              </div>
              <h2><Link href={`/post/${post.slug}`} tabIndex={active ? 0 : -1}>{post.title}</Link></h2>
              <p className="hero-excerpt">{post.excerpt}</p>
              <p className="hero-meta"><span className="avatar" aria-hidden="true">S</span> Seasonora · {fmtDate(post.date)} · {post.readTime} min read</p>
            </div>
          </article>
        );
      })}
      {n > 1 && (
        <>
          <div className="hero-dots" role="tablist" aria-label="Choose featured article">
            {posts.map((p, i) => (
              <button key={p.slug} className={i === idx ? "active" : ""} aria-label={`Show: ${p.title}`} aria-selected={i === idx} role="tab" onClick={() => go(i)} />
            ))}
          </div>
          <div className="hero-nav">
            <button aria-label="Previous article" onClick={() => go(idx - 1)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="20" y1="12" x2="4" y2="12" /><polyline points="11 5 4 12 11 19" /></svg>
            </button>
            <button aria-label="Next article" onClick={() => go(idx + 1)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" y1="12" x2="20" y2="12" /><polyline points="13 5 20 12 13 19" /></svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
