import { Channel } from "../../types/channel";
import styles from "./channel-author-information-pane.module.css";

interface ChannelAuthorInformationPaneProps {
  channel: Channel | undefined;
}

export const ChannelAuthorInformationPane = ({ channel }: ChannelAuthorInformationPaneProps) => (
  <div className={styles.channelAuthorSection}>
    <div
      className={styles.authorAvatar}
      style={{
        backgroundImage: `url(${channel?.snippet.thumbnails.default.url})`,
      }}
    ></div>
    <div className={styles.authorInfo}>
      <div className={styles.authorInfoHeader}>{channel?.snippet.title}</div>
      <div className={styles.authorInfoSubscribers}>{parseInt(channel?.statistics.subscriberCount).toLocaleString()} subscribers</div>
    </div>
  </div>
);
