

import { useState } from "react";

import imgilu from "../Images/image.png";

import { toast } from "react-toastify";
import { Base_URL } from "../config/config";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";


function ForgotPassword() {

  const dispatch = useDispatch()
  const navigate= useNavigate();
  const [values ,setValues] = useState({
    email:"",
   

  });

const handleInput = (e) => {

    setValues({...values ,  [e.target.name] : e.target.value})
   
};

  const handleResetPass = () => {
    
    axios.post(Base_URL + '/reset', values)
    .then((res) => {
      console.log(res.data.data);
      toast.success(res.data.message);
     
      navigate('/Verifyotp');
    
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

 

  return (
    <div className="flex justify-center items-center w-full h-full bg-slate-50">
      <div className="form-container hidden lg:flex rounded-xl shadow-xl border w-11/12 max-w-screen-xl">
        <div className="form-section w-1/2 px-24 py-12 text-center">
          <h1 className="text-3xl font-semibold mt-6 opacity-80 text-neutral-900">
            Reset Your Password
          </h1>
          <p className="text-black opacity-60 mt-3">
            Welcome back! Select a method to restpass in:
          </p>

          <div className="mt-6">
            <label htmlFor="email" className="block text-left mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="email"
              onChange={handleInput}
              placeholder="Enter your email"
            />
             <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleResetPass}
            >
              Send otp
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
          <h1 className="text-3xl font-semibold mt-6">Reset Password</h1>
          <p className="opacity-60 mt-3">Welcome back! Select a method to log in:</p>

          <div className="mt-6">
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

          

            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleResetPass}
            >
              Submmit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;




