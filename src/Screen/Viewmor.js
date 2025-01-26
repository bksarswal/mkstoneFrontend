
import { useLocation } from "react-router"

function   Viewmore(){


    const {state} = useLocation()

    return(


        

 
        <div className="flex mt-8 items-center justify-center min-h-screen bg-gray-100">
    <div  class="max-w-sm  bg-white rounded-lg shadow-lg overflow-hidden">
 
       <div className=' items-center '> <img src={state.image} alt="Product   Image" class="w-full  h-56 "/></div>
    


  <div class="p-4">

    <h2 class="text-xl font-semibold text-gray-800">{state.name}</h2>

   
    <p class="text-gray-600 text-sm">Category: <span class="font-medium text-gray-700">{state.catagary}</span></p>

  
    <div class="flex flex-col items-start mt-2">
      <span class="text-sm text-gray-500 line-through">&#8377; {(state.price)}</span>
        <p class="text-lg font-bold text-green-600 mr-2">Price &#8377; {(state.price)-(state.price*(state.discount/100)).toFixed(2)}</p>
      <span class="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded-full">{state.discount} %OFF</span>
    </div>

    <p class="mt-3 text-gray-700 text-sm">
     {state.description}
    </p>

    
    <div class="mt-4">
      <button class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
    Add to cart
      </button>
    </div>
    <div class="mt-4">
      <button class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
      <a
          target="_blank"
          without="true"
          rel="noreferrer"
          href="https://wa.me/+919549230117/?text=Hi, I would like to use your service!! Please give me more information.${}"
          aria-label="Whatsapp"
  
        >
         Contect With Owner 
        </a>
      </button>
    </div>
  </div>
</div>


        
      
    
     </div>


      
    )
}


export default Viewmore