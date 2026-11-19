import Link from "next/link";
export default function NotFound() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>Page not found</h1>
      <p>That page has drifted off like a snowflake. Try a search, or start from one of our favourite seasonal hubs.</p></div>
      <div className="prose" style={{ textAlign: "center" }}>
        <p><Link className="btn" href="/search">Search Seasonora</Link></p>
        <p><Link href="/">Home</Link> · <Link href="/holidays">Holidays</Link> · <Link href="/home-decor">Home &amp; Decor</Link> · <Link href="/food-recipes">Food &amp; Recipes</Link> · <Link href="/diy-crafts">DIY &amp; Crafts</Link></p>
      </div>
    </div>
  );
}
