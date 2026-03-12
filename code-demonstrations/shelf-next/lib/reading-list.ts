import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReadingListItem extends Document {
  bookId: string;
  title: string;
  author: string;
  coverId: number | null;
  note: string;
  createdAt: Date;
}

const ReadingListSchema = new Schema<IReadingListItem>(
  {
    bookId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    coverId: { type: Number, default: null },
    note: { type: String, default: "" },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const ReadingList: Model<IReadingListItem> =
  mongoose.models.ReadingList ??
  mongoose.model<IReadingListItem>("ReadingList", ReadingListSchema);

export default ReadingList;
