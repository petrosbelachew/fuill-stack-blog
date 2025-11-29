import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { BrowserRouter } from "react-router-dom";
import api from "./api/api.ts";
import "./index.css";
// import App from "./App.tsx";
import BlogList from "./layouts/home/blog.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={api}>
      <BlogList />
      {/* <App /> */}
    </ApiProvider>
  </StrictMode>
);
