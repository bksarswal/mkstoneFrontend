
import { Routes,Route } from "react-router";
import Home from "../Screen/home";


function AllRouter(){



    return(


        <>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
           
            <Route path="/*" element={<Home/>}/>

        </Routes>
        
        </>
    )
}

export default AllRouter;