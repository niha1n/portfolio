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

function Cards({ title, desc, github, liveLink, img, tools }) {
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
        whileInView={{ opacity: inView ? 1 : 0.2, scale:1}}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ delay: 0.3, duration:0.5 }}
          ref={ref}
          className="flex justify-start items-center h-[25rem] w-full gap-10 mb-24 border-[1.5px]  rounded-[4rem] overflow-hidden backdrop-blur-xl  border-cyan-dark"
        >
          <motion.div   className="relative  h-full bg-gray-900 rounded-l-[4rem] cursor-pointer overflow-hidden">
            <img src={img} className="w-full h-full object-cover " alt="" />
          </motion.div>
          <motion.div
            className={`relative h-[50vh] flex flex-col justify-center gap-5 w-[45rem] `}
          >
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className={`font-mark-pro text-5xl font-semibold text-white drop-shadow-lg`}
            >
              {title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35 }}
              className="text-white"
            >
              {desc}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className={`font-mark-pro text-lg font-semibold text-white drop-shadow-lg`}
            >
              Frameworks & Libraries <br />
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45 }}
                className={`font-mark-pro text-md font-normal text-white drop-shadow-lg`}
              >
                {tools}
              </motion.span>
            </motion.p>

            <motion.a
              initial={{ opacity: 0, x:20 }}
              whileInView={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              exit={{ opacity: 0 }}
              transition={{  delay: 0.5 }}
              href={liveLink}
              className="bg-cyan w-fit py-1 px-3 text-dark rounded-md"
            >
              Live here
            </motion.a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Cards;
