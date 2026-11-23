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
  slug: string; title: string; bannerTitle?: string; category: string; subcategory: string;
  excerpt: string; date: string; readTime: number;
  motif: string; from: string; to: string;
  intro: string; sections: Section[]; faqs: Faq[];
  hero?: PostImage;
  video?: string;
  images?: { after: number; img: PostImage }[];
};

const P = (o: Post) => o;

export const POSTS: Post[] = [
  P({
    "bannerTitle": "15 Easy DIY Christmas Ornaments",
    "category": "diy-crafts",
    "date": "2026-11-23",
    "excerpt": "Easy DIY Christmas ornaments you can make in one weekend — paper stars, clay baubles, salt dough and hand-painted ornaments for your tree, all for under $15.",
    "faqs": [
      {
        "a": "Most ornaments in this guide cost between $0.50 and $2 each. A block of air-dry clay is about $6 and makes around 25 ornaments, paper stars cost almost nothing, and salt dough is flour, salt and water from the kitchen. All fifteen ornaments together come to under $15 — less than one bag of shop-bought baubles.",
        "q": "How much do easy DIY Christmas ornaments cost to make?"
      },
      {
        "a": "Paper stars. You need paper, scissors and ribbon, and the first good one takes about 15 minutes. Dried orange slice ornaments are just as easy — tie a slice and a cinnamon stick together with twine and you are done in five minutes. Start with one of those two, and move on to clay once you have got the hang of it.",
        "q": "Which easy DIY Christmas ornaments are best for beginners?"
      },
      {
        "a": "Use short lengths of ribbon tied in a loop rather than shop-bought wire hooks — ribbon grips the branch better. Hang heavier clay and salt dough ornaments on the thicker inner branches, keep them within easy reach, and check the loop knot is tight before you let go. A drop of hot glue where the ribbon meets the ornament stops it slipping.",
        "q": "How do you hang easy DIY Christmas ornaments so they don't fall off?"
      },
      {
        "a": "Years, if you seal them. Paint them, then add a coat of clear varnish or Mod Podge, and store them flat in tissue paper in a dry box. Without the varnish coat they soften in damp air and can go sticky, so that one step is worth the five minutes it takes.",
        "q": "How long do salt dough ornaments last?"
      }
    ],
    "from": "#4E8FB8",
    "hero": {
      "alt": "Hands hand-painting wooden Christmas ornaments with snowy tree and snowman designs, warm fairy lights glowing in the background",
      "src": "/img/a19-hero"
    },
    "images": [
      {
        "after": 2,
        "img": {
          "alt": "Handmade white air-dry clay star and Christmas tree ornaments with hanging holes, laid on kraft paper with pinecones and a pink ribbon",
          "caption": "Air-dry clay stars and a little tree, fresh from the cookie cutter — white clay on kraft paper with pinecones.",
          "src": "/img/a19-a"
        }
      },
      {
        "after": 4,
        "img": {
          "alt": "Salt dough Christmas ornaments painted red and white, hanging on a small Christmas tree with ribbon loops",
          "caption": "Salt dough stars and trees, painted and sealed — the slightly lopsided ones always end up being the favourites.",
          "src": "/img/a19-b"
        }
      },
      {
        "after": 6,
        "img": {
          "alt": "Hands hanging a wooden acorn ornament on a Christmas tree branch with warm fairy lights",
          "caption": "Hanging the ornaments — a wooden acorn going on the tree, with fairy lights glowing behind it.",
          "src": "/img/a19-c"
        }
      }
    ],
    "intro": "Easy DIY Christmas ornaments are having a moment — searches for easy DIY Christmas decorations are up 680% this year, and it is easy to see why. A handful of paper stars, a few hand-painted baubles and some salt dough shapes cost less than one bag of shop-bought ornaments, and they look like they came from a little craft fair, not a production line. We made all fifteen ornaments in this guide in a single weekend, most of them in under an hour each, using supplies from the dollar store and the kitchen cupboard. Below you will find the exact materials, the steps that actually matter, and the prices — so you can pick your favourites and get started tonight.",
    "motif": "snow",
    "readTime": 10,
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "The trick with handmade ornaments is not skill — it is restraint. One colour palette, one or two materials per ornament, and a finish that looks deliberate. A paper star in cream and gold looks like a shop piece; the same star in five clashing colours looks like a school project. Pick two colours for the whole tree — we used deep red and warm gold this year — and every ornament you make will sit happily next to the others."
          },
          {
            "t": "h3",
            "text": "What makes an ornament look handmade in a good way"
          },
          {
            "t": "p",
            "text": "Small, even details. A tidy knot instead of a blob of glue. A ribbon cut to the same length on every ornament. Edges sanded smooth on clay pieces. None of it takes long, and it is the difference between “oh, you made that?” and “where did you buy that?”"
          },
          {
            "items": [
              "Cost: most ornaments here cost $0.50–$2 each; the whole set of 15 stays under $15",
              "Time: paper stars take 15 minutes; clay ornaments take 30 minutes plus drying",
              "Skill level: if you can fold paper and stir dough, you can make all of these",
              "Supplies: paper, air-dry clay, salt, flour, acrylic paint, ribbon and twine — all from one shop run",
              "Kid-friendly: salt dough and paper stars are safe for little hands with supervision"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Before you start, make one test ornament: hang it on the tree and look at it from across the room. If it looks good there, the rest will too."
          }
        ],
        "heading": "Easy DIY Christmas Ornaments That Look Store-Bought"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Paper stars are the easiest win in this guide. They need nothing but paper and scissors, they fold flat for storage, and they look beautiful in a window where the light shines through them."
          },
          {
            "t": "h3",
            "text": "What you need for paper star ornaments"
          },
          {
            "items": [
              "6 sheets of A4 paper per star (cream, kraft or red — 80gsm copier paper works fine)",
              "Sharp scissors",
              "A ruler and pencil",
              "Thin gold or red ribbon, cut into 8-inch (20 cm) lengths",
              "A hole punch or a thick needle"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Skip the fancy craft paper on your first batch. Plain copier paper folds crisply, holds its shape, and costs almost nothing — and once you have got the fold right, you can make the same star in patterned paper for the tree."
          },
          {
            "t": "h3",
            "text": "Folding a paper star, step by step"
          },
          {
            "items": [
              "Cut each sheet into a 6-inch (15 cm) square — six squares make one star.",
              "Fold each square in half diagonally, then fold it in half again to make a small triangle.",
              "Cut three slits from the open edge toward the folded point, stopping about half an inch (1 cm) short.",
              "Open the square out, then fold the cut flaps toward the centre and glue or tape them in place to form the star points.",
              "Repeat with the other five squares, then glue the six points together at their bases to form a full star.",
              "Thread a ribbon through the top point and knot it — hang it and step back."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "The first star always looks a bit wonky. The second one looks good. By the third, you will be folding them without thinking."
          }
        ],
        "heading": "Scandi Paper Star Ornaments"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Air-dry clay is the closest thing to magic in this guide. You roll it out, stamp it, cut it, and two days later you have ornaments that look like they came from a pottery studio. A 2.2 lb (1 kg) block costs about $6 at the craft store and makes roughly 25 ornaments — that is about 25 cents each."
          },
          {
            "t": "h3",
            "text": "What you need for clay ornaments"
          },
          {
            "items": [
              "Air-dry clay, 2.2 lb (1 kg) block — about $6",
              "A rolling pin and two wooden rulers (they keep the thickness even)",
              "Cookie cutters — stars, trees and circles, 2–3 inches (5–8 cm)",
              "A straw or skewer for the hanging hole",
              "Fine sandpaper (220 grit) for smoothing edges",
              "White acrylic paint and a small brush, or gold paint pen for details",
              "Thin ribbon or twine, 8-inch (20 cm) lengths"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Making clay ornaments that don't crack"
          },
          {
            "items": [
              "Roll the clay out to about a quarter inch (5 mm) thick, using the rulers as guides so it stays even.",
              "Press the cookie cutters in firmly and lift the shapes out with a flat knife.",
              "Poke the hanging hole with a straw, about half an inch (1 cm) from the top edge.",
              "Let the ornaments dry flat for 24–48 hours, turning them once so both sides dry evenly.",
              "Sand the edges lightly, then paint or leave them plain — plain white clay with a gold edge looks lovely.",
              "Thread the ribbon through and knot it. Hang them and admire your work."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "The mistake most people make is rolling the clay too thin. Anything under a quarter inch cracks while it dries, especially around the hole. Keep it thick, dry it slowly away from radiators, and your ornaments will last for years."
          }
        ],
        "heading": "Air-Dry Clay Ornaments"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "If you can hold a paintbrush, you can paint a bauble. Plain wooden or glass baubles cost about $1 each at the dollar store, and a set of acrylic paint pens turns them into something personal — names, snowflakes, little stripes, or a simple sprig of holly on each one."
          },
          {
            "t": "h3",
            "text": "The easiest painted bauble designs"
          },
          {
            "items": [
              "Snowflakes: three crossed lines and a few dots — done in under a minute per bauble",
              "Stripes: painter's tape gives you clean lines with zero skill needed",
              "Names: write each person's name in gold paint pen for a personal touch",
              "Dots: a cotton bud dipped in paint makes perfect, even dots",
              "Half-dipped: dip the bottom half of a wooden bauble in paint and let it drip-dry for a two-tone look"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Paint pens beat brushes for baubles"
          },
          {
            "t": "p",
            "text": "A brush on a round bauble leaves streaks. Paint pens — about $8 for a set of twelve — give you clean lines, dry in minutes, and do not need water or cleanup. Shake the pen well, test it on paper first, and draw slowly. Let each bauble dry for at least an hour before you hang it, or the design will smudge on the ribbon."
          }
        ],
        "heading": "Hand-Painted Baubles: Easy DIY Christmas Ornaments for Beginners"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Salt dough is flour, salt and water — that is it. It costs pennies, it is safe for kids to handle, and it bakes hard enough to last for years. We make a batch every December with the kids, and the slightly lopsided stars always end up being the ones we love most."
          },
          {
            "t": "h3",
            "text": "Salt dough recipe"
          },
          {
            "items": [
              "2 cups (250 g) plain flour",
              "1 cup (300 g) fine table salt",
              "1 cup (240 ml) warm water",
              "Cookie cutters and a straw for the hole",
              "Acrylic paint and a clear varnish or Mod Podge to seal",
              "Ribbon, 8-inch (20 cm) lengths"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Method"
          },
          {
            "items": [
              "Mix the flour and salt in a bowl, then add the water a little at a time and stir until a firm dough forms.",
              "Knead for 3–4 minutes until smooth, then roll out to a quarter inch (5 mm) thick.",
              "Cut out shapes with cookie cutters and poke a hole near the top with a straw.",
              "Bake on a lined tray at 250°F (120°C) for 2 hours, turning once halfway through.",
              "Let them cool completely, then paint and seal with a coat of varnish.",
              "Thread the ribbon through and hang — or wrap them as gifts."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Two things worth knowing: keep every ornament the same thickness, or the thick ones will need longer in the oven — and the varnish coat is not optional. Without it, salt dough softens in a damp room and goes sticky; with it, ornaments from three Christmases ago still hang on our tree."
          }
        ],
        "heading": "Salt Dough Ornaments Kids Can Help With"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The same dried orange slices from our garland make beautiful ornaments. A slice tied with twine and a cinnamon stick looks like it came from a country Christmas market, and it smells faintly of spice for weeks."
          },
          {
            "t": "h3",
            "text": "What you need"
          },
          {
            "items": [
              "Dried orange slices, 2 inches (5 cm) across — buy them or dry your own at 200°F (95°C) for 2–3 hours",
              "Short cinnamon sticks, about 3 inches (8 cm)",
              "Natural twine, cut into 10-inch (25 cm) lengths",
              "A few star anise, if you like the look",
              "Optional: a dab of hot glue to hold the cinnamon stick in place"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Putting them together"
          },
          {
            "items": [
              "Lay a dried orange slice flat and place a cinnamon stick across the middle.",
              "Tie a length of twine around the slice and the stick, knotting it at the back.",
              "Loop the twine ends together at the top to make a hanger, about 4 inches (10 cm) long.",
              "Tuck a star anise under the knot for a finishing touch, if you like.",
              "Hang on the tree where the light catches the slice — near a window or a fairy light works best."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "These are the quickest ornaments in the guide — five minutes each once the slices are dry. They also make lovely gift tags: tie one to a wrapped present with the recipient's name written on the back in a gold pen."
          }
        ],
        "heading": "Dried Orange & Cinnamon Slice Ornaments"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Fifteen handmade ornaments deserve a good spot on the tree. Hang the heaviest ones — the clay and salt dough pieces — on the sturdier inner branches, and put the light paper stars on the tips where they can catch the light. Mix your handmade ornaments through the tree rather than grouping them together, so the whole tree feels personal."
          },
          {
            "t": "h3",
            "text": "Hanging tips that save ornaments"
          },
          {
            "items": [
              "Use ornament hooks or short lengths of ribbon rather than the wire hooks from the shop — ribbon grips better and looks softer",
              "Hang clay and salt dough ornaments no higher than you can comfortably reach — a fall from the top of the tree will crack them",
              "Keep paper stars away from candles and hot lights — they are paper, after all",
              "Step back every few ornaments and check the balance: too many on one side and the tree starts to lean"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Storing them for next year"
          },
          {
            "t": "p",
            "text": "Wrap each ornament in tissue paper and lay them in a single layer in a shoebox — never stack them loose in a bag. Paper stars fold flat and stack neatly. Keep the box somewhere cool and dry, and come next December you will open it and remember exactly which afternoon you made each one."
          }
        ],
        "heading": "Hanging, Styling & Storing Your Ornaments"
      }
    ],
    "slug": "easy-diy-christmas-ornaments",
    "subcategory": "Paper Crafts",
    "title": "Easy DIY Christmas Ornaments 2026: 15 Handmade Paper, Clay & Painted Ornaments for Your Tree",
    "to": "#275E7E"
  }),
  P({
  "bannerTitle": "Dried Orange Christmas Garland",
  "category": "diy-crafts",
  "date": "2026-11-23",
  "excerpt": "Dried orange Christmas garland with wooden beads and cinnamon sticks — a natural, handmade holiday decoration that takes about an hour, costs very little, and smells faintly of citrus and spice for weeks.",
  "faqs": [
    {
      "a": "About six to eight weeks indoors, as long as it stays dry. The slices slowly lose their bright amber colour after that, and the edges start to curl. Keep it out of steamy rooms and away from radiators and it will hold up for the whole festive season. If you store it flat in a dry box, you can often get a second Christmas out of it.",
      "q": "How long does a dried orange Christmas garland last?"
    },
    {
      "a": "Yes, and it is simple. Slice oranges about a quarter inch (5 mm) thick, blot them dry, and bake on a lined tray at 200°F (95°C) for 2–3 hours, turning them once. They are ready when they feel stiff and light with no soft spots. Let them cool completely before threading — warm slices are still soft and will tear on the needle.",
      "q": "Can I dry orange slices myself for a dried orange Christmas garland?"
    },
    {
      "a": "Hang it from three points instead of two: add a small hook or pin at the centre as well as the ends. Shortening the loops helps too, and keeping the spacing between slices even spreads the weight along the twine. If the garland is longer than about 5 feet (1.5 m), the centre support makes a big difference.",
      "q": "How do I stop my dried orange Christmas garland from sagging in the middle?"
    },
    {
      "a": "A covered porch or a sheltered doorway is fine for a few weeks, but a fully open spot is not. Rain and damp air soften the slices fast, and they can go mouldy within days. If you want the same look outside, use the garland under cover and bring it in during wet weather — or make a second, shorter one for the door and keep the long one indoors.",
      "q": "Can I hang a dried orange Christmas garland outside?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Handmade dried orange slice Christmas garland with wooden beads and cinnamon sticks draped across a cream mantel with evergreen branches",
    "src": "/img/a18-hero"
  },
  "images": [
    {
      "after": 3,
      "img": {
        "alt": "Handmade dried orange slice Christmas garland with wooden beads and cinnamon sticks hanging on a cream wall with evergreen branches",
        "caption": "The finished garland hanging on a cream wall — dried orange slices, wooden beads and cinnamon sticks, with a little evergreen tucked in.",
        "src": "/img/a18-a"
      }
    },
    {
      "after": 5,
      "img": {
        "alt": "Dried orange Christmas garland styled on a cream wall above a wooden console with a small potted evergreen and warm fairy lights",
        "caption": "Styled above a wooden console with a small potted evergreen and fairy lights — the slices glow once the lights come on.",
        "src": "/img/a18-b"
      }
    }
  ],
  "intro": "A dried orange Christmas garland is one of those projects that looks far harder than it is. You thread a few dried orange slices, wooden beads and cinnamon sticks onto twine, tie a loop at each end, and suddenly you have the kind of natural holiday decoration people assume came from a fancy shop. The whole make takes about an hour, the supplies cost very little, and the garland smells faintly of citrus and spice for weeks. The short video above shows the whole thing in thirty seconds — and below you will find every step written out, plus the styling ideas and storage tips that keep it looking good all season.",
  "motif": "snow",
  "readTime": 8,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Christmas decorating has a habit of getting loud — glitter, plastic, blinking lights. A dried orange garland goes the other way. The slices glow amber when the light hits them, the cinnamon sticks add warmth, and the wooden beads keep the whole thing calm and simple. It fits a Scandinavian living room, a rustic farmhouse kitchen, and a small apartment mantel just as well."
        },
        {
          "items": [
            "Cheap to make: oranges, twine and beads cost less than one shop-bought garland",
            "Smells wonderful: dried citrus and cinnamon give off a gentle scent for weeks",
            "Light and easy to hang: no nails in the wall, just a loop over a hook or a pin",
            "Kind to the planet: everything on it is natural and compostable when the season ends",
            "Easy to match: the warm amber tones sit well with greens, creams and wood"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "It is also a good first project if you do not think of yourself as crafty. There is no gluing, no sewing and no special tool beyond a blunt needle. If you can thread a bead, you can make this garland — and the finished piece looks like far more work than it was."
        }
      ],
      "heading": "Why a Dried Orange Christmas Garland Works So Well"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Everything on this list is easy to find. Dried orange slices are sold in craft shops and online, but you can also dry your own — see the note in the FAQs. We used slices about 2 inches (5 cm) across for the garland in the video; bigger slices look grand, smaller ones look dainty, so pick the size that suits your space."
        },
        {
          "items": [
            "10–14 fully dried orange slices (2 inches / 5 cm across works well)",
            "Natural twine or jute string, about 6 feet (1.8 m) for a mantel-length garland",
            "20–30 wooden beads, about 0.5 inch (12 mm) across",
            "6–8 short cinnamon sticks, about 3 inches (8 cm) long",
            "A blunt large-eye needle (a large-eye craft needle is ideal)",
            "Scissors",
            "Optional: a small piece of fresh evergreen, a few pinecones, or a linen ribbon for styling"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Picking good dried orange slices"
        },
        {
          "t": "p",
          "text": "Look for slices that are fully dry — stiff, light, and with no soft or sticky spots. A slice that still feels damp will go mouldy on the garland, so if yours bend instead of holding their shape, pop them in a low oven (200°F / 95°C) for another hour and let them cool before you start."
        }
      ],
      "heading": "What You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Start by laying everything out on a clean table, just like the opening shot of the video. Sort the orange slices by size and set aside any that are cracked or uneven — keep the prettiest, roundest ones for the front-facing spots and use the rest toward the ends, where they will be seen less."
        },
        {
          "items": [
            "Lay out the slices, beads and cinnamon sticks in a row so you can see the pattern before you start threading.",
            "Cut the twine to length: measure your hanging spot, then add about 12 inches (30 cm) at each end for the loops.",
            "Thread the blunt needle with the twine and knot the tail end so nothing slips off while you work.",
            "Decide your repeating pattern — we used two beads, one slice, one cinnamon stick, and repeated it down the line."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "A quick pattern test"
        },
        {
          "t": "p",
          "text": "Before you thread anything, lay one repeat of the pattern flat on the table. It takes thirty seconds and saves you from unthreading half a garland because the spacing looked wrong once it was hanging."
        }
      ],
      "heading": "Step 1: Prepare and Sort Your Dried Orange Slices"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Threading is the slow, calm part of the project — put on some music and take your time. Push the needle through the centre of each orange slice, where the flesh is softest, and slide it down the twine before adding the next piece."
        },
        {
          "items": [
            "Push the needle through the middle of the first orange slice and slide it down the twine.",
            "Add two wooden beads, then a cinnamon stick tied on with a small knot of twine so it sits flat against the slice.",
            "Repeat the pattern — slice, beads, cinnamon — keeping about an inch (2.5 cm) between pieces.",
            "Every few repeats, hold the garland up and check the spacing looks even before you carry on."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Keeping the thread path tidy"
        },
        {
          "t": "p",
          "text": "Go through the centre of each slice rather than the edge, or the slices will tilt and spin. If a slice cracks as you push the needle through, set it aside and use another one — forcing it only makes the crack worse, and a cracked slice will keep splitting once the garland is hanging."
        }
      ],
      "heading": "Step 2: Thread the Twine, Beads and Cinnamon Sticks"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Once the last bead is on, tie a firm knot at the end of the twine so nothing slides off, then make a loop at each end. The loops are what the garland hangs from, so make them big enough to slip over a hook, a nail, or a small adhesive hook."
        },
        {
          "items": [
            "Knot the twine firmly after the last bead, then trim the tail to about an inch.",
            "Fold each end back on itself and tie a secure loop, about 2 inches (5 cm) across.",
            "Hang the garland and step back — straighten the slices so they face forward and the beads sit evenly.",
            "Give the twine a gentle tug at each end so the loops sit flat and the garland hangs in a soft curve."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Getting the drape right"
        },
        {
          "t": "p",
          "text": "A garland looks best with a gentle dip in the middle, not pulled tight like a washing line. If it sags too much in the centre, shorten the loops a little; if it looks stiff, let out a few inches of twine at one end and re-tie."
        }
      ],
      "heading": "Step 3: Tie the Loops and Hang Your Garland"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The garland does most of the work on its own, but a little styling makes it look finished. It looks best where the light can shine through the slices — a window, a mantel, or a shelf near a lamp."
        },
        {
          "items": [
            "Mantel: drape it across the front edge with a few sprigs of fresh evergreen tucked behind it",
            "Window: hang it across the top of the frame so the slices catch the daylight",
            "Stair banister: wind it loosely around the rail with the loops tied at each newel post",
            "Table: lay it in a loose curve down the centre of the table as a runner, with candles at each end",
            "Door: hang a short version across a doorway, or wrap it around a simple evergreen wreath"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Keep the rest of the styling simple — cream linen, plain wood and green branches are all this garland needs. Too many colours around it and the warm amber slices stop standing out."
        }
      ],
      "heading": "Styling Your Dried Orange Christmas Garland"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Dried orange slices keep their colour for about six to eight weeks indoors, as long as they stay dry. Keep the garland out of steamy kitchens and away from radiators — damp air is what makes slices go soft, and heat fades their colour faster."
        },
        {
          "t": "h3",
          "text": "Storing it for next year"
        },
        {
          "t": "p",
          "text": "If you want to use the garland again, take it down before the slices start to curl at the edges. Lay it flat in a box lined with tissue paper, keep it somewhere dry, and it will usually last a second Christmas. The beads and cinnamon sticks keep for years, so even if the slices are past their best, you only need fresh oranges next time."
        },
        {
          "t": "h3",
          "text": "Ways to change it up"
        },
        {
          "t": "p",
          "text": "Swap the wooden beads for dried apple slices for a paler, softer look, or add a few star anise for a darker spice note. A thin linen ribbon threaded between the slices gives a softer, more romantic feel, and a short string of warm fairy lights woven through the garland makes the slices glow at night — just keep the lights away from any fresh evergreen tucked behind it."
        }
      ],
      "heading": "Care, Storage and Easy Variations"
    }
  ],
  "slug": "dried-orange-christmas-garland",
  "subcategory": "Wreaths & Garlands",
  "title": "Dried Orange Christmas Garland – Natural Holiday Decor with Cinnamon Sticks and Wooden Beads",
  "to": "#275E7E",
  "video": "dried-orange-christmas-garland"
  }),
  P({
  "bannerTitle": "Festive Cookie Decorating Ideas",
  "category": "food-recipes",
  "date": "2026-11-23",
  "excerpt": "Christmas cookie decorating ideas for beginners: royal icing, flooding, wet-on-wet dots and sprinkle finishes — pretty cookies, no fancy tools needed.",
  "faqs": [
    {
      "a": "Royal icing, made with powdered sugar and meringue powder. It dries hard and smooth, so you can stack and gift the cookies, and it holds fine piped details. Buttercream tastes great but stays soft, so it smears the moment cookies touch each other — save it for cookies you'll eat the same day.",
      "q": "What icing is best for Christmas cookie decorating ideas?"
    },
    {
      "a": "Bake the cookies up to 3 days ahead and keep them in an airtight tin, or freeze undecorated cookies for up to 3 months. Decorate 1–2 days before the party and let the icing dry overnight — 8 hours at least — before you stack or box them. Fully decorated cookies keep about 2 weeks in a tin at room temperature.",
      "q": "How far ahead can I start Christmas cookie decorating ideas for a party?"
    },
    {
      "a": "Yes — sprinkles and dipping are the best jobs for small hands. Let kids scatter sprinkles on wet icing, dip cookies in marbled icing, and paint with food colouring on dried icing. Leave the piping bags to the adults, or fill a small zip bag with a big snipped hole so the lines stay chunky and fun.",
      "q": "Can kids help with Christmas cookie decorating ideas?"
    },
    {
      "a": "Cracks usually mean the icing dried too fast in a warm or dry room — a fan nearby helps, but keep cookies away from radiators. Colours bleed when the flood layer is too wet or the next layer goes on before the first has crusted, so let each layer set for 20–30 minutes. And always use gel colouring, not liquid: liquid adds water and thins the icing.",
      "q": "Why did my royal icing crack or bleed?"
    }
  ],
  "from": "#DE7A3D",
  "hero": {
    "alt": "Three plates of decorated Christmas cookies — red and green flooded stars and trees, gingerbread men and chocolate crinkle cookies — with a lit candle, evergreen and a piping bag on a dark wooden table",
    "src": "/img/a17-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "A hand piping white royal icing onto gingerbread cookies on a white table",
        "caption": "Outlining with white royal icing — the first move in every flooded design.",
        "src": "/img/a17-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "A hand piping pink icing onto Christmas cookies with colourful sprinkles on a cooling rack",
        "caption": "Sprinkles go on while the icing is still wet — that's the whole trick.",
        "src": "/img/a17-b"
      }
    },
    {
      "after": 6,
      "img": {
        "alt": "Finished decorated Christmas cookies cooling on a wire rack — snowflakes, candy canes and trees in red, green and white icing",
        "caption": "The finished tray, drying on the rack — give it overnight before you stack or box the cookies.",
        "src": "/img/a17-c"
      }
    }
  ],
  "intro": "The first tray of Christmas cookies I ever decorated looked like a crime scene — red icing in the green bowl, sprinkles in the carpet, and one gingerbread man with three eyes. Fifteen Decembers later, my kitchen still gets messy, but the cookies look like the ones on the cards. The secret isn't talent. It's one good royal icing recipe, a piping bag with a tiny hole, and knowing which designs to try first. These Christmas cookie decorating ideas start simple — outlining, flooding, dots — and build up to marbling and stencils once your hands stop shaking. No fancy tools, no pastry school, just a plan that works.",
  "motif": "cookie",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "A decorated cookie is only as good as the cookie underneath it. Soft, puffy cookies spread in the oven, so the tree you cut turns into a blob and the icing slides off the edges. You want a firm, flat cut-out cookie with sharp edges — the kind that holds its shape and gives the icing a clean border to sit inside."
        },
        {
          "t": "h3",
          "text": "Why cut-out cookies need a no-spread dough"
        },
        {
          "t": "p",
          "text": "The recipe below is the one I make every December. It rolls out clean, cuts without sticking, and bakes flat — no domed middles, no spread edges. One batch makes about 24 medium cookies, which is a good afternoon's worth of decorating for two people."
        },
        {
          "t": "h3",
          "text": "The base cookie recipe"
        },
        {
          "items": [
            "2¾ cups (345g) plain flour, spooned and levelled",
            "1 teaspoon baking powder",
            "½ teaspoon fine salt",
            "1 cup (225g) unsalted butter, softened",
            "1 cup (200g) granulated sugar",
            "1 large egg, at room temperature",
            "2 teaspoons vanilla extract",
            "½ teaspoon almond extract (optional — skip it if there's a nut allergy in the house)"
          ],
          "t": "ul"
        },
        {
          "items": [
            "Beat the butter and sugar together for 3 minutes until pale and fluffy — this is what keeps the cookies tender.",
            "Add the egg and both extracts, then beat again for 30 seconds.",
            "Stir in the flour, baking powder and salt on low speed until the dough just comes together. Don't overmix.",
            "Split the dough in two, flatten into discs, wrap in cling film and chill for at least 1 hour (overnight is fine).",
            "Roll to ¼ inch thick on a lightly floured surface, cut your shapes, and chill the cut cookies on the tray for 15 minutes.",
            "Bake at 350°F (175°C) for 9–11 minutes, until the edges are just set and the middles look pale. Cool 10 minutes on the tray, then move to a rack."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Cool the cookies completely before a drop of icing touches them — warm cookies melt royal icing into a puddle. I bake in the morning and decorate after lunch, and that gap saves more cookies than any piping tip ever will."
        }
      ],
      "heading": "Christmas Cookie Decorating Ideas Start With the Right Base Cookie"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Royal icing is the workhorse here. It dries hard and smooth, so you can stack the cookies in a tin, and it takes colour like a dream. Buttercream tastes lovely, but it never sets, so it smears the moment two cookies touch. For decorating, royal icing wins every time."
        },
        {
          "t": "h3",
          "text": "The 15-second flooding rule"
        },
        {
          "t": "p",
          "text": "Royal icing comes in two thicknesses. Stiff icing holds a peak — that's your outline. Flood icing flows flat — that's your fill. The test is simple: lift the spoon and let a ribbon of icing fall back into the bowl. If it melts flat in about 15 seconds, it's flood icing. If it holds its shape, add water a few drops at a time and test again."
        },
        {
          "t": "h3",
          "text": "The recipe"
        },
        {
          "items": [
            "4 cups (480g) powdered sugar, sifted — lumps clog piping tips",
            "3 tablespoons meringue powder",
            "6 tablespoons lukewarm water, plus a little more for thinning",
            "½ teaspoon clear vanilla extract (regular vanilla tints white icing cream)",
            "Gel food colouring in red, green and white — gel, not liquid, so it doesn't thin the icing"
          ],
          "t": "ul"
        },
        {
          "items": [
            "Whisk the powdered sugar and meringue powder together in a large bowl.",
            "Add the water and vanilla, then beat on medium for 4–5 minutes until stiff peaks form. This is your stiff icing — scoop about a third into a bowl for outlining.",
            "For flood icing, add water a few drops at a time to the rest, stirring until it passes the 15-second test.",
            "Tint each bowl with gel colouring — a toothpick tip of gel goes a long way. Red needs more than you'd think; add it in two rounds and wait a minute, because the colour deepens as it sits.",
            "Cover each bowl with a damp tea towel or cling film pressed right onto the surface. Royal icing crusts in minutes if you leave it open."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "One batch covers about 24 cookies, and it keeps 2 weeks in the fridge in a sealed tub — just re-beat it for a minute before you use it again."
        }
      ],
      "heading": "Royal Icing: The One Recipe You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Every fancy cookie on Pinterest starts with these two moves. The outline is a thin wall of stiff icing around the edge; the flood fills the middle like water in a pond. Get these two right and the rest is just playing."
        },
        {
          "t": "h3",
          "text": "Pipe the outline first, then fill it in"
        },
        {
          "items": [
            "Snip the very tip off a piping bag (or a zip bag) — a 2mm hole is plenty. Bigger holes make fat lines you can't fix.",
            "Hold the bag at 45 degrees, squeeze gently, and trace the cookie's edge about 2mm in from the rim. Go slow. A wobbly line is fine — nobody sees it once the flood goes in.",
            "Let the outline set for 10 minutes, then spoon flood icing into the middle and nudge it to the edges with a toothpick or scribe tool.",
            "Pop any air bubbles with the toothpick, and give the tray one gentle tap on the counter so the icing settles flat."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Fixing a wobbly line"
        },
        {
          "t": "p",
          "text": "If the outline wobbles, wait until it dries and scrape the bad bit off with a knife — dried royal icing lifts off cleanly. If the flood runs over the edge, you outlined too close to the rim or the flood is too thin; next time, leave a wider gap and test the 15 seconds again. My first dozen flooded cookies looked rough, and the thirteenth looked like the shop ones. That's normal."
        }
      ],
      "heading": "Outline and Flood: The First Technique to Learn"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Wet-on-wet means adding icing while the base flood is still wet, so the colours melt into each other and dry perfectly flat. It looks like it took real skill. It takes about thirty seconds a cookie."
        },
        {
          "t": "h3",
          "text": "Polka dots in under a minute"
        },
        {
          "items": [
            "Flood a tree or star cookie in green or red, then right away dot small drops of white flood icing on top with a toothpick.",
            "For hearts, pipe two dots side by side, then drag a toothpick down through the middle of both — the dots stretch into a heart shape.",
            "Work fast: you've got about 2–3 minutes before the base starts to crust and the dots sit on top instead of sinking in."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "The sweater-cookie trick"
        },
        {
          "t": "p",
          "text": "Flood a round or mitten cookie in cream, then pipe thin wavy lines of red and green across it while it's still wet. Drag a toothpick through the lines from top to bottom and they ripple into a knit pattern. It looks like a tiny Christmas jumper, and it's the cookie people photograph first."
        }
      ],
      "heading": "Wet-on-Wet Christmas Cookie Decorating Ideas: Dots, Hearts and Sweater Patterns"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Sprinkles are the fastest way to make a plain cookie look finished, but timing is everything. Add them while the icing is wet and they stick. Wait ten minutes and they bounce off onto the table."
        },
        {
          "t": "h3",
          "text": "When to add sprinkles"
        },
        {
          "items": [
            "On wet flood icing: scatter within the first minute, while the surface still shines",
            "On dry icing: dab a tiny dot of fresh icing as glue, then press the sprinkle in",
            "Sanding sugar goes on wet icing too — it melts into the surface and gives a frosted sparkle",
            "Sugar pearls and dragées need a dot of stiff icing to hold them, since they're heavy"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "A sprinkle shopping list"
        },
        {
          "t": "p",
          "text": "You don't need twenty jars. Five cover almost everything: red and green jimmies, white nonpareils, gold star sprinkles, sanding sugar in white and red, and one jar of mixed Christmas sprinkles for the kids' cookies. A small jar costs $2–3 at the supermarket, and one jar decorates about three dozen cookies."
        }
      ],
      "heading": "Sprinkles, Sanding Sugar and Edible Glitter"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Once flooding feels easy, these three techniques make the tray look like a bakery made it. None of them needs new tools — a baking tray, a paintbrush and a stencil are enough."
        },
        {
          "t": "h3",
          "text": "Marbled icing in a baking tray"
        },
        {
          "items": [
            "Pour white flood icing into a shallow baking tray, then drizzle thin lines of red and green across it.",
            "Drag a toothpick through the lines in one direction, then the other — two passes is enough. More than that and the colours turn muddy.",
            "Dip the top of a plain cookie face-down into the icing, lift it straight up, and let the extra drip off for 10 seconds."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Painting on dried icing"
        },
        {
          "t": "p",
          "text": "Flood a cookie white and let it dry overnight. Then mix a drop of gel colouring with a few drops of vodka or lemon extract — the alcohol dries fast and leaves the colour behind — and paint with a clean food-safe brush. Snowflakes, holly leaves and simple stripes all work, and mistakes wipe off with a damp cotton bud while the paint is still wet. Stencils work the same way: hold the stencil flat, swipe thick white icing across it with a palette knife, and lift straight up."
        }
      ],
      "heading": "Marbling, Watercolor and Stencils for a Fancy Finish"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The hardest part of decorating is waiting. Royal icing feels dry to the touch in about an hour, but it needs 8 hours — overnight is safest — before you can stack the cookies. Stack them too soon and the designs smudge, and there's no fixing a smudge."
        },
        {
          "t": "h3",
          "text": "How long royal icing really takes to dry"
        },
        {
          "items": [
            "Thin flood layers: dry to the touch in 1–2 hours, fully hard in 8 hours",
            "Thick piped details: allow a full 24 hours before stacking",
            "Drying in a humid kitchen takes longer — run a fan nearby, not heat",
            "Don't use the oven to speed it up; heat melts the icing and cracks the surface"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Packing cookies for a cookie exchange"
        },
        {
          "t": "p",
          "text": "Layer the cookies in a tin or sturdy box with parchment between each layer, and tuck a little tissue paper into the gaps so nothing slides around. A dozen decorated cookies in a $3 kraft box with twine and a sprig of evergreen looks like a gift from a bakery, and it's the box people remember. Decorated cookies keep 2 weeks in an airtight tin at room temperature, and undecorated baked cookies freeze for up to 3 months — bake in November, decorate in December, and the whole season stays calm."
        }
      ],
      "heading": "Drying, Storing and Gifting Your Finished Cookies"
    }
  ],
  "slug": "christmas-cookie-decorating-ideas",
  "subcategory": "Cookies & Baking",
  "title": "Christmas Cookie Decorating Ideas 2026: Easy Royal Icing, Flooding & Sprinkle Designs for Beginners",
  "to": "#A83E1B"
}),
  P({
  "bannerTitle": "Fall Mason Jar Lanterns",
  "category": "diy-crafts",
  "date": "2026-11-23",
  "excerpt": "Fall mason jar lanterns turn three plain jars into glowing autumn light with tissue paper, jute rope and battery fairy lights — cheap, quick, and lovely on a mantel or dinner table.",
  "faqs": [
    {
      "a": "About 45 minutes of hands-on work, plus at least an hour of drying time. Tearing the tissue takes ten minutes, covering the three jars takes about half an hour, and the jute bows and fairy lights take five minutes at the end. If you leave the jars to dry overnight, the whole project fits into one relaxed evening — start after dinner and the lanterns are ready for the mantel by bedtime.",
      "q": "How long do fall mason jar lanterns take to make?"
    },
    {
      "a": "No — stick to battery-powered LED fairy lights. Tissue paper and decoupage medium are both flammable, and a real flame inside a paper-covered jar is a fire risk, even for a few minutes. LED fairy lights give the same warm glow, stay cool to the touch, and you can leave them on all evening without worry. If you want a flickering candle look, buy fairy lights with a flicker setting — most craft shops stock them.",
      "q": "Can I use real candles in fall mason jar lanterns?"
    },
    {
      "a": "Thin, translucent gift-wrap tissue in amber, orange and cream. Hold a sheet up to a window: if the light shines through easily, it's right. Thick craft tissue blocks the light and the lanterns come out dull. One sheet of each colour covers three pint jars with pieces to spare. Avoid tissue with glitter or metallic print — it looks patchy once the decoupage medium goes over it.",
      "q": "What kind of tissue paper works best for fall mason jar lanterns?"
    },
    {
      "a": "Yes — tearing the tissue and smoothing it onto the jars is a great job for kids, and the torn edges are the whole look, so there's no way to get it wrong. Let them pick the colours and tear the pieces while you handle the brushing. Use a washable decoupage medium and cover the table with newspaper, and the clean-up takes two minutes. Kids also love switching the fairy lights on at the end — it's the best part.",
      "q": "Can kids help make fall mason jar lanterns?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Three glowing fall mason jar lanterns in amber, orange and cream tissue paper with jute rope bows and dried leaves on a wooden table",
    "src": "/img/a16-hero"
  },
  "images": [
    {
      "after": 3,
      "img": {
        "alt": "Three handmade fall mason jar lanterns in amber, orange and cream tissue paper with jute rope bows, glowing warmly",
        "caption": "The finished lanterns in amber, orange and cream — tissue paper, jute rope and a warm glow.",
        "src": "/img/a16-a"
      }
    },
    {
      "after": 5,
      "img": {
        "alt": "Fall mason jar lanterns with fairy lights styled on a wooden mantel beside old books and dried leaves",
        "caption": "Styled on the mantel with old books and dried leaves — the fairy lights do all the glowing.",
        "src": "/img/a16-b"
      }
    }
  ],
  "intro": "Fall mason jar lanterns are the easiest way we know to make a room feel like autumn after dark. Three plain jars, a few sheets of tissue paper, some jute rope and a string of battery fairy lights — that's the whole list, and the finished lanterns glow like amber on a mantel or a dinner table. We made our first set on a rainy Saturday with jars from the back of the cupboard, and they stayed out all season. The video above shows the full make in thirty seconds, and below you'll find every step written out, the exact supplies, and the small choices that keep the tissue smooth instead of wrinkled.",
  "motif": "snow",
  "readTime": 8,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "The idea works because the tissue paper does the hard work for you. Hold a sheet of amber tissue up to a light and you get that warm, honeyed glow that lamps can't copy — the paper softens the light and spreads it across the whole jar. Layer orange over amber and the glow deepens; leave the cream jar plain and it shines pale and soft beside them. The three jars together look like a set, even though each one took five minutes."
        },
        {
          "items": [
            "Cheap: three jars, a pack of tissue paper and one string of fairy lights costs less than a takeaway lunch",
            "Fast: about 45 minutes from start to finish, most of it drying time",
            "Safe: battery fairy lights stay cool, so the lanterns can sit near curtains, books and dried leaves",
            "Forgiving: torn edges and overlaps are the whole look — there is no wrong way to stick the paper on",
            "Reusable: the jars last for years — swap the tissue colour and they fit Christmas, spring or a birthday table"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "They also solve the small problem of a dark corner. A mantel, a windowsill, a shelf that never gets the sun — one lantern there in the evening changes the whole room. Put all three together for a centrepiece, or split them up around the house."
        }
      ],
      "heading": "Why Fall Mason Jar Lanterns Work So Well"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The supply list is short, and you probably own half of it already. Mason jars turn up in most kitchens, and the rest costs a few dollars at a craft shop. Check the fairy lights work before you start — there's nothing worse than finishing a lantern and finding the lights are dead."
        },
        {
          "items": [
            "Three clean mason jars, any size — pint jars look best, but quart jars work too",
            "Translucent tissue paper in amber, orange and cream — one sheet of each colour is plenty",
            "Decoupage medium, one small bottle",
            "A flat paintbrush, about an inch wide",
            "Jute rope or twine, about an arm's length per jar",
            "Battery-powered LED fairy lights, one short string per jar",
            "Scissors, for trimming the rope and any stray paper",
            "Dried leaves, for styling the finished lanterns"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Picking the right jars"
        },
        {
          "t": "p",
          "text": "Any clean glass jar works, but wide-mouth mason jars are the easiest — you can reach inside to place the lights, and the straight sides take the tissue without wrinkles. Wash the jars in warm soapy water, dry them well, and wipe the outside with a dry cloth. Any grease or dust stops the tissue sticking, so don't skip this step."
        },
        {
          "t": "h3",
          "text": "Tissue paper: thin beats thick"
        },
        {
          "t": "p",
          "text": "Look for the thin, almost see-through tissue paper sold for gift wrapping, not the thick craft kind. Hold a sheet up to a window: if the light shines through easily, it's right. Thick paper blocks the light and the lanterns come out dull."
        }
      ],
      "heading": "What You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Start with the jars and the paper, before any glue comes out. Clean jars and torn paper are the whole prep, and getting them ready first means you won't be tearing paper with sticky fingers later."
        },
        {
          "t": "h3",
          "text": "Cleaning the jars"
        },
        {
          "t": "p",
          "text": "Wash each jar in warm soapy water and dry it inside and out. Run your finger around the outside — it should feel smooth, with no sticky spots. Set the jars upside down on a tea towel for ten minutes so the last drops dry off, then stand them upright on your work table."
        },
        {
          "items": [
            "Tear the tissue paper into pieces about two inches across — no scissors, torn edges blend better than cut ones",
            "Keep the colours in three small piles so you can grab amber, orange or cream without thinking",
            "Tear a few extra pieces of each colour; you'll use more than you expect",
            "Clear a flat space on the table and lay down newspaper — decoupage medium washes off, but it sticks to wood while it's wet",
            "Check the fairy lights now: switch each string on and count the bulbs"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Tearing instead of cutting matters: a cut edge shows as a hard line under the light, while a torn edge fades into the next piece, so the jar looks like coloured glass instead of a patchwork."
        }
      ],
      "heading": "Tearing the Tissue Paper and Cleaning the Jars"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is the step the video shows best, so watch it once before you start. The method is simple: brush, stick, smooth — and repeat until the jar is covered. Work on one jar at a time and don't rush the smoothing."
        },
        {
          "items": [
            "Brush a thin, even coat of decoupage medium onto one patch of the jar, about the size of your palm",
            "Lay a tissue piece over the wet patch and press it down gently with the brush",
            "Brush a thin coat of medium over the top of the tissue to seal it",
            "Add the next piece so it overlaps the first by about half an inch",
            "Keep going until the whole jar is covered, then set it aside and start the next one"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Keeping the tissue smooth"
        },
        {
          "t": "p",
          "text": "Two things keep the finish neat. First, thin coats — a thick puddle wrinkles the paper as it dries, while a thin coat dries flat. Second, smooth from the middle of each piece out to the edges with the flat of the brush, not your fingers, which leave prints in the wet medium. Small wrinkles are fine, but press big folds flat while the medium is still wet."
        },
        {
          "t": "p",
          "text": "If a piece tears while you're smoothing it, leave it. A torn piece under the next layer just looks like another layer. This is the most forgiving craft we know — the light hides almost every mistake."
        }
      ],
      "heading": "Brushing On Decoupage Medium and Tissue Paper"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Once all three jars are covered, the hard part is waiting. The tissue needs to dry fully before you touch it again, or the paper slides and bunches. Give it at least an hour — overnight is even better if you can wait."
        },
        {
          "items": [
            "Leave the jars to dry for at least an hour, somewhere warm and out of the way",
            "Check the tissue is fully dry by touching it lightly — it should feel papery, not tacky",
            "Cut a length of jute rope and wrap it twice around the neck of the jar",
            "Tie a small bow at the front and trim the ends to about two inches",
            "Drop a string of fairy lights into each jar, battery pack tucked just inside the rim",
            "Switch the lights on and check the glow before you style the jars"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "The jute bow"
        },
        {
          "t": "p",
          "text": "The bow is the detail that makes the jars look finished instead of half-done. Wrap the rope snug, not tight — too tight and it slides down the neck; too loose and it slips off when you move the jar. A double wrap holds better than a single one, and the bow sits best at the front, just under the rim. If the rope frays at the ends, trim it with sharp scissors and the fray stops."
        },
        {
          "t": "p",
          "text": "For the lights, coil the string loosely inside the jar rather than stuffing it in — a loose coil spreads the light evenly, while a tight ball leaves one bright spot and dark corners. The battery pack sits inside the rim where the jute hides it."
        }
      ],
      "heading": "Drying, Jute Rope and Fairy Lights"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Three lanterns together make a centrepiece; one on its own makes a corner feel cared for. The styling takes two minutes and uses whatever autumn bits you have lying around."
        },
        {
          "items": [
            "On the mantel: line all three up with a few dried leaves scattered in front, tallest in the middle",
            "On the dinner table: one lantern at each end and one in the centre, with a linen runner underneath",
            "By the front door: a single lantern on the console table, so guests see the glow as they come in",
            "On a windowsill: the light shines out onto the street as well as into the room",
            "With books: stack two old books beside a lantern on a shelf — the warm light makes the whole shelf look intentional"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Repeat the amber and orange elsewhere in the room — a few dried leaves on the coffee table, a rust cushion on the sofa — and the lanterns stop looking like an add-on."
        }
      ],
      "heading": "Styling Your Fall Mason Jar Lanterns"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Look after them and the lanterns will last the whole season — and the jars will last for years. Keep them out of damp and away from radiators, so the tissue stays stuck and the colours stay warm. Switch the fairy lights off when you leave the room; the batteries last weeks that way, and the lanterns are ready whenever you want them."
        },
        {
          "t": "h3",
          "text": "Ways to change it up"
        },
        {
          "t": "p",
          "text": "The same make works all year with a few swaps. Trade the amber tissue for deep red and gold and the lanterns fit a Christmas table. Use pale green and cream for spring, with a few fresh leaves tucked under the jute. Add a dried orange slice or a cinnamon stick under the bow for a scented version, or write a name on a small kraft tag and tie it to the rope — the lanterns make sweet place markers for a Friendsgiving table, and guests can take them home."
        },
        {
          "t": "p",
          "text": "When autumn ends, wipe the jars clean and store them upright in a box with the lids off, so no damp gets trapped inside. The tissue peels off with warm water if you want a fresh colour next year — or leave it on, ready for the next cold evening."
        }
      ],
      "heading": "Care, Storage and Easy Variations"
    }
  ],
  "slug": "fall-mason-jar-led-lanterns",
  "subcategory": "Handmade Gifts",
  "title": "Fall Mason Jar Lanterns: Easy DIY Tissue Paper Lanterns with Fairy Lights",
  "to": "#275E7E",
  "video": "fall-mason-jar-led-lanterns"
}),
  P({
  "bannerTitle": "Christmas Cookie Recipes 2026",
  "category": "food-recipes",
  "date": "2026-11-23",
  "excerpt": "Christmas cookie recipes for a cookie exchange: soft sugar cookies, spiced gingerbread and fudgy chocolate crinkles — three classics, exact amounts, zero fuss.",
  "faqs": [
    {
      "a": "One kind, baked in a double batch — about 4 dozen for 8 guests. Swaps work best when every baker brings a full batch of a single cookie, so the table ends up with real variety. All three recipes in this guide make 2 dozen per batch, so two batches cover a standard exchange.",
      "q": "How many Christmas cookie recipes should I bake for a cookie exchange?"
    },
    {
      "a": "Yes — and you should. All three doughs freeze for up to 3 months wrapped tight, and baked cookies freeze undecorated for a month. Thaw dough overnight in the fridge, or thaw baked cookies on the counter for 2 hours. Decorate only after thawing, so the icing sets properly.",
      "q": "Can I freeze Christmas cookie recipes ahead of time?"
    },
    {
      "a": "Almost always warm dough or soft butter. Chill the dough for 30 minutes before rolling, and chill the cut shapes for 10 minutes before they go in the oven. Also check your butter — it should be soft enough to dent with a finger, not shiny or greasy.",
      "q": "Why did my sugar cookies spread flat?"
    },
    {
      "a": "About 3 to 4 days once iced, kept in a single layer in a tin at room temperature. Keep soft and crisp cookies in separate tins so the crisp ones don't go soft. Undecorated, the same cookies last 5 days, and gingerbread lasts a full two weeks.",
      "q": "How long do decorated cookies stay fresh?"
    }
  ],
  "from": "#DE7A3D",
  "hero": {
    "alt": "Three plates of Christmas cookies — iced sugar cookies, gingerbread men and chocolate crinkle cookies — on a dark wooden table with candles and evergreen",
    "src": "/img/a15-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "Three iced gingerbread men with white icing smiles on a black plate",
        "caption": "Gingerbread men, iced and ready for the tin.",
        "src": "/img/a15-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "A hand holding a gift box of star-shaped sugar cookies dusted with powdered sugar",
        "caption": "Star sugar cookies, packed and ready to swap.",
        "src": "/img/a15-b"
      }
    },
    {
      "after": 6,
      "img": {
        "alt": "Hands tying twine around red gift boxes of decorated Christmas cookies",
        "caption": "Tying up cookie boxes with twine — the tin comes back next year.",
        "src": "/img/a15-c"
      }
    }
  ],
  "intro": "Christmas cookie recipes are the one part of December baking nobody argues about. Every year our kitchen turns into a cookie factory for about two weekends — flour on the counters, three baking sheets rotating through the oven. The three recipes in this guide are the ones that survived years of testing: soft sugar cookies that hold their shape, gingerbread men with a proper snap, and chocolate crinkles that crack open like snow on dark earth. They all travel well, freeze well, and taste even better the next day, which is exactly what a cookie exchange needs.",
  "motif": "cookie",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "A cookie exchange has one rule that matters: bring cookies that still taste good two days later. The soft, gooey batch that melts in your mouth straight from the oven is lovely at home, but it turns into crumbs in a gift box. The three recipes here were picked because they hold up — firm edges, flavors that deepen overnight, and shapes that survive a car ride."
        },
        {
          "t": "h3",
          "text": "How a cookie exchange usually works"
        },
        {
          "items": [
            "Each baker brings 2 to 3 dozen cookies of one kind",
            "Everyone takes home a mixed box — one or two of each kind",
            "Bring the recipe printed or written on a card, so people can bake it again",
            "Label anything with nuts, dairy or gluten so nobody has to guess"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Plan for about 6 cookies per guest to take home, and bake a few extra for the tasting tray. If 8 people are coming, that's 4 dozen from you — two batches of any recipe here, and you're done."
        },
        {
          "t": "h3",
          "text": "The one timeline that keeps baking calm"
        },
        {
          "items": [
            "Two weeks before: mix and freeze the doughs — all three freeze beautifully",
            "Two days before: bake the gingerbread and the crinkles",
            "One day before: bake the sugar cookies and decorate while they're cool",
            "Morning of: pack boxes with tissue paper between layers"
          ],
          "t": "ol"
        }
      ],
      "heading": "Christmas Cookie Recipes That Actually Work for a Cookie Exchange"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is the sugar cookie we come back to every year. Soft in the middle, lightly golden at the edges, and sturdy enough to hold a layer of icing without going soggy. The dough needs 30 minutes in the fridge — skip that and the cookies spread into blobs, so don't."
        },
        {
          "t": "h3",
          "text": "Sugar cookie ingredients (makes 24 cookies)"
        },
        {
          "items": [
            "1 cup (226 g) unsalted butter, softened",
            "1 cup (200 g) granulated sugar",
            "1 large egg, room temperature",
            "1 1/2 teaspoons vanilla extract",
            "3 cups (375 g) all-purpose flour",
            "1 teaspoon baking powder",
            "1/2 teaspoon fine salt"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Sugar cookie method"
        },
        {
          "items": [
            "Beat the butter and sugar together for 3 minutes until pale and fluffy",
            "Add the egg and vanilla and beat until smooth",
            "Stir in the flour, baking powder and salt until a soft dough forms",
            "Wrap the dough and chill for 30 minutes",
            "Roll to 1/4 inch thick on a floured surface and cut into shapes",
            "Bake at 350°F (175°C) for 9 to 11 minutes, until the edges just turn golden",
            "Cool on the sheet for 5 minutes, then move to a rack"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Pull them out when they still look a touch pale in the middle — they finish baking on the hot sheet, and that's what keeps them soft."
        }
      ],
      "heading": "Easy Sugar Cookies: Soft, Buttery & Ready to Decorate"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Good gingerbread smells like December the moment it hits the oven. This version is dark and spicy from molasses and ginger, with crisp edges and a chewy middle. It's also the sturdiest cookie in this guide — gingerbread men survive gift boxes, mail, and small hands."
        },
        {
          "t": "h3",
          "text": "Gingerbread ingredients (makes 24 cookies)"
        },
        {
          "items": [
            "3 1/4 cups (405 g) all-purpose flour",
            "1 teaspoon baking soda",
            "1/2 teaspoon fine salt",
            "1 tablespoon ground ginger",
            "1 teaspoon ground cinnamon",
            "1/4 teaspoon ground cloves",
            "1/4 teaspoon ground nutmeg",
            "3/4 cup (170 g) unsalted butter, softened",
            "3/4 cup (150 g) dark brown sugar, packed",
            "1 large egg, room temperature",
            "1/2 cup (120 ml) molasses",
            "1 teaspoon vanilla extract"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Gingerbread method"
        },
        {
          "items": [
            "Whisk the flour, baking soda, salt and all the spices in a bowl",
            "Beat the butter and brown sugar together for 2 minutes",
            "Add the egg, molasses and vanilla and beat until smooth",
            "Mix in the dry ingredients until a firm dough forms",
            "Wrap and chill for at least 1 hour — overnight is even better",
            "Roll to 1/4 inch thick and cut into shapes",
            "Bake at 350°F (175°C) for 9 to 10 minutes, until the edges are set",
            "Cool on the sheet for 5 minutes, then move to a rack"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Dark molasses gives the deep color and the old-fashioned flavor, so don't swap in light corn syrup. Roll the dough a little thicker than you think — 1/4 inch keeps the men from going brittle."
        }
      ],
      "heading": "Classic Gingerbread Cookies: Spiced, Sturdy & Full of Christmas Flavor"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Crinkles look like they took real skill, and that's the joke — they're the easiest cookie in this guide. You roll dark chocolate dough in powdered sugar, and the oven does the decorating for you. The tops crack open as they bake, so each cookie comes out looking dusted with snow."
        },
        {
          "t": "h3",
          "text": "Chocolate crinkle ingredients (makes 24 cookies)"
        },
        {
          "items": [
            "1 cup (125 g) all-purpose flour",
            "1/2 cup (50 g) unsweetened cocoa powder",
            "1 teaspoon baking powder",
            "1/4 teaspoon fine salt",
            "1/2 cup (100 g) granulated sugar",
            "1/4 cup (60 ml) vegetable oil",
            "2 large eggs, room temperature",
            "1 teaspoon vanilla extract",
            "1/2 cup (90 g) chocolate chips",
            "1/2 cup (60 g) powdered sugar, for rolling"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Chocolate crinkle method"
        },
        {
          "items": [
            "Whisk the flour, cocoa, baking powder and salt in a bowl",
            "Beat the sugar, oil, eggs and vanilla together until smooth",
            "Stir in the dry ingredients and the chocolate chips",
            "Chill the dough for 2 hours, or 30 minutes in the freezer",
            "Roll into 1-inch balls and coat generously in powdered sugar",
            "Place 2 inches apart on a lined baking sheet",
            "Bake at 350°F (175°C) for 10 to 12 minutes, until the tops crack and the edges are set",
            "Cool on the sheet for 5 minutes, then move to a rack"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "The chill is not optional — warm dough spreads flat and the cracks never form. Roll the balls twice in the powdered sugar for the whitest, snowiest finish."
        }
      ],
      "heading": "Chocolate Crinkle Cookies: Fudgy Centers, Crackled Tops"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The baking is the fun part. The packing is what decides whether your cookies arrive looking like cookies. A little planning here saves you from opening a box of crumbs in front of everyone."
        },
        {
          "t": "h3",
          "text": "How many cookies to bake"
        },
        {
          "items": [
            "8 guests: 4 dozen of one kind (two batches of any recipe here)",
            "12 guests: 6 dozen — bake one recipe twice, or two recipes once each",
            "Always bake 6 extra for the tasting tray and for you",
            "Small cookies travel better — use a 2-inch cutter, not a 4-inch one"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Bring one kind, not three. Swaps work best when every baker brings a full batch of one cookie, so the table ends up with a real variety."
        },
        {
          "t": "h3",
          "text": "Packing that actually protects the cookies"
        },
        {
          "items": [
            "Line the box with tissue paper or parchment",
            "Lay cookies in a single layer, flat side down",
            "Put a sheet of tissue between layers — never stack iced cookies face to face",
            "Tuck crumpled tissue at the edges so nothing slides around",
            "Keep soft cookies and crisp cookies in separate boxes so the crisp ones stay crisp"
          ],
          "t": "ol"
        }
      ],
      "heading": "Christmas Cookie Recipes for a Cookie Exchange: How to Plan, Pack & Swap"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "You don't need piping bags or a steady hand to make these cookies look like a bakery made them. Pick one simple finish per cookie and do it the same way across the whole batch. Uniform beats fancy every time."
        },
        {
          "t": "h3",
          "text": "Five finishes anyone can do"
        },
        {
          "items": [
            "Powdered sugar snow — dust cooled cookies through a small sieve",
            "Two-color drizzle — melt white and dark chocolate, drizzle with a fork",
            "Sanding sugar sparkle — brush cookies with a little milk before baking, then sprinkle",
            "Simple royal icing dots — thin icing in a zip bag, snip the corner, dot and drag",
            "Crushed candy cane edges — dip half a cooled cookie in melted chocolate, then in crushed candy"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Decorate only once the cookies are fully cool — warm cookies melt icing into a puddle. If you're short on time, pick the powdered sugar snow. It takes two minutes, it looks like Christmas, and nobody has ever complained about it."
        },
        {
          "t": "h3",
          "text": "What to buy once and reuse every year"
        },
        {
          "items": [
            "A set of 3 or 4 metal cutters: star, tree, gingerbread man, snowflake",
            "Red and green sanding sugar, one jar each",
            "A small sieve for dusting powdered sugar",
            "Parchment paper — cookies never stick, and cleanup takes seconds"
          ],
          "t": "ul"
        }
      ],
      "heading": "Decorating Ideas That Look Fancy but Take Minutes"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Christmas baking only works if the cookies are still good when people eat them. The freezer is your best friend in December — bake early, freeze flat, and you're calm all month."
        },
        {
          "t": "h3",
          "text": "How long each cookie keeps"
        },
        {
          "items": [
            "Sugar cookies: 5 days in a tin at room temperature, 2 weeks in the fridge",
            "Gingerbread: 2 weeks in a tin — the flavor actually improves after a day or two",
            "Chocolate crinkles: 5 days in a tin, but re-dust with powdered sugar before serving",
            "Decorated cookies: 3 to 4 days once iced, kept in a single layer"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Freezing rules that work"
        },
        {
          "items": [
            "Freeze baked cookies undecorated, in a single layer, then bag them once solid",
            "Freeze dough instead — all three doughs keep 3 months wrapped tight",
            "Thaw baked cookies on the counter for 2 hours, still in the bag so they don't dry out",
            "Thaw dough overnight in the fridge, then roll and bake as normal"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "For gifting, a simple tin beats a fancy box. Line it with tissue, stack one kind per tin, and tie the lid with twine and a sprig of rosemary. It costs almost nothing, and the tin comes back to you next year."
        }
      ],
      "heading": "Storing, Freezing & Gifting Your Christmas Cookies"
    }
  ],
  "slug": "christmas-cookie-recipes",
  "subcategory": "Cookies & Baking",
  "title": "Christmas Cookie Recipes 2026: Easy Sugar Cookies, Gingerbread & Chocolate Crinkle Cookies for a Cookie Exchange",
  "to": "#A83E1B"
}),
  P({
  "bannerTitle": "Cozy Winter Home Decor",
  "category": "home-decor",
  "date": "2026-11-22",
  "excerpt": "Winter home decor ideas that last all season: warm rugs, chunky knits, 2700K lighting and plain evergreen — a cozy home for about $120, no tree needed.",
  "faqs": [
    {
      "a": "Start with the three things that change a room most: a warm rug underfoot, a chunky throw on the sofa, and 2700K warm bulbs in the lamps. Together they cost about $75 if you buy the rug on sale, and the room feels warmer the same evening. Add plain evergreen branches for $5 and you have the whole look.",
      "q": "How do I make my home feel cozy for winter on a budget?"
    },
    {
      "a": "Layering beats buying big pieces. A 5-by-7 rug, two velvet cushion covers, one chunky throw and a small lantern give a small room the full winter feeling without crowding it. Keep the palette to three colours — cream, one deep shade like olive or burgundy, and warm wood.",
      "q": "What are the best winter home decor ideas for a small living room?"
    },
    {
      "a": "Yes — leave the ornaments off. Plain pine, cedar or eucalyptus in a simple vase reads as winter, not Christmas. No ribbon, no glitter, no red berries. One big vase on the table and a small bunch on a shelf is enough, and the branches last three to four weeks in fresh water.",
      "q": "Can I use evergreen branches for winter decor without it looking like Christmas?"
    },
    {
      "a": "Everything in this guide. Rugs, throws, warm lighting, plain evergreen and a styled mantel have nothing to do with Christmas, so they stay up from November through February. The only thing to pack away is anything with ornaments or tinsel — and this guide has none of that.",
      "q": "What winter home decor ideas work after Christmas?"
    }
  ],
  "from": "#4E7D46",
  "hero": {
    "alt": "Cozy winter living room at dusk with a cream sofa, chunky knit throw, velvet cushions, a lit fireplace with a plain cedar garland, and a candle with eucalyptus on a wooden coffee table",
    "src": "/img/a14-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "Glowing candle lanterns in different sizes and heights in a dark, warm living room",
        "caption": "Lanterns at three heights beat one bright ceiling light — the warm glow does the decorating.",
        "src": "/img/a14-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "Eucalyptus branches in white ceramic vases on a dark wooden table against a warm brown wall",
        "caption": "Eucalyptus in plain vases on the table — evergreen for the whole winter, no ornaments needed.",
        "src": "/img/a14-b"
      }
    }
  ],
  "intro": "Winter home decor ideas work best when they have nothing to do with Christmas. No tree, no tinsel, no ornaments to pack away in January — just layers that make a cold house feel warm until spring. We redid our own living room last winter with about $120 and one free Saturday, and the room stayed cozy for four months. The trick is simple: something soft underfoot, something warm within arm's reach, and light that glows instead of glares. Pick one room, start there, and stop when it feels right.",
  "motif": "tree",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "A cold floor makes the whole room feel cold, even when the heating is on. A deep rug fixes that faster than anything else you can buy — we swapped ours last November and the living room felt warmer the same evening."
        },
        {
          "t": "h3",
          "text": "Pick a rug that feels warm in bare feet"
        },
        {
          "t": "p",
          "text": "Go for pile depth over pattern. A shaggy or high-pile rug in a warm neutral — cream, oatmeal, warm taupe — traps heat under your feet and softens hard floors. In a living room, the front legs of the sofa and chairs should sit on the rug. A 5-by-7-foot rug fits most seating areas."
        },
        {
          "items": [
            "High-pile or shag rug in cream, oatmeal or warm taupe — $60 to $90 for a 5-by-7",
            "Wool or wool-blend if you can stretch to it — it holds heat better than polyester",
            "A rug pad underneath ($15) — it stops slipping and adds a second layer of warmth",
            "Dark chocolate or rust if you have pets or kids — it hides winter mud far better than white"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Layer a small rug over a big one"
        },
        {
          "t": "p",
          "text": "If a new big rug is too much right now, layer instead. A small sheepskin or faux-fur rug ($25) draped over the rug you already own, right where you put your feet, gives you the same warm feeling for a third of the price."
        }
      ],
      "heading": "Start Underfoot: Winter Rugs That Warm the Whole Room"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is the fastest winter change there is. Nothing else in the room has to move. A throw over the sofa arm and two new cushion covers, and the whole seating area reads as winter."
        },
        {
          "t": "h3",
          "text": "Chunky knit throws within arm's reach"
        },
        {
          "t": "p",
          "text": "Chunky knits show up in nearly every winter living room guide this year — they are the quickest way to make a sofa look and feel like winter. Keep one folded over each sofa arm or draped across the back, so warmth is always within reach. A good chunky knit throw costs $25 to $40; the $15 ones pill after two washes."
        },
        {
          "t": "h3",
          "text": "Mix velvet and boucle pillows"
        },
        {
          "t": "p",
          "text": "Velvet and boucle pillows do the decorating for you. The contrast between smooth shine and soft nub makes a plain sofa look dressed without any extra fuss. Two or three cushions are enough — try cream, terracotta and chocolate brown, or cream, deep olive and rust. Buy covers, not whole pillows: two velvet covers run about $12."
        },
        {
          "items": [
            "One chunky knit throw, cream or oatmeal — $25 to $40",
            "Two velvet cushion covers in a deep winter shade — about $12",
            "One boucle or faux-fur cushion for contrast — about $10",
            "A woven basket ($15) beside the sofa to hold the extras, rolled not folded"
          ],
          "t": "ul"
        }
      ],
      "heading": "Layer Throws and Pillows for a Cozy Winter Living Room"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Winter evenings are long and dark, so light does more work in this season than in any other. The mistake most of us make is one bright ceiling light. It flattens the room and makes it feel cold. Three small pools of warm light beat one bright ceiling light every time."
        },
        {
          "t": "h3",
          "text": "Three pools of warm light, not one bright ceiling"
        },
        {
          "t": "p",
          "text": "Aim for warm white bulbs around 2700K to 3000K — the amber, candle-like glow of an old incandescent bulb, never clinical white. A floor lamp behind the sofa, a table lamp on a sideboard, and a small lamp on a shelf give the room depth. We swapped all our living room bulbs to 2700K in one trip ($12 for a four-pack)."
        },
        {
          "t": "h3",
          "text": "Candles and lanterns at different heights"
        },
        {
          "t": "p",
          "text": "Lanterns work better than a row of candles on one surface. Put one tall lantern on the floor, a medium one on the side table, and a small one on the mantel or shelf. If you have kids or pets, a candle warmer — a flame-free plate that melts a scented candle from below — gives you the scent and the glow without an open flame, for about $20."
        },
        {
          "items": [
            "2700K warm-white bulbs, four-pack — about $12",
            "One floor lamp or one tall lantern for the corner — $20 to $35",
            "Two or three pillar candles in glass hurricanes — $8 to $15 total",
            "A candle warmer if you want scent without a flame — about $20"
          ],
          "t": "ul"
        }
      ],
      "heading": "Warm Lighting: The 2700K Rule for Winter Home Decor Ideas"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Bring in evergreen for the whole winter, not just the holidays. Plain pine, cedar or eucalyptus in a simple vase — no ornaments, no ribbon, no glitter — smells like winter and stays green for weeks, for almost nothing."
        },
        {
          "t": "h3",
          "text": "Branches that last all winter"
        },
        {
          "t": "p",
          "text": "Cut branches about 18 inches long and trim the bottom two inches of needles so they sit cleanly in water. Change the water every four or five days and they will last three to four weeks. Cedar holds its needles longest; eucalyptus dries out and still looks good. A bunch from the florist costs $5 to $8."
        },
        {
          "t": "h3",
          "text": "Where to put winter greenery"
        },
        {
          "t": "p",
          "text": "One big vase on the dining table, one small bunch on the bathroom shelf, and a few sprigs tucked into the entryway mirror frame. That is enough — greenery works best in threes, not in every corner."
        },
        {
          "items": [
            "Pine, cedar or eucalyptus branches — $5 to $8 a bunch, or free from the garden",
            "One tall vase for the dining table and one small vase for a shelf",
            "A plain cedar garland for the mantel — about $12, no ornaments needed",
            "Dried orange slices ($3) threaded on string if you want one warm accent"
          ],
          "t": "ul"
        }
      ],
      "heading": "Evergreen That Is Not Christmas"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The mantel and the coffee table are the two spots guests actually look at, so they are worth ten minutes each. Both follow the same rule: a line to hold things together, then three things at different heights."
        },
        {
          "t": "h3",
          "text": "Style the mantel in one line"
        },
        {
          "t": "p",
          "text": "Start with the cedar garland along the back edge. In front of it, place three things: a tall candle or lantern on one side, a short stack of two books in the middle, and a small vase with branches on the other side."
        },
        {
          "t": "h3",
          "text": "One tray on the coffee table"
        },
        {
          "t": "p",
          "text": "A wooden tray ($15) holds the whole coffee table together. Inside it: a small candle, a little stack of books, and one natural piece — a pinecone, a stone bowl, a small plant."
        },
        {
          "items": [
            "Wooden tray for the coffee table — about $15",
            "Two books you already own, stacked flat",
            "One candle in a glass hurricane — $5",
            "One natural piece: pinecone, stone bowl or small potted plant"
          ],
          "t": "ul"
        }
      ],
      "heading": "The Winter Mantel and Coffee Table"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "We spend the most time in the bedroom in winter and the least time decorating it. Two swaps change how it feels at night: heavier bedding and one warm light by the bed. The entryway gets the same treatment — it is the first thing you see when you come in from the cold."
        },
        {
          "t": "h3",
          "text": "Winter bedroom swaps that take ten minutes"
        },
        {
          "t": "p",
          "text": "Swap the light summer duvet cover for a flannel or brushed-cotton one ($30) and add a second thin blanket folded across the foot of the bed. A small lamp with a warm bulb on the bedside table replaces the ceiling light in the evening."
        },
        {
          "t": "h3",
          "text": "An entryway that welcomes you home"
        },
        {
          "t": "p",
          "text": "A sturdy doormat inside the door, a hook for the heavy coat, and a small bowl for keys — that is the whole entryway. Add one warm thing: a small lantern on the console or a few evergreen sprigs in the mirror frame."
        },
        {
          "items": [
            "Flannel or brushed-cotton duvet cover — about $30",
            "One extra throw folded across the foot of the bed — $20",
            "A small rug beside the bed — $15 to $25",
            "A basket by the door for scarves and gloves — about $12"
          ],
          "t": "ul"
        }
      ],
      "heading": "Winter Bedroom and Entryway: The Rooms You Forget"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "You do not need to buy everything in this guide. Pick the three things that will change your room most — for most homes that is a rug, a throw and warm bulbs — and leave the rest for later."
        },
        {
          "t": "h3",
          "text": "What the whole winter living room costs"
        },
        {
          "t": "p",
          "text": "Add it up and the full list lands around $120: rug $60 to $90, throw $25 to $40, two cushion covers $12, bulbs $12, candles $10, branches $5. Start with what you already own and the real spend drops under $75. The rug, the throw and the bulbs come back next winter, so the second year costs almost nothing."
        },
        {
          "t": "h3",
          "text": "The five-minute evening reset"
        },
        {
          "items": [
            "Fold the throws and put them back on the sofa arms — 1 minute",
            "Fluff the cushions and straighten the rug — 1 minute",
            "Light the candles or switch on the lamps — 30 seconds",
            "Put the basket of extra blankets back by the sofa — 30 seconds",
            "Clear the coffee table tray of cups and post — 2 minutes"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Do that once in the evening and the room greets you warm every night until spring. That is the whole point — not a showroom, just a house that feels good to come home to."
        }
      ],
      "heading": "Winter Home Decor Ideas on a Budget and a 30-Minute Reset"
    }
  ],
  "slug": "winter-home-decor-ideas",
  "subcategory": "Living Room",
  "title": "Winter Home Decor Ideas 2026: Cozy Layers, Warm Lighting & Simple Touches That Last All Winter",
  "to": "#243B24"
}),
  P({
  "bannerTitle": "Friendsgiving Place Cards DIY",
  "category": "diy-crafts",
  "date": "2026-11-22",
  "excerpt": "Friendsgiving table place cards are the smallest thing on the table and the first thing people notice. Kraft cardstock, a dried orange slice and a sprig of rosemary turn a plain fold into a warm, personal welcome for every guest.",
  "faqs": [
    {
      "a": "Two or three days ahead is perfect. Cut, fold and write the names, then store the finished cards flat in a shoebox or a large envelope so they don't get bent. Add the dried orange slices and rosemary on the day itself, or the night before at the earliest — the rosemary stays green and fresh that way, and the glue dots hold better when they're fresh. If you attach everything days early, the rosemary can dry out and go brittle, and the cards lose that fresh-cut look.",
      "q": "How far ahead can I make Friendsgiving table place cards?"
    },
    {
      "a": "Yes — any heavy paper or light card works, as long as it holds a fold without cracking. A thick cream or ivory card looks soft and classic, and a deep green or burgundy card feels rich against a linen tablecloth. What you want to avoid is thin printer paper, which flops over instead of standing up, and very stiff board, which cracks along the fold. Kraft is our first pick because its warm brown tone suits the orange and rosemary so well, but the idea works in any color you love.",
      "q": "Can I use a different paper instead of kraft cardstock for Friendsgiving table place cards?"
    },
    {
      "a": "You have three easy options. Most craft shops and grocery stores sell bags of dried orange slices in the baking or decor aisle around fall. If you can't find them, you can dry your own: slice an orange thin, lay the rounds on a baking sheet, and bake at the lowest oven setting for two to three hours, flipping once. Or swap the orange for something else entirely — a small pinecone, a dried apple slice, a cinnamon stick or a tiny sprig of eucalyptus all look lovely with the rosemary.",
      "q": "What if I can't find dried orange slices?"
    },
    {
      "a": "They do, and kids love them — mostly because they get to find their own name on the table. For a kids' table, let each child pick a color of marker for their own name, or swap the rosemary for a small sticker or a dried leaf they helped collect. Keep the twine short so little hands don't tug at it, and use glue dots instead of twine so nothing comes loose during dinner. The cards also make a sweet keepsake for kids to take home after the meal.",
      "q": "Do Friendsgiving table place cards work for a kids' table too?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Handmade kraft-paper Friendsgiving place cards with dried orange slices and rosemary on a linen-covered autumn table",
    "src": "/img/a13-hero"
  },
  "images": [
    {
      "after": 3,
      "img": {
        "alt": "Handmade kraft Friendsgiving place cards with dried orange slices and rosemary, laid on folded linen napkins",
        "caption": "The finished cards, laid out on linen napkins — kraft, orange and rosemary do all the work.",
        "src": "/img/a13-a"
      }
    },
    {
      "after": 5,
      "img": {
        "alt": "Close-up of a tent-fold kraft Friendsgiving place card with a dried orange slice and rosemary tied with twine, on a ceramic plate",
        "caption": "One card, up close: the twine bow holds the orange slice and rosemary in place.",
        "src": "/img/a13-b"
      }
    }
  ],
  "intro": "Friendsgiving table place cards are the smallest thing on the table and the first thing people notice. A folded kraft card with a dried orange slice and a sprig of rosemary tells each guest two things before anyone sits down: you thought about them, and this dinner matters to you. The whole set costs a few dollars, takes about half an hour to make, and needs no craft experience at all. The video above shows the full make in thirty seconds, and below you'll find every step written out, the exact supplies, and the small choices that make the cards look neat instead of lopsided.",
  "motif": "snow",
  "readTime": 8,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "The idea works because three plain materials do three different jobs. The kraft cardstock gives the card its shape and its warm, earthy color — nothing fancy, just honest brown paper that looks at home on a fall table. The dried orange slice adds a pop of amber and a faint citrus scent that guests catch as they sit down. And the rosemary brings the green, plus a fresh piney smell that says autumn without a single pumpkin in sight."
        },
        {
          "items": [
            "Cheap: one sheet of cardstock and a small bag of dried oranges makes a whole table's worth",
            "Fast: about 30 minutes for eight cards, with no drying time to wait for",
            "Personal: a handwritten name beats a printed one every time — guests feel chosen, not seated",
            "Reusable idea: the same fold works for Christmas, birthdays and baby showers with different decorations",
            "Keepsake: guests often take their card home, which is more than you can say for a napkin ring"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "A place card also solves a small hosting problem nobody talks about: the awkward minute when everyone stands around the table wondering where to sit. With cards on the table, people find their name, sit down and start talking. You get to seat the quiet cousin next to the funny one, keep the two toddlers at opposite ends, and put grandma near the warmest spot — all without saying a word."
        }
      ],
      "heading": "Why Friendsgiving Table Place Cards Work So Well"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The supply list is short, and you probably own half of it already. One trip to a craft shop covers the rest — and the same bag of dried orange slices and bunch of rosemary will make cards for two or three dinners, so the cost per card stays tiny."
        },
        {
          "items": [
            "Kraft cardstock, one or two sheets — one sheet makes four to six cards",
            "A ruler, for measuring even rectangles",
            "Scissors, or a craft knife and a cutting mat",
            "A fine-tip marker in black or dark brown",
            "Dried orange slices, one per card",
            "Fresh rosemary sprigs, one small sprig per card",
            "Natural twine, about an arm's length",
            "Glue dots, for attaching the orange and rosemary"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Picking the right cardstock"
        },
        {
          "t": "p",
          "text": "Look for cardstock around 200 to 250 gsm — thick enough to stand up on its own, thin enough to fold without cracking. Hold a sheet up and bend it gently: it should fold with a clean crease and stay standing when you set it down. If the sheet feels floppy like printer paper, it's too light; if it cracks along the fold, it's too heavy. Most craft shops sell kraft cardstock in single sheets, so you don't need to buy a whole pack."
        },
        {
          "t": "h3",
          "text": "Dried orange slices: buy or make your own"
        },
        {
          "t": "p",
          "text": "Bought slices are the easy route — look for them in the baking aisle or the fall decor section. If you make your own, slice an orange as thin as you can, lay the rounds on a baking sheet and bake at your oven's lowest setting for two to three hours, flipping once halfway. They should feel dry and firm, not sticky. Pick slices that are roughly the same size, about two inches across, so each card looks balanced."
        }
      ],
      "heading": "What You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Even cards start with even rectangles. This step takes five minutes, but it's the one that decides whether the finished cards look like a matching set or a rough draft. Measure twice, cut once — and keep the offcuts, because they're handy for testing your marker before you write on a real card."
        },
        {
          "t": "h3",
          "text": "Getting the size right"
        },
        {
          "t": "p",
          "text": "A good finished size is about 4 inches wide by 2.5 inches tall once folded. That means each rectangle starts at 4 by 5 inches — the fold runs across the middle, so the card stands about 2.5 inches tall. Big enough to read a name from across the table, small enough not to block the view of the person opposite."
        },
        {
          "items": [
            "Mark the cardstock into 4-by-5-inch rectangles with the ruler and a pencil",
            "Cut along the lines with scissors, keeping the blade tight against the ruler edge",
            "Check the first rectangle against the second — they should match exactly",
            "Trim any rough edges so every card has clean, straight sides",
            "Set the rectangles in a neat stack, ready for folding"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "If you're making cards for a big table, cut all the rectangles first and fold them all second. Working in batches keeps the sizes consistent, and it's faster than switching between cutting and folding for each card."
        }
      ],
      "heading": "Measuring and Cutting the Cardstock"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The fold is what turns a flat rectangle into a card that stands up. Fold each rectangle in half across the short side, so the crease runs along the 4-inch width and the card stands like a little tent. Press the crease flat with your thumbnail or the flat of the ruler, then open the card and set it down — it should stand on its own without wobbling."
        },
        {
          "items": [
            "Fold each rectangle in half, matching the short edges exactly",
            "Run your thumbnail along the crease, from the middle out to each end",
            "Open the card and stand it on the table — it should hold its tent shape",
            "If a card leans, press the crease again and check that the two sides are the same length",
            "Line the folded cards up in a row so you can see at a glance if one sits crooked"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "A crease that stays put"
        },
        {
          "t": "p",
          "text": "If your cardstock is on the heavier side, score the fold line first: lay the ruler along the middle and run the back of a butter knife or an empty ballpoint pen firmly along it, then fold. The score line tells the paper exactly where to bend, so the crease comes out sharp instead of cracked. It's a small extra step, and it makes the finished cards look far more polished."
        }
      ],
      "heading": "Folding Each Card into a Tent"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Now the cards get their names. Write on the front face of each tent — the side that faces the guest as they sit down. Use your normal handwriting, just slowed down a little: this is the part people look at closest, and neat lettering is what makes a handmade card feel thoughtful instead of rushed."
        },
        {
          "t": "h3",
          "text": "Neat lettering without calligraphy skills"
        },
        {
          "t": "p",
          "text": "You don't need fancy lettering. Write the name in the centre of the card, about a third of the way down from the top fold, leaving room for the orange slice below it. Use the fine-tip marker — a thick marker bleeds into kraft paper and makes the letters look fuzzy. If you're nervous about a wobbly line, write the name first in pencil, trace over it with the marker, then erase the pencil once the ink is dry."
        },
        {
          "items": [
            "Test the marker on a cardstock offcut first — kraft paper drinks ink fast",
            "Write first names only, unless two guests share one — then add a last initial",
            "Keep the name centred, with the same amount of space on each side",
            "Let the ink dry for a minute before you handle the card or add decorations",
            "Made a spelling mistake? Flip the card over and start fresh — it's just paper"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "One small tip: write all the names before you attach any decorations. The orange slice and rosemary sit on the lower half of the card, and it's much easier to write on a flat, clean surface than to work around a slice of orange."
        }
      ],
      "heading": "Writing the Guest Names"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is the fun part — the moment a plain folded card turns into something that looks like it came from a stationery shop. Each card gets one dried orange slice and one small rosemary sprig, fixed to the front just below the name. The video shows this part in real time, and it's worth watching once before you start, just to see the pace."
        },
        {
          "items": [
            "Place a glue dot on the back of the dried orange slice and press it onto the card, just below the name",
            "Lay a small rosemary sprig across the bottom of the orange slice, at a slight angle",
            "Fix the sprig with a second glue dot, or wrap a short piece of twine around the card and tie a small bow",
            "Press both pieces gently for a few seconds so the glue dot grips properly",
            "Stand the card up and check it from the front — nothing should cover the name"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Twine or glue dots?"
        },
        {
          "t": "p",
          "text": "Glue dots are the quick, tidy option: invisible from the front and strong enough to hold a light orange slice. Twine is the prettier one — a small bow around the card looks rustic and gives guests something to untie as a keepsake. If you use twine, wrap it once around the folded card, tie the bow on the front, and tuck the orange slice and rosemary under the knot. Either way works, so pick the one you enjoy doing — you'll be repeating it eight or ten times."
        }
      ],
      "heading": "Adding the Orange Slice and Rosemary"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A Friendsgiving table place card earns its spot by sitting right where the guest looks first — just above the plate, or leaning against the folded napkin. Set each card with the name facing the chair, not the centre of the table, so guests spot their name the moment they walk up."
        },
        {
          "items": [
            "Above the plate: the classic spot, easy to read and out of the way of the food",
            "On the napkin: lean the card against a folded linen napkin for a soft, layered look",
            "With the menu: tuck a small printed menu behind the card for a restaurant feel",
            "As a group: line the cards up along a wooden board or a linen runner for the table photo",
            "As a favor: tell guests the card is theirs to take home — the rosemary smells lovely in a car"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "One styling tip that makes a real difference: repeat the orange and rosemary elsewhere on the table. A few dried orange slices scattered along the runner, a sprig of rosemary on each napkin, and the cards stop looking like an add-on and start looking like the whole table was planned around them — which, of course, it was."
        }
      ],
      "heading": "Styling Your Friendsgiving Table Place Cards"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Look after them and the cards will survive the whole evening — and a few of them will survive long after. Keep finished cards flat in a box until dinner, away from damp and steam, so the kraft paper stays crisp and the rosemary stays green. After dinner, the cards that come home with guests usually end up pinned to a fridge or tucked into a scrapbook, which is exactly the point."
        },
        {
          "t": "h3",
          "text": "Ways to change it up"
        },
        {
          "t": "p",
          "text": "The same make works all winter with a few swaps. Trade the orange slice for a small pinecone and the rosemary for a sprig of pine, and the card fits a Christmas table. Use deep green cardstock with a dried apple slice for a New Year's Eve dinner. Add a tiny handwritten note on the back of each card — one line about why you're glad that person is there — and a simple place card becomes the thing people talk about on the drive home."
        }
      ],
      "heading": "Care, Storage and Easy Variations"
    }
  ],
  "slug": "friendsgiving-table-place-cards",
  "subcategory": "Table Decor DIY",
  "title": "Friendsgiving Table Place Cards: Easy DIY Kraft Cards with Dried Orange & Rosemary",
  "to": "#275E7E",
  "video": "friendsgiving-table-place-cards"
}),
  P({
  "bannerTitle": "Budget Christmas Apartment Decor",
  "category": "home-decor",
  "date": "2026-11-22",
  "excerpt": "Christmas apartment decorating on a budget starts with a small tree, warm lights and one colour plan — here's how to make a rental feel festive for about $75.",
  "faqs": [
    {
      "a": "About $75 covers a whole room if you start with what you already own: warm-white lights, 2 strings ($12), a small tree ($25), ribbon and a wreath ($10), two cushion covers ($12), pinecones and candles ($8), removable hooks ($8). The tree, lights and ribbon come back next year, so the second Christmas costs closer to $30.",
      "q": "How much does Christmas apartment decorating on a budget cost?"
    },
    {
      "a": "Yes — use nothing that makes a hole or leaves a mark. Removable adhesive hooks hold lights and garlands, over-door hooks hold the wreath, and ribbon ties garlands to shelves. Avoid nails, screws and tape on painted walls, and pull the hook tabs straight down in January.",
      "q": "Can Christmas apartment decorating on a budget work in a rental without losing my deposit?"
    },
    {
      "a": "A slim pencil tree, 5 to 6 feet tall and about 2 feet wide, fits most corners and the gap beside a sofa. In a studio, a tabletop tree of 2 to 3 feet on a console or bookshelf works better. If you have no floor or surface space at all, a garland hung in a triangle on the wall with lights and a few ornaments does the job for about $8.",
      "q": "What size Christmas tree fits a small apartment?"
    },
    {
      "a": "The weekend after Thanksgiving is the sweet spot — early enough to enjoy it for a full month. If you like a longer season, start the lights the first weekend of December and add the tree the next weekend. Either way, do it in daylight, then switch the lights on at dusk for the real reveal.",
      "q": "When should I start decorating my apartment for Christmas?"
    }
  ],
  "from": "#4E7D46",
  "hero": {
    "alt": "Cozy small apartment living room at dusk with a slim Christmas tree, pine garland over a bookshelf, red knit throw and glowing candles",
    "src": "/img/a12-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "Small potted Christmas tree with warm white fairy lights beside a macrame lamp and stacked books",
        "caption": "A small potted tree with warm lights — the whole Christmas corner, for about $20.",
        "src": "/img/a12-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "Christmas garland with red and gold ornaments and a burgundy ribbon draped over a bookshelf",
        "caption": "Garland, ribbon and a few big baubles turn a plain bookshelf into the room's centrepiece.",
        "src": "/img/a12-b"
      }
    }
  ],
  "intro": "Christmas apartment decorating on a budget sounds like a compromise, but honestly, a small apartment is easier to make festive than a big house. You don't need a six-foot tree or a mantel you don't have — you need one corner that glows, one window that catches the light, and a colour plan. We've decorated rentals for years, and the rooms that looked best were the ones where every piece earned its spot. This guide keeps the whole job to about $75, uses nothing that puts your deposit at risk, and works in a studio or a one-bedroom. Start with what you already own, then buy only the gaps.",
  "motif": "tree",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Before you spend a dollar, pull out last year's box. Most of us own more Christmas decor than we remember — working lights, a flat-ish wreath, ornaments in a bag at the back of the closet. The box tells you what you actually need — usually two or three small things, not a whole new set."
        },
        {
          "t": "h3",
          "text": "Shop your own home first"
        },
        {
          "t": "p",
          "text": "Walk the apartment with fresh eyes. That red throw, the brass candlesticks on the bookshelf, the pinecones from a walk last fall — all of it can do Christmas duty. We once built a whole mantel look from a wooden crate, three jars and a $3 roll of ribbon. The trick is grouping: three ordinary things together read as a display, while one thing alone reads as clutter."
        },
        {
          "items": [
            "A red or burgundy throw on the sofa arm or the end of the bed",
            "Plain glass jars — fill them with ornaments, pinecones or fairy lights",
            "Books with red, green or gold covers as a riser for candles",
            "A wooden crate or basket to hide a tree stand",
            "Kitchen twine and brown paper — gift wrap and garland ties in one"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "The one-box rule for last year's decor"
        },
        {
          "t": "p",
          "text": "If it doesn't fit in one box, you own too much for an apartment. Keep the pieces you love, give away the rest, and write a short list of what's missing before you shop — that list is your budget."
        }
      ],
      "heading": "Christmas Apartment Decorating on a Budget Starts With What You Already Own"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Seventy-five dollars sounds small, but for one room it's plenty — lights and greenery do most of the work. The mistake is buying ten $5 things that add up to $50 and change nothing. Buy five things that matter instead."
        },
        {
          "t": "h3",
          "text": "Where the money should go"
        },
        {
          "items": [
            "Warm-white fairy lights, 2 strings — $12",
            "A slim 4-foot tree or a tabletop tree — $25",
            "One roll of wide ribbon and a small wreath — $10",
            "Two cushion covers in your palette — $12",
            "Pinecones, dried orange slices and candles — $8",
            "Removable hooks and clips — $8",
            "Total: $75 — and the lights, tree and ribbon return next year"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "What to skip this year"
        },
        {
          "t": "p",
          "text": "Skip the matching ornament set, the light-up village and anything that needs floor space you don't have. A $30 village looks sweet in the store and eats a whole shelf at home. Spend that money on better lights instead — good light makes cheap decor look expensive."
        }
      ],
      "heading": "Set a $75 Budget Before You Buy Anything"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The tree sets the scale for everything else, so get it right and the rest falls into place. A slim pencil tree — 5 to 6 feet tall but only 2 feet wide — tucks into a corner or the gap beside the sofa and still reads as a real tree. A tabletop tree, 2 to 3 feet tall in a woven basket, works on a console or a stack of books when the floor is fully spoken for."
        },
        {
          "t": "h3",
          "text": "Slim trees that work in corners"
        },
        {
          "t": "p",
          "text": "Look for a pre-lit pencil tree under $30 — it saves you buying a separate string of lights, and the wiring is already hidden. Dress it with one colour of bauble, not three: a dozen matte burgundy or gold baubles look styled, while a mix of glitter, matte and shiny reads as a jumble. Add a ribbon spiralling down."
        },
        {
          "t": "h3",
          "text": "No floor space? Try a tabletop tree"
        },
        {
          "t": "p",
          "text": "A tabletop tree is the studio-flat answer. Set it on the kitchen counter, a bookshelf or the windowsill, and let it be the whole Christmas corner. Hide the pot in a basket or wrap it in brown paper tied with twine. If even that won't fit, hang a garland in a triangle on the wall with removable hooks, add lights and a few ornaments — it photographs like a tree and costs a fraction of one."
        },
        {
          "items": [
            "Slim pencil tree, 5–6 ft tall, 2 ft wide — $25–$35, corner or beside the sofa",
            "Tabletop tree, 2–3 ft tall — $15–$20, on a console or bookshelf",
            "Potted pine, 3 ft tall — $20, keeps the room smelling like a forest",
            "Wall garland triangle — $8, zero floor space"
          ],
          "t": "ul"
        }
      ],
      "heading": "Pick a Small Tree That Fits the Room"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A lit window decorates the room at night and the street outside, for one string of lights and twenty minutes. Warm white is the only colour to buy: 2700K feels like candlelight, while cool white looks like an office. Two strings is the sweet spot for one window."
        },
        {
          "t": "h3",
          "text": "Warm white beats cool white every time"
        },
        {
          "t": "p",
          "text": "We learned this the hard way. Our first year we bought the cheapest cool-white lights on the shelf, and the room looked like a fridge. Warm white costs the same and makes the room glow gold at dusk. If you already own cool-white lights, run them behind a sheer curtain — the fabric softens them."
        },
        {
          "t": "h3",
          "text": "Renter-safe ways to hang lights"
        },
        {
          "items": [
            "Wipe the frame first — hooks stick better on a clean surface",
            "Press a removable adhesive clip every 12 inches along the top and sides",
            "Run the lights from the top corner down, keeping the wire loose",
            "Hide the battery pack behind the curtain and set a timer for 5–10 pm",
            "Take the clips down slowly in January — pull the tab straight down, never sideways"
          ],
          "t": "ol"
        }
      ],
      "heading": "Light the Window, Not the Floor"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "You don't need to decorate the whole apartment. Pick three spots — one shelf, one table, one door. Three styled spots read as a decorated home; decor scattered everywhere reads as mess. This is the part that makes guests say the place looks like a magazine."
        },
        {
          "t": "h3",
          "text": "The shelf garland that takes 20 minutes"
        },
        {
          "t": "p",
          "text": "Drape a faux pine garland across a bookshelf, a console or the top of the TV unit, and tie it on with ribbon — no nails, no marks. Tuck in three small trees or a few ornaments, set two LED candles beside it, and put a bowl of baubles at one end. Twenty minutes and the whole wall looks dressed."
        },
        {
          "t": "h3",
          "text": "A coffee-table centerpiece for under $10"
        },
        {
          "items": [
            "A linen runner or a folded tea towel down the middle",
            "Three candlesticks in different heights — thrifted brass, $1–$2 each",
            "A sprig of fresh or faux greenery tucked around the bases",
            "A small bowl of pinecones and dried orange slices",
            "One scented candle — cinnamon or pine — lit only when you're home"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Then the door. A wreath on an over-door hook needs no nail and no permission — hang it, add a burgundy bow, and the hallway does the welcoming. If your building has rules about door decor, hang the wreath inside, on the back of the door or above the entryway mirror."
        }
      ],
      "heading": "Style One Shelf, One Table and One Door"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The dollar store is the budget decorator's best friend — if you buy the right things. Glass, wood, ribbon and candles look expensive at any price. Plastic snowmen and glitter reindeer don't — skip them and buy one more string of lights instead."
        },
        {
          "t": "h3",
          "text": "The $1.25 buys worth getting"
        },
        {
          "items": [
            "Glass ball ornaments in one colour — a pack of 6 for $1.25",
            "Wide velvet ribbon, burgundy or forest green — $1.25 a roll",
            "LED tea lights, pack of 4 — $1.25",
            "Small bottle-brush trees — $1.25 each, three on a tray look like a set",
            "Faux pine sprigs — $1.25, tuck them into the garland to fill gaps"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Thrift-store scores to look for"
        },
        {
          "t": "p",
          "text": "Thrift shops in November are full of Christmas decor from people clearing out — brass candlesticks for a dollar, a basket for the tree, a wool throw for three. Go on a weekday morning; the good stuff goes fast."
        }
      ],
      "heading": "Dollar Tree and Thrift Finds That Don't Look Cheap"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The order: tree first, then lights, then the shelf, the table and the door. Thirty minutes, five spots, one room that feels like Christmas the second you walk in. Do it on a Saturday afternoon and let the lights come on at dusk — that's the moment it all pays off."
        },
        {
          "t": "h3",
          "text": "The 30-minute setup order"
        },
        {
          "items": [
            "Set the tree in its corner and hide the stand in a basket (5 minutes)",
            "Hang the window lights and check the glow (10 minutes)",
            "Drape the shelf garland and add the candles (5 minutes)",
            "Lay the table centerpiece and light the candle (5 minutes)",
            "Hang the wreath, fluff the cushions, step back and look (5 minutes)"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Keep it up till January, then pack it away right"
        },
        {
          "t": "p",
          "text": "Take the lights down in the first week of January. Coil each string around a piece of cardboard so it doesn't tangle, and pack the ornaments back in the same box with a note on top: what you bought, what you still need, and what you never used. Next December, that note is worth more than any new decoration."
        }
      ],
      "heading": "Put It All Together: Christmas Apartment Decorating on a Budget in 30 Minutes"
    }
  ],
  "slug": "christmas-apartment-decorating-on-a-budget",
  "subcategory": "Apartment Decor",
  "title": "Christmas Apartment Decorating on a Budget: Festive Small-Space Ideas That Look Expensive for Less",
  "to": "#243B24"
  }),
  P({
  "bannerTitle": "Cinnamon Stick Candle Decor",
  "category": "diy-crafts",
  "date": "2026-11-22",
  "excerpt": "Cinnamon stick LED candle decor turns a plain battery candle into a warm, rustic fall centerpiece. Cinnamon sticks, jute twine and a cream ribbon are all it takes — about 20 minutes, no flame, and it smells like autumn too.",
  "faqs": [
    {
      "a": "Yes. A battery LED candle stays cool to the touch, and the cinnamon sticks never get warm — that's the whole point of using LED instead of a real flame. Most LED pillars come with a timer setting, so you can set it to glow for a few hours each evening and switch itself off. We still switch ours off when we leave the house, out of habit more than worry.",
      "q": "Is cinnamon stick LED candle decor safe to leave on overnight?"
    },
    {
      "a": "No — please don't. Cinnamon sticks are dry bark, and twine and ribbon are both flammable, so a real flame next to them is a fire risk. The LED candle is what makes this project safe: it gives you the warm flicker and the glow without any heat at all. If you want a real candle on the same table, put it in a tall glass holder at least a foot away from the cinnamon candle.",
      "q": "Can I use a real wax candle instead of an LED one?"
    },
    {
      "a": "One full season, easily — and often longer. The cinnamon sticks hold their color and scent for months if you keep the candle out of damp and direct sun. The twine may loosen a little over time; just retie the knot and trim the ends. When fall ends, wrap the candle in tissue paper and store it in a dry cupboard, and it will be ready to use again next year.",
      "q": "How long does cinnamon stick LED candle decor last?"
    },
    {
      "a": "A wide pillar works best — about 3 inches across and 5 or 6 inches tall. That size is heavy enough to stand steady once the sticks are on, and the sticks sit neatly against the straight sides. A narrow candle wobbles once the sticks go on, and a very tall one needs longer sticks than most craft bags contain. Ivory or cream looks best; the warm LED glow shows through the wax and the cinnamon color pops against it.",
      "q": "What size LED candle works best for cinnamon stick candle decor?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Finished cinnamon stick LED candle with jute twine, cream ribbon and autumn berries on a linen-covered fall table",
    "src": "/img/a11-hero"
  },
  "images": [
    {
      "after": 3,
      "img": {
        "alt": "Cinnamon stick LED candle with jute twine and cream ribbon, styled with dried leaves and pinecones in warm natural light",
        "caption": "The finished candle, styled with dried leaves and pinecones — no flame, just the LED glow.",
        "src": "/img/a11-a"
      }
    },
    {
      "after": 5,
      "img": {
        "alt": "Cinnamon stick LED candle on a rustic wooden mantel with dried orange slices, pinecones and autumn leaves",
        "caption": "On a mantel, it holds its own next to pinecones and dried orange slices.",
        "src": "/img/a11-b"
      }
    }
  ],
  "intro": "Cinnamon stick LED candle decor is one of those projects that looks like it took all afternoon and actually takes about twenty minutes. You wrap a plain battery-operated LED pillar candle in cinnamon sticks, tie it off with jute twine, add a small ribbon and a few faux berries — and suddenly you have a centerpiece that smells like autumn and glows like a real candle. The video above shows the whole make in thirty seconds, and below you'll find every step written out, the exact supplies, and the small choices that make it look neat instead of lopsided.",
  "motif": "snow",
  "readTime": 8,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "The idea works because the cinnamon does three jobs at once. It gives the candle texture — those warm brown ridges catch the light in a way plain wax never does. It gives it color — deep amber against the cream of the candle, which is the exact palette of fall. And it gives it scent — real cinnamon smells like autumn even before you switch the candle on. The LED candle is the quiet partner in all of this: it supplies the glow without a single degree of heat, so the sticks, the twine and the dried leaves around it are never in any danger."
        },
        {
          "items": [
            "Cheap supplies: a bag of cinnamon sticks and a roll of twine cost less than a takeaway coffee",
            "Fast: about 20 minutes from start to finish, with no drying time worth waiting for",
            "Safe: no flame, no heat, so it can sit near dried leaves, fabric and little hands",
            "Scented for free: the cinnamon gives off a soft, warm smell without any diffuser or spray",
            "Long season: it works from the first cool week of September right through Thanksgiving"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "It's also a forgiving first project. If a stick sits a little crooked, the twine hides it. If the knot isn't perfect, the ribbon bow covers it. And if you don't like how it looks, the whole thing comes apart in a minute and you start again with the same sticks. We've made a dozen of these now, and no two have come out exactly alike — that's part of the charm."
        }
      ],
      "heading": "Why Cinnamon Stick LED Candle Decor Works So Well"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The supply list is short, and you probably own half of it already. If you need to buy anything, one trip to a craft shop covers it — and the same bag of cinnamon sticks will make three or four candles, so the cost per candle stays tiny."
        },
        {
          "items": [
            "One wide battery-operated LED pillar candle, about 3 inches across and 5 to 6 inches tall",
            "12 to 16 cinnamon sticks, roughly the same length as the candle is tall",
            "Jute twine, about an arm's length",
            "A short length of cream or natural ribbon",
            "A small sprig of faux berries",
            "Scissors",
            "Craft adhesive that works on wax and wood (a glue gun works too, on its low setting)"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Picking the right LED candle"
        },
        {
          "t": "p",
          "text": "Look for a wide pillar in ivory or cream, with a flicker setting and a timer if you can find one. The flicker setting is what sells the whole thing — a steady glow looks like a night light, while a flicker looks like a real flame. Avoid candles with a shiny plastic finish; a matte wax-look surface takes the adhesive better and looks far more convincing next to real cinnamon."
        },
        {
          "t": "h3",
          "text": "Choosing cinnamon sticks"
        },
        {
          "t": "p",
          "text": "Buy a bag and pick through it rather than grabbing the first handful. You want sticks that are straight, unbroken and close to the same thickness — the thin, curly ones look pretty but snap when you trim them. A few broken bits are fine for the back of the candle, where nobody looks closely. And give them a sniff before you buy: good sticks smell warm and sweet, while old stock smells like nothing at all."
        }
      ],
      "heading": "What You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is the step that decides how the finished candle looks. Cinnamon sticks come in all lengths, and if you glue them on as they come, the top edge will look like a broken fence. Ten minutes of sorting now saves you from staring at a crooked top edge all season."
        },
        {
          "t": "h3",
          "text": "Sorting them by length"
        },
        {
          "t": "p",
          "text": "Lay all your sticks on the table and sort them into two piles: the long ones and the short ones. Stand the long ones next to the candle — they should reach from the base to just below the top rim, leaving the LED opening clear. Set the short ones aside for the back of the candle, or save them for a smaller project."
        },
        {
          "t": "h3",
          "text": "Trimming them to match"
        },
        {
          "t": "p",
          "text": "Hold each stick against the candle and mark where it needs to end — about a quarter inch below the rim, so the sticks never poke above the candle top. Score the stick with scissors at that mark, then snap it cleanly; cinnamon snaps along the score with a little pressure. Trim the longest ones first, then check them side by side on the table. They don't need to be identical to the millimetre — a few millimetres of difference reads as handmade, not messy."
        },
        {
          "items": [
            "Sort the sticks into long and short piles before you touch the glue",
            "Trim each stick so it ends just below the candle's top rim",
            "Dry-fit the sticks around the candle with no glue, standing them in a ring",
            "Check the ring from above — the tops should form a fairly level circle",
            "Set the sticks aside in order, so you can pick them up one by one when you glue"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Keep the trimmings. The little offcuts are handy for filling a thin gap later, and a small bowl of them on the table smells wonderful while you work."
        }
      ],
      "heading": "Sorting and Trimming Your Cinnamon Sticks"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Now the candle starts to look like something. Work with the candle standing on a flat surface, and glue the sticks one at a time — it's slower than doing them in batches, but each stick stays exactly where you put it. The video shows this part in real time, and it's worth watching once before you start, just to see the pace."
        },
        {
          "items": [
            "Put a small dot of craft adhesive on the back of the first stick, near the top and near the bottom",
            "Press the stick against the candle and hold it for five seconds",
            "Place the next stick tight against the first, with no gap showing between them",
            "Work your way around the candle, checking every few sticks that the tops stay level",
            "If a stick leans, pull it off while the glue is still soft and reset it — don't wait"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Keeping the sticks straight"
        },
        {
          "t": "p",
          "text": "The trick is to check from above every few sticks. Crouch down so your eyes are level with the top rim and look at the ring: if one stick leans out, nudge it back before the glue sets. Cinnamon sticks are rarely perfectly straight, so a little lean is normal — what you want to avoid is one stick sticking out further than its neighbours. If the last stick doesn't quite fit the gap, trim a thinner one to fill it rather than forcing a wide stick in."
        },
        {
          "t": "p",
          "text": "Leave the candle alone for ten minutes once the ring is complete. The glue feels set after a minute, but it needs a little longer to hold firm — and this is the worst moment to knock a stick loose by tying the twine too early."
        }
      ],
      "heading": "Wrapping the Cinnamon Sticks Around the Candle"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The twine is what holds everything together, and the ribbon and berries are what make it look finished. This part takes five minutes, and it's the most satisfying bit — the candle goes from a bundle of sticks to a proper decoration in one wrap."
        },
        {
          "items": [
            "Wrap the jute twine around the middle of the candle three or four times, keeping each loop tight against the last",
            "Tie a firm knot at the back, then trim the ends to about an inch",
            "Tuck the small faux berry sprig behind the knot so the stems hide under the twine",
            "Tie the cream ribbon in a simple bow over the knot, with the loops facing forward",
            "Step back and check that nothing — twine, ribbon or berries — covers the LED opening at the top"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "The ribbon and berries"
        },
        {
          "t": "p",
          "text": "Keep both small. A big bow fights with the cinnamon for attention, while a small neat bow just finishes the twine off. The same goes for the berries: one sprig with three or four berries is enough. If the sprig keeps slipping, a tiny dot of adhesive behind the knot holds it in place. And whatever you do, keep every decoration below the rim — the LED opening needs to stay clear so the light can spill out and the glow can do its work."
        }
      ],
      "heading": "Tying the Twine and Adding the Finishing Touches"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A cinnamon stick LED candle decor piece is happiest in the middle of things — a mantel, a dining table, a hallway console — where people pass it and catch the scent. It also works in smaller spots: a bathroom shelf, a bedside table, or next to the front door, where it greets everyone who walks in."
        },
        {
          "items": [
            "On a mantel: set it in the centre with a few dried leaves and a pinecone on each side",
            "As a Thanksgiving centerpiece: put it on a wooden board with mini pumpkins, dried orange slices and a linen runner",
            "On an entryway table: pair it with a small stack of books and a sprig of eucalyptus",
            "As a gift: wrap it in tissue paper, tie it with the same cream ribbon, and add a handwritten tag",
            "In a group: make two more in different heights and cluster them — the tallest at the back, the shortest at the front"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "One styling tip that makes a real difference: give the candle a base. A wooden board, a linen cloth or even a plain ceramic plate underneath it makes the whole thing look deliberate instead of just placed. The base catches any bits of cinnamon that flake off, too, which keeps the table clean."
        }
      ],
      "heading": "Styling Your Cinnamon Stick LED Candle Decor"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Look after it and the candle will last the whole season. Dust it with a dry cloth once a week — a damp cloth makes the cinnamon swell and the twine go limp. Keep it out of direct sun, which fades the sticks, and away from steam, so the bathroom is a bad spot for the long term even though it looks lovely there. When fall is over, wrap the candle in tissue paper and store it upright in a dry cupboard; it will be ready to use again next year with nothing more than a fresh ribbon."
        },
        {
          "t": "h3",
          "text": "Ways to change it up"
        },
        {
          "t": "p",
          "text": "The same make works all winter with a few swaps. Change the cream ribbon for a deep red or forest green one and it fits a Christmas table. Tuck a dried orange slice behind the twine instead of berries for a simpler look. Add a star anise or two next to the berries for a stronger scent. Or make a pair in different heights and give one away — it's the kind of gift people keep, because it looks like it took far longer than twenty minutes."
        }
      ],
      "heading": "Care, Storage and Easy Variations"
    }
  ],
  "slug": "cinnamon-stick-led-candle-decor",
  "subcategory": "Table Decor DIY",
  "title": "Cinnamon Stick LED Candle Decor: A Warm Rustic Fall Craft for Your Mantel",
  "to": "#275E7E",
  "video": "cinnamon-stick-led-candle-decor"
}),
  P({
  "bannerTitle": "New Year's Eve Party Ideas",
  "category": "holidays",
  "date": "2026-11-21",
  "excerpt": "New Year's Eve party ideas that work at home — easy themes, budget decor, crowd-pleasing food and games, plus a simple timeline so you enjoy the night too.",
  "faqs": [
    {
      "a": "Keep it small and simple. Eight to twelve people is the sweet spot for a living room — everyone can talk without shouting, and you don't need to cook for an army. Pick one theme, one signature drink, and three or four appetizers, and let the countdown do the rest.",
      "q": "What are the best New Year's Eve party ideas for a small group at home?"
    },
    {
      "a": "For 10 to 12 guests, $100 to $150 covers the whole night: about $30 to $40 on decor, $50 to $60 on food, and $25 to $30 on drinks and ice. Spend on what guests touch and taste, not on things they'll never notice.",
      "q": "How much should I budget for New Year's Eve party ideas at home?"
    },
    {
      "a": "Start at 8 PM. That gives guests time to arrive, eat, and settle in before the countdown. If you're serving dinner, start at 7 PM. Either way, plan the big moment — the toast and the photo — for 11:55 PM, so nobody is still in the kitchen when midnight hits.",
      "q": "What time should a New Year's Eve party start?"
    },
    {
      "a": "Finger food that can sit out for two hours: a baked brie, pigs in a blanket, marinated olives, and something sweet like mini brownies. Add one warm dish — a slow-cooker meatball tray works — and a signature cocktail or mocktail. Skip anything that needs plating at the last minute.",
      "q": "What food should I serve at a New Year's Eve party?"
    }
  ],
  "from": "#E3A72F",
  "hero": {
    "alt": "A warm New Year's Eve living room at night, gold and black balloons, string lights and a table set with champagne glasses under a glowing clock showing nearly midnight",
    "src": "/img/a10-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "Gold and silver balloons, disco balls and gold confetti scattered on a wooden floor beside a champagne bottle, a New Year's Eve party setup",
        "caption": "Balloons, disco balls and a little confetti do most of the decorating for you.",
        "src": "/img/a10-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "Friends laughing around a coffee table playing a card game at a New Year's Eve house party, with drinks and gold confetti on the table",
        "caption": "The games that work best need nothing more than a deck of cards and a good question.",
        "src": "/img/a10-b"
      }
    }
  ],
  "intro": "The best New Year's Eve party ideas don't start with a theme or a shopping list. They start with three honest answers: how many people, how much room, and how much you want to spend. Get those right and the night almost runs itself. We've hosted this night in a one-bedroom apartment for eight friends and in a house for forty, and the small one was more fun — nobody shouted across a room, the food ran out at exactly the right time, and we were all on the couch together at midnight. This guide is built for that kind of night: a home party that feels special without costing a fortune or eating your whole week.",
  "motif": "star",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "The best New Year's Eve party ideas don't start with a theme. They start with three honest answers: how many people, how much room, and how much you want to spend. We've hosted this night for eight friends in a one-bedroom apartment and for forty in a house — the small one was more fun."
        },
        {
          "t": "h3",
          "text": "Start With the Guest List, Not the Decor"
        },
        {
          "t": "p",
          "text": "One person needs about 10 square feet to stand with a drink and still move around. In a normal living room, 8 to 12 people feels full and warm; 15 starts to feel crowded. Every extra guest also adds roughly $10 to $12 to the night."
        },
        {
          "items": [
            "Under 10 guests: one food table, one drinks spot.",
            "10 to 20 guests: put the food in the kitchen, keep the living room for talking.",
            "Over 20 guests: rent a folding table and chairs, $25 to $40."
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Pick a Budget Before You Shop"
        },
        {
          "t": "p",
          "text": "For 10 to 12 guests, $120 is plenty: $35 on decor, $55 on food, $30 on drinks and ice. Write it down before you shop."
        }
      ],
      "heading": "New Year's Eve Party Ideas That Work in Any Home"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A theme does two jobs at once: it tells guests what to wear, and it tells you what to buy. Without one, you end up with a random pile of gold, silver and neon that doesn't quite match. Pick the theme that fits your crowd and stick to it for every single buy."
        },
        {
          "t": "h3",
          "text": "Black and Gold: The Classic That Always Works"
        },
        {
          "t": "p",
          "text": "Black and gold is the safest New Year's Eve party theme there is, and it photographs beautifully in warm light. Keep the gold to about a third of what you see — too much and the room looks like a gift shop. Black tablecloths, gold plates, and one big gold banner."
        },
        {
          "items": [
            "Black tablecloth — about $8 at a party shop.",
            "Gold paper plates and black napkins, 20 of each — about $10 total.",
            "One gold foil fringe curtain for the photo wall — about $6.",
            "Black and gold balloons, a pack of 30, plus a $5 hand pump."
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Retro Disco and Y2K: The Fun One"
        },
        {
          "t": "p",
          "text": "If your crowd is under 35, disco wins. Small mirror balls catch the light in a way no other decor does, and guests will pose with them all night. Hang two — an 8-inch ball over the food table, a 6-inch one by the door — and add a silver fringe curtain."
        }
      ],
      "heading": "New Year's Eve Party Ideas: Themes That Set the Mood"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Decor is where most people overspend, and it's also where the cheapest tricks look the best. Guests remember the room feeling warm and glowing; they don't remember whether the banner came from a boutique or a dollar store. Spend on light: warm string lights, candles, one good garland."
        },
        {
          "t": "h3",
          "text": "The Balloon Garland That Costs Under $30"
        },
        {
          "t": "p",
          "text": "A balloon garland looks like you hired someone. It takes about 45 minutes and one pack of balloons, and it frames a doorway or a fireplace better than anything else you can buy."
        },
        {
          "items": [
            "Blow up 24 balloons in two sizes — 12-inch and 5-inch.",
            "Tie them in pairs, then twist two pairs into clusters of four.",
            "Thread the clusters onto balloon tape, alternating colours.",
            "Hang with removable hooks and tuck in fake greenery to hide gaps."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "A Table That Looks Expensive (It Isn't)"
        },
        {
          "t": "p",
          "text": "The food table is the one guests photograph most. A dark cloth, a runner down the middle, and food at three heights — a cake stand, a wooden board, a tray on books — make a plain spread look styled. Add a small clock set to 11:55 and a few tea lights."
        }
      ],
      "heading": "New Year's Eve Decor on a Small Budget"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "New Year's Eve food has one rule: it must survive sitting out for two hours and still taste good. Nobody wants a host who disappears into the kitchen every twenty minutes. Pick food you can set out at 8 PM and forget about."
        },
        {
          "t": "h3",
          "text": "Appetizers That Disappear First"
        },
        {
          "t": "p",
          "text": "Every year the same things vanish first. A baked brie with honey takes 20 minutes in a 375°F oven and feeds 10 people from one wheel. Pigs in a blanket — one pack of crescent dough and a pack of mini sausages makes 24 pieces in 15 minutes."
        },
        {
          "items": [
            "Baked brie: one 8-ounce wheel, 2 tablespoons honey, walnuts — 375°F, 18 to 20 minutes.",
            "Pigs in a blanket: 24 pieces, crescent dough + mini sausages — 375°F, 12 to 15 minutes.",
            "Slow-cooker meatballs: 2 pounds frozen meatballs, one jar of sauce, 2 hours on low.",
            "Mini brownies: one box mix in a mini muffin tin, gold sugar on top — 20 minutes."
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "A Simple Champagne Cocktail Bar"
        },
        {
          "t": "p",
          "text": "A drinks table beats a full bar because guests serve themselves and you stay in the room. One bottle of prosecco or cava ($10 to $12), one bottle of sparkling cider for non-drinkers ($5), and three mixers: orange juice, cranberry juice and elderflower cordial."
        }
      ],
      "heading": "New Year's Eve Party Food That Disappears Fast"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Games are what turn a room full of people standing around into a party. The trick is picking games that need no setup and no explaining — if you have to read out rules for five minutes, half the room has already checked their phones."
        },
        {
          "t": "h3",
          "text": "Games That Need Zero Setup"
        },
        {
          "t": "p",
          "text": "Two Truths and a Lie still works after all these years, because it makes people laugh at stories they didn't know. The resolutions jar is even easier: everyone writes one resolution on a slip of paper, folds it, and drops it in a jar."
        },
        {
          "items": [
            "Two Truths and a Lie: three statements each, guess the lie — 15 minutes, zero props.",
            "Resolutions jar: slips of paper, a jar, and an 11:30 PM reveal — free.",
            "A playlist game: play 5 seconds of a song, first to name it wins."
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "A Countdown Game for Midnight"
        },
        {
          "t": "p",
          "text": "The last ten minutes before midnight can feel awkward if nobody plans them, so plan them. At 11:50, hand everyone a slip of paper and a pen. They write one word for the year that's ending and one word for the year ahead, then read them out at 11:58."
        },
        {
          "items": [
            "11:50 PM: hand out paper — one word for each year.",
            "11:55 PM: read them out loud, one person at a time.",
            "11:59 PM: pour the drinks, hand out the confetti poppers.",
            "Midnight: toast, hug, take the photo — then let the music take over."
          ],
          "t": "ol"
        }
      ],
      "heading": "New Year's Eve Party Games for Adults (and Everyone Else)"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A dress code saves guests from the worst party feeling: showing up in jeans while everyone else is in sequins, or the other way round. Put it right in the invitation — two words is enough, like \"sparkly casual\" or \"black and gold\"."
        },
        {
          "t": "h3",
          "text": "What to Wear to a House Party"
        },
        {
          "t": "p",
          "text": "Sequin tops are the easiest New Year's Eve outfit there is: one sparkly top, black trousers or a black skirt, and you're done. Velvet works the same way — a velvet dress or a velvet blazer over jeans reads festive without trying too hard."
        },
        {
          "items": [
            "Sequin top + black trousers: the classic, works for every body and every room.",
            "Velvet dress or blazer: warm, soft, and it photographs beautifully in candlelight.",
            "Gold or champagne accessories: earrings, a clutch, or a pair of shoes — one piece is enough."
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Comfortable Shoes, Seriously"
        },
        {
          "t": "p",
          "text": "You'll be on your feet from 8 PM to past midnight, standing, dancing, and carrying trays. Wear the shoes you can stand in for four hours, not the ones that look best in a photo. Block heels, dressy flats, or clean white trainers with a sparkly top all work."
        }
      ],
      "heading": "New Year's Eve Outfits: What to Wear to a House Party"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A party without a plan drifts. Someone is still cooking at 10 PM, the music stops at 11, and midnight sneaks up while half the room is in the kitchen. A loose timeline fixes all of it — not a strict schedule, just a few anchors so the night flows."
        },
        {
          "t": "h3",
          "text": "The 7 PM to Midnight Plan"
        },
        {
          "t": "p",
          "text": "Five hours sounds long, but it flies by. The morning is for the garland and the table; the afternoon is for the food. By 7 PM everything should be set out and you should be dressed. After that, the night runs itself."
        },
        {
          "items": [
            "Morning: balloon garland up, table set, playlist ready — about 90 minutes.",
            "Afternoon: cook the warm dish, bake the brie, chill the drinks.",
            "7:00 PM: doors open, music on, appetizers out.",
            "9:00 PM: first game, then dessert at 10:30 and the dance playlist.",
            "11:50 PM: the one-word game, then the countdown, the toast, and the photo."
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "What to Do After Midnight"
        },
        {
          "t": "p",
          "text": "Midnight isn't the end — it's the best part, if you let it be. Put on the dance playlist, bring out the leftover brownies, and let people stay as long as they like. Keep the sparkling cider out for anyone driving home."
        }
      ],
      "heading": "A Simple Timeline for the Night, 7 PM to Midnight"
    }
  ],
  "slug": "new-years-eve-party-ideas",
  "subcategory": "New Year's Eve",
  "title": "New Year's Eve Party Ideas 2026: Easy Themes, Decor, Food & Games for a Night to Remember",
  "to": "#B95E14"
}),
  P({
  "bannerTitle": "Pressed Leaf Glass Frames",
  "category": "diy-crafts",
  "date": "2026-11-21",
  "excerpt": "Pressed autumn leaf glass frames turn a walk's worth of fallen leaves into elegant botanical wall art. All you need is a floating glass frame, a few fully dried leaves, and about half an hour — here's the full step-by-step, plus the leaf picks and styling tricks that make it look bought, not homemade.",
  "faqs": [
    {
      "a": "Years, as long as the leaves were fully dry when you framed them and the frame stays out of direct sun and damp. In a normal living room we've seen leaves hold their color for three or four years. If one fades, open the frame and swap it — that's the advantage of a floating frame.",
      "q": "How long do pressed leaves last in a pressed autumn leaf glass frame?"
    },
    {
      "a": "Press them yourself — it's free, and the book method in this guide takes one to two weeks with no special kit. Buy pressed leaves only if you need a specific species you can't find locally, and check they're fully dry and flat before you pay for them.",
      "q": "Can I press leaves myself, or should I buy them already pressed?"
    },
    {
      "a": "Yes, eventually — direct sun bleaches the reds and oranges first, sometimes within a single season on a south-facing wall. Hang the frame where it gets bright indirect light instead, and the colors will last years rather than months.",
      "q": "Will my pressed autumn leaf glass frame fade in sunlight?"
    },
    {
      "a": "An 8 x 10 inch (20 x 25 cm) frame is the sweet spot for three or four leaves, and it hangs well almost anywhere. Go smaller — 5 x 7 inch — for a single leaf, or larger — 11 x 14 inch — for a five-leaf arrangement on a bigger wall.",
      "q": "What size floating frame works best for pressed leaf art?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Finished floating glass frame with pressed orange, yellow and burgundy maple leaves hanging on a cream wall in an autumn living room",
    "src": "/img/a9-hero"
  },
  "images": [
    {
      "after": 3,
      "img": {
        "alt": "Floating glass frame with three pressed maple leaves in orange, yellow and burgundy on a cream wall",
        "caption": "Three leaves, spaced wide: the calmest layout, and the easiest to get right first time.",
        "src": "/img/a9-a"
      }
    },
    {
      "after": 5,
      "img": {
        "alt": "Pressed leaf glass frame styled on a light wood console table with a ceramic vase of dried grasses and linen books",
        "caption": "On a console table, the frame holds its own next to a vase and a stack of books.",
        "src": "/img/a9-b"
      }
    }
  ],
  "intro": "Pressed autumn leaf glass frames are one of those projects that look far harder than they are. You gather a few good leaves on a walk, press them flat until they're dry, and sandwich them between two panes of glass — and suddenly you've got a piece of botanical wall art that fits a living room, an entryway, or a gallery wall. The short video above shows the whole make in thirty seconds, and below you'll find every step written out, the exact supplies, and the small choices that make the difference between a frame that looks neat and one that looks like a school project.",
  "motif": "snow",
  "readTime": 8,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "The idea works because the leaves do the decorating. Autumn hands you the colors for free — bright orange, soft gold, deep burgundy — and the glass keeps them flat and visible from both sides. A floating frame holds the leaves in mid-air, so light passes through and the veins show up like a print. No paint, no glue gun, no drawing skills needed."
        },
        {
          "items": [
            "Free materials: the best leaves are the ones you pick up on a walk",
            "Quick: about 30 minutes of making once your leaves are pressed and dry",
            "No special tools: tweezers and a soft cloth are the fanciest things on the list",
            "Fits any room: the same frame works in a living room, hallway, bedroom or home office",
            "Easy to change: swap the leaves out next season and the frame feels new again"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "It's also a kind first project if you don't think of yourself as crafty. The hardest part is choosing which leaves to keep — and the video shows you exactly what a good pick looks like, so you can judge yours against it before you start."
        }
      ],
      "heading": "Why Pressed Autumn Leaf Glass Frames Work So Well"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Everything on this list is easy to find. We used an 8 x 10 inch (20 x 25 cm) floating glass frame for the one in the video — big enough for three or four leaves, small enough to hang anywhere. If you already own a frame, use it; the steps don't change."
        },
        {
          "items": [
            "Fully dried pressed leaves — maple, oak and sweetgum press best, in orange, yellow and burgundy",
            "A floating glass frame (two glass panels in a brass or wood edge, with hardware)",
            "Tweezers, for placing leaves without touching them",
            "Neutral backing paper — plain cream or white card, cut to fit the frame",
            "A soft cloth, for wiping fingerprints off the glass",
            "Frame hardware — the clips or screws that came with your frame, plus a picture hook for hanging"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Picking the right frame"
        },
        {
          "t": "p",
          "text": "Look for a frame with a thin metal edge — brass or black both suit autumn leaves — and glass on both sides, not glass on one side and a solid back. The whole point is seeing the leaves float, so a solid backing defeats it. Check the clips before you buy: spring clips are easiest, small screws are sturdier on a wall that gets bumped."
        }
      ],
      "heading": "What You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is step one of the make, and it's the part that decides how the finished frame looks. Pick leaves on a dry day, after the morning damp has lifted. You want leaves that are already flat and crisp, with strong color and no torn edges or brown spots."
        },
        {
          "t": "h3",
          "text": "Leaves that press best"
        },
        {
          "t": "p",
          "text": "Maple leaves are the classic pick — big, bold shapes and the strongest autumn colors. Oak leaves press well too, and their lobed edges add variety next to maple. Mix sizes: one large leaf as the anchor, then smaller ones around it. Keep three or four of each color, so you can choose the best of the bunch when you arrange."
        },
        {
          "t": "h3",
          "text": "Pressing them flat"
        },
        {
          "t": "p",
          "text": "If your leaves aren't fully dry yet, press them first — a damp leaf will curl and spot inside the glass. The old book method still works best:"
        },
        {
          "items": [
            "Lay each leaf flat between two sheets of plain paper, with no overlaps",
            "Close the paper inside a heavy book, then stack two or three more books on top",
            "Leave them alone for one to two weeks — check at one week and give damp leaves more time",
            "A leaf is ready when it feels papery and crisp, and stays flat when you lift it"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Don't rush this part. A leaf that still bends will curl inside the frame within a week, and there's no fixing it without opening the whole thing up again."
        }
      ],
      "heading": "Picking and Pressing Your Leaves"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is step two, and the most enjoyable part. Lay your backing paper on a clean table and set the bottom glass panel on top of it. Then, using tweezers, place the leaves on the paper one at a time. Tweezers matter here: fingers leave oils on the leaves and smudges on the glass, and pressed leaves are thin enough to crack if you grip them."
        },
        {
          "t": "h3",
          "text": "A layout that looks balanced"
        },
        {
          "t": "p",
          "text": "Start with your biggest leaf slightly off-center — dead center looks stiff, while a small shift to one side looks natural. Then add the others around it, leaving real gaps between them. The gaps are part of the design: they let light through and stop the frame from looking crowded."
        },
        {
          "items": [
            "Odd numbers look best: three or five leaves beat four",
            "Mix the colors: don't put all the orange leaves on one side",
            "Point the stems in different directions — it keeps the layout from looking lined up",
            "Leave a thumb's width of space between leaves and the frame edge",
            "Step back and look from a distance before you close the glass — small shifts show up from across the room"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Once you're happy, take a photo of the layout. If a leaf shifts while you lower the glass, the photo tells you exactly where it belonged."
        }
      ],
      "heading": "Arranging Your Pressed Autumn Leaf Glass Frame"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Step three is the careful part. Hold the top glass panel by its edges and lower it straight down onto the leaves — don't slide it, or you'll drag the arrangement out of place. Set it down gently and let its own weight settle it. Then secure the frame hardware: clips or screws, snug but not forced. Glass cracks when hardware is over-tightened, so stop as soon as it holds."
        },
        {
          "t": "h3",
          "text": "No smudges, no slips"
        },
        {
          "t": "p",
          "text": "Wipe both outer faces of the glass with the soft cloth, holding the frame by its edge while you work. Fingerprints show up badly against light, so check the glass against a window before you hang it. If a leaf has slipped, open the frame, reset it from your photo, and close it again — better now than on the wall."
        },
        {
          "items": [
            "Lower the glass straight down — never slide it across the leaves",
            "Tighten clips just enough to hold; over-tightening cracks glass",
            "Wipe with a dry soft cloth — spray cleaner can seep between the panes",
            "Hang with a proper picture hook, not a plain nail, so the frame sits flat"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Hold the finished frame up to the light and look through it. The leaves should read clearly from both sides, with their veins lit up — that's the moment you know it worked."
        }
      ],
      "heading": "Closing the Glass and Finishing the Frame"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A pressed leaf frame is quiet decor — it doesn't shout, so it works in places where a loud print would fight the room. Hang it where daylight can reach it, because backlight is what makes the leaves glow. A wall opposite a window is ideal; a dark hallway is not."
        },
        {
          "items": [
            "Entryway: one frame at eye level, so guests see it the moment they walk in",
            "Gallery wall: mix one leaf frame in with photos and prints — the nature piece breaks up the rectangles",
            "Mantel: lean it against the wall between candles or a small vase, so it catches the firelight",
            "Desk or console: stand it on a small easel next to a vase of dried grasses",
            "Gift: a framed leaf from a walk you took together beats a shop-bought card every time"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "If you make more than one, hang them as a pair or a trio with matching frames and different leaf colors in each. A row of three small frames reads like a proper collection, and it costs about the same as one store-bought print."
        }
      ],
      "heading": "Styling Your Pressed Leaf Frames Around the House"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Pressed leaves are dry plant matter, so two things age them: sunlight and damp. Keep the frame out of direct sun — a south-facing window will fade orange to pale yellow within a season — and keep it out of steamy rooms like bathrooms. In a normal dry living room, the leaves hold their color for years."
        },
        {
          "t": "h3",
          "text": "Simple care, and easy variations"
        },
        {
          "t": "p",
          "text": "Dust the glass with a dry cloth now and then, the same as any picture frame. If a leaf ever fades or a corner curls, open the frame and swap it for a fresh pressed one — that's the real advantage of a floating frame over a glued collage. And once you've made one, the same method works with pressed ferns, small wildflowers, or a single dramatic leaf on its own in a smaller frame."
        },
        {
          "items": [
            "Keep out of direct sunlight to hold the autumn colors",
            "Avoid damp rooms — moisture fogs the glass and softens the leaves",
            "Swap leaves each season: green ferns in spring, wildflowers in summer",
            "Store spare pressed leaves flat in a book, so next year's frame takes ten minutes"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "That's the whole project: a walk, a book, a frame, and half an hour. The leaves you press this autumn will still be on your wall when the next lot turns."
        }
      ],
      "heading": "Keeping Pressed Leaf Frames Looking Good"
    }
  ],
  "slug": "pressed-autumn-leaf-glass-frames",
  "subcategory": "Handmade Gifts",
  "title": "Pressed Autumn Leaf Glass Frames: Easy Botanical Wall Art for Fall",
  "to": "#275E7E",
  "video": "pressed-autumn-leaf-glass-frames"
}),
  P({
    "slug": "turkey-charcuterie-board",
    "title": "Turkey Charcuterie Board Ideas: Easy Thanksgiving Snack Board with Salami, Cheese & Crackers",
    "bannerTitle": "Turkey Charcuterie Board Ideas",
    "category": "food-recipes",
    "subcategory": "Appetizers",
    "excerpt": "Turkey charcuterie board ideas for Thanksgiving: a salami-feather snack board with cheese, crackers and a pear body. Feeds 10-12, ready in 30 minutes.",
    "date": "2026-11-21",
    "readTime": 10,
    "motif": "cookie",
    "from": "#DE7A3D",
    "to": "#A83E1B",
    "intro": "Every Thanksgiving, there's that hungry hour before the turkey comes out of the oven, when everyone's standing around the kitchen picking at whatever's in reach. A turkey charcuterie board fixes that hour. It's a big snack board built in the shape of a turkey — salami and cracker feathers fanned out behind a little pear body — and it takes about 30 minutes to put together with zero cooking. We made one last year as a joke for the kids and it vanished faster than the pie. This guide gives you the exact shopping list for 10 to 12 people, the assembly order that makes the turkey shape actually read, and the make-ahead timing so you're not slicing cheese while guests ring the bell.",
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "A turkey charcuterie board is just a regular meat and cheese board with one trick: everything is arranged in arcs. The rows of salami, cheese and crackers fan out in a half-circle, and your eye reads those arcs as tail feathers. A pear stood up at the bottom center becomes the body, two chocolate chips become eyes, and suddenly a snack board is a turkey."
          },
          {
            "t": "h3",
            "text": "What makes a Thanksgiving snack board read as a turkey"
          },
          {
            "items": [
              "Arcs, not piles — every row follows the same half-circle curve",
              "Color bands — dark salami, orange cheddar, pale crackers, red grapes, so each feather row stands out",
              "A clear body — the pear sits low and center, with open space around it so the shape pops",
              "A face — eyes, a beak and a wattle take ten seconds and sell the whole thing"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "You don't need any carving skills or special tools. If you can overlap slices in a row, you can build this. The order matters more than neatness, and the steps below follow the order that works: feathers first, body last."
          }
        ],
        "heading": "Turkey Charcuterie Board Basics: Why the Shape Works"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "This list fills one large board generously for 10 to 12 people as a pre-dinner snack. Since a full Thanksgiving dinner follows, portions are grazing-size — about 2 ounces of meat and 2 ounces of cheese per person, plus crackers and fruit."
          },
          {
            "t": "h3",
            "text": "Meats for the feather rows"
          },
          {
            "items": [
              "8 oz (225 g) Genoa salami slices, about 40 slices — the main feather row",
              "6 oz (170 g) pepperoni slices — the second feather row",
              "4 oz (115 g) prosciutto or soppressata — optional third row, ruffled loosely"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Cheeses, crackers and the turkey body"
          },
          {
            "items": [
              "8 oz (225 g) sharp cheddar, sliced — save one slice for the beak and feet",
              "8 oz (225 g) pepper jack or Colby jack, cut into cubes",
              "4 oz (115 g) white cheddar slices",
              "1 box round butter crackers, about 40 crackers — the outer feather tips",
              "1 box water crackers or flatbread crackers, about 30",
              "1 firm Bosc pear — the turkey body (a small 8 oz brie wheel works too)"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Fruit, garnish and the face"
          },
          {
            "items": [
              "1 cup red grapes and 1 cup green grapes, on the stem in small clusters",
              "1/2 cup dried cranberries and 1/2 cup dried apricots",
              "1/2 cup candied pecans or whole almonds",
              "1 small red bell pepper — a thin strip for the wattle, the rest in strips for gaps",
              "2 chocolate chips or 2 black olives — the eyes",
              "4-5 fresh rosemary sprigs, tucked around the edges",
              "Optional: 1/4 cup fig jam or cranberry sauce in a small bowl"
            ],
            "t": "ul"
          }
        ],
        "heading": "Turkey Charcuterie Board Ingredients for 10 to 12 People"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Set aside 30 minutes and build the board where it will be served, or on a board you can carry with two hands. Work from the outside in — feathers first, face last."
          },
          {
            "t": "h3",
            "text": "The assembly order that keeps the feathers neat"
          },
          {
            "items": [
              "Lay out your board (16 to 20 inches — see the size guide below). If you're using the jam bowl, set it in an upper corner now so the arcs can flow around it.",
              "Fan the salami in a wide arc across the top two-thirds of the board, each slice overlapping the last by half. This is the back feather row and the widest arc.",
              "Inside the salami, lay the pepperoni in a second, tighter arc. If you're using prosciutto, ruffle it in loose folds between the two rows.",
              "Add the cheddar slices as the third arc, then run the white cheddar slices or pepper jack cubes in a fourth row closer to the center.",
              "Fan the round butter crackers along the very top edge as the feather tips, and line the water crackers down both sides.",
              "Now the body: slice a thin sliver off one side of the pear so it sits flat, and stand it at the bottom center, stem up, in the open space inside the arcs.",
              "Fill every gap with grape clusters, dried cranberries, apricots, pecans and pepper strips. No bare board should show — small gaps get a single cranberry or nut.",
              "Give the turkey its face: press two chocolate chips or olive halves into the pear for eyes, cut a small triangle from the saved cheddar slice for the beak, and lay the thin red pepper strip beside the beak as the wattle. Cut two tiny cheddar triangles for feet at the base.",
              "Tuck rosemary sprigs around the outer edge, step back, and fix any row that looks flat by nudging a few slices upright."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Take the photo now, before anyone touches it — the first hand in always goes for the salami row, and the turkey loses a feather fast."
          }
        ],
        "heading": "Turkey Charcuterie Board Assembly: Building the Turkey Shape Step by Step"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The board is the one thing people get wrong. Too small and the arcs get crowded until the turkey shape disappears; too big and the same ingredients look thin and sad. A round board shows off the fan shape best, but a big rectangular cutting board works fine — just build the arcs across one end."
          },
          {
            "t": "h3",
            "text": "Board sizes by guest count"
          },
          {
            "items": [
              "6 to 8 people: a 14-inch round board, use about two-thirds of the ingredient list",
              "10 to 12 people: a 16 to 18-inch round board, or a 12 x 18-inch rectangle — the full list above",
              "15 to 20 people: a 20-inch board or two smaller turkeys on two boards (two turkeys look great on a long table)",
              "No big board? A rimmed baking sheet lined with parchment works, and the rim stops runaway grapes"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "One layout rule worth following: keep the bottom third of the board open until the pear goes in. If the feather rows creep too low, the body has nowhere to sit and the whole bird looks squashed."
          }
        ],
        "heading": "Choosing the Right Board Size for a Thanksgiving Charcuterie Board"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Almost everything on this board can be prepped the day before, which is exactly what you want when the oven is already spoken for. The only real rule: crackers go on last, or they go soft in the fridge overnight."
          },
          {
            "t": "h3",
            "text": "What to do when"
          },
          {
            "items": [
              "Night before: cube the pepper jack, slice the cheddar, cut pepper strips, wash and dry the grapes, portion nuts and dried fruit into small containers",
              "Night before: keep meats sealed in their packs in the fridge — sliced meat dries out fast once it's opened and arranged",
              "Morning of: set out the board, bowl and serving utensils so assembly is one smooth run",
              "Up to 2 hours before guests: build the full board except the crackers, cover loosely with plastic wrap and refrigerate",
              "30 minutes before serving: add the crackers and the pear's face, then set the board out so the cheese loses its fridge chill"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Food safety is simple here: the finished board can sit out for about 2 hours. At a long, slow gathering, build a smaller board and keep a refill tray in the fridge instead of leaving one big board out all afternoon."
          }
        ],
        "heading": "Make-Ahead Timeline: Prep the Night Before, Assemble in 30 Minutes"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Prices swing a lot by store, but this is a realistic mid-range grocery run. The meats and cheeses are nearly all of the cost — the pear, grapes and garnishes are pocket change by comparison."
          },
          {
            "t": "h3",
            "text": "Typical cost breakdown for 10 to 12 people"
          },
          {
            "items": [
              "Meats (salami, pepperoni, prosciutto): $10 to $14",
              "Cheeses (cheddar, pepper jack, white cheddar): $9 to $12",
              "Crackers, two boxes: $6 to $8",
              "Fruit, dried fruit and nuts: $7 to $9",
              "Pear, pepper, rosemary and face bits: about $3",
              "Total: roughly $35 to $45 — about $3.50 per person"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "To trim it: buy store-brand salami and cheddar (nobody can tell once it's fanned), pick one nicer cheese instead of three, and skip the prosciutto row. That brings the board closer to $28 without changing how it looks in photos."
          }
        ],
        "heading": "What a Turkey Charcuterie Board Costs to Make"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The turkey shape survives almost any swap, because the shape comes from the arcs, not from any single ingredient. Swap by row: replace a feather row like for like, and the board still reads as a turkey."
          },
          {
            "t": "h3",
            "text": "Swaps that keep the shape"
          },
          {
            "items": [
              "Vegetarian: drop the meats, add a hummus bowl as a second body element, and make the feather rows from cheddar, cucumber slices, carrot sticks and bell pepper strips",
              "Nut-free: swap pecans for pretzel sticks, pumpkin seeds or extra dried fruit",
              "Kid-friendly: turkey pepperoni, mild Colby jack, more grapes and strawberries, and a few mini cookies tucked into the outer row",
              "Gluten-free: use gluten-free crackers for one side of the board and keep them fanned separately so there's no mix-up",
              "No pear: a small brie wheel, a cheese ball or even a mini pumpkin all make a good body — the face goes on with the same chocolate-chip eyes"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Leftovers, if there are any, keep for 2 days in the fridge in a sealed container. The crackers won't survive — eat those tonight, standing at the counter, the way everyone actually does."
          }
        ],
        "heading": "Easy Swaps: Vegetarian, Nut-Free and Kid-Friendly Turkey Boards"
      }
    ],
    "faqs": [
      {
        "a": "Prep the ingredients the night before — cube the cheese, slice peppers, wash the grapes — and assemble the board up to 2 hours before serving, covered in the fridge. Add the crackers and the pear's face in the last 30 minutes so the crackers stay crisp and the pear doesn't brown.",
        "q": "How far ahead can I make a turkey charcuterie board?"
      },
      {
        "a": "A 16 to 18-inch round board, or a 12 x 18-inch rectangular board, holds the full ingredient list for 10 to 12 people. For 15 to 20 guests, go up to a 20-inch board or build two smaller turkeys — two boards are easier to carry and refill.",
        "q": "What size board do I need for a turkey charcuterie board for 12 people?"
      },
      {
        "a": "About 2 hours at room temperature. Thanksgiving grazing tends to run longer than that, so either set the board out right as guests arrive and clear it when dinner starts, or build a smaller board and keep a refill tray in the fridge.",
        "q": "How long can a charcuterie board sit out at Thanksgiving?"
      },
      {
        "a": "A small 8 oz brie wheel stood on its edge, a cheese ball, or a mini pumpkin all work. The pear is the classic choice because its shape already looks like a little turkey body and the stem reads as a tuft — a firm Bosc pear sits the most steadily.",
        "q": "What can I use instead of a pear for the turkey body?"
      }
    ],
    "hero": {
      "src": "/img/a8-hero",
      "alt": "Turkey charcuterie board with salami and cracker feather arcs, cheddar rows, grape clusters and a pear turkey body on a round wooden board"
    },
    "images": [
      {
        "after": 2,
        "img": {
          "src": "/img/a8-a",
          "alt": "Close-up of a charcuterie board with salami slices, breadsticks, dried figs and candied nuts on a wooden tray",
          "caption": "Feather-row details: salami, breadsticks and dried fruit fill every gap."
        }
      },
      {
        "after": 4,
        "img": {
          "src": "/img/a8-b",
          "alt": "Night-before prep with containers of cubed cheese, washed grapes, a stack of salami slices and pepper strips beside an empty wooden board",
          "caption": "Night-before prep: everything portioned and ready for a 30-minute assembly."
        }
      }
    ]
  }),
  P({
  "slug": "friendsgiving-table-decor-ideas",
  "title": "Friendsgiving Table Decor Ideas 2026: Easy Rustic Centerpieces, Place Settings & Budget-Friendly Table Styling",
  "bannerTitle": "Friendsgiving Table Decor Ideas",
  "category": "holidays",
  "subcategory": "Thanksgiving & Friendsgiving",
  "excerpt": "Friendsgiving table decor ideas that actually work: rustic centerpieces, easy place settings and budget-friendly styling for a small-space table, step by step.",
  "date": "2026-11-21",
  "readTime": 10,
  "motif": "star",
  "from": "#E3A72F",
  "to": "#B95E14",
  "intro": "Friendsgiving table decor is the part of the party your guests see first — before the food, before the playlist, before anyone sits down. And it doesn't take much to get it right. A runner, a few small pumpkins, some candles, and a table that says someone cared. We set our first friendsgiving table in a one-bedroom apartment with a folding table and $25, and our friends still talk about it. These friendsgiving table decor ideas are built the same way: simple pieces, honest prices, and a look that works whether you're feeding four friends or fourteen.",
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Every good friendsgiving table starts the same way: with a runner down the middle. It covers the bare wood or the old tablecloth, hides the join in a folding table, and gives every other piece something to sit on. Skip the runner and the table looks like a bunch of dishes that happened to land in the same place. Add one and it looks like you meant it."
        },
        {
          "t": "h3",
          "text": "Pick a terracotta or cream cheesecloth runner"
        },
        {
          "t": "p",
          "text": "A gauzy cheesecloth runner in terracotta, rust or cream is the one to buy if you only buy one thing. It costs $12–18 for a 120-inch length, which fits a table for eight to ten, and the frayed edges do the styling for you — no ironing, no fussing. Lay it down the middle and let the ends hang about 8 inches over each edge."
        },
        {
          "items": [
            "Terracotta cheesecloth runner, 120 inches — $12–18",
            "Cream linen runner for a lighter look — $15–20",
            "Burlap runner for a farmhouse feel — $10–14",
            "No runner? A length of kraft paper down the middle works, and guests can write on it"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Layer placemats or a second runner across"
        },
        {
          "t": "p",
          "text": "If the table feels bare at the edges, lay woven placemats at each seat — round jute or rattan ones run about $2–3 each. They frame each plate and stop the table looking like one long strip of fabric. A second short runner laid across under the centerpiece adds a layer for free if you cut a spare piece of fabric."
        }
      ],
      "heading": "Start With a Runner: Friendsgiving Table Decor That Sets the Whole Look"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The centerpiece is the part everyone photographs, so it gets the most attention, and it's the part people overthink. Keep it low. Anything taller than about 12 inches turns dinner into a game of peek-a-boo across the table, and nobody wants that."
        },
        {
          "t": "h3",
          "text": "The pumpkin, candle and greenery cluster"
        },
        {
          "t": "p",
          "text": "This is the centerpiece we come back to every year because it takes ten minutes and about $15. Place three small pumpkins — white or pale orange, about 4–6 inches across — spaced down the middle of the runner. Tuck sprigs of eucalyptus or olive branches between them, then add two or three pillar candles in glass holders. The pumpkins give you the season, the candles give you the glow, and the greenery fills the gaps."
        },
        {
          "items": [
            "3 mini pumpkins (white or pale orange) — $1.50 each at the grocery store",
            "1 bunch of eucalyptus, cut into sprigs — $4–6",
            "3 pillar candles in glass hurricanes — $8–12 for the set",
            "A handful of pinecones, free from the yard or $3 a bag"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Try a low garland instead of a single piece"
        },
        {
          "t": "p",
          "text": "If a cluster feels fussy, run one long garland down the middle instead. A faux eucalyptus garland costs $12–18 and you can reuse it for Christmas, or make a fresh one from real branches for about $5. Lay it in a loose S-curve, not a straight line — the curve makes the table feel longer and leaves little pockets for candles and mini pumpkins."
        }
      ],
      "heading": "The Centerpiece: Easy Friendsgiving Centerpiece Ideas"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Place settings are where a friendsgiving table goes from nice to someone really thought about this. You don't need matching china. In fact, mismatched plates look better at a friends' table — they say this is relaxed, sit down, help yourself. What matters is that every seat has the same three things: something under the plate, a napkin, and one small detail."
        },
        {
          "t": "h3",
          "text": "Chargers and napkins do the heavy lifting"
        },
        {
          "t": "p",
          "text": "A charger is just a big flat plate that sits under the dinner plate, and it's the cheapest way to make a table look finished. Gold or wood-tone chargers run $2–4 each at discount stores, and you can reuse them all year. Fold a cloth napkin into a simple rectangle on the plate, or roll it and tie it with twine. Linen napkins in cream, sage or rust cost about $10–12 for a set of four."
        },
        {
          "items": [
            "Chargers: gold, wood or woven — $2–4 each",
            "Cloth napkins in cream, sage or rust — $10–12 for four",
            "Twine or ribbon to tie the napkin — $2 a roll",
            "One sprig of rosemary or eucalyptus tucked into each napkin — free or pennies"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Handwritten place cards, the five-minute win"
        },
        {
          "t": "p",
          "text": "Cut a few dried leaves — real ones from the yard work best — and write each guest's name on one with a gold or white paint pen. Five minutes for the whole table, and it's the detail people actually take home and keep. No leaves? Fold a small card from kraft paper and stand it against the glass."
        }
      ],
      "heading": "Place Settings That Make Every Seat Feel Special"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "If the runner is the bones of the table, light is the mood. Friendsgiving happens after dark for most of us, and warm candlelight is what makes a $25 table look like a $200 one. A few flames at table height and the overhead lights turned down will do it."
        },
        {
          "t": "h3",
          "text": "Taper candles in brass holders"
        },
        {
          "t": "p",
          "text": "Tall taper candles in brass or gold holders are the single best buy for a holiday table. A set of six tapers and four holders costs about $15–18, and they add height without blocking anyone's view — the flames sit above the plates but below eye level. Stick to cream or deep burgundy tapers; bright white looks like a birthday cake."
        },
        {
          "items": [
            "6 taper candles, cream or burgundy — $5–7",
            "4 brass candlesticks — $8–12 for a set",
            "2–3 glass hurricane holders for the middle — $10–12",
            "A string of warm-white fairy lights woven through the garland — $5–8"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Keep it safe with real flames"
        },
        {
          "t": "p",
          "text": "Real candles look better than LED ones, but keep them at least 6 inches clear of the garland and the napkins on every side. If kids are at the table, swap the middle candles for battery-operated pillars with a flicker setting — they look surprisingly good once the room lights are down. Light everything 15 minutes before guests sit down, not an hour early, so the wax lasts the whole meal."
        }
      ],
      "heading": "Candles and Warm Light: The $20 Glow-Up"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The whole table can cost less than one takeout dinner. We set our first friendsgiving table for eight people for $24, and half of it came from the dollar store. The trick isn't buying less — it's buying the right three things and letting everything else be borrowed, free or already in the cupboard."
        },
        {
          "t": "h3",
          "text": "The $25 friendsgiving table, item by item"
        },
        {
          "t": "p",
          "text": "Start at the dollar store: a tablecloth or runner, a pack of taper candles, and a bag of pinecones will run you about $8–10. The grocery store covers the pumpkins and the eucalyptus for another $8. The last few dollars go to a roll of twine and a pack of kraft paper for the place cards. That's the whole list — everything else comes from home."
        },
        {
          "items": [
            "Dollar store: runner or tablecloth, taper candles, pinecones — $8–10",
            "Grocery store: 3 mini pumpkins, 1 bunch eucalyptus — $7–8",
            "Craft aisle or kitchen drawer: twine, kraft paper, gold pen — $4–5",
            "From home: plates, glasses, napkins, candle holders, serving dishes — $0"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Thrift the pieces that look expensive"
        },
        {
          "t": "p",
          "text": "Brass candlesticks, mismatched vintage plates and amber glassware all cost $1–3 at a thrift store, and they're the pieces that make a table look collected instead of bought in a set. We found four brass candlesticks for $6 total last year and they've been on every holiday table since. Wash them, polish them with vinegar and salt, and nobody will guess where they came from."
        }
      ],
      "heading": "Budget Friendsgiving Table Decor: The $25 Table"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Most friendsgiving tables aren't in a dining room — they're a kitchen table with a leaf in it, or a folding table pushed against the wall. A small table actually photographs better, because everything is close together and the candles are right there. The rules just change a little: go lower, go narrower, and let the food do some of the decorating."
        },
        {
          "t": "h3",
          "text": "Keep the centerpiece low and narrow"
        },
        {
          "t": "p",
          "text": "On a table for four to six, the centerpiece gets a strip about 8 inches wide down the middle — no more. One small pumpkin, two candles and a few sprigs of greenery fill it. Anything wider leaves no room for the serving dishes. Put the big dishes on a sideboard or the kitchen counter and let people serve themselves."
        },
        {
          "items": [
            "One mini pumpkin + two candles + greenery — the whole centerpiece for 4–6 seats",
            "Serve the food from a sideboard or counter, not the table",
            "Use a bench on one side — it seats three where chairs seat two",
            "Fold the napkins flat under the plates instead of standing them up"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Let the food be part of the decor"
        },
        {
          "t": "p",
          "text": "When the table is small, the dishes are the decor. A wooden board of cheese and crackers, a bowl of cranberries, a loaf of bread on a cutting board — these look better than any ornament, and they disappear by dessert. Set one board out before guests arrive so the table looks full from the first photo, then swap in the hot dishes as they come out."
        }
      ],
      "heading": "Small Space Friendsgiving Table Ideas That Actually Work"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The table should be done before the cooking starts, not after. Every year someone ends up setting the table while the turkey rests, and it always looks rushed. Do it the night before and the day of the party is just cooking, music and the doorbell."
        },
        {
          "t": "h3",
          "text": "The night before: everything that doesn't wilt"
        },
        {
          "t": "p",
          "text": "Lay the runner, set the chargers and plates, fold the napkins, write the place cards and put the candles in their holders — the night before. Cover the whole table with a clean sheet if you have pets or kids. The only things that wait until the day are the greenery and the pumpkins, which stay fresh in the fridge overnight."
        },
        {
          "items": [
            "Night before: runner, plates, chargers, napkins, place cards, candles in holders",
            "Night before: set the sideboard with serving dishes, the drink station and the glasses",
            "Morning of: lay the greenery, place the pumpkins, fill the water glasses",
            "30 minutes before guests arrive: light the candles, turn the overhead lights down, put the music on"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "The last 30 minutes, in order"
        },
        {
          "t": "p",
          "text": "Half an hour before the doorbell rings, do three things and then stop. Light the candles. Turn the overhead lights down or off. Put one board of snacks on the table so early guests have something to pick at. Then pour yourself a drink and open the door — the table is done, go enjoy your friends."
        }
      ],
      "heading": "The Day-Of Timeline: Setting the Table Without the Stress"
    }
  ],
  "faqs": [
    {
      "a": "Start with a cheesecloth runner, three mini pumpkins and a few candles. That's the whole look — the runner covers the table, the pumpkins give you the season, and the candles do the rest. Add cloth napkins and a sprig of greenery at each seat and the table looks finished. You can set it up in about 20 minutes for under $25.",
      "q": "What is the easiest friendsgiving table decor for beginners?"
    },
    {
      "a": "Spend on three things: a runner ($12–18), candles ($8–12) and pumpkins with greenery ($7–8). Borrow the plates and glasses, thrift the candle holders, and make the place cards from kraft paper. A full table for eight costs $25–30 this way, and most of it — the runner, the holders, the twine — gets used again at Christmas.",
      "q": "How do you do friendsgiving table decor on a budget?"
    },
    {
      "a": "Keep it low and simple: three small pumpkins, a few sprigs of eucalyptus, and two or three candles in glass holders, all down the middle of the runner. Nothing over 12 inches tall, so guests can see each other. A long garland works the same way if you prefer one piece instead of a cluster.",
      "q": "What should a friendsgiving table centerpiece include?"
    },
    {
      "a": "Keep the centerpiece to an 8-inch strip down the middle, serve the food from a sideboard or counter, and seat one side on a bench. Fold the napkins flat under the plates and let the food — a cheese board, a bowl of cranberries, a loaf of bread — fill the gaps. Small tables photograph beautifully because everything sits close together.",
      "q": "How do you set a friendsgiving table for a small space?"
    }
  ],
  "hero": {
    "src": "/img/a7-hero",
    "alt": "Friendsgiving table at dusk with a terracotta runner, mini white pumpkins, eucalyptus garland and lit taper candles in brass holders"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "src": "/img/a7-a",
        "alt": "Overhead place setting with a woven rattan charger, white plate, check napkin and a mini white pumpkin, pinecones and greenery beside it",
        "caption": "A woven charger, a check napkin and one mini pumpkin — the whole place setting."
      }
    },
    {
      "after": 4,
      "img": {
        "src": "/img/a7-b",
        "alt": "Warm harvest centerpiece close-up of wheat and cattails, taper candles, a striped gourd, grapes and apples in golden light",
        "caption": "Thrifted and grocery-store pieces can look this good: wheat, candles and one striped gourd."
      }
    }
  ]
}),
  P({
  "slug": "winter-home-refresh-ideas",
  "title": "Winter Home Refresh Ideas 2026: Cozy Living Room Swaps, Warm Lighting & Simple Seasonal Updates",
  "bannerTitle": "Cozy Winter Home Refresh",
  "category": "seasonal-living",
  "subcategory": "Seasonal Home Refresh",
  "excerpt": "Winter home refresh ideas that work: warm lighting, layered textiles and small seasonal swaps that make your home feel cozy all winter — most under $25.",
  "date": "2026-11-20",
  "readTime": 10,
  "motif": "leaf",
  "from": "#7FA653",
  "to": "#46682F",
  "intro": "A winter home refresh doesn't mean redecorating the whole house. It means swapping a few things — the light bulbs, the throw on the sofa, the pillow covers — and suddenly the room feels like it belongs to the season. We did ours on a Saturday in November, with about $60 and one trip to the shops, and the house has felt different ever since: warmer at 5 pm, softer in the mornings, and much easier to come home to. These winter home refresh ideas are built the same way — small, cheap, and done in a weekend. No paint, no new furniture, no big project. Just the swaps that make the biggest difference, room by room.",
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "If you change one thing this winter, change the light. Cold white bulbs make a room feel like an office after dark, and winter has enough dark hours already. Warm light does the opposite — it makes the same room feel smaller, softer and easier to sit in."
        },
        {
          "t": "h3",
          "text": "Swap every bulb to warm white (2700K)"
        },
        {
          "t": "p",
          "text": "Go through the house with a notepad and count the bulbs in the rooms you actually live in — living room, bedroom, kitchen. Most homes need 8 to 12. Warm white 2700K LED bulbs cost about $2–3 each, so a whole-house swap runs $20–30 and takes twenty minutes."
        },
        {
          "items": [
            "Living room: 3–4 warm bulbs — one in each lamp, one overhead",
            "Bedroom: 2 bedside lamps at 2700K, nothing brighter",
            "Kitchen: warm bulbs over the counter, keep one bright one over the sink",
            "Hallway: a single warm bulb so the whole house glows the same"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Add three sources of light per room"
        },
        {
          "t": "p",
          "text": "One ceiling light flattens a room. Three smaller lights — a floor lamp, a table lamp, a candle or two — give it depth. Put lamps on dimmers or smart plugs if you can; a $10 plug lets you set the lamps to come on at 4:30 pm, right as it gets dark."
        },
        {
          "t": "p",
          "text": "Candles count as a light source too. We keep a tray of three pillar candles on the coffee table from November to February. They cost about $12 for the set and they do more for the mood than any lamp we own."
        }
      ],
      "heading": "Warm Lighting First: Winter Home Refresh Ideas That Cost the Least"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Texture is what makes a winter room feel warm before the heating even kicks in. You don't need new furniture — you need softer layers on the furniture you already have."
        },
        {
          "t": "h3",
          "text": "The throw-and-pillow swap"
        },
        {
          "t": "p",
          "text": "Pull the light cotton throws and linen pillow covers off the sofa and pack them away until April. Replace them with chunky knit, velvet or faux fur. One chunky knit throw ($25–35) draped over the sofa arm and two velvet pillow covers ($8–12 each) change the whole look of the room."
        },
        {
          "items": [
            "Chunky knit throw in cream or rust — $25–35",
            "Two velvet pillow covers in deep green or burgundy — $8–12 each",
            "A faux fur cushion for the reading chair — $15–20",
            "A wool blanket folded at the foot of the bed — $30–40"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Layer rugs the easy way"
        },
        {
          "t": "p",
          "text": "Bare floors feel cold in January, even with the heating on. A thick wool or shag rug under the coffee table fixes it, and layering a smaller patterned rug over a big jute one adds the texture without buying a huge new rug. Measure first — a rug that's too small looks worse than no rug at all. For most living rooms, 5×7 ft is the minimum under a sofa and chairs."
        }
      ],
      "heading": "Layer Textiles: Throws, Pillows and Rugs"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The living room is where winter happens — the evenings, the movies, the friends who come over. Give it one focused weekend and it'll carry the whole season."
        },
        {
          "t": "h3",
          "text": "The 15-minute furniture shuffle"
        },
        {
          "t": "p",
          "text": "Pull the sofa a few inches away from the wall and angle one chair toward the fireplace or the window. It sounds tiny, but it breaks up the flat 'everything against the wall' look and makes a corner for reading. We moved our armchair six inches and suddenly had a reading nook."
        },
        {
          "items": [
            "Saturday morning: swap the bulbs and put the winter throws out (30 minutes)",
            "Saturday afternoon: move one chair, add the layered rug, style the coffee table (1 hour)",
            "Sunday morning: bring in greenery — a vase of eucalyptus on the sideboard (15 minutes)",
            "Sunday evening: light the candles, put the lamps on, and sit in it for a bit"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Style the coffee table for winter"
        },
        {
          "t": "p",
          "text": "A tray, a stack of two books, a small vase and one candle. That's the whole formula. Keep it low so it doesn't block the view across the room, and leave one clear corner for mugs — a coffee table that can't hold a mug isn't doing its job."
        }
      ],
      "heading": "Refresh Your Living Room in One Weekend"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Greenery keeps a room feeling alive after the Christmas tree comes down. The trick is picking stems that read 'winter', not 'holiday' — no red berries, no tinsel, nothing that has to come down on December 26th."
        },
        {
          "t": "h3",
          "text": "The stems that last all winter"
        },
        {
          "t": "p",
          "text": "Eucalyptus is the easiest win: a $5 bunch from the grocery store lasts three weeks in water and smells faintly of a spa. Olive branches last even longer — up to a month — and their silvery green works with any colour scheme. Pine and cedar clippings are free if you know anyone with a tree, and a few sprigs in a tall vase fill an empty corner."
        },
        {
          "items": [
            "Eucalyptus bunch — about $5, lasts 3 weeks",
            "Olive branches — about $8, lasts up to a month",
            "Pine or cedar clippings — free, or $4 a bunch",
            "Dried pampas or wheat stems — $10, lasts all season"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Where to put it"
        },
        {
          "t": "p",
          "text": "One tall vase on the sideboard, one small jar on the kitchen windowsill, one sprig tucked into the bathroom mirror frame. Three spots is enough — more than that and the house starts to look like a garden centre. Change the water every four days and trim the stems by half an inch each time."
        }
      ],
      "heading": "Bring in Winter Greenery (Without the Christmas Look)"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Winter mornings are hard enough without a cold bedroom and a hallway full of wet coats. These two rooms take the least time and make the biggest difference to how the house feels at 7 am."
        },
        {
          "t": "h3",
          "text": "The bedroom: layer the bed like you layer yourself"
        },
        {
          "t": "p",
          "text": "Start with flannel or brushed cotton sheets ($30–40 a set), add a wool blanket folded across the foot of the bed, and finish with a heavier duvet than you used in October. A draft stopper along the bottom of the bedroom door ($8) keeps the warm air in overnight. If your feet hit cold floor in the morning, a small rug beside the bed ($20) is worth every penny."
        },
        {
          "t": "h3",
          "text": "The entryway: make winter's mess easy to live with"
        },
        {
          "t": "p",
          "text": "A boot tray by the door ($12), a row of hooks at kid height and adult height, and a basket for hats and gloves. That's the whole system. Add a small mirror and a warm bulb and the hallway stops feeling like a cold tunnel. If you have room, a slim bench ($40–60) gives everyone somewhere to sit while they pull boots on."
        },
        {
          "items": [
            "Boot tray — $12",
            "Coat hooks, two heights — $15",
            "Basket for hats and gloves — $10",
            "Draft stopper for the front door — $8"
          ],
          "t": "ul"
        }
      ],
      "heading": "Warm Up the Bedroom and the Entryway"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The best winter refresh ideas are the ones that cost under $10 and take ten minutes. They don't show up in photos, but they're the things you actually notice every day."
        },
        {
          "t": "h3",
          "text": "Set up a hot drink corner"
        },
        {
          "t": "p",
          "text": "One tray on the kitchen counter: cocoa, cinnamon, the good mugs, a jar of marshmallows. It takes ten minutes to set up and it turns an ordinary evening into a small ritual. Searches for coffee bar ideas are up 117% since May — people want this corner, and it costs nothing if you already own the mugs."
        },
        {
          "t": "h3",
          "text": "Scent the house the cheap way"
        },
        {
          "t": "p",
          "text": "A simmer pot — orange slices, cinnamon sticks, a few cloves in a pot of water on low — scents the whole house for an afternoon and costs about $2. Or light one candle in the room you're sitting in, not every candle in the house. One scent at a time, or the house smells like a shop."
        },
        {
          "items": [
            "Simmer pot ingredients — about $2 a batch",
            "One good candle per room — $8–12, burns 40 hours",
            "Cinnamon sticks tied to a plain pillar candle — $3",
            "A bowl of pinecones by the door — free, and they smell like the season"
          ],
          "t": "ul"
        }
      ],
      "heading": "Small Seasonal Touches That Cost Almost Nothing"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Here's the whole refresh as a checklist, in the order we'd do it. Tick them off over one weekend and you're done until spring."
        },
        {
          "t": "h3",
          "text": "The one-weekend checklist"
        },
        {
          "items": [
            "Swap the bulbs to warm white 2700K in the living room and bedroom",
            "Put the winter throws and pillow covers on the sofa",
            "Layer a rug under the coffee table",
            "Move one chair to make a reading corner",
            "Bring in eucalyptus or olive branches in three spots",
            "Set up the hot drink tray in the kitchen",
            "Add a boot tray and hooks by the front door",
            "Light the candles and enjoy it"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "What the whole refresh costs"
        },
        {
          "items": [
            "Bulbs for the whole house — $20–30",
            "One chunky throw + two pillow covers — $40–55",
            "Layered rug — $40–80 (or skip it and use what you have)",
            "Greenery for the season — $10–15",
            "Boot tray, hooks and basket — $35",
            "Candles and simmer pot supplies — $15",
            "Total: about $160–230, or under $100 if you skip the rug"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Start with light and textiles — those two swaps do 80% of the work. Everything else is a bonus. And when spring comes, pack the winter layers away in one box, swap the bulbs back if you like, and the house is ready for the next season in an afternoon."
        }
      ],
      "heading": "Your Winter Home Refresh Ideas Checklist and Budget"
    }
  ],
  "faqs": [
    {
      "a": "Most homes can do a full winter home refresh for $100–230. The two swaps that matter most — warm 2700K bulbs ($20–30 for the house) and winter textiles like a chunky throw and velvet pillow covers ($40–55) — cost under $85 together. A layered rug is the only big-ticket item, and you can skip it if you already have one that works.",
      "q": "How much do winter home refresh ideas cost in total?"
    },
    {
      "a": "Start with light and textiles — they don't take any floor space. Swap the bulbs to warm white, drape a chunky throw over the sofa arm, and add two velvet pillow covers. Then bring in one vase of eucalyptus and set up a small hot drink tray on the counter. Five swaps, no furniture moved, and the whole apartment feels like winter in the good way.",
      "q": "What are the easiest winter home refresh ideas for a small apartment?"
    },
    {
      "a": "Late November is the sweet spot — right after the clocks change and the evenings get dark, and before the Christmas decorating takes over. A weekend at the end of November gets the house ready for December, and the layers stay in place until March. If you're reading this in January, don't wait — the same swaps work any time in winter.",
      "q": "When is the best time to start winter home refresh ideas?"
    },
    {
      "a": "No — the two work together. The winter refresh is the base layer: warm light, soft textiles, greenery. Christmas decor sits on top of it for December, then comes down and the base layer carries January and February on its own. That's why we pick greenery like eucalyptus and olive branches instead of red berries — it looks right all winter, not just at Christmas.",
      "q": "Do I need to take down my Christmas decor to refresh my home for winter?"
    }
  ],
  "hero": {
    "src": "/img/a6-hero",
    "alt": "Cozy winter living room at dusk with a chunky knit throw, green velvet pillows, a lit fireplace and snow falling outside the windows, titled Cozy Winter Home Refresh"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "src": "/img/a6-a",
        "alt": "Woman wrapped in a chunky cream knit blanket on a sofa with a lit candle on the coffee table",
        "caption": "The chunky knit throw: the single fastest way to make the sofa feel like winter."
      }
    },
    {
      "after": 4,
      "img": {
        "src": "/img/a6-b",
        "alt": "Feet in warm wool socks stretched toward a roaring fireplace with mugs of hot drinks beside them",
        "caption": "Cold mornings, handled: warm socks, a hot drink, and the fire lit before breakfast."
      }
    }
  ]
}),
  P({
  "bannerTitle": "Mini Pumpkin LED Candle Holders",
  "category": "diy-crafts",
  "date": "2026-11-20",
  "excerpt": "Mini pumpkin LED candle holders are the easiest fall craft we know: paint two mini pumpkins, cut one small opening, drop in a battery tea light. Here's the full step-by-step, with the colors and styling that make them look bought, not homemade.",
  "faqs": [
    {
      "a": "You can, and the painting and styling steps are the same — but a real pumpkin only lasts a week or two before it softens, and cutting it is messier. Artificial foam pumpkins cut cleanly, take paint well, and come out of the box again next fall, which is why we use them for this project.",
      "q": "Can I use real mini pumpkins instead?"
    },
    {
      "a": "Ordinary acrylic craft paint works well in two thin coats. Chalk paint is even more forgiving — it grips shiny plastic pumpkins better and dries matte. Avoid spray paint on foam unless the can says foam-safe, as some sprays melt the surface.",
      "q": "What paint sticks best to foam pumpkins?"
    },
    {
      "a": "Yes — there's no flame and they stay cool, which is the whole reason we use them in a holder surrounded by dried leaves. One sensible note: tea lights with button batteries should be kept where small children can't unscrew them, just like any battery toy.",
      "q": "Are LED tea lights safe around kids and pets?"
    },
    {
      "a": "About 40 minutes of hands-on time: 10 minutes planning and painting the first coat, a second coat after 15–20 minutes of drying, then 10 minutes to cut, tidy and style. Start after lunch and they're glowing on the table by dinner.",
      "q": "How long does the whole project take?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Two finished mini pumpkin LED candle holders, cream and sage, glowing on a linen runner with dried autumn leaves",
    "src": "/img/a5-hero"
  },
  "images": [
    {
      "after": 3,
      "img": {
        "alt": "Cream and sage mini pumpkin candle holders with LED tea lights, styled with dried leaves on linen",
        "caption": "Cream and sage — the palette from the video, and the one readers ask about most.",
        "src": "/img/a5-a"
      }
    },
    {
      "after": 5,
      "img": {
        "alt": "Mini pumpkin LED candle holders glowing on a light wood table with autumn leaves",
        "caption": "Switched on at dusk, the glow does all the work.",
        "src": "/img/a5-b"
      }
    }
  ],
  "intro": "Mini pumpkin LED candle holders took us one autumn afternoon to figure out and about forty minutes to make, and they've been on our table every fall since. The idea is simple: a mini artificial pumpkin, a coat of soft paint, one small opening, and a battery tea light doing a very convincing candle impression. No flame, no wax, no worrying about the tablecloth. The short video above shows the whole make in thirty seconds — and below you'll find every step written out, the exact supplies, and the color pairings that make these look like something from a home store shelf.",
  "motif": "snow",
  "readTime": 7,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Fall decorating has a habit of getting expensive and fussy. These holders go the other way: two small pumpkins, a few paints you may already own, and a pair of LED tea lights. The finished pair works as a centerpiece, a mantel accent, or a small warm welcome by the front door — and because the pumpkins are artificial, you box them up in November and bring them out again next year."
        },
        {
          "items": [
            "Cheap to make: the whole pair usually costs less than one store-bought candle holder",
            "Safe anywhere: battery lights mean no flame near leaves, linen or little hands",
            "Quick: about 40 minutes of making, plus paint drying time",
            "Reusable: artificial pumpkins store flat and last for years",
            "Easy to match: paint them in whatever colors your room already uses"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "They're also a kind first project if you don't think of yourself as crafty. The painting is forgiving, the cutting is one small circle, and the styling at the end is just arranging things you like the look of."
        }
      ],
      "heading": "Why These Little Holders Earn Their Place"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Everything on this list is easy to find at a craft store or in a supermarket craft aisle. We made the pair in the video with two pumpkins about 4 inches (10 cm) across — big enough for a standard tea light, small enough to sit anywhere."
        },
        {
          "items": [
            "2 mini artificial pumpkins (foam or plastic, with a fairly flat top)",
            "A craft knife or small carving tool",
            "Acrylic paints — we used cream, muted sage and a touch of terracotta",
            "Paintbrushes: one medium flat brush per color saves washing between coats",
            "2 LED tea lights (warm white looks most like a real flame)",
            "A handful of dried autumn leaves for styling",
            "Optional: a neutral linen napkin or runner, a pencil for marking, masking tape"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Choosing your pumpkins"
        },
        {
          "t": "p",
          "text": "Pick pumpkins that sit steady without wobbling — give them a little press on the shop shelf. Foam ones are easiest to cut and paint. If the surface is very shiny plastic, acrylic still works, but expect to need a third thin coat."
        }
      ],
      "heading": "What You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is steps one and two of the make, and the part that decides how the finished holders look. Take your time here and the rest is easy."
        },
        {
          "t": "h3",
          "text": "Plan the opening first"
        },
        {
          "t": "p",
          "text": "Before any paint goes on, sit each pumpkin in front of you and decide where the tea light will go. We cut the opening at the top, around the stem, so the light sits down inside and the glow spills upward. Rest the tea light on the pumpkin and draw lightly around it with a pencil — that circle is your cutting guide later, and knowing where it is stops you painting a thick ridge right where you'll cut."
        },
        {
          "t": "h3",
          "text": "Two thin coats, not one thick one"
        },
        {
          "t": "p",
          "text": "Paint one pumpkin cream and the other muted sage, following the natural grooves from top to bottom. Thin coats are the whole secret: the first coat will look streaky, and that's fine. Let it dry for 15 to 20 minutes, then add the second coat — the color evens out, the brush strokes soften, and the pumpkin keeps its shape instead of disappearing under a blob of paint. Leave the stems unpainted for a natural contrast, or paint them a muddy brown if yours are bright orange plastic."
        },
        {
          "t": "p",
          "text": "Let both pumpkins dry fully before cutting — at least 30 minutes. Paint that's dry to the touch but soft underneath tears at the cut edge, and tidy edges are what make these look bought rather than homemade."
        }
      ],
      "heading": "Painting the Pumpkins"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Steps three and four: the small bit of careful work, then the satisfying part. The cutting is a job for adult hands — if kids are helping, this is the moment they become chief painters and stylists instead."
        },
        {
          "t": "h3",
          "text": "Mark it, then cut slowly"
        },
        {
          "t": "p",
          "text": "Set the tea light on your pencil circle and check the size once more. Then, keeping the pumpkin steady on the table with one hand well away from the blade, cut around the circle with the craft knife in short, gentle strokes. Foam pumpkins cut easily — let the knife do the work rather than pressing hard. Cut just inside your line: you can always widen the hole, you can't shrink it."
        },
        {
          "t": "h3",
          "text": "Tidy the edges"
        },
        {
          "t": "p",
          "text": "Lift out the cut piece and pick away any loose bits of foam from inside the opening. If the edge looks rough, pare it down a sliver at a time and brush off the crumbs. A quick ring of paint around the cut edge hides any raw foam color and finishes it neatly."
        },
        {
          "t": "h3",
          "text": "Drop in the light"
        },
        {
          "t": "p",
          "text": "Switch the LED tea light on and lower it into the opening. It should sit with its flame tip just above the pumpkin's surface — deep enough to look nestled, high enough to glow. If it sinks too low, drop a small ball of tissue or a coin underneath it. That's the make finished: two holders, ready to style."
        }
      ],
      "heading": "Cutting the Opening and Adding the Light"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A pair of holders on their own looks sweet; styled with a few autumn bits, they look like a centerpiece. In the video we arranged them on a neutral linen napkin with dried leaves tucked around the bases — that two-minute step is what pulls the whole thing together."
        },
        {
          "items": [
            "Table centerpiece: both holders on a linen runner, dried leaves and pinecones scattered between them",
            "Mantel: one at each end of a simple garland, switched on at dusk",
            "Entryway: a pair on a small tray by the door with a bowl for keys",
            "Windowsill: a row of three in mixed colors, glowing against the early dark",
            "Friendsgiving table: one holder per two place settings, with name cards propped against them"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Keep dried leaves a small distance from the holders if you ever swap in real candles elsewhere in the arrangement — with LED lights there's no risk, but the habit keeps every autumn display safe."
        }
      ],
      "heading": "Styling Them Around the House"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The pumpkins start orange, but after paint they can lean any way your home leans. These three pairings are the ones we reach for again and again."
        },
        {
          "t": "h3",
          "text": "Cream and sage"
        },
        {
          "t": "p",
          "text": "The palette from the video: soft, calm, and happy next to light wood, linen and dried grasses. It's the easiest pairing to live with and the one that photographs best in daylight."
        },
        {
          "t": "h3",
          "text": "Terracotta and cream"
        },
        {
          "t": "p",
          "text": "Warmer and more autumn-forward. Terracotta picks up the colors of dried leaves and brick, and looks especially good on a darker wood table or with brass anywhere nearby."
        },
        {
          "t": "h3",
          "text": "White and gold"
        },
        {
          "t": "p",
          "text": "For a dressier table: matte white pumpkins with the stems painted gold. Add the holders to a Thanksgiving or Friendsgiving table and they read as elegant rather than crafty."
        },
        {
          "t": "p",
          "text": "Whatever you choose, paint both pumpkins in the same sitting with the same paints — pairs made from one palette always look intentional, even if the two colors are different."
        }
      ],
      "heading": "Color Palettes That Always Work"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The quiet advantage of artificial pumpkins: this is a make-once project. When the season ends, switch the tea lights off (or take the batteries out if yours are replaceable), dust the pumpkins with a dry cloth, and store them in a box with a little tissue between them so the paint doesn't rub."
        },
        {
          "items": [
            "Store out of direct sunlight — acrylic colors can fade over a long summer in a bright spot",
            "Touch up scuffs with a dab of the leftover paint before you style them again",
            "Keep the tea lights with the pumpkins so next year's setup takes two minutes",
            "If a cut edge crumbles a little in storage, trim it tidy and re-paint the rim"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "And if you fall for the process — most people do — the same paint-cut-glow method works on bigger pumpkins for a porch display. The steps don't change at all, just the size of the tea light."
        }
      ],
      "heading": "Keeping Them for Next Year"
    }
  ],
  "slug": "mini-pumpkin-led-candle-holders",
  "subcategory": "Table Decor DIY",
  "title": "Mini Pumpkin LED Candle Holders: Easy DIY Fall Decor With Paint & Tea Lights",
  "to": "#275E7E",
  "video": "mini-pumpkin-led-candle-holders"
}),
  P({
  "slug": "winter-bucket-list-ideas",
  "title": "Winter Bucket List Ideas 2026: 30 Cozy Things to Do This Winter, From Snow Days to Movie Nights",
  "bannerTitle": "Winter Bucket List Ideas 2026",
  "category": "seasonal-living",
  "subcategory": "Seasonal Bucket Lists",
  "excerpt": "Winter bucket list ideas for slow, cozy days: 30 simple things to do this winter — snow days, baking days, movie nights and small adventures at home.",
  "date": "2026-11-20",
  "readTime": 10,
  "motif": "leaf",
  "from": "#7FA653",
  "to": "#46682F",
  "intro": "Winter gets a bad reputation. The days are short, it's dark by five, and most of us spend the whole season just waiting for it to end. A winter bucket list changes that. Instead of counting down to spring, you get small plans to look forward to — a baking day here, a snow walk there, one proper movie night a week. These winter bucket list ideas are simple on purpose. Nothing here needs a big budget or a trip away. Most of it happens at home, with things you already own, and that's kind of the point.",
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "The first part of the season is for slowing down. Start with the indoor ideas — they're the easiest wins, and they make the house feel like somewhere you actually want to be in January."
        },
        {
          "t": "h3",
          "text": "Set up a hot drink station once, enjoy it all season"
        },
        {
          "t": "p",
          "text": "One tray, one corner of the counter: cocoa, marshmallows, cinnamon, the good mugs. It takes ten minutes to set up and it turns an ordinary Tuesday evening into a small event. We put ours out in the first cold week and it stays until the end of February."
        },
        {
          "items": [
            "Read one whole book in a single slow day, phone in another room",
            "Hold a hot chocolate night with three toppings and a family taste test",
            "Start a 1,000-piece puzzle and leave it out on the table all month",
            "Light candles at dinner every night for one full week",
            "Write real letters to two people and post them the old-fashioned way"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "None of these need planning or money. They're the backbone of the list — the ones you'll actually do on dark evenings when going out feels like too much."
        }
      ],
      "heading": "Start Slow: Cozy Indoor Winter Bucket List Ideas"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Snow days lose their magic fast if you spend them scrolling. Decide your snow plans now, while they're still just plans, so the first proper snowfall doesn't catch you unprepared."
        },
        {
          "t": "h3",
          "text": "The classic snow day list"
        },
        {
          "items": [
            "Build a snowman — a small, wonky one counts",
            "Make snow angels and take the photo, however it turns out",
            "Go sledding, or slide down the hill on a tray like you did as a kid",
            "Take a slow photo walk while the snow is still fresh and untrodden",
            "Build a blanket fort when you come back in, and have lunch inside it"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "No snow where you live?"
        },
        {
          "t": "p",
          "text": "Swap the snow items for cold-weather ones: a sunrise walk on the coldest morning, hot drinks in the park with gloves on, and an evening drive to see the neighborhood lights. The list is about marking the season, not the weather."
        }
      ],
      "heading": "Snow Day Winter Bucket List Ideas for the First Big Snowfall"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Cold weather is baking weather. The oven warms the kitchen, the house smells amazing, and nobody has ever been sad about a tray of gingerbread. Put one baking day a week on the list and winter starts to feel generous."
        },
        {
          "t": "h3",
          "text": "One baking day a week, five weeks covered"
        },
        {
          "items": [
            "Gingerbread cookies — cut them thick, decorate them badly, eat them anyway",
            "Cinnamon rolls on a Saturday morning, eaten warm, in pajamas",
            "A big pot of soup with good bread for dipping, enough for two days",
            "Homemade pizza night where everyone tops their own",
            "A cookie swap box: bake double, deliver half to a neighbor or friend"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Bake more than you need on purpose. Frozen cookie dough and a spare pot of soup in the freezer are what make the busy weeks feel looked-after too."
        }
      ],
      "heading": "Winter Baking Days and Comfort Food Plans"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A list that's all indoors goes stale by January. You don't need big hikes — short, planned outings with a warm ending work best. The rule we use: outside for about an hour, then home for something hot."
        },
        {
          "t": "h3",
          "text": "Short trips with a warm finish"
        },
        {
          "items": [
            "Visit a winter market or craft fair and buy one small thing",
            "Go ice skating, even if you hold the rail the whole time",
            "Take a night walk to see the best-decorated street in your area",
            "Feed the birds, then do one slow loop of the park with a flask of tea",
            "Have a winter picnic: soup in a flask, sandwiches, ten minutes, done"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Daylight is the scarce thing in winter, not time. A late-morning outing catches the best of it and still leaves the whole cozy evening ahead of you."
        }
      ],
      "heading": "Get Outside Anyway: Winter Walks, Skating and Small Adventures"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Dark evenings are the whole point of winter. The trick is to plan them a little, so they don't all blur into the same half-watched scroll on the sofa."
        },
        {
          "t": "h3",
          "text": "A movie marathon, done properly"
        },
        {
          "items": [
            "Pick a theme for the month — the classics, one favorite actor, or films set in winter",
            "Make proper snacks: popcorn with real butter, plus one sweet thing",
            "Blankets on the sofa, phones charging in the kitchen",
            "Two films maximum, lights low, no pausing to check messages"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "And on the other nights"
        },
        {
          "items": [
            "A board game or card night with a running score kept across the season",
            "A candlelit dinner at the table, no screens, music on low",
            "Hot drinks on the doorstep to look at the winter stars for ten minutes",
            "One early night a week — bath, book, bed by nine"
          ],
          "t": "ul"
        }
      ],
      "heading": "Evenings In: Movie Nights, Games and Slow Rituals"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Half the list should be free, or it stops being fun. These cost nothing but a little intention, and a few of them are the ones people remember best."
        },
        {
          "items": [
            "Borrow a stack of winter books and films from the library in one trip",
            "Photograph the same tree or street once a week as the season changes",
            "Learn one new card game properly and teach it to someone",
            "Write your goals for spring on paper, by hand, in one sitting",
            "Call an old friend you've been meaning to call since autumn",
            "Watch the sunrise once — winter's late sunrises make this one easy"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "If money is tight this year, this section is the list. Everything else is a bonus."
        }
      ],
      "heading": "Free Winter Bucket List Ideas That Cost Almost Nothing"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A bucket list only works if it's finishable. Thirty ideas sounds like a lot until you spread them over twelve weeks of winter — that's two or three a week, and most of them are small."
        },
        {
          "t": "h3",
          "text": "Print it, pin it, tick things off"
        },
        {
          "items": [
            "Write or print the list and put it on the fridge, where you'll see it every day",
            "Aim for one planned item a week, plus whatever the weather hands you",
            "Swap any idea that stops sounding fun — the list serves you, not the other way round",
            "Take one photo for every item you finish; by spring you'll have the whole season in pictures"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "By the time the last box is ticked, winter won't feel like something you waited out. It'll feel like a season you actually used — and spring can take its time."
        }
      ],
      "heading": "Make the List Work: Small Rules That Help You Actually Finish It"
    }
  ],
  "faqs": [
    {
      "a": "A mix of indoor and outdoor ideas: a few baking days, a few snow day plans, evening rituals like movie nights, and a handful of free things like a library trip or a sunrise walk. Keep most of it doable at home so the weather can't cancel your plans.",
      "q": "What should I put on a winter bucket list?"
    },
    {
      "a": "Around 25 to 30 works well for a full season — roughly two or three a week. Fewer is fine too. A short list you actually finish feels much better than a long one abandoned in January.",
      "q": "How many ideas should a winter bucket list have?"
    },
    {
      "a": "Set up a hot drink station, run a weekly baking day, hold a proper movie marathon with a theme, keep a season-long board game score, and take one early night a week with a bath and a book. All of them are in the list above, with the details filled in.",
      "q": "What are some winter bucket list ideas for adults at home?"
    },
    {
      "a": "Plenty — most of this list needs no snow at all. Swap the snow items for frosty morning walks, an evening drive to spot lights, winter market visits, and indoor plans like baking days and a puzzle weekend.",
      "q": "What can I put on a winter bucket list if it doesn't snow?"
    }
  ],
  "hero": {
    "src": "/img/a4-hero",
    "alt": "Snow-covered log cabin at dusk with warm light glowing from the windows, titled Winter Bucket List Ideas 2026"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "src": "/img/a4-a",
        "alt": "Hands holding a tray of freshly baked gingerbread cookies beside a warm oven in a cozy kitchen",
        "caption": "Baking day: a tray of gingerbread, still warm from the oven."
      }
    },
    {
      "after": 4,
      "img": {
        "src": "/img/a4-b",
        "alt": "Cozy sofa with a chunky knit blanket, a bowl of popcorn and lit candles beside a snowy window at night",
        "caption": "Evenings in: popcorn, candles, and snow falling outside."
      }
    }
  ]
}),
  P({
  "slug": "friendsgiving-party-ideas",
  "title": "Friendsgiving Party Ideas 2026: Cozy Table Decor, Easy Food, Fun Games & Aesthetic Touches",
  "bannerTitle": "Friendsgiving Party Ideas 2026",
  "category": "holidays",
  "subcategory": "Thanksgiving & Friendsgiving",
  "excerpt": "Friendsgiving party ideas for a cozy night in 2026: easy table decor, a potluck menu that cooks itself, fun games and cozy small-apartment hosting tips.",
  "date": "2026-11-20",
  "readTime": 10,
  "motif": "star",
  "from": "#E3A72F",
  "to": "#B95E14",
  "intro": "Friendsgiving is the one dinner party where nobody expects perfection. It's Thanksgiving with the people you chose, on a weekend that suits everyone, with a table full of dishes nobody had to cook alone. Most groups hold theirs the weekend before Thanksgiving, which this year means Saturday, November 21 or Sunday, November 22. This guide is built around one rule that saves every host: you cook one main dish, and your friends bring the rest. Inside you'll find friendsgiving party ideas for the table, the menu, the games and the little touches that make the night feel special — all of it doable in a small apartment, on a normal budget.",
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "The fastest way to ruin a Friendsgiving is to try to cook everything yourself. You'll spend the whole evening in the kitchen, the turkey will be late, and you'll sit down exhausted just as everyone else is having fun. The fix is simple: you cook one main dish, your friends bring the rest. Nobody minds — people like bringing a dish they're proud of."
        },
        {
          "t": "h3",
          "text": "Pick your date first — November 21 or 22 works best"
        },
        {
          "t": "p",
          "text": "Thanksgiving falls on Thursday, November 26 this year, and most of your friends will travel home that week. The weekend before is the sweet spot: Saturday, November 21 or Sunday, November 22. Send the invite this week. A group text works fine, but give people a date, a start time, and one line about what to bring — or they'll all bring the same bag of chips."
        },
        {
          "items": [
            "Saturday, November 21, from 5 pm — best for a long, slow dinner with games after",
            "Sunday, November 22, from 3 pm — best if your friends work Monday and want an earlier night",
            "Skip Thanksgiving Day itself — your friends will be with family, and so will you"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "The one-main-dish rule"
        },
        {
          "t": "p",
          "text": "You, the host, cook one main dish. A bone-in turkey breast, 6 to 7 pounds for 10 to 12 people, roasts at 325°F for about 2 to 2½ hours until it hits 165°F inside. It carves in five minutes. If turkey feels like too much, a big baked ham or a whole roasted chicken works just as well. One main, done well, and you're free to enjoy your own party."
        }
      ],
      "heading": "Friendsgiving party ideas that start with one simple rule"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A Friendsgiving table doesn't need a matching set or a single fancy thing. It needs warmth: low light, something orange, and ten minutes of thought. We set our whole table for under $30 last year. The trick is layering cheap things — cloth, leaves, candles — instead of buying one expensive centrepiece."
        },
        {
          "t": "h3",
          "text": "The $30 friendsgiving table decor shopping list"
        },
        {
          "items": [
            "A rust or burgundy table runner, about $8 — or a $4 length of burlap cut to size",
            "Six pillar candles in glass holders, $1 each at the dollar store, in two heights",
            "Three mini pumpkins, about $1 each, plus a handful of pinecones from any park",
            "A bunch of eucalyptus or autumn leaves from the grocery store, $3, tucked along the runner",
            "Cloth napkins in cream or rust, $6 for a set of six — they look ten times better than paper ones"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Set the table in 20 minutes"
        },
        {
          "items": [
            "Lay the runner down the middle and scatter the leaves along it — don't line them up, let them fall where they fall",
            "Put the candles in a loose line down the centre, two tall and four short, and light them just before guests arrive",
            "Set one mini pumpkin at every other place setting, like little bookends",
            "Fold each napkin in a loose roll, tie it with kitchen twine, and tuck a single leaf under the knot"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "One thing we learned the hard way: keep the centrepiece low. Anything taller than a wine bottle blocks faces across the table, and half the fun of Friendsgiving is seeing your friends. "
        }
      ],
      "heading": "Cozy friendsgiving table decor that costs less than $30"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A friendsgiving menu works when every dish has an owner and a job. The host handles the main and the gravy, and everyone else claims one thing from a shared list — so you never end up with four bags of rolls and no dessert. Send the list out with your invite. Mac and cheese is the number one must-have side, and everyone has an opinion about whose is best."
        },
        {
          "t": "h3",
          "text": "The friendsgiving menu that works for 8 to 10 people"
        },
        {
          "items": [
            "Host: bone-in turkey breast, 6 to 7 pounds, plus gravy — the only thing you cook",
            "Mac and cheese, one 9×13-inch tray with a crispy breadcrumb top",
            "Mashed potatoes, 5 pounds with butter and cream, kept warm in a slow cooker",
            "Roasted green beans with garlic, one sheet pan, 25 minutes at 400°F",
            "Sweet potato casserole, one 9×13-inch dish, brown sugar and pecan topping",
            "Cranberry sauce — 12 ounces of cranberries, 1 cup of sugar, 1 cup of water, simmered 10 minutes",
            "Two pies: one pumpkin, one apple — store-bought is completely fine, nobody checks",
            "One big salad, to cut through all the butter and cream"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "How to host a friendsgiving potluck without chaos"
        },
        {
          "items": [
            "Make a shared list with every slot named — main, two sides, salad, bread, dessert, drinks, ice — and let people claim one each",
            "Ask everyone to bring their dish ready to serve, with its own serving spoon",
            "Set the oven to 200°F as a warming drawer for dishes that arrive early",
            "Put a small card in front of every dish with the cook's name on it"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "For drinks, keep it simple: one big batch of spiced apple cider in a slow cooker, a case of sparkling water, and whatever wine your friends bring. The cider takes five minutes — apple cider, two cinnamon sticks, three cloves and an orange sliced into rounds."
        }
      ],
      "heading": "Easy friendsgiving food: a menu that practically cooks itself"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The best Friendsgiving games are the ones that start in under five minutes and don't make anyone perform. Nobody wants to act out a movie title in front of people they met an hour ago. The games that work are low-effort, a little silly, and easy to join halfway through — because someone always arrives late and someone always leaves early."
        },
        {
          "t": "h3",
          "text": "Three friendsgiving games that need zero setup"
        },
        {
          "items": [
            "The thankful guessing game: everyone writes one thing they're thankful for on a slip of paper, you read them out loud, and the table guesses who wrote each one",
            "Friendsgiving bingo: print a free bingo card with words like 'turkey', 'gravy boat' and 'seconds' — the first person to fill a row wins a leftover pie slice",
            "Two truths and a Thanksgiving lie: each person tells three short stories about past Thanksgivings, one of them made up, and the table votes on the fake one"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "After-dinner games for the ones who stay"
        },
        {
          "t": "p",
          "text": "Once the plates are cleared and the second round of drinks is poured, pull out a board game or a deck of cards. Charades with Thanksgiving words — 'stuffing', 'parade', 'food coma' — gets the whole room laughing, and a simple card game like Uno keeps the night going without anyone having to learn rules. Keep each game to about 30 minutes so the night keeps moving."
        }
      ],
      "heading": "Friendsgiving games that actually get played"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The difference between a nice dinner and a night your friends photograph is a handful of small touches — and none of them cost much. It's the playlist that starts before anyone arrives, the drink that has a name, and one corner of the room that looks good in a photo. Two or three touches, done well, are enough."
        },
        {
          "t": "h3",
          "text": "A friendsgiving drinks station in one corner"
        },
        {
          "items": [
            "One signature drink with a name: spiced apple cider spritz — cider, sparkling water, a cinnamon stick and an orange wheel in every glass",
            "A small chalkboard sign that says what's on offer, so nobody has to ask",
            "Mismatched glasses are fine — they look better than a matched set on a Friendsgiving table",
            "Keep the station away from the food table, so the drink queue and the food queue never collide"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "The photo corner your friends will actually use"
        },
        {
          "t": "p",
          "text": "Pick one wall or one corner, hang a string of warm fairy lights across it, and lean a small chalkboard against the wall with 'Friendsgiving 2026' written on it. Add two or three mini pumpkins on the floor and you're done. The best photos from our last Friendsgiving came from that corner, and the only thing we bought was the $3 string of lights."
        }
      ],
      "heading": "Friendsgiving party ideas: aesthetic touches that make the night feel special"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Most Friendsgivings happen in small flats, not big houses — and honestly, a small room full of people feels warmer than a big one with empty chairs. The trick is to let the room work the way it already does. Eight to ten people is the sweet spot for a one-bedroom flat. "
        },
        {
          "t": "h3",
          "text": "Small-space seating that really works"
        },
        {
          "items": [
            "A buffet line along the kitchen counter beats sit-down service — people serve themselves and sit wherever there's a chair",
            "Mix chairs, stools and floor cushions; nobody minds sitting on a cushion when the food is good",
            "Clear the coffee table and use it as a second, low table for four people with cushions",
            "Keep coats and bags in the bedroom with the door closed, so the living room stays clear"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Keep the kitchen clear"
        },
        {
          "t": "p",
          "text": "In a small flat the kitchen is the bottleneck, so guard it. Cook the turkey the day before if you can — slice it, keep it in its juices in the fridge, and reheat it covered at 300°F for 30 minutes before guests arrive. Wash as you go, and keep the sink empty when the doorbell rings."
        }
      ],
      "heading": "How to host a friendsgiving in a small apartment"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A Friendsgiving feels easy when the work is spread out over a week instead of crammed into one afternoon. This is the checklist we use every year — the order that stops the last-minute panic. "
        },
        {
          "t": "h3",
          "text": "The week before"
        },
        {
          "items": [
            "Send the invite with the date, time and the shared potluck list — seven days ahead is ideal",
            "Order or buy the turkey breast, and check you have a roasting pan big enough for it",
            "Buy the candles, runner, napkins and pumpkins from the decor list",
            "Confirm who's bringing what, and fill any empty slots yourself",
            "Make a playlist, about two hours long, and test it on the speaker you'll use"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "The day of"
        },
        {
          "items": [
            "Morning: set the table, hang the fairy lights, and put the cider in the slow cooker on low",
            "Two hours before: turkey in the oven, or reheating if you cooked it yesterday",
            "One hour before: light the candles, start the playlist, and put the drinks station out",
            "When guests arrive: take the coats, point at the drinks, and let people serve themselves",
            "After dinner: clear the plates together, start the games, and send everyone home with leftovers in takeaway boxes"
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "One main dish, a shared table, a few candles and a game or two — and you've got a Friendsgiving your friends will ask to repeat next year. Send the invite tonight, while the idea is fresh."
        }
      ],
      "heading": "Your friendsgiving checklist: the week before and the day of"
    }
  ],
  "faqs": [
    {
      "a": "The weekend before Thanksgiving works best for most groups — this year that's Saturday, November 21 or Sunday, November 22, since Thanksgiving falls on Thursday, November 26. Send the invite about a week ahead, with a start time and one line about what to bring.",
      "q": "When should I host my friendsgiving party?"
    },
    {
      "a": "Run it as a potluck: you cook one main dish, like a 6 to 7 pound turkey breast, and your friends bring the sides from a shared list. The classic spread is mac and cheese, mashed potatoes, green beans, sweet potato casserole, cranberry sauce and two pies — enough for 8 to 10 people without anyone cooking all day.",
      "q": "What are the best friendsgiving party ideas for food?"
    },
    {
      "a": "Keep the guest list to 8 to 10 people, serve buffet-style from the kitchen counter, and mix chairs with stools and floor cushions. A low coffee table makes a good second table, and cooking the turkey the day before keeps the kitchen clear when guests arrive.",
      "q": "What are the best friendsgiving party ideas for a small apartment?"
    },
    {
      "a": "About $10 to $15 each when you split it as a potluck — the host spends roughly $30 to $40 on the turkey and decor, and each guest brings one dish worth about $10. A $30 decor budget covers the runner, candles, pumpkins and napkins for the whole table.",
      "q": "How much do friendsgiving party ideas cost per person?"
    }
  ],
  "hero": {
    "src": "/img/a3-hero",
    "alt": "Friendsgiving Party Ideas 2026 — a cozy autumn table with sunflowers, pumpkins and candles, and a chalkboard reading Good Friends Good Food Great Times"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "src": "/img/a3-a",
        "alt": "Overhead view of a Friendsgiving table mid-meal: cranberry sauce, roasted squash, mashed potatoes and turkey with autumn leaves scattered across the wood",
        "caption": "The potluck table mid-meal — cranberry sauce, squash and turkey, with autumn leaves doing the decorating."
      }
    },
    {
      "after": 4,
      "img": {
        "src": "/img/a3-b",
        "alt": "A cozy fall tablescape at dusk: pumpkins, candles and autumn flowers on a wooden table under a wooden chandelier",
        "caption": "Candles, pumpkins and one basket of gourds — the whole aesthetic, for about $30."
      }
    }
  ]
}),
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
    "src": "/img/a2-c",
    "alt": "Christmas window painting with a smiling snowman, a decorated tree and wrapped gifts painted on the glass, titled Christmas Window Painting Ideas — Easy, Creative, Festive"
  },
  "images": [
    {
      "after": 0,
      "img": {
        "src": "/img/a2-hero",
        "alt": "Cozy living room at dusk with a large window painted with white chalk snowflakes and a snowy village along the bottom, candles and a small Christmas tree beside it",
        "caption": "A painted window at dusk, warm light inside and snow outside — this is the look we're building, step by step."
      }
    },
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
