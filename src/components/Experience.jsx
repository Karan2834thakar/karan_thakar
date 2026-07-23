import React from 'react';
import { EXPERIENCE } from '../constants';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Experience = () => {
  return (
    <section id="work" className="section-padding mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader eyebrow="Career" title="Experience" index="03" />

      <div className="border-t border-border">
        {EXPERIENCE.map((item, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-8">
              {/* Role + company */}
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl leading-none md:text-4xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {item.company}
                  <br />
                  {item.location}
                </p>
              </div>

              {/* Period */}
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {item.period || item.duration}
                </p>
              </div>

              {/* Description + skill pills */}
              <div className="md:col-span-6">
                <p className="text-sm font-light leading-relaxed text-foreground/70">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
