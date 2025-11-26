import React from "react";
import { useFetchBlogsQuery } from "../../api/api.ts";

const BlogList = () => {
  const { data: blogs, error, isLoading } = useFetchBlogsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching blogs: {error.message}</div>;

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </div>
  );
};

export default BlogList;
