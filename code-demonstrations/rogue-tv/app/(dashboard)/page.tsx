import ShowRow from "../components/show-row";
import { getShows } from "../services/show-service";

export default async function DashboardPage() {
  const [scienceFiction, drama, horror, action, anime] = await Promise.all([
    getShows("science-fiction"),
    getShows("drama"),
    getShows("horror"),
    getShows("action"),
    getShows("anime"),
  ]);

  return (
    <div className="space-y-8 pb-20">
      <ShowRow title="Science Fiction" items={scienceFiction} />
      <ShowRow title="Drama" items={drama} />
      <ShowRow title="Horror" items={horror} />
      <ShowRow title="Action" items={action} />
      <ShowRow title="Anime" items={anime} />
    </div>
  );
}
