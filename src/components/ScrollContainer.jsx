import React from 'react';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { ReactLenis, useLenis } from 'lenis/react'


function ScrollContainer() {
  return (
    <>
    <ReactLenis root options={{ lerp: 3, duration: 2}}>
      <div className="bg-[#0e0e0e]">
      <img src="logo.svg" className='fixed z-[100] w-20 top-5 left-10' alt="" />

      <Landing />
      <About />
      <Projects />
      <Contact /></div>
      </ReactLenis>
    </>
  );
}

export default ScrollContainer;
