"use client";

import { SearchBar } from "@/components/search-bar";
import { ReactNode, useState } from "react";
import { Song } from "@/types/itunes";
import { SongCard } from "@/components/song-card";
import { EmptyState } from "@/components/empty-state";
import { PlayerBar } from "@/components/player-bar";

export default function DashboardLayout(props: { children: ReactNode }) {
  const [songs, setSongs] = useState<Song[]>([]);
  return (
    <div className="grid grid-cols-[1fr_2fr] h-screen w-full">
      <div className="grid grid-rows-[100px_auto] gap-3 p-10 dark:bg-gray-800 bg-gray-500">
        <SearchBar setSongs={setSongs} />
        <div className="grid align-top gap-3">
          {songs.length > 0 ? (
            songs.map((song) => <SongCard key={song.trackId} song={song} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
      <div className="p-20">{props.children}</div>
      <PlayerBar />
    </div>
  );
}
