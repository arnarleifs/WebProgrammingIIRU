import styles from "./video-description.module.css";

export const VideoDescription = ({ video }) => (
  <div className={styles.videoDescription}>
    <div>
      <span>
        {parseInt(video.statistics?.viewCount).toLocaleString()} views
      </span>
    </div>
    <p>{video.snippet?.description}</p>
  </div>
);
