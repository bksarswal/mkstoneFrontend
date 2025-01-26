import React, { useEffect } from "react";



import AOS from "aos";
import "aos/dist/aos.css";
import aboutback from "../Images/sosn/backabout.jpg"
import owner from "../Images/sosn/owner.jpg"
import ContactUs from "./Contect";
import Home from "./home";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Saini Online Stone Industries - About ";
  }, []);

  return (
    < div className='mt-24'> 
    <div className="w-full">
   {/* Hero Section */}
   <div className="relative">
     <div
       className="h-72 bg-cover bg-center bg-gray-300 rounded-xl mx-6"
       style={{ backgroundImage: `url(${aboutback})` }}
     ></div>
     <div className="absolute inset-0 flex items-center justify-center text-green-300 bg-black bg-opacity-50 text-center rounded-xl mx-6">
       <p className="text-xl md:text-2xl font-semibold px-4">
         Saini Online Stone Industries is one of the leading manufacturers of Sandstone Fountain,<br></br>
          Sandstone Statue, and more.
       </p>
     </div>
   </div>
 
   {/* Content Section */}
   <div className="container font-bold text-larg font-sans mx-auto py-10 px-4">
     {/* Title Section */}
     <div className="text-center" data-aos="zoom-in">
       <h1 className="text-4xl font-bold text-gray-800">
         Saini Online Stone Industries
       </h1>
       <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
     </div>
 
     {/* About Text */}
     <div className="mt-8 space-y-4 text-gray-700 text-justify">
       <p>
         Saini Online Stone Industries is one of the leading manufacturers of Sandstone Fountain, Sandstone Statue, Sandstone Jali, etc.
       </p>
       <p>
         With over 25+ years of experience, we specialize in grit wash and prioritize quality and customer satisfaction.
       </p>
       <p>We proudly serve clients across India.</p>
       <p>
         At Saini Online Stone Industries, safety is paramount. We adhere to strict safety protocols to ensure a secure working environment for our team and clients.
       </p>
       <p>
         Our projects are designed to meet the unique needs of our clients, exceeding their expectations for both residential and commercial spaces.
       </p>
     </div>
 
     {/* Products Section */}
     <h2 className="text-2xl font-semibold text-gray-800 mt-8">
       Our Products Include:
     </h2>
     <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
       <li>Sandstone Flower Pot</li>
       <li>Sandstone Jali</li>
       <li>Sandstone Fountain</li>
       <li>Sandstone Wall Panels</li>
       <li>Sandstone Temples</li>
       <li>Sandstone Gate</li>
       <li>Sandstone Bench</li>
     </ul>
 
     <p className="mt-6 text-gray-700">
       We also offer Sandstone Pillars, Stone Baluster Railings, and more.
     </p>
     <p className="mt-4 text-gray-700">
       Thank you for considering Saini Online Stone Industries for your needs. We look forward to working with you.
     </p>
     <p className="font-semibold mt-6 text-gray-800">MANISH SAINI (Owner)</p>
 
     {/* Image Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
       <div className="overflow-hidden rounded-lg shadow-lg">
         <img src={aboutback} alt="Owner" className="w-full h-full object-cover" />
       </div>
       <div className="overflow-hidden rounded-lg shadow-lg">
         <img src={owner} alt="Owner" className="w-full h-full object-cover" />
       </div>
     </div>
   </div>
 </div>
 <Home/>
 <ContactUs/>
 </div>
  );
};

export default AboutUs;
