import React from "react";
import whatsapplogo from '../Images/sosn/whatsapp-logo-icon-isolated-on-transparent-background-free-png.webp'
const Whatsapp = () => {
  return (
    <>
      {/* <!-- whatsapp icon --> */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          target="_blank"
          without="true"
          rel="noreferrer"
          href="https://wa.me/+919549230117/?text=Hi, I would like to use your service!! Please give me more information."
          aria-label="Whatsapp"
          className="block w-16 h-16  rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <img
            src={whatsapplogo}
            alt="whatsapp"
            loading="lazy"
            className="w-full h-full object-contain p-2"
          />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
