import { News } from "../../types/news";
import { NewsItem } from "../news-item/news-item";
import PropTypes from "prop-types";

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

NewsList.propTypes = {
  // This is the news list which should be displayed
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      shortDescription: PropTypes.string,
      longDescription: PropTypes.string,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  // This is the function which notifies the parent that the item is
  // going to be deleted
  removeItem: PropTypes.func.isRequired,
  // This is the function which notifies the parent that the item is
  // going to be updated
  updateItem: PropTypes.func.isRequired,
};
