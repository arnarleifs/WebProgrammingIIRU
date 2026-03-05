"use client";

import { useState } from "react";

export default function AddToListButton() {
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => setAdded(!added)}
      className={`px-8 py-3 rounded font-bold text-lg transition-colors flex items-center gap-2 ${
        added
          ? "bg-green-600 text-white"
          : "bg-gray-600/50 text-white hover:bg-gray-600"
      }`}
    >
      {added ? "✓ In My List" : "+ Add to My List"}
    </button>
  );
}
