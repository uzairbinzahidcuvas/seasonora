import Link from "next/link";
import Visual from "./Visual";
import { catBySlug, fmtDate, type Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const cat = catBySlug(post.category);
  return (
    <article className="post-card">
      <Link href={`/post/${post.slug}`} className="thumb" aria-label={post.title}>{post.hero ? <img className="visual visual-img" src={post.hero.src} alt={post.hero.alt} loading="lazy" /> : <Visual post={post} />}</Link>
      <div className="post-card-body">
        <Link className="cat-chip" style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})` }} href={`/${cat.slug}`}>{cat.name}</Link>
        <h3><Link href={`/post/${post.slug}`}>{post.title}</Link></h3>
        <p className="excerpt">{post.excerpt}</p>
        <p className="card-meta">
          <span className="avatar" aria-hidden="true">S</span>
          <span className="card-author">Seasonora</span>
          <span className="card-date">· {fmtDate(post.date)} · {post.readTime} min read</span>
        </p>
      </div>
    </article>
  );
}
