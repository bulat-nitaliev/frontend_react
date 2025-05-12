import React, {  useState , useEffect} from "react";

import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyFilter from "./components/MyFilter";
import MyModal from "./components/UI/myModal/MyModal";
import { usePosts } from "./hooks/usePosts";

import PostService from "./API/PostService";
import MyLoader from "./components/UI/loader/MyLoader";

function App() {
    const [posts, setPosts] = useState([]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    };

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] =useState(false)
    const [isPostLoading, setIsPostLoading] = useState(false)

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortAndSearchPosts = usePosts(filter.sort, filter.query, posts)

    async function fetchPosts(){
      setIsPostLoading(true)
      setTimeout(async ()=>{
        
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostLoading(false)
      }, 1000)
      
    }
    useEffect(()=>{
      fetchPosts()
    }, [])

    return (
        <div className="App">
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }}></hr>
            <MyFilter filter={filter} setFilter={setFilter} />
            
            {isPostLoading ?
            <div style={{display:'flex', justifyContent:'center' , margiTop:50}}><MyLoader/></div>
            
            :
            <PostList
                remove={removePost}
                posts={sortAndSearchPosts}
                title={"List posts"}
            />
            }

            
        </div>
    );
}

export default App;
