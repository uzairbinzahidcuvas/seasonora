import Link from "next/link";
import PostCard from "@/components/PostCard";
import HeroSlider from "@/components/HeroSlider";
import { POSTS, type Post } from "@/lib/posts";

const SEASONS = [
  { name: "Spring", cls: "spring", cat: "seasonal-living", href: "/seasonal-living", blurb: "Fresh decor, Easter tables and garden beginnings." },
  { name: "Summer", cls: "summer", cat: "seasonal-living", href: "/seasonal-living", blurb: "Outdoor gatherings, easy drinks and light living." },
  { name: "Fall", cls: "fall", cat: "holidays", href: "/seasonal-living", blurb: "Cosy home refreshes, harvest tables and Halloween." },
  { name: "Winter", cls: "winter", cat: "home-decor", href: "/seasonal-living", blurb: "Christmas, candlelight and comfortable rooms." },
];
const OCCASIONS = [
  { name: "Christmas", cat: "holidays", href: "/holidays", blurb: "Decor, cookies, crafts and hosting." },
  { name: "Thanksgiving & Friendsgiving", cat: "holidays", href: "/holidays", blurb: "Tables, menus and potluck plans." },
  { name: "Halloween", cat: "holidays", href: "/holidays", blurb: "Party ideas and playful decor." },
  { name: "Easter", cat: "seasonal-living", href: "/seasonal-living", blurb: "Spring tables, baskets and brunch." },
  { name: "Valentine's Day", cat: "lifestyle", href: "/lifestyle", blurb: "At-home date nights and table ideas." },
  { name: "New Year's Eve", cat: "holidays", href: "/holidays", blurb: "Themes, food timing and countdowns." },
];

const latestIn = (slug: string) => POSTS.find((p) => p.category === slug);

function Tile({ name, cls, cat, href, blurb }: { name: string; cls?: string; cat: string; href: string; blurb: string }) {
  const post: Post | undefined = latestIn(cat);
  return (
    <Link href={post ? `/post/${post.slug}` : href} className={`tile ${cls ?? "occ"}`}>
      {post?.hero && (
        <>
          <img className="tile-img" src={post.hero.src} alt="" aria-hidden="true" />
          <span className="tile-shade" aria-hidden="true" />
        </>
      )}
      <span className="tile-text">
        <h3>{name}</h3>
        <p>{post ? post.title : blurb}</p>
        {post && <span className="tile-latest">Latest article →</span>}
      </span>
    </Link>
  );
}

export default function Home() {
  const slides = POSTS.slice(0, 5);
  const recent = POSTS.length > 1 ? POSTS.slice(1, 7) : POSTS.slice(0, 6);
  const recipes = POSTS.filter((p) => p.category === "food-recipes");
  const diy = POSTS.filter((p) => p.category === "diy-crafts");
  return (
    <div className="wrap">
      <h1 className="sr-only">Seasonora — Seasonal Decor, Holiday Ideas, Easy Recipes and DIY Inspiration</h1>
      <HeroSlider posts={slides} />

      {recent.length > 0 && (
        <section aria-labelledby="recent">
          <div className="section-head"><h2 id="recent">Recent blog posts</h2><Link href="/seasonal-living">Seasonal Living →</Link></div>
          <div className="grid-3">{recent.map((p) => <PostCard key={p.slug} post={p} />)}</div>
          <p className="load-more"><a href="#topics">Browse All Topics</a></p>
        </section>
      )}

      <section id="topics" aria-labelledby="by-season">
        <div className="section-head"><h2 id="by-season">Explore by Season</h2><Link href="/seasonal-living">Seasonal Living →</Link></div>
        <div className="tile-grid">
          {SEASONS.map((s) => <Tile key={s.name} name={s.name} cls={s.cls} cat={s.cat} href={s.href} blurb={s.blurb} />)}
        </div>
      </section>

      <section aria-labelledby="by-occasion">
        <div className="section-head"><h2 id="by-occasion">Explore by Occasion</h2><Link href="/holidays">All Holidays →</Link></div>
        <div className="tile-grid six">
          {OCCASIONS.map((o) => <Tile key={o.name} name={o.name} cat={o.cat} href={o.href} blurb={o.blurb} />)}
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
    </div>
  );
}
