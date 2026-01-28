import React, { useState } from 'react';
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
      <div className="flex flex-wrap items-center">
        {/* Left Section - Animated Image */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
          variants={imageVariants}
        >
          <div className="flex items-center justify-center w-full">
              <img
                className="rounded-3xl w-40 h-44 md:w-56 md:h-64 lg:w-64 lg:h-72 object-cover block mb-0"
                src={aboutimg}
                alt="about me"
              />
          </div>
        </motion.div>

        {/* Right Section - Animated Text */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center"
          variants={textVariants}
        >
          <AboutText />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AboutText = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-center justify-center lg:justify-start">
    <div className="my-2 max-w-xl py-4 font-light tracking-tighter w-full">
        <div
          className={`text-neutral-200 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            expanded ? 'max-h-96' : 'max-h-28'
          } md:max-h-none`}
        >
          <p className="whitespace-pre-line">{ABOUT_TEXT}</p>
        </div>

        <div className="mt-3 text-right md:hidden">
          <button
            onClick={() => setExpanded((s) => !s)}
            className="text-sm text-blue-400"
            aria-expanded={expanded}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
