import React, { useEffect, useRef, useState } from 'react';
import Parallax from './reusable/Parallax';
import projectData from '../assets/projects.json';
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
} from 'framer-motion';
import Cards from './reusable/Cards';
import dp from '../assets/dp.png';

function Projects() {
  const ref = useRef(null);
  const blurRef = useRef(null);

  const inView = useInView(ref, { once: false, amount: 0 });
  const { scrollYProgress } = useScroll();
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   const vantaEffect = window.VANTA.NET({
  //     el: vantaRef.current,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: true,
  //     minHeight: 100.00,
  //     minWidth: 100.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     color: 0x45a29e,
  //     backgroundColor: 0x0e0e0e,
  //   });

  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, []);
  // console.log(projectData)

  // const [isVisible, setisVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setisVisible(true);
  //           observer.disconnect();
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.8,
  //     }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);


  return (
    <>
      <div  className="h-fit relative flex flex-col items-center overflow-y-scroll no-scrollbar justify-center  text-white">
        <div className="absolute top-0 z-50 w-full h-24 opacity-70 bg-gradient-to-b from-black  to-transparent"></div>
        
        
          <div className="absolute bottom-0 w-full h-24 z-50 bg-gradient-to-b from-transparent to-black"></div>
        
        

        <Parallax />
        <motion.div
          className="absolute h-full w-full bg-transparent z-30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <div className="h-[100vh] w-full flex flex-col items-center justify-center">
          
          <div
            ref={ref}
            className="w-full flex relative z-20 flex-col items-center justify-center"
          >
           
            {/* <div ref={vantaRef} className={`${isVisible?'opacity-20':'opacity-0'} w-full h-full fixed top-[5%] z-[-10] opacity-20`} ></div> */}
          
            <AnimatePresence>
              <div
                className={`${
                  inView ? 'flex' : 'hidden'
                } w-1/2 fixed top-[40%]  items-center justify-end h-fit font-mark-pro`}
              >
                <motion.div
                  transition={{ duration: 0.7 }}
                  style={{ x: '-25vw', opacity: inView ? 0.5 : 0 }}
                  className="text-cyan pr-3 text-[2.3rem] lg:text-[7rem] text-stroke"
                >
                  some of
                </motion.div>
              </div>
              <div
                className={`${
                  inView ? 'flex' : 'hidden'
                } w-1/2 fixed z-10 top-[40%]  items-center justify-start h-fit font-mark-pro`}
              >
                <motion.div
                  transition={{ duration: 0.7 }}
                  className="text-cyan font-semibold pl-3 text-[2.3rem] lg:text-[7rem]"
                  style={{
                    x: '25vw',
                    opacity: inView ? 0.5 : 0,
                  }}
                >
                  <span className="text-stroke font-normal">my</span> works
                </motion.div>
              </div>
            </AnimatePresence>
          </div>
        </div>
        <div
          ref={ref}
          className="w-[85%] flex flex-col items-center justify-center "
        >
          <div className="relative w-full h-full flex flex-col gap-10 z-30">
            {projectData.map((project, index) => {
              
              return <Cards key={index} title={project.title} desc={project.desc} img={project.img} tools={project.tools} liveLink={project.live} domains={project.domains} />;
            })}
          </div>
        </div>
      </div>

    </>
  );
}

export default Projects;
