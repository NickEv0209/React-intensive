import React, { useEffect, useState } from "react";

import PostCard from "@/entities/post/ui/PostCard";
import type { PostType } from "@/entities/post/model/types";

import styles from "./PostList.module.css";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Ошибка запроса: " + err));
  }, []);

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
