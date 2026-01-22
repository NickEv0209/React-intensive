import { useParams } from "react-router-dom";

import type { PostParams } from "@/App/providers/router/ui/AppRouter";
import PostCard from "@/entities/post/ui/PostCard";

import styles from "./PostDetailsPage.module.css";
import { useGetPostByIdQuery } from "@/entities/post/api/postsApi";

const PostDetailsPage = () => {
  const { id } = useParams<PostParams>();

  const {data: post, isLoading, isError} = useGetPostByIdQuery(Number(id))

  if (isLoading) return <p>Загрузка поста...</p>;
  if (isError) return <p>Ошибка при загрузке</p>;
  if (!post) return <p>Пост не найден.</p>;

  return (
    <div className={styles.page}>
      <h1>Детали поста</h1>
      <PostCard post={post} />
    </div>
  );
};

export default PostDetailsPage;
