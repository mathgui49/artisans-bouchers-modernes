import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Engagements } from "@/components/sections/Engagements";
import { Metiers } from "@/components/sections/Metiers";
import { MaitreArtisan } from "@/components/sections/MaitreArtisan";
import { Drive } from "@/components/sections/Drive";
import { Plateaux } from "@/components/sections/Plateaux";
import { Galerie } from "@/components/sections/Galerie";
import { SignatureBand } from "@/components/sections/SignatureBand";
import { Producteurs } from "@/components/sections/Producteurs";
import { Infos } from "@/components/sections/Infos";
import { jsonLdScript, SITE_URL } from "@/lib/seo";

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Accueil · Les Artisans Modernes",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    primaryImageOfPage: `${SITE_URL}/images/plateau-charcuterie.webp`,
    inLanguage: "fr-FR",
    description:
      "Boucherie-charcuterie artisanale, fromagerie, primeur, épicerie & cave à Bain de Bretagne. Drive en ligne, plateaux maison, viande française race à viande, partenaires locaux.",
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(homepageSchema)}
        />
        <Hero />
        <Engagements />
        <Metiers />
        <MaitreArtisan />
        <Drive />
        <Plateaux />
        <Producteurs />
        <Galerie />
        <SignatureBand />
        <Infos />
      </main>
      <Footer />
    </>
  );
}
