import Link from "next/link";
import { concerts } from "@/data/concerts";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Concert Arena</h1>
          <p className="mt-3 text-lg text-slate-500">
            Book tickets to the hottest shows this summer
          </p>
        </header>

        <div className="grid gap-4 mb-10">
          {concerts.map((concert) => (
            <div
              key={concert.id}
              className="rounded-xl border border-slate-200 bg-white p-5 flex items-center justify-between"
            >
              <div>
                <p className="font-semibold text-slate-900">{concert.name}</p>
                <p className="text-sm text-slate-500 mt-0.5">{concert.venue}</p>
                <p className="text-sm text-slate-400">
                  {new Date(concert.date).toLocaleDateString("en-GB", {
                    dateStyle: "long",
                  })}
                </p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="font-bold text-indigo-600">
                  £{(concert.pricePerTicket / 100).toFixed(2)}
                </p>
                <p className="text-xs text-slate-400">per ticket</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/booking/event"
            className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
          >
            Book Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}
