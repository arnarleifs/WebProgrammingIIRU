import styles from "./comment-item.module.css";

export const CommentItem = ({ item }) => (
  <div className={styles.commentItem}>
    <div
      className={styles.avatar}
      style={{
        backgroundImage: `url(${item.authorProfileImageUrl})`,
      }}
    ></div>
    <div>
      <div className={styles.authorName}>{item.authorDisplayName}</div>
      <div>{item.textDisplay}</div>
    </div>
  </div>
);
