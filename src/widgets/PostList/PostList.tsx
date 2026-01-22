import { useMemo } from "react";

import PostCard from "@/entities/post/ui/PostCard";
import type { PostType } from "@/entities/post/model/types";
import { withLoading } from "@/shared/lib/hoc";

import styles from "./PostList.module.css";
import { ItemList } from "@/shared/ui/ItemList/ItemList";

interface PostListProps {
  posts: PostType[];
}

const PostList = ({ posts }: PostListProps) => {
  const memoizedPostCards = useMemo(() => {
    return <ItemList items={posts} renderItem={post => <PostCard post={post}/>} />
  }, [posts]);

  return <div className={styles.postList}>{memoizedPostCards}</div>;
};

export const PostListWithLoading = withLoading(PostList);
export default PostList;
