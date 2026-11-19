"use client";
import { useState } from "react";
import { SITE_URL } from "@/lib/config";
import { PinterestIcon, FacebookIcon, XIcon, WhatsAppIcon } from "./SocialIcons";

export default function ShareRow({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}/post/${slug}`;
  const text = encodeURIComponent(title);
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); } catch { /* clipboard unavailable */ }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="share-row" aria-label="Share this article">
      <span>Share:</span>
      <a target="_blank" rel="noreferrer" href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${text}`}><PinterestIcon size={14} /> Pinterest</a>
      <a target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}><FacebookIcon size={14} /> Facebook</a>
      <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`}><XIcon size={14} /> X</a>
      <a target="_blank" rel="noreferrer" href={`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`}><WhatsAppIcon size={14} /> WhatsApp</a>
      <button type="button" onClick={copy}>{copied ? "Link copied!" : "Copy link"}</button>
    </div>
  );
}
