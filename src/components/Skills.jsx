import React from 'react';
import { SKILLS } from '../constants';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Skills = () => {
  return (
    <section id="skills" className="section-padding mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader eyebrow="Capabilities" title="Skills" index="02" />

      <div className="border-t border-border">
        {SKILLS.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8">
              <h3 className="font-display text-3xl md:col-span-4 md:text-4xl">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 md:col-span-8">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
