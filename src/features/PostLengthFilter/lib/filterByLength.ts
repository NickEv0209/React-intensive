export type PostLengthVariant = "all" | "short" | "long";

const LENGTH_THRESHOLD = 30;

export const filterByLength = <T extends { title: string }>(
  posts: T[],
  variant: PostLengthVariant
): T[] => {
  switch (variant) {
    case "short":
      return posts.filter((post) => post.title.length <= LENGTH_THRESHOLD);
    case "long":
      return posts.filter((post) => post.title.length > LENGTH_THRESHOLD);
    default:
      return posts;
  }
};
