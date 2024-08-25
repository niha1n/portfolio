import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
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
          <div className="flex flex-col lg:w-4/5 h-4/5 p-5 justify-evenly">
            <div className="flex flex-col gap-5 xl:gap-10 w-full items-center lg:justify-center justify-between">
              <div
                className="w-full h-full flex flex-col relative items-center justify-center  font-montserrat"
              >
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl xl:text-5xl text-white font-mark-pro text-center w-full"
                >
                  Get in <span className="text-cyan">Touch</span>
                </motion.h1>
                <motion.p   initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5,delay:0.3 }} className="text-white text-md lg:text-lg xl:text-2xl lg:w-4/5 text-center mt-4 xl:mt-9">
                  Whether you have a question, want to collaborate, or just want
                  to say hello, feel free to reach out!
                </motion.p>
              </div>
              
              <form
                onSubmit={handleSubmit}
                className="font-montserrat w-full lg:w-3/4 xl:w-2/3"
              >
                <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:gap-6">
                  <div className="mb-4 lg:w-1/3 w-full overflow-hidden">
                    <motion.label
                      initial={{  y: -21 }}
                      whileInView={{  y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay :1}}
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
                      initial={{  y: -21 }}
                      whileInView={{  y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay :1.2}} className="block text-gray-200 ml-1" htmlFor="email">
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
                      initial={{  y: -21 }}
                      whileInView={{  y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay :1.4}} className="block text-gray-200 ml-1" htmlFor="subject">
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
                      initial={{  y: -21 }}
                      whileInView={{  y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay :1.6}} className="block text-gray-200 ml-1" htmlFor="message">
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
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
