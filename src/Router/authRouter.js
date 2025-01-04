
import { Routes,Route } from "react-router";
import Login from "../Screen/Login";
import Ragister from "../Screen/ragister";


function AuthRouter(){



    return(


        <>
        
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Ragister" element={<Ragister/>}/>
            <Route path="/" element={<Login/>}/>
        </Routes>
        
        </>
    )
}

export default AuthRouter;