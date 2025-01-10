
import react from "react";

import { useState } from "react";
import imgilu from "../../Images/sosn/backabout.jpg";
import axios from "axios";
import { Base_URL } from "../../config/config";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router";




function AdminHome(){

    const navigate = useNavigate();
    const [values ,setValues] = useState({
      name:"",
      catagary:"",
    price:"",
    discount:"",
    description:"",
    image :""

  });

  

const handleInput = (e) => {

    setValues({...values ,  [e.target.name] : e.target.value})
  
};
const handleAddprodect = () => {
  if (!values.name || !values.catagary || !values.price || !values.discount || !values.description || !values.image) {
    toast.error("Please fill in all fields.");
    return;
  }
  axios.post(Base_URL + '/admin/prodect', values)
    .then((res) => {
      toast.success(res.data.message);
      
    })
    .catch((err) => {
      console.error(err);
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    });
};


  return (< div className='mt-24 mb-6'> 
    <div className="flex justify-center items-center w-full h-full bg-slate-50">
      <div className="form-container hidden lg:flex rounded-xl shadow-xl border w-11/12 max-w-screen-xl">
        <div className="form-section w-1/2 px-24 py-12 text-center">
          <h1 className="text-3xl font-semibold mt-6 opacity-80 text-neutral-900">
            bsdk markt  ko chhan mar jo bdiya itme dike use add kr de 
          </h1>
          <p className="text-black opacity-60 mt-3">
          ha bdiya hh krde 
          </p>

          <div className="mt-6">
          <label htmlFor="name" className="block text-left mb-2">
              Name
            </label>
          <input
              id="name"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Enter your name"
            />
            <label htmlFor="catagary" className="block text-left mb-2">
              catagary
            </label>
            <input
              id="catagary"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              name="catagary"
              onChange={handleInput}
              placeholder="Enter your catagary number"
            />
              

            <label htmlFor="price" className="block text-left mb-2">
              Price
            </label>
            <input
              id="price"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              name="price"
              onChange={handleInput}
              placeholder="Enter your price"
            />

            <label htmlFor="discount" className="block text-left mb-2">
             Discount
            </label>
            <input
              id="discount"
              className="border rounded-lg w-full px-4 py-2"
              type="text"
              name="discount"
              onChange={handleInput}
              placeholder="Enter your discount"
            />
            <label htmlFor="description" className="block text-left mb-2">
             Discription
            </label>
            <input
              id="description"
              className="border rounded-lg w-full px-4 py-2"
              type="text"
              name="description"
              onChange={handleInput}
              placeholder="Enter your description"
            />
            <label htmlFor="image" className="block text-left mb-2">
            ImageLinlk
            </label>
            <input
              id="image"
              className="border rounded-lg w-full px-4 py-2"
              type="text"
              name="image"
              onChange={handleInput}
              placeholder="Enter your image"
            />

            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleAddprodect}
            >
              kr d hit hhb dba d
            </button>
          
          </div>
        </div>

        <div className="illustration-section w-1/2 bg-transparent text-center p-12">
          <img src={imgilu} alt="Illustration" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-2">or bsdk kya hall h  sun tu mast mast itme add ism link vale section me jo itme i uska link dal dena okk   </h1>
          <p className="mb-8"></p>

          <div className="dots flex justify-center items-center gap-x-3">
            <div className="dot w-2 h-2 bg-white rounded-full"></div>
            <div className="dot w-2 h-2 bg-white rounded-full"></div>
            <div className="dot w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="form-container flex lg:hidden rounded-xl shadow-xl border w-11/12 h-full max-w-screen-xl">
        <div className="form-section w-full px-8 py-12">
          <h1 className="text-3xl font-semibold mt-6">Add kr </h1>
          <p className="opacity-60 mt-3">hi Everyone</p>

          <div className="mt-6">
          <label htmlFor="name" className="block text-left mb-2">
              Name
            </label>
          <input
              id="name"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              name="name"
              onChange={handleInput}
              placeholder="Enter your name"
            />
            <label htmlFor="catagary" className="block text-left mb-2">
              catagary
            </label>
            <input
              id="catagary"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              name="catagary"
              onChange={handleInput}
              placeholder="Enter your catagary number"
            />
              

            <label htmlFor="price" className="block text-left mb-2">
              Price
            </label>
            <input
              id="price"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="number"
              name="price"
              onChange={handleInput}
              placeholder="Enter your price"
            />

            <label htmlFor="discount" className="block text-left mb-2">
             Discount
            </label>
            <input
              id="discount"
              className="border rounded-lg w-full px-4 py-2"
              type="discount"
              name="discount"
              onChange={handleInput}
              placeholder="Enter your discount"
            />
            <label htmlFor="description" className="block text-left mb-2">
             Discription
            </label>
            <input
              id="description"
              className="border rounded-lg w-full px-4 py-2"
              type="text"
              name="description"
              onChange={handleInput}
              placeholder="Enter your description"
            />
            <label htmlFor="image" className="block text-left mb-2">
            ImageLinlk
            </label>
            <input
              id="image"
              className="border rounded-lg w-full px-4 py-2"
              type="text"
              name="image"
              onChange={handleInput}
              placeholder="Enter your image"
            />

            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleAddprodect}
            >
              kr d hit hhb dba d
            </button>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}





export default AdminHome;