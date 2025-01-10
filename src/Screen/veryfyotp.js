

import { useState } from "react";

import imgilu from "../Images/image.png";

import { toast } from "react-toastify";
import { Base_URL } from "../config/config";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



function VerifyOtp() {

  const dispatch = useDispatch()
  const navigate= useNavigate();
  const Location = useLocation();

  useEffect(() => {
    if (!Location.state?.email) {
      toast.error("No email found. Redirecting to login.");
      navigate("/login"); // Redirect to login if email is not present
    }
  }, [Location, navigate]);
  
  const [values ,setValues] = useState({
    email: Location.state?.email||"",
  
    otp :"",
    n_pass:""
   

  });

 
  useEffect(() => {
    if (!Location.state?.email) {
      toast.error("No email found. Redirecting to login.");
      navigate("/login");
    }
  }, [Location, navigate]);


const handleInput = (e) => {

    setValues({...values ,  [e.target.name] : e.target.value})
    
   
};

 

  const handeVerifyOtp = () => {
    

    
    axios.post(Base_URL + '/user/verify-otp', values)
    .then((res) => {
      // console.log(res.data.data);
      toast.success(res.data.message);
     
      navigate('/login');
    
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

  const handleResetPass = () => {
    
      navigate('/Resetpass');
    
   
  };
  return (< div className='mt-24 mb-10'> 
    <div className="flex justify-center items-center w-full h-full bg-slate-50">
      <div className="form-container hidden lg:flex rounded-xl shadow-xl border w-11/12 max-w-screen-xl">
        <div className="form-section w-1/2 px-24 py-12 text-center">
          <h1 className="text-3xl font-semibold mt-6 opacity-80 text-neutral-900">
            VerifyOtp
          </h1>
          <p className="text-black opacity-60 mt-3">
            veryfyotp  to restpass in:
          </p>

          <div className="mt-6">
           

            <label htmlFor="otp" className="block text-left mb-2">
             Enter OTP
            </label>
            <input
              id="otp"
              name="otp"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              onChange={handleInput}
              placeholder="Enyter otp"
            />
            <label htmlFor="password" className="block text-left mb-2">
              Enter New Password
            </label>
            <input
              id="password"
              name="password"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              onChange={handleInput}
              placeholder="Enter n pass"
            />
            
           
         
            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handeVerifyOtp}
            >
              Reset
            </button>
            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleResetPass}
            >
              OTP Send Again
            </button>
          </div>
        </div>

        <div className="illustration-section w-1/2 bg-transparent text-center p-12">
          <img src={imgilu} alt="Illustration" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-2">Connect With Online Stone Industries</h1>
          <p className="mb-8">Hello Everyone!
I’m Manish Saini, the proud owner of Saini Online Stone Industries.
If you’re looking for top-quality sandstone items for building projects, temples, gardens,
 or any other custom needs, we’re here to help. With over 20 years of expertise, 
 we ensure unmatched quality and satisfaction in every product.
Feel free to connect with us for your requirements. We’d love to collaborate and bring your vision to life!</p>
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
            

          < label htmlFor="otp" className="block text-left mb-2">
              Otp
            </label>
            <input
              id="otp"
              name="otp"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="text"
              onChange={handleInput}
              placeholder="Enyter otp"
            />
            <label htmlFor="password" className="block text-left mb-2">
              password
            </label>
            <input
              id="password"
              name="password"
              className="mb-4 border rounded-lg w-full px-4 py-2"
              type="string"
              onChange={handleInput}
              placeholder="Enyter n pass"
            />
            
           
         
            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handeVerifyOtp}
            >
              Reset
            </button>
            <button
              className="mt-4 border rounded-lg bg-red-500 text-white w-full py-2"
              onClick={handleResetPass}
            >
              otpsend again
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default VerifyOtp;




