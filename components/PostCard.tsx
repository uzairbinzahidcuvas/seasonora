import Link from "next/link";
import Visual from "./Visual";
import { catBySlug, fmtDate, type Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const cat = catBySlug(post.category);
  return (
    <article className="card post-card">
      <Link href={`/post/${post.slug}`} className="thumb" aria-label={post.title}><Visual post={post} /></Link>
      <div className="post-card-body">
        <Link className="cat-chip" style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})` }} href={`/${cat.slug}`}>{cat.name}</Link>
        <h3><Link href={`/post/${post.slug}`}>{post.title}</Link></h3>
        <p className="excerpt">{post.excerpt}</p>
        <p className="meta">{fmtDate(post.date)} · {post.readTime} min read</p>
      </div>
    </article>
  );
}
