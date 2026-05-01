/**
 * Médaillons typographiques pour les pièces en gros.
 * Style sceau de boucher : cercle + texte + accent tricolore.
 */

type IconKey = "pig" | "beef" | "beef-leg" | "lamb";

interface MedallionConfig {
  label: string;
  sub: string;
  origin: string;
  ornament: "star" | "flame" | "leaf" | "wheat";
}

const CONFIG: Record<IconKey, MedallionConfig> = {
  pig: {
    label: "Porc",
    sub: "Demi cochon",
    origin: "Élevage français",
    ornament: "leaf",
  },
  "beef-leg": {
    label: "Bœuf",
    sub: "½ Cuisse",
    origin: "Race à viande",
    ornament: "star",
  },
  beef: {
    label: "Bœuf",
    sub: "Cuisse entière",
    origin: "Race à viande",
    ornament: "star",
  },
  lamb: {
    label: "Agneau",
    sub: "Pièce entière",
    origin: "Origine France",
    ornament: "wheat",
  },
};

function Ornament({ kind }: { kind: MedallionConfig["ornament"] }) {
  switch (kind) {
    case "star":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M12 2 L13.7 8.5 L20 9 L15 13 L16.5 19.5 L12 16 L7.5 19.5 L9 13 L4 9 L10.3 8.5 Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M21 3 C12 3 6 8 5 14 C5 18 7 21 11 21 C17 21 21 14 21 5 Z" opacity="0.9" />
          <path d="M5 14 L19 4" stroke="white" strokeWidth="1" fill="none" opacity="0.45" />
        </svg>
      );
    case "wheat":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
          <path d="M12 22 L12 4" />
          <path d="M12 8 L8 5 M12 8 L16 5" />
          <path d="M12 12 L8 9 M12 12 L16 9" />
          <path d="M12 16 L8 13 M12 16 L16 13" />
          <path d="M12 20 L8 17 M12 20 L16 17" />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M12 2 C13 6 16 8 16 13 C16 17 14 20 12 20 C10 20 8 17 8 13 C8 11 9 9 10 8 C10 10 11 11 12 11 C12 8 11 5 12 2 Z" />
        </svg>
      );
  }
}

export function ProductIcon({ name, label }: { name: IconKey; label: string }) {
  const cfg = CONFIG[name];
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[color:var(--color-cream-deep)] overflow-hidden"
      role="img"
      aria-label={label}
    >
      {/* Top tricolor strip */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background:
            "linear-gradient(to right, #1d3a8a 0%, #1d3a8a 33.333%, #faf6ef 33.333%, #faf6ef 66.666%, var(--color-bordeaux) 66.666%, var(--color-bordeaux) 100%)",
        }}
        aria-hidden
      />

      {/* Soft radial dot pattern (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          color: "var(--color-bordeaux)",
        }}
        aria-hidden
      />

      {/* Decorative circular frame */}
      <svg
        className="absolute inset-0 w-full h-full text-[color:var(--color-bordeaux)] opacity-[0.18]"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <circle cx="200" cy="150" r="112" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="150" r="118" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
      </svg>

      {/* Center content */}
      <div className="relative flex flex-col items-center text-center px-4 text-[color:var(--color-bordeaux)]">
        {/* Top ornament */}
        <div className="flex items-center gap-2 mb-2 opacity-90">
          <span className="h-px w-6 bg-current opacity-50" />
          <Ornament kind={cfg.ornament} />
          <span className="h-px w-6 bg-current opacity-50" />
        </div>

        {/* Big label */}
        <div className="font-display tracking-tight leading-none text-[2.6rem] sm:text-[2.8rem] lg:text-[3.2rem]">
          {cfg.label}
        </div>

        {/* Sub */}
        <div
          className="font-display italic font-light text-[color:var(--color-bordeaux)]/85 text-base sm:text-lg leading-tight mt-1"
        >
          {cfg.sub}
        </div>

        {/* Origin tag */}
        <div className="mt-2 text-[0.6rem] tracking-[0.22em] uppercase font-semibold text-[color:var(--color-bordeaux)]/70">
          {cfg.origin}
        </div>
      </div>

      {/* Decorative corner numbers (butcher stamp style) */}
      <span className="absolute bottom-3 left-3 text-[0.6rem] font-mono tracking-widest text-[color:var(--color-bordeaux)]/40">
        FR · 35
      </span>
      <span className="absolute bottom-3 right-3 text-[0.6rem] font-mono tracking-widest text-[color:var(--color-bordeaux)]/40">
        N°{name === "pig" ? "01" : name === "beef-leg" ? "02" : name === "beef" ? "03" : "04"}
      </span>
    </div>
  );
}

export type { IconKey };
