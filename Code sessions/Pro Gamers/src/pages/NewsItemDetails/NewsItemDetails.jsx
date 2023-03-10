import { useParams } from "react-router-dom";
import { Chip } from "@mui/material";
import { useSelector } from "react-redux";

export const NewsItemDetails = () => {
  const { newsItemId } = useParams();
  const newsItem = useSelector(state => state.news.value.find(n => n.id === parseInt(newsItemId)));

  return (
    <div>
      <h1>{newsItem?.title}</h1>
      <p>{newsItem?.longDescription}</p>
      <Chip label={newsItem?.category} variant="outlined" />
    </div>
  )
};