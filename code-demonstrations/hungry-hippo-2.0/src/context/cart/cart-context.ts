import type { CartItem, MenuItem } from "@hungry-hippo/types";
import { createContext } from "react";

interface CartContextType {
  cartItems: CartItem[];
  addCartItem: (item: MenuItem) => void;
  removeCartItem: (item: MenuItem) => void;
  totalCount: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | null>(null);
