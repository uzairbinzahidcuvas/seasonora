import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, TAGLINE, PINTEREST_URL, FACEBOOK_URL } from "@/lib/config";
import "./globals.css";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
