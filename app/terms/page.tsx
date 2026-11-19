import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use", description: "The terms that apply when you use the Seasonora website.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of Use | Seasonora", description: "The terms that apply when you use the Seasonora website.", url: "/terms", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>Terms of Use</h1><p>The terms that apply when you use the Seasonora website.</p></div>
      <div className="prose">
        <h2>Using this website</h2>
        <p>By using Seasonora you agree to these terms. Content is provided for general information and inspiration. You may share links to our articles and save our pins; please do not republish full articles or images without permission.</p>
        <h2>Intellectual property</h2>
        <p>The Seasonora name, logo and original content on this site belong to Seasonora or its contributors and are protected by applicable copyright law.</p>
        <h2>Accuracy and liability</h2>
        <p>We work to keep information accurate and current, but seasonal guidance, prices and product availability change. To the extent permitted by law, Seasonora is not liable for loss arising from reliance on this website. Nothing here limits liability that cannot be limited by law.</p>
        <h2>Changes</h2>
        <p>We may update these terms from time to time; the version published on this page is the version that applies.</p>
      </div>
    </div>
  );
}
