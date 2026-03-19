"use client";

import { useBoundStore } from "@/store/store";
import Image from "next/image";
import { useEffect } from "react";

export function PlayerBar() {
  const currentSong = useBoundStore((state) => state.currentSong);
  const play = useBoundStore((state) => state.play);
  const playNext = useBoundStore((state) => state.playNext);
  const pause = useBoundStore((state) => state.pause);
  const isPlaying = useBoundStore((state) => state.isPlaying);
  const elapsed = useBoundStore((state) => state.elapsed);
  const tick = useBoundStore((state) => state.tick);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => tick(), 1000);

    return () => clearInterval(interval);
  }, [isPlaying, elapsed, tick]);

  function convertElapsedToFormat() {
    const minutes = Math.floor(elapsed / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (elapsed % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  return (
    currentSong && (
      <div className="fixed bottom-0 right-0 left-0 h-30 bg-black p-10 text-white flex items-center gap-5">
        <Image
          src={currentSong.artworkUrl60}
          alt={currentSong.trackName}
          height={60}
          width={60}
        />
        <div className="grid">
          <p className="text-xl">{currentSong.trackName}</p>
          <p className="text-sm text-gray-500">{currentSong.artistName}</p>
          <p className="text-sm text-gray-500">
            {convertElapsedToFormat()} /{" "}
            {new Date(currentSong.trackTimeMillis).toISOString().slice(14, 19)}
          </p>
        </div>
        <div className="flex gap-5">
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:cursor-pointer"
            onClick={() => play()}
          >
            Play
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:cursor-pointer"
            onClick={() => pause()}
          >
            Pause
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:cursor-pointer"
            onClick={() => playNext()}
          >
            Play next
          </button>
        </div>
      </div>
    )
  );
}
