import React from 'react';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';

function Topbar() {
  return (
    <>
      <div className="flex justify-between items-center fixed z-[100] w-full h-[10vh] lg:h-[13vh] px-4 lg:px-10 pt-5">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          className="h-full w-auto cursor-pointer"
        >
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src="logo.svg"
            className="h-full lg:w-20 w-auto drop-shadow-custom "
            alt="Logo"
          />
        </Link>

        <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
          onClick={() =>
            (window.location.href =
              "mailto:nihal.n.13.02@gmail.com?subject=Let's%20Collaborate&body=Hi%20Nihal,")
          }
          className="bg-cyan hover:bg-[#4cbcb5] duration-200 rounded-full h-2/3 px-5 text-md text-dark font-mono tracking-wider drop-shadow-custom"
        >
          hire me
        </motion.button>
      </div>
    </>
  );
}

export default Topbar;
