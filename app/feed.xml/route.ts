import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/config";
import { POSTS } from "@/lib/posts";
export const dynamic = "force-static";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export async function GET() {
  const items = POSTS.map((p) => `<item><title>${esc(p.title)}</title><link>${SITE_URL}/post/${p.slug}</link><guid>${SITE_URL}/post/${p.slug}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.excerpt)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE_NAME}</title><link>${SITE_URL}</link><description>${esc(SITE_DESCRIPTION)}</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
