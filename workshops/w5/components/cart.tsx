"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { removeItem } from "@/store/cart-slice";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="border p-4 flex flex-col gap-2">
      <h2 className="font-semibold">Cart</h2>
      {cart.length === 0 && <p className="text-sm text-gray-500">Empty</p>}
      {cart.map((p) => (
        <div key={p.id} className="flex justify-between items-center">
          <span>{p.name}</span>
          <button
            onClick={() => dispatch(removeItem(p.id))}
            className="text-sm border px-2 py-0.5"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="border-t pt-2 text-sm">Total: ${total.toFixed(2)}</div>
    </div>
  );
}
