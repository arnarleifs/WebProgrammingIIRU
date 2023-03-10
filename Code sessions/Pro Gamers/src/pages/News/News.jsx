import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { CategoryFilter } from '../../components/CategoryFilter/CategoryFilter';
import { NewsItemModal } from '../../components/NewsItemModal/NewsItemModal';
import { NewsList } from '../../components/NewsList/NewsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { add, edit, remove } from '../../slices/newsSlice';

export const News = () => {
  const news = useSelector(state => state.news.value);
  const dispatch = useDispatch();

  const [selectedNewsItem, setSelectedNewsItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const onAdd = (_, title, shortDescription, category) => {
    dispatch(add({ title, shortDescription, category }));
    setIsModalOpen(false);
  }

  const onDelete = (id) => {
    dispatch(remove(id));
  }

  const onEdit = (id) => {
    const selectedNewsItem = news.find(n => n.id === id);
    setSelectedNewsItem(selectedNewsItem);
    setIsModalOpen(true);
  };

  const onEditSubmit = (id, title, shortDescription, category) => {
    dispatch(edit({ id, title, shortDescription, category }));
    setIsModalOpen(false);
  }

  return (
    <>
      <h1>News</h1>
      <Box>
        <Button variant="outlined" onClick={() => {
          setSelectedNewsItem(undefined);
          setIsModalOpen(true);
        }}>Add news item</Button>
      </Box>
      <SearchBar onChange={value => setSearchValue(value)} value={searchValue} />
      <CategoryFilter onChange={value => setCategoryFilter(value)} value={categoryFilter} />
      <NewsList news={news} filter={searchValue} categoryFilter={categoryFilter} onDelete={onDelete} onEdit={onEdit} />
      <NewsItemModal
        defaultItem={selectedNewsItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={selectedNewsItem ? onEditSubmit : onAdd} />
    </>
  )
};