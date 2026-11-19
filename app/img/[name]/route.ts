import { IMAGES } from "@/lib/imgdata";

export function generateStaticParams() {
  return Object.keys(IMAGES).map((name) => ({ name }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ name: string }> }) {
  const { name } = await ctx.params;
  const b64 = IMAGES[name];
  if (!b64) return new Response("Not found", { status: 404 });
  const bytes = Buffer.from(b64, "base64");
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
