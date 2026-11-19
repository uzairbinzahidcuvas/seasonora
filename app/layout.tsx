import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, TAGLINE, PINTEREST_URL, FACEBOOK_URL } from "@/lib/config";
import "./globals.css";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — ${TAGLINE}`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", siteName: SITE_NAME, title: `${SITE_NAME} — ${TAGLINE}`,
    description: SITE_DESCRIPTION, url: "/", locale: "en_US",
    images: [{ url: "/logo.png", width: 1200, height: 390, alt: "Seasonora — Make Every Season Special" }],
  },
  twitter: { card: "summary_large_image", title: `${SITE_NAME} — ${TAGLINE}`, description: SITE_DESCRIPTION, images: ["/logo.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  other: { "p:domain_verify": "f292788a5579f1d5a79259a8b25d4355", "monetag": "d613594cff34c296a55c7144b424b2d7", "google-site-verification": "lTlNkAk6467BVjPiq_UamU-uNHm7LP3GJIcIFuIlAJY" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: SITE_URL,
      logo: `${SITE_URL}/logo.png`, slogan: TAGLINE, sameAs: [PINTEREST_URL, FACEBOOK_URL],
    },
    {
      "@type": "WebSite", "@id": `${SITE_URL}/#site`, url: SITE_URL, name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#org` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        {/* Monetag OnClick (zone 12300743) — literal tag at top of body, exactly as provided by Monetag */}
        <script dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='12300743',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
