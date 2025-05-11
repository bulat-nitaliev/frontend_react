import React, { useState } from "react";

import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description 2" },
    { id: 3, title: "JavaScript", body: "Description 3" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={"List posts"} />
      ) : (
        <div style={{ textAlign: "center", color: "red" }}>
          <h1>Посты не найдены!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
