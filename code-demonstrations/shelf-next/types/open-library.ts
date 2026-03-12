export interface SubjectWork {
  key: string;
  title: string;
  authors: { name: string; key: string }[];
  cover_id: number | null;
  first_publish_year: number | null;
  edition_count: number;
}

export interface SubjectResponse {
  works: SubjectWork[];
}

export type BookDescription = string | { type: string; value: string };

export interface BookDetail {
  title: string;
  description?: BookDescription;
  subjects?: string[];
  covers?: number[];
  authors?: { author: { key: string } }[];
}

export interface AuthorDetail {
  name: string;
}

export interface SavedBook {
  _id: string;
  bookId: string;
  title: string;
  author: string;
  coverId: number | null;
  note: string;
  createdAt: Date;
}
