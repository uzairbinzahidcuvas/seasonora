import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Editorial Policy", description: "How Seasonora researches, writes, reviews and corrects its content.",
  alternates: { canonical: "/editorial-policy" },
  openGraph: { title: "Editorial Policy | Seasonora", description: "How Seasonora researches, writes, reviews and corrects its content.", url: "/editorial-policy", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>Editorial Policy</h1><p>How Seasonora researches, writes, reviews and corrects its content.</p></div>
      <div className="prose">
        <h2>How we research</h2>
        <p>Every guide starts with a question a reader actually asked, and a simple check: what would a genuinely useful answer have to include? We check facts, quantities, timings and safety notes before anything goes live, and we'd always rather give you a number — a size, a price, a minute count — than a vague statement.</p>
        <h2>Originality and images</h2>
        <p>Everything here is written and edited for Seasonora. We use images we create ourselves or have permission to use, and we never pretend a recipe or project was tested if it wasn't.</p>
        <h2>AI assistance</h2>
        <p>We use drafting tools, including AI, to help with research and editing. A human editor still reads every article before it goes live, checks it makes sense, and is responsible for what's in it.</p>
        <h2>Affiliate links and advertising</h2>
        <p>If an article ever contains affiliate links, we'll say so on the page, and our Affiliate Disclosure goes up before any affiliate links are used. Being paid never changes what we recommend.</p>
        <h2>Corrections</h2>
        <p>Mistakes happen. When we find one, we fix the article — and if the change matters, we say what changed. If you spot something we've missed, tell us through the Contact page.</p>
      </div>
    </div>
  );
}
