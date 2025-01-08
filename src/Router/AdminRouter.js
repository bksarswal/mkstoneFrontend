
import { Routes,Route } from "react-router";
import AdminHome from "../Screen/AdminPages/AdminHome";


function AdminRouter(){



    return(


        <>
        
        <Routes>
            <Route path="/" element={<AdminHome/>}/>
            <Route path="/Adminhome" element={<AdminHome/>}/>
           
            <Route path="/*" element={<AdminHome/>}/>

        </Routes>
        
        </>
    )
}

export default AdminRouter;