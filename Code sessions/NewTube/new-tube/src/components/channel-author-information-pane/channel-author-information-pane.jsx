import styles from "./channel-author-information-pane.module.css";

export const ChannelAuthorInformationPane = ({ channel }) => (
  <div className={styles.channelAuthorSection}>
    <div
      className={styles.authorAvatar}
      style={{
        backgroundImage: `url(${channel.snippet?.thumbnails.default.url})`,
      }}
    ></div>
    <div className={styles.authorInfo}>
      <div className={styles.authorInfoHeader}>{channel.snippet?.title}</div>
      <div className={styles.authorInfoSubscribers}>{parseInt(channel.statistics?.subscriberCount).toLocaleString()} subscribers</div>
    </div>
  </div>
);
