

import { useState } from "react";
import imgilu from "../Images/image.png";
import axios from "axios";
import { Base_URL } from "../config/config";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router";

function Ragister() {

  const navigate = useNavigate();
    const [values ,setValues] = useState({
      name:"",
      mobile:"",
    email:"",
    password:""

  });

  

const handleInput = (e) => {

    setValues({...values ,  [e.target.name] : e.target.value})
  
};
const handleRagister = () => {
  if (!values.name || !values.mobile || !values.email || !values.password) {
    toast.error("Please fill in all fields.");
    return;
  }
  axios.post(Base_URL + '/ragister', values)
    .then((res) => {
      toast.success(res.data.message);
      navigate('/Login')
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
const handleLogin= ()=>{

  navigate('/Login')
}


  return (< div className='mt-24 mb-6'> 
    <div className="flex justify-center items-center w-full h-full bg-slate-50">
      <div className="form-container hidden lg:flex rounded-xl shadow-xl border w-11/12 max-w-screen-xl">
        <div className="form-section w-1/2 px-24 py-12 text-center">
          <h1 className="text-3xl font-semibold mt-6 opacity-80 text-neutral-900">
            Ragister
          </h1>
          <p className="text-black opacity-60 mt-3">
            Create your Account
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
            <label htmlFor="mobile" className="block text-left mb-2">
              Mobile
            </label>
            <input
              id="mobile"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="mobile"
              name="mobile"
              onChange={handleInput}
              placeholder="Enter your mobile number"
            />
              

            <label htmlFor="email" className="block text-left mb-2">
              Email
            </label>
            <input
              id="email"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="Enter your email"
            />

            <label htmlFor="password" className="block text-left mb-2">
              Password
            </label>
            <input
              id="password"
              className="border rounded-lg w-full px-4 py-2"
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Enter your password"
            />

            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleRagister}
            >
              Ragister
            </button>
            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>

        <div className="illustration-section w-1/2 bg-transparent text-center p-12">
          <img src={imgilu} alt="Illustration" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-2">Connect Any Application</h1>
          <p className="mb-8">Hi everyone</p>
          <div className="dots flex justify-center items-center gap-x-3">
            <div className="dot w-2 h-2 bg-white rounded-full"></div>
            <div className="dot w-2 h-2 bg-white rounded-full"></div>
            <div className="dot w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="form-container flex lg:hidden rounded-xl shadow-xl border w-11/12 h-full max-w-screen-xl">
        <div className="form-section w-full px-8 py-12">
          <h1 className="text-3xl font-semibold mt-6">Ragister</h1>
          <p className="opacity-60 mt-3">Create your Acount</p>

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
            <label htmlFor="mobile" className="block text-left mb-2">
              Mobile
            </label>
            <input
              id="mobile"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="mobile"
              name="mobile"
              onChange={handleInput}
              placeholder="Enter your mobile number"
            />
            <label htmlFor="mobile-email" className="block text-left mb-2">
              Email
            </label>
            <input
              id="mobile-email"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="email"
            name="email"
              onChange={handleInput}
              placeholder="Enter your email"
            />

            <label htmlFor="mobile-password" className="block text-left mb-2">
              Password
            </label>
            <input
              id="mobile-password"
              className="border rounded-lg w-full px-4 py-2"
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Enter your password"
            />

            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleRagister}
            >
              Ragister
            </button>
            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Ragister;
