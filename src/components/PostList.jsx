import React, {useRef} from "react";
import PostComponent from "./postComponent";
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
  
const PostList = ({ posts, title, remove }) => {
    const nodeRefs = useRef({});
    if (!posts.length) {
        return (
            <div style={{ textAlign: "center", color: "red" }}>
                <h1>Посты не найдены!</h1>
            </div>
        );
    }
    
    
    return   (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>{
                if(!nodeRefs.current[post.id]){
                    nodeRefs.current[post.id] = React.createRef();
                }
                return(
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                        nodeRef={nodeRefs.current[post.id]}
                    >   
                    <div ref={nodeRefs.current[post.id]}>
                        <PostComponent remove={remove} number={index + 1} post={post} />
                        </div>
                    </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
