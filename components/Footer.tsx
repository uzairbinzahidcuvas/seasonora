import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/posts";
import { PINTEREST_URL, FACEBOOK_URL, TAGLINE } from "@/lib/config";
import { PinterestIcon, FacebookIcon, RssIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-about">
          <Image src="/logo.png" alt="Seasonora logo" width={250} height={81} />
          <p>Seasonora shares thoughtful seasonal inspiration for home, celebrations, food, DIY and everyday living — helping readers make every season feel special.</p>
          <p className="footer-social">
            <a href={PINTEREST_URL} target="_blank" rel="noreferrer"><PinterestIcon size={16} /> Pinterest</a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer"><FacebookIcon size={16} /> Facebook</a>
            <a href="/feed.xml"><RssIcon size={16} /> RSS</a>
          </p>
        </div>
        <nav aria-label="Categories">
          <h3>Explore</h3>
          {CATEGORIES.map((c) => <Link key={c.slug} href={`/${c.slug}`}>{c.name}</Link>)}
        </nav>
        <nav aria-label="Seasonora pages">
          <h3>Seasonora</h3>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/search">Search</Link>
        </nav>
        <nav aria-label="Legal pages">
          <h3>Good to Know</h3>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </nav>
      </div>
      <div className="footer-menu wrap">
        <Link href="/">Home</Link><Link href="/seasonal-living">Seasonal Living</Link><Link href="/holidays">Holidays</Link>
        <Link href="/home-decor">Home &amp; Decor</Link><Link href="/food-recipes">Food &amp; Recipes</Link>
        <Link href="/diy-crafts">DIY &amp; Crafts</Link><Link href="/lifestyle">Lifestyle</Link>
      </div>
      <div className="copyright"><div className="wrap">© {new Date().getFullYear()} Seasonora · {TAGLINE} All rights reserved.</div></div>
    </footer>
  );
}
