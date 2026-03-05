import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      <aside className="w-64 flex-shrink-0 border-r border-white/10 p-6 flex flex-col">
        <div className="mb-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold">
            R
          </div>
          <span className="text-xl font-bold tracking-tight">ROGUE TV</span>
        </div>

        <nav className="flex flex-col gap-1 space-y-1">
          <NavItem href="/" label="Home" />
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-3 rounded-md text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
    >
      {label}
    </Link>
  );
}
