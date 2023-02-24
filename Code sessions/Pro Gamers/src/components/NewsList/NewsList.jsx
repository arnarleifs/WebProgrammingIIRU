import { NewsListItem } from "../NewsListItem/NewsListItem";
import PropTypes from 'prop-types';

export const NewsList = ({
  news,
  filter,
  categoryFilter,
  onDelete,
  onEdit,
}) => {
  const filterNewsItems = () => news.filter(n => (
    n.title.toLowerCase().includes(filter.toLowerCase()) &&
    n.category.includes(categoryFilter)
  ));

  return filterNewsItems().map(n => <NewsListItem key={n.id} onEdit={onEdit} onDelete={onDelete} {...n} />);
};

NewsList.propTypes = {
  // The news items rendered within the list
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  })).isRequired,
  // The search value to filter after
  filter: PropTypes.string,
  // The filter to filter after categories
  categoryFilter: PropTypes.string,
  // The function which is called when you delete the item
  onDelete: PropTypes.func,
  // The function which is called when you edit the item
  onEdit: PropTypes.func
};