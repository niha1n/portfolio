import React from 'react';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';
import home from '../../assets/navIcons/home.png';
import about from '../../assets/navIcons/about.png';
import contact from '../../assets/navIcons/contact.png';
import work from '../../assets/navIcons/work.png';

function Navbar() {
  return (
    <>
      <div className="fixed hidden  right-2 lg:flex items-center justify-center w-[3rem] h-full  z-[100]">
        <div className="  bg-[#171717] w-full h-2/3 rounded-full shadow-navbar flex flex-col items-center justify-evenly">
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
            <Link to="home" spy={true} smooth={true} duration={1000}>
              <img src={home} className="w-full h-full" />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
          <Link to="about" spy={true} smooth={true} duration={1000}>
              <img src={about} className="w-full h-full" />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
          <Link to="work" spy={true} smooth={true} duration={1000}>
              <img src={work} className="w-full h-full" />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
          <Link to="contact" spy={true} smooth={true} duration={1000}>
              <img src={contact} className="w-full h-full" />
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 flex lg:hidden items-center justify-center h-[4rem] w-full  z-[100]">
        <div className="  bg-[#171717] w-[90%] h-2/3 rounded-full shadow-navbar flex items-center justify-evenly gap-7">
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
            <Link to="home" spy={true} smooth={true} duration={1000}>
              <img src={home} className="w-full h-full" />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
          <Link to="about" spy={true} smooth={true} duration={1000}>
              <img src={about} className="w-full h-full" />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
          <Link to="work" spy={true} smooth={true} offset={150} duration={1000}>
              <img src={work} className="w-full h-full" />
            </Link>
          </div>
          <div className="w-6 h-6 hover:scale-[1.1] duration-300">
          <Link to="contact" spy={true} smooth={true} duration={1000}>
              <img src={contact} className="w-full h-full" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
