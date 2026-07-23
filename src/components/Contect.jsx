import React from 'react';
import { CONTACT } from '../constants';
import Reveal from './Reveal';

const links = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    label: 'LinkedIn',
    value: '/karan-thakar',
    href: 'https://www.linkedin.com/in/karan-thakar-7ba477268',
  },
  {
    label: 'GitHub',
    value: '/Karan2834thakar',
    href: 'https://github.com/Karan2834thakar',
  },
  { label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
];

const Contect = () => {
  return (
    <section
      id="contact"
      className="section-padding mx-auto max-w-7xl px-6 md:px-10"
    >
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-muted">
          Get in touch
        </span>
        <span className="mt-3 block h-[6px] w-10 bg-foreground" />
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-8 font-display text-hero leading-[0.85]">
          Let's Work
          <br />
          Together
        </h2>
      </Reveal>

      {/* Link rows */}
      <div className="mt-16 border-t border-border">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.08}>
            <a
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-border py-6 transition-colors duration-300 hover:bg-foreground/[0.03] md:px-4"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-display text-3xl md:text-4xl">
                  {l.label}
                </span>
                <span className="hidden text-sm text-muted sm:block">
                  {l.value}
                </span>
              </span>
              <span className="text-2xl text-muted transition-colors duration-300 group-hover:text-foreground">
                ↗
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted md:flex-row">
        <span>© {new Date().getFullYear()} Karan Thakar</span>
        <span>{CONTACT.address}</span>
        <span>Full Stack Developer</span>
      </div>
    </section>
  );
};

export default Contect;
