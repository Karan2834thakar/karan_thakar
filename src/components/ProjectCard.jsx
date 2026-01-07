import React, { useState } from 'react';

const ProjectCard = ({ title, description, liveUrl, sourceCodeUrl, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-between rounded-2xl border-4 border-neutral-800 p-4 w-full h-full bg-neutral-900">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg group"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>

        <div
          className={`mt-2 text-sm md:text-base text-neutral-300 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            expanded ? 'max-h-96' : 'max-h-16'
          } md:max-h-none`}
        >
          <p className="whitespace-pre-line">{description}</p>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:gap-0 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 flex-wrap md:flex-nowrap">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded text-white transition"
            >
              Live Project
            </a>
            <a
              href={sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded text-white transition"
            >
              Source Code
            </a>
          </div>

          <button
            onClick={() => setExpanded((s) => !s)}
            className="text-sm text-gray-300 md:hidden"
            aria-expanded={expanded}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
