import { AuthContext } from '../../../context';
import { useContext } from "react"
import {
    Link,
} from 'react-router-dom';
import MyButton from "../button/Mybutton";



const Navbar = ()=>{
    const { setIsAuth} = useContext(AuthContext)
    const logaut = ()=>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick={logaut}>Выйти</MyButton>
            <div className="navbar__links">
                <Link to={'/posts'}><MyButton>Посты</MyButton></Link>
                <Link style={{ marginLeft:10, paddingRight:10}} to={'/about'}><MyButton>О Сайте</MyButton></Link>
            </div>
        </div>
    )
}

export default Navbar