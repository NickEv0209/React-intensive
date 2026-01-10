import React, { useMemo } from "react";

import PostCard from "@/entities/post/ui/PostCard";
import type { PostType } from "@/entities/post/model/types";
import { withLoading } from "@/shared/lib/hoc";

import styles from "./PostList.module.css";

interface PostListProps {
  posts: PostType[];
}

const PostList = ({ posts }: PostListProps) => {
  const memoizedPostCards = useMemo(() => {
    return posts.map((post) => (
      <React.Fragment key={post.id}>
        <PostCard post={post} />
      </React.Fragment>
    ));
  }, [posts]);

  return <div className={styles.postList}>{memoizedPostCards}</div>;
};

export const PostListWithLoading = withLoading(PostList);
export default PostList;
