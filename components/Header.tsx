"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NAV, PINTEREST_URL, FACEBOOK_URL } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`); };

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span className="topbar-date">{today}</span>
          <span className="topbar-tag">Make Every Season Special.</span>
          <span className="socials" aria-label="Social links">
            <a href={PINTEREST_URL} target="_blank" rel="noreferrer" aria-label="Seasonora on Pinterest">P</a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Seasonora on Facebook">f</a>
            <a href="/feed.xml" aria-label="Seasonora RSS feed">RSS</a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-in">
          <button className="icon-btn only-mobile" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>☰</button>
          <Link href="/" className="logo" aria-label="Seasonora — home">
            <Image src="/logo.png" alt="Seasonora — Make Every Season Special" width={340} height={110} priority />
          </Link>
          <button className="icon-btn" aria-label="Search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></svg>
          </button>
        </div>
        {searchOpen && (
          <form className="search-bar wrap" onSubmit={submit} role="search">
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search decor, recipes, DIY ideas…" aria-label="Search articles" />
            <button type="submit">Search</button>
          </form>
        )}
      </header>

      <nav className="mainnav" aria-label="Main navigation">
        <div className="wrap nav-in">
          {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        </div>
      </nav>

      <div className={`drawer-scrim ${open ? "show" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={`drawer ${open ? "show" : ""}`} aria-label="Mobile menu">
        <button className="icon-btn drawer-x" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        <Image src="/logo.png" alt="Seasonora" width={200} height={65} />
        <p className="drawer-tag">Make Every Season Special.</p>
        {NAV.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>)}
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </aside>
    </>
  );
}
