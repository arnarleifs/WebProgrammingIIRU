import { SearchShowWrapper } from "../types/types";

export async function getShows(category: string) {
  const url = `https://api.tvmaze.com/search/shows?q=${category}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch shows");
  const data = (await res.json()) as SearchShowWrapper[];
  return data.map(d => d.show).slice(0, 15);
}

export async function getShow(id: string) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  if (!res.ok) throw new Error("Failed to fetch show");
  return res.json();
}
