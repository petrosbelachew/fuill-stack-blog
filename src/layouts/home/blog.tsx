import React from "react";
import { useFetchBlogsQuery } from "../../api/api.ts";
// import type { Blog } from "../../api/types.ts";

const PostsList: React.FC = () => {
  const { data: posts, error, isLoading } = useFetchBlogsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsList;
