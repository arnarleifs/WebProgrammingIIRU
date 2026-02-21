import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./restaurant-details.tsx";
import "./base.css";
import { CartProvider } from "./context/cart/cart-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);
