import React from 'react';
import { Link } from 'react-scroll';
import home from '../../assets/navIcons/home.png';
import about from '../../assets/navIcons/about.png';
import contact from '../../assets/navIcons/contact.png';
import work from '../../assets/navIcons/work.png';
import nav from '../../assets/navIcons/nav.png';
import {motion} from 'framer-motion'

function Sidebar() {
  return (
    <>
      {/* desktop view */}
      <motion.div initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="fixed right-5 hidden lg:flex items-center justify-center w-[3rem] h-full z-[100]">
        <div className="relative bg-[#171717] w-full h-10 rounded-full shadow-navbar flex items-center justify-evenly duration-500 hover:h-1/2">
          {/* Initial Icon (Visible when collapsed) */}
          <div
            className="absolute w-6 h-6 top-2 transition-all duration-100 ease-in-out"
            style={{ opacity: '1', pointerEvents: 'auto' }}
          >
            <img src={nav} className="w-full h-full" alt="Nav" />
          </div>

          {/* Expanded Icons (Visible on hover) */}
          <div
            className="flex flex-col items-center justify-evenly w-full h-full transition-opacity duration-500 ease-in-out hover:opacity-100 opacity-0"
            onMouseEnter={(e) => {
              e.currentTarget.previousSibling.style.opacity = '0';
              e.currentTarget.previousSibling.style.pointerEvents = 'none';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.previousSibling.style.opacity = '1';
              e.currentTarget.previousSibling.style.pointerEvents = 'auto';
            }}
          >
            <div className="w-6 h-6 hover:scale-[1.1] duration-200 cursor-pointer">
              <Link to="home" spy={true} smooth={true} duration={1000}>
                <img src={home} className="w-full h-full" alt="Home" />
              </Link>
            </div>
            <div className="w-6 h-6 hover:scale-[1.1] duration-200 cursor-pointer">
              <Link to="about" spy={true} smooth={true} duration={1000}>
                <img src={about} className="w-full h-full" alt="About" />
              </Link>
            </div>
            <div className="w-6 h-6 hover:scale-[1.1] duration-200 cursor-pointer">
              <Link to="work" spy={true} smooth={true} duration={1000}>
                <img src={work} className="w-full h-full" alt="Work" />
              </Link>
            </div>
            <div className="w-7 h-7 hover:scale-[1.1] duration-200 cursor-pointer">
              <Link to="contact" spy={true} smooth={true} duration={1000}>
                <img src={contact} className="w-full h-full" alt="Contact" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile view */}
      <div className="fixed bottom-2 flex lg:hidden items-center justify-center h-[5rem] w-full  z-[100]">
        <div className="  bg-[#171717] w-[90%] h-2/3 rounded-full shadow-navbar flex items-center justify-evenly gap-7">
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
            <Link to="home" spy={true} smooth={true} duration={1000}>
              <img src={home} className="w-full h-full" alt='home' />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
            <Link to="about" spy={true} smooth={true} duration={1000}>
              <img src={about} className="w-full h-full" alt='about' />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={200}
              duration={1000}
            >
              <img src={work} className="w-full h-full"  alt='projects'/>
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              <img src={contact} className="w-full h-full"  alt='contact'/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
