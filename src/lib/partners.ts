import { content } from "./content";

// Producteurs partenaires. Comme le catalogue, ils sont rangés par famille
// dans `src/content.json` (une famille = une grille affichée = une liste
// réordonnable), puis remis à plat ici pour les données structurées.

export type PartnerCategory = "viande" | "fromage" | "primeur" | "epicerie";

export interface Partner {
  name: string;
  category: PartnerCategory;
  categoryLabel: string;
  description: string;
  location?: string;
  image: string;
}

export const partnerCategories: ReadonlyArray<{
  id: PartnerCategory;
  label: string;
  description: string;
}> = content.partenaires.categories.map((c) => ({
  id: c.id as PartnerCategory,
  label: c.label,
  description: c.description,
}));

export const partners: ReadonlyArray<Partner> = partnerCategories.flatMap((cat) =>
  content.partenaires.groupes[cat.id].map((p) => ({ ...p, category: cat.id })),
);
