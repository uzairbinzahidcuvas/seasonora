import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Seasonora", description: "Who we are, what we publish, and what you can expect from Seasonora.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Seasonora | Seasonora", description: "Who we are, what we publish, and what you can expect from Seasonora.", url: "/about", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>About Seasonora</h1><p>Who we are, what we publish, and what you can expect from Seasonora.</p></div>
      <div className="prose">
        <h2>Who Seasonora serves</h2>
        <p>Seasonora is a seasonal lifestyle blog for readers in the United States, the United Kingdom and Canada. We write about the things that change with the seasons: decorating, celebrating, cooking, making things, and the small refreshes that make everyday life feel better.</p>
        <p>Maybe you're decorating a small apartment for Christmas, planning Friendsgiving, baking cookies or giving a room a spring clean-up. Whatever it is, we try to explain it the way a friend would — clearly, and without the fluff.</p>
        <h2>How we write</h2>
        <p>Every guide starts with a real problem: a room that feels bare, a party with no plan, a recipe that never says how long anything takes. We answer it properly — room-by-room advice, honest budgets, real timings, full materials lists and a straight answer on how hard something is.</p>
        <p>We cover the whole year, not just Christmas — though we do love Christmas. Pinterest trends help us pick topics people are actually looking for, but every article is researched and written for this site.</p>
        <h2>What you will find here</h2>
        <p>Home & Decor, Holidays & Celebrations, Food & Recipes, DIY & Crafts, and Lifestyle — organised in the hubs above, so you can browse by season, by occasion or by project.</p>
      </div>
    </div>
  );
}
