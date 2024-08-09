import React, { useEffect, useRef } from 'react';
import NavBtn from './reusable/NavBtn';

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
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x45a29e,
      backgroundColor: 0x0e0e0e,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div  className=" h-[100vh] flex items-center bg-[#0e0e0e] w-full  flex-col  justify-center p-5 relative">
            <div className="absolute bottom-0 w-full h-24 z-50 bg-gradient-to-b from-transparent opacity-70 to-[#000000]"></div>
            <motion.div initial={{ scale:0 }}
                animate={{ scale:1  }}
                transition={{ duration: 1}} ref={vantaRef} className="absolute h-full w-full z-[0] opacity-30"></motion.div>


      <div className="relative w-[80%] p-[1.5px] flex h-[30rem] z-0 rounded-l-full rounded-tr-full overflow-hidden">
        <div class="animate-rotate z-10 absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#66fcf1_20deg,transparent_120deg)]"></div>

        <div className="relative z-20 w-full rounded-l-full rounded-tr-full h-full bg-dark flex">
          <div className="w-1/2 flex flex-col justify-center p-5 font-normal tracking-wider text-[#e0e0e0] font-montserrat items-center text-lg  ">
            <div className="text-left flex flex-col gap-1 w-[40%] ">
              <motion.div
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
              </motion.div>
            </div>
          </div>
          <div className="relative w-1/2 flex flex-col items-end justify-center ">
          <div className="text-6xl font-bold text-[#e0e0e0] text-right w-[80%] mr-[8rem]">
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden h-[4.5rem]">
          {line.split(' ').map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={
                word.toLowerCase() === 'digital' ? 'text-[#66fcf1] inline-block' : 'inline-block'
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
