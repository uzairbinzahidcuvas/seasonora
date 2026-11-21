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
