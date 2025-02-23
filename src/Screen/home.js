
import  react from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
 import axios from 'axios';
 import { toast } from 'react-toastify';
 import { Base_URL } from '../config/config';
 import Contectback from "../Images/sosn/contact.jpg"
import { useNavigate } from 'react-router';

function Home(){
  
   const  navigate = useNavigate();
   const [p_data, setPData] = useState([]);

   const [searchTerm, setSearchTerm] = useState("")

   const filtereProdect = p_data.filter((d) =>
     d.name.toLowerCase().includes(searchTerm.toLowerCase()),
   )
 

   const prodact=[
       {
        id:1,
name:"Customized Sandstone Jali",
catagary:"Sand Stone | 4*3Sqft|Window|",
price:"550",
discount:"15",
description:" this the awasome sand jali ",
image:"https://5.imimg.com/data5/EY/RN/GQ/SELLER-11196300/sand-stone-jaalis-500x500.jpg"
       },
      {
        id:2,
name:"Decorative Sandstone Jali",
catagary:"Sand Stone | 4*3Sqft|Window|",
price:"1880",
discount:"20",
description:" this the awasome sand stone jali for decorative purpage for user and …",
image:"https://5.imimg.com/data5/JU/BY/KK/SELLER-44773881/sandstone-jali-500x500.jpg"
      },
      {

id:3,
name:" Round sand Stone Foundation",
catagary:"Sand Stone |",
price:"20000",
discount:"10",
description:" its the bes foundation for  the gardan ",
image:"http://5.imimg.com/data5/IOS/Default/2022/9/QM/AL/NA/1833715/product-jpeg-500x500.png"
      },
      {
       id:4, 
name:"Fluorescent Single-Arm Sandstone Lamp , For Home",
catagary:"lamps",
price:"2500",
discount:"10",
description:"good",
image:"https://5.imimg.com/data5/ANDROID/Default/2022/1/NP/XD/FQ/108570888/product-jpeg-250x250.jpg"

      }


   ]

  function Getprodect(){

axios.get(Base_URL + '/getprotects' , p_data).then((res)=>{
    // console.log(res.data.data);
    setPData(res.data.data);
    if(res.data.message){
        toast.warn(res.data.message)
        // console.log(res.data.message);
    }
   
                                                                                                                 
}).catch((err)=>{

    toast.error(err)
})

 }

 

   const handelNavigate = (d)=>{

    navigate(`/viewmore/` + d.id ,  {state:d});
   }



   function Gettocart(){

    axios.get(Base_URL + '/gettocart' ).then((res)=>{
      
        console.log(res);
       
                                                                                                                     
    }).catch((err)=>{
    
        toast.error(err)
    })
    
     }   


     

const uid=useSelector((state)=>state.authReducer && state.authReducer.data &&state.authReducer.data._id !=null && state.authReducer.data._id !=="undefind" ? state.authReducer.data._id :"");
//  console.log(uid)


const handeleaddToCart= (pid)=>{
 let temp = {

  u_id:uid,
   P_id:pid
 }
;
//  console.log(pid);
//  console.log(uid);
axios.post(Base_URL + "/addtocart",temp).then((res1)=>{
// console.log(res1);
  toast.success(res1.data.message)

}).catch((err)=>{

// console.log(err.response.data.message);
  toast.error(err.response.data.message)
})

 }




  
   useEffect(()=>{
Getprodect();

   },[])
 

    return (

        < div className='mt-24 min-h-screen  flex flex-col'> 
            <div className="relative mt-10">
     <div
       className="h-72 bg-cover bg-center bg-gray-300 rounded-xl mx-6"
       style={{ backgroundImage: `url(${Contectback})` }}
     ></div>
     <div className="absolute inset-0 flex items-center justify-center text-green-300 bg-black bg-opacity-50 text-center rounded-xl mx-6">
       <p className="text-xxxl md:text-2xl font-semibold px-4">
         Oure Products
       </p> 
     </div>
   </div> 


   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
 
  
 {
    filtereProdect.length > 0 ?
   (filtereProdect.map((d,i)=>(
    <div key={i} class="max-w-sm  bg-white rounded-lg shadow-lg overflow-hidden">

<div className=' items-center '  > <img src={d.image} alt="Product   Image" class="w-full  h-56 "/></div>



<div class="p-4">

<h2 class="text-xl font-semibold text-gray-800">{d.name}</h2>


<p class="text-gray-600 text-sm">Category: <span class="font-medium text-gray-700">{d.catagary}</span></p>


<div class="flex flex-col items-start mt-2">
<p class="text-lg font-bold text-green-600 mr-2">Price &#8377; {(d.price)-(d.price*(d.discount/100)).toFixed(2)}</p>
<span class="text-sm text-gray-500 line-through"> M.R.P &#8377; {(d.price)}</span>
<span class=" text-xs bg-red-500 text-white px-2 py-1 rounded-full">{d.discount} %OFF</span>
</div>

<p class="mt-3 text-gray-700 text-sm">
{d.description}
</p>

<div class="mt-4">
<button  onClick={()=>{handelNavigate(d)}} class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
Viewmor
</button>
</div>
<div class="mt-4">
<button 
onClick={()=>handeleaddToCart(d.id)}
class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
Addn to Cart
</button>
</div>
<div class="mt-4">

</div>
</div>
</div>


))):<></>
 }


 

</div>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
 
  
 {
    
   (prodact.map((d,i)=>(

    <div key={i} class="max-w-sm  bg-white rounded-lg shadow-lg overflow-hidden">

<div className=' items-center '  > <img src={d.image} alt="Product   Image" class="w-full  h-56 "/></div>



<div class="p-4">

<h2 class="text-xl font-semibold text-gray-800">{d.name}</h2>


<p class="text-gray-600 text-sm">Category: <span class="font-medium text-gray-700">{d.catagary}</span></p>


<div class="flex flex-col items-start mt-2">
<p class="text-lg font-bold text-green-600 mr-2">Price &#8377; {(d.price)-(d.price*(d.discount/100)).toFixed(2)}</p>
<span class="text-sm text-gray-500 line-through">M.R.P &#8377; {(d.price)}</span>
<span class=" text-xs bg-red-500 text-white px-2 py-1 rounded-full">{d.discount} %OFF</span>
</div>

<p class="mt-3 text-gray-700 text-sm">
{d.description}
</p>

<div class="mt-4">
<button  onClick={()=>{handelNavigate(d)}} class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
Viewmor
</button>
</div>
<div class="mt-4">
<button 
onClick={()=>{handeleaddToCart(d.id)}}
class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
Addn to Cart
</button>
</div>
<div class="mt-4">

</div>
</div>
</div>


)))
 }
</div>





 

        </ div>
    )
}


export default Home;