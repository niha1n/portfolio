import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import email from '../assets/email.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import { motion } from 'framer-motion';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ref = useRef(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://whatsapp-backend-1-r49o.onrender.com/api/sendMessage',
        data
      );
      alert('Message sent successfully! :', response);
    } catch (error) {
      alert('Failed to send message.');
    }
  };
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
  return (
    <>
      <div
        ref={ref}
        className="relative z-50 h-[150vh] lg:h-screen w-full justify-center items-center flex bg-landing-grad p-5"
      >
        {inView && (
          <div className="flex flex-col  lg:w-4/5 h-4/5 p-5 justify-evenly">
            <div className="flex flex-col lg:flex-row gap-10 w-full items-center lg:justify-center justify-between ">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 h-full flex flex-col relative items-center lg:items-start  justify-center  gap-10  font-montserrat"
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl text-white font-mark-pro  w-full"
                >
                  Get in <span className="text-cyan">Touch</span>
                </motion.h1>
                <p className="text-white text-md lg:w-4/5">
                  I'm always excited to connect and discuss new opportunities,
                  collaborations, or any projects you have in mind. Whether you
                  have a question, want to collaborate, or just want to say
                  hello, feel free to reach out!
                </p>

                <div className="flex gap-10 items-center justify-center h-fit w-4/5 ">
                  <a href="https://gmail.com">
                    <img src={email} className="h-full w-8" alt="" />
                  </a>
                  <a href="https://gmail.com">
                    <img src={linkedin} className="h-full w-8" alt="" />
                  </a>
                  <a href="https://gmail.com">
                    <img src={whatsapp} className="h-full w-8" alt="" />
                  </a>
                </div>

                <button className="w-full lg:w-4/5 rounded-full border-[2px] border-cyan mt-5 py-2 text-cyan">
                  nihalnrasiya@gmail.com
                </button>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                onSubmit={handleSubmit(onSubmit)}
                className="font-montserrat w-full lg:w-1/2 "
              >
                <div className="mb-4">
                  <label className="block text-gray-200 ml-1">Name</label>
                  <input
                    type="text"
                    autocomplete="off"
                    {...register('name', { required: true })}
                    className={`mt-1 text-white bg-gray-800 p-2 w-full border rounded-md ${
                      errors.name ? 'border-red-500' : 'border-gray-800'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      Name is required
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-200 ml-1">Email</label>
                  <input
                    type="email"
                    autocomplete="off"
                    {...register('email', { required: true })}
                    className={`mt-1 text-white bg-gray-800 p-2 w-full border rounded-md ${
                      errors.name ? 'border-red-500' : 'border-gray-800'
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Email is required
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-200 ml-1">Subject</label>
                  <input
                    type="text"
                    autocomplete="off"
                    {...register('subject', { required: true })}
                    className={`mt-1 text-white bg-gray-800 p-2 w-full border rounded-md ${
                      errors.name ? 'border-red-500' : 'border-gray-800'
                    }`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">
                      Subject is required
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-200 ml-1">Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    className={`mt-1 text-white bg-gray-800 p-2 w-full border rounded-md ${
                      errors.name ? 'border-red-500' : 'border-gray-800'
                    }`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      Message is required
                    </span>
                  )}
                </div>

                <div className=" w-full">
                  <button
                    type="submit"
                    className="bg-cyan text-dark py-2 px-4 rounded-3xl hover:bg-cyan-dark  "
                  >
                    Submit
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
