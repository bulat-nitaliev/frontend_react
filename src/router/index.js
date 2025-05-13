import Posts from "./../pages/Posts";
import About from "./../pages/About";
import Error from "./../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRouter = [
    {path:"/posts", element:<Posts/>},
    {path:"/posts/:id", element:<PostIdPage/>},
    {path:"/about", element:<About/>},
    {path:"/error", element:<Error/>},
    {path:"*", element:<Posts/>},
]

export const publicRouter = [
    {path:"/login", element:<Login/>},
    {path:"*", element:<Login/>},
]
