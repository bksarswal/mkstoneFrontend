import React from "react";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import EmailIcon from "@mui/icons-material/Email";
// import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 mb-0 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Informations Section */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Informations</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
            Saini Online Stone industries  is one of the leading manufacturers of Sandstone Fountain, Sandstone Statue, Sandstone Jali etc.
            We are specialists in grit wash with over 20+ years of experience
            in the field. Our motto is your satisfaction and quality.  
            We provide our services pan India.
            
            </p>
          </div>

          {/* Our Office Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Office</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                {/* <LocalPhoneIcon className="mr-2 text-primary" /> */}
                <Link to="tel:9119142594" className="hover:text-primary">+91 9119142594</Link>
              </li>
              <li className="flex items-center">
                {/* <LocalPhoneIcon className="mr-2 text-primary" /> */}
                <Link to="tel:7073736054" className="hover:text-primary">+91 7073736054</Link>
              </li>
              <li className="flex items-center">
                {/* <EmailIcon className="mr-2 text-primary" /> */}
                <Link to="mailto:bholusaini686@gmail.com" className="hover:text-primary">
                  bholusaini2112@gmail.com
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
                <Link to="/gallery" className="hover:text-primary">Our Project Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer End */}
        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-500 text-sm">
            Copyright © 2024. Bksarswal0799.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
