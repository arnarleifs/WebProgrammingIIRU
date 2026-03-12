import BookCard from "@/components/book-card";
import { SubjectWork } from "@/types/open-library";

interface BookRowProps {
  title: string;
  books: SubjectWork[];
}

export default function BookRow({ title, books }: BookRowProps) {
  if (books.length === 0) return null;

  return (
    <section className="flex flex-col gap-4 min-w-0">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scroll-row">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </section>
  );
}
