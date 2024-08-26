import * as React from 'react';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgb(102, 252, 241,0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: '#66FCF1',
  },
};

export const Logo = () => (
  <div className="w-screen h-screen overflow-hidden p-0 m-0 flex justify-center items-center perspective-[500px] bg-dark">
    <div className="w-[10rem] h-[10rem] flex place-content-center overflow-hidden  rounded-full">
      <motion.svg
       initial={{ opacity: 1, scale:1 }}
       animate={{opacity:0, scale:0}}
       viewport={{ once: true }}
       transition={{ duration: 0.3, delay:3.3 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 564 564"
        className="w-[80%] overflow-visible stroke-cyan stroke-2 stroke-linejoin-round stroke-linecap-round"
      >
        <motion.path
        
          d="M158 434.5H246.5V221H320V434.5H406.5C406.667 356.5 406.9 193.4 406.5 165C406.1 136.6 383 129.167 371.5 129H158V434.5Z"
          fill="#66FCF1"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.5, ease: 'easeInOut' },
            fill: { duration: 1,delay:1.5 , ease: [1, 0, 0.8, 1] },
          }}
          
        />
      </motion.svg>
    </div>
  </div>
);
