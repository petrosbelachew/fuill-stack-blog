// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PostsList from "./layouts/home/blog";
import BlogDetail from "./pages/blogdetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main List Page */}
        <Route path="/" element={<PostsList />} />

        {/* Redirect /blog to / since /blog should not exist without an ID */}
        <Route path="/blog" element={<Navigate to="/" replace />} />

        {/* Detail Page (requires ID) */}
        <Route path="/blog/:id" element={<BlogDetail />} />

        {/* Optional: Catch all for 404s */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
