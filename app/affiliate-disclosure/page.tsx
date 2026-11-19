import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Affiliate Disclosure", description: "How Seasonora handles affiliate links and commercial relationships.",
  alternates: { canonical: "/affiliate-disclosure" },
  openGraph: { title: "Affiliate Disclosure | Seasonora", description: "How Seasonora handles affiliate links and commercial relationships.", url: "/affiliate-disclosure", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>Affiliate Disclosure</h1><p>How Seasonora handles affiliate links and commercial relationships.</p></div>
      <div className="prose">
        <h2>Our current position</h2>
        <p>Seasonora does not currently earn commissions from product links. If that changes, this page will be updated first, and any article containing affiliate links will say so clearly on the page itself.</p>
        <h2>If affiliate links are used in future</h2>
        <p>Some links may earn Seasonora a small commission when a reader buys through them, at no extra cost to the reader. Commissions never change what we recommend: products are chosen because they fit the guide, not because they pay.</p>
        <h2>How to spot them</h2>
        <p>Articles containing affiliate links will carry a short disclosure note near the top of the page, before the first affiliate link appears.</p>
      </div>
    </div>
  );
}
