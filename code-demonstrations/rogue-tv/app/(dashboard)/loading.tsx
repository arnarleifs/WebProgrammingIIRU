export default function Loading() {
  return (
    <div className="space-y-10 p-6 animate-pulse">
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
      <SkeletonRow />
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="space-y-4">
      <div className="h-6 w-48 bg-zinc-800 rounded" />
      <div className="flex gap-4 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[160px] aspect-[2/3] bg-zinc-800 rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
