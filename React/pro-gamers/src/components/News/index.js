import React, { useEffect, useState } from 'react';
import { getNews } from '../../services/newsService';
import NewsList from '../NewsList';
import SearchBar from '../SearchBar';
import CategoryFilter from '../CategoryFilter';
import EditModal from '../EditModal';

const News = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setNews(getNews());
  }, []);

  const filterList = () => {
    const filteredNews = news.filter(n => (n.category === filter || filter === '') && (n.title.toLowerCase().includes(search.toLowerCase()) || search === ''));
    return filteredNews;
  }

  const deleteItem = id => {
    setNews(news => news.filter(n => n.id !== id));
  }

  const addItem = newsItem => {
    setNews(news => [ ...news, newsItem ]);
    setIsModalOpen(false);
  }

  const editItem = newsItem => {
    setNews(news => news.map(n => {
      if (n.id === newsItem.id) {
        return newsItem;
      }
      return n;
    }));
    setIsModalOpen(false);
  }

  const openModal = (type, newsItem) => {
    if (type === 'edit') {
      setSelectedItem(newsItem);
    }
    setIsModalOpen(true);
  }

  const renderModal = () => {
    if (selectedItem) {
      return (
        <EditModal
          title="Edit news item"
          isOpen={ isModalOpen }
          onSubmit={ newsItem => editItem(newsItem) }
          newsItem={ selectedItem }
          close={ () => {
            setIsModalOpen(false);
            setSelectedItem(null);
          }} />
      )
    }
    return (
      <EditModal
        title="Add news item"
        isOpen={ isModalOpen }
        onSubmit={ newsItem => addItem(newsItem) }
        close={ () => setIsModalOpen(false) } />
    )
  }
  
  const filteredList = filterList();

  return (
    <div>
      <h1>News</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={ () => openModal('add') }>Add news item</button>
      <SearchBar
        value={ this.state.search }
        changeFn={ e => setSearch(e.target.value) } />
      <CategoryFilter
        onChange={ e => setFilter(e.target.id) } />
      <NewsList
        news={ filteredList }
        editItem={ newsItem => openModal('edit', newsItem) }
        deleteItem={ id => deleteItem(id) } />
      { renderModal() }
    </div>
  );
};

export default News;
