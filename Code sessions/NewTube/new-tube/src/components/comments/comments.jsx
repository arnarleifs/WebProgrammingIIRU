import { useEffect, useState } from "react";
import styles from "./comments.module.css";
import { getCommentsByVideoId } from "../../services/you-tube-service";
import { CommentItem } from "../comment-item/comment-item";

export const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!videoId) {
      return;
    }
    async function getComments() {
      setComments(await getCommentsByVideoId(videoId));
    }

    getComments();
  }, [videoId]);

  return (
    <div className={styles.comments}>
      {comments.map(c => <CommentItem key={c.id} item={c.snippet.topLevelComment.snippet} />)}
    </div>
  );
};
