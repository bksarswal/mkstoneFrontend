

import { Routes,Route } from "react-router";
import Login from "../Screen/Login";
import Ragister from "../Screen/ragister";
import ForgotPassword from "../Screen/forgotpass";
import VerifyOtp from "../Screen/veryfyotp";
import Home from "../Screen/home";
import Navbar from "../Layout/Navbar";



function AuthRouter(){



    return(


        <>

    <Navbar/>
        <Routes>

            <Route path="/home" element={<Home/>}/>
         
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Ragister" element={<Ragister/>}/>
            <Route path="/Resetpass" element={<ForgotPassword/>}/>
            <Route path="/Verifyotp" element={<VerifyOtp/>}/>
            <Route path="/*" element={<Login/>}/>
        </Routes>
        
        </>
    )
}

export default AuthRouter;