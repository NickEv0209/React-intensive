import { createRoot } from "react-dom/client";

import App from "./App/App.tsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./App/providers/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
