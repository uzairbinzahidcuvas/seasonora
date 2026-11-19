"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PostCard from "@/components/PostCard";
import { POSTS, catBySlug } from "@/lib/posts";

function SearchInner() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") ?? "");
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return POSTS;
    return POSTS.filter((p) =>
      [p.title, p.excerpt, p.subcategory, catBySlug(p.category).name, p.intro]
        .join(" ").toLowerCase().includes(needle));
  }, [q]);
  return (
    <div className="wrap">
      <div className="page-head"><h1>Search Seasonora</h1>
      <p>Search seasonal decor, holiday ideas, recipes and DIY projects.</p></div>
      <input className="search-input" value={q} onChange={(e) => setQ(e.target.value)}
        placeholder="Try “christmas”, “cookies”, “window painting”…" aria-label="Search articles" />
      <p className="meta" role="status">{q.trim() ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q}”` : "Showing all articles — start typing to filter."}</p>
      {results.length === 0 ? (
        <div className="prose"><h2>No matches yet</h2>
        <p>We could not find an article for that search yet. Try a shorter word — for example “christmas”, “table” or “winter” — or browse the categories in the menu.</p></div>
      ) : (
        <div className="search-results"><div className="grid-2">{results.map((p) => <PostCard key={p.slug} post={p} />)}</div></div>
      )}
    </div>
  );
}
export default function Page() {
  return <Suspense fallback={<div className="wrap"><p>Loading search…</p></div>}><SearchInner /></Suspense>;
}
