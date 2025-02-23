import React from "react";
import { useSelector } from "react-redux";
import AllRouter from "./Allrouter";
import AuthRouter from "./authRouter";
import AdminRouter from "./AdminRouter";
import Navbar from "../Layout/Navbar";
import AdminNavbar from "../Layout/AdminNavbar";
import Footer from "../Layout/footer";
import Whatsapp from "../Screen/watsapp";
import UserNavbar from "../Layout/UserNavbar";

function CombineRouter() {
  // Extract the `auth` status

  const state = useSelector((state) => state.authReducer.data.role);
// console.log("Complete Redux State:", state);
const auth= useSelector((state)=>state.authReducer && state.authReducer.data &&state.authReducer.data._id !=null && state.authReducer.data._id !=="undefind" ? true :false);
 const Role= useSelector((state)=>state.authReducer && state.authReducer.data &&  state.authReducer.data.role && typeof state.authReducer.data.role == "string" && state.authReducer.data.role !== "undefind" ? state.authReducer.data.role : "");
// console.log(Role);

  return (
    <>
      {auth ? (
        <>
        
          {Role === "admin" ? 
          <> 
        <AdminNavbar />
        <AdminRouter />
         </>
          
          :
          
          <>

          <UserNavbar/>
          <AllRouter/>
          <Whatsapp/>
          <Footer/>

          </>
          
   
           }
        </>
      ) : (
        <>
          <Navbar />
          <AuthRouter />
          <Footer/>
        </>
      )}
    </>
  );
}

export default CombineRouter;
