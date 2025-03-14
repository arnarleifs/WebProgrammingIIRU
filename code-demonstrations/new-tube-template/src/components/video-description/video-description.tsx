import { Video } from "../../types/video";
import styles from "./video-description.module.css";

interface VideoDescriptionProps {
  video: Video | undefined;
}

export const VideoDescription = ({ video }: VideoDescriptionProps) => (
  <div className={styles.videoDescription}>
    <div>
      <span>
        {parseInt(video?.statistics.viewCount).toLocaleString()} views
      </span>
    </div>
    <p>{video?.snippet?.description}</p>
  </div>
);
