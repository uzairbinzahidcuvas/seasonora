import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import Visual from "./Visual";
import { CATEGORIES, POSTS, TAGS, popularPosts, fmtDate } from "@/lib/posts";
import { PINTEREST_URL, FACEBOOK_URL } from "@/lib/config";
import { PinterestIcon, FacebookIcon, RssIcon, MailIcon } from "./SocialIcons";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="card side-box about-box">
        <Image src="/logo.png" alt="Seasonora" width={190} height={62} />
        <p>Decor, holiday ideas, easy recipes and DIY projects for every season — made for real homes.</p>
        <div className="social-grid">
          <a href={PINTEREST_URL} target="_blank" rel="noreferrer" aria-label="Pinterest"><PinterestIcon size={17} /> Pinterest</a>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon size={17} /> Facebook</a>
          <a href="/feed.xml" aria-label="RSS feed"><RssIcon size={17} /> RSS Feed</a>
          <Link href="/contact" aria-label="Contact Seasonora"><MailIcon size={17} /> Contact</Link>
        </div>
      </section>

      <section className="card side-box">
        <h3 className="side-title">Popular Posts</h3>
        {popularPosts.map((p) => (
          <Link key={p.slug} href={`/post/${p.slug}`} className="mini-post">
            <span className="mini-thumb">{p.hero ? <img src={p.hero.src} alt="" loading="lazy" /> : <Visual post={p} />}</span>
            <span><strong>{p.title}</strong><small>{fmtDate(p.date)}</small></span>
          </Link>
        ))}
      </section>

      <section className="card side-box nl-wrap"><Newsletter compact /></section>

      <section className="card side-box">
        <h3 className="side-title">Categories</h3>
        <ul className="cat-list">
          {CATEGORIES.map((c) => (
            <li key={c.slug}><Link href={`/${c.slug}`}><i className="cat-dot" style={{ background: c.to }} />{c.name}</Link>
              <span>{POSTS.filter((p) => p.category === c.slug).length}</span></li>
          ))}
        </ul>
      </section>

      <section className="card side-box">
        <h3 className="side-title">Tags</h3>
        <div className="tags">{TAGS.map((t) => <Link key={t} href={`/search?q=${encodeURIComponent(t.split(" ")[0])}`}>{t}</Link>)}</div>
      </section>
    </aside>
  );
}
