import type { News, NewsCategory } from "@/types/news";
import { useEffect, useState } from "react";
import json from "../../../resources/news.json";

export function useNewsDetailsItem(newsItemId: number) {
  const [newsItem, setNewsItem] = useState<News>();

  useEffect(() => {
    if (newsItemId) {
      // TODO: API call
      const newsItem = json.news.find(n => n.id === newsItemId);
      setNewsItem({
        id: newsItem?.id as number,
        title: newsItem?.title as string,
        shortDescription: newsItem?.shortDescription as string,
        longDescription: newsItem?.longDescription as string,
        category: newsItem?.category as NewsCategory
      });
    }
  }, [newsItemId]);

  return newsItem;
}