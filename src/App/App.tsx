import PostPage from "@/pages/PostPage/PostPage";

import "./App.css";
import { ThemeProvider } from "@/shared/lib/theme";

const App = () => {
  return (
    <ThemeProvider>
      <PostPage />
    </ThemeProvider>
  );
};

export default App;
