import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "./PostCard";
import Sidebar from "./Sidebar";
import { catBySlug, postsByCategory, POSTS } from "@/lib/posts";
import { SITE_URL } from "@/lib/config";

export function categoryMetadata(slug: string): Metadata {
  const c = catBySlug(slug);
  return {
    title: c.name,
    description: c.intro.slice(0, 155) + "…",
    alternates: { canonical: `/${slug}` },
    openGraph: { title: `${c.name} | Seasonora`, description: c.intro.slice(0, 155) + "…", url: `/${slug}`, images: ["/logo.png"] },
    twitter: { card: "summary_large_image", title: `${c.name} | Seasonora`, images: ["/logo.png"] },
  };
}

export default function CategoryPage({ slug }: { slug: string }) {
  const c = catBySlug(slug);
  const posts = postsByCategory(slug);
  const fill = POSTS.filter((p) => p.category !== slug).slice(0, Math.max(0, 4 - posts.length));
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: c.name, item: `${SITE_URL}/${slug}` },
      ]},
      { "@type": "ItemList", name: `${c.name} articles`,
        itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/post/${p.slug}`, name: p.title })) },
    ],
  };
  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="breadcrumb"><Link href="/">Home</Link> › {c.name}</p>
      <div className="page-head">
        <h1>{c.name}</h1>
        <p>{c.intro}</p>
        <div className="chips">{c.subcategories.map((s) => <span key={s}><Link href={`/search?q=${encodeURIComponent(s.split(" ")[0])}`}>{s}</Link></span>)}</div>
      </div>
      <div className="layout">
        <div>
          {posts.length === 0 && <p>No articles here yet — the first guides for this hub are on the way. Meanwhile, explore these reader favourites:</p>}
          <div className="grid-2">
            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
            {posts.length < 4 && fill.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
