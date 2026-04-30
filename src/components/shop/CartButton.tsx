"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export function CartButton({ compact = false }: { compact?: boolean }) {
  const { itemCount, hydrated } = useCart();
  const showCount = hydrated && itemCount > 0;

  return (
    <Link
      href="/panier"
      aria-label={`Panier (${itemCount} article${itemCount > 1 ? "s" : ""})`}
      className={`relative inline-flex items-center justify-center rounded-full transition-colors ${
        compact ? "h-10 w-10" : "h-11 w-11"
      } hover:bg-[color:var(--color-cream-deep)]`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 8h14l-1.5 11a2 2 0 0 1-2 1.7H8.5A2 2 0 0 1 6.5 19L5 8Z" />
        <path d="M9 8V6a3 3 0 1 1 6 0v2" />
      </svg>
      {showCount && (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[color:var(--color-bordeaux)] text-[color:var(--color-cream)] text-[10px] font-semibold flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
