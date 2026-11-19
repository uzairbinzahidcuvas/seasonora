import type { Post } from "@/lib/posts";

/** Soft pastel seasonal visual — fallback when a post has no photo. */
export default function Visual({ post, large = false }: { post: Pick<Post, "motif" | "from" | "to" | "title">; large?: boolean }) {
  return (
    <svg className={large ? "visual visual-lg" : "visual"} viewBox="0 0 800 500" role="img"
      aria-label={`Decorative seasonal illustration for ${post.title}`} preserveAspectRatio="xMidYMid slice">
      <rect width="800" height="500" fill="#FBF6EC" />
      <circle cx="660" cy="90" r="130" fill={post.from} opacity="0.14" />
      <circle cx="90" cy="430" r="150" fill={post.from} opacity="0.10" />
      {post.motif === "tree" && (
        <g fill={post.to}><polygon points="400,70 500,230 300,230" opacity=".92" /><polygon points="400,150 530,330 270,330" opacity=".8" /><polygon points="400,240 560,420 240,420" opacity=".65" /><rect x="385" y="420" width="30" height="42" fill="#C99A45" /><circle cx="400" cy="58" r="10" fill="#C99A45" /><circle cx="360" cy="200" r="7" fill="#C99A45" /><circle cx="445" cy="290" r="7" fill="#C99A45" /><circle cx="330" cy="350" r="7" fill="#C99A45" /></g>
      )}
      {post.motif === "snow" && (
        <g stroke={post.to} strokeWidth="9" strokeLinecap="round" opacity=".85">
          <g transform="translate(400 250)"><line x1="-110" y1="0" x2="110" y2="0" /><line x1="0" y1="-110" x2="0" y2="110" /><line x1="-78" y1="-78" x2="78" y2="78" /><line x1="78" y1="-78" x2="-78" y2="78" /></g>
          <circle cx="130" cy="110" r="7" fill={post.to} stroke="none" /><circle cx="660" cy="150" r="9" fill={post.to} stroke="none" /><circle cx="600" cy="390" r="7" fill={post.to} stroke="none" /><circle cx="170" cy="380" r="9" fill={post.to} stroke="none" />
        </g>
      )}
      {post.motif === "leaf" && (
        <g fill={post.to}><path d="M400 90 C540 180 560 330 400 430 C240 330 260 180 400 90 Z" opacity=".88" /><path d="M400 130 L400 400" stroke="#FBF6EC" strokeWidth="7" opacity=".5" /><path d="M400 220 L500 170 M400 300 L300 250" stroke="#FBF6EC" strokeWidth="6" opacity=".45" /></g>
      )}
      {post.motif === "cookie" && (
        <g><circle cx="400" cy="250" r="140" fill={post.to} opacity=".88" /><circle cx="350" cy="200" r="17" fill="#FBF6EC" /><circle cx="450" cy="180" r="14" fill="#FBF6EC" /><circle cx="420" cy="280" r="18" fill="#FBF6EC" /><circle cx="330" cy="300" r="13" fill="#FBF6EC" /><circle cx="480" cy="330" r="12" fill="#FBF6EC" /><circle cx="150" cy="120" r="38" fill={post.from} opacity=".4" /><circle cx="650" cy="380" r="46" fill={post.from} opacity=".3" /></g>
      )}
      {post.motif === "star" && (
        <g fill={post.to}><polygon points="400,110 437,215 548,218 460,287 490,395 400,330 310,395 340,287 252,218 363,215" opacity=".9" /><circle cx="150" cy="120" r="8" fill="#C99A45" /><circle cx="650" cy="100" r="10" fill="#C99A45" /><circle cx="620" cy="390" r="8" fill="#C99A45" /><circle cx="170" cy="380" r="10" fill="#C99A45" /></g>
      )}
      {post.motif === "bloom" && (
        <g fill={post.to}><circle cx="400" cy="180" r="52" opacity=".9" /><circle cx="330" cy="250" r="52" opacity=".8" /><circle cx="470" cy="250" r="52" opacity=".8" /><circle cx="365" cy="330" r="52" opacity=".7" /><circle cx="440" cy="330" r="52" opacity=".7" /><circle cx="400" cy="255" r="34" fill="#C99A45" /></g>
      )}
    </svg>
  );
}
