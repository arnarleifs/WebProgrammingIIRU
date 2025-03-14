import type { News } from "@/types/news";

export function useFilteredNews(news: News[], searchValue: string, category: string) {
    // TODO: Replace API request
    return news.filter(n =>
        n.title?.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()) &&
        n.category.includes(category)
    )
}