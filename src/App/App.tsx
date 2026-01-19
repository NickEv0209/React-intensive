import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/shared/lib/theme";

import AppRouter from "./providers/router/ui/AppRouter";

import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
