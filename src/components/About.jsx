import React from 'react';
import { ABOUT_TEXT } from '../constants';
import aboutImg from '../assets/about me.jpg';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n\n');

  return (
    <section id="about" className="section-padding mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader eyebrow="About" title="Who I Am" index="01" />

      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Image */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={aboutImg}
                alt="Karan Thakar"
                className="img-editorial aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted">
              Full Stack Developer · Gujarat, India
            </p>
          </Reveal>
        </div>

        {/* Text */}
        <div className="md:col-span-7">
          <Reveal delay={0.1}>
            <p className="font-display text-3xl leading-[1.05] md:text-5xl">
              I build scalable, real-time web products —{' '}
              <span className="text-muted underline decoration-1 underline-offset-8">
                clean architecture, shipped end to end.
              </span>
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1}>
                <p className="text-sm font-light leading-relaxed text-foreground/70">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
