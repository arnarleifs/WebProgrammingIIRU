import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/data/products";

type State = {
  cart: Product[];
};

type Action = {
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
};

export const useCartStore = create<State & Action>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
      removeItem: (id) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
