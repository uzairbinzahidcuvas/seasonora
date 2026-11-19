import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Visual from "@/components/Visual";
import PostCard from "@/components/PostCard";
import ShareRow from "@/components/ShareRow";
import { POSTS, postBySlug, catBySlug, relatedPosts, fmtDate } from "@/lib/posts";
import { SITE_URL, SITE_NAME, PINTEREST_URL } from "@/lib/config";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/post/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/post/${post.slug}`, publishedTime: post.date, images: ["/logo.png"] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: ["/logo.png"] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const cat = catBySlug(post.category);
  const related = relatedPosts(post);
  const url = `${SITE_URL}/post/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", headline: post.title, description: post.excerpt, datePublished: post.date,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
        mainEntityOfPage: url, image: `${SITE_URL}/logo.png`,
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: cat.name, item: `${SITE_URL}/${cat.slug}` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ]},
    ],
  };
  const anchor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="breadcrumb"><Link href="/">Home</Link> › <Link href={`/${cat.slug}`}>{cat.name}</Link> › {post.title}</p>
      <article className="article">
        <p className="article-cat"><Link className="cat-chip" style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})` }} href={`/${cat.slug}`}>{cat.name}</Link><span className="subcat">{post.subcategory}</span></p>
        <h1>{post.title}</h1>
        <p className="meta">By Seasonora Editorial · {fmtDate(post.date)} · {post.readTime} min read</p>
        <div className="hero-visual"><Visual post={post} large /></div>
        <p>{post.intro}</p>

        <nav className="toc" aria-label="Table of contents">
          <h2>In this guide</h2>
          <ol>{post.sections.map((s) => <li key={s.heading}><a href={`#${anchor(s.heading)}`}>{s.heading}</a></li>)}
            <li><a href="#faq">Frequently asked questions</a></li></ol>
        </nav>

        {post.sections.map((s) => (
          <section key={s.heading}>
            <h2 id={anchor(s.heading)}>{s.heading}</h2>
            {s.body.map((para, i) => <p key={i}>{para}</p>)}
          </section>
        ))}

        <section className="faq">
          <h2 id="faq">Frequently asked questions</h2>
          {post.faqs.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </section>

        <ShareRow slug={post.slug} title={post.title} />

        <div className="pin-box">
          <div>
            <h3>Pin this idea for later</h3>
            <p>Save “{post.title}” to your seasonal board and find it again when you are ready to start.</p>
          </div>
          <a target="_blank" rel="noreferrer"
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(post.title + " — " + post.excerpt)}`}>
            Save on Pinterest
          </a>
        </div>
        <p className="meta">Follow us on <a href={PINTEREST_URL} target="_blank" rel="noreferrer">Pinterest @seasonoraofficial</a> for a fresh pin for every new guide.</p>

        <div className="author-box">
          <span className="author-avatar" aria-hidden="true">S</span>
          <div>
            <strong>Seasonora Editorial</strong>
            <p>Seasonora is a seasonal lifestyle publication sharing practical decor, celebration, recipe and DIY ideas for readers in the US, UK and Canada. Every guide is edited against our editorial policy before it is published.</p>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-h">
        <div className="section-head"><h2 id="related-h">You May Also Like</h2></div>
        <div className="related">{related.map((p) => <PostCard key={p.slug} post={p} />)}</div>
      </section>
    </div>
  );
}
