import React, { useState } from 'react';

import NavbarLink from './NavbarLink';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    console.log(menuActive);
  };

  return (
    <nav className="w-full z-10 flex items-center justify-between flex-wrap p-6 bg-gray-900">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="#index">
          <img
            src="img/peretch.svg"
            className="fill-current h-8 mr-2 cursor-pointer"
            alt="Peretch"
          />
          <span className="font-semibold text-xl tracking-tight" />
        </a>
      </div>
      <div className="block md:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-gray-100 border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleMenu()}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto pb-4 sm:py-0 text-center sm:text-justify bg-gray-900 sm:bg-gray-900">
        <div
          className={`text-sm md:flex-grow ${menuActive === true &&
            'hidden'} md:block`}
        >
          <NavbarLink href="#about" text="About" />
          <NavbarLink href="#skills" text="Skills" />
          <NavbarLink href="#technologies" text="Technologies" />
          <NavbarLink href="#portfolio" text="Portfolio" />
          <NavbarLink href="#contact" text="Contact" />
        </div>
        <div>
          <a className="hidden sm:inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0">
            Thank you!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
