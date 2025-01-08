import React from "react";

const Whatsapp = () => {
  return (
    <>
      {/* <!-- whatsapp icon --> */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          target="_blank"
          without="true"
          rel="noreferrer"
          href="https://wa.me/+919119142594/?text=Hi, I would like to use your service!! Please give me more information."
          aria-label="Whatsapp"
          className="block w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <img
            src="images/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
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
