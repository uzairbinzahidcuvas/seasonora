"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { NAV, PINTEREST_URL } from "@/lib/config";
import { POSTS } from "@/lib/posts";
import { PinterestIcon } from "./SocialIcons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const pathname = usePathname() || "/";
  const postCat = pathname.startsWith("/post/")
    ? POSTS.find((p) => p.slug === pathname.split("/")[2])?.category
    : undefined;
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (pathname === href || pathname.startsWith(href + "/")) return true;
    return postCat !== undefined && href === `/${postCat}`;
  };
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`); };

  return (
    <>
      <header className="site-header">
        <div className="wrap header-in">
          <button className="icon-btn only-mobile" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>☰</button>
          <Link href="/" className="logo" aria-label="Seasonora — home">
            <Image src="/logo.png" alt="Seasonora — Make Every Season Special" width={340} height={110} priority />
          </Link>
          <nav className="nav-in" aria-label="Main navigation">
            {NAV.map((n) => <Link key={n.href} href={n.href} className={isActive(n.href) ? "active" : undefined} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}</Link>)}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg>
            </button>
            <a className="btn-follow" href={PINTEREST_URL} target="_blank" rel="noreferrer" aria-label="Follow Seasonora on Pinterest"><PinterestIcon size={17} /><span>Follow on Pinterest</span></a>
          </div>
        </div>
        {searchOpen && (
          <form className="search-bar wrap" onSubmit={submit} role="search">
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search decor, recipes, DIY ideas…" aria-label="Search articles" />
            <button type="submit">Search</button>
          </form>
        )}
      </header>

      <div className={`drawer-scrim ${open ? "show" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={`drawer ${open ? "show" : ""}`} aria-label="Mobile menu">
        <button className="icon-btn drawer-x" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        <Image src="/logo.png" alt="Seasonora" width={200} height={65} />
        <p className="drawer-tag">Make Every Season Special.</p>
        {NAV.map((n) => <Link key={n.href} href={n.href} className={isActive(n.href) ? "active" : undefined} onClick={() => setOpen(false)}>{n.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <a className="btn-follow drawer-follow" href={PINTEREST_URL} target="_blank" rel="noreferrer"><PinterestIcon size={17} /> Follow on Pinterest</a>
      </aside>
    </>
  );
}
