import { useBoundStore } from "@/store/store";
import { Song } from "@/types/itunes";
import Image from "next/image";

interface SongCardProps {
  song: Song;
}

export function SongCard(props: SongCardProps) {
  const addToQueue = useBoundStore((state) => state.addToQueue);

  return (
    <div className="p-5 bg-white text-black dark:bg-gray-600 dark:text-white grid grid-cols-[1fr_2fr]">
      <div>
        <Image
          src={props.song.artworkUrl100}
          alt={props.song.trackName}
          height={100}
          width={100}
          className="object-cover"
        />
      </div>
      <div className="grid gap-2">
        <h2 className="text-2xl">{props.song.artistName}</h2>
        <p>{props.song.collectionName}</p>
        <p>{props.song.trackName}</p>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:cursor-pointer"
          onClick={() => addToQueue(props.song)}
        >
          Add to Queue
        </button>
      </div>
    </div>
  );
}
