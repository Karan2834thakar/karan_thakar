
import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/kk.jpg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  // Refs for the sections
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Detect if the sections are in view
  const isTextInView = useInView(textRef, { threshold: 0.2 });
  const isImageInView = useInView(imageRef, { threshold: 0.2 });

  // Animation variants for text and image
  const textVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
  };

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 200, opacity: 0 },
  };

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-34'>
      <div className='flex flex-wrap'>
        {/* Left Section - Animated Text */}
        <motion.div
          ref={textRef}
          className='w-full lg:w-1/2'
          variants={textVariants}
          initial="hidden"
          animate={isTextInView ? "visible" : "exit"}
          transition={{ duration: 1 }}
        >
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
              variants={textVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "exit"}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Karan Thakar
            </motion.h1>
            <motion.span
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
              variants={textVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "exit"}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section - Animated Profile Picture */}
        <motion.div
          ref={imageRef}
          className='w-full lg:w-1/2 lg:p-8'
          variants={imageVariants}
          initial="hidden"
          animate={isImageInView ? "visible" : "exit"}
          transition={{ duration: 1 }}
        >
          <div className='flex justify-center'>
            <div className='rounded-none w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden'>
              <motion.img
                className='w-full h-full object-cover'
                style={{ objectPosition: 'center 30%' }}
                src={profilepic}
                alt="karan"
                variants={imageVariants}
                initial="hidden"
                animate={isImageInView ? "visible" : "exit"}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

