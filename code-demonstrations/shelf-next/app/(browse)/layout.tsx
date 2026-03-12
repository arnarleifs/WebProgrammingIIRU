import Link from "next/link";

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <aside className="fixed top-0 left-0 z-50 h-screen w-48 bg-zinc-900 border-r border-zinc-800 flex flex-col p-4 gap-6">
        <div>
          <h1 className="text-2xl font-bold">Shelf</h1>
          <p className="text-sm text-zinc-400">Your reading companion</p>
        </div>
        <nav className="flex flex-col gap-1">
          <Link href="/" className="px-3 py-2 rounded text-sm text-zinc-300 hover:bg-zinc-800">
            Browse
          </Link>
          <Link href="/reading-list" className="px-3 py-2 rounded text-sm text-zinc-300 hover:bg-zinc-800">
            Reading List
          </Link>
        </nav>
      </aside>
      <main className="ml-48 flex-1 p-8 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
