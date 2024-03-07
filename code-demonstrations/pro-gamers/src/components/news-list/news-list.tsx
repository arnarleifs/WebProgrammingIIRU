import { News } from "../../types/news";
import { NewsItem } from "../news-item/news-item";

interface NewsListProps {
  news: News[];
  removeItem: (id: number) => void;
  updateItem: (item: News) => void;
}

export function NewsList(props: NewsListProps) {
  return (
    <div>
      {props.news.map((n) => (
        <NewsItem
          key={n.id}
          removeItem={props.removeItem}
          updateItem={props.updateItem}
          item={n}
        />
      ))}
    </div>
  );
}
