import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartView } from "@/components/shop/CartView";
import { content } from "@/lib/content";
import type { Metadata } from "next";

const page = content.pages.panier;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
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
                {page.eyebrow}
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
                {page.title}
              </h1>
              <p className="mt-4 text-[color:var(--color-stone)] text-lg leading-relaxed">
                {page.intro}
              </p>
            </div>
            <h2 className="sr-only">{page.listTitle}</h2>
            <CartView />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
