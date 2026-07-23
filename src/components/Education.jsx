import React from 'react';
import { EDUCATION } from '../constants';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const Education = () => {
  return (
    <section id="education" className="section-padding mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader eyebrow="Background" title="Education" index="05" />

      <div className="border-t border-border">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <h3 className="font-display text-4xl leading-none md:text-5xl">
                {EDUCATION.degree}
              </h3>
              <p className="mt-3 text-sm text-muted">
                {EDUCATION.institution}
                <br />
                {EDUCATION.university}
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {EDUCATION.period}
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="font-display text-4xl md:text-5xl">
                {EDUCATION.score}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
