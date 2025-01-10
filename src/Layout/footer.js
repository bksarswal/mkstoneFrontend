import React from "react";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EmailIcon from "@mui/icons-material/Email";
// import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import fb from "../Images/sosn/fb.jpg";
import youtub from "../Images/sosn/youtub.png"
import Home from '../Screen/home';
import insta from '../Images/sosn/insta2.png'

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 mb-0 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Informations Section */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">AboutUs</h3>
            <p className="text-gra text-sm leading-relaxed">
            At Saini Online Stone Industries, we take pride in being one of the leading manufacturers
             of Sandstone Fountains, Sandstone Statues, Sandstone Jalis, and more.
With over 20 years of expertise in the field, we specialize in grit wash and provide
 exceptional craftsmanship and quality. Our motto is simple: Your Satisfaction and Quality First.
We are committed to serving clients across India, delivering premium sandstone products for
 homes, temples, gardens, and custom projects.
          
            </p>
          </div>

          {/* Our Office Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Office</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                {/* <LocalPhoneIcon className="mr-2 text-primary" /> */}
                <Link to="tel:9119142594" className="hover:text-primary">+91 9549230117</Link>
              </li>
              <li className="flex items-center">
                {/* <LocalPhoneIcon className="mr-2 text-primary" /> */}
                <Link to="tel:7073736054" className="hover:text-primary">+91 7891283350</Link>
              </li>
              <li className="flex items-center">
                {/* <EmailIcon className="mr-2 text-primary" /> */}
                <Link to="mailto:mks907199@gmail.com" className="hover:text-primary">
                Mks907199@gmail.com
                </Link>
              </li>
              <li className="flex items-start">
                {/* <PlaceIcon className="mr-2 text-primary mt-1" /> */}
                <Link
                  to="#"
                  className="hover:text-primary"
                >
                  235, Street Number 6, sinkndra ,Dausa ,Rajsthan
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">Contact Us</Link>
              </li>
              <li>
                 <button className=" w-full flex items-center ">
          <Link className=' hover:bg-gray-500 p-2'to="https://www.instagram.com/ms954923?igsh=dHd5ZzdncXFrNXNu"> <img src={insta} className="max-w-6 max-h-6" alt="instagram" /></Link>
          <Link to="#" className=' hover:bg-gray-500 p-2'><img src={youtub} className="max-w-6 max-h-6" alt="youtub" /></Link>
           <Link to="#" className=' hover:bg-gray-500 p-2 '><img src={fb} className="max-w-6 max-h-6" alt="facebook" /></Link>

      <Link to={Home} className=' hover:bg-gray-500 p-2 '>  </Link>
          </button>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Footer End */}
        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          
            <a className="text-gray-500  hover:bg-red-100  p-2 rounded-md text-md" href="https://bksarswal.netlify.app/">
            Copyright © 2024. Bksarswal.
            </a> 
          
        </div>
      </div>
    </>
  );
};

export default Footer;
