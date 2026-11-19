import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { POSTS, CATEGORIES } from "@/lib/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/contact", "/privacy-policy", "/terms", "/disclaimer", "/editorial-policy", "/affiliate-disclosure", "/search"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p || "/"}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.6 })),
    ...CATEGORIES.map((c) => ({ url: `${SITE_URL}/${c.slug}`, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...POSTS.map((p) => ({ url: `${SITE_URL}/post/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
