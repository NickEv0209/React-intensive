import { useEffect, useState } from "react";
import axios from "axios";

import MainLayout from "@/shared/layouts/MainLayout";
import { PostListWithLoading } from "@/widgets/PostList/PostList";
import type { PostType } from "@/entities/post/model/types";

const PostPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true)
    axios
      .get("/api/posts")
      .then((res) => {
        setPosts(res.data)
        setIsLoading(false)
      })
      .catch((err) => console.error("Ошибка запроса: " + err));
  }, []);

  return (
    <MainLayout>
      <PostListWithLoading isLoading={isLoading} posts={posts}/>
    </MainLayout>
  )
};

export default PostPage;
