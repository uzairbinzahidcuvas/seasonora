import Link from "next/link";
import Image from "next/image";
import { PINTEREST_URL, FACEBOOK_URL, TAGLINE } from "@/lib/config";
import { PinterestIcon, FacebookIcon, RssIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <Image src="/logo.png" alt="Seasonora logo" width={230} height={75} />
            <p>Your destination for seasonal inspiration, creative ideas and everyday lifestyle discoveries — decor that fits real homes, recipes that work first time, and celebrations without the stress.</p>
            <p className="footer-social">
              <a href={PINTEREST_URL} target="_blank" rel="noreferrer" aria-label="Seasonora on Pinterest"><PinterestIcon size={17} /></a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Seasonora on Facebook"><FacebookIcon size={17} /></a>
              <a href="/feed.xml" aria-label="Seasonora RSS feed"><RssIcon size={17} /></a>
            </p>
          </div>
          <nav aria-label="Explore">
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            <Link href="/home-decor">Decor</Link>
            <Link href="/food-recipes">Recipes</Link>
            <Link href="/diy-crafts">DIY &amp; Crafts</Link>
            <Link href="/holidays">Holidays</Link>
            <Link href="/lifestyle">Lifestyle</Link>
            <Link href="/seasonal-living">Seasonal Living</Link>
          </nav>
          <nav aria-label="Company">
            <h3>Company</h3>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Work With Us</Link>
            <Link href="/editorial-policy">Editorial Policy</Link>
            <Link href="/search">Search</Link>
          </nav>
          <nav aria-label="Information">
            <h3>Information</h3>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Seasonora. All rights reserved.</span>
          <span className="footer-tagline">{TAGLINE} <span aria-hidden="true" className="heart">♥</span></span>
        </div>
      </div>
    </footer>
  );
}
