import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchBlogByIdQuery } from "../api/api";

import type { Blog } from "../api/types";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Fetched ID from URL:", id);
  // 1. Convert the string 'id' to a number. If 'id' is undefined or not a number,
  //    parseInt will return NaN (Not a Number). We use 0 as a default for error handling.

  const blogId: string = id || "";

  const skip = blogId.length === 0;
  const navigate = useNavigate();

  const {
    data: blog,
    error,
    isLoading,
  } = useFetchBlogByIdQuery(blogId as any, { skip });

  if (skip) {
    return (
      <div className="error-container">
        <h3>Invalid Blog Identifier</h3>
        <p>
          The URL is missing the blog identifier. Please go back and select a
          post.
        </p>
        <button onClick={() => navigate("/")}>← Return to List</button>
      </div>
    );
  }

  if (isLoading) return <h3>Loading post with ID: {blogId}...</h3>;
  if (error || !blog)
    return (
      <div className="error-container">
        <h3>Could not load post.</h3>

        <p>Post {blogId} may not exist or a connection error occurred.</p>
        <button onClick={() => navigate("/")}>← Return to List</button>
      </div>
    );

  return (
    <div className="blog-detail-container">
      <button onClick={() => navigate("/")} style={{ marginBottom: 20 }}>
        ← Back to all posts
      </button>

      <h1>{(blog as Blog).title}</h1>
      <p style={{ fontStyle: "italic", color: "#666" }}>Blog ID: {blogId}</p>
      <p style={{ marginTop: 30, padding: 15, border: "1px solid #eee" }}>
        {(blog as Blog).content}
      </p>
    </div>
  );
};

export default BlogDetail;
