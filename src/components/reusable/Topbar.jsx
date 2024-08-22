import React from 'react';
import { Link } from 'react-scroll';

function Topbar() {
  return (
    <>
      <div className="flex justify-between items-center fixed z-[100] w-full h-[10vh] lg:h-[13vh] px-4 lg:px-10 pt-5">
        
        <Link to="home" spy={true} smooth={true} duration={1000} className="h-full w-auto">
          <img
            src="logo.svg"
            className="h-full lg:w-20 w-auto drop-shadow-custom"
            alt="Logo"
          />
        </Link>
        
        <button className="bg-cyan rounded-full h-2/3 px-5 text-md text-dark font-mono tracking-wider drop-shadow-custom">
          hire me
        </button>
      </div>
    </>
  );
}

export default Topbar;
