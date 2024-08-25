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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      ></motion.div>

      <div className="relative w-[90%] lg:w-[80%] p-[1.5px] flex h-[30rem] z-10 rounded-l-full rounded-tr-full overflow-hidden shadow-navbar">
        <div className="animate-rotate z-10 absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#66fcf1_20deg,transparent_120deg)]"></div>

        <div className="relative z-20 w-full rounded-l-full rounded-tr-full h-full bg-dark flex flex-col lg:flex-row justify-center items-center shadow-navbar">
          {/* mobile */}
          <div className="w-full px-8 lg:hidden flex flex-col justify-center p-5 font-normal tracking-wider text-[#e0e0e0] font-montserrat items-center  relative text-lg">
            <div className="text-left flex flex-col gap-1 w-full md:items-center">
            <motion.p
                initial={{ y: -20, opacity: 0 }} // Added opacity here
                animate={{ y: 0, opacity: 1 }} // Added opacity here
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg font-semibold font-mono md:w-[20rem]"
              >
                Hey, I'm
              </motion.p>
              <motion.p
                initial={{ y: -20, opacity: 0 }} // Added opacity here
                animate={{ y: 0, opacity: 1 }} // Added opacity here
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-6xl text-cyan font-montserrat font-semibold relative -left-1 md:w-[20rem]"
              >
                Nihal N
              </motion.p>
              <motion.div
                initial={{ y: -20, opacity: 0 }} // Added opacity here
                animate={{ y: 0, opacity: 1 }} // Added opacity here
                transition={{ duration: 1 }}
                className="md:w-[20rem] h-[3rem]"
              >
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
              </motion.div>
              <div className="flex gap-10  items-center justify-between md:justify-start h-fit w-full md:w-[20rem]  mt-10">
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
          <div className="w-1/2  hidden lg:flex flex-col justify-center p-5 font-normal tracking-wider text-[#e0e0e0] font-montserrat items-start lg:left-24 relative text-sm xl:text-lg">
            <div className="text-left flex flex-col gap-1">
              <motion.p
                initial={{ y: -20, opacity: 0 }} // Added opacity here
                animate={{ y: 0, opacity: 1 }} // Added opacity here
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg font-semibold font-mono md:w-[20rem]"
              >
                Hey, I'm
              </motion.p>
              <motion.p
                initial={{ y: -20, opacity: 0 }} // Added opacity here
                animate={{ y: 0, opacity: 1 }} // Added opacity here
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-6xl text-cyan font-montserrat font-semibold relative -left-1 md:w-[20rem]"
              >
                Nihal N
              </motion.p>
              <motion.div
                initial={{ y: -20, opacity: 0 }} // Added opacity here
                animate={{ y: 0, opacity: 1 }} // Added opacity here
                transition={{ duration: 1 }}
                className="md:w-[20rem]"
              >
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
              </motion.div>
              <div className="flex gap-10 items-center justify-between h-fit w-[13rem] mt-7">
                <motion.a
                  initial={{ y: -20, opacity: 0 }} // Added opacity here
                  animate={{ y: 0, opacity: 1 }} // Added opacity here
                  transition={{ duration: 0.7, delay: 0.2 }}
                  href="https://github.com/niha1n/"
                >
                  <img
                    src={github}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="GitHub"
                  />
                </motion.a>

                <motion.a
                  initial={{ y: -20, opacity: 0 }} // Added opacity here
                  animate={{ y: 0, opacity: 1 }} // Added opacity here
                  transition={{ duration: 0.7, delay: 0.4 }}
                  href="https://www.linkedin.com/in/n-nihal/"
                >
                  <img
                    src={linkedin}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="LinkedIn"
                  />
                </motion.a>
                <motion.a
                  initial={{ y: -20, opacity: 0 }} // Added opacity here
                  animate={{ y: 0, opacity: 1 }} // Added opacity here
                  transition={{ duration: 0.7, delay: 0.6 }}
                  href="https://wa.me/918281537869"
                >
                  <img
                    src={whatsapp}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="WhatsApp"
                  />
                </motion.a>
                <motion.a
                  initial={{ y: -20, opacity: 0 }} // Added opacity here
                  animate={{ y: 0, opacity: 1 }} // Added opacity here
                  transition={{ duration: 0.7, delay: 0.8 }}
                  href="mailto:nihal.n.13.02@gmail.com?subject=Let's%20Collaborate&body=Hi%20Nihal,"
                >
                  <img
                    src={email}
                    className="h-full w-7 hover:-translate-y-[2px] duration-100"
                    alt="Email"
                  />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2 flex flex-col items-center md:items-end justify-center">
            <div className="text-2xl lg:text-[2.7rem] leading-[3rem] xl:text-6xl hidden lg:block font-bold text-[#e0e0e0] text-left lg:text-right w-full lg:w-[85%] xl:w-[90%] lg:mr-[4rem] xl:mr-[8rem]">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className="overflow-hidden xl:h-[4.5rem] w-full pb-2"
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
