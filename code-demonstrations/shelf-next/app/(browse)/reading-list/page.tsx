import { getSavedBooks, updateBookNote, deleteBook } from "@/lib/actions";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function ReadingListPage() {
  const books = await getSavedBooks();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Reading List</h1>
      {books.length === 0 && (
        <p className="text-zinc-400">No books saved yet. Browse and save some!</p>
      )}
      <ul className="flex flex-col gap-4">
        {books.map((book) => (
          <li key={book.bookId} className="flex gap-4 bg-zinc-900 rounded p-4 items-start">
            {book.coverId ? (
              <Image
                src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                alt={book.title}
                width={80}
                height={120}
                className="rounded object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-20 h-28 bg-zinc-800 rounded flex-shrink-0" />
            )}
            <div className="flex flex-col gap-3 flex-1">
              <div>
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-sm text-zinc-400">{book.author}</p>
              </div>
              <form
                action={async (formData: FormData) => {
                  "use server";
                  await updateBookNote(book.bookId, formData.get("note") as string);
                }}
                className="flex flex-col gap-2"
              >
                <textarea
                  name="note"
                  defaultValue={book.note}
                  placeholder="Add a note..."
                  rows={2}
                  className="w-full rounded bg-zinc-800 border border-zinc-700 text-sm text-white px-3 py-2"
                />
                <button
                  type="submit"
                  className="text-sm px-3 py-1 rounded bg-zinc-700 text-white hover:bg-zinc-600"
                >
                  Save note
                </button>
              </form>
              <form
                action={async () => {
                  "use server";
                  await deleteBook(book.bookId);
                }}
              >
                <button
                  type="submit"
                  className="text-sm px-3 py-1 rounded text-red-400 hover:bg-zinc-800"
                >
                  Remove
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
