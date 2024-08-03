import React from 'react';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { ReactLenis, useLenis } from 'lenis/react'


function ScrollContainer() {
  return (
    <>
    <ReactLenis root options={{ lerp: 0.3, duration: 3 }}>
      <Landing />
      <About />
      <Projects />
      <Contact />
      </ReactLenis>
    </>
  );
}

export default ScrollContainer;
