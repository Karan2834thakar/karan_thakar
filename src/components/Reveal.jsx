import React from 'react';
import { motion } from 'framer-motion';

/**
 * Shared editorial scroll-reveal: fade + rise, once, offset margin.
 */
const Reveal = ({ children, delay = 0, y = 40, className = '', as = 'div' }) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
