import React, { useState, useEffect } from "react";

import "./../styles/App.css";
import PostList from "./../components/PostList";
import PostForm from "./../components/PostForm";
import MyFilter from "./../components/MyFilter";
import MyModal from "./../components/UI/myModal/MyModal";
import { usePosts } from "./../hooks/usePosts";

import PostService from "./../API/PostService";
import MyLoader from "./../components/UI/loader/MyLoader";
import useFetching from "./../hooks/useFetching";
import MyButton from "./../components/UI/button/Mybutton";
import { totalPages } from "./../utils/pages";
import Pagination from "./../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);

    const [fetchPosts, isPostLoading, errors] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            const totalCount = response.headers["x-total-count"];
            setTotalPage(totalPages(totalCount, limit));
            setPosts(response.data);
        }
    );
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortAndSearchPosts = usePosts(filter.sort, filter.query, posts);

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    const changePost = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    };

    return (
        <div className="post_head">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }}></hr>
            <MyFilter filter={filter} setFilter={setFilter} />
            {errors && <h1>Произошла ошибка ${errors}</h1>}
            {isPostLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margiTop: 50,
                    }}
                >
                    <MyLoader />
                </div>
            ) : (
                <PostList
                    remove={removePost}
                    posts={sortAndSearchPosts}
                    title={"List posts"}
                />
            )}
            <Pagination
                page={page}
                changePost={changePost}
                totalPage={totalPage}
            />
        </div>
    );
}

export default Posts;
