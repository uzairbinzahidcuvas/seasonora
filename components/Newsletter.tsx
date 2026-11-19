"use client";
import { useState } from "react";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const id = compact ? "nl-email-s" : "nl-email-b";
  const form = done ? (
    <p className="nl-done" role="status">Thank you — you are on the list. Welcome to Seasonora!</p>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }}>
      <label className="sr-only" htmlFor={id}>Email address</label>
      <input id={id} type="email" required value={email}
        onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
      <button type="submit">Subscribe</button>
    </form>
  );

  if (compact) {
    return (
      <div className="newsletter-box">
        <h3>Seasonal ideas, in your inbox</h3>
        <p>One email per season with our best decor, recipe and holiday ideas. No spam — we would rather be decorating.</p>
        {form}
      </div>
    );
  }
  return (
    <div className="newsletter-band" id="newsletter">
      <img className="nl-bg" src="/img/s-newsletter" alt="" aria-hidden="true" />
      <div className="nl-inner">
        <h2>A Little Inspiration, Delivered.</h2>
        <p>Get fresh seasonal ideas, creative inspiration and thoughtful tips delivered straight to your inbox.</p>
        {form}
        <p className="nl-privacy">🔒 We respect your privacy.</p>
      </div>
    </div>
  );
}
