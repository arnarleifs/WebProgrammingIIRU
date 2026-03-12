import mongoose from "mongoose";

declare global {
  var _mongoosePromise: Promise<typeof mongoose> | undefined;
}

export default async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  if (!global._mongoosePromise) {
    global._mongoosePromise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  await global._mongoosePromise;
}
