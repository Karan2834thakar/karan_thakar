import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        className='my-10 text-center text-4xl'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={textVariants}
      >
        Experience
      </motion.h1>

      <div className='text-center tracking-tight space-y-10'>
        {EXPERIENCE.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} variants={textVariants} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ item, index, variants }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants}
      transition={{ delay: index * 0.1 }}
    >
      <h2 className="text-2xl font-bold">{item.role}</h2>
      <p className="text-lg text-neutral-500">
        {item.company} • {item.location}
      </p>
      <p className="text-sm text-neutral-400">
        {item.period} • {item.duration}
      </p>

      <div
        className={`mt-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          expanded ? 'max-h-96' : 'max-h-20'
        } md:max-h-none`}
      >
        <p className="text-neutral-300">{item.description}</p>
      </div>

      <div className="mt-3 text-right md:hidden">
        <button
          onClick={() => setExpanded((s) => !s)}
          className="text-sm text-blue-400 hover:text-blue-300"
          aria-expanded={expanded}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mt-4">
        {item.technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-neutral-800 text-white px-3 py-1 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
