import { LOGO_PNG_BASE64 } from "@/lib/logo-data";

export function GET() {
  const bytes = Buffer.from(LOGO_PNG_BASE64, "base64");
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
