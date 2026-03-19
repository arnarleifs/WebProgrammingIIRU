import { Song } from "@/types/itunes";

export type QueueSlice = {
  queue: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  elapsed: number;
  addToQueue: (song: Song) => void;
  removeFromQueue: (id: Song["trackId"]) => void;
  playSong: (song: Song) => void;
  playNext: () => void;
  play: () => void;
  pause: () => void;
  tick: () => void;
};

export type ThemeSlice = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};
