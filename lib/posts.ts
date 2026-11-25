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
  P(  {
    "bannerTitle": "Christmas Eve Box Ideas",
    "category": "holidays",
    "date": "2026-11-25",
    "excerpt": "Christmas Eve box ideas for kids, teens and adults — cozy pajamas, hot cocoa, a book and a film in one box, opened on the night before Christmas every year.",
    "faqs": [
      {
        "a": "The classic Christmas Eve box has four things: something to wear (new pajamas or fuzzy socks), something warm to drink (hot cocoa with marshmallows), something to read (a Christmas book) and something to watch (a family film or a movie list). Add one small activity, like a colouring book or a game, and a handwritten note on top.",
        "q": "What do you put in a Christmas Eve box?"
      },
      {
        "a": "Open it on the evening of December 24, around 6 or 7 pm, after dinner. That leaves time to change into the pajamas, make the cocoa and watch the film before bed. Everything inside is meant to be used that same evening, before midnight.",
        "q": "When do you open a Christmas Eve box?"
      },
      {
        "a": "Most boxes cost $25 to $40 per person. A simple box for about $20 works well: fuzzy socks, a cocoa sachet, a candy cane, a small candle, a thrifted paperback, popcorn and a handwritten note. A personalised wooden box adds about $20 to $55 on top, but it lasts for years.",
        "q": "How much does a Christmas Eve box cost?"
      },
      {
        "a": "The adult version follows the same rule — four things for one evening. Popular themes are a spa night box (face mask, bath salts, candle, fuzzy socks), a reader's box (a paperback, a bookmark, a mug and a tea sampler) or a cocktail box (two glasses, a small bottle, a mixer and a recipe card). Keep it to five or six items and a budget of about $25 to $40.",
        "q": "What is a Christmas Eve box for adults?"
      }
    ],
    "from": "#E3A72F",
    "hero": {
      "alt": "Woman in a red plaid dress placing wrapped gift boxes under a decorated Christmas tree with white paper ornaments",
      "src": "/img/a31-hero"
    },
    "images": [
      {
        "after": 2,
        "img": {
          "alt": "Open Christmas Eve box on a bed with a folded grey hoodie, red fuzzy socks, a burgundy book, a lit candle, a mug of hot cocoa with marshmallows and white earbuds, fairy lights behind",
          "caption": "A teen's Christmas Eve box: hoodie, fuzzy socks, a book, a candle and cocoa — everything for one slow evening.",
          "src": "/img/a31-a"
        }
      },
      {
        "after": 4,
        "img": {
          "alt": "Flat lay of cheap Christmas Eve box fillers on rustic wood: a cocoa sachet, a candy cane, fuzzy cream socks, a lit candle, a bag of popcorn, a blank note card and an evergreen sprig",
          "caption": "Cocoa, a candy cane, fuzzy socks and a candle — a full box for about $20.",
          "src": "/img/a31-b"
        }
      },
      {
        "after": 6,
        "img": {
          "alt": "Family of five in matching red plaid Christmas pajamas sitting together by candlelight and fairy lights",
          "caption": "Matching pajamas, candles and fairy lights — the box is just the start of the evening.",
          "src": "/img/a31-c"
        }
      }
    ],
    "intro": "Christmas Eve box ideas are the easiest new tradition you can start this year. One box, opened on the evening of December 24, turns the longest night of the year into a slow, cozy one — new pajamas, something warm to drink, a book to read and a film to watch together. It started in the UK as a way to settle excited kids before bed, and now families everywhere do their own version. The box costs as little as $15 and takes about 20 minutes to put together. Below are the fillers that work for every age, the budgets that keep it sane, and the one rule that keeps it from turning into a second pile of presents.",
    "motif": "star",
    "readTime": 10,
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "A Christmas Eve box is a small box of treats opened on the night before Christmas — Thursday, December 24 this year. It is not a second round of presents. Everything inside gets used that same evening, before midnight, and the whole point is to slow the night down instead of winding it up."
          },
          {
            "t": "h3",
            "text": "The classic four things every Christmas Eve box needs"
          },
          {
            "t": "p",
            "text": "Every good box follows the same four-part rule, and it has worked for years because it is so simple. One thing to wear, one thing to drink, one thing to read and one thing to watch. If you stick to that, the box fills itself and you never end up stuffing it with random bits."
          },
          {
            "items": [
              "Something to wear: new pajamas, fuzzy socks or a soft nightshirt — the item every guide agrees on",
              "Something warm to drink: a hot cocoa sachet, a few marshmallows and a candy cane to stir with",
              "Something to read: a Christmas picture book, a short story or a festive magazine",
              "Something to watch: a family film, a printed list of three movies to pick from, or a Christmas movie bingo card"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "What time to open the box on December 24"
          },
          {
            "t": "p",
            "text": "Open it in the early evening, around 6 or 7 pm, after dinner and before the last jobs of the night. That gives everyone time to change into the pajamas, make the cocoa and settle in for the film. Opening it too late defeats the purpose — tired kids and a film nobody finishes."
          }
        ],
        "heading": "What a Christmas Eve Box Is, and When to Open It"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Kids are where the tradition started, and the box works best when you match the fillers to the age. A toddler needs soft things and simple fun. A seven-year-old wants a game and a treat. The rule stays the same: one wearable, one watchable, one edible, one to keep."
          },
          {
            "t": "h3",
            "text": "Christmas Eve box for toddlers, ages 1 to 3"
          },
          {
            "items": [
              "A Christmas sleepsuit or festive pajamas in the next size up, so they still fit in January — about $15 to $20",
              "A soft toy or a first comforter, small enough to carry to bed",
              "A board book about bedtime or Santa, with thick pages that survive small hands",
              "A keepsake ornament with their name and the year on it — the one thing that comes back out every December"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Christmas Eve box for kids ages 4 to 10"
          },
          {
            "t": "p",
            "text": "This is the age the box shines. They are old enough to read the note, play the game and remember the night — and young enough that new pajamas still feel like a gift. Add one small activity they can do at the table while the cocoa cools."
          },
          {
            "items": [
              "Pajamas with a character or Christmas print — about $20 a set",
              "Santa slippers or fluffy socks if slippers are already on the Christmas list",
              "A picture book to read tonight and a colouring book with new pens or crayons",
              "A bag of popcorn and a Christmas movie bingo card for the film",
              "A small ornament for the tree, plus a handwritten note from Santa"
            ],
            "t": "ul"
          }
        ],
        "heading": "Christmas Eve Box Ideas for Kids"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Teens are the hardest box to fill, because the classic pajamas-and-book combo can feel babyish. The fix is simple: swap the book for something they will actually use, and let them pick one item themselves. A box they helped choose gets opened with a lot more enthusiasm."
          },
          {
            "t": "h3",
            "text": "What teens actually want in a Christmas Eve box"
          },
          {
            "items": [
              "Cozy socks or a soft hoodie instead of a full pajama set",
              "A face mask, lip balm or a small candle — the spa-night angle works at this age too",
              "A phone stand or a pair of earbuds for the movie, if the budget stretches",
              "Their favourite snacks: a chocolate bar, a bag of kettle chips, a bottle of sparkling juice",
              "A puzzle, a card game or a quiz book they can do with friends the next day"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Let them build half the box"
          },
          {
            "t": "p",
            "text": "Hand a teen $15 and the list of four categories — wear, drink, read or watch, do — and let them pick two of the items. It takes five minutes at the shops, it costs the same, and the box stops feeling like something done to them. In our house this is the difference between an eye roll and a photo on their story."
          }
        ],
        "heading": "Christmas Eve Box Ideas for Teens"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The adult version started as a copy of the kids' box, and it works just as well. The rule is the same — four things, one evening, everything used before midnight — but the contents get a little more grown-up. Pick one theme and keep the box to five or six items."
          },
          {
            "t": "h3",
            "text": "The spa night Christmas Eve box"
          },
          {
            "items": [
              "A face mask, bath salts or a bath bomb, and a good body lotion",
              "Fuzzy socks and a candle — the two cheapest items that make the evening feel special",
              "A small bar of nice chocolate and a herbal tea sampler",
              "A do-not-disturb sign for the bathroom door, if you want a laugh"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "The reader's box and the cocktail box"
          },
          {
            "t": "p",
            "text": "For a reader, put in one paperback they have mentioned, a bookmark, a mug and a tea or coffee sampler, with a note saying the evening is theirs. For a couple who like a drink, two nice glasses, a small bottle of something, a mixer, cocktail cherries or dried orange slices and a recipe card. Either box lands around $25 to $40, and both feel far more thoughtful than the price suggests."
          }
        ],
        "heading": "Christmas Eve Box Ideas for Adults and Couples"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "A Christmas Eve box does not need a big budget. Most boxes cost $25 to $40 per person, and you can build a lovely one for $15 if you lean on small fillers. These are the cheap items that look like far more than they cost, and every one of them fits the one-evening rule."
          },
          {
            "t": "h3",
            "text": "Cheap Christmas Eve box fillers that still feel special"
          },
          {
            "items": [
              "A hot cocoa sachet with marshmallows in a twist of paper — about $1",
              "A candy cane to stir the cocoa with — under $1",
              "A handwritten note or a printed Christmas movie list — free, and the item people keep",
              "A small bag of popcorn kernels with a pinch of cinnamon sugar — about $2",
              "A pair of fuzzy socks from the dollar store — $1 to $3",
              "A tea sampler or a single-serve coffee pouch — about $2",
              "A mini candle or a wax melt — $3 to $5",
              "A colouring page and one good pen — under $2"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "A $20 box, priced out"
          },
          {
            "t": "p",
            "text": "Here is a full box for about $20: fuzzy socks ($3), a cocoa sachet with marshmallows ($1), a candy cane ($1), a small candle ($4), a paperback from the thrift shelf ($5), popcorn and a printed bingo card ($2), and a handwritten note (free). That is seven items, every one used on the night, and nothing in it feels cheap."
          }
        ],
        "heading": "Christmas Eve Box Fillers Under $5"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The box matters more than people think, because it is the one part that comes back out every year. A personalised wooden box with a child's name on the lid is a gift in itself, and it turns the box into part of the tradition. But a plain shoebox, wrapped in brown paper with a ribbon, works just as well on the night."
          },
          {
            "t": "h3",
            "text": "Personalised wooden Christmas Eve boxes"
          },
          {
            "t": "p",
            "text": "Engraved or printed wooden boxes with a name on the lid start at about $20, and a pine crate runs closer to $55. If you buy one, get the name right and the year on it — that is what makes it a keepsake instead of a crate. Line it with tissue paper so the fillers sit neatly and nothing rattles."
          },
          {
            "t": "h3",
            "text": "The free shoebox version that still looks lovely"
          },
          {
            "items": [
              "Take a sturdy shoebox and line the inside with tissue paper in red, green or gold",
              "Put the biggest item — the pajamas or the blanket — at the bottom as padding",
              "Layer the smaller items on top by size, heaviest first, lightest last",
              "Tuck the handwritten note on top so it is the first thing they see",
              "Wrap the lid in brown paper, tie it with twine, and add a sprig of evergreen"
            ],
            "t": "ol"
          }
        ],
        "heading": "The Box Itself: Wooden, Personalised or a Plain Shoebox"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The box is a 20-minute job if you plan it, and a last-minute panic if you do not. Buy the fillers in the first week of December, while the shops still have the good pajamas and the cocoa sets. Assemble the boxes on December 23, when the house is quiet, and put them under the tree or by the fireplace ready for the next evening."
          },
          {
            "t": "h3",
            "text": "Your Christmas Eve box timeline"
          },
          {
            "items": [
              "Early December: buy the pajamas, the book and the film or game — the three items that sell out first",
              "Mid-December: pick up the small fillers — cocoa, socks, candle, snacks — in one shop run",
              "December 23: assemble each box, layer it, add the note, and wrap the lid",
              "December 24, around 6 pm: open the boxes, change into the pajamas, make the cocoa",
              "December 24, evening: read the book, watch the film, and let the night wind down on its own"
            ],
            "t": "ol"
          },
          {
            "t": "h3",
            "text": "What to leave out of a Christmas Eve box"
          },
          {
            "items": [
              "Anything that needs batteries, charging or setup — it eats the evening",
              "A second round of real presents — that is what Christmas morning is for",
              "Messy crafts like glitter or paint, unless you enjoy cleaning at 11 pm",
              "Food that needs cooking — the cocoa is the only kitchen job",
              "Anything noisy or bright that winds kids up instead of winding them down"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Keep it to one box, one evening, five or six items. That is the whole tradition, and it is enough. The families who love it most are the ones who keep it small year after year — the same box, the same cocoa, the same film, and a new note on top."
          }
        ],
        "heading": "A Simple Christmas Eve Box Timeline and What to Leave Out"
      }
    ],
    "slug": "christmas-eve-box-ideas",
    "subcategory": "Christmas",
    "title": "Christmas Eve Box Ideas 2026: Cozy Pajamas, Hot Cocoa & Family Traditions for Kids and Adults",
    "to": "#B95E14"
  }),
  P(  {
    "bannerTitle": "Felt Christmas Tree Ornaments",
    "category": "diy-crafts",
    "date": "2026-11-25",
    "excerpt": "Felt Christmas tree ornaments are the softest little things you can hang on a tree. Two pieces of felt, a few simple stitches and a ribbon loop — that is all it takes to make a set of handmade trees in sage, forest green and cream.",
    "faqs": [
      {
        "a": "About 30 to 40 minutes for your first one, including cutting and stitching. Once you have the rhythm, each tree takes around 20 minutes, and a set of five fits easily into one relaxed evening. Most of that time is stitching, so put on some music or a Christmas film and enjoy it.",
        "q": "How long does it take to sew felt Christmas tree ornaments?"
      },
      {
        "a": "Yes — this is one of the best first sewing projects for kids aged seven and up. Let them trace and cut the shapes with safety scissors, then help them with the needle, or let them use a blunt needle with chunky thread. Keep the embroidery stars simple: three or four straight stitches make a sweet little star, and nobody minds if it is a bit crooked.",
        "q": "Can kids help make felt Christmas tree ornaments?"
      },
      {
        "a": "Wool-blend felt is the nicest to work with: it cuts cleanly, holds its shape and has a soft, slightly fuzzy surface that looks handmade in the best way. Craft felt from a hobby shop works fine too, especially for a first try — just pick sheets that feel firm rather than floppy, so the trees stand up straight when they hang.",
        "q": "What kind of felt works best for Christmas ornaments?"
      },
      {
        "a": "Lay them flat in a small box with a sheet of tissue paper between layers, and keep the box somewhere dry. Felt holds dust, so a closed box beats an open basket. The ribbon loops can tangle, so tuck each loop flat against its tree before you stack them. Stored this way, your ornaments will come out next December looking just as good as the day you made them.",
        "q": "How do I store felt Christmas tree ornaments after Christmas?"
      }
    ],
    "from": "#4E8FB8",
    "hero": {
      "alt": "Handmade miniature felt Christmas tree ornaments in sage, forest green and cream with embroidered stars, hanging from a small evergreen branch in cozy Scandinavian holiday styling",
      "src": "/img/a30-hero"
    },
    "images": [
      {
        "after": 3,
        "img": {
          "alt": "Handmade felt Christmas tree ornaments in sage, forest green and cream with embroidered stars, laid out on linen with pinecones, dried orange slices and cinnamon sticks",
          "caption": "A finished set of felt trees — sage, forest green and cream, each with its own little embroidered stars.",
          "src": "/img/a30-a"
        }
      },
      {
        "after": 5,
        "img": {
          "alt": "Handmade felt Christmas tree ornaments in sage, forest green and cream arranged on a rustic wooden table beside a steaming cup of tea and an evergreen branch",
          "caption": "The trees styled for a quiet afternoon — a cup of tea, an evergreen branch, and five little handmade trees.",
          "src": "/img/a30-b"
        }
      }
    ],
    "intro": "Felt Christmas tree ornaments are the kind of project that makes you wonder why you ever bought ornaments at all. A few sheets of felt, a needle, some thread and an evening in front of the fire, and you have a set of soft little trees that look straight out of a Scandinavian Christmas market. We have made these with friends, with kids, and on our own with a cup of tea, and they always turn out charming — even the slightly wonky ones, which honestly have the most character. This guide walks you through the whole thing in four simple steps, from tracing the template to hanging the finished trees, plus styling ideas and answers to the questions we get asked most.",
    "motif": "snow",
    "readTime": 8,
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "Felt Christmas tree ornaments work because they are soft in every sense. They are soft to the touch, soft in colour, and soft on the budget — a few sheets of felt cost less than a single shop-bought ornament, and one evening of stitching gives you a whole set. They are also light, so they hang happily on the thinnest branch, and they cannot shatter, which makes them perfect for homes with kids, cats, or a tree that gets bumped more than once a season."
          },
          {
            "t": "h3",
            "text": "Soft, light and almost impossible to break"
          },
          {
            "t": "p",
            "text": "The other reason we keep coming back to this project is the stitching itself. A running stitch around the edge of a felt tree is slow, simple handwork, and there is something deeply calming about it. You do not need a sewing machine, a pattern you paid for, or any real experience — if you can thread a needle and tie a knot, you can make these."
          },
          {
            "items": [
              "Cost: about $8 to $12 for a set of five, and less if you already own felt and thread",
              "Time: around 20 to 30 minutes per tree, or one relaxed evening for a full set",
              "Skill level: true beginner — a first sewing project that still looks grown-up",
              "Supplies: felt, thread, a needle, stuffing and ribbon, all easy to find",
              "Result: soft, light ornaments that last for years and pack flat in a box"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Best of all, no two trees come out exactly alike. The stitch length varies, the stars land in different spots, and the mix of sage, forest green and cream means the set looks collected rather than mass-made. That is the whole charm of handmade ornaments, and it is why guests always ask where you got them."
          }
        ],
        "heading": "Why Felt Christmas Tree Ornaments Work So Well"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Everything on this list fits in a small basket, and most of it you may already have at home. We like to lay it all out on the table before we start, so the stitching part flows without hunting for a lost needle halfway through."
          },
          {
            "t": "h3",
            "text": "The materials list"
          },
          {
            "items": [
              "Green and cream felt — one sheet of each colour makes about three trees, so grab two or three sheets in sage, forest green and cream",
              "A paper tree template — draw one freehand or print a simple tree outline about 12 cm tall",
              "Sharp scissors for the felt, plus small embroidery scissors if you have them",
              "Embroidery thread in cream, red or gold for the stitching and the stars",
              "A needle — a sharp embroidery needle, or a blunt needle for kids",
              "A small amount of stuffing — toy stuffing, cotton wool, or even scraps of felt",
              "Ribbon for the hanging loops — narrow satin or twine both look lovely",
              "Pins to hold the template and the two felt layers together while you cut and stitch"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "A few handy extras"
          },
          {
            "items": [
              "A pencil or fabric marker for tracing the template onto the felt",
              "A thimble if your fingers tire while pushing the needle through two layers",
              "A small bowl to keep pins and thread ends in one place",
              "A warm drink — this is a slow-craft evening, after all"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "One note on felt: wool-blend felt is the nicest to sew, but ordinary craft felt works fine for a first set. Pick sheets that feel firm in your hand rather than floppy, and check that the colours sit well together before you cut — sage, forest green and cream is our favourite mix, but deep red and cream is just as pretty."
          }
        ],
        "heading": "What You Need"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Good cutting is half the project. A clean, matching pair of tree shapes makes the stitching easy and the finished ornament neat, so take your time here — it pays off in every step that follows."
          },
          {
            "t": "h3",
            "text": "Make your paper tree template first"
          },
          {
            "t": "p",
            "text": "Draw a simple tree on paper: a triangle with two or three stepped layers and a short trunk, about 12 cm tall and 9 cm wide. It does not need to be perfect — a slightly chubby tree looks even cuter in felt. Cut it out and hold it up: if it looks like a tree, it is ready."
          },
          {
            "items": [
              "Pin the paper template onto a sheet of felt and trace around it with a pencil or fabric marker.",
              "Cut along the traced line with sharp scissors, keeping the cuts smooth and steady.",
              "Trace and cut a second tree from the same colour felt, using the same template so the pair matches.",
              "Lay the two shapes together and trim any edges that stick out — matching pairs stitch up far more neatly.",
              "Repeat for each tree you want in your set, mixing the colours as you go."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "A quick tip: cut the felt with long, smooth scissor strokes instead of short snips. Short snips leave jagged edges that show once the ornament is stuffed. And save your felt scraps — small pieces make great stuffing later."
          }
        ],
        "heading": "Step 1: Trace and Cut Two Matching Felt Tree Shapes"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "This is the heart of the project, and it is simpler than it looks. A running stitch — in and out, in and out — joins the two felt trees, and the little gap you leave at the bottom is where the stuffing goes in."
          },
          {
            "t": "h3",
            "text": "Pin, then stitch with small even stitches"
          },
          {
            "items": [
              "Pin the two felt trees together, wrong sides facing in, with a few pins around the edge.",
              "Thread your needle with embroidery thread and knot the end.",
              "Start at the bottom of the trunk and stitch around the edge with a running stitch, keeping each stitch about 3 mm long.",
              "Keep the stitches even and close to the edge — about 3 mm in — so the seam looks tidy.",
              "Stop about 4 cm before you reach your starting point, leaving a short opening at the bottom of the tree."
            ],
            "t": "ol"
          },
          {
            "t": "h3",
            "text": "Add a little stuffing — not too much"
          },
          {
            "t": "p",
            "text": "Push small tufts of stuffing through the opening with the blunt end of a pencil or a chopstick, starting with the tip of the tree and working down. The tree should feel soft and plump, not hard — if you can see the felt stretching, you have put in too much. A little stuffing goes a long way, and a softly filled tree hangs better than a stiff one."
          },
          {
            "t": "p",
            "text": "If you are making these with kids, this is their favourite part. Hand them the stuffing and let them fill the tree while you hold it open — it is the closest thing to magic in the whole project."
          }
        ],
        "heading": "Step 2: Stitch Around the Edges and Add the Stuffing"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "With the tree stuffed, close the opening with the same running stitch, hiding the knot inside the felt. Then comes the best part: the embroidered stars that turn a plain green tree into a proper little ornament."
          },
          {
            "t": "h3",
            "text": "Stitch a tiny star in three moves"
          },
          {
            "items": [
              "Bring the needle up through the felt where you want the star to sit.",
              "Make a small star with five short straight stitches radiating from one centre point, like a little asterisk.",
              "Pull each stitch gently so the star sits flat, then take the needle to the next spot and repeat.",
              "Add three or four stars of different sizes across the tree, mixing cream and gold thread.",
              "Finish by taking the needle through to the back and tying a small knot hidden inside the felt."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Do not worry about making the stars perfect. Slightly uneven stars look hand-stitched in the loveliest way, and from a normal distance nobody can tell one star from another — they just see a tree sparkling with little stitches. If embroidery feels new to you, practise one star on a felt scrap first. One scrap, one star, and your hands will know what to do."
          }
        ],
        "heading": "Step 3: Close the Opening and Add the Embroidered Star"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The last step takes two minutes and turns your sewn tree into a hanging ornament. A ribbon loop at the top is all it needs — plus a moment to step back and admire the set."
          },
          {
            "t": "h3",
            "text": "Attach the ribbon loop"
          },
          {
            "items": [
              "Cut a piece of ribbon about 15 cm long and fold it into a loop.",
              "Tuck the two cut ends into the top of the tree, just inside the seam.",
              "Stitch through the loop ends and the felt a few times to anchor them firmly.",
              "Knot the thread inside the tree and trim the ends.",
              "Hang your finished tree and check it sits straight — adjust the loop if it leans."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Ribbon choice changes the whole look. Narrow red satin feels classic, natural twine feels rustic and Scandinavian, and thin gold ribbon makes the trees look a little bit fancy. We mix twine and red ribbon across a set so the tree looks gathered over time rather than bought in one go."
          },
          {
            "t": "p",
            "text": "Once the loop is on, hang the tree somewhere you can see it while you make the next one. A growing row of felt trees on a branch or a door handle is the best motivation to keep stitching."
          }
        ],
        "heading": "Step 4: Attach the Ribbon Loop and Hang Your Felt Christmas Tree Ornaments"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "A set of felt Christmas tree ornaments earns its place in more spots than the big tree. Their soft colours and handmade look fit almost anywhere, and because they are light and unbreakable, you can hang them in places glass ornaments would never survive."
          },
          {
            "t": "h3",
            "text": "Where to hang them"
          },
          {
            "items": [
              "On the Christmas tree, spread among the baubles for a soft handmade note",
              "Along a small evergreen branch in a vase, as a table centrepiece",
              "On gift wrapping instead of a bow — the ornament becomes part of the present",
              "From door handles, hooks and a fireplace garland, mixed in with dried oranges",
              "On a wreath, tucked between the branches for a pop of sage and cream"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Easy variations to try"
          },
          {
            "items": [
              "Swap the star for a tiny embroidered heart or a French knot snowflake",
              "Make a mini set in one colour — all cream trees look beautiful on a white tree",
              "Add a dab of cinnamon scent by tucking a tiny sachet of ground cinnamon inside before you close the seam",
              "Sew a felt trunk in brown or red for a two-tone tree",
              "Scale the template down to 7 cm for sweet little trees that suit a small tabletop tree"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Looking after them"
          },
          {
            "t": "p",
            "text": "Felt is tougher than it looks. A quick brush with a lint roller takes off any dust, and a spot of mild soap and water handles most marks — just let the tree dry flat. When Christmas is over, lay the trees flat in a box with tissue paper between the layers and keep the ribbon loops tucked flat so they do not tangle. Stored this way, a set of felt trees will come out next year looking just as good, and a little more loved."
          }
        ],
        "heading": "Styling, Care and Easy Variations for Your Felt Christmas Tree Ornaments"
      }
    ],
    "slug": "felt-christmas-tree-ornaments",
    "subcategory": "Handmade Gifts",
    "title": "Felt Christmas Tree Ornaments: Easy Handmade Sewing Project for a Cozy Tree",
    "to": "#275E7E",
    "video": "felt-christmas-tree-ornaments"
  }),
  P(  {
    "slug": "christmas-party-games-for-adults",
    "title": "Christmas Party Games for Adults 2026: Easy, Funny & No-Prep Games for Family & Friends",
    "bannerTitle": "Christmas Party Games for Adults",
    "category": "holidays",
    "subcategory": "Christmas",
    "excerpt": "Christmas party games for adults that get the whole room laughing — no-prep classics, trivia, White Elephant and the Saran Wrap ball, all in one easy plan.",
    "date": "2026-11-25",
    "readTime": 10,
    "motif": "star",
    "from": "#E3A72F",
    "to": "#B95E14",
    "intro": "Christmas party games are the difference between a party people remember and one they quietly leave early. We have hosted enough December nights to know the pattern: the food gets eaten, the drinks get poured, and then everyone stands around waiting for someone else to start the fun. These games fix that. Every game below needs little or no setup, works for groups of 6 to 30, and costs almost nothing — most use things already sitting in your kitchen. Pick three or four, run them in the order below, and the night pretty much takes care of itself.",
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "The best games are the ones you can start the second the room goes quiet. No printing, no props, no ten-minute explanation while everyone checks their phone. You just say the rules in two sentences and go."
          },
          {
            "t": "h3",
            "text": "Start with charades — it works every time"
          },
          {
            "t": "p",
            "text": "Christmas charades is the safest opener we know. Write 12 to 15 prompts on slips of paper before guests arrive — films, songs and characters only, nothing obscure. Fold them into a bowl, split the room into two teams, and give each player 60 seconds. One point per correct guess, and the team with the most points after two rounds wins a small prize."
          },
          {
            "items": [
              "Films: Home Alone, Elf, The Grinch, Love Actually, Die Hard",
              "Songs: Jingle Bell Rock, All I Want for Christmas Is You, Last Christmas"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Two truths and a lie, Christmas edition"
          },
          {
            "t": "p",
            "text": "This one needs nothing at all and it gets people talking fast. Each guest tells the group two true Christmas memories and one made-up one, and the rest of the room votes on which is the lie. The best liar wins a candy cane."
          },
          {
            "items": [
              "I once got stuck in a chimney costume at a school play",
              "I have eaten an entire tin of Quality Street in one sitting",
              "I met my partner at a Christmas work party"
            ],
            "t": "ul"
          }
        ],
        "heading": "Christmas Party Games That Need Zero Setup"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Trivia is the game most hosts get wrong by making it too hard. The questions below are the kind anyone can answer — a mix of films, songs and food — and the scoring stays simple so the game moves fast."
          },
          {
            "t": "h3",
            "text": "Build three short rounds of five questions"
          },
          {
            "t": "p",
            "text": "Five questions per round, one point each, and a 30-second limit per question. Read each question twice, then move on — long pauses kill the energy. Hand each team a pen and a scrap of paper, and have them swap papers to mark at the end of each round. All three rounds take about 20 minutes, which is just right."
          },
          {
            "items": [
              "In Home Alone, what city is Kevin's family flying to when they leave him behind? (Paris)",
              "Which reindeer is famous for a shiny red nose? (Rudolph)",
              "What drink is made with eggs, milk, sugar and nutmeg? (Eggnog)",
              "In Elf, what is Buddy's favourite food group? (Candy, candy canes, candy corn and syrup)",
              "What date is Christmas Eve? (24 December)"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Keep score simple and visible"
          },
          {
            "t": "p",
            "text": "Write the scores on a piece of paper taped to the wall. Seeing the score keeps teams in it — a team that is two points down will fight for the last round. The winning team gets first pick of the dessert table."
          }
        ],
        "heading": "Christmas Trivia Questions Everyone Can Answer"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "White Elephant is the game people talk about for weeks, and the rules are what make it or break it. Set them before anyone opens a gift, say them out loud, and stick to them."
          },
          {
            "t": "h3",
            "text": "The gift budget that works"
          },
          {
            "t": "p",
            "text": "Set the budget at $15 to $25 and say it clearly on the invitation, so nobody brings a $5 gag gift to a $25 table — or the other way round. Funny gifts do better than useful ones in this game, and wrapped gifts always beat gift bags, because the mystery is half the fun."
          },
          {
            "items": [
              "A funny mug with a ridiculous slogan, about $12",
              "A bottle of wine or a small box of chocolates, $15 to $20",
              "Fuzzy socks with a silly print, about $10",
              "A $15 gift card tucked inside a joke gift, like a single oven mitt"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "The stealing rule, settled"
          },
          {
            "t": "p",
            "text": "This is the rule that causes arguments, so fix it in advance. A gift can be stolen twice, and after that it is frozen. A player who has a gift stolen gets to pick a new wrapped gift or steal from someone else. Draw numbers from a hat, and let player number one swap at the very end."
          },
          {
            "items": [
              "Everyone brings one wrapped gift in the $15 to $25 range",
              "Draw numbers — player one picks a gift and opens it",
              "Each next player either opens a new gift or steals an opened one",
              "A gift can be stolen twice, then it is frozen",
              "Player one gets a final swap at the end"
            ],
            "t": "ol"
          }
        ],
        "heading": "White Elephant Rules That Keep It Fun"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "If you only run one big game all night, make it this one. It looks silly, sounds loud, and gets every single person in the room involved — including the guests who said they do not like party games. It takes about 15 minutes to build the ball and about 10 minutes to play."
          },
          {
            "t": "h3",
            "text": "What to wrap inside the ball"
          },
          {
            "t": "p",
            "text": "Start with a good prize at the centre — a $10 or $15 gift card is perfect — then wrap it in plastic wrap, add a small prize, wrap again, and keep going until the ball is about the size of a grapefruit. Aim for 20 to 30 layers, with a small prize every three or four layers."
          },
          {
            "items": [
              "Centre prize: a $10 to $15 gift card, wrapped first",
              "Every 3 to 4 layers: a small prize — candy, a scratch card, lip balm",
              "Outer layers: wrapped candy and a few silly items, like a single sock"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "How a round actually runs"
          },
          {
            "t": "p",
            "text": "Sit everyone in a circle. The first player holds the ball and starts unwrapping while the player to their left rolls two dice. The moment the dice show doubles, the ball passes to the next person. Oven mitts make it harder and funnier — the unwrapper wears them while the dice are rolling. When the ball is gone, everyone keeps what they unwrapped."
          },
          {
            "items": [
              "Sit in a circle, ball with player one, dice with player two",
              "Player one unwraps as fast as possible, mitts on if you are using them",
              "Player two rolls the dice until they show doubles",
              "On doubles, the ball and dice both move one seat along",
              "Keep going until the last layer is unwrapped"
            ],
            "t": "ol"
          }
        ],
        "heading": "The Saran Wrap Ball Game, Step by Step"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Minute-to-win-it games are perfect for the middle of the night, when people have eaten and need to move around. Each one takes 60 seconds, uses things from your kitchen, and works as a quick race between two players while the room cheers them on."
          },
          {
            "t": "h3",
            "text": "Six one-minute games that use kitchen stuff"
          },
          {
            "t": "p",
            "text": "You do not need to buy anything for these. A bag of cotton balls, a box of candy canes, a spoon and a few ornaments cover the whole set. Set a phone timer where everyone can see it, and have a small prize ready for each round winner."
          },
          {
            "items": [
              "Ornament spoon relay — carry an ornament on a spoon across the room and back, most trips wins",
              "Candy cane hook — use a candy cane held in your mouth to hook and lift three more off the table",
              "Cotton ball scoop — move cotton balls from one bowl to another with a spoon, blindfolded",
              "Jingle bell toss — toss five jingle bells into a mug from three feet away",
              "Cookie face — place a cookie on your forehead and get it into your mouth without hands"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Run them as a relay, not one by one"
          },
          {
            "t": "p",
            "text": "Do not run each game as its own event with a long setup in between. Line up the supplies on the kitchen counter in order, and run the games back to back with no gap. Two players at a time, 60 seconds each, and the crowd picks the winner by cheering. The whole set takes about 15 minutes."
          }
        ],
        "heading": "Minute-to-Win-It Christmas Games"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Printable games are the quiet heroes of a party. They fill the gaps — the first 20 minutes while people arrive, the lull after dinner, the last half hour when the energy dips. Print them the day before and let guests play at their own pace."
          },
          {
            "t": "h3",
            "text": "Christmas bingo cards in ten minutes"
          },
          {
            "t": "p",
            "text": "Christmas bingo is the easiest printable of all, and it works for mixed ages, which matters when kids and grandparents are in the same room. You can buy a pack of 24 cards for about $8, or print free ones at home on card stock. Call the squares from a hat, and give the first bingo a small prize — a box of chocolates works well."
          },
          {
            "items": [
              "Buy a pack of 24 cards for about $8, or print free ones on card stock",
              "Use small candies as markers — guests eat them after the game",
              "Call squares slowly, one every 20 seconds, so nobody falls behind"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "The emoji quiz that breaks the ice"
          },
          {
            "t": "p",
            "text": "Write 10 Christmas films or songs as emoji strings on a sheet — a snowman plus a house for Frozen, a bell plus a ring for Jingle Bell Rock — and hand one sheet to each guest as they arrive. It takes five minutes to solve, it gets people talking to each other, and it costs nothing. The first finished sheet wins a candy cane, and the funniest wrong answer gets one too."
          }
        ],
        "heading": "Christmas Bingo and Other Printable Games"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Games only work if they land at the right moment. Run a loud game during dinner and nobody hears the rules; run a quiet game at 11 pm and everyone is too tired to care. The timeline below fits a party that starts at 7 and ends around 11."
          },
          {
            "t": "h3",
            "text": "The order that keeps energy up"
          },
          {
            "t": "p",
            "text": "Start quiet, build to loud, and finish calm. The first game should be one people can join without leaving their drink. The big games belong after dinner, when everyone is full and ready to move. End with something gentle, so people leave smiling instead of exhausted."
          },
          {
            "items": [
              "7:00 — guests arrive, emoji quiz sheets on the table, drinks out",
              "7:30 — two truths and a lie while everyone settles in",
              "8:00 — dinner, no games, just conversation",
              "8:45 — trivia, three rounds, about 20 minutes",
              "9:15 — the Saran Wrap ball game, the loudest moment of the night",
              "9:45 — White Elephant gift exchange, about 30 minutes",
              "10:15 — minute-to-win-it relay, quick and loud",
              "10:45 — Christmas bingo, calm finish, last prizes handed out"
            ],
            "t": "ol"
          },
          {
            "t": "h3",
            "text": "Prizes under $10 that people actually want"
          },
          {
            "t": "p",
            "text": "You do not need expensive prizes — you need prizes people will use. A $5 coffee shop gift card beats a $15 ornament nobody wants. Buy five or six small prizes and one slightly better one for the final game, and wrap them all so the prize table looks generous."
          },
          {
            "items": [
              "$5 coffee shop gift cards — the most popular prize we have ever used",
              "A box of nice chocolates, about $8",
              "A Christmas-scented candle, $8 to $10",
              "Fuzzy socks in a fun print, about $7"
            ],
            "t": "ul"
          }
        ],
        "heading": "A Simple Timeline for Your Christmas Party Games Night"
      }
    ],
    "faqs": [
      {
        "a": "The ones that need no setup and no explaining: Christmas charades, two truths and a lie, a short trivia round, and White Elephant. Add the Saran Wrap ball game for one big moment in the middle of the night. That mix covers shy guests, loud guests and mixed ages.",
        "q": "What are the best Christmas party games for adults?"
      },
      {
        "a": "Three or four is the sweet spot for one night. Plan one game for the first hour while people arrive, one big game after dinner, and one quiet game for the end of the night. More than five and guests get tired; fewer than three and the gaps between games feel long.",
        "q": "How many Christmas party games should I plan for one night?"
      },
      {
        "a": "You wrap small prizes in layers of plastic wrap to make one big ball, then pass it around while one player rolls dice. Whoever holds the ball unwraps as fast as they can until the next player rolls doubles, then the ball moves on. The prizes inside are small — candy, a $5 gift card, a lip balm — and the fun is in the scramble, not the prizes.",
        "q": "What is the Saran Wrap ball game and how do you play it?"
      },
      {
        "a": "About $5 to $10 per prize is plenty. A bottle of wine, a box of nice chocolates, a candle, fuzzy socks or a $10 gift card all work. Buy five or six small prizes instead of one big one — more winners means more laughs.",
        "q": "How much should I spend on prizes for Christmas party games?"
      }
    ],
    "hero": {
      "src": "/img/a29-hero",
      "alt": "Adults in Christmas sweaters laughing while playing a party game in a warm living room, one woman holding up a quiz card, a wrapped gift and candles on the coffee table, lit Christmas tree behind them"
    },
    "images": [
      {
        "after": 2,
        "img": {
          "src": "/img/a29-a",
          "alt": "Woman in a festive sweater holding a wrapped gift beside wrapped presents under a Christmas tree",
          "caption": "Wrapped gifts ready for White Elephant — funny beats useful, and wrapped always beats a gift bag."
        }
      },
      {
        "after": 4,
        "img": {
          "src": "/img/a29-b",
          "alt": "Two adults laughing while playing the ornament spoon relay, one balancing a red ornament on a spoon, candy canes on the table",
          "caption": "The ornament spoon relay in full swing — 60 seconds, one spoon, and a room full of cheering."
        }
      },
      {
        "after": 6,
        "img": {
          "src": "/img/a29-c",
          "alt": "Friends raising glasses at a candlelit Christmas dinner table with fairy lights and a lit tree",
          "caption": "Dinner first, games after — the table is where the night warms up before the games begin."
        }
      }
    ]
  }
  ),
  P(  {
    "bannerTitle": "Easy Christmas Mantle Garland",
    "category": "diy-crafts",
    "date": "2026-11-25",
    "excerpt": "A Christmas mantle garland turns a plain fireplace into the warm heart of the room. Fresh evergreen, fairy lights and velvet ribbon, in four simple steps.",
    "faqs": [
      {
        "a": "About $25 to $40, if you buy everything new. Fresh branches are the cheapest part — many garden centres sell bundles for a few dollars, and a neighbour with a fir tree may give you trimmings for free. Battery fairy lights cost around $5 to $8, velvet ribbon about $4 a roll, and pinecones and dried orange slices are cheap or free if you make them at home. Reuse the lights, ribbon and hooks next year and the cost drops to almost nothing.",
        "q": "How much does a Christmas mantle garland cost to make?"
      },
      {
        "a": "Yes — one made from fresh branches lasts about two to three weeks indoors, which covers most of December. Keep it away from the heat of a lit fire and mist it lightly every few days to slow drying. If your mantel sits right above a working fireplace, hang the garland a little higher, and take it down on nights when the fire burns long and hot.",
        "q": "How long does a fresh Christmas mantle garland last indoors?"
      },
      {
        "a": "Start with the garland, then add one layer at a time. Two stockings, a pair of candles and a small stack of books or a framed photo are plenty — the garland is the star, so the rest should frame it, not fight it. Keep candles at the ends of the mantel, well clear of dry branches, and never leave a lit candle unattended. If the mantel is narrow, skip the books and let the garland drape down at the sides.",
        "q": "What should I put on the mantel with my Christmas mantle garland?"
      },
      {
        "a": "Yes. If fresh branches are hard to find, a good faux evergreen garland works the same way — the steps do not change, and you can reuse it every year. Look for one with mixed branch tips and a full shape, then fluff it out before you start. Add the same lights, ribbon, pinecones and dried oranges, and no one will know it is not fresh unless you tell them.",
        "q": "Can I make a Christmas mantle garland with a faux garland instead of fresh branches?"
      }
    ],
    "from": "#4E8FB8",
    "hero": {
      "alt": "Finished Christmas mantle garland with fresh evergreen branches, warm fairy lights, burgundy and forest green velvet ribbon, pinecones and dried orange slices, stockings hanging below and candles lit beside a fire",
      "src": "/img/a28-hero"
    },
    "images": [
      {
        "after": 3,
        "img": {
          "alt": "Handmade Christmas mantle garland with fresh evergreen branches, warm fairy lights, burgundy velvet ribbon, pinecones and dried orange slices on a bright stone fireplace",
          "caption": "The garland taking shape — lights woven in, ribbon draped, and the oranges and pinecones tucked in evenly.",
          "src": "/img/a28-a"
        }
      },
      {
        "after": 5,
        "img": {
          "alt": "Close-up of a finished Christmas mantle garland with a large burgundy velvet bow, dried orange slices, pinecones, a lit candle and a knitted stocking",
          "caption": "The finished end of the garland — a big velvet bow, a lit candle and a stocking waiting for Christmas morning.",
          "src": "/img/a28-b"
        }
      }
    ],
    "intro": "A Christmas mantle garland is the fastest way we know to make a living room feel like Christmas. One long swag of fresh evergreen, a string of warm fairy lights and a few loops of velvet ribbon turn a bare mantel into the cosy heart of the house — and you can build it in about an hour, with no special tools and no experience. We make one every December, and it is the decoration guests notice first. Below are the exact materials, the four steps, and the styling tricks that make the finished garland look full, even and properly festive.",
    "motif": "snow",
    "readTime": 8,
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "A Christmas mantle garland works because it does three jobs at once. The evergreen gives you colour and texture, the fairy lights give you warmth and glow, and the ribbon, pinecones and dried oranges give you the little details that make people lean in for a closer look. Nothing on the list is expensive, and nothing needs a special skill — if you can overlap branches and tie a bow, you can make this."
          },
          {
            "t": "h3",
            "text": "Why a garland beats a row of decorations"
          },
          {
            "t": "p",
            "text": "A row of small decorations can look scattered, with gaps that catch the eye. A garland joins the whole mantel into one flowing piece, so the eye travels across it, and it softens the hard edge where the wall meets the shelf."
          },
          {
            "items": [
              "Cost: about $25 to $40 for everything, and far less once you reuse the lights and ribbon",
              "Time: around an hour from first branch to final fluff, plus drying time for orange slices if you make your own",
              "Skill level: if you can tie a bow and twist wire, you can make a garland",
              "Supplies: branches, lights, ribbon, pinecones, dried oranges, wire and hooks — most of it keeps for next year",
              "Impact: the mantel becomes the focal point of the room, day and night"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "One more reason we love this project: it smells like Christmas. Fresh fir, pine and cedar give off a soft, resinous scent, and the dried orange slices add a faint citrus note."
          }
        ],
        "heading": "Why a Christmas Mantle Garland Works So Well"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Keep the list short and buy the branches last, so they stay fresh. A garden centre, a Christmas tree lot or a neighbour with a fir tree are all good sources — ask for trimmings, which are often free or very cheap. Choose branches that bend without snapping."
          },
          {
            "t": "h3",
            "text": "What you need for a Christmas mantle garland"
          },
          {
            "items": [
              "Fresh evergreen branches — a mix of fir, pine and cedar, about 6 to 8 long branches",
              "Battery fairy lights — one warm-white string, 3 to 5 metres, with a small battery pack",
              "Velvet ribbon — burgundy and forest green, about 2 metres of each",
              "Pinecones — 6 to 8 small to medium ones, clean and dry",
              "Dried orange slices — 6 to 8, shop-bought or dried at home in a low oven",
              "Garland ties or command hooks — 3 or 4, to hold the garland on the mantel",
              "Scissors and floral wire — for trimming branches and tying them together"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "If you cannot find all three types, do not worry — two still look good. The mix is what matters: fir gives soft, full needles, pine gives long, loose tips, and cedar gives flat, feathery sprays. Together they look layered and natural."
          },
          {
            "t": "h3",
            "text": "A quick note on the lights"
          },
          {
            "t": "p",
            "text": "Battery fairy lights are the right choice here — no plug to hide, no wire trailing down the wall. Pick warm white, not cool white: warm light makes the green look rich and the room feel cosy. A string with a timer is worth the extra dollar — set it for six hours and the lights switch themselves off at bedtime."
          }
        ],
        "heading": "What You Need"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Start by measuring the mantel, then add about 30 cm extra so the garland can drape down a little at each end. Lay the branches on a table and sort them into fir, pine and cedar piles. The base is the most important part of the whole project — a full, even base makes everything after it easy."
          },
          {
            "t": "h3",
            "text": "Laying the evergreen base"
          },
          {
            "items": [
              "Measure the mantel and cut a length of floral wire a little longer than the finished garland.",
              "Lay the first branch flat, tip pointing left, and lay the next branch over it so its tip covers the first branch's cut end.",
              "Keep layering — fir at the back for fullness, pine in the middle for length, cedar at the front for soft, feathery tips.",
              "Overlap each branch by about a third, so no bare stems show through the middle.",
              "Every 20 cm or so, wrap floral wire around the bundle to hold the layers together.",
              "Lift the finished base and check it from the front: it should look full all the way along, with no thin patches."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "If a patch looks thin, tuck an extra cedar spray in and wire it in place — cedar is the best filler because its flat sprays cover a lot of space. Do not pull the wire too tight: snug is enough, and over-tight wire snaps thin stems."
          }
        ],
        "heading": "Step 1: Measure the Mantel and Build the Evergreen Base"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Lights go in before the decorations, because the wire is much easier to hide while the garland is still bare. Work from one end to the other in a slow, loose zigzag, pushing the wire deep into the branches so only the tiny bulbs show. The glow should come from inside the garland, not sit on top of it."
          },
          {
            "t": "h3",
            "text": "Weaving the fairy lights through the garland"
          },
          {
            "items": [
              "Start at one end and leave the battery pack hanging free — you will hide it last.",
              "Weave the wire in and out of the branches, dipping it deep every 15 cm so the bulbs sit inside the greenery.",
              "Keep the spacing loose and even: a bulb every 10 to 15 cm gives a soft glow without hot spots.",
              "When you reach the far end, loop back along the front edge so the front of the garland glows too.",
              "Tuck the battery pack behind the thickest part of the garland, near the back of the mantel.",
              "Switch the lights on and check for dark patches — add a small loop of wire wherever the glow fades."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "If the battery pack is too heavy to sit in the branches, tape it to the back of the mantel, or rest it behind the garland where it cannot be seen. Keep the switch where you can reach it without moving the garland — behind the end drape is usually best."
          }
        ],
        "heading": "Step 2: Weave in the Fairy Lights"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Now the fun part. Ribbon loops, pinecones and dried orange slices are the jewellery of the garland, and spacing is everything: too close together and the garland looks crowded, too far apart and it looks bare. Aim for a rhythm — a ribbon loop, then a pinecone, then an orange slice — repeated down the whole length."
          },
          {
            "t": "h3",
            "text": "Adding velvet ribbon, pinecones and dried orange slices"
          },
          {
            "items": [
              "Cut the velvet ribbon into 40 cm lengths and tie each one into a simple loop with two tails.",
              "Alternate burgundy and forest green loops along the garland, spacing them about 30 cm apart.",
              "Wire each loop to the garland at its centre, then fan the tails out so they fall naturally.",
              "Tuck a pinecone into the garland between every two ribbon loops, wiring it in place so it sits snug.",
              "Slide a dried orange slice into the branches beside each pinecone, catching its edge in the wire so it does not slip.",
              "Step back and look from the front: the spacing should feel even, with no two of the same thing side by side."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "If a ribbon loop looks flat, pinch its centre and pull the tails apart — velvet holds a shape well once you give it one. Dried orange slices look best facing out, so turn each one until its pattern shows. Save one or two spare slices: if one cracks or falls, you will want a replacement on hand."
          }
        ],
        "heading": "Step 3: Add Ribbon, Pinecones and Dried Orange Slices"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Carry the finished garland to the mantel in both hands, supporting the middle so it does not sag and shed needles. Hook the wire at each end, let the ends drape down a little, and then fluff — pull the outer tips forward, lift the flat spots, and shake the whole thing gently so it settles into a natural shape."
          },
          {
            "t": "h3",
            "text": "Hanging, fluffing and styling your Christmas mantle garland"
          },
          {
            "items": [
              "Hang the garland on the command hooks or garland ties, one at each end and one in the middle.",
              "Let the ends drape down 10 to 15 cm past the mantel edge for a soft, finished look.",
              "Fluff the branches: pull cedar tips forward, lift any flat fir, and fill thin spots with a spare spray.",
              "Hang two stockings from the mantel, one near each end, so they frame the garland.",
              "Place a candle at each end of the mantel, well clear of dry branches, and light them in the evening.",
              "Switch the fairy lights on, light the fire if you have one, and step back for the reveal."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "The reveal is the best moment of the whole project. With the lights twinkling, the stockings hanging and the fire lit, the mantel looks like it came from a Christmas card — and you made it in an afternoon. Take a photo now, while the branches are at their freshest."
          }
        ],
        "heading": "Step 4: Hang, Fluff and Style Your Christmas Mantle Garland"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "A finished Christmas mantle garland suits the whole room, not just the fireplace. We keep ours up from the first week of December until just after New Year — it becomes the backdrop for morning coffee, evening fires and the pile of presents underneath it."
          },
          {
            "t": "h3",
            "text": "Styling your Christmas mantle garland around the room"
          },
          {
            "items": [
              "On the mantel itself: two stockings, two candles and nothing else — the garland is the star",
              "Under the mantel: a small stack of wrapped presents, or a basket of pinecones and extra oranges",
              "Beside the fireplace: a lantern or a tall candle in a glass holder, for a second pool of light",
              "On the wall above: leave it bare, or hang a simple wreath that matches the garland's ribbon",
              "At night: fairy lights on, candles lit, fire going — the mantel becomes the warmest corner of the house"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Care, storage and easy variations"
          },
          {
            "t": "p",
            "text": "Fresh garlands last about two to three weeks indoors. Mist the branches lightly every few days, keep the garland away from direct heat, and sweep up fallen needles each morning. When the season ends, compost the branches, keep the pinecones, and coil the lights and ribbon away for next year."
          },
          {
            "t": "p",
            "text": "For variations, swap the burgundy ribbon for gold, or add a few cinnamon sticks for scent. A kid-friendly version works well too: let the kids tie the ribbon loops and place the pinecones — wonky, and somehow better for it. Or make a matching mini garland for a shelf or doorway, using the same steps on a shorter length."
          }
        ],
        "heading": "Styling, Care and Easy Variations for Your Christmas Mantle Garland"
      }
    ],
    "slug": "diy-christmas-mantle-garland",
    "subcategory": "Wreaths & Garlands",
    "title": "Christmas Mantle Garland DIY: Easy Evergreen, Fairy Lights & Ribbon Styling",
    "to": "#275E7E",
    "video": "diy-christmas-mantle-garland"
  }),
  P(  {
    "slug": "christmas-mantle-decor-ideas-2026",
    "title": "Christmas Mantle Decor Ideas 2026: Cozy Garland, Stockings & Fireplace Styling",
    "bannerTitle": "Cozy Christmas Mantle Ideas",
    "category": "seasonal-living",
    "subcategory": "Winter Ideas",
    "excerpt": "Christmas mantle decor ideas that work in real homes: a full garland, stockings that stay put, warm lights and simple layers for a cozy fireplace look.",
    "date": "2026-11-25",
    "readTime": 10,
    "motif": "leaf",
    "from": "#7FA653",
    "to": "#46682F",
    "intro": "Christmas mantle decor ideas are the fastest way to make a living room feel like December. The mantel is the one spot every eye lands on, so a little work there does more than a whole room of small touches. You don't need a big budget or a designer's eye — a full garland, stockings that actually stay put, warm lights and a few taller pieces are enough. This guide walks through each layer in order, with real sizes, prices and the small mistakes to skip, so you can finish the whole thing in one relaxed afternoon.",
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "Walk into any living room in December and your eyes go straight to the fireplace. It's the tallest thing in the room, it sits dead centre, and it's where the stockings hang — so it carries the whole Christmas feeling almost by itself. That's good news: put most of your decorating energy into one shelf and the rest of the room just falls in line."
          },
          {
            "t": "h3",
            "text": "Pick one look before you buy anything"
          },
          {
            "t": "p",
            "text": "The mantles that look best aren't the ones with the most stuff. They're the ones with one clear idea. Pick your look first, then buy only what fits it. Three looks work in almost any home:"
          },
          {
            "items": [
              "Classic red and green — evergreen garland, red stockings, plaid ribbon and brass candlesticks. Warm, familiar, and easy to shop for.",
              "Snowy white and gold — frosted garland, cream stockings, gold fairy lights and a few bottle-brush trees. Soft and calm, great in bright rooms.",
              "Rustic woodland — plain cedar garland, pinecones, dried orange slices and kraft-paper tags. Cozy without feeling fancy."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Once you've picked a look, take a phone photo of your bare mantel and keep it with you while you shop. It stops you buying a 24-inch sign for an 18-inch shelf."
          }
        ],
        "heading": "Christmas Mantle Decor Ideas That Make the Whole Room Feel Festive"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Garland is the base layer, and it does about half the work. A good garland hides the bare shelf, gives the stockings something to hang from, and holds the lights. Get this layer right and everything on top looks better. Get it wrong — too short, too thin, too flat — and the whole mantel feels unfinished."
          },
          {
            "t": "h3",
            "text": "How much garland do you need for a mantle?"
          },
          {
            "t": "p",
            "text": "Measure the mantel first, then buy garland at least 1.5 times that length. A 6-foot mantel needs a 9-foot garland so it can drape and swag instead of stretching flat. If it still looks thin, layer a second one on top — a plain 6-foot faux garland costs about $12 to $18 and doubles the fullness. Fluff each branch tip outward before you hang it — that one step makes a $15 garland look like a $40 one."
          },
          {
            "items": [
              "6-foot mantel: one 9-foot garland, or a 6-foot plus a 6-foot layered on top.",
              "8-foot mantel: a 12-foot garland, or two 9-foot garlands overlapped in the middle.",
              "Fresh cedar or pine: smells wonderful, lasts about 2 weeks indoors, around $25 to $40 for 6 feet.",
              "Faux Norfolk pine or spruce: the fullest look, reusable for years, $20 to $60 for 9 feet."
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Fresh, faux or a mix?"
          },
          {
            "t": "p",
            "text": "Faux garland is the safe pick for most homes — no needles on the floor, no watering, and you can hang it the day after Thanksgiving and leave it up till New Year. Fresh garland wins on scent, so a lot of people do both: faux as the full base, then one fresh cedar sprig tucked along the top for the smell. Mist fresh garland lightly every two or three days and keep it away from the firebox heat."
          }
        ],
        "heading": "Start With the Garland: Christmas Mantle Garland Styles That Work"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Stockings are the part everyone remembers, and they're also the part that goes wrong most often. They slide off, they bunch together, they pull the garland down. The fix is boring but it works: proper holders, real spacing, and the heavy stockings where the mantel is strongest."
          },
          {
            "t": "h3",
            "text": "Stocking holders that hold real weight"
          },
          {
            "items": [
              "Weighted cast-iron or resin holders: hold 2 to 3 pounds each, about $8 to $15 apiece, and they look like decor themselves.",
              "Command-style hooks rated for 3 pounds: fine for light stockings, but test one overnight before you trust it with gifts inside.",
              "Skip tape, putty and suction cups on a mantel — heat from the fire and the weight of a filled stocking pull them off by Christmas morning.",
              "One holder per stocking, always. Sharing a holder is how two stockings end up on the floor."
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Hang them so they look good, not just so they stay up"
          },
          {
            "items": [
              "Space the holders 8 to 10 inches apart so each stocking hangs free.",
              "Hang the tallest stocking in the centre and step the heights down toward the ends.",
              "Let the stockings hang in front of the garland, not buried behind it.",
              "Stuff the toes lightly with tissue paper so flat stockings hold their shape all season.",
              "If you have more stockings than mantel, hang two or three on the front edge and line the rest along the hearth below."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "One small thing that makes a big difference: match the stockings to each other in style, even if the colours differ. Four knit stockings in different colours look planned. Four random stockings in four random styles look like a lost-and-found box."
          }
        ],
        "heading": "Christmas Stockings on the Mantle: Hanging Them So They Stay Put"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Once the garland and stockings are up, the mantel still needs glow. Lights and candles are what turn a nice display into the thing everyone gathers around after dinner. The trick is warm light only, and heights that step up and down instead of sitting in one flat line."
          },
          {
            "t": "h3",
            "text": "Warm white beats cool white every time"
          },
          {
            "items": [
              "Fairy lights in warm white (2700K): one 20-foot strand with 100 lights is enough for a 6-foot mantel — weave it through the garland, not on top of it.",
              "Battery fairy lights with a timer: set them for 6 hours on, 18 off, and you never have to remember them. A strand costs $5 to $8.",
              "LED flameless candles: the safe choice if you have kids or pets. A set of three pillar candles runs $12 to $20 and the flicker looks real from across the room.",
              "Real taper candles in brass holders: lovely for Christmas Eve dinner, but never leave them burning in another room."
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "The rule of three heights"
          },
          {
            "t": "p",
            "text": "Put something tall at each end of the mantel — candlesticks, a small tree, a tall vase — then let the middle sit lower. Your eye reads that shape as calm and finished. If everything on the shelf is the same height, the mantel looks like a shop counter. Leave a little breathing room between groups: empty space is part of the look, not a gap you forgot to fill."
          }
        ],
        "heading": "Layer Lights, Candles and Height on Your Mantel"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Not every fireplace is a grand one, and the styling has to fit the shelf you've actually got. A narrow apartment mantel and a wide stone fireplace need opposite approaches — one needs restraint, the other needs filling."
          },
          {
            "t": "h3",
            "text": "Fireplace styling for small mantles"
          },
          {
            "items": [
              "One slim garland, two or three stockings, and a pair of tall candlesticks at one end. That's the whole setup — don't add more.",
              "Go up, not out: a mirror or framed print above the centre pulls the eye up and makes the fireplace feel bigger.",
              "Use fairy lights inside the garland for glow — they take up zero shelf space.",
              "Skip wide signs and big wreaths on a small mantel; they crowd the shelf and hide the stockings."
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Fireplace styling for big mantles"
          },
          {
            "t": "p",
            "text": "A wide mantel swallows small decor, so think in groups. Anchor the centre with one strong piece — a large mirror, a framed winter print, or a wide wreath — then build a cluster at each end: candlesticks plus a small tree on one side, a lantern plus stacked books on the other. If the mantel is over 8 feet wide, a second garland layered underneath the first is what makes it look full instead of stretched thin."
          }
        ],
        "heading": "Fireplace Styling Ideas for Small Mantles and Big Ones"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "A beautiful mantel doesn't have to cost much. Most of the pieces that make the biggest difference are the cheapest ones — garland, lights and ribbon — and the rest can come from around the house."
          },
          {
            "t": "h3",
            "text": "The $50 Christmas mantle shopping list"
          },
          {
            "items": [
              "9-foot faux evergreen garland: $15 to $20 at a craft store or dollar shop.",
              "20-foot warm-white fairy lights, battery with timer: $6.",
              "Two wired ribbon rolls (2.5 inches wide, 9 feet each): $8 total — weave one through the garland, use the other for bows.",
              "Three LED flameless pillar candles: $12.",
              "Bag of pinecones or dried orange slices: $4, or free from the garden and the fruit bowl.",
              "Total: about $45 to $50, and the garland, lights and candles all come back out next year."
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Free swaps from around the house"
          },
          {
            "items": [
              "Books you already own: stack two or three under a candle to add height for free.",
              "A mirror or framed print from another room: hang it above the centre for a week and put it back in January.",
              "Glass jars with a tea light inside: instant lanterns, and they look lovely through the garland.",
              "Last year's ribbon and ornaments: a few small baubles tucked into the garland fill gaps better than anything you can buy."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "One money tip: buy the garland and lights the week before Christmas, when craft stores cut seasonal decor by 40 to 50 percent. The mantel goes up a little late, but the same $50 buys nearly twice as much."
          }
        ],
        "heading": "Christmas Mantle Decor Ideas on a Budget"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Guests are coming in an hour and the mantel still looks bare? Don't start over. A fast refresh fixes the most common problems — flat garland, dark corners, and a shelf that looks half-finished — in about thirty minutes."
          },
          {
            "t": "h3",
            "text": "A quick refresh when guests are coming"
          },
          {
            "items": [
              "Fluff the garland: pull each branch tip outward for five minutes. It looks twice as full.",
              "Add light: tuck a fairy-light strand into the garland and switch on the candles. Glow covers a lot.",
              "Fix the spacing: slide the stockings 8 inches apart and straighten the holders.",
              "Add one tall thing at each end — candlesticks, a vase with branches, even a tall jar.",
              "Step back to the sofa and look. If one side feels heavier, move one small piece to the other side and stop."
            ],
            "t": "ol"
          },
          {
            "t": "h3",
            "text": "Pack it away so next year is easy"
          },
          {
            "items": [
              "Take a photo of the finished mantel before you take it down — it's your map for next December.",
              "Wrap the garland loosely in a bin bag, not tight in a box, so the branches keep their shape.",
              "Put the stocking holders, ribbon and lights in one labelled box together.",
              "Store candles upright, away from heat, so they don't bend or melt into each other."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "That's the whole job. A mantel doesn't need to be perfect — it needs to feel warm when the lights are low and the stockings are full. Get the garland, the stockings and the glow right, and the room does the rest."
          }
        ],
        "heading": "The 30-Minute Mantle Refresh and Easy After-Christmas Storage"
      }
    ],
    "faqs": [
      {
        "a": "The looks getting the most saves this year are full evergreen garland with warm fairy lights, classic red and green with plaid ribbon, and soft white-and-gold with bottle-brush trees. What ties them together is layering: garland first, then stockings, then lights and a few taller pieces at the ends. Pick one colour story and stick to it, and the whole thing reads calm instead of cluttered.",
        "q": "What are the best Christmas mantle decor ideas for 2026?"
      },
      {
        "a": "Use proper stocking holders, not tape or sticky hooks. A good cast-iron or weighted holder handles 2 to 3 pounds, which covers a filled stocking. Space the holders 8 to 10 inches apart so the stockings don't bunch, and hang the heaviest stocking nearest the centre where the mantel is strongest.",
        "q": "How do I hang stockings on a Christmas mantle without damaging it?"
      },
      {
        "a": "Measure the mantel, then buy garland at least 1.5 times that length so it can drape and swag instead of lying flat. A 6-foot mantel needs a 9-foot garland, and a second 6-foot garland layered on top makes it look twice as full for about $15 more.",
        "q": "How much garland do I need for a Christmas mantle?"
      },
      {
        "a": "Keep it simple and go vertical. One slim garland, two or three stockings, a pair of tall candlesticks at one end and a small framed print or mirror above the centre is plenty. Skip the wide swags and big signs — they eat up the little shelf space you have. A string of warm fairy lights tucked into the garland adds glow without taking up a single inch of shelf.",
        "q": "What Christmas mantle decor ideas work for a small fireplace?"
      }
    ],
    "hero": {
      "alt": "A decorated Christmas mantel with full evergreen garland, warm fairy lights, red stockings and brass candlesticks glowing in a cozy living room",
      "src": "/img/a27-hero"
    },
    "images": [
      {
        "after": 2,
        "img": {
          "alt": "Close-up of red and cream knit Christmas stockings hanging from brass holders on a mantel dressed with evergreen garland and warm fairy lights",
          "caption": "Weighted holders and a little spacing are the whole trick — the stockings hang straight and stay put all season.",
          "src": "/img/a27-a"
        }
      },
      {
        "after": 4,
        "img": {
          "alt": "A styled Christmas fireplace mantel with tall brass candlesticks, a framed winter print, evergreen garland and soft candlelight",
          "caption": "Tall pieces at the ends, one calm focal point in the middle — that's the shape that works on nearly every mantel.",
          "src": "/img/a27-b"
        }
      }
    ]
  }),
  P({
    "bannerTitle": "Mini Christmas Gift Baskets",
    "category": "diy-crafts",
    "date": "2026-11-25",
    "excerpt": "Mini Christmas gift baskets are the sweetest way to say thanks this December — a little wicker basket, some tissue paper and a handful of small treats turn into a gift that looks like it came from a fancy shop. Here is the four-step method we use, plus the filling ideas that make each basket feel personal.",
    "faqs": [
      {
        "a": "About $8 to $15 per basket, if you shop smart. Mini wicker baskets cost $2 to $4 at craft stores and dollar shops, and tissue paper, kraft filler and ribbon are cheap in bulk. The treats inside are the wild card — a few wrapped chocolates, a small candle or a packet of cocoa keep the cost down, and buying the filler and ribbon for a whole batch at once brings the per-basket price down fast.",
        "q": "How much do mini Christmas gift baskets cost to make?"
      },
      {
        "a": "Think small, useful and sweet. Wrapped chocolates, a mini candle, a packet of hot cocoa, a small jar of jam, a lip balm, a pair of cosy socks or a little ornament all fit nicely. For coworkers, keep it to treats and one small useful item — nothing too personal. For close friends, add something that nods to an inside joke or a shared memory.",
        "q": "What should I put in mini Christmas gift baskets for coworkers?"
      },
      {
        "a": "Yes — they are one of the best last-minute gifts we know. Once you have the baskets and filler on hand, one basket takes about fifteen minutes to fill and finish. Make the filler base and cut the ribbon in advance, then you can put a basket together the same morning you need it. Keep a small stash of wrapped treats in a cupboard through December and you will never be caught out.",
        "q": "Can I make mini Christmas gift baskets at the last minute?"
      },
      {
        "a": "Keep them somewhere cool and dry, out of direct sun. Chocolate and cookies go soft in a warm room, so a hallway shelf or a cool cupboard beats a spot by the radiator. If you made them more than a day ahead, slip the finished basket into a cellophane bag and tie it shut — it keeps the tissue crisp and the treats fresh until you hand it over.",
        "q": "How do I store mini Christmas gift baskets before giving them away?"
      }
    ],
    "from": "#4E8FB8",
    "hero": {
      "alt": "Three small handmade Christmas gift baskets filled with wrapped mini presents, treats, tissue paper and ribbon in cream and red festive styling",
      "src": "/img/a26-hero"
    },
    "images": [
      {
        "after": 3,
        "img": {
          "alt": "Two handmade mini Christmas gift baskets filled with wrapped presents, dried orange slices, pinecones and red ribbon in bright natural light",
          "caption": "Two baskets filled and ready — the mix of heights is what makes each one look full and generous.",
          "src": "/img/a26-a"
        }
      },
      {
        "after": 5,
        "img": {
          "alt": "Close-up of one finished mini Christmas gift basket with a big red ribbon bow, kraft gift tag, wrapped treats and evergreen sprigs",
          "caption": "The finished basket, ribbon tied and tag attached — fifteen minutes of work, and it looks shop-bought.",
          "src": "/img/a26-b"
        }
      }
    ],
    "intro": "Mini Christmas gift baskets are the sweetest way to say thanks this December. A little wicker basket, some tissue paper and a handful of small treats turn into a gift that looks like it came from a fancy shop — and it costs a fraction of what a store-bought hamper does. We make a batch every year for neighbours, coworkers, teachers and hosts. Below are the exact materials, the four steps, and the filling ideas that make each basket feel personal.",
    "motif": "snow",
    "readTime": 8,
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "A mini Christmas gift basket works because it feels generous without being big. The basket itself is part of the gift — it holds everything together, and the person you give it to can reuse it long after the treats are gone. The tissue and kraft filler do the quiet work: they lift the gifts up, hide the empty space at the bottom, and make a few small items look like a full, overflowing basket."
          },
          {
            "t": "h3",
            "text": "Why small baskets beat big hampers"
          },
          {
            "t": "p",
            "text": "Big hampers cost a lot and often end up half full of filler you did not want. A mini basket flips that around: you pick three or four good things, arrange them so each one shows, and the basket looks full because it is full. It suits almost anyone — a coworker, a neighbour, a teacher, a host — because it is thoughtful without being over the top."
          },
          {
            "items": [
              "Cost: about $8 to $15 per basket, and less when you buy ribbon and filler in bulk",
              "Time: around fifteen minutes per basket once your supplies are laid out",
              "Skill level: if you can fold tissue paper and tie a bow, you can make these",
              "Supplies: baskets, tissue paper, kraft filler, ribbon, tags and scissors — most of it lasts for years",
              "Personal: you choose every item inside, so no two baskets need to be the same"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "One more reason we love this project: it scales. One basket is a sweet thank-you for a host, and ten cover the whole office, the neighbours and the kids' teachers in one afternoon. Make them in a batch — the second basket always comes together faster than the first."
          }
        ],
        "heading": "Why Mini Christmas Gift Baskets Work So Well"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Keep the supply list short. You can start with one shop run, and most of what you buy — the ribbon, the tags, the filler — will last for next year too. Buy the baskets first, then match the tissue and ribbon to them."
          },
          {
            "t": "h3",
            "text": "What you need for mini Christmas gift baskets"
          },
          {
            "items": [
              "Mini wicker baskets — about 15 to 20 cm across, with a handle",
              "Tissue paper — cream and red, or any two colours that sit well together",
              "Kraft crinkle filler — the shredded paper that gives the basket its base and lift",
              "Small wrapped treats or gifts — chocolates, a mini candle, cocoa, jam, a small ornament",
              "Ribbon — satin or grosgrain in red, cream or gold",
              "Gift tags and scissors — plain kraft tags look best, and sharp scissors cut ribbon cleanly"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Wicker is the classic, but small wooden crates, metal tins and sturdy cardboard gift boxes work just as well. The key is the size — it should hold three or four small items snugly, with no big gaps. If the basket is too deep, add an extra handful of filler at the bottom so the gifts sit high enough to be seen."
          },
          {
            "t": "h3",
            "text": "Picking treats that fit the person"
          },
          {
            "t": "p",
            "text": "The treats are where the basket turns personal. For a coworker, pick safe favourites: wrapped chocolates, a nice tea or cocoa, and a small candle. For a close friend, add something only they would love — a jam you made, a packet of their favourite biscuits, or a tiny ornament that matches their tree. For a host, add a small bottle of something festive or a packet of good coffee. Keep each item small: the basket is mini, and a tall item will topple the whole arrangement."
          }
        ],
        "heading": "What You Need"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Every basket starts the same way: a soft bed of tissue paper. It lines the basket so the wicker does not snag anything, and it gives the basket its colour. Take your time here: a tidy lining is the difference between a basket that looks thrown together and one that looks shop-bought."
          },
          {
            "t": "h3",
            "text": "Lining the basket with tissue paper"
          },
          {
            "items": [
              "Lay two sheets of tissue paper flat, one on top of the other, and pinch the centre.",
              "Push the pinched centre down into the basket so the paper billows up around the sides.",
              "Let the edges flop over the rim — about 5 cm of tissue showing above the basket looks best.",
              "Tuck the tissue into the corners so it sits evenly, with no bare wicker showing inside.",
              "If you are using two colours, put the lighter one on top so it catches the light."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "If the tissue tears, do not worry — a small tear disappears under the filler and the gifts. If the paper looks too puffy, press the centre down gently with your palm. The lining should look soft and full, not flat and not exploding out of the basket."
          }
        ],
        "heading": "Step 1: Line the Basket With Tissue Paper"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Kraft filler is the quiet hero of this project. A handful of crinkled paper lifts the gifts up to the rim, stops them sliding around, and hides the empty space at the bottom. Without it, small gifts sink out of sight and the basket looks half empty."
          },
          {
            "t": "h3",
            "text": "Adding kraft filler for a stable base"
          },
          {
            "items": [
              "Take a generous handful of kraft crinkle filler and drop it loosely into the lined basket.",
              "Press it down lightly with your palm so it forms a firm, springy bed about 5 cm deep.",
              "Add a little more at the back of the basket than the front, so the gifts tilt gently towards the viewer.",
              "Check that the filler reaches the rim — the gifts should sit on top of it, not down inside it.",
              "Keep a spare handful nearby: you will tuck small bits around the gifts in the next step."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Do not pack the filler down hard. It should spring back when you press it, like a soft nest. Too flat and the gifts will sink; too loose and they will wobble. One firm press with your palm is usually enough, and you can add a pinch more around the edges once the gifts are in."
          }
        ],
        "heading": "Step 2: Add Kraft Filler for a Stable Base"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Now comes the fun part. Arrange the gifts so each one can be seen, with the tallest at the back and the smallest at the front. Vary the heights, mix the shapes, and leave no big gaps — a basket where every item shows is a basket that looks generous."
          },
          {
            "t": "h3",
            "text": "Arranging gifts at varied heights"
          },
          {
            "items": [
              "Place the tallest item at the back of the basket, leaning gently against the rim.",
              "Add the next tallest item beside it, slightly forward, so the two overlap a little.",
              "Set the smallest treats at the front, where they are easy to see and easy to reach.",
              "Tuck small bits of kraft filler into any gaps, so nothing slides when the basket is carried.",
              "Step back and look: if one side looks empty, move a treat over or add a small extra."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Three or four items per basket is the sweet spot: one taller gift, one or two medium ones, and a small sweet treat at the front. More than that and the basket looks crowded; fewer and it looks sparse. If an item keeps falling over, nestle it deeper into the filler or lean it against a sturdier neighbour."
          }
        ],
        "heading": "Step 3: Arrange the Gifts in Your Mini Christmas Gift Basket"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "The ribbon is the finishing touch that makes the basket look like a gift instead of a shopping basket. Tie it around the handle so it frames the basket, then attach the tag. A neat bow takes thirty seconds, and it is the first thing the person you give it to will notice."
          },
          {
            "t": "h3",
            "text": "Tying the ribbon and attaching the gift tag"
          },
          {
            "items": [
              "Cut about a metre of ribbon and wrap it once around the basket handle, or around the whole basket just under the rim.",
              "Tie a simple bow and pull the loops even — trim the tails at an angle so they do not fray.",
              "Thread a gift tag onto one tail of the ribbon before you tie the final knot, or tie the tag on with a short piece of twine.",
              "Write the tag by hand — a name and one short line is all it needs.",
              "Tuck a small sprig of evergreen or a cinnamon stick under the bow for a festive touch."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "If the bow looks lopsided, untie it and start again rather than tugging at the loops — ribbon remembers a bad crease, and a fresh bow always looks better. Satin ties the neatest bows, while grosgrain holds its shape longer if the basket will sit on a shelf for a few days."
          }
        ],
        "heading": "Step 4: Tie the Ribbon and Add the Gift Tag"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "A finished mini Christmas gift basket suits almost any spot in the house. We line ours up on the hallway table in December, ready to grab on the way out the door, and they look just as good under the tree. They also make sweet centrepieces: three baskets down the middle of a table, with a few evergreen sprigs between them, dress up a whole Christmas dinner."
          },
          {
            "t": "h3",
            "text": "Styling mini Christmas gift baskets around the house"
          },
          {
            "items": [
              "On a hallway table: two or three baskets in a row, ready to hand out",
              "Under the tree: baskets tucked between presents, ribbon facing out",
              "On a dining table: one basket per place setting, with a name tag instead of a place card",
              "As a centrepiece: three baskets down the middle of the table with evergreen sprigs between them",
              "On a mantel: a single basket beside a candle and a few pinecones, for a quiet festive touch"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Care, storage and easy variations"
          },
          {
            "t": "p",
            "text": "Mini Christmas gift baskets keep well somewhere cool and dry. Chocolate and cookies go soft in a warm room, so a hallway shelf or a cool cupboard beats a spot by the radiator. If you made them more than a day ahead, slip each one into a cellophane bag and tie it shut — it keeps the tissue crisp and the treats fresh."
          },
          {
            "t": "p",
            "text": "For variations, swap the wicker for a small tin or a wooden crate, or match the ribbon to the person's favourite colour. A kid-friendly basket works well too: a small toy, a packet of cocoa and a candy cane, with the kids tying their own bows — wonky, and somehow better for it. Or make a themed batch: cocoa and cookies for the neighbours, candles and jam for the teachers, all chocolate for the office."
          }
        ],
        "heading": "Styling, Care and Easy Variations for Mini Christmas Gift Baskets"
      }
    ],
    "slug": "mini-christmas-gift-baskets",
    "subcategory": "Handmade Gifts",
    "title": "Mini Christmas Gift Baskets: Cute DIY Gift Baskets for Friends, Coworkers and Hosts",
    "to": "#275E7E",
    "video": "mini-christmas-gift-baskets"
  }),
  P({
  "bannerTitle": "Cozy Christmas Movie Nights",
  "category": "seasonal-living",
  "date": "2026-11-24",
  "excerpt": "Christmas movie night ideas for the whole family — blanket forts, a hot chocolate bar, popcorn three ways and bingo cards that turn film night into an event.",
  "faqs": [
    {
      "a": "Start with the film, then build the night around it. A blanket fort with fairy lights, a small hot chocolate bar, popcorn in two or three flavours and one game — bingo or trivia — is enough. Pick the film by vote before anyone sits down, start by 7 pm so the film ends by 10, and keep the snack table within arm's reach of the sofa.",
      "q": "What are the best Christmas movie night ideas for families?"
    },
    {
      "a": "Popcorn, hot chocolate and cookies cover almost everyone. Add one snack matched to the film — green punch for the Grinch, spaghetti and maple syrup jokes for Elf night, candy canes for a Polar Express night. Keep portions small and the table simple: two bowls, one tray of toppings, one jug of cocoa.",
      "q": "What snacks go with a Christmas movie night?"
    },
    {
      "a": "Pick the film first, then set up in this order: move the coffee table aside, lay out blankets and cushions, string fairy lights along the sofa, set the snack table, and dim the lamps. The whole setup takes 20 to 30 minutes. A blanket fort is the one extra that makes kids remember the night.",
      "q": "How do I plan Christmas movie night ideas at home?"
    },
    {
      "a": "Start with the ones everyone quotes: Home Alone, Elf, The Polar Express and It's a Wonderful Life. For kids, add A Charlie Brown Christmas and Rudolph. For a second night, try Love Actually, The Holiday or National Lampoon's Christmas Vacation. One film a night from 1 December carries you right to Christmas Eve.",
      "q": "What Christmas movies should I watch first?"
    }
  ],
  "from": "#7FA653",
  "hero": {
    "alt": "Couple lying under blankets watching a Christmas film projected on the wall beside a lit tree and fairy lights",
    "src": "/img/a25-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "Red Christmas mug filled with hot chocolate, marshmallows and a candy cane beside snowy miniature trees",
        "caption": "The hot chocolate bar in one mug — marshmallows, a candy cane and a red Christmas mug do all the work.",
        "src": "/img/a25-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "Couple watching Home Alone projected on the wall next to a decorated Christmas tree",
        "caption": "A projector turns the wall into a cinema — Home Alone on the big wall, tree lights glowing beside it.",
        "src": "/img/a25-b"
      }
    },
    {
      "after": 6,
      "img": {
        "alt": "Couple cuddled under knit blankets watching a film by warm fairy lights",
        "caption": "The wind-down: two people, one blanket, fairy lights still on — the cheapest date night of December.",
        "src": "/img/a25-c"
      }
    }
  ],
  "intro": "Christmas movie night ideas are the easiest win of December. The shopping is done, the lights are up, and all that's left is piling onto the sofa with blankets, hot chocolate and a film everyone actually agrees on. We've run movie nights in our living room for years, and the ones people remember aren't the fancy ones — they're the nights with a blanket fort, a mug of cocoa and a game to play along. This guide covers the whole thing: picking the film without a 20-minute argument, building a fort, setting up a hot chocolate bar and a popcorn spread, and winding down so the kids actually go to bed happy.",
  "motif": "leaf",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Every good movie night starts before anyone sits down. The film is picked, the start time is fixed, and the snacks are ready — so the evening feels like an event, not just the TV being on. The best Christmas movie night ideas share one rule: decide the film first, then build everything else around it."
        },
        {
          "t": "h3",
          "text": "The three-film vote that ends the argument"
        },
        {
          "t": "p",
          "text": "Nobody agrees on a film at 7 pm on the sofa. We vote during dinner instead: three options on the table, everyone picks one, and the winner runs. Kids get one vote each, grown-ups get one vote each, and the person who cooked gets the tie-breaker. It takes two minutes and it works — the film starts on time and nobody sulks through the first half hour."
        },
        {
          "t": "h3",
          "text": "Match the film to the night you have"
        },
        {
          "t": "p",
          "text": "A school night wants a short, gentle film — A Charlie Brown Christmas is 25 minutes and Rudolph is under an hour. A Friday night can carry a full marathon: one classic, one comedy and one animated favourite, in that order. For couples after bedtime, The Holiday or Love Actually beats a kids' film every time."
        },
        {
          "items": [
            "School night: A Charlie Brown Christmas (25 minutes) or Rudolph (47 minutes)",
            "Family Friday: Home Alone, then Elf, then The Polar Express",
            "Date night for two: The Holiday, Love Actually or Last Christmas",
            "Teen night: Die Hard or Gremlins — yes, both count as Christmas films",
            "Christmas Eve itself: It's a Wonderful Life, always, no vote needed"
          ],
          "t": "ul"
        }
      ],
      "heading": "Christmas Movie Night Ideas That Work for Every Kind of Evening"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A blanket fort turns the living room into a cinema in about ten minutes. Kids love it, grown-ups secretly love it, and it costs nothing if you already own two chairs and a spare sheet."
        },
        {
          "t": "h3",
          "text": "What you need for the fort"
        },
        {
          "t": "p",
          "text": "Two dining chairs set a metre apart, one big sheet or two flat bedsheets, and a string of warm-white fairy lights. Drape the sheet over the chair backs and tuck the edges under the seat cushions so it stays put. Run the lights along the inside of the roof — not outside — so the fort glows softly from within."
        },
        {
          "items": [
            "Two sturdy dining chairs, backs facing each other, about a metre apart",
            "One large sheet or two flat bedsheets for the roof and walls",
            "One string of warm-white fairy lights (battery pack is easiest)",
            "Four cushions and two folded blankets for the floor",
            "A small tray for mugs — spills on the sheet are the one thing to avoid"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Keep the fort close to the screen"
        },
        {
          "t": "p",
          "text": "Build the fort facing the TV, not sideways — necks get sore fast when kids twist to watch. Leave one side open so the room's warm air gets in, and keep the fort small: a fort that fits two kids and one adult feels snug. After the film, the fort comes down in two minutes and the sheet goes straight back on the bed."
        }
      ],
      "heading": "Build a Blanket Fort Cinema in Ten Minutes"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A hot chocolate bar is the centrepiece of a Christmas movie night. It's a small table, a slow cooker or a big jug, and a tray of toppings — and it makes the whole evening smell like December. Set it up before the film starts so nobody misses the opening scene queuing in the kitchen."
        },
        {
          "t": "h3",
          "text": "The hot chocolate bar checklist"
        },
        {
          "items": [
            "One big jug or slow cooker of cocoa, kept warm on low",
            "Mugs — one per person, plus two spares for seconds",
            "Toppings in small bowls: mini marshmallows, whipped cream, candy canes, chocolate chips",
            "A shaker of cinnamon and a pinch of sea salt for the grown-ups' mugs",
            "A ladle and a tea towel — cocoa drips, and the tray catches them"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Cocoa that actually tastes good"
        },
        {
          "t": "p",
          "text": "Skip the instant sachets for movie night. Warm 1 litre of whole milk in a pan until it steams — about 5 minutes on medium heat, never boiling. Whisk in 4 tablespoons of cocoa powder and 3 tablespoons of sugar, then stir in 50 grams of dark chocolate until it melts. That's four generous mugs, ready in ten minutes."
        },
        {
          "t": "p",
          "text": "For a Polar Express night, serve it in red mugs with a candy cane in each one. For a Grinch night, add a drop of green food colouring to the whipped cream. Small touches like that cost nothing and the kids talk about them for a week."
        }
      ],
      "heading": "Set Up a Hot Chocolate Bar Before the Film Starts"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Popcorn is the one snack every Christmas movie night needs, and three flavours beat one big bowl. Pop about 100 grams of kernels — roughly 10 cups — then split it into three bowls and season each one differently. It takes five extra minutes and it feels like a proper snack bar."
        },
        {
          "t": "h3",
          "text": "Popcorn three ways"
        },
        {
          "items": [
            "Classic buttered: melt 2 tablespoons of butter, drizzle over the warm popcorn, toss with a pinch of fine salt",
            "Cinnamon sugar: toss with 2 tablespoons of sugar mixed with 1 teaspoon of cinnamon while the popcorn is still warm",
            "White chocolate peppermint: drizzle 100 grams of melted white chocolate over the popcorn, then crush two candy canes on top and let it set for 5 minutes"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Match one snack to the film"
        },
        {
          "t": "p",
          "text": "Themed snacks are where Christmas movie night ideas get fun. Elf night gets spaghetti and meatballs on the table — we let the kids laugh about the syrup. Grinch night gets green punch: lemon-lime soda with a scoop of lime sherbet. A Polar Express night gets golden tickets tucked under each mug."
        },
        {
          "items": [
            "Elf: spaghetti and meatballs, plus a bowl of candy for Buddy's four food groups",
            "The Grinch: green punch and heart-shaped cookies (his heart grows three sizes)",
            "Home Alone: cheese pizza, obviously — order it in, no shame",
            "The Polar Express: hot cocoa in red mugs and golden paper tickets",
            "It's a Wonderful Life: gingerbread cookies and a pot of tea for the grown-ups"
          ],
          "t": "ul"
        }
      ],
      "heading": "Popcorn Three Ways and Snacks Matched to the Film"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A game to play along with the film is what stops the phones coming out. Christmas movie bingo is the easiest one: five squares across, five down, and everyone marks a square when it happens on screen. Print one card per person before the film — it takes two minutes and it keeps even the teenagers watching."
        },
        {
          "t": "h3",
          "text": "Christmas movie bingo cards that work for any film"
        },
        {
          "items": [
            "Someone says 'Merry Christmas' — the free square in the middle",
            "A snowball fight, a snowman or snow falling on screen",
            "Someone opens a present and it's the wrong size",
            "A Christmas song starts playing in a shop or a car",
            "A dog, a cat or a reindeer steals the scene",
            "Someone burns the dinner or drops the tree",
            "The whole family ends up in one room at the end"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Five trivia questions before the credits roll"
        },
        {
          "t": "p",
          "text": "Run five quick questions before the film starts — who directed it, which year it came out, one famous quote, the name of the main character's dog. The winner picks the next film night's movie. It takes three minutes, and the kids love beating the grown-ups at it. Keep score on a scrap of paper stuck to the fridge — after four film nights, the person with the most wins chooses the Christmas Eve film."
        }
      ],
      "heading": "Christmas Movie Night Ideas for Game Night: Bingo and Trivia to Play Along"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The pajama dress code is the simplest upgrade to a Christmas movie night. Everyone changes into pajamas before the film, matching sets optional, and the whole evening drops a gear. It works for kids, it works for couples, and it makes the photos better too."
        },
        {
          "t": "h3",
          "text": "A 24-night advent movie countdown"
        },
        {
          "t": "p",
          "text": "If one night a week isn't enough, run a countdown: one Christmas film a night from 1 December to Christmas Eve, crossing each one off a paper list on the fridge. Keep weeknights short and save the long films for Fridays and Saturdays."
        },
        {
          "items": [
            "Week 1: A Charlie Brown Christmas, Rudolph, The Santa Clause, Arthur Christmas, Klaus, The Nightmare Before Christmas, Elf",
            "Week 2: Home Alone, The Polar Express, The Muppet Christmas Carol, Jingle Jangle, The Grinch (2000), Love Actually, The Holiday",
            "Week 3: Miracle on 34th Street, A Christmas Story, National Lampoon's Christmas Vacation, The Family Stone, Gremlins, The Santa Clause 2, Home Alone 2",
            "Final nights: Die Hard, then It's a Wonderful Life on Christmas Eve"
          ],
          "t": "ol"
        },
        {
          "t": "h3",
          "text": "Matching pajamas, optional but worth it"
        },
        {
          "t": "p",
          "text": "Matching family pajamas run about $15 to $25 a set at Target or Primark, and one set lasts the whole season. If matching sets feel like too much, one rule is enough: everyone in pajamas, no jeans on the sofa."
        }
      ],
      "heading": "The Pajama Dress Code and a 24-Night Advent Countdown"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The end of the night matters as much as the start. A good wind-down sends the kids to bed happy instead of wired, and it gives the grown-ups twenty quiet minutes with the last of the cocoa. Plan the ending when you plan the film — it's the part most people forget."
        },
        {
          "t": "h3",
          "text": "The wind-down that gets kids to bed"
        },
        {
          "items": [
            "Film ends by 9:30 on a school night, 10 on a Friday",
            "Fairy lights off, one last cookie each",
            "Kids pick tomorrow's breakfast before they head upstairs",
            "Fort comes down in two minutes, sheet straight back on the bed"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "When the credits roll, hand out one last cookie each and let the kids pick tomorrow's breakfast — Christmas pancakes with a raspberry nose are the usual winner in our house. The film ends, the fort comes down, and bedtime feels like part of the night, not the end of it."
        },
        {
          "t": "h3",
          "text": "Movie night for two, after bedtime"
        },
        {
          "t": "p",
          "text": "Once the kids are asleep, the same setup works for two. Two mugs, one blanket, the fairy lights still on, and a film the kids would never sit through. Keep the snack table small — one bowl of popcorn, two mugs of cocoa, and the rest of the cookies. It's the cheapest date night of December, and honestly one of the best."
        },
        {
          "t": "p",
          "text": "Christmas movie night ideas don't need a big budget or a big living room. A fort, a jug of cocoa, three bowls of popcorn and a film everyone voted for — that's the whole recipe. Pick your first film tonight, and by Christmas Eve you'll have a tradition the kids ask for every year."
        }
      ],
      "heading": "The Cozy Wind-Down and Movie Night for Two"
    }
  ],
  "slug": "christmas-movie-night-ideas",
  "subcategory": "Winter Ideas",
  "title": "Christmas Movie Night Ideas 2026: Cozy Blanket Forts, Hot Chocolate Bars & Family Films for December Nights",
  "to": "#46682F"
}),
  P({
  "bannerTitle": "Christmas Party Outfit Ideas",
  "category": "lifestyle",
  "date": "2026-11-24",
  "excerpt": "Christmas party outfit ideas for every invite — velvet blazers, sequin skirts, satin slip dresses and cozy knit looks, most under $60, with makeup to match.",
  "faqs": [
    {
      "a": "Match the outfit to the invite. A velvet blazer with tailored trousers fits an office party, a satin slip dress suits dinner with friends, and a knit dress works for Christmas Eve at home. For New Year's Eve, go bolder — sequins, metallics or a jewel-tone dress. One velvet blazer or one sequin skirt can cover two or three nights with different tops and shoes.",
      "q": "What are the best Christmas party outfit ideas?"
    },
    {
      "a": "Burgundy, emerald green and classic red lead the list for 2026, with black always a safe pick. Champagne, chocolate brown and midnight blue are the softer choices if red feels too loud. Pick one strong colour and keep the rest of the outfit plain — a burgundy dress with gold hoops, or an emerald velvet blazer with black trousers.",
      "q": "What colours work best in Christmas party outfit ideas?"
    },
    {
      "a": "Yes, if the party is casual — a house party or drinks with friends. Go dark: black or deep indigo jeans with no rips, plus a sequin top or a velvet blazer and heeled boots. Skip jeans for office parties, formal dinners and anywhere the invite says cocktail or black tie.",
      "q": "Can I wear jeans to a Christmas party?"
    },
    {
      "a": "Block heels and heeled ankle boots are the most practical — you can stand in them for hours. Pointed flats in gold or black work for long dinners. Save stilettos for short nights, and always pack a pair of foldable flats in your bag for the walk home.",
      "q": "What shoes go with a Christmas party outfit?"
    }
  ],
  "from": "#C4748F",
  "hero": {
    "alt": "Woman in a gold sequin dress holding a champagne glass beside a lit Christmas tree",
    "src": "/img/a24-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "Close-up of a shimmering green sequin dress beside a Christmas tree with warm fairy lights",
        "caption": "One sequin piece is enough — this green sequin dress does all the talking, with the tree lights doing the rest.",
        "src": "/img/a24-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "Woman in a red dress sitting among frosted Christmas trees with red velvet ornaments",
        "caption": "A red dress among the frosted trees — the classic Christmas Eve look, cozy enough for a whole evening at home.",
        "src": "/img/a24-b"
      }
    }
  ],
  "intro": "Christmas party outfit ideas are all over Pinterest right now — searches for Christmas outfits are up 300% this December. December is the busiest party month of the year: the office do, a dinner with friends, Christmas Eve at home, then New Year's Eve. The good news is that party dressing this season is easier than it looks. Velvet, sequins and satin do most of the work for you, and one good outfit can stretch across two or three nights with a few small swaps. This guide rounds up the looks that actually work — what to wear, what it costs, and how to finish it off — so you can stop staring at your closet at 7 pm.",
  "motif": "bloom",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Every December looks the same in my calendar: an office party on a Thursday, a dinner with friends on Saturday, Christmas Eve at home, then New Year's Eve somewhere loud. Four nights, four different dress codes — and most of us don't want to buy four new outfits. The trick is to match the outfit to the invite, not to the month. A work party, a family lunch and a cocktail night are three different jobs, and dressing for the job is what makes you look right."
        },
        {
          "t": "h3",
          "text": "The one rule that saves every party outfit"
        },
        {
          "t": "p",
          "text": "Ask one question before you pick anything: where am I going, and who will be there? If your boss is there, keep it polished. If it's your closest friends, have fun with it. If you're hosting at home, comfort wins — you'll be on your feet all night. Once you know the room, the outfit almost picks itself."
        },
        {
          "items": [
            "Office Christmas party — smart, polished, nothing too short or too sparkly",
            "Family Christmas lunch — cozy and warm, something you can sit in for three hours",
            "Dinner with friends — a little dressy, a little fun, heels optional",
            "House party or NYE — the boldest look of the season, sequins welcome",
            "Christmas Eve at home — soft knits, gold hoops, fuzzy slippers after the photos"
          ],
          "t": "ul"
        }
      ],
      "heading": "Christmas Party Outfit Ideas That Work for Every Invite"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Velvet is the most holiday fabric there is, and this year it's everywhere — blazers, dresses, trousers, even hair bows. A velvet blazer in burgundy, emerald or black is the smartest buy of the season because it works for the office party and again for dinner out. Wear it with tailored black trousers and a silk camisole, or throw it over a simple black dress and you're done."
        },
        {
          "t": "h3",
          "text": "Velvet Christmas party outfit ideas for the office party"
        },
        {
          "t": "p",
          "text": "The office party is the one night where getting it wrong actually matters. Velvet keeps you covered — literally and socially. A blazer with a camisole underneath reads polished, not stuffy, and you can take the blazer off to dance later. If blazers aren't your thing, a velvet midi dress with long sleeves does the same job in one piece."
        },
        {
          "items": [
            "Velvet blazer — $35 to $60 at Zara, H&M or Target; burgundy or emerald",
            "Tailored black trousers — the pair you already own works fine",
            "Silk or satin camisole underneath — champagne or black, $15 to $25",
            "Pointed flats or block heels — gold hoops, no necklace needed",
            "Velvet midi dress — $40 to $70, long sleeves, add ankle boots"
          ],
          "t": "ul"
        }
      ],
      "heading": "The Velvet Look: Christmas Party Outfit Ideas for the Office Party"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Sequins scare people off, and they shouldn't. The trick is one sequin piece, not three. A sequin midi skirt in silver or champagne with a soft cream sweater on top looks rich without trying too hard. A sequin top with dark jeans works for a house party. And a sequin mini dress is the easiest New Year's Eve outfit you'll ever own — it needs almost nothing else."
        },
        {
          "t": "h3",
          "text": "One sequin piece is enough"
        },
        {
          "t": "p",
          "text": "Keep everything else plain and let the sequins do the talking. A black top, simple shoes, small earrings. If the skirt sparkles, the sweater should be plain. If the top sparkles, the jeans should be dark and plain. This is the rule that keeps sequins looking expensive instead of loud."
        },
        {
          "items": [
            "Sequin midi skirt — silver or champagne, $30 to $55, pair with a cream knit",
            "Sequin top + dark jeans — the easiest house-party look there is",
            "Sequin mini dress — NYE classic, add sheer tights if it's cold",
            "Little black dress, updated — one shoulder, big gold cuff, red lip",
            "Keep the bag small and plain — a black clutch or a gold chain bag"
          ],
          "t": "ul"
        }
      ],
      "heading": "Sequin Christmas Party Outfit Ideas for a Night Out"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "A satin slip dress is one of the easiest party pieces you can own. In winter, layer it over a fitted turtleneck or throw a long wool coat on top, and it goes from a summer dress to a December dinner outfit. Champagne, deep wine, chocolate brown and midnight blue are the colours that work best right now — soft, rich, and easy to photograph by candlelight."
        },
        {
          "t": "h3",
          "text": "Satin slip dresses and what to wear over them"
        },
        {
          "t": "p",
          "text": "The layer is what makes this look work in December. A thin black turtleneck under a champagne slip dress is warm, smart and a little bit 90s. A faux fur coat over a wine-coloured slip dress is the closest thing to instant glamour. And a long camel wool coat over any of it means you can walk to the restaurant without freezing."
        },
        {
          "items": [
            "Pick the dress — slip style, midi length, $25 to $50",
            "Add a layer — black turtleneck underneath, or a faux fur coat on top",
            "Choose shoes — strappy heels for dinner, heeled boots for walking",
            "Add one shiny thing — gold hoops, a thin bracelet, or a small clutch",
            "Finish with a berry lip — it ties the whole look together in two minutes"
          ],
          "t": "ol"
        }
      ],
      "heading": "Satin Slip Dresses: Christmas Party Outfit Ideas for Dinner"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Christmas Eve at home deserves its own outfit — cozy but cute, because the photos will live on the family group chat forever. A red or green knit dress is the classic pick: a ribbed knit midi in red, forest green or cream feels warm and still looks dressed up. Add gold hoops and ankle boots, and you're set for dinner, gifts and the couch after."
        },
        {
          "t": "h3",
          "text": "Christmas Eve outfits that feel as good as they look"
        },
        {
          "t": "p",
          "text": "If a dress feels like too much for a night at home, a matching knit set in red or cream is the answer — soft, warm, and it still looks put together in photos. Keep your hair down in soft waves, add a velvet bow if you like, and keep the fuzzy slippers by the door for after the photos are done."
        },
        {
          "items": [
            "Ribbed knit midi dress — red, forest green or cream, $30 to $50",
            "Matching knit set — red or cream, cozy and photo-ready",
            "Gold hoops — the one accessory that lifts every knit look",
            "Ankle boots for dinner, fuzzy slippers for after",
            "Velvet bow in the hair — $5, and it reads very Christmas"
          ],
          "t": "ul"
        }
      ],
      "heading": "Christmas Eve Outfits for a Night at Home"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "New Year's Eve is the one night of the year when more is more. The sequin mini, the metallic co-ord, the jewel-tone gown — this is their night. Emerald green, sapphire blue and deep burgundy are the big colours for NYE 2026, and black and gold never goes wrong. If you bought one sequin piece for Christmas, this is the night to wear it again with different shoes and a different lip."
        },
        {
          "t": "h3",
          "text": "NYE outfits that carry you past midnight"
        },
        {
          "t": "p",
          "text": "Plan for the whole night, not just the photos. You'll be standing, dancing and walking home at 1 am, so block heels beat stilettos and a small crossbody bag beats a clutch you have to hold all night. Pack foldable flats in your bag — your feet will thank you, and nobody will see them in the dark."
        },
        {
          "items": [
            "Sequin mini or midi dress — NYE classic, $35 to $65",
            "Metallic co-ord set — gold or silver, dress it down with a black top",
            "Jewel-tone gown — emerald or sapphire for a formal dinner",
            "Black and gold — the combo that never misses on NYE",
            "Foldable flats in your bag — the best $10 you'll spend all night"
          ],
          "t": "ul"
        }
      ],
      "heading": "New Year's Eve Outfits: One More Night of Sparkle"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The outfit gets you most of the way there, but the small things are what make people ask where you got it. A velvet bow at the nape of your neck, a slicked-back bun with a middle part, big glossy blowout waves — hair does a lot of the work this season, and most of it takes five minutes. The same goes for makeup: glowing skin plus one focus point, either the eyes or the lips, never both fighting for attention."
        },
        {
          "t": "h3",
          "text": "Shoes, bags and the five-minute party face"
        },
        {
          "t": "p",
          "text": "Start with a hydrating base — December air is dry and party rooms are warm, so skin needs the help. Then pick your focus: a classic red lip with soft brown liner, or a soft metallic eye with a glossy nude lip. A swipe of highlighter on your cheekbones and collarbones catches the light in photos, and a small bottle of perfume in your bag keeps you fresh past midnight."
        },
        {
          "items": [
            "Block heels or heeled boots — stand in them for hours, no regrets",
            "Small bag — a black clutch or gold chain bag, hands free",
            "Velvet bow or gold hair clips — $5 to $12, instant party hair",
            "Red or berry lip — the fastest way to look dressed up",
            "Perfume in your bag — one spray before midnight, that's all"
          ],
          "t": "ul"
        }
      ],
      "heading": "Shoes, Bags & the Little Extras That Finish the Look"
    }
  ],
  "slug": "christmas-party-outfit-ideas",
  "subcategory": "Seasonal Outfits",
  "title": "Christmas Party Outfit Ideas 2026: Easy Velvet, Sequin & Satin Looks for Every Party",
  "to": "#8C4462"
}),
  P({
    "bannerTitle": "Paper Snowflakes for Windows",
    "category": "diy-crafts",
    "date": "2026-11-24",
    "excerpt": "Paper snowflakes are the cheapest winter window decor we know — a few sheets of white paper, some thread and an afternoon turn a plain window into a soft, snowy scene. Here is the folding, cutting and hanging method that works every time.",
    "faqs": [
      {
        "a": "Plain white printer paper is the best place to start — it folds crisply, cuts easily and looks bright against the glass. Lightweight cardstock makes sturdier flakes that hold their shape in a draughty window, but it is harder to cut through six folded layers, so save it for your second batch. Pale blue and silver paper also look lovely in daylight.",
        "q": "What kind of paper is best for paper snowflakes?"
      },
      {
        "a": "Use transparent thread and small removable adhesive hooks on the top of the window frame. Tie the thread through one point of the flake, vary the lengths so the flakes sit at different heights, and leave a few inches between them so they cannot tangle. The hooks come off cleanly in January and the flakes themselves weigh almost nothing, so they stay put for months.",
        "q": "How do I hang paper snowflakes so they stay up all winter?"
      },
      {
        "a": "Yes — the unfold moment is pure magic for children, and the only sharp tool is the scissors. Give younger kids blunt-tipped safety scissors and a simple pattern of triangles, and let older kids try diamonds and curves. Their flakes will come out a little wonky, and that is half the charm. An adult should handle the hanging, since the thread knots are fiddly.",
        "q": "Are paper snowflakes a good craft for kids?"
      },
      {
        "a": "Lay each flake flat between sheets of tissue paper in a large envelope or a flat box, and keep it somewhere dry. Never fold a finished flake or roll it up — the creases will not come out. Stored flat and dry, paper snowflakes last for years, and you can hang the same set again next winter.",
        "q": "How do I store paper snowflakes after Christmas?"
      }
    ],
    "from": "#4E8FB8",
    "hero": {
      "alt": "Delicate handmade white paper snowflakes hanging from transparent thread in a bright winter window with snow-covered trees outside",
      "src": "/img/a23-hero"
    },
    "images": [
      {
        "after": 3,
        "img": {
          "alt": "Handmade white paper snowflakes hanging at different heights in a bright winter window, soft daylight and falling snow outside",
          "caption": "Paper snowflakes at different heights across the window — the mix of sizes is what makes the display feel like real snowfall.",
          "src": "/img/a23-a"
        }
      },
      {
        "after": 5,
        "img": {
          "alt": "Close-up of handmade white paper snowflakes hanging above a windowsill with a lit candle, pinecone and eucalyptus in soft daylight",
          "caption": "The finished flakes above a candlelit windowsill — a few snowflakes and a warm glow are all a small window needs.",
          "src": "/img/a23-b"
        }
      }
    ],
    "intro": "Paper snowflakes are the cheapest winter window decor we know. A few sheets of white paper, a pencil, a ruler, sharp scissors and some transparent thread are all it takes to turn a plain window into a soft, snowy scene — no shop run for fancy supplies, no special tools, and no mess to clean up after. We hung our first batch one grey November afternoon and they stayed up all winter. Below are the exact materials, the four steps, and the hanging tricks that keep them straight and tangle-free.",
    "motif": "snow",
    "readTime": 8,
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "A paper snowflake works because it is light. It hangs on a thread so fine you can barely see it, so the flake looks like it is floating in front of the glass. Real snow outside does the rest — the white paper picks up the grey-blue light of a winter sky, and the cut-outs throw soft shadows when the sun comes out. It costs pennies, so you can fill a big window without thinking twice, and if one tears you just fold another."
          },
          {
            "t": "h3",
            "text": "Why paper snowflakes beat shop-bought window decor"
          },
          {
            "t": "p",
            "text": "Shop-bought window stickers look flat and peel off in the cold, and plastic flakes cost a few dollars each and look like plastic. Paper flakes are different: each one comes out a little different, the edges are crisp, and they move gently when the heating kicks on."
          },
          {
            "items": [
              "Cost: a full window costs under $2 — one pack of white paper and a spool of thread",
              "Time: about ten minutes per flake once you have folded the first one",
              "Skill level: if you can fold paper and cut along a line, you can make these",
              "Supplies: paper, pencil, ruler, scissors, thread and hooks — most homes already have them",
              "Kid-friendly: children love the unfold moment; the only sharp tool is the scissors"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "One more reason we keep coming back to this craft: it scales. One flake is a sweet touch on a small window, and ten at different heights turn a wide living-room window into the prettiest thing in the room. The second batch always looks better than the first, because your hands learn the fold."
          }
        ],
        "heading": "Why Paper Snowflakes Work So Well"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Keep the supply list short. The whole point is that you can start now, with what is already in a kitchen drawer. If you do need to buy anything, one shop run covers it — and the thread and hooks will last for years of windows."
          },
          {
            "t": "h3",
            "text": "What you need for paper snowflakes"
          },
          {
            "items": [
              "White paper or lightweight cardstock — plain printer paper works well for a first batch; cardstock gives sturdier flakes",
              "A pencil, for marking folds and sketching the pattern lightly",
              "A ruler, for straight folds and measuring thread lengths",
              "Sharp scissors — small craft scissors cut clean curves far better than blunt kitchen ones",
              "Transparent thread, for hanging the flakes so they float",
              "Removable window hooks, so the threads leave no marks on the frame"
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "A note on the paper: start with ordinary white printer paper. It folds crisply, cuts easily and looks bright against the glass. Cardstock makes a stiffer flake that holds its shape in a draughty window, but it is harder to cut through six layers, so save it for your second batch. Pale blue works too, but white is the classic — it catches the light best."
          },
          {
            "t": "h3",
            "text": "Picking your thread and hooks"
          },
          {
            "t": "p",
            "text": "Transparent thread is the quiet hero of this project. Fishing line works, and so does clear sewing thread — either one disappears against the glass. Cut three or four different lengths, so the flakes sit at different heights. Small removable adhesive hooks stick to the top of the window frame and come off cleanly in January."
          }
        ],
        "heading": "What You Need"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Every paper snowflake starts the same way: a square of paper folded into a wedge. The fold is the whole secret — the pattern you cut into it repeats six times when you open it out, and that is what gives the flake its symmetry. Take your time: a tidy fold is the difference between a crisp flake and a lopsided one."
          },
          {
            "t": "h3",
            "text": "Folding the paper into a wedge"
          },
          {
            "items": [
              "Start with a square sheet. If your paper is a rectangle, fold one corner across to the opposite edge, crease it, and trim the strip below.",
              "Fold the square in half diagonally and press the crease flat with your thumb.",
              "Fold it in half diagonally again, so you have a smaller triangle with four layers.",
              "Fold this triangle into thirds: bring the left point over to the right, then the right point over to the left, so it becomes a narrow wedge with a pointed tip.",
              "Press every crease flat — run the ruler along each fold so the layers sit tight."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "If the wedge looks uneven, unfold and start again rather than forcing it. Paper remembers a bad crease, and a wedge off by a few millimetres shows up as a lopsided flake. The second try is always quicker than the first."
          }
        ],
        "heading": "Step 1: Fold the Paper Into a Neat Wedge"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "With the wedge folded, the next step is a light pencil sketch. You are not drawing a snowflake — you are marking a few triangles, diamonds and curves along the edges. When the paper opens out, each mark becomes a cut-out that repeats around the flake. Keep the pattern simple on your first flake: simple shapes look cleaner than fussy ones, and they are far easier to cut."
          },
          {
            "t": "h3",
            "text": "Sketching a snowflake pattern on the folded wedge"
          },
          {
            "items": [
              "Hold the wedge with the pointed tip down and the wide, folded edge at the top.",
              "Sketch small triangles along the two long edges — these become the points and notches.",
              "Add one or two small diamonds or circles near the centre for the lacy middle.",
              "Draw a gentle curve or a V across the wide top edge.",
              "Keep every mark a finger's width from the pointed tip, so the centre stays strong."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Use a soft pencil and press lightly. Heavy lines show on white paper and are hard to rub out once you have cut. If a line goes wrong, just leave it out — the flake will still be pretty, and no one will know the pattern was meant to be different."
          }
        ],
        "heading": "Step 2: Sketch a Simple Snowflake Pattern"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Cutting is the slowest step, and the one where patience pays. Sharp scissors, small snips and a steady hand are all you need. Keep the paper folded the whole time — the layers are what make the pattern repeat — and let the scissors do the work instead of forcing the blades through six layers at once."
          },
          {
            "t": "h3",
            "text": "Cutting the snowflake pattern"
          },
          {
            "items": [
              "Start with the small shapes near the centre, using the tips of the scissors.",
              "Cut the triangles along the long edges one at a time, opening the scissors fully for each cut.",
              "Cut the curve across the wide top edge last, in one smooth motion.",
              "Shake the tiny cut-out pieces off and check both sides before you unfold — if a line is uncut, snip it now while the paper is still folded."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Keep your fingers clear of the blades and cut away from your hand, especially on tight curves. If the scissors start to drag, stop and sharpen them or switch to a smaller pair — blunt scissors tear the paper, and the torn edge shows on every point."
          }
        ],
        "heading": "Step 3: Cut Carefully Along the Marked Lines"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "This is the best part. Unfold the wedge slowly, one layer at a time, and watch the pattern appear. Smooth the flake under a book if the creases spring back, then add the thread and hang it. The first flake takes the longest — by the third you will fold and cut without thinking."
          },
          {
            "t": "h3",
            "text": "Unfolding and hanging paper snowflakes"
          },
          {
            "items": [
              "Unfold one fold at a time, gently — do not pull the layers apart or the thin points can tear.",
              "Lay the flake face down and smooth it flat with your palm, then leave it under a heavy book for a minute.",
              "Thread a needle and pass it through one point of the flake, then tie a small knot.",
              "Cut the thread to the length you want — vary them so the flakes hang at different heights.",
              "Stick a removable hook to the top of the window frame, loop the thread over it, and check the height before you hang the next one."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Hang the biggest flakes in the middle and the smaller ones towards the edges, with a few inches between them so they can turn gently. If a flake spins and tangles with its neighbour, shorten its thread by an inch or two — a little space is all it takes."
          }
        ],
        "heading": "Step 4: Unfold, Add Thread and Hang Your Paper Snowflakes"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "A window full of paper snowflakes suits almost any room, and looks just as good from outside as from inside. We hang ours in the living-room window where the morning light hits them, and they throw the prettiest shadows across the floor. They also work on a bedroom window, above the kitchen sink, or a hallway window that needs a little winter cheer."
          },
          {
            "t": "h3",
            "text": "Styling paper snowflakes around the house"
          },
          {
            "items": [
              "On a wide window: eight to twelve flakes at three heights, the largest in the centre",
              "On a small window: three flakes at staggered heights — one high, one middle, one low",
              "With lights: warm fairy lights behind the flakes make them glow after dark",
              "On a mirror: two or three flakes in front of a hallway mirror for double the sparkle",
              "As a table display: a few flat flakes under a glass cloche, or scattered along a mantel"
            ],
            "t": "ul"
          },
          {
            "t": "h3",
            "text": "Care, storage and easy variations"
          },
          {
            "t": "p",
            "text": "Paper snowflakes keep well if you store them flat. Lay each flake between sheets of tissue paper in a large envelope or a flat box, somewhere dry — damp is the only real enemy, and a damp flake goes limp and never recovers. Stored this way, the same flakes will look just as good next winter."
          },
          {
            "t": "p",
            "text": "For variations, try pale blue or silver paper for a frostier look, or cut a few flakes from old sheet music or brown kraft paper for a rustic window. Children can make their own batch with blunt-tipped safety scissors and a simple pattern of triangles — their flakes will be wonkier than yours, and somehow prettier. You can also thread two or three small flakes onto one long thread for a garland across the top of the window."
          }
        ],
        "heading": "Styling, Care and Easy Variations for Paper Snowflakes"
      }
    ],
    "slug": "paper-snowflake-window-decor",
    "subcategory": "Paper Crafts",
    "title": "Paper Snowflake Window Decor: Easy DIY Paper Snowflakes for Bright Winter Windows",
    "to": "#275E7E",
    "video": "paper-snowflake-window-decor"
  }),
  P({
    "bannerTitle": "Simple November Nails 2026",
    "category": "lifestyle",
    "date": "2026-11-24",
    "excerpt": "Simple November nails in burgundy, chocolate brown and cozy plaid — easy fall nail ideas you can paint at home or show your nail tech, starting at $3 a bottle.",
    "faqs": [
      {
        "a": "Simple November nails are easy fall manicures in deep, warm colours — burgundy, chocolate brown, espresso and burnt orange — often with one small accent like plaid, a gold dot or a maple leaf. Most designs take 20 to 30 minutes at home, need only two or three polishes, and look best on short to medium nails.",
        "q": "What are simple November nails?"
      },
      {
        "a": "Burgundy is the best nail colour for November 2026 — it leads every trend list and flatters every skin tone. Chocolate and espresso browns are the best everyday shades, and tortoiseshell, olive, rust and plaid are the patterned picks. For one bottle only, buy burgundy; for two, add chocolate brown.",
        "q": "What is the best nail colour for November 2026?"
      },
      {
        "a": "Yes — this is one of the easiest seasonal manicures to do yourself. Start with one solid deep shade on short nails: two thin coats, a glossy top coat and cuticle oil, and you're done in 15 minutes. A single plaid or leaf accent nail is the next step up, and it hides small imperfections well.",
        "q": "Are simple November nails easy to do at home?"
      },
      {
        "a": "A regular polish November manicure lasts 5 to 7 days, and a gel set lasts 2 to 3 weeks. Dark colours show chips sooner than pale ones, so seal with a top coat, add a fresh top coat every 3 days, and wear gloves for washing up. Short nails chip less than long ones.",
        "q": "How long do simple November nails last?"
      }
    ],
    "from": "#C4748F",
    "hero": {
      "alt": "Hands with glossy deep burgundy nails resting on a cream knitted sweater beside a latte and dried autumn leaves on a wooden table, warm November light",
      "src": "/img/a22-hero"
    },
    "images": [
      {
        "after": 2,
        "img": {
          "alt": "Hand with glossy chocolate brown nails holding a warm ceramic mug of coffee by a bright window, cream knitted sweater",
          "caption": "Glossy chocolate brown, two thin coats and a ceramic mug — the easiest November manicure there is.",
          "src": "/img/a22-a"
        }
      },
      {
        "after": 4,
        "img": {
          "alt": "Hand with short glossy burgundy nails holding a pink latte on a wooden cafe table, plaid scarf",
          "caption": "Short burgundy nails, a pink latte and a plaid scarf — November in one photo.",
          "src": "/img/a22-b"
        }
      },
      {
        "after": 6,
        "img": {
          "alt": "Hands with tortoiseshell French tip nails and one gold chrome accent nail resting by a lit candle and golden autumn leaves",
          "caption": "Tortoiseshell French tips with one gold chrome accent — made for Thanksgiving candlelight.",
          "src": "/img/a22-c"
        }
      }
    ],
    "intro": "Simple November nails are having a moment — searches for the phrase jumped more than 8,500% in the past month, and it's easy to see why. November sits right between the bright colours of early fall and the sparkle of Christmas, so the nails that work best now are deep, warm and a little bit cozy: burgundy, chocolate brown, espresso and a touch of plaid. This guide rounds up the easiest looks of the season. Most of them take 20 to 30 minutes at home, cost under $10 in polish, and look just as good on short nails as they do on long ones. Pick one idea, grab two or three polishes, and you're set for the whole month.",
    "motif": "bloom",
    "readTime": 10,
    "sections": [
      {
        "blocks": [
          {
            "t": "p",
            "text": "November has its own palette, and it's not the same as October's. The pumpkins are gone, the Christmas glitter hasn't started yet, and everything turns warm, deep and soft — burgundy knitwear, hot chocolate, wood smoke and golden leaves. The nail colours that fit that mood are the ones you'll see on every Pinterest board and salon menu this month."
          },
          {
            "t": "h3",
            "text": "November nail colours 2026: the five shades to know"
          },
          {
            "items": [
              "Burgundy and merlot — the classic November shade. A bottle of burgundy cream polish runs about $8 to $12, and it works for work, for dinner and for Thanksgiving.",
              "Chocolate and espresso brown — the colour of fall 2026. Glossy or chrome, it looks expensive on every skin tone and goes with denim, cream knits and camel coats.",
              "Burnt orange and terracotta — warm and cheerful without feeling like Halloween. Best as an accent nail or a solid short-nail set.",
              "Olive and moss green — earthy and modern, and lovely with a thin gold line or a gold dot on the ring finger.",
              "Milky beige and mocha — soft neutrals for a clean, quiet-luxury look. Pair them with one plaid or tortoiseshell accent nail."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "If you only buy one polish this month, make it burgundy. If you buy two, add a chocolate brown — between them they cover every outfit you'll wear in November, from a chunky sweater to a Thanksgiving dress. Deep shades are also the most forgiving to paint at home: a wobbly edge barely shows on a dark colour."
          }
        ],
        "heading": "Simple November Nails: The Colours Everyone's Wearing This Month"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Burgundy is the best nail colour for November, full stop. It's deep enough for the cold turn, warm enough for the fall closet, and it flatters cool, warm and neutral undertones alike. A salon burgundy set costs about $45 to $65 with gel; the same look at home costs around $12 in polish and takes half an hour."
          },
          {
            "t": "h3",
            "text": "Burgundy French tips in 20 minutes"
          },
          {
            "items": [
              "Shape your nails first — short square or soft oval suits burgundy best — then push back the cuticles and wipe each nail with polish remover to remove oils.",
              "Paint one thin coat of a sheer nude or pale pink and let it dry for 2 minutes. This is the base the burgundy tip sits on.",
              "Rest a thin brush or a French tip guide along the free edge and sweep deep burgundy across the tip in one smooth stroke. Keep the line thin — a thick tip looks heavy.",
              "Clean up any slips with a small brush dipped in remover, then seal everything with a glossy top coat.",
              "Wait a full 10 minutes before touching anything. Dark polish smudges easily while it's still soft."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "Want the velvet look that's all over Pinterest right now? Paint two coats of burgundy, then hold a magnet over each nail for 10 seconds before curing or drying — that's the cat-eye trick, and it gives the polish a soft, fabric-like glow. A magnetic burgundy polish costs about $10, and the little magnet usually comes in the box."
          }
        ],
        "heading": "Burgundy November Nails That Look Expensive"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Chocolate brown is the easiest fall colour to wear because it goes with everything in your closet. A deep gloss makes it look like a salon manicure even when you did it at the kitchen table, and on short nails it looks neat and polished for weeks. If burgundy feels too red for you, chocolate brown is your November colour."
          },
          {
            "t": "h3",
            "text": "Chocolate glazed chrome nails"
          },
          {
            "items": [
              "Milk chocolate or cocoa gel polish, one solid colour — about $9 a bottle.",
              "Sheer glazed chrome powder with a small sponge applicator — about $6 online.",
              "A no-wipe glossy top coat — $7 to $10 — to lock the chrome shine in.",
              "Cuticle oil for daily use — $4 — to keep the dark gloss looking fresh.",
              "A UV or LED lamp if you use gel — a small one costs $20 to $25 and lasts for years."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Paint two thin coats of the brown — never one thick one, or it dries lumpy — then rub the chrome powder over the tacky top coat with the applicator until it shines, and seal it. The whole set takes about 35 minutes. If chrome feels like too much fuss, skip it: a plain glossy espresso on short square nails is the ultimate chic November manicure, and it takes 15 minutes flat."
          }
        ],
        "heading": "Chocolate Brown November Nails"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Plaid is the fall pattern that never goes out of style, and it's the manicure version of your favourite flannel shirt. Rust, brown and cream plaid on one nail, solid colours on the rest — that's the whole trick. You only need one accent nail to get the look, which is why plaid is such a good first pattern to try at home."
          },
          {
            "t": "h3",
            "text": "Plaid accent nails: one nail is enough"
          },
          {
            "items": [
              "Paint the accent nail (usually the ring finger) with two coats of cream or milky beige and let it dry completely — about 5 minutes.",
              "With a thin striping brush, paint two long vertical lines in rust or burgundy, about 3mm apart, then two horizontal lines crossing them.",
              "Add two thinner lines in chocolate brown between the first lines, crossing the same way, so the grid looks woven.",
              "Keep the other four nails solid — burgundy, chocolate and burnt orange together make a warm set that matches the plaid.",
              "Seal the accent nail with a glossy top coat so the thin lines don't chip. Matte top coat works too, for a flannel feel."
            ],
            "t": "ol"
          },
          {
            "t": "p",
            "text": "A striping brush costs about $5, and a set of three lasts for years. If freehand lines scare you, use thin nail tape as a guide — lay two strips down, paint between them, and peel the tape off while the polish is still wet. Sweater plaid and tartan squares both work the same way, and both look best on short to medium nails where the pattern stays readable."
          }
        ],
        "heading": "Cozy Plaid November Nails"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "November is a short-nail month. Dark colours stay sharp and tidy when they're short, patterns scale down well, and a short set grows out gracefully — you won't see the gap at the cuticle for a good two weeks. If your nails break easily or you type all day, short is the smart choice this month."
          },
          {
            "t": "h3",
            "text": "November nails for short nails: what actually works"
          },
          {
            "items": [
              "Brown micro French — an ultra-thin chocolate line at the tip over a sheer nude base. Polished, and very easy to copy at home.",
              "Single leaf accent — keep all nails nude and add one tiny gold or rust maple leaf on the ring finger. Subtle and sweet.",
              "Milky nude with gold dots — one small gold dot near the cuticle on each nail. Takes 5 minutes and looks done on purpose.",
              "Solid glossy espresso — one perfect colour, two coats, high shine. The most forgiving first November set.",
              "Two-tone burgundy and nude — burgundy on three nails, nude with a burgundy tip on the other two."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Stick to short square or short oval shapes — they make dark polish look neat, and they're the least likely to break. Skip long coffin shapes unless you get them done at a salon, and skip busy art on every nail: on short nails, one accent nail carries the whole design. A bottle of cuticle oil by the bed helps too — dark polish shows dry cuticles more than pale polish does."
          }
        ],
        "heading": "Simple November Nails for Short Nails"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "You don't need a salon appointment for a November manicure. A basic at-home set takes about 30 minutes from start to finish, costs under $25 in supplies that last all season, and looks good enough for Thanksgiving dinner. The secret is thin coats and patience between them — most smudges happen because the first coat wasn't dry."
          },
          {
            "t": "h3",
            "text": "Your at-home November manicure in 6 steps"
          },
          {
            "items": [
              "Remove old polish, trim and file to your shape, then push back cuticles with an orange stick — 5 minutes.",
              "Wash your hands, then wipe each nail with remover or alcohol so the polish grips — 2 minutes.",
              "Paint a ridge-filling base coat so dark colour goes on smoothly — 1 minute, then 2 minutes to dry.",
              "Paint two thin coats of your November shade, waiting 2 to 3 minutes between coats — 10 minutes.",
              "Add your accent — a plaid nail, gold dots or a French tip — on one or two nails — 5 minutes.",
              "Seal with a glossy top coat, then sit still for 10 minutes. Add a drop of cuticle oil once everything is dry."
            ],
            "t": "ol"
          },
          {
            "t": "h3",
            "text": "What to buy for under $25"
          },
          {
            "items": [
              "One burgundy cream polish and one chocolate brown — about $8 each.",
              "A sheer nude for French tips and leaf accents — about $7.",
              "A thin striping brush for plaid lines and dots — about $5.",
              "A ridge-filling base coat and a glossy top coat — about $6 each, and they last months."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Paint in a warm room — cold hands make polish go on thick and streaky — and keep a small brush and remover nearby for clean-ups. If a nail smudges, don't redo the whole hand: smooth the spot with a drop of top coat and carry on. Nobody will notice."
          }
        ],
        "heading": "Easy November Nails You Can Do at Home in 30 Minutes"
      },
      {
        "blocks": [
          {
            "t": "p",
            "text": "Thanksgiving is the one November evening when your hands are on show — passing dishes, holding a glass, reaching across the table. It's worth painting your nails two days before, not the morning of, so the polish has time to harden fully and you aren't fixing smudges while the turkey rests."
          },
          {
            "t": "h3",
            "text": "Thanksgiving nail ideas that photograph well"
          },
          {
            "items": [
              "Tortoiseshell French tips — amber and brown swirls on the tip over a nude base. Warm, rich and made for candlelight.",
              "Velvet burgundy with a gold chrome accent — one gold nail among deep burgundy ones, like jewellery for your hands.",
              "A single maple leaf — gold or rust, on the ring finger, over a milky beige base. The classic Thanksgiving accent.",
              "Cranberry gloss on short round nails — bright enough to feel festive, dark enough to feel like November."
            ],
            "t": "ul"
          },
          {
            "t": "p",
            "text": "Whatever you pick, add a fresh top coat on Thanksgiving morning — it takes 2 minutes and makes a two-day-old manicure look brand new. Keep the bottle in your bag for touch-ups, and pack a few cotton pads and remover in case of a chip. After dinner, remove dark polish with an acetone-soaked pad held on each nail for 30 seconds — rubbing spreads the colour onto your skin."
          }
        ],
        "heading": "November Nails for Thanksgiving Dinner"
      }
    ],
    "slug": "simple-november-nails",
    "subcategory": "Beauty Inspiration",
    "title": "Simple November Nails: Easy Fall Nail Ideas in Burgundy, Chocolate Brown & Cozy Plaid",
    "to": "#8C4462"
  }),
  P({
  "bannerTitle": "Velvet Christmas Tree Ornaments",
  "category": "diy-crafts",
  "date": "2026-11-24",
  "excerpt": "Velvet Christmas ornaments you can make in one evening — wrap plain shatter-resistant baubles in emerald, burgundy and champagne velvet ribbon, add handmade bows and beads, and hang a coordinated tree for under $20.",
  "faqs": [
    {
      "a": "Most velvet Christmas ornaments cost between $1 and $3 each. A pack of six shatter-resistant ornament balls is about $5, a spool of velvet ribbon runs $3 to $4, and ornament hooks and beads cost a couple of dollars. A full set of twelve comes to under $20 — a fraction of what velvet ornaments sell for in shops.",
      "q": "How much do velvet Christmas ornaments cost to make?"
    },
    {
      "a": "Yes — this is one of the easiest velvet Christmas ornaments projects to start with. There is no sewing and no glue gun needed. You wrap ribbon around a ball, tie a bow and add a hook. If you can tie a shoelace, you can make these. Start with one ornament to get the wrap right, then the rest take about ten minutes each.",
      "q": "Are velvet Christmas ornaments easy for beginners to make?"
    },
    {
      "a": "Hang them on the sturdier inner branches rather than the thin tips, and use ribbon loops or ornament hooks instead of the thin wire hooks that come in the pack — ribbon grips the branch better and looks softer. Keep the heavier ornaments low enough to reach, and check each knot before you step back.",
      "q": "How do I hang velvet Christmas ornaments so they don't fall off the tree?"
    },
    {
      "a": "Wrap each velvet Christmas ornament in tissue paper and lay them in a single layer in a box — never pile them loose in a bag, or the ribbon will crease and the bows will flatten. Keep the box in a cool, dry spot. Stored this way, the velvet keeps its pile and the ornaments look just as good next December.",
      "q": "How do I store velvet Christmas ornaments after the holidays?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Handmade velvet Christmas ornaments in emerald, burgundy and champagne hanging on an evergreen tree with pinecones and eucalyptus, soft natural light",
    "src": "/img/a21-hero"
  },
  "images": [
    {
      "after": 3,
      "img": {
        "alt": "Handmade velvet Christmas ornaments in emerald, burgundy and champagne hanging on an evergreen tree branch with pinecones",
        "caption": "Emerald, burgundy and champagne velvet ornaments on the tree — the three colours sit beautifully together against the green.",
        "src": "/img/a21-a"
      }
    },
    {
      "after": 5,
      "img": {
        "alt": "Finished velvet Christmas ornaments in emerald, burgundy and champagne grouped on a linen tablecloth beside an evergreen branch",
        "caption": "The finished set, grouped on the table before they go on the tree — velvet baubles in all three colours, ready to hang.",
        "src": "/img/a21-b"
      }
    }
  ],
  "intro": "Velvet Christmas ornaments are the quickest way we know to make a tree look expensive. A plain shatter-resistant bauble costs less than a dollar, a length of velvet ribbon costs pennies, and together they look like something from a boutique window. We made a full set of twelve in one evening, in three colours — emerald, burgundy and champagne — and the whole project came to under $20. Below you will find the exact materials, the four steps, and the styling tips that make the colours work together.",
  "motif": "snow",
  "readTime": 8,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "Velvet does something no other fabric does on a Christmas tree: it catches the light without shining. The pile of the fabric softens the colour, so emerald reads deep and rich instead of bright, burgundy looks warm instead of loud, and champagne glows instead of glittering. Put the three together and you get a tree that looks planned, not random — even though every ornament took ten minutes."
        },
        {
          "t": "h3",
          "text": "Why velvet works better than shiny finishes"
        },
        {
          "t": "p",
          "text": "Shiny baubles reflect everything around them, so they pick up the colour of the room and the lights and can end up looking busy. Velvet absorbs light, which means the colour you see is the colour you chose. That is why a velvet ornament in emerald still looks emerald next to a burgundy one, instead of turning into a muddle."
        },
        {
          "items": [
            "Cost: a set of twelve velvet Christmas ornaments costs under $20 — about $1.50 each",
            "Time: ten minutes per ornament once you have made the first one",
            "Skill level: no sewing, no glue gun — if you can tie a bow, you can make these",
            "Supplies: shatter-resistant baubles, velvet ribbon, scissors, hooks and beads — one shop run",
            "Kid-friendly: older kids can wrap and tie bows with supervision; scissors are the only sharp tool"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "One more reason we love this project: the ornaments are shatter-resistant, so they survive being dropped by small hands and packed away in January. The velvet wrap hides any scuffs on cheap baubles, too — the plainest ball in the pack becomes the prettiest ornament on the tree."
        }
      ],
      "heading": "Why Velvet Christmas Ornaments Work So Well"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Keep the supply list short and the colours tight. Three colours are enough — a fourth one starts to look busy. We used emerald, burgundy and champagne because they sit well together and match most trees, but the same method works with any trio you like."
        },
        {
          "t": "h3",
          "text": "What you need for velvet Christmas ornaments"
        },
        {
          "items": [
            "12 lightweight shatter-resistant ornament balls, 2–3 inches (5–8 cm) across — about $5 for a pack of six",
            "Velvet ribbon, 1 inch (2.5 cm) wide, in emerald, burgundy and champagne — one spool of each, about $3–$4 per spool",
            "Sharp scissors",
            "12 ornament hooks, or short lengths of ribbon for hanging loops",
            "Small decorative beads — gold or cream, about 20 pieces",
            "Craft adhesive or a few dots of hot glue, for fixing the ribbon ends and beads"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "A note on the ribbon: buy real velvet ribbon, not satin. Satin slips, shows every fingerprint and looks shiny next to the velvet. Velvet ribbon grips itself, which is what makes the wrap stay put. If your craft shop only has one width, 1 inch is the sweet spot — narrower ribbon takes too many wraps, wider ribbon bunches at the top."
        },
        {
          "t": "h3",
          "text": "Picking your colours"
        },
        {
          "t": "p",
          "text": "Lay your three ribbon spools next to each other before you cut anything. They should look like they belong in the same room — emerald, burgundy and champagne do, because they are all deep, warm tones. If one colour jumps out and fights the other two, swap it for a softer shade. Four of each colour gives you a balanced set of twelve."
        }
      ],
      "heading": "What You Need"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Cutting the ribbon first saves time and waste. A ball 2–3 inches across needs about 18 inches (45 cm) of ribbon to wrap around it with enough left over for a tidy finish. Cut all twelve lengths before you start wrapping, so you can work through the ornaments without stopping to measure."
        },
        {
          "t": "h3",
          "text": "Cutting velvet ribbon cleanly"
        },
        {
          "items": [
            "Measure 18 inches (45 cm) of ribbon for each ornament and mark it with a pencil.",
            "Cut with sharp scissors in one smooth motion — velvet frays if you saw at it.",
            "Cut the ends at a slight angle so they sit flat when you fold them under.",
            "Sort the lengths by colour into three small piles, four lengths in each pile."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "If your baubles are larger than 3 inches, add 4 inches (10 cm) per ornament. Too much ribbon is easy to trim; too little means starting over, so err on the generous side for the first one and adjust from there."
        }
      ],
      "heading": "Step 1: Cut the Velvet Ribbon to Fit Each Ornament"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The wrap is the heart of this project, and it is simpler than it looks. You are not covering the ball in fabric — you are wrapping a band of ribbon around it, top to bottom, so the velvet reads as a soft stripe that catches the light. The ball's own colour shows through on either side, which is why the bauble colour matters: pick baubles in a tone close to your ribbon, or plain gold, so the wrap and the ball work together."
        },
        {
          "t": "h3",
          "text": "Wrapping velvet ribbon around an ornament"
        },
        {
          "items": [
            "Hold the ornament in one hand and lay the middle of a ribbon length across the top of the ball, over the cap.",
            "Bring both ends down around the sides and cross them underneath the ball.",
            "Pull the ribbon snug — not tight enough to dent the ball, just firm enough that it sits flat.",
            "Smooth the ribbon with your thumb so the velvet pile lies in one direction and no wrinkles show.",
            "Fold the two ends under at the bottom of the ball and fix them with a small dot of craft adhesive.",
            "Hold the ornament up and check the wrap from the front — the band should run straight over the top and sit evenly on both sides."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "The first wrap always takes the longest. By the third ornament your hands know the motion, and the rest go quickly. If a wrap looks crooked, peel the ends back and redo it — the adhesive dot is small, so the ribbon comes away cleanly."
        }
      ],
      "heading": "Step 2: Wrap the Velvet Ribbon Smoothly Around Each Ornament"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The bow is what turns a wrapped bauble into a velvet Christmas ornament. A small bow in matching ribbon sits at the top of the ball, right under the cap, and it hides the spot where the wrap meets the top. Keep the bows small — about 2 inches (5 cm) across — so they read as a detail, not the main event."
        },
        {
          "t": "h3",
          "text": "Making a small velvet bow"
        },
        {
          "items": [
            "Cut a 10-inch (25 cm) length of matching velvet ribbon for each bow.",
            "Form two loops the way you would tie a shoelace bow, keeping both loops the same size.",
            "Pinch the centre tight and tie a short piece of ribbon or thread around the middle to hold it.",
            "Trim the tails at an angle and fluff the loops out with your fingers so they sit evenly.",
            "Fix the bow to the top of the ornament with a dot of craft adhesive, just under the cap, covering the wrap join.",
            "Let the adhesive set for a few minutes before you pick the ornament up by the bow."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "If bows are not your thing, a simple knot with two short tails looks just as good and takes half the time. The rule is the same either way: keep it small, keep it in the same colour as the wrap, and let the velvet do the talking."
        }
      ],
      "heading": "Step 3: Make Small Velvet Bows for the Tops"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "The last step is the beads, the hooks and the hanging. A single small bead tucked under the bow adds a finished touch, and a hook or ribbon loop is what gets the ornament onto the tree. Do this step at the table, not on the tree — it is much easier to fix a bead while the ornament is in your hand."
        },
        {
          "t": "h3",
          "text": "Adding beads and hooks"
        },
        {
          "items": [
            "Glue one small decorative bead under each bow, or thread two beads onto the hanging loop for a little extra detail.",
            "Thread an ornament hook through the cap at the top, or tie a 6-inch (15 cm) ribbon loop through it instead.",
            "Check the hook or loop is secure by giving it a gentle tug before you hang the ornament.",
            "Hang the finished ornaments on the tree, spacing the three colours evenly — no two of the same colour side by side.",
            "Step back after every few ornaments and check the balance: too many on one side and the tree starts to lean."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Hang the heavier-looking ornaments — the burgundy ones read heaviest — on the sturdier inner branches, and put the champagne ones near the lights, where they catch the glow. The emerald ones look best against the green of the tree, so tuck them a little deeper into the branches."
        }
      ],
      "heading": "Step 4: Add Beads, Hooks and Hang Your Velvet Christmas Ornaments"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Twelve velvet Christmas ornaments will dress a small tree on their own, and on a bigger tree they work best mixed through the rest of your decorations rather than grouped in one spot. Spread the colours evenly, and let the velvet sit next to a few plain baubles and some fairy lights — the contrast is what makes the velvet stand out."
        },
        {
          "t": "h3",
          "text": "Styling velvet Christmas ornaments around the house"
        },
        {
          "items": [
            "On the tree: mix the velvet ornaments through the branches, with a few plain gold baubles between them so the colours breathe",
            "In a bowl: pile four or five ornaments in a shallow bowl with a sprig of evergreen for a table centrepiece",
            "As gift toppers: tie one ornament onto a wrapped present with the ribbon loop — it doubles as a small gift",
            "On a garland: hang three ornaments at different heights from a mantel garland, spaced a foot apart"
          ],
          "t": "ul"
        },
        {
          "t": "h3",
          "text": "Care, storage and easy variations"
        },
        {
          "t": "p",
          "text": "Velvet picks up dust, so give each ornament a quick brush with a dry cloth before you hang it. If a bow flattens in storage, steam it gently over a kettle for a few seconds and reshape it with your fingers. For variations, try a single colour set in all emerald for a calm, classic tree, or swap the champagne for blush pink if your room runs warm. You can also use the same wrap on pinecones — wrap a short length of ribbon around the middle and tie a bow on top — for matching mantel decor."
        },
        {
          "t": "p",
          "text": "Store the ornaments wrapped in tissue paper, one layer deep in a box, in a cool dry spot. The velvet keeps its pile for years if it is not squashed, and next December you will open the box and have a tree's worth of ornaments ready to hang."
        }
      ],
      "heading": "Styling, Care and Easy Variations for Velvet Christmas Ornaments"
    }
  ],
  "slug": "velvet-christmas-tree-ornaments",
  "subcategory": "Handmade Gifts",
  "title": "Velvet Christmas Ornaments: DIY Elegant Velvet Ribbon Ornaments for Your Tree",
  "to": "#275E7E",
  "video": "velvet-christmas-tree-ornaments"
}),
  P({
  "bannerTitle": "DIY Christmas Wreath Ideas",
  "category": "diy-crafts",
  "date": "2026-11-23",
  "excerpt": "DIY Christmas wreath ideas you can make in an afternoon — evergreen, dried orange, velvet ribbon and eucalyptus wreaths for the front door, most for under $20.",
  "faqs": [
    {
      "a": "Most of the wreaths here cost between $8 and $20. A grapevine or wire ring is about $4, a bundle of fresh evergreen runs $5 to $8 at the garden centre, and dried oranges, pinecones and ribbon come from the kitchen drawer or the dollar store. The brass hoop version is the priciest at around $25 — still half what a shop charges for the same look.",
      "q": "How much do DIY Christmas wreath ideas cost to make?"
    },
    {
      "a": "A fresh evergreen wreath lasts 3 to 4 weeks outside if you mist it every few days and keep it out of direct sun. Dried orange, felt ball and paper star wreaths last all season and pack away for next year. If your door gets full afternoon sun, pick a dried or felt wreath — fresh greens dry out fast in the heat.",
      "q": "How long will a DIY Christmas wreath last on the front door?"
    },
    {
      "a": "Start with the velvet ribbon wreath or the dried orange one. The ribbon wreath is just loops of ribbon pinned around a foam ring — no wiring, no glue gun skills needed — and the dried orange version is slices, cinnamon sticks and twine. Both take under an hour and look like you spent all weekend on them.",
      "q": "Which DIY Christmas wreath ideas are best for beginners?"
    },
    {
      "a": "Use a wreath hanger that hooks over the top of the door — the metal ones cost about $6 and hold up to 10 pounds. If your door is glass or you rent, a large suction hook rated for 5 pounds works on smooth surfaces, or a Command hook made for outdoor use. Hang the wreath so its centre sits at eye level, about 60 inches from the ground.",
      "q": "How do you hang a DIY Christmas wreath without damaging the door?"
    }
  ],
  "from": "#4E8FB8",
  "hero": {
    "alt": "Handmade evergreen Christmas wreath with dried orange slices, pinecones and a burgundy velvet bow hanging on a dark green front door, warm porch light glowing",
    "src": "/img/a20-hero"
  },
  "images": [
    {
      "after": 2,
      "img": {
        "alt": "Hands tying a green ribbon onto a fresh evergreen Christmas wreath, with lit candles glowing in the foreground",
        "caption": "Tying the ribbon on — hands at work on a fresh evergreen wreath, candles glowing in front.",
        "src": "/img/a20-a"
      }
    },
    {
      "after": 4,
      "img": {
        "alt": "Handmade felt ball Christmas wreath in deep red, forest green and cream wool balls hanging on a white wall beside a lit candle",
        "caption": "Felt balls in deep red and forest green — soft, warm, and impossible to break if it falls off the hook.",
        "src": "/img/a20-b"
      }
    },
    {
      "after": 6,
      "img": {
        "alt": "Hands hanging a handmade dried orange and cinnamon Christmas wreath on a front door with a metal wreath hanger, golden afternoon light",
        "caption": "The last step — the dried orange wreath going up on its hanger, centre at eye level.",
        "src": "/img/a20-c"
      }
    }
  ],
  "intro": "A wreath is the first thing people see when they come to your door in December, and the ones you make yourself always look better than the ones from the shop — a bit uneven, a bit personal, and exactly your colours. These DIY Christmas wreath ideas are all beginner-friendly, most cost under $20, and every one of them can be finished in a single afternoon with supplies from the garden centre, the craft store, or the kitchen. Pick one, put the kettle on, and start with the ring. The rest is just layering.",
  "motif": "snow",
  "readTime": 10,
  "sections": [
    {
      "blocks": [
        {
          "t": "p",
          "text": "If you only make one wreath this year, make this one. A classic evergreen wreath is the base every other design builds on, and once you know the wiring trick it takes about an hour. Fresh cedar and fir smell like December the second you bring them inside, and a 14-inch ring fills a standard door without looking lost."
        },
        {
          "t": "h3",
          "text": "What you need for a classic evergreen wreath"
        },
        {
          "items": [
            "One 14-inch wire wreath ring, about $4 at the craft store",
            "Three bunches of fresh cedar or fir, about $5 to $8 each",
            "A spool of green floral wire, 22 gauge",
            "Wire cutters and garden snips",
            "A handful of pinecones and a 2-yard length of ribbon for the bow"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Cut the greens into 6-inch sprigs. Lay three together, fan them out, and wire the bundle to the ring with two tight wraps. Overlap the next bundle so it hides the wire, and work your way round. Keep every bundle pointing the same way — clockwise — and it looks messy halfway round and perfect at the end."
        },
        {
          "t": "h3",
          "text": "Finishing touches that cost almost nothing"
        },
        {
          "t": "p",
          "text": "Tuck in three or four pinecones with short wire stems, wire on a few dried orange slices if you have them, and tie the bow last so it sits on the fullest part. Mist it every two or three days and it stays fresh for three to four weeks on a shaded door."
        }
      ],
      "heading": "DIY Christmas Wreath Ideas That Work on Any Door"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "This is the wreath people photograph. Dried orange slices glow amber in the porch light, cinnamon sticks add the smell, and the whole thing costs about $10 because most of it comes from the fruit bowl. It lasts the entire season and packs away flat for next year."
        },
        {
          "t": "h3",
          "text": "Drying the orange slices"
        },
        {
          "items": [
            "Slice two navel oranges as thin as you can, about 5mm.",
            "Pat each slice dry with a tea towel, then lay them on a wire rack over a baking tray.",
            "Bake at 200°F (90°C) for 2 to 3 hours, flipping once halfway, until dry but still bendy.",
            "Let them cool completely on the rack — they firm up as they cool."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Start with a 12-inch grapevine ring, about $4. Wire the slices on in a loose ring, overlapping them slightly, then tuck cinnamon sticks between every second slice and add a few pinecones. A sprig of dried bay leaves fills bare spots. Finish with a twine bow at the bottom — the look is rustic, so don't fuss over symmetry."
        },
        {
          "t": "h3",
          "text": "Where it looks best"
        },
        {
          "t": "p",
          "text": "On a dark green or black door the amber slices really pop, or above the mantel where the cinnamon scent drifts into the room. Keep it out of rain and it will look the same on New Year's Day as on the first of December."
        }
      ],
      "heading": "Dried Orange & Cinnamon Wreath"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Velvet ribbon is having a moment this year — deep burgundy and forest green loops are all over Pinterest — and this wreath is the easiest one in the guide. No wiring, no glue gun, no mess. If you can tie a loop, you can make it in under an hour."
        },
        {
          "t": "h3",
          "text": "What you need"
        },
        {
          "items": [
            "One 12-inch foam wreath ring, about $3",
            "Three spools of velvet ribbon in burgundy, forest green and cream, 1.5 inches wide",
            "A box of straight pins or a hot glue gun",
            "Five or six small frosted pinecones and one brass bell"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Cut the ribbon into 6-inch lengths. Fold each one into a loop and pin it to the ring, packing the loops tight so no foam shows. Alternate the colours as you go — two burgundy, one green, one cream — and angle the loops slightly outward so the wreath looks full from the front. Glue the pinecones into one cluster at the bottom and hang the little bell from its centre."
        },
        {
          "t": "h3",
          "text": "The one mistake to avoid"
        },
        {
          "t": "p",
          "text": "Don't space the loops out to save ribbon — gaps make a ribbon wreath look thin and sad. Pack them tight; you'll use about 40 loops for a 12-inch ring. If you run short, mix in plain grosgrain ribbon in the same colours; nobody will spot the difference."
        }
      ],
      "heading": "Velvet Ribbon & Pinecone Wreath"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "For a door that leans modern — white walls, black hardware, plain planters — a brass hoop wreath is the right call. It is the lightest wreath here, it takes twenty minutes, and it costs about $25, mostly for the hoop. A florist would charge $60 for the same thing."
        },
        {
          "t": "h3",
          "text": "Three steps, twenty minutes"
        },
        {
          "items": [
            "Wrap floral wire around the bottom third of a 14-inch brass hoop, leaving the top two-thirds bare metal.",
            "Wire on small bunches of eucalyptus and olive branches, all pointing the same way, until the bottom third is covered.",
            "Add three dried orange slices and a sprig of dried lavender, then tie a thin black ribbon bow where the greenery meets the bare hoop."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "The trick is restraint — the bare gold ring is part of the design, so don't fill it. Eucalyptus dries beautifully and keeps its shape for months, so this wreath still looks good in February if you forget to take it down. Hang it with a thin black ribbon over a nail or small hook; a chunky hanger would fight the clean lines."
        },
        {
          "t": "h3",
          "text": "Where to find a brass hoop"
        },
        {
          "t": "p",
          "text": "Craft stores sell them in the macramé aisle for about $12. Embroidery hoops work too — a 14-inch wooden hoop costs about $8 and sprays gold for $5. Spray outside, two light coats, and let it dry an hour before wiring."
        }
      ],
      "heading": "Eucalyptus & Brass Hoop Wreath: A Modern DIY Christmas Wreath Idea"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "If you have kids, a door that gets slammed, or a cat that treats the hallway like a racetrack, make the felt ball wreath. Nothing on it can break. Wool felt balls are soft, warm and a little fuzzy, and a wreath made of them looks like something from a storybook."
        },
        {
          "t": "h3",
          "text": "What you need"
        },
        {
          "items": [
            "One 12-inch foam wreath ring, about $3",
            "About 60 wool felt balls, 1 inch across, in deep red, forest green and cream",
            "A hot glue gun and two glue sticks",
            "A length of grosgrain ribbon for hanging"
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Glue the felt balls onto the ring in tight rings, starting with the outer edge and working in. Alternate colours as you go — two red, one green, one cream came out nicely balanced for us. Fill the middle last, where the gaps show most. The whole job takes about 45 minutes once the glue gun is hot."
        },
        {
          "t": "h3",
          "text": "Making your own felt balls"
        },
        {
          "t": "p",
          "text": "A bag of 60 ready-made felt balls costs about $12 online. To make your own, roll wool roving into tight balls with warm soapy water — about two minutes per ball, so set aside an evening in front of the TV. Either way they last for years."
        }
      ],
      "heading": "Felt Ball & Pom-Pom Wreath"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Paper stars sound flimsy until you see them on a door. Folded from kraft paper or old sheet music, they catch the light like little lanterns, and a whole wreath costs about $5. This is the one to make with kids on a rainy afternoon — the folding is simple and every star comes out a little different."
        },
        {
          "t": "h3",
          "text": "Folding the paper stars"
        },
        {
          "items": [
            "Cut kraft paper into 2-inch wide strips, about 12 inches long.",
            "Fold each strip into a five-pointed star — about three minutes each once you have done two.",
            "Make 12 to 15 stars in mixed sizes, creasing each fold hard with a spoon handle.",
            "Glue the stars onto a 12-inch cardboard ring, overlapping them slightly, then add a few dried flowers or small pinecones in the gaps."
          ],
          "t": "ol"
        },
        {
          "t": "p",
          "text": "Spray the finished wreath with clear sealant if it will hang outside — paper and rain are not friends. Indoors it needs nothing at all. Old sheet music makes the prettiest version: the printed notes show through the folds and the cream paper glows in candlelight."
        },
        {
          "t": "h3",
          "text": "Dried flower version"
        },
        {
          "t": "p",
          "text": "Swap half the paper stars for small bunches of dried lavender, strawflower and statice, wired between the stars. The mix is soft and wintery and smells faintly of lavender for weeks. Dried flowers cost about $8 a bunch, and one bunch covers a whole wreath."
        }
      ],
      "heading": "Paper Star & Dried Flower Wreath"
    },
    {
      "blocks": [
        {
          "t": "p",
          "text": "Making the wreath is the fun part. Hanging it right and putting it away properly is what makes it last. A wreath that falls off the door on Christmas Eve is a memory nobody wants, and one crushed in a box in January has to be remade next year."
        },
        {
          "t": "h3",
          "text": "Hanging it without wrecking the door"
        },
        {
          "items": [
            "Over-the-door metal hanger, about $6, holds up to 10 pounds — best for heavy fresh wreaths.",
            "Outdoor Command hook, rated for 5 pounds, sticks to smooth doors and peels off clean.",
            "Large suction hook for glass doors — check the weight rating first.",
            "Centre it at eye level, about 60 inches up, and check it from the street."
          ],
          "t": "ul"
        },
        {
          "t": "p",
          "text": "Fresh wreaths need misting every two or three days and shade from direct sun. If your door faces south, hang a dried, felt or paper wreath there instead — fresh greens dry out in a week in that heat. If it rains, bring a paper star wreath inside; the rest can handle a shower."
        },
        {
          "t": "h3",
          "text": "Storing wreaths for next year"
        },
        {
          "t": "p",
          "text": "Dried orange, felt, ribbon and paper wreaths pack away in a flat box with tissue paper between layers. Hang them from a hook inside the box instead of stacking them — stacking flattens loops and crushes stars. Label the box, and next December you will thank yourself. Fresh evergreen wreaths go on the compost heap; save the wire ring for the next one."
        }
      ],
      "heading": "Hanging, Weatherproofing & Storing Your Wreaths"
    }
  ],
  "slug": "diy-christmas-wreath-ideas",
  "subcategory": "Wreaths & Garlands",
  "title": "DIY Christmas Wreath Ideas 2026: Easy Evergreen, Dried Orange & Velvet Ribbon Wreaths for Your Front Door",
  "to": "#275E7E"
}),
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
