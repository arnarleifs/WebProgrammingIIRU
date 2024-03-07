import { News } from "../types/news";

export function useFilteredNews(
  news: News[],
  searchValue: string,
  categoryFilter: string
) {
  return news.filter(
    (n) =>
      n.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) &&
      n.category === categoryFilter
  );
}
