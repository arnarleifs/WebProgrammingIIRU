"use client";

import { useBoundStore } from "@/store/store";
import { QueueItem } from "./queue-item";

export function Queue() {
  const queue = useBoundStore((state) => state.queue);

  if (!queue || queue.length === 0) {
    return;
  }

  return (
    <div className="grid gap-3">
      {queue.map((q) => (
        <QueueItem key={q.trackId} song={q} />
      ))}
    </div>
  );
}
