import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoContextProvider from "./context/TodoContextProvider.js";
import App from "./App";
import { Todousecontext } from "./context/Todousecontext.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>
);
