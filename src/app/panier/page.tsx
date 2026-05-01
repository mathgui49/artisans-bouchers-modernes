import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartView } from "@/components/shop/CartView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon panier",
  description:
    "Récapitulatif de votre panier. Finalisez votre commande pour retrait en magasin à Bain de Bretagne.",
  alternates: { canonical: "/panier" },
  robots: { index: false, follow: false },
};

export default function PanierPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[color:var(--color-cream)]">
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container-x">
            <div className="max-w-2xl mb-10 md:mb-14">
              <p className="eyebrow mb-4">
                <span className="flag-bar"><span /><span /><span /></span>
                Votre commande
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
                Mon panier.
              </h1>
              <p className="mt-4 text-[color:var(--color-stone)] text-lg leading-relaxed">
                Vérifiez votre sélection, ajoutez vos coordonnées et la date de retrait
                souhaitée. Vous recevrez une confirmation par email sous 48h ouvrées.
              </p>
            </div>
            <h2 className="sr-only">Articles du panier et formulaire de commande</h2>
            <CartView />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
