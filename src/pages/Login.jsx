import { useContext } from "react"
import MyButton from "../components/UI/button/Mybutton"
import MyInput from "../components/UI/input/MyInput"
import { AuthContext } from "../context"


const Login = ()=>{
    const { setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Страница Авторизации</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login