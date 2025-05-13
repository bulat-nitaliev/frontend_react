import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useFetching from "../hooks/useFetching"
import PostService from "../API/PostService"
import MyLoader from "../components/UI/loader/MyLoader"

const PostIdPage = ()=>{
    const params = useParams()
    const [post, setPost] = useState([])
    const [comment, setComment] = useState([])
    const [fetchById, isLoading, error] = useFetching(async(id)=>{
        const post = await PostService.getById(id)
        setPost(post.data)
    })
    const [fetchCommentById, isCommLoading, errorCom] = useFetching(async(id)=>{
        const response = await PostService.getCommentById(id)
        setComment(response.data)
    })

    useEffect(()=>{
        fetchById(params.id)
        fetchCommentById(params.id)
    },[])
    
    return (
        <div style={{marginTop:30, marginLeft:100}}>
            
        {isLoading
            ? <MyLoader/>
            : <div><h2>{post.id}. {post.title}</h2> </div>

        }
        <h3>Комментарии</h3>
        {isCommLoading
            ? <MyLoader/>
            : <div style={{marginTop:50}}>
                {comment.map(comm=>
                <div style={{marginTop:20}}><h4>{comm.email}</h4>
                <p>{comm.body}</p>
                </div>
                
            )

            }
            </div>

        }

        </div>
        

    )
}

export default PostIdPage