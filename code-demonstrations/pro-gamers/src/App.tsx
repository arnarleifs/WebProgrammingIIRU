import {
  Button,
  ChakraProvider,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { Navigation } from "./components/navigation/navigation";
import { NewsList } from "./components/news-list/news-list";
import { appContainer } from "./App.style";
import { SearchBar } from "./components/search-bar/search-bar";
import { useState } from "react";
import { CategoryFilter } from "./components/category-filter/category-filter";
import { News, NewsCategory } from "./types/news";
import { AddIcon } from "@chakra-ui/icons";
import json from "./resources/news.json";
import { NewsItemModal } from "./components/news-item-modal/news-item-modal";
import { useFilteredNews } from "./hooks/use-filtered-news";

export function App() {
  const [news, setNews] = useState<News[]>(json.news as News[]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<NewsCategory>(
    NewsCategory.World
  );
  const [itemToUpdate, setItemToUpdate] = useState<News>();

  function onAdd(newsItem: Partial<News>) {
    setItemToUpdate(undefined);
    const nextId = Math.max(...news.map((n) => n.id)) + 1;
    const newItem: News = {
      ...newsItem,
      id: nextId,
    } as News;

    setNews((news) => [...news, newItem]);
    onClose();
  }

  function onRemove(id: number) {
    setNews((news) => news.filter((n) => n.id !== id));
  }

  function onUpdate(item: News) {
    setItemToUpdate(item);
    onOpen();
  }

  const filteredNews = useFilteredNews(news, searchValue, categoryFilter);

  return (
    <ChakraProvider>
      <Navigation />
      <div style={appContainer}>
        <Heading marginBottom={5}>News</Heading>
        <Button
          marginBottom={5}
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          onClick={onOpen}
        >
          Add news item
        </Button>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <CategoryFilter
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <NewsList
          removeItem={onRemove}
          updateItem={onUpdate}
          news={filteredNews}
        />
      </div>
      <NewsItemModal
        onAdd={onAdd}
        isOpen={isOpen}
        onClose={onClose}
        item={itemToUpdate}
      />
    </ChakraProvider>
  );
}
