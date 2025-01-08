
import { Routes,Route } from "react-router";
import Home from "../Screen/home";
import ContactUs from "../Screen/Contect";

function AllRouter(){



    return(


        <>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Contact" element={<ContactUs/>}/>
           
            <Route path="/*" element={<Home/>}/>

        </Routes>
        
        </>
    )
}

export default AllRouter;