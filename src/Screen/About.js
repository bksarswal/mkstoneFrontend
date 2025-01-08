import React, { useEffect } from "react";



import AOS from "aos";
import "aos/dist/aos.css";
import owner from "../Images/sosn/owner.jpg"

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Saini Online Stone Industries - About ";
  }, []);

  return (
    <>
    
      <div className="w-full">
        <div className="relative">
          <div className="h-72 bg-cover bg-center bg-gray-200" style={{ backgroundImage: 'url("/path-to-banner-image.jpg")' }}></div>
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold px-4">
             Saini Online Stone industries  is one of the leading manufacturers of Sandstone Fountain, Sandstone Statue, Sandstone Jali etc.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10 px-4" data-aos="zoom-in">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Saini Online Stone industries
          </h1>
          <div className="w-16 h-1 bg-blue-500 mt-2"></div>
        </div>

        <div className="mt-6 text-gray-700 space-y-4">
          <p>
          Saini Online Stone industries  is one of the leading manufacturers of Sandstone Fountain, Sandstone Statue, Sandstone Jali etc.
          </p>
          <p>
            We are specialists in grit wash with over 25+ years of experience
            in the field. Our motto is your satisfaction and quality.
          </p>
          <p>
            We provide our services pan India 
          </p>
          <p>
            At Saini Online stone  industries, safety is our top priority. We follow strict
            safety protocols and regulations to ensure a safe working environment
            for our workers and clients.
          </p>
          <p>
            Our clients trust us to deliver projects that meet their unique needs
            and exceed their expectations. We have completed numerous projects
            for residential and commercial clients.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Our Products Includes:
        </h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
          <li>Sandstone Flower Pot</li>
          <li>Sandstone Jali</li>
          <li>Sandstone Fountain</li>
          <li>Sandstone Wall Panels</li>
          <li>Sandstone Temples</li>
          <li>Sandstone Gate</li>
          <li>Sandstone Bench</li>
          <li>Sandstone Bench</li>
        </ul>

        <p className="mt-6 text-gray-700">
        We are offering "Sandstone Flower Pot, Sandstone Statue, Sandstone Jali, Sandstone Fountain, Sandstone Gate, Sandstone Wall Panels, Sandstone Temples, 
        Sandstone Bench, Sandstone Pillars, Stone Baluster Railing" etc.
        </p>
        <p className="mt-4 text-gray-700">
          Thank you for considering Saini Online Stone industries for your manufacturers
          needs. We look forward to working with you.
        </p>
        <strong>MANISH SAINI (Owner)</strong>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img src={owner} alt="Project 1" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg  shadow-md">
          <img src={owner} alt="Project 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;
