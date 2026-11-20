export type Category = {
  slug: string;
  name: string;
  nav: string;
  intro: string;
  subcategories: string[];
  motif: string;
  from: string;
  to: string;
  chipBg: string;
  chipInk: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "seasonal-living",
    name: "Seasonal Living",
    nav: "Seasonal Living",
    intro:
      "Most of us don't redecorate the whole house every season — we swap a few things and the room feels new again. That's what these guides are for: small changes for spring, summer, fall and winter that fit real homes and real budgets.",
    subcategories: ["Spring Ideas", "Summer Ideas", "Fall / Autumn Ideas", "Winter Ideas", "Seasonal Bucket Lists", "Seasonal Home Refresh"],
    motif: "leaf", from: "#7FA653", to: "#46682F", chipBg: "#EAF3E4", chipInk: "#46682F",
  },
  {
    slug: "holidays",
    name: "Holidays & Celebrations",
    nav: "Holidays",
    intro:
      "Hosting is a lot easier when someone hands you a plan. Here you'll find the themes, timelines, menus and checklists for Christmas, Friendsgiving, New Year's Eve and the rest — so everything gets done and you can still sit down with your guests.",
    subcategories: ["Christmas", "Thanksgiving & Friendsgiving", "Halloween", "New Year's Eve", "Valentine's Day", "Easter", "Mother's Day", "Birthdays & Gatherings"],
    motif: "star", from: "#E3A72F", to: "#B95E14", chipBg: "#FAE7E7", chipInk: "#A83E4A",
  },
  {
    slug: "home-decor",
    name: "Home & Decor",
    nav: "Home & Decor",
    intro:
      "Good decor doesn't need a big house or a big budget. These guides go room by room — apartments and small spaces very much included — with honest prices, simple styling rules and ideas you can copy this weekend.",
    subcategories: ["Apartment Decor", "Living Room", "Bedroom", "Kitchen & Dining", "Entryway", "Tablescapes", "Window Decor", "Wreaths", "Budget Decor", "Small-Space Ideas"],
    motif: "tree", from: "#4E7D46", to: "#243B24", chipBg: "#E7F2E4", chipInk: "#3F6B35",
  },
  {
    slug: "food-recipes",
    name: "Food & Recipes",
    nav: "Food & Recipes",
    intro:
      "Every recipe here is written the way we'd want to read it: a clear list of ingredients, steps in order, exact temperatures and timings, and a note on storing leftovers. Christmas cookies are the current favourite, with plenty more on the way.",
    subcategories: ["Cookies & Baking", "Desserts", "Appetizers", "Party Food", "Drinks", "Brunch", "Holiday Menus", "Seasonal Ingredients"],
    motif: "cookie", from: "#DE7A3D", to: "#A83E1B", chipBg: "#FDEEDC", chipInk: "#9C6210",
  },
  {
    slug: "diy-crafts",
    name: "DIY & Crafts",
    nav: "DIY & Crafts",
    intro:
      "The projects here use supplies you probably already own, or can grab in one quick shop run. Each one lists what you need, how long it really takes and how hard it is — starting with window painting, wreaths and garlands.",
    subcategories: ["Window Painting", "Wreaths & Garlands", "Handmade Gifts", "Paper Crafts", "Table Decor DIY", "Kids' Activities", "Printables"],
    motif: "snow", from: "#4E8FB8", to: "#275E7E", chipBg: "#EFE9FB", chipInk: "#6B57A8",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle, Beauty & Style",
    nav: "Lifestyle",
    intro:
      "Seasons change more than the weather. They change what we wear, how we host and how we spend a Saturday. This section covers seasonal outfits, hairstyles, hosting tips and the small routines that make the time of year feel right.",
    subcategories: ["Hairstyles", "Seasonal Outfits", "Beauty Inspiration", "Hosting Tips", "Family Activities", "Everyday Routines", "Gift Guides"],
    motif: "bloom", from: "#C4748F", to: "#8C4462", chipBg: "#FBEAF1", chipInk: "#A04A72",
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
  "slug": "christmas-window-painting-ideas",
  "title": "Christmas Window Painting Ideas",
  "category": "diy-crafts",
  "subcategory": "Window Painting",
  "excerpt": "Easy Christmas window painting ideas for beginners: chalk markers, washable paint and hand-drawn designs that wipe off clean in January — no skill needed.",
  "date": "2026-11-19",
  "readTime": 10,
  "motif": "snow",
  "from": "#4E8FB8",
  "to": "#275E7E",
  "intro": "A painted window is the cheapest big win in Christmas decorating: the glass is already there, the paint costs less than a takeaway, and it all wipes off with warm water in January. We painted our first window three years ago with two chalk markers and a wobbly snowflake, and neighbours still ask about it. This guide covers the exact supplies that work, the prep that takes ten minutes, and seven designs that look good even if you can't draw a straight line. Most take under an hour, all of them come off, and the village scene along the bottom stops people on the street.",
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Three things work on glass, and they come off differently. Liquid chalk markers are the easiest place to start: they draw like a pen, dry in about a minute, and wipe off with a damp cloth. Washable tempera paint, mixed half-and-half with dish soap, gives filled-in colour and rinses off with warm water. Static window clings need no paint, but they look flat from the street. For a first window, buy chalk markers and skip the rest."
        },
        {
          "t": "h3",
          "text": "What to buy for your first window"
        },
        {
          "items": [
            "White liquid chalk markers, 3 mm and 6 mm tips — a 5-pack costs about $8 and covers two big windows",
            "One gold or silver metallic marker for stars and lettering, about $3",
            "Washable tempera paint in white and one accent colour, about $4 a bottle, if you want filled-in scenes",
            "A roll of painter's tape, $4, to protect the frame",
            "Microfibre cloths and a spray bottle of warm water for cleanup"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Test before you commit"
        },
        {
          "t": "p",
          "text": "Draw a small snowflake in the bottom corner of the glass, leave it for an hour, then wipe it off with a damp cloth. If it comes away clean, your markers are safe for the whole window. This one-minute test has saved us from exactly one disaster: a permanent paint marker that looked identical to the chalk ones in the shop. Skip anything labelled permanent, oil-based or acrylic, and never use a razor blade in January."
        }
      ],
      "heading": "Pick your paint: markers, washable paint or clings"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Paint sticks better and looks brighter on clean glass, and the prep is the dull part that makes the fun part work. Paint on the inside of the glass, never the outside — rain and frost eat an outdoor design in a week. Pick the window people actually see — the front room, or the bedroom window that faces the street."
        },
        {
          "t": "h3",
          "text": "The ten-minute prep"
        },
        {
          "items": [
            "Wash the glass with warm soapy water, then dry it with a microfibre cloth until it squeaks — streaks show through white paint",
            "Run painter's tape along the frame edges so a stray stroke never touches wood or paintwork",
            "Tape your template to the outside of the glass if you're tracing",
            "Lay an old towel on the sill to catch drips, and keep a damp cloth in your free hand for instant fixes"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "White chalk looks faint in daylight and shows its real contrast after dark, when the room lights go on behind it. Chalk markers build up in two passes — the second pass is where the design turns properly white."
        }
      ],
      "heading": "Prep the glass in ten minutes"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "If you've never painted a window before, start here. A snowflake border takes twenty minutes, needs no drawing skill, and looks like you planned it for weeks. The trick is repetition: the same three shapes at different sizes read as a pattern, not a mistake. Check the balance as you go."
        },
        {
          "t": "h3",
          "text": "The snowflake that always works"
        },
        {
          "items": [
            "Draw a small cross, then an X over it — six spokes from one centre point",
            "Add a short branch halfway along each spoke, angled back toward the centre",
            "Dot the ends of the spokes and put one fat dot in the middle",
            "Vary the size: big flakes at the corners, small ones along the edges, and leave gaps so the glass still shows through"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Border patterns to mix in"
        },
        {
          "items": [
            "Falling dots in three sizes, scattered like snow — the fastest filler there is",
            "A scalloped garland line with a dot hanging from each scallop",
            "Tiny stars made from two crossed triangles, with a dot in the centre"
          ],
          "t": "ul"
        }
      ],
      "heading": "Start simple: snowflakes, dots and a frosty border"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is the design that gets photographed from the pavement. A row of little houses with lit windows, a church steeple and a few pine trees runs along the bottom six inches of the glass — from outside it reads as a whole glowing village. It's the same shapes repeated: rectangles, triangles and dots. Give yourself one quiet evening, put on a playlist, and draw the skyline first."
        },
        {
          "t": "h3",
          "text": "Build the village in order"
        },
        {
          "items": [
            "Draw a wavy ground line about six inches up from the sill — snow is never straight",
            "Add five or six house rectangles of different heights along the line, each with a triangle roof",
            "Put one taller shape in the middle: a church with a steeple, or a house with a chimney",
            "Fill the gaps with pine trees — a tall triangle with three wavy tiers and a tiny trunk",
            "Draw small squares for windows on every house, then fill them in with the gold marker so they glow",
            "Add falling snow dots above the rooftops"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Make the windows glow"
        },
        {
          "t": "p",
          "text": "The gold windows are what sell the scene, so don't rush them. Fill each window square fully with gold or yellow, then add a thin white cross over the top for the window frame. When the room lights come on behind the glass, the whole village lights up — that's the moment neighbours stop and look. If a window smudges, wipe just that square with a damp cotton bud and redo it; you never need to start the house again."
        }
      ],
      "heading": "Paint a snowy village along the bottom"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Once the border and village are done, one big shape in the middle ties the window together. A wreath is the safest choice: it's a circle, it forgives wobbles, and it looks full even when it's simple. A tree works the same way if you keep it to triangles and dots. A few hand-lettered words across the top — Merry Christmas, or your family's name — make the window feel like yours instead of a shop display."
        },
        {
          "t": "h3",
          "text": "A wreath in fifteen minutes"
        },
        {
          "items": [
            "Draw a dinner-plate circle in the centre of the glass, then a smaller circle inside it",
            "Fill the ring between the two circles with short curved strokes, like pine needles — overlap them and don't aim for neat",
            "Add six red dots around the ring for berries, spaced evenly",
            "Tie a bow at the bottom: two loops and two tails, in red or gold"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Lettering that looks handwritten (because it is)"
        },
        {
          "items": [
            "\"Merry Christmas\" in big loose capitals across the top of the glass",
            "\"Let it Snow\" with a snowflake dotting the i",
            "Your family name and the year, small, in a bottom corner — it turns the window into a keepsake photo",
            "Write slowly with the thick marker and let the letters lean a little — perfect letters look printed, slightly wonky ones look hand-painted"
          ],
          "t": "ul"
        }
      ],
      "heading": "Wreaths, trees and hand lettering"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Window painting is one of the few Christmas crafts where kids do the real thing instead of watching you. The glass is at their height, the markers wash off hands and clothes, and a wonky snowflake still looks charming. Set up so the mess stays on the glass and the towel, not the sofa. Give each child one window or one corner and let them own it."
        },
        {
          "t": "h3",
          "text": "Set up a station they can't wreck"
        },
        {
          "items": [
            "Old t-shirts or aprons on everyone, and a towel on the sill and the floor below",
            "Chalk markers only — no open paint pots for under-sevens",
            "One damp cloth per child, so smudges get fixed on the spot instead of smeared",
            "A paper template taped to the outside for younger kids to trace: a snowman, a tree, a reindeer"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Designs kids actually finish"
        },
        {
          "t": "p",
          "text": "Handprints in white paint make good snowmen — one print for the body, one smaller above it for the head, then a carrot nose and coal eyes in marker. Fingerprint reindeer work the same way: brown thumbprints for the body, marker antlers on top. A hand-drawn advent countdown — numbers 1 to 25 in a grid, crossed off one a day — keeps them coming back to the window all December."
        }
      ],
      "heading": "Painting with kids (without repainting the room)"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The best part is the exit: nothing comes down in pieces, nothing leaves holes, no box to store in the loft. Wait for a mild day, open the window, and give yourself fifteen minutes per window. Painted on the inside, the whole design comes off in one wipe — even gold metallic marker gives in to warm water and a little patience."
        },
        {
          "t": "h3",
          "text": "The two-minute wipe-down"
        },
        {
          "items": [
            "Spray the glass with warm water and a drop of dish soap, and let it sit for one minute",
            "Wipe in circles with a damp microfibre cloth — most of the design lifts straight off",
            "For stubborn gold or thick paint, lay a warm damp cloth over the spot for two minutes, then wipe again",
            "Dry with a clean cloth and check in daylight for faint ghost lines"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Save the good ones for next year"
        },
        {
          "t": "p",
          "text": "Photograph the window at dusk with the room lights on before you wipe it — that's the shot worth keeping. Save your templates in a folder with the markers so next December starts in ten minutes. Keep the markers cool and upright: a fresh $8 pack each year is still cheaper than one shop-bought sticker set."
        }
      ],
      "heading": "Taking it all down in January"
    }
  ],
  "faqs": [
    {
      "a": "No, if you use the right products. Liquid chalk markers and washable tempera paint sit on the surface of the glass and wipe off with warm water. The damage comes from the wrong products — permanent markers, oil-based or acrylic paint — and from scraping with a razor blade. Stick to a damp cloth and a plastic scraper for cleanup.",
      "q": "Will window paint damage my windows or glass?"
    },
    {
      "a": "Painted on the inside of the glass, a design lasts the whole season — four to six weeks — without fading. Paint on the outside wears off in a week of rain and frost, so always paint from inside, on dry glass that isn't fogging up.",
      "q": "How long does a painted window last?"
    },
    {
      "a": "Yes — this is one of the most renter-friendly Christmas decorations there is. Nothing is nailed, stuck or drilled, and the paint wipes off completely in January. Chalk markers and washable paint leave no residue on glass, so most landlords never even notice.",
      "q": "Can I paint windows in a rented apartment?"
    },
    {
      "a": "Trace. Tape a printed template to the outside of the glass and paint over the lines from inside — the design shows straight through. Free templates are easy to find online, or draw one on paper and hold it up. The snowflake border and the falling-dots filler need no template at all, and they still look great.",
      "q": "What if I can't draw at all?"
    }
  ],
  "hero": {
    "src": "/img/a2-hero",
    "alt": "Cozy living room at dusk with a large window painted with white chalk snowflakes and a snowy village along the bottom, candles and a small Christmas tree beside it"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "src": "/img/a2-a",
        "alt": "Real chalk-marker painting on a home window: white houses and snowflakes drawn on the glass, with a fresh fir branch on the sill",
        "caption": "A real painted window: simple white houses and snowflakes are all it takes to build a whole village."
      }
    },
    {
      "after": 4,
      "img": {
        "src": "/img/a2-b",
        "alt": "White chalk wreath and pine trees painted on an old window at night, two lit candles on the wooden sill",
        "caption": "A painted wreath takes fifteen minutes and ties the whole window together."
      }
    }
  ]
}),
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
