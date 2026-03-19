import { Song, SongSearchResult } from "@/types/itunes";

export async function getSongs(term: string): Promise<Song[] | undefined> {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=10`,
    );
    if (response.ok) {
      const songResult = (await response.json()) as SongSearchResult;
      return songResult.results;
    }
    return [];
  } catch (err) {
    console.error(
      `An error occurred while fetching songs. Please try again later. Error message: ${err}`,
    );
  }
}
