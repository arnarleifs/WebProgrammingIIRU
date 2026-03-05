import Image from "next/image";
import Link from "next/link";
import { Show } from "../types/types";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x900.png?text=No+Image";

export default function ShowCard({ show }: { show: Show }) {
  return (
    <Link
      href={`/shows/${show.id}`}
      className="flex-shrink-0 w-[160px] group cursor-pointer"
    >
      <div className="relative aspect-[2/3] rounded-md overflow-hidden mb-2 shadow-lg transition-transform group-hover:scale-105">
        <Image
          src={show.image ? show.image?.medium : PLACEHOLDER_IMAGE}
          alt={show.name}
          fill
          className="object-cover"
          sizes="160px"
        />
      </div>

      <h3 className="font-medium text-sm text-gray-200 group-hover:text-white truncate">
        {show.name}
      </h3>
    </Link>
  );
}
