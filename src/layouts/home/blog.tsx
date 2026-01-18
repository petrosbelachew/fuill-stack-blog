import React from "react";
import { Link } from "react-router-dom";
import { useFetchBlogsQuery } from "../../api/api";
import type { Blog } from "../../api/types";
import "./blog.css";

const BlogList: React.FC = () => {
  const { data: posts, error, isLoading } = useFetchBlogsQuery();

  if (isLoading) return <div>Loading blog list...</div>;
  if (error) return <div>Error fetching posts list.</div>;
  if (!posts || posts.length === 0) return <div>No posts available.</div>;

  return (
    <div className="posts-list-container">
      <h2>📰 Blog Post Titles</h2>
      <ul>
        {posts.map((post: Blog) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
