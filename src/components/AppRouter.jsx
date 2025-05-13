import { Route, Routes } from "react-router-dom";
import { privateRouter, publicRouter } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth
            ? <Routes>     
                {privateRouter.map((r) => (
                    <Route path={r.path} element={r.element} key={r.path} />
                ))}
            </Routes>
            : <Routes>               
                {publicRouter.map((r) => (
                    <Route path={r.path} element={r.element} key={r.path} />
                ))}
            </Routes>
            
        
    )
};

export default AppRouter;
