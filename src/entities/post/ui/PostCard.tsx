import type { PostType } from "../model/types";

import styles from "./PostCard.module.css";
interface PostCardProps {
  post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className={styles.postCard}>
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.postDescription}>{post.description}</p>
    </div>
  );
};

export default PostCard;
