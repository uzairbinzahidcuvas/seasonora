// Seasonora project videos. Each video has a companion article (the
// written step-by-step guide) and plays natively on the site from
// /videos/<slug>.mp4 (decoded at build time from lib/viddata modules).
// Newest first.
export type VideoEntry = {
  slug: string;        // video slug; file is /videos/<slug>.mp4
  title: string;       // display title
  description: string; // 1–2 line summary shown on the video card
  category: string;    // site category slug (matches lib/posts CATEGORIES)
  topic: string;       // subcategory / topic label shown as a chip
  articleSlug: string; // companion guide on /post/<articleSlug>
  poster: string;      // /img/<name> poster image
  durationSec: number;
  date: string;        // YYYY-MM-DD
};

export const VIDEOS: VideoEntry[] = [
  {
    slug: "heart-photo-garland",
    title: "DIY Heart Photo Garland – Cute Handmade Room Decor",
    description: "Make a personalized photo garland with paper hearts, mini wooden clips and favourite printed memories — a sweet handmade decoration for bedrooms, celebrations and Valentine's Day.",
    category: "diy-crafts",
    topic: "Evergreen and Valentine's decor",
    articleSlug: "heart-photo-garland",
    poster: "/img/a42-a",
    durationSec: 30,
    date: "2026-11-28",
  },
  {
    slug: "diy-concrete-leaf-stepping-stones",
    title: "DIY Concrete Leaf Stepping Stones – Easy Garden Stones with Real Leaf Prints",
    description: "Press a real leaf into wet cement and keep its veins forever — an easy beginner garden craft that looks like it came from a garden shop.",
    category: "diy-crafts",
    topic: "Concrete garden crafts",
    articleSlug: "diy-concrete-leaf-stepping-stones",
    poster: "/img/a40-a",
    durationSec: 30,
    date: "2026-11-27",
  },
  {
    slug: "winter-pinecone-wreath",
    title: "DIY Pinecone Winter Wreath – Natural Holiday Door Decor",
    description: "Create a natural winter wreath with pinecones, evergreen branches and a soft ribbon — handmade decor for Christmas and all winter long.",
    category: "diy-crafts",
    topic: "Winter door decor",
    articleSlug: "winter-pinecone-wreath",
    poster: "/img/a38-a",
    durationSec: 30,
    date: "2026-11-27",
  },
  {
    slug: "cozy-pom-pom-cushion-cover",
    title: "DIY Pom-Pom Cushion Cover for Cozy Winter Home Decor",
    description: "Give a plain cushion a cozy makeover with soft yarn pom-poms — a simple handmade project that adds texture to neutral sofas and winter living spaces.",
    category: "diy-crafts",
    topic: "Winter home decor",
    articleSlug: "cozy-pom-pom-cushion-cover",
    poster: "/img/a35-a",
    durationSec: 30,
    date: "2026-11-26",
  },
  {
    slug: "winter-snow-globe-jars",
    title: "DIY Winter Snow Globe Jars \u2013 Magical Christmas Craft",
    description: "Make a charming homemade snow globe with a glass jar, miniature winter decorations and artificial snow \u2014 a lovely seasonal craft and handmade gift idea.",
    category: "diy-crafts",
    topic: "Winter gifts and decor",
    articleSlug: "winter-snow-globe-jars",
    poster: "/img/a33-a",
    durationSec: 30,
    date: "2026-11-26",
  },
  {
    slug: "felt-christmas-tree-ornaments",
    title: "DIY Felt Christmas Tree Ornaments \u2013 Cute Handmade Decorations",
    description: "Sew charming felt Christmas tree ornaments with simple materials and beginner-friendly stitches — a lovely handmade holiday project for a cozy tree or gift topper.",
    category: "diy-crafts",
    topic: "Christmas sewing crafts",
    articleSlug: "felt-christmas-tree-ornaments",
    poster: "/img/a30-a",
    durationSec: 30,
    date: "2026-11-25",
  },
  {
    slug: "diy-christmas-mantle-garland",
    title: "DIY Christmas Mantle Garland \u2013 Easy Holiday Fireplace Decor",
    description: "Style a cozy Christmas mantel with a handmade evergreen garland, warm fairy lights and velvet ribbon \u2014 an easy DIY fireplace decoration for the holidays.",
    category: "diy-crafts",
    topic: "Christmas mantle decor",
    articleSlug: "diy-christmas-mantle-garland",
    poster: "/img/a28-a",
    durationSec: 30,
    date: "2026-11-25",
  },
  {
    slug: "mini-christmas-gift-baskets",
    title: "DIY Mini Christmas Gift Baskets \u2013 Cute Handmade Gift Ideas",
    description: "Create thoughtful mini Christmas gift baskets with affordable supplies, pretty tissue paper and festive ribbon — a charming gift idea for friends, coworkers and holiday hosts.",
    category: "diy-crafts",
    topic: "Christmas gifting",
    articleSlug: "mini-christmas-gift-baskets",
    poster: "/img/a26-a",
    durationSec: 30,
    date: "2026-11-25",
  },
  {
    slug: "paper-snowflake-window-decor",
    title: "Easy DIY Paper Snowflakes for Beautiful Winter Windows",
    description: "Make delicate paper snowflakes with simple folding and cutting techniques — an inexpensive winter craft for Christmas windows, family craft time and seasonal decorating.",
    category: "diy-crafts",
    topic: "Winter and Christmas paper crafts",
    articleSlug: "paper-snowflake-window-decor",
    poster: "/img/a23-a",
    durationSec: 30,
    date: "2026-11-24",
  },
  {
    slug: "velvet-christmas-tree-ornaments",
    title: "DIY Velvet Christmas Tree Ornaments \u2013 Elegant Holiday Decor",
    description: "Give simple shatter-resistant ornaments an elegant makeover with velvet ribbon and handmade bows. Create a coordinated Christmas tree using rich seasonal colors.",
    category: "diy-crafts",
    topic: "Elegant Christmas decor",
    articleSlug: "velvet-christmas-tree-ornaments",
    poster: "/img/a21-a",
    durationSec: 30,
    date: "2026-11-24",
  },
  {
    slug: "dried-orange-christmas-garland",
    title: "DIY Dried Orange Christmas Garland \u2013 Natural Holiday Decor",
    description: "Make a natural Christmas garland with dried orange slices, cinnamon sticks and wooden beads. This simple handmade decoration suits Scandinavian, rustic and minimalist holiday interiors.",
    category: "diy-crafts",
    topic: "Christmas natural decor",
    articleSlug: "dried-orange-christmas-garland",
    poster: "/img/a18-a",
    durationSec: 30,
    date: "2026-11-23",
  },
  {
    slug: "fall-mason-jar-led-lanterns",
    title: "DIY Fall Mason Jar Lanterns – Easy Autumn Craft",
    description: "Turn simple mason jars into glowing autumn lanterns with translucent tissue paper, jute rope and battery-powered fairy lights. A budget-friendly fall craft for a mantel or table.",
    category: "diy-crafts",
    topic: "Autumn lighting",
    articleSlug: "fall-mason-jar-led-lanterns",
    poster: "/img/a16-a",
    durationSec: 30,
    date: "2026-11-23",
  },
  {
    slug: "friendsgiving-table-place-cards",
    title: "Easy DIY Friendsgiving Place Cards for an Aesthetic Table",
    description: "Make personalized Friendsgiving place cards with kraft paper, dried oranges and rosemary — a simple handmade detail that adds a warm seasonal touch to a Thanksgiving dinner table.",
    category: "diy-crafts",
    topic: "Friendsgiving and Thanksgiving",
    articleSlug: "friendsgiving-table-place-cards",
    poster: "/img/a13-a",
    durationSec: 30,
    date: "2026-11-22",
  },
  {
    slug: "cinnamon-stick-led-candle-decor",
    title: "DIY Cinnamon Stick Candle Decor for Cozy Fall Homes",
    description: "Create a warm rustic candle decoration with cinnamon sticks, jute twine and ribbon — a battery LED candle makes a cozy autumn accent for a mantel or Thanksgiving table.",
    category: "diy-crafts",
    topic: "Cozy fall decor",
    articleSlug: "cinnamon-stick-led-candle-decor",
    poster: "/img/a11-a",
    durationSec: 30,
    date: "2026-11-22",
  },
  {
    slug: "pressed-autumn-leaf-glass-frames",
    title: "DIY Pressed Leaf Frames – Easy Autumn Wall Art",
    description: "Turn real pressed autumn leaves into elegant botanical wall art with a floating glass frame — a simple nature craft for any living room or gallery wall.",
    category: "diy-crafts",
    topic: "Autumn wall art",
    articleSlug: "pressed-autumn-leaf-glass-frames",
    poster: "/img/a9-a",
    durationSec: 30,
    date: "2026-11-21",
  },
  {
    slug: "mini-pumpkin-led-candle-holders",
    title: "DIY Mini Pumpkin LED Candle Holders",
    description: "Paint two mini pumpkins in soft fall colors, cut one small opening and drop in an LED tea light — a cozy holder in about 40 minutes.",
    category: "diy-crafts",
    topic: "Autumn Home Decor",
    articleSlug: "mini-pumpkin-led-candle-holders",
    poster: "/img/a5-a",
    durationSec: 30,
    date: "2026-11-20",
  },
];

export const videoBySlug = (slug: string) => VIDEOS.find((v) => v.slug === slug);

export const fmtDuration = (sec: number) =>
  `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
