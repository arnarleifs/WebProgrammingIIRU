import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { CategoryFilter } from '../../components/CategoryFilter/CategoryFilter';
import { NewsItemModal } from '../../components/NewsItemModal/NewsItemModal';
import { NewsList } from '../../components/NewsList/NewsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import newsJson from '../../resources/news.json';

export const News = () => {
  const [news, setNews] = useState(newsJson.news);
  const [selectedNewsItem, setSelectedNewsItem] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const onAdd = (_, title, shortDescription, category) => {
    const sortedNews = news.sort((a, b) => {
      if (a.id > b.id) { return 1; }
      else if (a.id < b.id) { return -1; }
      return 0;
    });
    const latestId = sortedNews[sortedNews.length - 1].id + 1;

    setNews([...news, { id: latestId, title, shortDescription, category }]);
    setIsModalOpen(false);
  }

  const onDelete = (id) => {
    setNews(news => news.filter(n => n.id !== id));
  }

  const onEdit = (id) => {
    const selectedNewsItem = news.find(n => n.id === id);
    setSelectedNewsItem(selectedNewsItem);
    setIsModalOpen(true);
  };

  const onEditSubmit = (id, title, shortDescription, category) => {
    setNews(news => news.map(n => {
      if (n.id === id) {
        return {
          id,
          title,
          shortDescription,
          category
        }
      }
      return n;
    }));
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