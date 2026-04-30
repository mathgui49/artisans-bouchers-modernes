export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: ReadonlyArray<TeamMember> = [
  { name: "Dominique", role: "Boucher dirigeant", image: "/images/team/dominique.webp" },
  { name: "Mélanie", role: "Directrice générale", image: "/images/team/melanie.webp" },
  { name: "Céline", role: "Bouchère · Responsable magasin", image: "/images/team/celine.webp" },
  { name: "Christèle", role: "Vendeuse · Préparatrice", image: "/images/team/christele.webp" },
  { name: "Jimmy", role: "Boucher", image: "/images/team/jimmy.webp" },
  { name: "Clémence", role: "Vendeuse · Préparatrice", image: "/images/team/avatar.webp" },
  { name: "Kyllian", role: "Primeur & Fromager", image: "/images/team/kyllian.webp" },
  { name: "Océane", role: "Bouchère", image: "/images/team/oceane.webp" },
  { name: "Neven", role: "Apprenti boucher", image: "/images/team/neven.webp" },
  { name: "Chrystèle Brulé", role: "Assistante administrative", image: "/images/team/avatar.webp" },
];
