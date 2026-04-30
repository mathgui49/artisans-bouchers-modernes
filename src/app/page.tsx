import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { Engagements } from "@/components/sections/Engagements";
import { Metiers } from "@/components/sections/Metiers";
import { Drive } from "@/components/sections/Drive";
import { Plateaux } from "@/components/sections/Plateaux";
import { Galerie } from "@/components/sections/Galerie";
import { Producteurs } from "@/components/sections/Producteurs";
import { Infos } from "@/components/sections/Infos";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Engagements />
        <Metiers />
        <Drive />
        <Plateaux />
        <Producteurs />
        <Galerie />
        <Infos />
      </main>
      <Footer />
    </>
  );
}
