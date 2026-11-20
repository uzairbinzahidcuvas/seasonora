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
  images?: { after: number; img: PostImage }[];
};

const P = (o: Post) => o;

export const POSTS: Post[] = [
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
