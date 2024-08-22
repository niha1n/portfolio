import React from 'react';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { ReactLenis, useLenis } from 'lenis/react';
import Sidebar from './reusable/Sidebar';
import Topbar from './reusable/Topbar';

function ScrollContainer() {
  return (
    <>
   
      <ReactLenis
        root
        options={{ lerp: 3, duration: 2, smoothTouch: false, smooth: true }}
      >
        <div className="bg-[#0e0e0e]">
          <Sidebar />
          <Topbar/>
          
          {/* <button className="fixed z-[100] w-fit px-5 py-3 top-5 right-5 lg:right-10 border-2 border-cyan text-cyan text-lg rounded-full hover:bg-cyan hover:text-dark duration-500"> Get in Touch</button> */}
          <Landing />
          <About />
          <Projects />
          <Contact />
        </div>
      </ReactLenis>
    </>
  );
}

export default ScrollContainer;
