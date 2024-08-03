import React, { useEffect, useRef, useState } from 'react';
import dpImage from '../assets/avatar.png';
import Typewriter from 'typewriter-effect';
import { motion, useInView } from 'framer-motion';

function About() {

  const constrain = 700;
  const mouseOverContainer = useRef(null);
  const ex1Layer = useRef(null);
  const terminalRef = useRef(null);


  // const inView = useInView(terminalRef, { once: false, amount: 0 });

  const transforms = (x, y, el) => {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - box.height / 2) / constrain;
    let calcY = (x - box.x - box.width / 2) / constrain;

    return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  };

  const transformElement = (el, xyEl) => {
    el.style.transform = transforms(...xyEl);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([ex1Layer.current]);

      window.requestAnimationFrame(() => {
        transformElement(ex1Layer.current, position);
      });
    };

    const container = mouseOverContainer.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    if (mouseOverContainer.current) {
      observer.observe(mouseOverContainer.current);
    }

    return () => {
      if (mouseOverContainer.current) {
        observer.unobserve(mouseOverContainer.current);
      }
    };
  }, []);
  return (
    <>
      <div className="h-[100vh] relative z-30 flex bg-landing-grad w-full  flex-col    text-white">
        {/* <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-dark  to-black"></div> */}

        {/* <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-dark  to-black"></div> */}
        <div className="relative  flex flex-col h-full items-center justify-center">
          {/* <div className="absolute top-8 flex w-full items-center gap-1">
            <p className="font-normal font-terminal text-4xl pl-[10%]">
              $ who<span className="text-[#66fcf1]">am</span>i
            </p>
            <div className="h-8 mb-1 w-4 bg-white animate-blink"></div>
          </div> */}

          <div className="flex w-4/5 h-3/4 flex-row ">
            <div className="flex w-2/3   pl-16 items-start justify-evenly flex-col gap-5">
              <motion.h2 initial={{ x:-100, opacity: 0 }}
                whileInView={{ x:inView ? 0 : -100 ,opacity: inView ?1:0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, }} className="text-5xl w-[70%] font-mark-pro  text-white">
                about <span className="text-[#66fcf1]">me</span>?
              </motion.h2>

              <motion.p
                initial={{ x:-100, opacity: 0 }}
                whileInView={{  x:inView ? 0 : -100 ,opacity: inView ?1:0}}
                viewport={{ once: true }}
                transition={{ duration: 0.7 ,}}
                className=" font-montserrat w-[70%] text-grey"
              >
                Hello, I'm Nihal N, a dedicated web developer from Kerala,
                India. My passion lies in crafting intuitive and responsive web
                applications that stand out. I thrive on challenges, constantly
                exploring new technologies to elevate my skills. Committed to
                delivering top-notch frontend development services, I stay
                abreast of the latest industry trends. Beyond coding, I immerse
                myself in diverse tech projects, always expanding my expertise.
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
                class="w-[150px] border-[1px] border-cyan h-[50px] my-3 flex items-center justify-center rounded-3xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:border-0  before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-cyan before:to-cyan before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-cyan text-sm hover:text-dark font-montserrat tracking-wider"
              >
                Get in Touch
              </motion.button>
            </div>
            <motion.div
             initial={{ opacity: 0, x:50}}
             whileInView={{ opacity: 1, x:0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 1 }}
              ref={mouseOverContainer}
              className="flex   w-1/3 items-center justify-center flex-col "
            >
              <div ref={terminalRef} className=" h-[7%] w-full hidden border-[1px] border-b-0 border-cyan-dark rounded-t-xl  items-center">
                {' '}
                <p className="w-full text-center tracking-wider font-semibold">
                  Terminal
                </p>
              </div>
              <div
                ref={ex1Layer}
                className=" text-[1rem] bg-[#000]  shadow-custom  text-white font-bold overflow-hidden font-terminal w-full h-1/2 text-left flex flex-col gap-2  rounded-xl p-5"
              >
                {inView && (
          <>
            <div className="flex w-full gap-2 text-[#d0d0d0]">
              <p className="text-cyan">
                nihal@desktop<span className="text-white">:</span>
                <span className="text-violet-500">~</span>
                <span className="text-white">$</span>
              </p>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .pauseFor(1400)
                    .typeString(' who am i')
                    .pauseFor(700)
                    .deleteChars(5)
                    .pauseFor(1000)
                    .typeString('ami');
                }}
                options={{
                  loop: false,
                  cursor: '█',
                  delay: 100,
                }}
              />
            </div>

            <div className="flex flex-col text-[#d0d0d0]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .pauseFor(5500)
                    .typeString('- web-developer');
                }}
                options={{
                  loop: false,
                  cursor: '',
                  delay: 40,
                }}
              />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.start().pauseFor(6500).typeString('Skills:');
                }}
                options={{
                  loop: false,
                  cursor: '',
                  delay: 40,
                }}
              />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .pauseFor(8500)
                    .typeString(
                      '- frontend: React.js, Astro, HTML, CSS, TailwindCSS, JavaScript'
                    );
                }}
                options={{
                  loop: false,
                  cursor: '',
                  delay: 40,
                }}
              />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .pauseFor(12000)
                    .typeString(
                      '- backend: Node.js, Express, MongoDB, MySQL, NestJS, WebSockets'
                    );
                }}
                options={{
                  loop: false,
                  cursor: '',
                  delay: 40,
                }}
              />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .pauseFor(15500)
                    .typeString('- deployment: AWS, Dockers');
                }}
                options={{
                  loop: false,
                  cursor: '',
                  delay: 40,
                }}
              />
            </div>
          </>
        )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
