import PostCard from "../../entities/post/ui/PostCard";
import type { PostType } from "../../shared/layouts/MainLayout";

interface PostListProps {
  posts: PostType[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className="post-list">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
