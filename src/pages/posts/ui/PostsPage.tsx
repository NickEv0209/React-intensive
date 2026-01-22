import { useMemo, useState } from "react";

import { PostListWithLoading } from "@/widgets/PostList/PostList";

import {
  filterByLength,
  PostLengthFilter,
  type PostLengthVariant,
} from "@/features/PostLengthFilter";
import { useGetPostsByUserIdQuery } from "@/entities/post/api/postsApi";
import type { PostType } from "@/entities/post/model/types";

const PostPage = () => {
  const [filterVariant, setFilterVariant] = useState<PostLengthVariant>("all");

  const { data: posts, isLoading } = useGetPostsByUserIdQuery(1);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts as PostType[], filterVariant);
  }, [posts, filterVariant]);

  return (
    <>
      <PostLengthFilter value={filterVariant} onChange={setFilterVariant} />
      <PostListWithLoading isLoading={isLoading} posts={filteredPosts} />
    </>
  );
};

export default PostPage;
