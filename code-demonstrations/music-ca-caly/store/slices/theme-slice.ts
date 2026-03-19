import { StateCreator } from "zustand";
import { QueueSlice, ThemeSlice } from "./types";

export const createThemeSlice: StateCreator<
  QueueSlice & ThemeSlice,
  [],
  [],
  ThemeSlice
> = (set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),
});
