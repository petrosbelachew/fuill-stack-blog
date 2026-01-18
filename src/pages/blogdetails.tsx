import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchBlogByIdQuery, useFetchWriterByIdQuery } from "../api/api";

import type { Blog } from "../api/types";
import "./blogdetails.css";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Fetched ID from URL:", id);
  // 1. Convert the string 'id' to a number. If 'id' is undefined or not a number,
  //    parseInt will return NaN (Not a Number). We use 0 as a default for error handling.

  const blogId: string = id || "";

  const skip = blogId.length === 0;
  const navigate = useNavigate();

  const {
    data: currentBlog,
    error,
    isLoading,
  } = useFetchBlogByIdQuery(blogId as any, { skip });

  // Determine the writer ID to trigger the second fetch
  const writerId = currentBlog?.writerId;
  console.log("Fetched Writer ID from Blog:", writerId);
  if (skip) {
    return (
      <div className="error-container">
        <h3>Invalid Blog Identifier</h3>
        <p>
          The URL is missing the currentBlog identifier. Please go back and
          select a post.
        </p>
        <button onClick={() => navigate("/")}>← Return to List</button>
      </div>
    );
  }

  if (isLoading) return <h3>Loading post with ID: {blogId}...</h3>;
  if (error || !currentBlog)
    return (
      <div className="error-container">
        <h3>Could not load post.</h3>

        <p>Post {blogId} may not exist or a connection error occurred.</p>
        <button onClick={() => navigate("/")}>← Return to List</button>
      </div>
    );

  return (
    <div className="wrapper">
      <div className="Blog-detail-container">
        <button onClick={() => navigate("/")}>← Back to all posts</button>

        <h1>{(currentBlog as Blog).title}</h1>
        <p style={{ fontStyle: "italic", color: "#666" }}>Blog ID: {blogId}</p>
        <p>{(currentBlog as Blog).content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
