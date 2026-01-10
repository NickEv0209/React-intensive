import React from "react";

import PostCard from "@/entities/post/ui/PostCard";
import type { PostType } from "@/entities/post/model/types";
import { withLoading } from "@/shared/lib/hoc";

import styles from "./PostList.module.css";

interface PostListProps {
  posts: PostType[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => {
        return (
          <React.Fragment key={post.id}>
            <PostCard post={post} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const PostListWithLoading = withLoading(PostList);
export default PostList;
