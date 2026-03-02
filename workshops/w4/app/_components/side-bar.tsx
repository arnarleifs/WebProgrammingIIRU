"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS } from "../data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen border-r border-gray-200 bg-gray-50 fixed left-0 top-0 p-6">
      <nav className="flex flex-col gap-1">
        {DOCS.map((doc) => {
          const href = `/docs/${doc.slug}`;
          const isActive = pathname === href;

          return (
            <Link
              key={doc.slug}
              href={href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "text-gray-600 hover:bg-gray-200 hover:text-black"
              }`}
            >
              {doc.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
