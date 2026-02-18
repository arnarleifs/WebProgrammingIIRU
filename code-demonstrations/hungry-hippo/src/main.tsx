import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./restaurant-details.tsx";
import "./base.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
