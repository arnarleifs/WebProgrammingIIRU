import Link from "next/link";

export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <Link href="/" className="text-sm text-white bg-black/40 px-4 py-2 rounded">
          ← Back
        </Link>
      </header>
      {children}
    </div>
  );
}
