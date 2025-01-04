import { useState } from 'react';

import clsx from 'clsx';
import '../Style/index.css';
import logo from  '../Images/image.png'
import { useNavigate } from 'react-router';
import { IoMdMenu } from "react-icons/io";
import { MdOutlineLocalGroceryStore } from "react-icons/md"


 

function Navbar(){

     let navigate=useNavigate();
     
    const Name = [
        { name: 'Home', link: '/Home' },
        { name: 'About', link: '#' },
        { name: 'Contact', link: '#' },
        { name: 'Register', link: '/Ragister' },
        { name: 'Logout', 
          
        
        },
      ];
    
      const [isActive, setIsActive] = useState(false);
    
      function handleMenu() {
        setIsActive(prevState => !prevState);
      }

    return(

    <>
          <nav className="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" className="flex gap-2 items-center">
          <img className="object-cover max-w-12 max-h-8 ml-4" src={logo} alt="bk" />
          <span className="text-lg font-medium">todescription</span>
        </a>

        <div id="nav-menu" className={clsx("hidden lg:flex gap-12")}>
          {Name.map((d, i) => (
            <a key={i} href={d.link} className="font-medium hover:bg-gray-500 p-2 rounded-md block">{d.name}</a>
          ))}
        </div>

        <button className="hidden lg:flex items-center border-2 px-2 py-2 gap-2 rounded-md border-black border-solid">
          <img src={logo} className="max-w-6 max-h-6" alt="mode" />
          <span>modetitle</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        <button

          type="button"
          title="search"
          className="p-2 lg:hidden"
          onClick={handleMenu} // Using onClick to toggle mobile menu
          >
           <IoMdMenu />

        </button>

        <div id="nav-dialog" className={clsx("fixed z-10 lg:hidden inset-0 bg-white", { "block": isActive, "hidden": !isActive })}>
          <div id="navbar" className="flex justify-between">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img className="object-cover max-w-12 max-h-8 ml-4" src={logo} alt="bk" />
              <span className="text-lg font-medium">tode scription</span>
            </a>
            <button
              type="button"
              title="close"
              className="p-2 lg:hidden"
              onClick={handleMenu} // Using onClick to toggle mobile menu
            >
              <i className="fa-solid fa-xmark text-gray-800"></i>
            </button>
          </div>

          <div className="mt-6">
            {Name.map((d, i) => (
              <a key={i} href={d.link} className="font-medium p-2 m-3 hover:bg-gray-500 block rounded-lg">{d.name}</a>
            ))}
          </div>

          <div className="h-[1px] bg-red-300"></div>
          <button className="mt-6 w-full flex items-center hover:bg-gray-500 px-4 py-2 gap-2">
            <img src={logo} className="max-w-6 max-h-6" alt="mode" />
            <span>modetitle</span>
            <IoMdMenu/>
          </button>
        </div>

      </nav>
     
    </>

    )
}


export default Navbar;