import { useParams } from "react-router-dom";

import type { PostParams } from "@/App/providers/router/ui/AppRouter";
import PostCard from "@/entities/post/ui/PostCard";
import { usePost } from "@/features/PostList/model/hooks/usePosts";

import styles from "./PostDetailsPage.module.css";

const PostDetailsPage = () => {
  const { id } = useParams<PostParams>();

  const { post, isLoading, error } = usePost(id || "");

  if (isLoading) return <p>Загрузка поста...</p>;
  if (error) return <p>Ошибка при загрузке: {error}</p>;
  if (!post) return <p>Пост не найден.</p>;

  return (
    <div className={styles.page}>
      <h1>Детали поста</h1>
      <PostCard post={post} />
    </div>
  );
};

export default PostDetailsPage;
