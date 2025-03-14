import type { News } from "@/types/news";
import { Heading } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import json from "../../resources/news.json";

interface NewsDetailsItemProps {
  newsItemId: number
}

export function NewsDetailsItem(props: NewsDetailsItemProps) {
  const [newsItem, setNewsItem] = useState<News>();

  useEffect(() => {
    if (props.newsItemId) {
      setNewsItem(json.news.find(n => n.id === props.newsItemId));
    }
  }, [props.newsItemId]);

  return (
    <Heading>{props.newsItemId}</Heading>
  )
}