import styles from "./video-description.module.css";
import { Video } from "../../types/video";

interface VideoDescriptionProps {
  video: Video;
}

export const VideoDescription = ({ video }: VideoDescriptionProps) => (
  <div className={styles.videoDescription}>
    <div>
      <span>
        {parseInt(video.statistics?.viewCount).toLocaleString()} views
      </span>
    </div>
    <p>{video.snippet?.description}</p>
  </div>
);
