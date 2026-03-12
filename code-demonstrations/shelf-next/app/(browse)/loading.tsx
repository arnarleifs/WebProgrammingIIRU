export default function BrowseLoading() {
  return (
    <div className="flex flex-col gap-12">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="h-6 w-32 bg-zinc-800 animate-pulse rounded" />
          <div className="flex gap-4 overflow-x-hidden">
            {Array.from({ length: 6 }).map((_, j) => (
              <div key={j} className="flex flex-col gap-2 flex-shrink-0 w-36">
                <div className="h-52 w-36 bg-zinc-800 animate-pulse rounded" />
                <div className="h-4 w-28 rounded bg-zinc-800 animate-pulse" />
                <div className="h-3 w-20 rounded bg-zinc-800 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
