import { content } from "./content";

// L'équipe du magasin, éditable depuis `src/content.json`.

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: ReadonlyArray<TeamMember> = content.equipe.membres;
