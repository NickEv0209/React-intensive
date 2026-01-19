import { useEffect, useState } from "react";
import axios from "axios";

import { CommentList } from "@/widgets/CommentList";

import type { PostType } from "../model/types";

import styles from "./PostCard.module.css";
import { NavLink } from "react-router";
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
      <NavLink to={`/posts/${post.id}`} className={styles.postTitle}>
        <h3>{post.title}</h3>
      </NavLink>
      <p className={styles.postDescription}>{post.body}</p>
      <CommentList comments={comments} />
    </div>
  );
};

export default PostCard;
