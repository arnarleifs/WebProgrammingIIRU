import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-7xl font-black mb-6 tracking-tighter text-black">
        The Wiki.
      </h1>

      <p className="text-xl text-gray-500 mb-10 max-w-md text-center">
        The ultimate knowledge base for Next.js developers.
      </p>

      <Link
        href="/docs/intro"
        className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
      >
        Get Started →
      </Link>
    </div>
  );
}
