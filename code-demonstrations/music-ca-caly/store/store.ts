import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createQueueSlice } from "./slices/queue-slice";
import { createThemeSlice } from "./slices/theme-slice";
import { QueueSlice, ThemeSlice } from "./slices/types";

export const useBoundStore = create<QueueSlice & ThemeSlice>()(
  persist(
    (...a) => ({
      ...createQueueSlice(...a),
      ...createThemeSlice(...a),
    }),
    {
      name: "music-ca-caly-store",
      partialize: (state) => ({
        queue: state.queue,
        currentSong: state.currentSong,
        theme: state.theme,
      }),
    },
  ),
);
