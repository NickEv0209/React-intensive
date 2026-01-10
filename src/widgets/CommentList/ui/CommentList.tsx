import { useCallback, useState } from "react";

import Button from "@/shared/ui/Button/Button";

import styles from "./CommentList.module.css";

export interface Comment {
  id: number;
  name: string;
  postId: number;
  body: string;
  email: string;
}

export interface CommentsListProps {
  comments: Comment[];
}

export const CommentList = ({ comments }: CommentsListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDisplay = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  if (comments.length === 0) {
    return <div className={styles.empty}>Комментариев пока нет</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Комментарии ({comments.length})</h4>
        <Button className={styles.btn} onClick={toggleDisplay}>
          {isExpanded ? "Скрыть" : "Показать"}
        </Button>
      </div>

      {isExpanded && (
        <ul className={styles.list}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.item}>
              <span className={styles.author}>{comment.email}:</span>
              <p className={styles.text}>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
