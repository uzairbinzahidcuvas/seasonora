export type Category = {
  slug: string;
  name: string;
  nav: string;
  intro: string;
  subcategories: string[];
  motif: string;
  from: string;
  to: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "seasonal-living",
    name: "Seasonal Living",
    nav: "Seasonal Living",
    intro:
      "Most of us don't redecorate the whole house every season — we swap a few things and the room feels new again. That's what these guides are for: small changes for spring, summer, fall and winter that fit real homes and real budgets.",
    subcategories: ["Spring Ideas", "Summer Ideas", "Fall / Autumn Ideas", "Winter Ideas", "Seasonal Bucket Lists", "Seasonal Home Refresh"],
    motif: "leaf", from: "#7FA653", to: "#46682F",
  },
  {
    slug: "holidays",
    name: "Holidays & Celebrations",
    nav: "Holidays",
    intro:
      "Hosting is a lot easier when someone hands you a plan. Here you'll find the themes, timelines, menus and checklists for Christmas, Friendsgiving, New Year's Eve and the rest — so everything gets done and you can still sit down with your guests.",
    subcategories: ["Christmas", "Thanksgiving & Friendsgiving", "Halloween", "New Year's Eve", "Valentine's Day", "Easter", "Mother's Day", "Birthdays & Gatherings"],
    motif: "star", from: "#E3A72F", to: "#B95E14",
  },
  {
    slug: "home-decor",
    name: "Home & Decor",
    nav: "Home & Decor",
    intro:
      "Good decor doesn't need a big house or a big budget. These guides go room by room — apartments and small spaces very much included — with honest prices, simple styling rules and ideas you can copy this weekend.",
    subcategories: ["Apartment Decor", "Living Room", "Bedroom", "Kitchen & Dining", "Entryway", "Tablescapes", "Window Decor", "Wreaths", "Budget Decor", "Small-Space Ideas"],
    motif: "tree", from: "#4E7D46", to: "#243B24",
  },
  {
    slug: "food-recipes",
    name: "Food & Recipes",
    nav: "Food & Recipes",
    intro:
      "Every recipe here is written the way we'd want to read it: a clear list of ingredients, steps in order, exact temperatures and timings, and a note on storing leftovers. Christmas cookies are the current favourite, with plenty more on the way.",
    subcategories: ["Cookies & Baking", "Desserts", "Appetizers", "Party Food", "Drinks", "Brunch", "Holiday Menus", "Seasonal Ingredients"],
    motif: "cookie", from: "#DE7A3D", to: "#A83E1B",
  },
  {
    slug: "diy-crafts",
    name: "DIY & Crafts",
    nav: "DIY & Crafts",
    intro:
      "The projects here use supplies you probably already own, or can grab in one quick shop run. Each one lists what you need, how long it really takes and how hard it is — starting with window painting, wreaths and garlands.",
    subcategories: ["Window Painting", "Wreaths & Garlands", "Handmade Gifts", "Paper Crafts", "Table Decor DIY", "Kids' Activities", "Printables"],
    motif: "snow", from: "#4E8FB8", to: "#275E7E",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle, Beauty & Style",
    nav: "Lifestyle",
    intro:
      "Seasons change more than the weather. They change what we wear, how we host and how we spend a Saturday. This section covers seasonal outfits, hairstyles, hosting tips and the small routines that make the time of year feel right.",
    subcategories: ["Hairstyles", "Seasonal Outfits", "Beauty Inspiration", "Hosting Tips", "Family Activities", "Everyday Routines", "Gift Guides"],
    motif: "bloom", from: "#C4748F", to: "#8C4462",
  },
];

export const catBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;

export type Block =
  | { t: "p"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] };
export type Section = { heading: string; blocks: Block[] };
export type Faq = { q: string; a: string };
export type PostImage = { src: string; alt: string; caption?: string };

export type Post = {
  slug: string; title: string; category: string; subcategory: string;
  excerpt: string; date: string; readTime: number;
  motif: string; from: string; to: string;
  intro: string; sections: Section[]; faqs: Faq[];
  hero?: PostImage;
  images?: { after: number; img: PostImage }[];
};

const P = (o: Post) => o;

export const POSTS: Post[] = [
  P({
  "slug": "christmas-apartment-decor-ideas",
  "title": "Christmas Apartment Decor Ideas",
  "category": "home-decor",
  "subcategory": "Apartment Decor",
  "excerpt": "Christmas apartment decor ideas for small spaces and rentals: slim trees, damage-free tricks, layered light and cozy textiles on budgets from $50 to $200.",
  "date": "2026-11-19",
  "readTime": 11,
  "motif": "tree",
  "from": "#4E7D46",
  "to": "#243B24",
  "intro": "Decorating a small apartment for Christmas is not about squeezing a department-store display into 600 square feet. It is about choosing a few high-impact pieces, placing them where your eye already lands, and letting light and texture do the rest. This guide walks through the exact order that works in real rentals: set a palette and budget first, pick a tree sized to your ceiling, then build outward to the entryway, textiles, walls and windows. Every idea is renter-friendly, most take under fifteen minutes, and the three budget shopping lists mean you can start this weekend.",
  "sections": [
    {
      "heading": "Start with a plan: palette, budget and footprint",
      "blocks": [
        {
          "t": "p",
          "text": "Walk your apartment with your phone and photograph the three spots you see most: the view from the front door, the sofa wall, and the kitchen pass-through or dining corner. Those are your decorating zones — everything else is optional. Measure each zone's width and note where your outlets are, because a beautiful plan that needs an extension cord across a walkway will annoy you by December 10. In a studio or one-bedroom, three zones plus the tree corner is plenty; decorating fewer places, more completely, looks more intentional than scattering twenty small items everywhere."
        },
        {
          "t": "p",
          "text": "Pick a palette of two main colors and one metal — for example, deep green and cream with brass, or burgundy and blush with gold. A tight palette is the single cheapest upgrade you can make, because it lets a $4 grocery-store garland sit happily next to last year's ornaments. Then set a hard budget and split it roughly: 50 percent on the tree and lights, 30 percent on textiles and one statement piece, 20 percent on the small stuff — hooks, batteries, ribbon and replacement bulbs. Write the numbers down before you open a single shopping tab."
        }
      ]
    },
    {
      "heading": "Choose a tree that fits your floor space",
      "blocks": [
        {
          "t": "p",
          "text": "The reliable rule is tree height equals ceiling height minus at least 12 inches, leaving room for a topper and breathing space. With a standard 8-foot ceiling, a 6- to 6.5-foot tree is the sweet spot; in older buildings with 9- or 10-foot ceilings you can go to 7.5 feet. Diameter matters more than height in apartments, though. A full-profile tree can spread 45 to 55 inches at the base, while a slim or pencil tree takes just 24 to 32 inches — the difference between blocking a walkway and slotting neatly beside a media console."
        },
        {
          "t": "p",
          "text": "Measure your corner diagonally before ordering, and check the product listing's stated base diameter rather than the marketing photo. If floor space is truly scarce, consider a 4-foot tabletop tree on a sturdy sideboard, a flat-back half tree that sits flush against the wall, or a wall-mounted branch arrangement. Pre-lit trees save money and storage hassle in small homes — a 6-foot pre-lit slim tree typically carries 250 to 400 lights, which is exactly the density that looks good, and it removes one bulky box of separate light strings from your closet."
        }
      ]
    },
    {
      "heading": "Make the entryway feel festive in five minutes",
      "blocks": [
        {
          "t": "p",
          "text": "Your entryway is probably three feet of wall, a door and a mat — and that is enough. Start with the door: hang a 20- to 24-inch wreath on an over-door hook (about $6) or a heavy-duty adhesive hook rated for 7 pounds if the door is metal or glass. No nails, no landlord issues. Too much for a narrow hallway? A swag of faux greenery tied with ribbon at the door handle gives the same signal for under $10 and stores flat."
        },
        {
          "t": "p",
          "text": "Next, work at ankle and eye level. Swap your everyday doormat for a festive coir mat ($12 to $18) — it is the one decoration every guest actually steps on, and it shakes clean. Add a battery lantern or warm-white micro lights around the door frame on clear removable clips, set on a timer so the hallway glows when you come home. Finally, put a shallow bowl or tray on the nearest surface for keys and mail, and tuck a sprig of greenery or two cinnamon sticks into it. Five minutes, three objects, and the apartment feels decorated before anyone reaches the living room."
        }
      ]
    },
    {
      "heading": "Layer textiles before you buy more decor",
      "blocks": [
        {
          "t": "p",
          "text": "Textiles change a room faster and more cheaply than any ornament, because they cover the largest surfaces you own. Start with what is already on your sofa: swap two cushion covers for seasonal ones in your palette — 18-by-18-inch covers run $8 to $15 each and fold flat for storage, unlike whole cushions. Add one throw with real texture, such as a chunky knit or a plaid wool-blend, draped over the sofa arm where it will actually be used. A 50-by-60-inch throw suits one person; go 60 by 80 if two of you share the sofa."
        },
        {
          "t": "p",
          "text": "Then look down. A washable low-pile runner in the hallway or a festive rug under the coffee table anchors the whole scheme and hides a rental's tired flooring. In the bedroom, skip the full holiday bedding set: a folded throw across the foot of the bed and one seasonal cushion give 80 percent of the effect for a quarter of the price. Finish with the dining table — a simple linen-look runner ($10 to $14) plus cloth napkins in your accent color makes weeknight dinners feel like an occasion, and both go straight in the wash in January."
        }
      ]
    },
    {
      "heading": "Use vertical space: shelves, windows and doors",
      "blocks": [
        {
          "t": "p",
          "text": "When floor space runs out, decorate upward. Open shelves and bookcase tops are prime territory: run a faux garland along the front edge of a shelf — 6 feet covers a standard bookcase — and secure it with small clear clips every 12 inches so it does not sag onto your books. Weave a strand of battery micro lights through it and you have the layered, expensive look for about $15. On windows, hang ornaments at varied heights from the curtain rod on ribbon or fishing line; they catch daylight, cost almost nothing and leave zero marks."
        },
        {
          "t": "p",
          "text": "Interior doors are underused real estate. A slim wreath or a hanging swag on the bedroom or bathroom door spreads the theme through the apartment without touching a single wall. Use kitchen cabinet tops, if yours have a gap to the ceiling, for bottle-brush trees or a lighted garland — visible from the sofa, in space that stores dust the other eleven months. And do not forget the mirror trick: a garland draped over a large mirror or a string of lights around its frame doubles every bulb by reflection, which is free brightness in a small, often dim rental."
        }
      ]
    },
    {
      "heading": "Light the room like you mean it",
      "blocks": [
        {
          "t": "p",
          "text": "Lighting is where small apartments win, because one well-placed strand transforms a 12-by-14-foot living room. The old department-store rule is 100 mini lights per foot of tree; in a small apartment that reads as glare, so aim for 50 to 70 lights per foot instead — a 6-foot tree wants 300 to 420 lights, which is exactly what most pre-lit slim trees carry. Beyond the tree, plan one 16- to 20-foot string for the window or bookshelf, plus one 10-foot battery string where there is no outlet."
        },
        {
          "t": "p",
          "text": "Choose warm white, 2700K, everywhere — mixing cool-white and warm strands is the fastest way to make a room look like an office party. Put every plug-in strand on a single smart plug or an $8 timer set to your actual evening, roughly 4:30 p.m. to 11 p.m., so the whole apartment switches on at once — no crawling behind the sofa in January. Then add two or three flameless candles on the coffee table and bathroom counter. Real candlelight is lovely, but in a rental with a smoke alarm six feet away, flameless is the version you will actually use every night."
        }
      ]
    },
    {
      "heading": "Three budget tiers: under $50, $100 and $200",
      "blocks": [
        {
          "t": "p",
          "text": "Under $50, buy the hits only: one 9-foot faux garland ($10), two 16-foot warm-white light strings ($12 for the pair), a 22-inch wreath ($12), a multi-pack of removable hooks and clips ($6), and one plaid throw ($9). That is $49 covering your door, sofa and one window or shelf — and every item folds flat or nests inside the wreath. If you do not own a tree yet, borrow one this year; lights and textiles are what guests actually notice."
        },
        {
          "t": "p",
          "text": "The $100 tier is where an apartment starts to look designed. Build it around one real purchase — a 6-foot pre-lit slim tree on a November sale ($48 to $55) — then add the garland ($10), one window light string ($6), two seasonal cushion covers ($16) and a festive doormat ($14): about $100 all in. Skip the wreath — the garland swagged over the door frame does the same job — and the tree stores in its own box."
        },
        {
          "t": "p",
          "text": "At $200, stop buying more things and buy better versions of the same list: a fuller 6.5-foot pre-lit tree with dense tips ($115 to $130), a wool-blend throw you will keep out until March ($28), four cushion covers so the bed gets two as well ($28), and a mixed-greenery garland that reads as real from three feet away ($18). About $190 to $205 — and next year's spend drops to batteries and a candle."
        }
      ]
    }
  ],
  "faqs": [
    {
      "q": "How can I decorate a rental for Christmas without damaging the walls?",
      "a": "Use removable adhesive hooks and strips rated well above what you are hanging — one large strip holds up to 16 pounds, far more than a wreath. Hang swags from over-door hooks, rest garlands on shelves and picture ledges instead of pinning them, and use battery lights with clips on windows and frames. In January, everything comes down with one slow pull on the tab."
    },
    {
      "q": "What size Christmas tree works best in a small apartment?",
      "a": "For a standard 8-foot ceiling, a 6- to 6.5-foot slim tree with a 24- to 32-inch base is the sweet spot — tall enough to feel generous, narrow enough to keep walkways clear, with 12 inches spare for a topper. Too much footprint still? Try a 4-foot tabletop tree on a sideboard, or a flat-back half tree against the wall."
    },
    {
      "q": "How many fairy lights does a small living room actually need?",
      "a": "Aim for 300 to 420 warm-white lights on a 6-foot tree (50 to 70 per foot), one 16- to 20-foot string for the window or bookshelf, and one 10-foot battery string for a shelf or headboard. Three sources at three heights read as a designed glow, not one bright corner — and one timer switches them all on together at dusk."
    },
    {
      "q": "How do I store all my Christmas decorations in just one or two boxes?",
      "a": "Work backward from two 66-quart latching bins (or the tree box plus one). Ornaments sit in a divided tray or egg cartons, lights wind around cardboard rectangles to stay tangle-free, and garlands coil in with washed textiles folded on top as padding. Hang the wreath on a closet hook in a dry-cleaning bag, label bins by room, and January-you will thank December-you."
    }
  ],
  "hero": {
    "src": "/img/a1-hero",
    "alt": "Small apartment living room decorated for Christmas with a slim tree, garland over the window and candles on the coffee table"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "src": "/img/a1-entryway",
        "alt": "Apartment entryway with a Christmas wreath on the door, a garland around the mirror and candles on a console table",
        "caption": "A wreath, a garlanded mirror and two candles make an entryway feel festive in minutes."
      }
    },
    {
      "after": 4,
      "img": {
        "src": "/img/a1-living",
        "alt": "Cosy apartment corner with a small Christmas tree, garland on the bookshelf and plaid cushions on a cream sofa",
        "caption": "Decorate upward: garland along the shelves and layered textiles do the heavy lifting in a small room."
      }
    }
  ]
}),
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);
export const postsByCategory = (slug: string) => POSTS.filter((p) => p.category === slug);
export const relatedPosts = (post: Post, n = 3) =>
  [...POSTS.filter((p) => p.slug !== post.slug && p.category === post.category),
   ...POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category)].slice(0, n);
export const popularPosts = [...POSTS].slice(0, 5);
export const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
export const TAGS = ["Christmas Decor", "Small Spaces", "Budget Ideas", "Window Painting", "Friendsgiving", "Cookies", "DIY", "Party Ideas", "Winter Home", "Tablescapes"];
