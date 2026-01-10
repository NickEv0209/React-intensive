import { useState, useEffect } from "react";
import axios from "axios";

import type { PostType } from "@/entities/post/model/types";

interface UsePostResult {
  post: PostType | null;
  isLoading: boolean;
  error?: string | null;
}

export const usePost = (postId: number | string): UsePostResult => {
  const [post, setPost] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) return;
    setIsLoading(true);
    setError(null);

    axios
      .get(`/api/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка в запросе: " + err);
        setError(err);
      });
  }, [postId]);

  return { post, isLoading, error };
};
