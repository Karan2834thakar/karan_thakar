import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

import project1 from '../assets/projects/gp.png';
import project2 from '../assets/projects/quizii.png';
import project3 from '../assets/projects/ja.png';
import project4 from '../assets/projects/qp.jpg';
import project5 from '../assets/projects/cricket.png';
import project6 from '../assets/projects/soen.png';

const images = [project1, project2, project3, project4, project5, project6];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const projects = [
    {
      title: 'LiveBid – Real-Time Live Auction Platform',
      description:
        'A full-scale live auction platform with real-time bidding powered by Redis pub/sub and WebSockets. Architected as microservices with a Python FastAPI backend, PostgreSQL for persistence, and Docker for containerized deployment.',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Docker', 'FastAPI'],
      liveUrl: 'https://github.com/Karan2834thakar',
      sourceCodeUrl: 'https://github.com/Karan2834thakar',
    },
    {
      title: 'SnapContest – Photography Contest Platform',
      description:
        'A community photography contest platform with image uploads, like-based voting, and leaderboard rankings. Integrated Google and Facebook OAuth for authentication and built a hidden admin panel for contest and content management.',
      technologies: ['Next.js', 'OAuth', 'MySQL', 'Admin Dashboard'],
      liveUrl: 'https://github.com/Karan2834thakar',
      sourceCodeUrl: 'https://github.com/Karan2834thakar',
    },
    {
      title: 'BuildMeasure – 3D Construction Measurement & Estimator',
      description:
        'A tool that parses uploaded architectural drawings to calculate floor area, building measurements, and material quantities. Renders interactive 3D building models with Three.js from 2D design inputs stored in PostgreSQL.',
      technologies: ['React.js', 'Three.js', 'PostgreSQL', 'Python'],
      liveUrl: 'https://github.com/Karan2834thakar',
      sourceCodeUrl: 'https://github.com/Karan2834thakar',
    },
    {
      title: 'Business Intelligence Dashboard & Atlas AI Calling Agent',
      description:
        'Cloud-powered dashboards with GCP/BigQuery analytics paired with an AI calling agent that automates booking flows and call logs via GoHighLevel and n8n.',
      technologies: ['GCP', 'BigQuery', 'n8n', 'GoHighLevel'],
      liveUrl: 'https://github.com/Karan2834thakar',
      sourceCodeUrl: 'https://github.com/Karan2834thakar',
    },
    {
      title: 'License & Validity Management System',
      description:
        'A SaaS-style subscription tracker with role-based access control (Admin / Manager / User), automated validity alerts, and audit logs.',
      technologies: ['Laravel', 'MySQL', 'RBAC'],
      liveUrl: 'https://github.com/Karan2834thakar',
      sourceCodeUrl: 'https://github.com/Karan2834thakar',
    },
    {
      title: 'Laravel CMS with Hidden Admin Dashboard',
      description:
        'A production website with a route-protected admin panel for full content and image management, deployed on Hostinger via cPanel.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'cPanel'],
      liveUrl: 'https://github.com/Karan2834thakar',
      sourceCodeUrl: 'https://github.com/Karan2834thakar',
    },
    {
      title: 'Quizii – Real-Time AI Quiz Platform',
      description:
        'A multiplayer quiz engine with WebSocket real-time sync and AI-generated dynamic question sets, combining live competition with the power of Generative AI.',
      technologies: ['React', 'Node.js', 'Socket.io', 'AI APIs'],
      liveUrl: 'https://quizii-kohl.vercel.app/',
      sourceCodeUrl: 'https://github.com/Karan2834thakar/quizii.git',
    },
  ];

  return (
    <section className="border-b border-neutral-900 pb-8">
      <h2 className="my-12 text-center text-4xl">Projects</h2>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                liveUrl={project.liveUrl}
                sourceCodeUrl={project.sourceCodeUrl}
                image={images[index % images.length]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
