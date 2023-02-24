import { useEffect } from "react";
import { useParams } from "react-router-dom";
import newsJson from '../../resources/news.json';
import { useState } from "react";
import { Chip } from "@mui/material";

export const NewsItemDetails = () => {
  const [newsItem, setNewsItem] = useState();
  const { newsItemId } = useParams();

  useEffect(() => {
    setNewsItem(newsJson.news.find(n => n.id === parseInt(newsItemId)));
  }, [newsItemId]);

  return (
    <div>
      <h1>{newsItem?.title}</h1>
      <p>{newsItem?.longDescription}</p>
      <Chip label={newsItem?.category} variant="outlined" />
    </div>
  )
};