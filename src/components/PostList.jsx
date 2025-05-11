import React from "react";
import PostComponent from "./postComponent";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostComponent
          remove={remove}
          post={post}
          number={index + 1}
          key={post.id}
        />
      ))}
    </div>
  );
};
export default PostList;
