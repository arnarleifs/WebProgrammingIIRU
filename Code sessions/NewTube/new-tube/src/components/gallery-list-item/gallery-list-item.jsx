import styles from "./gallery-list-item.module.css";
import { useNavigate } from "react-router-dom";

export const GalleryListItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.galleryListItem}
      onClick={() => navigate(`/${item.id}`)}
    >
      <div
        className={styles.thumbnail}
        style={{
          backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
        }}
      >
        <div className={styles.floatingDuration}>
          {item.contentDetails.duration}
        </div>
      </div>
      <div>
        <h3>{item.snippet.title}</h3>
        <div className={styles.subDetails}>
          <div>{item.snippet.channelTitle}</div>
          <div>
            {parseInt(item.statistics.viewCount).toLocaleString()} views
          </div>
        </div>
      </div>
    </div>
  );
};
