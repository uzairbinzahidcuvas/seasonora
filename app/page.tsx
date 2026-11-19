import Link from "next/link";
import Visual from "@/components/Visual";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Newsletter from "@/components/Newsletter";
import { POSTS, catBySlug, fmtDate } from "@/lib/posts";

const SEASONS = [
  { name: "Spring", cls: "spring", blurb: "Fresh decor, Easter tables and garden beginnings." },
  { name: "Summer", cls: "summer", blurb: "Outdoor gatherings, easy drinks and light living." },
  { name: "Fall", cls: "fall", blurb: "Cosy home refreshes, harvest tables and Halloween." },
  { name: "Winter", cls: "winter", blurb: "Christmas, candlelight and comfortable rooms." },
];
const OCCASIONS = [
  { name: "Christmas", href: "/holidays", blurb: "Decor, cookies, crafts and hosting." },
  { name: "Thanksgiving & Friendsgiving", href: "/holidays", blurb: "Tables, menus and potluck plans." },
  { name: "Halloween", href: "/holidays", blurb: "Party ideas and playful decor." },
  { name: "Easter", href: "/seasonal-living", blurb: "Spring tables, baskets and brunch." },
  { name: "Valentine's Day", href: "/lifestyle", blurb: "At-home date nights and table ideas." },
  { name: "New Year's Eve", href: "/holidays", blurb: "Themes, food timing and countdowns." },
];

export default function Home() {
  const [hero, ...rest] = POSTS;
  const grid = rest.slice(0, 6);
  const recipes = POSTS.filter((p) => p.category === "food-recipes");
  const diy = POSTS.filter((p) => p.category === "diy-crafts");
  const latest = [...POSTS].slice(0, 3);
  const heroCat = catBySlug(hero.category);
  return (
    <div className="wrap">
      <div className="layout">
        <div>
          <article className="card hero-card">
            <Link href={`/post/${hero.slug}`} className="thumb" aria-label={hero.title}>{hero.hero ? <img className="visual visual-lg visual-img" src={hero.hero.src} alt={hero.hero.alt} /> : <Visual post={hero} large />}</Link>
            <div className="hero-body">
              <Link className="cat-chip" style={{ background: `linear-gradient(135deg, ${heroCat.from}, ${heroCat.to})` }} href={`/${heroCat.slug}`}>{heroCat.name}</Link>
              <h2><Link href={`/post/${hero.slug}`}>{hero.title}</Link></h2>
              <p className="excerpt" style={{ WebkitLineClamp: 3 }}>{hero.excerpt}</p>
              <p className="meta">{fmtDate(hero.date)} · {hero.readTime} min read</p>
            </div>
          </article>
          <div className="grid-2">{grid.map((p) => <PostCard key={p.slug} post={p} />)}</div>
          <p className="load-more"><Link href="/holidays">Load More Ideas</Link></p>
        </div>
        <Sidebar />
      </div>

      <section aria-labelledby="by-season">
        <div className="section-head"><h2 id="by-season">Explore by Season</h2><Link href="/seasonal-living">Seasonal Living →</Link></div>
        <div className="tile-grid">
          {SEASONS.map((s) => (
            <Link key={s.name} href="/seasonal-living" className={`tile ${s.cls}`}><h3>{s.name}</h3><p>{s.blurb}</p></Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="by-occasion">
        <div className="section-head"><h2 id="by-occasion">Explore by Occasion</h2><Link href="/holidays">All Holidays →</Link></div>
        <div className="tile-grid six">
          {OCCASIONS.map((o) => (
            <Link key={o.name} href={o.href} className="tile occ"><h3>{o.name}</h3><p>{o.blurb}</p></Link>
          ))}
        </div>
      </section>

      {recipes.length > 0 && (
        <section aria-labelledby="recipes-strip">
          <div className="section-head"><h2 id="recipes-strip">Recipes &amp; Food</h2><Link href="/food-recipes">More Recipes →</Link></div>
          <div className="strip-3">{recipes.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        </section>
      )}

      {diy.length > 0 && (
        <section aria-labelledby="diy-strip">
          <div className="section-head"><h2 id="diy-strip">DIY &amp; Creative Ideas</h2><Link href="/diy-crafts">More DIY →</Link></div>
          <div className="strip-3">{diy.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        </section>
      )}

      <section aria-labelledby="latest">
        <div className="section-head"><h2 id="latest">Latest Articles</h2></div>
        <div className="strip-3">{latest.map((p) => <PostCard key={p.slug} post={p} />)}</div>
      </section>

      <Newsletter />
    </div>
  );
}
