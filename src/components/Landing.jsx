import React, { useEffect, useRef, useState } from 'react';
import NavBtn from './reusable/NavBtn';
import Typewriter from 'typewriter-effect';
import email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import { AnimatePresence, motion } from 'framer-motion';

function Landing() {
  const lines = [
    'transforming',
    'creative visions',
    'into immersive',
    'digital',
    'experiences.',
  ];

  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  
  useEffect(() => {
    if (!vantaEffect) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x45a29e,
        backgroundColor: 0x0e0e0e,
      });
      setVantaEffect(effect);
    }
  
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      id="home"
      className=" h-[95vh] flex items-center w-full  flex-col  justify-center p-5 relative z-0"
    >
      <div className="absolute bottom-0 w-full h-24 z-50 bg-gradient-to-b from-transparent opacity-70 to-[#000000]"></div>

      <motion.div
        initial={{ scale: 2, opacity: 0 }} // Added opacity here
        animate={{ scale: 1, opacity: 0.2 }} // Added opacity here
        transition={{ duration: 1 }}
        ref={vantaRef}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', zIndex: 0 }}
      ></motion.div>

      <div className="relative w-[90%] lg:w-[80%] p-[1.5px] flex h-[30rem] z-10 rounded-l-full rounded-tr-full overflow-hidden shadow-navbar">
        <div className="animate-rotate z-10 absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#66fcf1_20deg,transparent_120deg)]"></div>

        <div className="relative z-20 w-full rounded-l-full rounded-tr-full h-full bg-dark flex flex-col lg:flex-row justify-center items-center shadow-navbar">
          {/* mobile */}
          <div className="w-full px-8 lg:w-1/2 lg:hidden flex flex-col justify-center p-5 font-normal tracking-wider text-[#e0e0e0] font-montserrat items-start lg:left-24 relative text-lg">
            <div className="text-left flex flex-col gap-1 w-full">
              <p className="text-sm lg:text-3xl font-semibold font-mono">
                Hey, I'm 
              </p>
              <p className="text-5xl text-cyan font-montserrat font-semibold relative -left-1">
                Nihal N
              </p>
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'Pixel Perfectionist',
                    'Building Digital Dreams',
                    'CSS Magician',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
              <div className="flex gap-10 items-center justify-between h-fit w-full  mt-10">
                <a href="https://github.com/niha1n/">
                  <img
                    src={github}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="GitHub"
                  />
                </a>

                <a href="https://www.linkedin.com/in/n-nihal/">
                  <img
                    src={linkedin}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://wa.me/918281537869">
                  <img
                    src={whatsapp}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="WhatsApp"
                  />
                </a>
                <a href="https://gmail.com">
                  <img
                    src={email}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="Email"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="lg:w-1/2  hidden lg:flex flex-col justify-center p-5 font-normal tracking-wider text-[#e0e0e0] font-montserrat items-start lg:left-24 relative text-lg">
            <div className="text-left flex flex-col gap-1">
              <p className="text-xl lg:text-3xl font-semibold">
                Hey, I'm Nihal
              </p>
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'Pixel Perfectionist',
                    'Building Digital Dreams',
                    'CSS Magician',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
              <div className="flex gap-10 items-center justify-between h-fit w-[13rem] mt-7">
                <a href="https://github.com/niha1n/">
                  <img
                    src={github}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="GitHub"
                  />
                </a>

                <a href="https://www.linkedin.com/in/n-nihal/">
                  <img
                    src={linkedin}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://wa.me/918281537869">
                  <img
                    src={whatsapp}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="WhatsApp"
                  />
                </a>
                <a href="https://gmail.com">
                  <img
                    src={email}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="Email"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2 flex flex-col items-center md:items-end justify-center">
            <div className="text-2xl lg:text-6xl hidden lg:block font-bold text-[#e0e0e0] text-left lg:text-right w-full lg:w-[80%] lg:mr-[8rem]">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className="overflow-hidden lg:h-[4.5rem] w-full"
                >
                  {line.split(' ').map((word, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1 }}
                      className={
                        word.toLowerCase() === 'digital'
                          ? 'text-[#66fcf1] inline-block'
                          : 'inline-block'
                      }
                      style={{ whiteSpace: 'pre' }} // Keep spaces
                    >
                      {word}{' '}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
