"use client";

import { createContext, useContext, useState } from "react";
import { Product } from "@/data/products";

type CartContextType = {
  cart: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  function addItem(item: Product) {
    setCart((prev) => [...prev, item]);
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
