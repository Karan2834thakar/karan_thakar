import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection, useScrollVisibility } from '../hooks/useEditorial';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Karan2834thakar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karan-thakar-7ba477268' },
  { label: 'Email', href: 'mailto:karanthakar2834@gmail.com' },
];

const Navigation = () => {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);
  const visible = useScrollVisibility();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top-left wordmark */}
      <a
        href="#home"
        className="fixed left-6 top-6 z-[60] font-display text-2xl mix-blend-difference md:left-10 md:top-8"
      >
        Karan Thakar
      </a>

      {/* Desktop: social links top-right */}
      <div className="fixed right-10 top-8 z-[60] hidden flex-col items-end gap-1 mix-blend-difference md:flex">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Desktop: section links bottom-right, hide on scroll-down */}
      <motion.nav
        animate={{
          opacity: visible ? 1 : 0,
          x: visible ? 0 : 32,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-8 right-10 z-[60] hidden flex-col items-end gap-2 mix-blend-difference md:flex"
      >
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="relative text-sm uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            {s.label}
            <span
              className={`absolute -bottom-1 right-0 block h-px bg-white transition-all duration-300 ${
                active === s.id ? 'w-full' : 'w-0'
              }`}
            />
          </a>
        ))}
      </motion.nav>

      {/* Mobile: Menu / Close toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed right-6 top-6 z-[70] text-xs uppercase tracking-[0.2em] mix-blend-difference md:hidden"
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[65] flex flex-col justify-center gap-6 bg-background px-8 md:hidden"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="font-display text-5xl leading-[0.9]"
              >
                {s.label}
              </a>
            ))}
            <div className="mt-8 flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.2em] text-muted"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
