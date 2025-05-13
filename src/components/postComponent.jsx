import React from "react";
import MyButton from "./UI/button/Mybutton";
import { useNavigate } from "react-router-dom";

const PostComponent = (props) => {
  const router = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton
          onClick={() => {
            router(`/posts/${props.post.id}`);
          }}
        >
          Пререйти
        </MyButton>
        <MyButton
          onClick={() => {
            props.remove(props.post);
          }}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostComponent;
