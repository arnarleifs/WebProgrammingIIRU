import Image from "next/image";
import Link from "next/link";
import { SubjectWork } from "@/types/open-library";

interface BookCardProps {
  book: SubjectWork;
}

export default function BookCard({ book }: BookCardProps) {
  const id = book.key.replace("/works/", "");
  const coverUrl = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
    : null;
  const authorName = book.authors?.[0]?.name ?? "Unknown";

  return (
    <Link href={`/books/${id}?year=${book.first_publish_year ?? ""}&editions=${book.edition_count ?? ""}`} className="flex flex-col gap-2 flex-shrink-0 w-36">
      <div className="relative h-52 w-36 rounded overflow-hidden bg-zinc-800">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={book.title}
            fill
            className="object-cover"
            sizes="144px"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-zinc-500 text-xs">
            No cover
          </div>
        )}
      </div>
      <p className="text-sm font-medium text-white line-clamp-2">{book.title}</p>
      <p className="text-xs text-zinc-400">{authorName}</p>
    </Link>
  );
}
