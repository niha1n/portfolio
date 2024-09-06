import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import { motion } from 'framer-motion';

function Contact() {
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
        threshold: 0.6,
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

  const [state, handleSubmit] = useForm('xovannob');

  if (state.succeeded) {
    return (
      <div className="relative z-50 h-screen w-full flex justify-center items-center bg-landing-grad p-5">
        <p className="text-white text-xl">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        id="contact"
        ref={ref}
        className="relative z-50 h-screen w-full justify-center items-center flex bg-landing-grad p-5"
      >
        {inView && (
          <div className="flex flex-col w-full lg:w-4/5 h-4/5 p-5 justify-evenly">
            <div className="flex flex-col gap-5 xl:gap-5 w-full items-center lg:justify-center justify-between">
              <div className="flex lg:flex-row w-full flex-col items-center justify-evenly gap-5 ">
                <div className="flex flex-col items-left justify-center gap-5 w-full lg:w-1/2">
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className=" text-4xl xl:text-5xl  font-mark-pro text-white  text-center lg:text-left"
                  >
                    say <span className="text-cyan">Hello</span>!
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white text-md lg:hidden block  text-center sm:mb-4 font-montserrat lg:text-left"
                  >
                    Whether you have a question, want to collaborate, or just
                    want to say hello, feel free to reach out!
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white hidden lg:block text-md  text-center sm:mb-4 font-montserrat lg:text-left"
                  >
                    Tell me more about you!
                  </motion.p>
                  <form onSubmit={handleSubmit} className="font-montserrat ">
                    <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:gap-6">
                      <div className="mb-4 lg:w-1/3 w-full overflow-hidden">
                        <motion.label
                          initial={{ y: -21 }}
                          whileInView={{ y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1 }}
                          className="block text-gray-200 ml-1"
                          htmlFor="name"
                        >
                          Name
                        </motion.label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="mt-1 text-white bg-gray-800 p-2 w-full  rounded-md focus:outline-none"
                          placeholder="Your name"
                          autoComplete="off"
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="mb-4 lg:w-2/3 w-full overflow-hidden">
                        <motion.label
                          initial={{ y: -21 }}
                          whileInView={{ y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 1.2 }}
                          className="block text-gray-200 ml-1"
                          htmlFor="email"
                        >
                          Email
                        </motion.label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="mt-1 text-white bg-gray-800 p-2 w-full  rounded-md focus:outline-none"
                          placeholder="Your email"
                          autoComplete="off"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="mb-4 overflow-hidden">
                      <motion.label
                        initial={{ y: -21 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.4 }}
                        className="block text-gray-200 ml-1"
                        htmlFor="subject"
                      >
                        Subject
                      </motion.label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        className="mt-1 text-white bg-gray-800 p-2 w-full  rounded-md focus:outline-none"
                        placeholder="Subject"
                        autoComplete="off"
                      />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="mb-4 overflow-hidden">
                      <motion.label
                        initial={{ y: -21 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.6 }}
                        className="block text-gray-200 ml-1"
                        htmlFor="message"
                      >
                        Message
                      </motion.label>
                      <textarea
                        id="message"
                        name="message"
                        className="mt-1 text-white bg-gray-800 p-2 w-full  rounded-md focus:outline-none"
                        placeholder="Your message"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div className="w-full flex items-center justify-center mt-7">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="bg-cyan text-dark py-2 px-10 rounded-3xl hover:bg-cyan-dark"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="hidden lg:flex flex-col justify-center items-start ml-10 w-1/3">
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-md  text-center sm:mb-4 font-montserrat lg:text-left"
                  >
                    Whether you have a question, want to collaborate, or just
                    want to say hello, feel free to reach out!
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-montserrat tracking-widest text-cyan  w-full"
                  >
                    MAIL
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-md lg:text-md  lg:w-4/5 text-center mb-4 font-mark-pro lg:text-left"
                  >
                    nihalnrasiya@gmail.com
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-montserrat tracking-widest text-cyan  w-full"
                  >
                    PHONE
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
                    className="text-white text-md lg:text-md  lg:w-4/5 text-center mb-4 font-mark-pro lg:text-left"
                  >
                    +91-8281537869
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white text-3xl font-semibold lg:w-4/5 text-center mb-4 font-montserrat lg:text-left mt-5"
                  >
                    Follow Me
                  </motion.p>

                  <div className="flex gap-10  items-center justify-between sm:justify-start h-fit w-full sm:w-[20rem]  ">
                    <motion.a
                      initial={{ y: -20, opacity: 0 }} // Added opacity here
                      animate={{ y: 0, opacity: 1 }} // Added opacity here
                      transition={{ duration: 0.7, delay: 0.2 }}
                      href="https://github.com/niha1n/"
                    >
                      <img
                        src={github}
                        className="h-full w-7 hover:-translate-y-[2px] duration-100"
                        alt="GitHub"
                      />
                    </motion.a>

                    <motion.a
                      initial={{ y: -20, opacity: 0 }} // Added opacity here
                      animate={{ y: 0, opacity: 1 }} // Added opacity here
                      transition={{ duration: 0.7, delay: 0.4 }}
                      href="https://www.linkedin.com/in/n-nihal/"
                    >
                      <img
                        src={linkedin}
                        className="h-full w-7 hover:-translate-y-[2px] duration-100"
                        alt="LinkedIn"
                      />
                    </motion.a>
                    <motion.a
                      initial={{ y: -20, opacity: 0 }} // Added opacity here
                      animate={{ y: 0, opacity: 1 }} // Added opacity here
                      transition={{ duration: 0.7, delay: 0.6 }}
                      href="https://wa.me/918281537869"
                    >
                      <img
                        src={whatsapp}
                        className="h-full w-7 hover:-translate-y-[2px] duration-100"
                        alt="WhatsApp"
                      />
                    </motion.a>
                    <motion.a
                      initial={{ y: -20, opacity: 0 }} // Added opacity here
                      animate={{ y: 0, opacity: 1 }} // Added opacity here
                      transition={{ duration: 0.7, delay: 0.8 }}
                      href="mailto:nihal.n.13.02@gmail.com?subject=Let's%20Collaborate&body=Hi%20Nihal,"
                    >
                      <img
                        src={email}
                        className="h-full w-7 hover:-translate-y-[2px] duration-100"
                        alt="Email"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
