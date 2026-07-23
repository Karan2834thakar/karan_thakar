import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { FaNodeJs, FaHtml5, FaJsSquare, FaCss3, FaGitAlt } from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGooglecloud,
  SiFirebase,
  SiSocketdotio,
} from 'react-icons/si';
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
      <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[
          { Icon: RiReactjsLine, color: 'text-cyan-400' },
          { Icon: SiNextdotjs, color: 'text-neutral-100' },
          { Icon: SiTypescript, color: 'text-blue-500' },
          { Icon: FaJsSquare, color: 'text-yellow-400' },
          { Icon: RiTailwindCssFill, color: 'text-cyan-400' },
          { Icon: FaNodeJs, color: 'text-green-500' },
          { Icon: SiExpress, color: 'text-neutral-300' },
          { Icon: SiLaravel, color: 'text-red-500' },
          { Icon: SiPhp, color: 'text-indigo-400' },
          { Icon: SiPython, color: 'text-yellow-300' },
          { Icon: SiMongodb, color: 'text-green-500' },
          { Icon: SiMysql, color: 'text-emerald-400' },
          { Icon: SiPostgresql, color: 'text-sky-400' },
          { Icon: DiRedis, color: 'text-red-400' },
          { Icon: SiFirebase, color: 'text-amber-400' },
          { Icon: SiDocker, color: 'text-blue-400' },
          { Icon: SiGooglecloud, color: 'text-blue-300' },
          { Icon: SiSocketdotio, color: 'text-neutral-200' },
          { Icon: FaGitAlt, color: 'text-orange-500' },
          { Icon: FaHtml5, color: 'text-orange-500' },
          { Icon: FaCss3, color: 'text-cyan-200' },
        ].map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center rounded-2xl border-4 border-neutral-800 p-2 sm:p-3"
            variants={iconVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Icon className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
