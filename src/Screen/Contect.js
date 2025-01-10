import React, { useEffect, useState } from "react";

import axios from "axios";
import { Base_URL } from "../config/config";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router";
import Whatsapp from "../Screen/watsapp";
import AOS from "aos";
import "aos/dist/aos.css";
import owner from "../Images/sosn/owner.jpg"
import Contentback from "../Images/sosn/contact.jpg"

const ContactUs = () => {
  useEffect(() => {
    document.title = "Malia Construction - Contact us for youe query";
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

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

  return (
< div className='mt-24'>       
      <div className="container mx-auto px-4" >
  {/* Contact Banner Section */}
  <div className="relative bg-gray-100 mb-8">
    {/* Background Image */}
    <div className="contact-banner-img bg-cover bg-center h-64"
     style={{ backgroundImage: `url(${Contentback})` }}
    ></div>
    {/* Banner Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white">
      <h2 className="text-2xl md:text-3xl font-semibold">
      Saini Online Stone industries 
      </h2>
      <div className="mt-4">
       
        <a
          target="_blank"
          without="true"
          rel="noreferrer"
          href="https://wa.me/+919549230117/?text=Hi, I would like to use your service!! Please give me more information. About .....   'please write your needs'"
          aria-label="Whatsapp"
          className="inline-block px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md"
        >
          Connect
         
        </a>
      </div>
    </div>
  </div>

  {/* About Section */}
  <div className="w-full py-6">
    <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
      Contact Saini Online Stone industries 
    </h1>
    <p className="mt-4 text-gray-700   font-bold  leading-relaxed text-center">
    Hello my self Manish Saini. I am from Sinkandra , Rajasthan 
I am a stone artist our factory in Sinkandra,Dausa, Rajasthan 
Our factory is equipped with high technology machine.
We also do manufacturing and fitting work
​We can make any design in 3D, we can also make the design of any temple.Karauloi, Dholpur & Banshi
 Pahadpure Stone Stone Zali, Zharokhe, Ghamle, Lion,. Elephant Ghoda, Batakh, Machli, More, Chhatri, Murti Kundi, Khambe, Pillar, Gate Lamp etc.  

You can take the service here according to you
Pro. Manish  Saini (owner)                                                        M. 9549230117
                                                    
Saini Online Stone industries in Sinkandra
    </p>
  </div>

  {/* Form Section */}
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
          <img src={owner} alt="Illustration" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-2">Connect Any query</h1>
          <p className="mb-8"> <strong>MANISH SAINI (Owner)</strong></p>
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

  {/* Google Maps Section */}
  <div className="container min-w-full h-[450px] flex items-center mt-8 mb-5" data-aos="zoom-in">
    <iframe
      className="rounded-sm w-full h-full border-0"
      src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1736364192895!5m2!1sen!2sin!6m8!1m7!1sLf0Y26GmpOHkhAxTerDAPw!2m2!1d26.94919930478351!2d76.59293553204864!3f328.85712!4f0!5f0.7820865974627469" 
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="myLocation"
    ></iframe>
  </div>

 
  {/* WhatsApp Section */}
  <Whatsapp />
</div>

    
    </div>
  );
};

export default ContactUs;
