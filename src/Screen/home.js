
 import  react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
 import axios from 'axios';
import { toast } from 'react-toastify';
import { Base_URL } from '../config/config';
import { data } from 'react-router';
function Home(){

   const [p_data, setPData] = useState([]);

  function Getprodect(){

axios.get(Base_URL + '/getprotects' , p_data).then((res)=>{
    console.log(res.data.data);
    setPData(res.data.data);
    if(res.data.message){
        toast.warn(res.data.message)
        console.log(res.data.message);
    }
   
    
}).catch((err)=>{

    toast.error(err)
})



 }


   useEffect(()=>{
Getprodect();

   },[])


    return (

        <>
   
    <div  class="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
     {
        Array.isArray(p_data) && p_data.length >0 ?
        p_data.map((d,i)=>(
            <div key={i} class="max-w-sm  bg-white rounded-lg shadow-lg overflow-hidden">
 
  <img src={d.image} alt="Product Image" class="w-full h-48 object-cover"/>


  <div class="p-4">

    <h2 class="text-xl font-semibold text-gray-800">{d.name}</h2>

   
    <p class="text-gray-600 text-sm">Category: <span class="font-medium text-gray-700">{d.catagary}</span></p>

  
    <div class="flex items-center mt-2">
        <p class="text-lg font-bold text-green-600 mr-2">{(d.price)}</p>
      <span class="text-sm text-gray-500 line-through">{(d.price)*0.15}</span>
      <span class="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">{d.discount}</span>
    </div>

    <p class="mt-3 text-gray-700 text-sm">
     {d.description}
    </p>

    <div class="mt-4">
      <button class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  </div>
</div>


        )):<></>
     }
   
    
     
    
</div>
        </>
    )
}


export default Home;