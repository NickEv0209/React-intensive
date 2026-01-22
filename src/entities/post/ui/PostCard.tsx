import { CommentList } from "@/widgets/CommentList";

import type { PostType } from "../model/types";

import styles from "./PostCard.module.css";
import { NavLink } from "react-router";
import { useGetCommentsQuery } from "@/entities/comment/api/commentsApi";
import type { CommentType } from "@/entities/comment/model/types";

interface PostCardProps {
  post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
  const {data, isLoading} = useGetCommentsQuery(post.id)

  return (
    <div className={styles.postCard}>
      <NavLink to={`/posts/${post.id}`} className={styles.postTitle}>
        <h3>{post.title}</h3>
      </NavLink>
      <p className={styles.postDescription}>{post.body}</p>
      <CommentList comments={data as CommentType[]} isLoading={isLoading}/>
    </div>
  );
};

export default PostCard;
