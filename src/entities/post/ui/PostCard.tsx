import { useEffect, useState } from "react";
import axios from "axios";

import { CommentList } from "@/widgets/CommentList";

import type { PostType } from "../model/types";

import styles from "./PostCard.module.css";

interface PostCardProps {
  post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/posts/${post.id}/comments`)
      .then((res) => setComments(res.data));
  }, []);

  return (
    <div className={styles.postCard}>
      <h3 className={styles.postTitle}>{post.title}</h3>
      <p className={styles.postDescription}>{post.body}</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default PostCard;
