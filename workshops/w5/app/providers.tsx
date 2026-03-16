"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { CartProvider } from "@/context/cart-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CartProvider>{children}</CartProvider>
    </Provider>
  );
}
