import { useState } from 'react';
import clsx from 'clsx';

import { useDispatch } from 'react-redux'; // For dispatching actions (if using Redux)
import { IoMdMenu } from 'react-icons/io';
import logo from '../Images/sosn/Screenshot (6).png';
import '../Style/index.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login status
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch(); // Initialize Redux dispatch (optional)

  const handleMenu = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleLogout = () => {
    if (isLoggedIn) {
      // Dispatch logout action or clear user data
      dispatch({ type: 'Logout' }); // Replace 'LOGOUT' with your action type
      setIsLoggedIn(false); // Update local state
    } else {
      // Navigate to login page
      window.location.href = '/Login'; // Alternatively, use `navigate` if using react-router
    }
  };

  const Name = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/About' },
    { name: 'Contact', link: '/Contact' },
    
    {
      name: isLoggedIn ? 'Logout' : 'Login',
      action: handleLogout, // Attach logout/login handler here
    },
  ];

  return (
    <>
      <nav className="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" className="flex gap-2 items-center">
          <img className="object-cover max-w-12 max-h-8 ml-4" src={logo} alt="bk" />
          <span className="text-lg font-medium">Saini Online Stone industri</span>
        </a>

        {/* Desktop Menu */}
        <div id="nav-menu" className={clsx('hidden lg:flex gap-12')}>
          {Name.map((d, i) =>
            d.action ? (
              <button
                key={i}
                onClick={d.action}
                className="font-medium hover:bg-gray-500 p-2 rounded-md block"
              >
                {d.name}
              </button>
            ) : (
              <a
                key={i}
                href={d.link}
                className="font-medium hover:bg-gray-500 p-2 rounded-md block"
              >
                {d.name}
              </a>
            )
          )}
        </div>

        <button className="hidden lg:flex items-center border-2 px-2 py-2 gap-2 rounded-md border-black">
          <img src={logo} className="max-w-6 max-h-6" alt="mode" />
          <span>ModeTitle</span>
        </button>

        {/* Mobile Menu Button */}
        <button type="button" className="p-2 lg:hidden" onClick={handleMenu}>
          <IoMdMenu />
        </button>

        {/* Mobile Menu */}
        <div
          id="nav-dialog"
          className={clsx('fixed z-10 lg:hidden inset-0 bg-white', {
            block: isActive,
            hidden: !isActive,
          })}
        >
          <div id="navbar" className="flex justify-between p-4">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img className="object-cover max-w-12 max-h-8 ml-4" src={logo} alt="bk" />
              <span className="text-lg font-medium">YourBrand</span>
            </a>
            <button type="button" className="p-2" onClick={handleMenu}>
              <i className="fa-solid fa-xmark text-gray-800"></i>
            </button>
          </div>

          <div className="mt-6">
            {Name.map((d, i) =>
              d.action ? (
                <button
                  key={i}
                  onClick={d.action}
                  className="font-medium p-2 m-3 hover:bg-gray-500 block rounded-lg"
                >
                  {d.name}
                </button>
              ) : (
                <a
                  key={i}
                  href={d.link}
                  className="font-medium p-2 m-3 hover:bg-gray-500 block rounded-lg"
                >
                  {d.name}
                </a>
              )
            )}
          </div>

          <div className="h-[1px] bg-red-300"></div>
          <button className="mt-6 w-full flex items-center hover:bg-gray-500 px-4 py-2 gap-2">
            <img src={logo} className="max-w-6 max-h-6" alt="mode" />
            <span>ModeTitle</span>
            <IoMdMenu />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
