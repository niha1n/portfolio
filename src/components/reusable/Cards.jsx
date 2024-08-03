import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import image from '../../assets/27470334_7309681.jpg';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Cards({ title, desc, github, liveLink, img, tools }) {
  const [viewMore, setViewMore] = useState(false);
  console.log('img link:',img)

  return (
    <>

        <div className="flex justify-start items-center h-[25rem] w-full gap-10 mb-24 border-[1.5px]  rounded-3xl backdrop-blur-xl  border-cyan-dark">
          <motion.div className="relative  h-full bg-gray-900 rounded-l-3xl cursor-pointer overflow-hidden">
            <img src={img} className="w-full h-full object-cover " alt="" />
          </motion.div>
          <motion.div
            // initial={{ width: '45rem' }}
            // animate={{ width: viewMore ? 'w-[50rem]' : 'w-[30rem]' }}
            className={`relative h-[50vh] flex flex-col justify-center gap-5 w-[45rem] `}
          >
            
            <motion.p
              // initial={{ x: -200 }}
              // animate={{ x: viewMore ? 0 : -100 }}
              className={`font-mark-pro text-5xl font-semibold text-white drop-shadow-lg`}
            >
              {title}
            </motion.p>
            <p className="text-white">
              {desc}
            </p>

            
            <motion.p
              className={`font-mark-pro text-lg font-semibold text-white drop-shadow-lg`}
            >
              Frameworks & Libraries  <br />
              <span
              className={`font-mark-pro text-md font-normal text-white drop-shadow-lg`}
            >
              {tools}
            </span>
            </motion.p>
            
            <a href={liveLink} className="bg-cyan w-fit py-1 px-3 text-dark rounded-md">
              Live here
            </a>
            
          </motion.div>
          
          
        </div>
    </>
  );
}

export default Cards;
