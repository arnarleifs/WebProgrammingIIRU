import { SubjectResponse, SubjectWork, BookDetail, AuthorDetail } from "@/types/open-library";

export async function getBooksBySubject(subject: string): Promise<SubjectWork[]> {
  const url = `https://openlibrary.org/subjects/${subject}.json?limit=20`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data: SubjectResponse = await res.json();
    return data.works ?? [];
  } catch {
    return [];
  }
}

export async function getBook(id: string): Promise<{ book: BookDetail; authorName: string }> {
  const res = await fetch(`https://openlibrary.org/works/${id}.json`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Book ${id} not found`);
  const book: BookDetail = await res.json();

  let authorName = "Unknown";
  const firstAuthorKey = book.authors?.[0]?.author?.key;
  if (firstAuthorKey) {
    const authorId = firstAuthorKey.replace("/authors/", "");
    try {
      const authorRes = await fetch(
        `https://openlibrary.org/authors/${authorId}.json`,
        { next: { revalidate: 3600 } }
      );
      if (authorRes.ok) {
        const authorData: AuthorDetail = await authorRes.json();
        authorName = authorData.name;
      }
    } catch {
      // keep "Unknown"
    }
  }

  return { book, authorName };
}
