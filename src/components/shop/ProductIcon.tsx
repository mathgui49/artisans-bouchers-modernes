/**
 * SVG silhouettes minimalistes pour les pièces en gros
 * (cochon, bœuf, agneau). Style ligne, couleur bordeaux.
 */

type IconKey = "pig" | "beef" | "beef-leg" | "lamb";

const COMMON = {
  fill: "currentColor",
  stroke: "currentColor",
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

function PigSilhouette() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" {...COMMON} aria-hidden>
      {/* Tail curl */}
      <path
        d="M52 102 q-14 -2 -14 -14 q0 -10 10 -10 q8 0 8 8"
        fill="none"
        strokeWidth="5"
      />
      {/* Body */}
      <path d="M50 110 q0 -50 60 -55 l70 0 q22 0 32 -14 q4 -6 11 -6 l13 0 q6 0 4 7 l-4 13 q-2 6 -8 6 l-3 0 q4 14 4 30 l0 28 q0 18 -16 18 l-22 0 l-2 -8 l-32 0 l-2 8 l-30 0 l-2 -8 l-32 0 l-2 8 l-22 0 q-17 0 -17 -17 z" />
      {/* Eye */}
      <circle cx="225" cy="65" r="3.5" fill="white" />
      {/* Ear */}
      <path
        d="M205 50 q-2 -18 12 -22 q12 -3 12 14 q0 8 -6 14"
        fill="white"
        fillOpacity="0.15"
        strokeWidth="3.5"
      />
      {/* Nostrils */}
      <circle cx="247" cy="70" r="2" fill="white" />
      <circle cx="253" cy="70" r="2" fill="white" />
    </svg>
  );
}

function BeefLegSilhouette() {
  return (
    <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" {...COMMON} aria-hidden>
      {/* Bone tip on left */}
      <ellipse cx="40" cy="100" rx="22" ry="14" fill="white" stroke="currentColor" strokeWidth="4" />
      <ellipse cx="38" cy="100" rx="6" ry="3.5" fill="currentColor" opacity="0.4" />
      {/* Meat shape (rounded ham/leg silhouette) */}
      <path d="M55 95 q5 -32 38 -38 q36 -7 70 -2 q40 6 70 30 q24 19 18 32 q-6 13 -32 18 q-26 5 -56 5 q-30 0 -55 -2 q-22 -2 -38 -8 q-20 -8 -22 -22 q-1 -7 7 -13 z" />
      {/* Marbling lines (white) */}
      <path
        d="M100 78 q14 -4 28 0 M120 100 q18 -3 36 0 M140 122 q14 -2 28 0 M170 95 q16 -4 30 0"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        opacity="0.35"
      />
      {/* Butcher string */}
      <path
        d="M75 88 q-4 14 0 28 M85 80 q-3 22 0 38 M95 76 q-2 26 0 44"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

function BeefSilhouette() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" {...COMMON} aria-hidden>
      {/* Tail */}
      <path
        d="M30 80 q-10 -2 -12 -12 q-2 -10 6 -12"
        fill="none"
        strokeWidth="5"
      />
      {/* Body */}
      <path d="M30 90 q4 -42 60 -45 l85 0 q22 0 30 -10 q8 -10 28 -10 l8 0 q5 0 3 6 l-2 8 q-2 5 -7 5 l-2 0 q5 12 5 26 l0 32 q0 18 -16 18 l-24 0 l-2 -8 l-30 0 l-2 8 l-30 0 l-2 -8 l-32 0 l-2 8 l-22 0 q-17 0 -17 -17 z" />
      {/* Horns */}
      <path
        d="M225 38 q-4 -16 4 -22 M250 36 q5 -16 -2 -22"
        fill="none"
        strokeWidth="5"
      />
      {/* Eye */}
      <circle cx="240" cy="60" r="3.5" fill="white" />
      {/* Nostril */}
      <circle cx="263" cy="78" r="2" fill="white" />
      {/* Spots (decorative) */}
      <ellipse cx="90" cy="105" rx="14" ry="9" fill="white" opacity="0.18" />
      <ellipse cx="140" cy="125" rx="10" ry="6" fill="white" opacity="0.18" />
      <ellipse cx="175" cy="100" rx="12" ry="7" fill="white" opacity="0.18" />
    </svg>
  );
}

function LambSilhouette() {
  return (
    <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" {...COMMON} aria-hidden>
      {/* Wool body : cloud shape */}
      <path d="M50 130 q-18 0 -18 -20 q0 -16 14 -20 q2 -18 22 -18 q10 0 16 6 q8 -14 26 -14 q16 0 24 12 q10 -10 26 -10 q18 0 26 14 q12 -8 26 -2 q14 6 12 22 q14 4 14 18 q0 18 -18 18 z" />
      {/* Body underline */}
      <path d="M50 130 l190 0 q14 0 14 14 l0 8 q0 8 -8 8 l-180 0 q-16 0 -16 -16 z" />
      {/* Head */}
      <ellipse cx="245" cy="100" rx="22" ry="20" />
      {/* Snout */}
      <ellipse cx="263" cy="108" rx="9" ry="7" fill="white" stroke="currentColor" strokeWidth="3" />
      {/* Ear */}
      <ellipse cx="234" cy="78" rx="7" ry="11" fill="white" stroke="currentColor" strokeWidth="3" transform="rotate(-30 234 78)" />
      {/* Eye */}
      <circle cx="252" cy="95" r="2.5" fill="white" />
      {/* Legs */}
      <rect x="80" y="160" width="8" height="22" rx="3" />
      <rect x="120" y="160" width="8" height="22" rx="3" />
      <rect x="180" y="160" width="8" height="22" rx="3" />
      <rect x="220" y="160" width="8" height="22" rx="3" />
    </svg>
  );
}

const REGISTRY: Record<IconKey, () => React.JSX.Element> = {
  pig: PigSilhouette,
  beef: BeefSilhouette,
  "beef-leg": BeefLegSilhouette,
  lamb: LambSilhouette,
};

export function ProductIcon({ name, label }: { name: IconKey; label: string }) {
  const Icon = REGISTRY[name];
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--color-cream-deep)]" role="img" aria-label={label}>
      {/* Decorative ribbon */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-70"
        style={{
          background:
            "linear-gradient(to right, #1d3a8a 0%, #1d3a8a 33.333%, #faf6ef 33.333%, #faf6ef 66.666%, var(--color-bordeaux) 66.666%, var(--color-bordeaux) 100%)",
        }}
        aria-hidden
      />
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          color: "var(--color-bordeaux)",
        }}
        aria-hidden
      />
      <div className="relative w-[68%] h-[68%] flex items-center justify-center text-[color:var(--color-bordeaux)]">
        <Icon />
      </div>
    </div>
  );
}

export type { IconKey };
