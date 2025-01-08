import React, { useEffect, useState } from "react";
import imgilu from "../Images/image.png";
import axios from "axios";
import { Base_URL } from "../config/config";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router";
import Whatsapp from "../Screen/watsapp";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <>
      
      <div className="container mx-auto px-4" >
  {/* Contact Banner Section */}
  <div className="relative bg-gray-100 mb-8">
    {/* Background Image */}
    <div className="contact-banner-img bg-cover bg-center h-64"></div>
    {/* Banner Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/50 text-white">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Dreams are meant to come true. <br /> We’ll make it happen for you.
      </h2>
      <div className="mt-4">
        <a
          href="#contact"
          className="inline-block px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md"
        >
          Contact us
        </a>
      </div>
    </div>
  </div>

  {/* About Section */}
  <div className="w-full py-6">
    <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
      Contact Malia Construction: Building Your Vision with 25 Years of Expertise
    </h1>
    <p className="mt-4 text-gray-700 leading-relaxed text-center">
      Ready to embark on your construction journey? Contact Malia Construction,
      a premier civil services company with an extensive 25-year legacy. Whether
      it's crafting dream homes, innovative retail spaces, efficient office buildings,
      inviting restaurants, inspiring schools, or state-of-the-art hospitals, our experienced
      team is dedicated to turning your vision into reality. Reach out to us for a consultation
      and discover how our expertise and commitment to excellence can elevate your construction
      project. Your dreams deserve the precision and innovation that Malia Construction brings to
      every endeavor. Contact us today, and let's build something extraordinary together.
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

  {/* Google Maps Section */}
  <div className="container min-w-full h-[450px] flex items-center mt-8 mb-5" data-aos="zoom-in">
    <iframe
      className="rounded-sm w-full h-full border-0"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.683012971273!2d77.0907995!3d28.5871518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2ffc8073bd%3A0xba7a50742c28f30c!2sMalia%20Contactor!5e0!3m2!1sen!2sin!4v1678274856836!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="myLocation"
    ></iframe>
  </div>

  {/* WhatsApp Section */}
  <Whatsapp />
</div>

    
    </>
  );
};

export default ContactUs;
