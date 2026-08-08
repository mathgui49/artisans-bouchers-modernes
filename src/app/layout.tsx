import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { brandVars, content } from "@/lib/content";
import { CartProvider } from "@/lib/cart";
import { PreviewBridge } from "@/components/PreviewBridge";

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

const seo = content.seo;
const SITE_URL = `https://${business.domain}`;
const TITLE = seo.title;
const DESCRIPTION = seo.description;
const OG_IMAGES = seo.images.map((img) => ({
  url: img.src,
  width: img.width,
  height: img.height,
  alt: img.alt,
}));

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: seo.titleTemplate,
  },
  description: DESCRIPTION,
  applicationName: business.name,
  keywords: [...seo.keywords],
  authors: [{ name: business.name, url: SITE_URL }],
  creator: business.name,
  publisher: business.name,
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: business.name,
    title: TITLE,
    description: DESCRIPTION,
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [seo.images[0].src],
    creator: seo.twitterCreator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon-32.png",
  },
  manifest: "/manifest.webmanifest",
  category: "food",
  classification: "Boucherie · Charcuterie · Fromagerie · Primeur",
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "FoodEstablishment"],
    "@id": `${SITE_URL}/#business`,
    name: business.legalName,
    alternateName: [business.name, business.shortName],
    legalName: business.legalName,
    description: business.description,
    slogan: business.tagline,
    url: SITE_URL,
    telephone: business.phoneIntl,
    email: business.email,
    image: [
      `${SITE_URL}/images/facade.webp`,
      `${SITE_URL}/images/interieur.webp`,
      `${SITE_URL}/images/plateau-charcuterie.webp`,
      `${SITE_URL}/images/dominique-comptoir.webp`,
      `${SITE_URL}/images/cote-de-boeuf-maturation.webp`,
      `${SITE_URL}/images/maitre-artisan.webp`,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    priceRange: "€€",
    paymentAccepted: ["Cash", "Credit Card"],
    currenciesAccepted: "EUR",
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
    hasMap: `https://www.google.com/maps/search/?api=1&query=${business.geo.lat},${business.geo.lng}`,
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
    sameAs: business.socials.map((s) => s.href),
    award: `${business.maitreArtisan.title} (${business.maitreArtisan.awardedBy}, ${business.maitreArtisan.year})`,
    founder: {
      "@type": "Person",
      name: business.maitreArtisan.name,
      jobTitle: business.maitreArtisan.title,
      worksFor: { "@id": `${SITE_URL}/#business` },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: business.maitreArtisan.title,
        credentialCategory: "Titre de Maître Artisan",
        dateCreated: business.maitreArtisan.date,
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: business.maitreArtisan.awardedBy,
        },
      },
    },
    areaServed: [
      { "@type": "City", name: business.address.city },
      ...business.nearbyTowns.map((name) => ({ "@type": "City", name })),
      { "@type": "AdministrativeArea", name: "Ille-et-Vilaine" },
      { "@type": "AdministrativeArea", name: "Bretagne" },
    ],
    knowsAbout: [
      "Boucherie artisanale",
      "Charcuterie maison",
      "Fromagerie",
      "Primeur",
      "Épicerie fine",
      "Cave",
      "Drive boucherie",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Drive, Colis, plateaux et pièces en gros",
      url: `${SITE_URL}/boutique`,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    inLanguage: "fr-FR",
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <html
      lang="fr-FR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      style={brandVars() as CSSProperties}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="tricolor" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(website).replace(/</g, "\\u003c"),
          }}
        />
        <CartProvider>{children}</CartProvider>
        <PreviewBridge />
      </body>
    </html>
  );
}
