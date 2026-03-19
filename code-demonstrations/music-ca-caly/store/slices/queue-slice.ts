import { Song } from "@/types/itunes";
import { StateCreator } from "zustand";
import { QueueSlice, ThemeSlice } from "./types";

export const createQueueSlice: StateCreator<
  QueueSlice & ThemeSlice,
  [],
  [],
  QueueSlice
> = (set) => ({
  queue: [],
  currentSong: null,
  isPlaying: false,
  elapsed: 0,
  addToQueue: (song: Song) =>
    set((state) => ({
      ...state,
      queue: [song, ...state.queue],
    })),
  removeFromQueue: (id: Song["trackId"]) =>
    set((state) => ({
      ...state,
      queue: state.queue.filter((q) => q.trackId !== id),
    })),
  playSong: (song: Song) =>
    set((state) => ({
      ...state,
      queue: state.queue.filter((q) => q.trackId !== song.trackId),
      currentSong: song,
      isPlaying: true,
      elapsed: 0,
    })),
  playNext: () =>
    set((state) => {
      const [nextSong, ...rest] = state.queue;
      return {
        ...state,
        queue: rest,
        currentSong: nextSong,
        isPlaying: true,
        elapsed: 0,
      };
    }),
  play: () =>
    set((state) => ({
      ...state,
      isPlaying: true,
    })),
  pause: () =>
    set((state) => ({
      ...state,
      isPlaying: false,
    })),
  tick: () =>
    set((state) => {
      const duration = Math.floor(state.currentSong!.trackTimeMillis / 1000);

      if (state.elapsed >= duration) {
        if (state.queue.length > 0) {
          const [nextSong, ...rest] = state.queue;
          return {
            queue: rest,
            currentSong: nextSong,
            elapsed: 0,
            isPlaying: true,
          };
        } else {
          return { isPlaying: false, elapsed: 0 };
        }
      }

      return { elapsed: state.elapsed + 1 };
    }),
});
