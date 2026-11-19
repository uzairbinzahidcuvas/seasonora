"use client";
import { useState } from "react";

export default function Newsletter({ compact = false, variant }: { compact?: boolean; variant?: "footer" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const form = done ? (
    <p className="nl-done" role="status">Thank you — you are on the list. Welcome to Seasonora!</p>
  ) : (
    <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }}>
      <label className="sr-only" htmlFor={variant === "footer" ? "nl-email-f" : compact ? "nl-email-s" : "nl-email-b"}>Email address</label>
      <input id={variant === "footer" ? "nl-email-f" : compact ? "nl-email-s" : "nl-email-b"} type="email" required value={email}
        onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" />
      <button type="submit">Subscribe</button>
    </form>
  );

  if (variant === "footer") {
    return (
      <div className="footer-news">
        <div>
          <h3>Seasonal ideas, in your inbox</h3>
          <p>One email per season with our best decor, recipe and holiday ideas. No spam — we would rather be decorating.</p>
        </div>
        {form}
      </div>
    );
  }
  return (
    <div className={compact ? "newsletter-box" : "newsletter-band"}>
      <h3>Seasonal ideas, in your inbox</h3>
      <p>One email per season with our best decor, recipe and holiday ideas. No spam — we would rather be decorating.</p>
      {form}
    </div>
  );
}
