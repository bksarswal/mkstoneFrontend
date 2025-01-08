

import { Routes,Route } from "react-router";
import Login from "../Screen/Login";
import Ragister from "../Screen/ragister";
import ForgotPassword from "../Screen/forgotpass";
import VerifyOtp from "../Screen/veryfyotp";
import Home from "../Screen/home";
import ContactUs from "../Screen/Contect";
import AboutUs from "../Screen/About";


function AuthRouter(){



    return(


        <>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Contact" element={<ContactUs/>}/>
            <Route path="/About" element={<AboutUs/>}/>
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