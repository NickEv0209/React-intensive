import { useState } from "react";

import Button from "@/shared/ui/Button/Button";
import type { PostType } from "../model/types";

import styles from "./PostCard.module.css";
interface PostCardProps {
  post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLike, setIsLike] = useState(false);

  const toggleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className={styles.postCard}>
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.postDescription}>{post.description}</p>
      <Button
        className={
          isLike ? `${styles.btn} ${styles.likedBtn}` : `${styles.btn}`
        }
        onClick={toggleLike}
      >
        {isLike ? "♥︎" : "♡"}
      </Button>
    </div>
  );
};

export default PostCard;
