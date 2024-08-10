import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import image from '../../assets/27470334_7309681.jpg';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Cards({ title, desc, github, liveLink, img, tools, domains }) {
  const [viewMore, setViewMore] = useState(false);
  console.log('img link:', img);

  const ref = useRef(null);
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
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0.2, scale: 0.9 }}
          whileInView={{ opacity: inView ? 1 : 0.2, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          ref={ref}
          className="flex flex-col lg:flex-row justify-start items-center h-[80vh] lg:h-[25rem] w-full gap-10 mb-24 border-[3px]  rounded-3xl overflow-hidden backdrop-blur-xl  border-cyan-dark"
        >
          <motion.div className="relative w-full lg:w-auto h-full bg-gray-900 lg:rounded-l-3xl cursor-pointer overflow-hidden">
            <img
              src="logo192.png"
              className="w-full h-full object-cover "
              alt=""
            />
          </motion.div>
          <motion.div
            className={`relative h-fit lg:h-[50vh] flex flex-col justify-center gap-3 lg:gap-5 lg:w-[45rem] px-5 pb-5`}
          >
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className={`font-mark-pro text-2xl lg:text-5xl font-semibold text-white drop-shadow-lg`}
            >
              {title}
            </motion.p>
            <div className="flex items-center justify-start gap-3 flex-wrap">
              {domains.map((domain, id) => {
                return (
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: inView ? 1 : 0,
                      x: inView ? 0 : 20,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.5 + id*0.1 }}
                    href={liveLink}
                    className="border-[1.5px] border-cyan w-fit py-1 px-3 text-cyan rounded-md mb-3"
                  >
                    {domain}
                  </motion.p>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className={`font-mark-pro text-lg font-semibold text-white drop-shadow-lg`}
            >
              Technologies: <br />
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45 }}
                className={`font-mark-pro text-sm lg:text-md font-normal text-white drop-shadow-lg `}
              >
                {tools}
              </motion.span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35 }}
              className="text-white text-sm lg:text-md"
            >
              <span className="font-bold text-lg">Description: </span> {desc}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Cards;
