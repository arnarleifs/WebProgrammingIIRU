"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { addItem } from "@/store/cart-slice";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch<AppDispatch>();
  const inCart = useSelector((state: RootState) =>
    state.cart.cart.some((p) => p.id === product.id)
  );

  return (
    <div className="border p-4 flex flex-col gap-2">
      <span>{product.name}</span>
      <span>${product.price.toFixed(2)}</span>
      <button
        onClick={() => dispatch(addItem(product))}
        disabled={inCart}
        className="border px-3 py-1 disabled:opacity-40"
      >
        Add to Cart
      </button>
    </div>
  );
}
