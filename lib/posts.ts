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
      "Seasonal living is about small, timely changes that make everyday life feel fresh — a warmer throw in winter, lighter linens in spring, a bowl of citrus in summer. These guides help you refresh your home and routines in step with the year, without starting from scratch each season.",
    subcategories: ["Spring Ideas", "Summer Ideas", "Fall / Autumn Ideas", "Winter Ideas", "Seasonal Bucket Lists", "Seasonal Home Refresh"],
    motif: "leaf", from: "#78866B", to: "#243B24",
  },
  {
    slug: "holidays",
    name: "Holidays & Celebrations",
    nav: "Holidays",
    intro:
      "From Friendsgiving tables to New Year's Eve countdowns, celebrations are easier — and far more enjoyable — with a plan. Here you will find themes, timelines, menus and checklists for the holidays readers celebrate most, written so you can host with confidence and still enjoy the day yourself.",
    subcategories: ["Christmas", "Thanksgiving & Friendsgiving", "Halloween", "New Year's Eve", "Valentine's Day", "Easter", "Mother's Day", "Birthdays & Gatherings"],
    motif: "star", from: "#C99A45", to: "#8a6420",
  },
  {
    slug: "home-decor",
    name: "Home & Decor",
    nav: "Home & Decor",
    intro:
      "Good seasonal decor works with the home you already have. Our decor guides are organised room by room — apartments and small spaces included — with styling tips, colour palettes and budget notes, so a festive, comfortable home never depends on a big house or a big spend.",
    subcategories: ["Apartment Decor", "Living Room", "Bedroom", "Kitchen & Dining", "Entryway", "Tablescapes", "Window Decor", "Wreaths", "Budget Decor", "Small-Space Ideas"],
    motif: "tree", from: "#3d5c3a", to: "#243B24",
  },
  {
    slug: "food-recipes",
    name: "Food & Recipes",
    nav: "Food & Recipes",
    intro:
      "Seasonal cooking starts with clear recipes: honest ingredient lists, step-by-step method, timings and storage advice. From Christmas cookies to party appetisers and seasonal drinks, these are recipes written to be baked, served and shared — not just admired.",
    subcategories: ["Cookies & Baking", "Desserts", "Appetizers", "Party Food", "Drinks", "Brunch", "Holiday Menus", "Seasonal Ingredients"],
    motif: "cookie", from: "#b07a3f", to: "#7a4a1e",
  },
  {
    slug: "diy-crafts",
    name: "DIY & Crafts",
    nav: "DIY & Crafts",
    intro:
      "Handmade touches are what make seasonal decor feel personal. Each project here lists the materials you actually need, a realistic difficulty level and clear steps — from beginner-friendly window painting to wreaths, garlands and gifts you can make in an afternoon.",
    subcategories: ["Window Painting", "Wreaths & Garlands", "Handmade Gifts", "Paper Crafts", "Table Decor DIY", "Kids' Activities", "Printables"],
    motif: "snow", from: "#5b7a8c", to: "#2f4a5a",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle, Beauty & Style",
    nav: "Lifestyle",
    intro:
      "Seasons change more than the weather — they change what we wear, how we host and how we spend our days. This hub gathers seasonal outfits, hairstyle inspiration, hosting tips and everyday routines that help you feel in step with the time of year.",
    subcategories: ["Hairstyles", "Seasonal Outfits", "Beauty Inspiration", "Hosting Tips", "Family Activities", "Everyday Routines", "Gift Guides"],
    motif: "bloom", from: "#a06a7a", to: "#6e4453",
  },
];

export const catBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;

export type Section = { heading: string; body: string[] };
export type Faq = { q: string; a: string };
export type Post = {
  slug: string; title: string; category: string; subcategory: string;
  excerpt: string; date: string; readTime: number;
  motif: string; from: string; to: string;
  intro: string; sections: Section[]; faqs: Faq[];
};

const P = (o: Post) => o;

export const POSTS: Post[] = [
  P({
    slug: "christmas-apartment-decor-ideas", title: "Christmas Apartment Decor Ideas",
    category: "home-decor", subcategory: "Apartment Decor",
    excerpt: "Room-by-room Christmas styling for small apartments — a tree that fits, renter-friendly touches and cosy layers that store away in one box.",
    date: "2026-11-18", readTime: 8, motif: "tree", from: "#3d5c3a", to: "#243B24",
    intro: "A small apartment can feel every bit as festive as a big house — the secret is decorating in layers and choosing pieces that earn their space. This guide walks room by room through practical, renter-friendly Christmas ideas that look generous without overwhelming a compact home.",
    sections: [
      { heading: "Start with a tree that fits the room", body: ["Choose a slim or tabletop tree sized to your floor space rather than the tree you wish you had room for. A narrow tree in a woven basket or a simple stand keeps the footprint small and the look intentional.", "Decorate in a limited palette — two or three colours plus warm white lights — so the tree reads as one calm focal point instead of visual noise in a small room."] },
      { heading: "Layer textiles before you buy decor", body: ["Swap cushion covers, add a plaid or knit throw and lay a washable seasonal runner before buying anything new. Textiles change the feel of a room faster than ornaments do, and they fold flat for storage in January."] },
      { heading: "Use windows, doors and shelves", body: ["Wreaths on interior doors, garland along a bookshelf and a few ornaments in a bowl on the coffee table spread Christmas through the apartment without using floor space. Command hooks and over-door hangers keep everything renter-friendly."] },
      { heading: "Finish with light and scent", body: ["Warm fairy lights along a shelf or window frame make a small room glow in the evening. A simmer pot or a cedar-scented candle adds the seasonal scent that makes decor feel complete."] },
    ],
    faqs: [
      { q: "How can I decorate a rental apartment without damaging walls?", a: "Use removable adhesive hooks, over-door wreath hangers and tension rods for garlands. Everything in this guide can be hung, draped or placed — nothing needs nails or paint." },
      { q: "What is the best Christmas tree size for a small apartment?", a: "A slim tree between 4 and 6 feet tall usually fits best. Measure your ceiling height and floor corner first, and leave at least a few inches above the tree topper." },
      { q: "How do I store apartment Christmas decor?", a: "Aim for one or two lidded boxes: wrap lights around card, store ornaments in divided boxes or egg cartons, and fold textiles into the same box so everything comes out together next year." },
    ],
  }),
  P({
    slug: "christmas-window-painting-ideas", title: "Christmas Window Painting Ideas",
    category: "diy-crafts", subcategory: "Window Painting",
    excerpt: "Festive window art anyone can try — the right paints, simple designs from snowflakes to village scenes, and how to clean it all off in January.",
    date: "2026-11-17", readTime: 7, motif: "snow", from: "#5b7a8c", to: "#2f4a5a",
    intro: "Painted windows are one of the cheapest, happiest ways to decorate for Christmas — visible from inside and out, and completely temporary. This guide covers the paints that wash off cleanly, beginner-friendly designs and the cleanup, so you can try it with confidence.",
    sections: [
      { heading: "Choose paint that washes off", body: ["Use water-based tempera (gouache-style poster paint) or purpose-made washable window paint. A tiny drop of dish soap in the mix helps the paint grip glass and makes removal easier later.", "Avoid acrylic craft paint on windows you rent or want spotless — it can need scraping to remove."] },
      { heading: "Beginner designs that always work", body: ["Start with snowflakes, stars, a simple snowy village silhouette along the bottom pane, or holly sprigs in the corners. White paint alone looks elegant and is the most forgiving for first attempts.", "Print a design and tape it to the outside of the glass, then trace from inside — the easiest way to get shapes you are happy with."] },
      { heading: "Work in layers and let them dry", body: ["Paint the white base shapes first and let them dry for 20–30 minutes before adding colour details. Thin layers look smoother and dry faster than one thick coat."] },
      { heading: "Cleaning it off in January", body: ["Spray the paint with warm water, wait a few minutes, then wipe with a cloth or squeegee. Washable tempera lifts off easily; a plastic scraper handles any stubborn edges without scratching glass."] },
    ],
    faqs: [
      { q: "What paint is best for Christmas window painting?", a: "Washable tempera or poster paint is the best choice for most people: it covers well, is inexpensive and washes off with warm water." },
      { q: "Will window paint damage the glass?", a: "Water-based washable paints do not damage glass. Avoid permanent markers and oil-based paints, and test any new product on a small corner first." },
    ],
  }),
  P({
    slug: "friendsgiving-party-ideas", title: "Friendsgiving Party Ideas",
    category: "holidays", subcategory: "Thanksgiving & Friendsgiving",
    excerpt: "A complete Friendsgiving plan — themes, a realistic hosting timeline, potluck coordination and table ideas so the host enjoys the day too.",
    date: "2026-11-16", readTime: 9, motif: "leaf", from: "#b07a3f", to: "#7a4a1e",
    intro: "Friendsgiving is Thanksgiving's relaxed sibling: the people are chosen, the rules are flexible and the food is shared. This guide gives you a theme shortlist, a week-by-week timeline and a potluck system that prevents the classic outcome — five desserts and no sides.",
    sections: [
      { heading: "Pick a simple theme", body: ["A theme gives guests direction without adding work: try Classic Harvest, Pie & Sides Only, or a Soup-and-Sweaters night for small spaces. State the theme plainly on the invitation so nobody has to guess."] },
      { heading: "Run the potluck with a sign-up list", body: ["Share one sign-up list with categories — mains, sides, salads, desserts, drinks — and ask guests to write exactly what they are bringing. As host, claim the turkey (or main) and the gravy so the centre of the meal is covered."] },
      { heading: "Follow a calm timeline", body: ["Two weeks out: send invitations and the sign-up list. Three days out: confirm dishes and borrow chairs. The day before: set the table and chill drinks. On the day, your only jobs are the main dish, warming space and enjoying your friends."] },
      { heading: "Add one memorable activity", body: ["A gratitude card at each place setting, a pie-judging vote or a group photo by the table turns dinner into an occasion. Keep it optional and short — the conversation is the entertainment."] },
    ],
    faqs: [
      { q: "When should Friendsgiving be held?", a: "Most people host it the weekend before or after Thanksgiving Day, so friends who travel to family can still come. Send invitations at least two weeks ahead." },
      { q: "How do I avoid duplicate potluck dishes?", a: "Use a shared sign-up list where guests can see what others have claimed, and assign categories rather than leaving the menu fully open." },
    ],
  }),
  P({
    slug: "christmas-cookie-recipes", title: "Christmas Cookie Recipes",
    category: "food-recipes", subcategory: "Cookies & Baking",
    excerpt: "A reliable starter collection of Christmas cookies — gingerbread, shortbread and chocolate crinkles — with timings, storage and gifting advice.",
    date: "2026-11-15", readTime: 10, motif: "cookie", from: "#b07a3f", to: "#7a4a1e",
    intro: "A good Christmas cookie box needs contrast: something spiced, something buttery, something chocolate. These three foundation recipes are chosen because the doughs are forgiving, the timings are reliable and all three keep well for gifting.",
    sections: [
      { heading: "Spiced gingerbread", body: ["Whisk 350g plain flour, 1 tsp bicarbonate of soda, 2 tsp ground ginger and 1 tsp cinnamon. Rub in 125g cold butter, then mix in 175g brown sugar, 1 egg and 4 tbsp golden syrup. Chill 30 minutes, roll to 5mm, cut shapes and bake at 180°C (160°C fan) for 10–12 minutes."] },
      { heading: "Classic shortbread", body: ["Beat 200g soft butter with 100g caster sugar, then fold in 300g plain flour until a dough forms. Pat into a lined tin or roll and cut rounds; chill 20 minutes. Bake at 160°C (140°C fan) for 18–22 minutes until pale gold. Dust with sugar while warm."] },
      { heading: "Chocolate crinkles", body: ["Mix 200g caster sugar, 60ml oil, 2 eggs and 1 tsp vanilla; add 200g flour, 50g cocoa, 1 tsp baking powder and a pinch of salt. Chill at least 2 hours, roll balls in icing sugar and bake at 180°C (160°C fan) for 10 minutes — crinkled tops, soft centres."] },
      { heading: "Storage and gifting", body: ["Store each variety in its own airtight tin so flavours stay distinct; all three keep 1–2 weeks at room temperature. For gifts, layer cookies between parchment in a lined tin and add a note with the bake date."] },
    ],
    faqs: [
      { q: "Can I freeze Christmas cookie dough?", a: "Yes. Gingerbread and crinkle doughs freeze well for up to 3 months — portion first, freeze on a tray, then bag. Bake from frozen, adding 1–2 minutes." },
      { q: "Why did my cookies spread too much?", a: "The dough was too warm or the butter too soft. Chill shaped cookies for 15–20 minutes before baking and check your oven temperature with a thermometer if it happens often." },
    ],
  }),
  P({
    slug: "christmas-apartment-decorating-on-a-budget", title: "Christmas Apartment Decorating on a Budget",
    category: "home-decor", subcategory: "Budget Decor",
    excerpt: "A festive apartment for less — what to buy first, what to make free from nature and paper, and the swaps that save the most money.",
    date: "2026-11-14", readTime: 7, motif: "star", from: "#C99A45", to: "#8a6420",
    intro: "A beautiful Christmas apartment is mostly about editing, not spending. This budget plan ranks purchases by impact, leans on free natural and paper decor, and shows where a small spend actually shows.",
    sections: [
      { heading: "Spend first on light", body: ["One set of warm-white fairy lights changes an evening room more than any ornament. Drape them over a shelf, mirror or window and let them do the decorating after dark."] },
      { heading: "Make decor from nature and paper", body: ["Pinecones, clipped greenery (where permitted), dried orange slices and paper snowflakes cost almost nothing and look genuinely elegant. A bowl of pinecones with a ribbon is a centrepiece."] },
      { heading: "Shop your home before shops", body: ["Re-group what you own: red or gold books as risers, scarves as table runners, mugs as candle holders. Moving existing pieces into seasonal arrangements often removes half the shopping list."] },
      { heading: "Buy once, store well", body: ["If you buy, choose classic pieces you will reuse for years — a wreath, a tree skirt, neutral lights — and store them in one labelled box so next December starts free."] },
    ],
    faqs: [
      { q: "What is a realistic budget for apartment Christmas decor?", a: "Many readers do it for the cost of one set of lights plus craft supplies by making paper and natural decor. Set your number first, then follow the priority order in this guide." },
      { q: "What should I never buy cheap?", a: "Lights — very cheap sets can run hot and fail quickly. Buy certified lights from a reputable retailer and never leave them on unattended." },
    ],
  }),
  P({
    slug: "easy-christmas-window-painting-designs", title: "Easy Christmas Window Painting Designs",
    category: "diy-crafts", subcategory: "Window Painting",
    excerpt: "Beginner designs step by step — snowflakes, a robin, a candle arch and a snowy village — each with the strokes in order.",
    date: "2026-11-13", readTime: 6, motif: "snow", from: "#5b7a8c", to: "#2f4a5a",
    intro: "You do not need drawing skills to paint a window people stop to look at — you need designs built from simple shapes. Each design below is broken into the order of strokes, using washable tempera and one round brush plus one flat brush.",
    sections: [
      { heading: "Design 1: Five-minute snowflakes", body: ["Paint one straight cross, add a smaller X over it, then short V ticks at the end of each arm. Vary the size across the pane — a drift of different snowflakes looks more natural than identical copies."] },
      { heading: "Design 2: A round robin", body: ["Start with a brown circle for the body and a smaller circle for the head. Add a red semicircle breast, a triangle beak and a tail. A white dot in the eye brings it to life; perch it on a simple branch line."] },
      { heading: "Design 3: Candle arch", body: ["Paint a wide arch outline in white along the top of the pane, then hang simple candle shapes from it — rectangles with a teardrop flame in warm yellow. It frames the whole window and glows against evening glass."] },
      { heading: "Design 4: Snowy village strip", body: ["Along the bottom pane, paint a row of simple house silhouettes in white — rectangles, triangle roofs, square windows in yellow. Add falling dots of snow above. It reads beautifully from the street."] },
    ],
    faqs: [
      { q: "I cannot draw — which design should I start with?", a: "Snowflakes. They are built from straight lines, mistakes look like variety, and a window of them in white paint looks polished at any skill level." },
      { q: "Can children join in?", a: "Yes — washable tempera is ideal for children with supervision. Give them a lower pane and the snow-dot job, and keep a damp cloth nearby for drips." },
    ],
  }),
  P({
    slug: "friendsgiving-table-decor-ideas", title: "Friendsgiving Table Decor Ideas",
    category: "holidays", subcategory: "Thanksgiving & Friendsgiving",
    excerpt: "Centrepieces, place settings and small-space table styling for Friendsgiving — warm, layered and achievable the day before.",
    date: "2026-11-12", readTime: 7, motif: "leaf", from: "#a8622c", to: "#6e3d14",
    intro: "A Friendsgiving table should feel generous but not precious — guests will pass dishes across it all evening. These ideas build a warm, layered table from a runner, low centrepieces and place settings that double as favours.",
    sections: [
      { heading: "Build the base: runner and layers", body: ["Start with a linen or plaid runner down the centre, then layer chargers or woven placemats at each seat. Mixing two napkin colours in the same palette keeps the table relaxed rather than matched."] },
      { heading: "Keep centrepieces low", body: ["Choose low arrangements — a line of small pumpkins and candles, a garland of eucalyptus, or bowls of apples and nuts — so guests can see each other and pass dishes without moving decor."] },
      { heading: "Place settings with a purpose", body: ["Add a name card and one small prompt — a gratitude question or a favourite-memory starter. A mini pumpkin or a wrapped biscuit at each setting doubles as a take-home favour."] },
      { heading: "Small tables and mixed seating", body: ["For a small table, run decor vertically instead: a hanging branch or paper garland above the table keeps the surface free. Mismatched chairs are part of Friendsgiving's charm — unify them with the same napkin colour."] },
    ],
    faqs: [
      { q: "How early can I set the Friendsgiving table?", a: "The day before is ideal for everything except fresh flowers and food. Setting early removes the biggest day-of stress and lets you spot missing chairs or glasses in time." },
      { q: "Are candles safe on a busy table?", a: "Use candles in glass holders away from paper decor, or choose good LED candles for crowded tables and homes with children or pets." },
    ],
  }),
  P({
    slug: "christmas-cookie-decorating-ideas", title: "Christmas Cookie Decorating Ideas",
    category: "food-recipes", subcategory: "Cookies & Baking",
    excerpt: "Icing techniques, colour palettes and simple designs that look impressive — flooding, piping and sprinkle strategies for every skill level.",
    date: "2026-11-11", readTime: 8, motif: "cookie", from: "#a06a7a", to: "#6e4453",
    intro: "Decorated cookies look professional when you master two consistencies of icing and a short list of designs. This guide explains flooding and piping in plain terms, suggests palettes that photograph beautifully and orders the designs from easiest to showpiece.",
    sections: [
      { heading: "Two icings, every design", body: ["Royal icing at piping consistency holds edges; thinned to flood consistency it fills smoothly inside them. Make one batch, pipe outlines with the thick half, then thin the rest with drops of water for flooding."] },
      { heading: "Palettes that always work", body: ["Classic red, white and green; soft sage and cream; or gingerbread brown with white alone. Limiting colours makes a mixed box look designed — and saves buying a shelf of colourings."] },
      { heading: "Start with sprinkle and dip designs", body: ["Half-dipped cookies with sprinkles, white-iced snowflakes with a single piped line pattern, and stamped shortbread need no fine piping skills and still look gift-worthy."] },
      { heading: "Level up: wet-on-wet patterns", body: ["While flood icing is wet, dot a second colour and drag a cocktail stick through it for hearts, feathers and marbling. Work one cookie at a time — the technique depends on the icing staying wet."] },
    ],
    faqs: [
      { q: "How long does royal icing take to dry?", a: "Flooded cookies need 6–8 hours (ideally overnight) before stacking or packaging. A fan in the room helps the surface set with a smooth shine." },
      { q: "Can I decorate cookies with children?", a: "Yes — give children cooled cookies, thicker icing in squeezy bottles and bowls of sprinkles. Expect delicious, not perfect, and photograph them anyway." },
    ],
  }),
  P({
    slug: "new-years-eve-party-ideas", title: "New Year's Eve Party Ideas",
    category: "holidays", subcategory: "New Year's Eve",
    excerpt: "Themes, food timing, decor and a countdown plan for a New Year's Eve party at home — including an early-evening version for families.",
    date: "2026-11-10", readTime: 8, motif: "star", from: "#3a3f6b", to: "#1e2138",
    intro: "The best New Year's Eve parties are paced, not packed: food in waves, one or two planned moments and a countdown that feels like an event. This guide offers themes for different homes and a timing plan that carries a party comfortably to midnight.",
    sections: [
      { heading: "Choose a theme with a dress code hint", body: ["Black-and-gold classic, silver disco, or pyjama-party comfort — any theme works if the invitation hints at dress level. Guests relax when they know what to wear."] },
      { heading: "Serve food in three waves", body: ["Shareable appetisers on arrival, something warm and substantial around 10pm, and a small sweet bite before midnight. Waves keep the table fresh and the host out of the kitchen."] },
      { heading: "Plan the countdown properly", body: ["Decide your midnight moment: a streamed countdown on the TV, glasses ready five minutes before, and a song queued for just after. A balloon drop from a net or a shower of confetti poppers makes the moment for children and adults alike."] },
      { heading: "The family-friendly early version", body: ["Celebrate 'midnight' at 8pm with a countdown video from another time zone, then let children head to bed feeling included. The party continues, nobody misses the moment."] },
    ],
    faqs: [
      { q: "How much food do I need for a New Year's Eve party?", a: "Plan on appetisers as a meal: roughly 10–12 pieces per guest across the evening for a party without a sit-down dinner, plus one substantial warm dish in the middle of the night." },
      { q: "What is a good non-alcoholic midnight toast?", a: "Sparkling apple or grape juice in proper glasses, or a homemade citrus-and-ginger fizz. The ritual matters more than the drink." },
    ],
  }),
  P({
    slug: "winter-home-decor-ideas", title: "Winter Home Decor Ideas",
    category: "seasonal-living", subcategory: "Winter Ideas",
    excerpt: "After-Christmas winter styling — cosy textures, candlelight and calm palettes that carry your home from January to early spring.",
    date: "2026-11-09", readTime: 7, motif: "bloom", from: "#78866B", to: "#43543f",
    intro: "When the Christmas decor comes down, rooms can feel bare — but winter itself has a look worth keeping. This guide styles the post-holiday home with texture, warm light and a calm palette, so January feels cosy rather than empty.",
    sections: [
      { heading: "Keep the texture, remove the theme", body: ["Stay cosy by keeping knit throws, wool cushions and candles while packing away anything explicitly festive. The room keeps its winter warmth without a single ornament."] },
      { heading: "Switch to a calm winter palette", body: ["Cream, soft grey, sage and natural wood replace red and green. A bowl of pinecones, bare branches in a vase and white flowers or eucalyptus keep the seasonal link in a quieter register."] },
      { heading: "Make light the decor", body: ["Short days make lighting the main event: layered lamps, candles grouped on trays, and one string of plain warm fairy lights (no colours) along a shelf carry a room through to spring."] },
      { heading: "Add one fresh element per room", body: ["A new cushion cover, a stack of winter books, a scented candle — one deliberate change per room signals a new season arriving, not the old one ending."] },
    ],
    faqs: [
      { q: "When should Christmas decor come down?", a: "Traditionally by Twelfth Night (5–6 January), but any time in early January works. Packing away in daylight with labelled boxes makes next year easier." },
      { q: "How do I stop my home feeling empty afterwards?", a: "Replace, don't just remove: for every festive item packed away, add back a neutral winter piece — texture, greenery or light — from the ideas in this guide." },
    ],
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
