
import { Routes,Route } from "react-router";
import Home from "../Screen/home";
import ContactUs from "../Screen/Contect";
import AboutUs from "../Screen/About";
import Viewmore from "../Screen/Viewmor";
import PageNotFound from "../Screen/Pagenotfound";

function AllRouter(){



    return(


        <>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Contact" element={<ContactUs/>}/>
            <Route path="/About" element={<AboutUs/>}/>
            <Route path="/viewmore/:id" element={<Viewmore/>}/>
           
            <Route path="/*" element={<PageNotFound/>}/>

        </Routes>
        
        </>
    )
}

export default AllRouter;