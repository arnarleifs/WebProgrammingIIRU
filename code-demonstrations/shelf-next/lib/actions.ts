"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/mongodb";
import ReadingList from "@/lib/reading-list";
import { SavedBook } from "@/types/open-library";

export async function saveBook(
  bookId: string,
  title: string,
  author: string,
  coverId: number | null
): Promise<void> {
  await dbConnect();
  await ReadingList.create({ bookId, title, author, coverId, note: "" });
  revalidatePath("/reading-list");
}

export async function deleteBook(bookId: string): Promise<void> {
  await dbConnect();
  await ReadingList.deleteOne({ bookId });
  revalidatePath("/reading-list");
}

export async function updateBookNote(bookId: string, note: string): Promise<void> {
  await dbConnect();
  await ReadingList.findOneAndUpdate({ bookId }, { note });
  revalidatePath("/reading-list");
}

export async function getSavedBooks(): Promise<SavedBook[]> {
  await dbConnect();
  const items = await ReadingList.find({}).sort({ createdAt: -1 }).lean();
  return items.map((item) => ({
    ...item,
    _id: item._id.toString(),
  })) as SavedBook[];
}

export async function isBookSaved(bookId: string): Promise<boolean> {
  await dbConnect();
  const item = await ReadingList.exists({ bookId });
  return item !== null;
}
