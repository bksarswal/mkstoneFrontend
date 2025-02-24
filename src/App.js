

import CombineRouter from "./Router/CombineRoter";
import Store from "./Store/Store";

import {Provider} from "react-redux"


function App(){


  Store.subscribe(()=>{


    localStorage.setItem('reduxStore', JSON.stringify(Store.getState()))
  })
  return (
    <>
     
   
   
   <Provider   store={Store}>
    
   <CombineRouter/>
   </Provider>
   
    </>
  )
}

export default App;
