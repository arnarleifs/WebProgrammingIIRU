import Image from "next/image";
import { getBook } from "@/services/open-library";
import SaveToReadingListButton from "@/components/save-to-reading-list-button";
import { isBookSaved } from "@/lib/actions";
import { BookDescription } from "@/types/open-library";

function extractDescription(desc: BookDescription | undefined): string {
  if (!desc) return "";
  if (typeof desc === "string") return desc;
  return desc.value;
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [{ book, authorName }, saved] = await Promise.all([
    getBook(id),
    isBookSaved(id),
  ]);

  const coverId = book.covers?.[0] ?? null;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : null;
  const description = extractDescription(book.description);

  return (
    <div>
      <div className="relative h-80 flex items-end">
        {coverUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverUrl})` }}
          >
            <div className="absolute inset-0 bg-zinc-950/70" />
          </div>
        )}
        {!coverUrl && <div className="absolute inset-0 bg-zinc-900" />}
        <div className="relative z-10 flex gap-8 items-end p-8 w-full">
          {coverUrl && (
            <Image
              src={coverUrl}
              alt={book.title}
              width={200}
              height={300}
              className="rounded flex-shrink-0 object-cover"
              priority
            />
          )}
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">{book.title}</h1>
            <p className="text-lg text-zinc-300">{authorName}</p>
            <div className="flex gap-3">
              <SaveToReadingListButton
                bookId={id}
                title={book.title}
                author={authorName}
                coverId={coverId}
                initialSaved={saved}
              />
              <button className="px-4 py-2 rounded bg-zinc-800 text-white">
                Read
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 flex flex-col gap-8">
        {description && (
          <section>
            <h2 className="text-xl font-semibold mb-3">About this book</h2>
            <div
              className="text-zinc-300"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </section>
        )}
        {book.subjects && book.subjects.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-3">Subjects</h2>
            <div className="flex flex-wrap gap-2">
              {book.subjects.slice(0, 20).map((subject) => (
                <span
                  key={subject}
                  className="text-xs px-3 py-1 rounded bg-zinc-800 text-zinc-300"
                >
                  {subject}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
