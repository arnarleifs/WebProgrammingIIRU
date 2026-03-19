"use client";

import { useEffect } from "react";
import { useBoundStore } from "@/store/store";

export default function ThemeProvider() {
  const theme = useBoundStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return null;
}
