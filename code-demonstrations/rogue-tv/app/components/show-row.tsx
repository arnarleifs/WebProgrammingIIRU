import { Show } from "../types/types";
import ShowCard from "./show-card";

export default function ShowRow({
  title,
  items,
}: {
  title: string;
  items: Show[];
}) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 px-4">{title}</h2>

      <div className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
        {items.map((show: Show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}
