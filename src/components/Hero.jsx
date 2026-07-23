import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import heroImg from '../assets/karan-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Portrait — right column on desktop, full-bleed on mobile.
          Displayed smaller than native (1252×1280) so it stays sharp,
          object-top keeps the head fully in frame. */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[52%]">
        <img
          src={heroImg}
          alt="Karan Thakar"
          className="h-full w-full object-cover object-[60%_top] grayscale"
        />
        {/* fade the image's left edge into the background so the name reads */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent md:via-background/10" />
      </div>

      {/* bottom + left legibility wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent md:via-transparent" />

      {/* Top meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-6 top-28 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70 md:left-10 md:top-32"
      >
        <span className="h-2 w-2 rounded-full bg-foreground" />
        Available for work
      </motion.div>

      {/* Headline block, lower-left */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-display text-hero"
          >
            Karan Thakar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-sm font-light leading-relaxed text-foreground/80 md:text-base"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
