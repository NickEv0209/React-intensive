import { Route, Routes } from "react-router";

import PostDetailsPage from "@/pages/posts/ui/PostDetailsPage";
import PostsPage from "@/pages/posts/ui/PostsPage";
import AlbumPhotosPage from "@/pages/users/ui/AlbumPhotosPage";
import UserAlbumsPage from "@/pages/users/ui/UserAlbumsPage";
import UserTodoPage from "@/pages/users/ui/UserTodoPage";
import MainLayout from "@/shared/layouts/MainLayout";

export type PostParams = { id: string };
export type UserParams = { userId: string };
export type AlbumParams = { albumId: string };

const AppRouter = () => (
  <MainLayout>
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />
      <Route path="/users/:userId/albums" element={<UserAlbumsPage />} />
      <Route path="/albums/:albumId/photos" element={<AlbumPhotosPage />} />
      <Route path="/users/:userId/todos" element={<UserTodoPage />} />
      <Route path="/users/:userId/posts" element={<PostsPage />} />
    </Routes>
  </MainLayout>
);

export default AppRouter;
