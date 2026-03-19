"use client";

import { getSongs } from "@/services/itunes";
import debounce from "debounce";
import { ChangeEvent, useRef, useState, SetStateAction, Dispatch } from "react";
import { Song } from "@/types/itunes";

interface SearchBarProps {
  setSongs: Dispatch<SetStateAction<Song[]>>;
}

export function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearch = useRef(
    debounce(async (term: string) => {
      const results = await getSongs(term);
      props.setSongs(results ?? []);
    }, 500),
  ).current;

  function onSearchChange(evt: ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  }

  return (
    <input
      onChange={onSearchChange}
      type="search"
      name="search"
      value={searchValue}
      placeholder="Search for a song.."
      className="p-5 rounded-xs border-0 bg-white h-15"
    />
  );
}
