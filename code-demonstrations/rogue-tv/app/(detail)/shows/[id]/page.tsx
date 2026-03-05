import AddToListButton from "@/app/components/add-to-list-button";
import { getShow } from "@/app/services/show-service";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ShowPage({ params }: PageProps) {
  const { id } = await params;
  const show = await getShow(id);

  return (
    <div className="pb-24">
      <div className="relative h-[85vh] w-full">
        {show.image?.original && (
          <Image
            src={show.image.original}
            alt={show.name}
            fill
            className="object-cover object-top opacity-60"
            priority
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-12 w-full max-w-4xl">
          <h1 className="text-6xl font-black mb-4 tracking-tighter shadow-black drop-shadow-2xl">
            {show.name}
          </h1>

          <div className="flex items-center gap-4 text-lg font-medium mb-6">
            <span className="text-green-400">
              {show.rating?.average
                ? `${show.rating.average * 10}% Match`
                : "New"}
            </span>
            <span className="text-gray-300">
              {show.premiered?.split("-")[0]}
            </span>
            <span className="border border-gray-500 px-2 rounded text-xs py-0.5 text-gray-400">
              HD
            </span>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-200 transition-colors">
            Play
          </button>

          <AddToListButton />
        </div>
      </div>

      <div className="px-12 max-w-3xl">
        <div
          className="text-lg text-gray-300 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />

        <div className="mt-8 text-sm text-gray-500">
          <strong>Genres:</strong> {show.genres?.join(", ")}
        </div>
      </div>
    </div>
  );
}
