import Link from "next/link";
import Visual from "./Visual";
import { catBySlug, fmtDate, type Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const cat = catBySlug(post.category);
  return (
    <article className="post-card">
      <Link href={`/post/${post.slug}`} className="thumb" aria-label={post.title}>{post.hero ? <img className="visual visual-img" src={post.hero.src} alt={post.hero.alt} loading="lazy" /> : <Visual post={post} />}</Link>
      <div className="post-card-body">
        <Link className="cat-chip" style={{ background: cat.chipBg, color: cat.chipInk }} href={`/${cat.slug}`}>{cat.name}</Link>
        <h3><Link href={`/post/${post.slug}`}>{post.title}</Link></h3>
        <p className="excerpt">{post.excerpt}</p>
        <p className="card-meta">{fmtDate(post.date)} · {post.readTime} min read</p>
      </div>
    </article>
  );
}
