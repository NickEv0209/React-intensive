import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import MainLayout from "@/shared/layouts/MainLayout";
import { PostListWithLoading } from "@/widgets/PostList/PostList";
import type { PostType } from "@/entities/post/model/types";
import {
  filterByLength,
  PostLengthFilter,
  type PostLengthVariant,
} from "@/features/PostLengthFilter";

const PostPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterVariant, setFilterVariant] = useState<PostLengthVariant>("all");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/posts")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error("Ошибка запроса: " + err));
  }, []);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, filterVariant);
  }, [posts, filterVariant]);

  return (
    <MainLayout>
      <PostLengthFilter value={filterVariant} onChange={setFilterVariant} />
      <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
    </MainLayout>
  );
};

export default PostPage;
