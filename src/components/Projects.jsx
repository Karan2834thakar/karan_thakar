import React from 'react';
import { PROJECTS } from '../constants';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const ProjectRow = ({ project }) => {
  const { title, subtitle, category, year, description, technologies, liveUrl, sourceCodeUrl } =
    project;
  const primary = liveUrl || sourceCodeUrl;

  const Row = (
    <div className="group grid grid-cols-1 gap-6 border-b border-border py-10 transition-colors duration-500 hover:bg-foreground/[0.03] md:grid-cols-12 md:gap-8 md:px-4">
      {/* Title + category */}
      <div className="md:col-span-5">
        <div className="flex items-baseline gap-4">
          <h3 className="font-display text-4xl leading-none transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-5xl">
            {title}
          </h3>
          {primary && (
            <span className="text-lg text-muted transition-colors duration-300 group-hover:text-foreground">
              ↗
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
      </div>

      {/* Meta */}
      <div className="md:col-span-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">{category}</p>
        <p className="mt-1 text-xs text-muted/70">{year}</p>
      </div>

      {/* Description + pills */}
      <div className="md:col-span-5">
        <p className="text-sm font-light leading-relaxed text-foreground/70">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
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
  );

  // Whole row is a link only when a real URL exists
  return primary ? (
    <a href={primary} target="_blank" rel="noopener noreferrer" className="block">
      {Row}
    </a>
  ) : (
    Row
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeader eyebrow="Selected Work" title="Projects" index="04" />

      <div className="border-t border-border">
        {PROJECTS.map((project) => (
          <Reveal key={project.title}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 text-sm text-muted">
          More on{' '}
          <a
            href="https://github.com/Karan2834thakar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            GitHub ↗
          </a>
        </p>
      </Reveal>
    </section>
  );
};

export default Projects;
