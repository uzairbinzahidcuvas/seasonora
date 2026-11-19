import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Visual from "@/components/Visual";
import PostCard from "@/components/PostCard";
import ShareRow from "@/components/ShareRow";
import Sidebar from "@/components/Sidebar";
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
    openGraph: { type: "article", title: post.title, description: post.excerpt, url: `/post/${post.slug}`, publishedTime: post.date, images: [post.hero?.src ?? "/logo.png"] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.hero?.src ?? "/logo.png"] },
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
        mainEntityOfPage: url, image: post.hero ? `${SITE_URL}${post.hero.src}` : `${SITE_URL}/logo.png`,
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
      <div className="layout">
      <div>
      <article className="article">
        <p className="article-cat"><Link className="cat-chip" style={{ background: cat.chipBg, color: cat.chipInk }} href={`/${cat.slug}`}>{cat.name}</Link><span className="subcat">{post.subcategory}</span></p>
        <h1>{post.title}</h1>
        <p className="meta">By Seasonora Editorial · {fmtDate(post.date)} · {post.readTime} min read</p>
        <div className="hero-visual">{post.hero ? <img className="visual visual-lg visual-img" src={post.hero.src} alt={post.hero.alt} /> : <Visual post={post} large />}</div>
        <p>{post.intro}</p>

        <nav className="toc" aria-label="Table of contents">
          <h2>In this guide</h2>
          <ol>{post.sections.map((s) => <li key={s.heading}><a href={`#${anchor(s.heading)}`}>{s.heading}</a></li>)}
            <li><a href="#faq">Frequently asked questions</a></li></ol>
        </nav>

        {post.sections.map((s, si) => {
          let h3n = 0;
          return (
            <section key={s.heading}>
              <h2 id={anchor(s.heading)}>{si + 1}. {s.heading}</h2>
              {s.blocks.map((b, bi) => {
                if (b.t === "p") return <p key={bi}>{b.text}</p>;
                if (b.t === "h3") { h3n += 1; return <h3 key={bi}>{si + 1}.{h3n} {b.text}</h3>; }
                if (b.t === "ul") return <ul key={bi} className="art-list">{b.items.map((it, ii) => <li key={ii}>{it}</li>)}</ul>;
                return <ol key={bi} className="art-list art-ol">{b.items.map((it, ii) => <li key={ii}>{it}</li>)}</ol>;
              })}
              {(post.images ?? []).filter((im) => im.after === si).map((im) => (
                <figure className="article-figure" key={im.img.src}>
                  <img className="article-img" src={im.img.src} alt={im.img.alt} loading="lazy" />
                  {im.img.caption && <figcaption>{im.img.caption}</figcaption>}
                </figure>
              ))}
            </section>
          );
        })}

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
            <p>We write Seasonora for readers in the US, UK and Canada who love the seasons — decor, celebrations, recipes and DIY, explained plainly. Every guide is read and checked before it goes live.</p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-h">
          <div className="section-head"><h2 id="related-h">You May Also Like</h2></div>
          <div className="related">{related.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        </section>
      )}
      </div>
      <Sidebar exclude={post.slug} />
      </div>
    </div>
  );
}
