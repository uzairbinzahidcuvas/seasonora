"use client";
import { useState } from "react";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div className={compact ? "newsletter-box" : "newsletter-band"}>
      <h3>Seasonal ideas, in your inbox</h3>
      <p>One thoughtful email per season — decor, recipes and celebrations worth trying. No spam, ever.</p>
      {done ? (
        <p className="nl-done" role="status">Thank you — you are on the list. Welcome to Seasonora!</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }}>
          <label className="sr-only" htmlFor={compact ? "nl-email-s" : "nl-email-b"}>Email address</label>
          <input id={compact ? "nl-email-s" : "nl-email-b"} type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}
