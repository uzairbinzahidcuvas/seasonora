# Seasonora — Website

Seasonal lifestyle blog for **Seasonora** ("Make Every Season Special."), built with
Next.js (App Router) and hand-written modern CSS — no Tailwind, no external stock photos
(all article visuals are original CSS/SVG artwork in the brand colours).

## Run it

```bash
npm install
npm run dev     # local development → http://localhost:3000
npm run build   # production build (all pages statically generated)
npm start       # serve the production build
```

## Structure

- `app/` — routes: home (`page.tsx`), 6 category hubs (`seasonal-living`, `holidays`,
  `home-decor`, `food-recipes`, `diy-crafts`, `lifestyle`), articles at `post/[slug]`,
  `about`, `contact`, `privacy-policy`, `terms`, `disclaimer`, `editorial-policy`,
  `search`, custom 404, plus `sitemap.ts`, `robots.ts` and an RSS feed at `feed.xml/route.ts`.
- `lib/config.ts` — **site configuration. Change `SITE_URL` here when a custom domain
  is bought**; canonicals, Open Graph, sitemap, robots and JSON-LD all read from it.
- `lib/posts.ts` — **all content lives here**: categories (names, intros, subcategories)
  and the 10 launch articles (slug, title, category, excerpt, sections, FAQs, visual theme).
  To publish a full article later, replace/extend its entry in this file.
- `components/` — `Header` (top bar, logo, sticky nav, expanding search, mobile drawer),
  `Footer`, `Sidebar`, `PostCard`, `Visual` (SVG article artwork), `ShareRow`, `Newsletter`.
- `public/logo.png` — the Seasonora wordmark; `public/favicon.svg` — "S" leaf favicon.
- `app/globals.css` — the complete design system (brand colours #243B24 / #78866B /
  #F8F3E9 / #C99A45, Playfair Display headings + Inter body, responsive breakpoints).

## SEO included

Per-page titles/descriptions/canonicals, Open Graph + Twitter cards, JSON-LD
(Organization + WebSite/SearchAction in the layout, Article + BreadcrumbList on posts,
ItemList + BreadcrumbList on category hubs), generated sitemap, robots.txt, RSS feed,
semantic HTML with one H1 per page.
