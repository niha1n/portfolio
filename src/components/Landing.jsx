import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const vantaEffect = window.VANTA.NET({
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

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className=" h-[95vh] flex items-center w-full  flex-col  justify-center p-5 relative z-0"
    >
      <div className="absolute bottom-0 w-full h-24 z-50 bg-gradient-to-b from-transparent opacity-70 to-[#000000]"></div>
      <motion.div
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        ref={vantaRef}
        className="fixed h-full w-full z-0 opacity-20"
      ></motion.div>

      <div className="relative w-[90%] lg:w-[80%] p-[1.5px] flex h-[30rem] z-0 rounded-l-full rounded-tr-full overflow-hidden shadow-navbar">
        <div class="animate-rotate z-10 absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#66fcf1_20deg,transparent_120deg)]"></div>

        <div className="relative z-20 w-full rounded-l-full rounded-tr-full h-full bg-dark flex justify-center items-center shadow-navbar">
          <div className="lg:w-1/2 hidden lg:flex flex-col justify-center p-5 font-normal tracking-wider text-[#e0e0e0] font-montserrat items-start left-24 relative text-lg  ">
            <div className="text-left flex flex-col gap-1  ">
              {/* <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className=""
              >
                {' '}
                <NavBtn btnText={'About '} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className=""
              >
                <NavBtn btnText={'Projects'} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className=""
              >
                <NavBtn btnText={'Contact'} />
              </motion.div> */}

              <p className="text-3xl font-semibold">Hey, I'm Nihal</p>
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
                <a href="https://github.com/niha1n/" >
                  <img src={github} className="h-full w-7 hover:-translate-y-[2px] duration-100" alt="" />
                </a>

                <a href="https://www.linkedin.com/in/n-nihal/">
                  <img src={linkedin} className="h-full w-7 hover:-translate-y-[2px] duration-100" alt="" />
                </a>
                <a href="https://wa.me/918281537869">
                  <img src={whatsapp} className="h-full w-7 hover:-translate-y-[2px] duration-100" alt="" />
                </a>
                <a href="https://gmail.com">
                  <img src={email} className="h-full w-7 hover:-translate-y-[2px] duration-100" alt="" />
                </a>
              </div>
              {/* <div className="flex items-center justify-start w-full relative gap-2">
              <p className="text- text-cyan mt-10 font-mark-pro">see my <span className="text-white">works</span></p> <svg className='w-4 mt-10 animate-move-up-down' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#66fcf1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289ZM5.70711 11.2929C5.31658 10.9024 4.68342 10.9024 4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929C19.3166 10.9024 18.6834 10.9024 18.2929 11.2929L12 17.5858L5.70711 11.2929Z" fill="#66fcf1"></path> </g></svg>
              </div> */}
            </div>
          </div>
          <div className="relative lg:w-1/2 flex flex-col items-center md:items-end justify-center ">
            <div className="text-4xl lg:text-6xl font-bold text-[#e0e0e0] text-left lg:text-right w-full lg:w-[80%] lg:mr-[8rem]">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className="overflow-hidden lg:h-[4.5rem] w-full "
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
