import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { FaNodeJs, FaHtml5, FaJsSquare, FaCss3, FaJava } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';

const Technologies = () => {
  // Animation variants for individual icons
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.2, rotate: 15 },
  };

  // Animation for the entire section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[ 
          { Icon: RiReactjsLine, color: 'text-cyan-400' },
          { Icon: FaNodeJs, color: 'text-green-500' },
          { Icon: SiMongodb, color: 'text-green-500' },
          { Icon: DiRedis, color: 'text-red-400' },
          { Icon: SiMysql, color: 'text-emerald-400' },
          { Icon: FaHtml5, color: 'text-orange-500' },
          { Icon: FaCss3, color: 'text-cyan-200' },
          { Icon: RiTailwindCssFill, color: 'text-cyan-400' },
          { Icon: FaJava, color: 'text-orange-200' },
          { Icon: FaJsSquare, color: 'text-yellow-400' },
        ].map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
