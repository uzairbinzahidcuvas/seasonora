import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Seasonora", description: "Seasonora is a seasonal lifestyle publication — who we serve, what we publish and what readers can expect.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Seasonora | Seasonora", description: "Seasonora is a seasonal lifestyle publication — who we serve, what we publish and what readers can expect.", url: "/about", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>About Seasonora</h1><p>Seasonora is a seasonal lifestyle publication — who we serve, what we publish and what readers can expect.</p></div>
      <div className="prose">
        <h2>Who Seasonora serves</h2>
        <p>Seasonora is a seasonal lifestyle and inspiration publication for readers in the United States, the United Kingdom and Canada who want timely, practical ideas for decorating, celebrating, cooking, creating and refreshing everyday life throughout the year.</p>
        <p>Whether you are decorating a small apartment for Christmas, planning Friendsgiving, baking holiday cookies or refreshing a room for spring, our aim is the same: ideas worth trying, explained clearly.</p>
        <h2>Our editorial mission</h2>
        <p>We publish guides that solve a clear reader problem and provide more value than a short list of generic ideas — room-by-room styling advice, realistic budgets, tested timings, materials lists and honest difficulty levels.</p>
        <p>Seasonora is deliberately broad: a seasonal lifestyle blog with clear categories, not a Christmas-only site, a recipe-only site or a news site. Pinterest trends help us choose topics; they never replace original research and editorial judgement.</p>
        <h2>What you will find here</h2>
        <p>Seasonal Home & Decor, Holidays & Celebrations, Food & Recipes, DIY & Creative Ideas, and Lifestyle, Beauty & Style — organised in the hubs above so you can browse by season, by occasion or by project.</p>
      </div>
    </div>
  );
}
