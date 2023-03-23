import styles from "./comment-item.module.css";
import { CommentSnippet } from "../../types/comment-thread";

interface CommentProps {
  item: CommentSnippet;
}

export const CommentItem = ({ item }: CommentProps) => (
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
