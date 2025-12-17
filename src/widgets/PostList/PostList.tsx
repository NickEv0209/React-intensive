import React, { useState } from "react";

import PostCard from "@/entities/post/ui/PostCard";
import type { PostType } from "@/entities/post/model/types";

import styles from "./PostList.module.css";

const PostList = () => {
  const [posts] = useState<PostType[]>([
    {
      id: 1,
      title: "Title",
      description: "Description",
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
    },
    {
      id: 4,
      title: "Title",
      description: "Description",
    },
  ]);

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

export default PostList;
