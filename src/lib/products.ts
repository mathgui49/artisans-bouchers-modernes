import { content } from "./content";
import type { ProduitContenu } from "./content";

// Catalogue du drive. Les fiches produits vivent dans `src/content.json`,
// rangées par famille (colis / plateaux / pièces) parce que c'est ainsi
// qu'elles s'affichent, et que l'éditeur réordonne chaque famille
// indépendamment. On les remet ici à plat pour le panier et les données
// structurées, qui cherchent un produit par son identifiant.

export type ProductCategory = "colis" | "plateau" | "piece";

export type ProductIconKey = "pig" | "beef" | "beef-leg" | "lamb";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  /** Prix unitaire à l'unité (ou par personne pour les pierrades). */
  price: number;
  oldPrice?: number;
  /** Prix au kg si applicable (info). */
  perKg?: number;
  /** Poids approx ou nombre de portions. */
  weight?: string;
  servings?: string;
  /** Composition (pour les colis et plateaux). */
  items?: ReadonlyArray<string>;
  shortDescription: string;
  /** Photo produit OU clé d'icône SVG (mutuellement exclusifs en pratique). */
  image?: string;
  icon?: ProductIconKey;
  /** Suffixe affiché à droite du prix (ex. " /kg", " /pers."). */
  unitSuffix?: string;
  /** Texte additionnel (ex. délai). */
  notice?: string;
}

export const productCategories: ReadonlyArray<{
  id: ProductCategory;
  label: string;
  description: string;
}> = content.catalogue.categories.map((c) => ({
  id: c.id as ProductCategory,
  label: c.label,
  description: c.description,
}));

function labelOf(category: ProductCategory): string {
  return productCategories.find((c) => c.id === category)?.label ?? "";
}

function toProduct(raw: ProduitContenu, category: ProductCategory): Product {
  return {
    ...raw,
    category,
    categoryLabel: labelOf(category),
    icon: raw.icon as ProductIconKey | undefined,
  };
}

export const products: ReadonlyArray<Product> = [
  ...content.catalogue.colis.map((p) => toProduct(p, "colis")),
  ...content.catalogue.plateaux.map((p) => toProduct(p, "plateau")),
  ...content.catalogue.pieces.map((p) => toProduct(p, "piece")),
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
