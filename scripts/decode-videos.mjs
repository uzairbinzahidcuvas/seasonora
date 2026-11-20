// Build step: decode the base64 video modules in lib/viddata/ into real
// MP4 files under public/videos/, so Vercel serves them as static files
// (with range support) and they play natively on the site.
// The GitHub snapshot push is text-only, so videos travel as data
// modules — same approach as images (lib/imgdata) and the logo.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "lib", "viddata");
const outDir = join(root, "public", "videos");
mkdirSync(outDir, { recursive: true });

let count = 0;
for (const file of readdirSync(srcDir)) {
  if (!file.endsWith(".ts")) continue;
  const text = readFileSync(join(srcDir, file), "utf8");
  const m = text.match(/export default "([A-Za-z0-9+/=]+)"/);
  if (!m) throw new Error(`decode-videos: no base64 payload in ${file}`);
  const name = file.replace(/\.ts$/, ".mp4");
  writeFileSync(join(outDir, name), Buffer.from(m[1], "base64"));
  count += 1;
  console.log(`decode-videos: ${file} -> public/videos/${name}`);
}
console.log(`decode-videos: ${count} video(s) ready`);
