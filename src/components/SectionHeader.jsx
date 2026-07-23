import React from 'react';
import Reveal from './Reveal';

/**
 * Editorial section header: tiny uppercase eyebrow + 6px underline bar,
 * then a giant Bebas title. Optional index like "01 / Work".
 */
const SectionHeader = ({ eyebrow, title, index }) => {
  return (
    <div className="mb-16 md:mb-24">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {index && <span className="mr-3 text-foreground/70">{index}</span>}
            {eyebrow}
          </span>
        </div>
        <span className="mt-3 block h-[6px] w-10 bg-foreground" />
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="font-display text-section mt-8 leading-[0.85]">
          {title}
        </h2>
      </Reveal>
    </div>
  );
};

export default SectionHeader;
