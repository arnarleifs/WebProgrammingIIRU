export interface SongSearchResult {
  resultCount: number;
  results: Song[];
}

export interface Song {
  wrapperType: WrapperType;
  kind: Kind;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  releaseDate: Date;
  collectionExplicitness: Explicitness;
  trackExplicitness: Explicitness;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
  collectionPrice?: number;
  trackPrice?: number;
}

export enum Kind {
  Song = "song",
}

export enum WrapperType {
  Track = "track",
}

export enum Explicitness {
  Explicit = "explicit",
  NotExplicit = "notExplicit",
}
