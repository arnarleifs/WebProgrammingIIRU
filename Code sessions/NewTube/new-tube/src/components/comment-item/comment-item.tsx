import { CommentSnippet } from "../../types/comment-thread";
import styles from "./comment-item.module.css";

interface CommentItemProps {
  item: CommentSnippet
}

export const CommentItem = ({ item }: CommentItemProps) => (
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
