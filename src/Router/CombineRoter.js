



import { useState } from "react";
import AllRouter from "./Allrouter";
import AuthRouter from "./authRouter"
import Navbar from "../Layout/Navbar";
import { useSelector } from "react-redux";
 function CombineROuter(){

//  const [auth ,setAuth]= useState(false);
 const auth= useSelector((state)=>state.authReducer && state.authReducer.data &&state.authReducer.data._id !=null && state.authReducer.data._id !="undefind" ? true :false)
    return(

       <>
         

          {auth==true ? <>
           <Navbar/>
            <AllRouter/> </>
            :
             
            <> 
         
            <AuthRouter/>
            </>
            }
        
        
       
       </>
    )

 }

 export default CombineROuter;