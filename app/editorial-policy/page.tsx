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
        <p>Every guide starts with a reader question and a check of what a genuinely useful answer must include. We verify facts, quantities, timings and safety notes before publication, and we prefer specific detail — dimensions, budgets, materials and timings — over general statements.</p>
        <h2>Originality and images</h2>
        <p>Our articles are written and edited for Seasonora. We use images we create, license or have permission to use, and we do not imply a recipe or project was tested if it was not.</p>
        <h2>AI assistance</h2>
        <p>Drafting tools, including AI assistance, may support research and editing. A human editor reviews every article for accuracy, clarity and usefulness before it is published, and remains responsible for it.</p>
        <h2>Affiliate links and advertising</h2>
        <p>If an article contains affiliate links, that relationship is disclosed on the page, and an Affiliate Disclosure is published before affiliate links are used. Commercial relationships never change our editorial conclusions.</p>
        <h2>Corrections</h2>
        <p>If we find an error, we correct the article and, where the change is significant, note the update. Readers can report errors through the Contact page.</p>
      </div>
    </div>
  );
}
