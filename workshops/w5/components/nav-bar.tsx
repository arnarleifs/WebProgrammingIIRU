"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function NavBar() {
  const count = useSelector((state: RootState) => state.cart.cart.length);

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <span className="font-semibold">Shop</span>
      <span>Cart ({count})</span>
    </nav>
  );
}
