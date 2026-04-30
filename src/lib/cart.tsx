"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products as ALL_PRODUCTS, type Product } from "./products";

const STORAGE_KEY = "abm-cart-v1";

export interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  items: ReadonlyArray<CartItem>;
  itemCount: number;
  total: number;
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  resolved: ReadonlyArray<CartItem & { product: Product; lineTotal: number }>;
  hydrated: boolean;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ReadonlyArray<CartItem>>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed.filter((it) => it && typeof it.productId === "string"));
        }
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const add = useCallback((productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.productId === productId);
      if (existing) {
        return prev.map((it) =>
          it.productId === productId
            ? { ...it, quantity: it.quantity + quantity }
            : it,
        );
      }
      return [...prev, { productId, quantity }];
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setItems((prev) => prev.filter((it) => it.productId !== productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((it) => it.productId !== productId);
      return prev.map((it) =>
        it.productId === productId ? { ...it, quantity } : it,
      );
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const resolved = useMemo(() => {
    return items
      .map((it) => {
        const product = ALL_PRODUCTS.find((p) => p.id === it.productId);
        if (!product) return null;
        return { ...it, product, lineTotal: product.price * it.quantity };
      })
      .filter((x): x is CartItem & { product: Product; lineTotal: number } =>
        x !== null,
      );
  }, [items]);

  const itemCount = useMemo(
    () => resolved.reduce((sum, it) => sum + it.quantity, 0),
    [resolved],
  );
  const total = useMemo(
    () => resolved.reduce((sum, it) => sum + it.lineTotal, 0),
    [resolved],
  );

  const value: CartContextValue = {
    items,
    itemCount,
    total,
    add,
    remove,
    setQuantity,
    clear,
    resolved,
    hydrated,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
