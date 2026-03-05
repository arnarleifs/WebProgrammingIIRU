import Link from "next/link";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-950 min-h-screen text-white relative">
      <header className="absolute top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
        >
          ← Back
        </Link>

        <div className="text-red-600 font-bold text-xl tracking-tighter">
          ROGUE
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
