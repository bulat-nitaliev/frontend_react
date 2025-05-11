import React, { useState } from "react";
import MyButton from "./UI/button/Mybutton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        placeholder="Заголовок"
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        placeholder="Описание поста"
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
