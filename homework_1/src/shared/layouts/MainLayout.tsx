import { useState } from "react";

import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import PostList from "../../widgets/PostList/PostList";

import "./MainLayout.css";

export interface PostType {
  id: number;
  title: string;
  description: string;
}

const MainLayout = () => {
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
    <div className="main-layout">
      <Header />
      <PostList posts={posts} />
      <Footer />
    </div>
  );
};

export default MainLayout;
