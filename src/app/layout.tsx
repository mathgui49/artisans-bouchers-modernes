import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { CartProvider } from "@/lib/cart";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = `https://${business.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — Boucherie · Charcuterie · Fromagerie · Primeur · ${business.address.city}`,
    template: `%s · ${business.name}`,
  },
  description: business.description,
  keywords: [
    "boucherie Bain de Bretagne",
    "charcuterie Bain de Bretagne",
    "boucher artisanal",
    "fromagerie Bain de Bretagne",
    "primeur Bain de Bretagne",
    "viande française locale",
    "colis de viande",
    "drive boucherie Bain de Bretagne",
    "Ille-et-Vilaine",
    "35470",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description: business.shortDescription,
    images: [
      {
        url: "/images/plateau-charcuterie.webp",
        width: 1200,
        height: 630,
        alt: `${business.name} — plateau charcuterie maison`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.shortDescription,
    images: ["/images/plateau-charcuterie.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  category: "food",
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "FoodEstablishment"],
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    description: business.description,
    url: SITE_URL,
    telephone: business.phoneIntl,
    email: business.email,
    image: [
      `${SITE_URL}/images/facade.webp`,
      `${SITE_URL}/images/interieur.webp`,
      `${SITE_URL}/images/plateau-charcuterie.webp`,
    ],
    logo: `${SITE_URL}/logo.png`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressRegion: business.address.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: business.hoursSchema.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days.split(",").map((d) => {
        const map: Record<string, string> = {
          Mo: "Monday",
          Tu: "Tuesday",
          We: "Wednesday",
          Th: "Thursday",
          Fr: "Friday",
          Sa: "Saturday",
          Su: "Sunday",
        };
        return map[d];
      }),
      opens: s.open,
      closes: s.close,
    })),
    sameAs: [business.socials.facebook, business.socials.instagram, business.socials.youtube],
    areaServed: {
      "@type": "City",
      name: business.address.city,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Drive — Colis et pièces en gros",
      url: `${SITE_URL}/boutique`,
    },
  };

  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
