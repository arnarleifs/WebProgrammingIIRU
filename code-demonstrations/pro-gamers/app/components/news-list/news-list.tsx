import { useState } from "react";
import json from "../../resources/news.json";
import { NewsListItem } from "../news-list-item/news-list-item";
import type { News } from "@/types/news";
import { Box, Heading } from "@chakra-ui/react";
import { SearchBar } from "../search-bar/search-bar";
import { CategoryFilter } from "../category-filter/category-filter";
import { useFilteredNews } from "./hooks/use-filtered-news";
import { AddOrUpdateNewsItemModal } from "../add-or-update-news-item-modal/add-or-update-news-item-modal";

export function NewsList() {
    const [news, setNews] = useState<News[]>(json.news as News[]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedNewsItem, setSelectedNewsItem] = useState<News>();

    const filteredNews = useFilteredNews(news, searchValue, category);

    function onRemove(newsItemId: number) {
        setNews(news => news.filter(n => n.id !== newsItemId))
    }

    function onUpdate(newsItemId: number, newsItem: Partial<News>) {
        setNews(news => news.map(n => {
            if (n.id === newsItemId) {
                return {
                    id: n.id,
                    title: newsItem.title ?? "",
                    shortDescription: newsItem.shortDescription ?? "",
                    longDescription: newsItem.shortDescription ?? "",
                    category: newsItem.category!
                }
            }

            return n;
        }))

        setSelectedNewsItem(undefined);
    }

    function onAdd(newsItem: Partial<News>) {
        const newId = Math.max(...news.map(n => n.id)) + 1

        setNews(news => [
            ...news,
            {
                id: newId,
                title: newsItem.title ?? "",
                shortDescription: newsItem.shortDescription ?? "",
                longDescription: newsItem.shortDescription ?? "",
                category: newsItem.category!
            }
        ])
    }

    function onSubmit(newsItem: Partial<News>) {
        if (selectedNewsItem) {
            onUpdate(selectedNewsItem.id, newsItem);
        } else {
            onAdd(newsItem);
        }

        setIsModalOpen(false);
    }

    return (
        <div>
            <Heading size="3xl" marginBottom={5}>News</Heading>
            <AddOrUpdateNewsItemModal
                onSubmit={onSubmit}
                isOpen={isModalOpen}
                openModal={() => setIsModalOpen(true)}
                closeModal={() => {
                    setIsModalOpen(false);
                    setSelectedNewsItem(undefined);
                }}
                selectedNewsItem={selectedNewsItem}
            />
            <SearchBar value={searchValue} setValue={setSearchValue} />
            <CategoryFilter category={category} setCategory={setCategory} />
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={5}>
                {filteredNews.map(n => <NewsListItem
                    key={n.id}
                    item={n}
                    onRemove={onRemove}
                    onUpdate={newsItem => {
                        setSelectedNewsItem(newsItem);
                        setIsModalOpen(true);
                    }}
                />
                )}
            </Box>
        </div>
    )
}