import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion';



function Parallax({ onValueChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onValueChange(newValue); // Pass the new value to the parent
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Corrected the x transform value for the left and right texts
  const xLeft = useTransform(scrollYProgress, [0, 0.5], ['-50vw', '-25vw']);
  const xRight = useTransform(scrollYProgress, [0, 0.5], ['50vw', '25vw']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <div className="h-screen absolute  top-0 flex items-center justify-center w-full  overflow-hidden font-mark-pro">
      <div
        ref={ref}
        className="w-full relative z-10 flex items-center justify-center h-screen"
      >
        <AnimatePresence>
          {inView && (
            <>
            <div className="w-1/2 fixed z-10 top-[40%] flex items-center justify-end h-fit">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2}}
                className="text-cyan pr-3 text-[7rem] text-stroke"
                style={{ x: xLeft }}
              >
                some of
              </motion.div>
            </div>

            <div className="w-1/2 fixed z-10 top-[40%] flex items-center justify-start h-fit">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2}}
                className="text-cyan font-semibold pl-3 text-[7rem]"
                style={{ x: xRight }}
              >
                <span className="text-stroke font-normal">my</span> works...
              </motion.div>
            </div></>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Parallax;
