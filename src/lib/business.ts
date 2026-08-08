import { content } from "./content";

// Coordonnées, horaires et blocs de la page d'accueil : tout vient
// désormais de `src/content.json` (la source éditable par le client).
// Ces exports restent en place pour que les composants n'aient pas à
// connaître la forme du fichier de contenu.

export const business = content.business;

/** Les cinq rayons du magasin, section « Nos métiers ». */
export const departements = content.metiers.items;

/** Les quatre promesses de la section « Nos engagements ». */
export const engagements = content.engagements.items;
