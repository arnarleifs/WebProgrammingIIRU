"use client";

import { useBoundStore } from "@/store/store";
import { Song } from "@/types/itunes";

interface QueueItemProps {
  song: Song;
}

export function QueueItem(props: QueueItemProps) {
  const removeFromQueue = useBoundStore((state) => state.removeFromQueue);
  const playSong = useBoundStore((state) => state.playSong);

  return (
    <div className="p-5 bg-white text-black border border-blue-600">
      <p className="text-3xl">Song: {props.song.trackName}</p>
      <p className="text-2xl">Artist: {props.song.artistName}</p>
      <div className="flex gap-2">
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:cursor-pointer"
          onClick={() => playSong(props.song)}
        >
          Play
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:cursor-pointer"
          onClick={() => removeFromQueue(props.song.trackId)}
        >
          Remove from Queue
        </button>
      </div>
    </div>
  );
}
