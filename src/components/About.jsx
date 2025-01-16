import React from 'react';
import { motion } from 'framer-motion';
import aboutimg from '../assets/about me.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  // Animation variants for the image
  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  // Animation variants for the text
  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        {/* Left Section - Animated Image */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          variants={imageVariants}
        >
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={aboutimg} alt="about me" />
          </div>
        </motion.div>

        {/* Right Section - Animated Text */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={textVariants}
        >
          <div className="flex items-center justify-center lg:justify-start">
            <p className="mt-32 my-2 max-w-xl py-6 font-light tracking-tighter">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
