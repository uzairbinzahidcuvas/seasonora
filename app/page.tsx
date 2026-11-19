import Link from "next/link";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { POSTS, catBySlug, fmtDate, type Post } from "@/lib/posts";

const SEASONS = [
  { name: "Spring", sub: "Fresh Beginnings", img: "/img/s-spring", href: "/seasonal-living", accent: "#8FC99A" },
  { name: "Summer", sub: "Bright & Beautiful", img: "/img/s-summer", href: "/seasonal-living", accent: "#75BDEB" },
  { name: "Autumn", sub: "Cozy Moments", img: "/img/s-autumn", href: "/holidays", accent: "#D98268" },
  { name: "Winter", sub: "Warm & Wonderful", img: "/img/s-winter", href: "/home-decor", accent: "#B8D9EA" },
];
const CATS = [
  { name: "Home Decor", img: "/img/s-decor", href: "/home-decor" },
  { name: "Recipes", img: "/img/s-recipes", href: "/food-recipes" },
  { name: "DIY & Crafts", img: "/img/s-diy", href: "/diy-crafts" },
  { name: "Holidays", img: "/img/s-holidays", href: "/holidays" },
  { name: "Lifestyle", img: "/img/s-lifestyle", href: "/lifestyle" },
];

function SecHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="sec-head-c">
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

function PickSmall({ post }: { post: Post }) {
  const cat = catBySlug(post.category);
  return (
    <article className="pick-small">
      <Link href={`/post/${post.slug}`} className="pick-small-img">{post.hero && <img src={post.hero.src} alt={post.hero.alt} loading="lazy" />}</Link>
      <div>
        <Link className="cat-chip" style={{ background: cat.chipBg, color: cat.chipInk }} href={`/${cat.slug}`}>{cat.name}</Link>
        <h3><Link href={`/post/${post.slug}`}>{post.title}</Link></h3>
        <p className="card-meta">{fmtDate(post.date)} · {post.readTime} min read</p>
      </div>
    </article>
  );
}

export default function Home() {
  const picks = POSTS.slice(0, 3);
  const featured = picks[0];
  const latest = POSTS.slice(3, 11);
  const guides = POSTS.slice(0, 4);
  const fcat = featured ? catBySlug(featured.category) : null;

  return (
    <>
      {/* Section 3 — Hero */}
      <section className="hero-split">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="kicker-pill">Inspired by Every Season</p>
            <h1>Make Every Season a Little More Beautiful.</h1>
            <p className="hero-desc">Discover fresh ideas, thoughtful inspiration and simple ways to make everyday living more special, whatever the season.</p>
            <p className="hero-ctas">
              <Link className="btn-green" href="/seasonal-living">Explore Inspiration <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href="#handpicked">Discover Our Stories</Link>
            </p>
          </div>
          <div className="hero-photo">
            <img src="/img/s-hero" alt="A bright, sunlit apartment living space styled for the season" />
          </div>
        </div>
      </section>

      <div className="wrap">
        {/* Section 4 — Seasonal Inspiration */}
        <section aria-labelledby="seasons-h">
          <SecHead title="Find Your Season of Inspiration" sub="From fresh spring moments to cozy winter days, discover ideas that make every season special." />
          <div className="season-grid">
            {SEASONS.map((s) => (
              <Link key={s.name} href={s.href} className="season-tile">
                <img src={s.img} alt={`${s.name} inspiration`} loading="lazy" />
                <span className="season-shade" aria-hidden="true" />
                <span className="season-text">
                  <strong>{s.name}</strong>
                  <small>{s.sub} <span aria-hidden="true">→</span></small>
                  <i style={{ background: s.accent }} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 5 — Categories */}
        <section id="categories" aria-labelledby="cats-h">
          <SecHead title="Explore What Inspires You" sub="A little inspiration for every corner of your life." />
          <div className="cat5-grid">
            {CATS.map((c) => (
              <Link key={c.name} href={c.href} className="cat5-tile">
                <img src={c.img} alt={c.name} loading="lazy" />
                <span className="cat5-label">{c.name} <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 6 — Editor's Picks */}
        {featured && fcat && (
          <section id="handpicked" aria-labelledby="picks-h">
            <div className="picks-grid">
              <div className="picks-intro">
                <h2 id="picks-h">Handpicked for You</h2>
                <p>Thoughtful ideas, creative projects and seasonal inspiration, chosen just for you.</p>
                <Link className="btn-green" href="/home-decor">Explore More <span aria-hidden="true">→</span></Link>
              </div>
              <article className="pick-feature">
                <Link href={`/post/${featured.slug}`} className="pick-feature-img">{featured.hero && <img src={featured.hero.src} alt={featured.hero.alt} />}</Link>
                <Link className="cat-chip" style={{ background: fcat.chipBg, color: fcat.chipInk }} href={`/${fcat.slug}`}>{fcat.name}</Link>
                <h3><Link href={`/post/${featured.slug}`}>{featured.title}</Link></h3>
                <p className="excerpt">{featured.excerpt}</p>
                <p className="card-meta">{fmtDate(featured.date)} · {featured.readTime} min read</p>
              </article>
              <div className="picks-side">
                {picks.slice(1).map((p) => <PickSmall key={p.slug} post={p} />)}
              </div>
            </div>
          </section>
        )}

        {/* Section 7 — Latest Stories */}
        {latest.length > 0 && (
          <section id="latest" aria-labelledby="latest-h">
            <SecHead title="Fresh From Seasonora" sub="Explore our latest ideas, guides and inspiration." />
            <div className="grid-4">{latest.map((p) => <PostCard key={p.slug} post={p} />)}</div>
            {POSTS.length > 11 && <p className="load-more"><Link href="/search">View All Stories</Link></p>}
          </section>
        )}
      </div>

      {/* Section 8 — Seasonal Feature Story */}
      <section className="feature-band" aria-labelledby="feature-h">
        <div className="wrap feature-in">
          <div className="feature-photo"><img src="/img/s-feature" alt="Cooking together in a warm, seasonal kitchen" loading="lazy" /></div>
          <div className="feature-copy">
            <p className="kicker-pill">Seasonal Feature</p>
            <h2 id="feature-h">Little Things That Make Every Season Special</h2>
            <p>Explore thoughtful ideas, simple projects and beautiful details that bring more joy to everyday life — a recipe cooked together, a table set with care, a corner that finally feels finished.</p>
            <Link className="btn-green" href="/seasonal-living">Start Exploring <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        {/* Section 9 — Popular Guides */}
        {guides.length > 0 && (
          <section aria-labelledby="guides-h">
            <SecHead title="Explore Our Favorite Guides" sub="The guides readers come back to, season after season." />
            <div className="guide-rows">
              {guides.map((p) => {
                const cat = catBySlug(p.category);
                return (
                  <article key={p.slug} className="guide-row">
                    <Link href={`/post/${p.slug}`} className="guide-img">{p.hero && <img src={p.hero.src} alt={p.hero.alt} loading="lazy" />}</Link>
                    <div>
                      <Link className="cat-chip" style={{ background: cat.chipBg, color: cat.chipInk }} href={`/${cat.slug}`}>{cat.name}</Link>
                      <h3><Link href={`/post/${p.slug}`}>{p.title}</Link></h3>
                      <p className="card-meta">{fmtDate(p.date)} · {p.readTime} min read</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 10 — Newsletter */}
        <Newsletter />

        {/* Section 11 — About Seasonora */}
        <section className="about-band" aria-labelledby="about-h">
          <div className="about-photo"><img src="/img/s-about" alt="Gardening tools and fresh soil, ready for the season" loading="lazy" /></div>
          <div className="about-copy">
            <p className="kicker-text">About Seasonora</p>
            <h2 id="about-h">Life Is Better With a Little Inspiration.</h2>
            <p>Seasonora is your destination for seasonal inspiration, creative ideas and everyday lifestyle discoveries. From beautiful spaces to thoughtful celebrations, we&apos;re here to make every season special.</p>
            <Link className="text-link" href="/about">Discover Our Story <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </div>
    </>
  );
}
