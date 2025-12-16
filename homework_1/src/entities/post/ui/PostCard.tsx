import type { PostType } from "../../../shared/layouts/MainLayout";

interface PostCardProps {
  post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default PostCard;
