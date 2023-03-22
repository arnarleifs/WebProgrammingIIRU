import styles from "./gallery-list.module.css";
import { useMostPopularVideos } from "../../hooks/use-most-popular-videos";
import { GalleryListItem } from "../gallery-list-item/gallery-list-item";

export const GalleryList = () => {
  const popularVideos = useMostPopularVideos();
  return (
    <div className={styles.gallery}>
      {popularVideos.map((p) => (
        <GalleryListItem key={p.snippet.title} item={p} />
      ))}
    </div>
  );
};
