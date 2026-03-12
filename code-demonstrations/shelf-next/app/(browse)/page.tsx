import BookRow from "@/components/book-row";
import { getBooksBySubject } from "@/services/open-library";

const SUBJECTS = [
  { label: "Fantasy", slug: "fantasy" },
  { label: "Science Fiction", slug: "science_fiction" },
  { label: "Mystery", slug: "mystery" },
  { label: "Romance", slug: "romance" },
  { label: "Horror", slug: "horror" },
];

export default async function BrowsePage() {
  const results = await Promise.all(
    SUBJECTS.map(({ slug }) => getBooksBySubject(slug))
  );

  return (
    <div className="flex flex-col gap-12">
      {SUBJECTS.map(({ label }, i) => (
        <BookRow key={label} title={label} books={results[i]} />
      ))}
    </div>
  );
}
