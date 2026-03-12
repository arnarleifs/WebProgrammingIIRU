"use client";

import { useState, useTransition } from "react";
import { saveBook, deleteBook } from "@/lib/actions";

interface Props {
  bookId: string;
  title: string;
  author: string;
  coverId: number | null;
  initialSaved: boolean;
}

export default function SaveToReadingListButton({
  bookId,
  title,
  author,
  coverId,
  initialSaved,
}: Props) {
  const [saved, setSaved] = useState(initialSaved);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    const optimisticValue = !saved;
    setSaved(optimisticValue);

    startTransition(async () => {
      try {
        if (optimisticValue) {
          await saveBook(bookId, title, author, coverId);
        } else {
          await deleteBook(bookId);
        }
      } catch {
        setSaved(!optimisticValue);
      }
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`px-4 py-2 rounded text-sm font-medium ${
        saved ? "bg-emerald-500 text-white" : "bg-zinc-700 text-white"
      } ${isPending ? "opacity-50" : ""}`}
    >
      {isPending ? "..." : saved ? "Saved to Reading List" : "Save to Reading List"}
    </button>
  );
}
