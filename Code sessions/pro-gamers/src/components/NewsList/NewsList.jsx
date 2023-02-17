import { NewsListItem } from "../NewsListItem/NewsListItem";

export const NewsList = ({
  news,
  filter,
  categoryFilter
}) => {
  const filterNewsItems = () => news.filter(n => (
    n.title.toLowerCase().includes(filter.toLowerCase()) &&
    n.category.includes(categoryFilter)
  ));
  
  return filterNewsItems().map(n => <NewsListItem key={n.id} {...n} />);
};