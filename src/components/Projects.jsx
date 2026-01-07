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
      title: 'Gate Pass Management System',
      description:
        'A comprehensive full-stack Gate Pass Management System built with React.js, Node.js, Express, and MongoDB. Features QR-based verification, role-based access control, approval workflows, and real-time notifications.',
      liveUrl: 'https://github.com/Karan2834thakar/GatePass_System.git',
      sourceCodeUrl: 'https://github.com/Karan2834thakar/GatePass_System.git',
    },
    {
      title: 'Quizii - AI-Powered Quiz Arena',
      description:
        'Quizii is a real-time, interactive quiz platform that combines the excitement of live multiplayer competition with the power of Generative AI. Host engaging quizzes, compete with friends, and let AI generate unique questions on the fly.',
      liveUrl: 'https://quizii-kohl.vercel.app/',
      sourceCodeUrl: 'https://github.com/Karan2834thakar/quizii.git',
    },
    {
      title: 'Job Application Portal',
      description:
        'A MERN stack-based JOB Application Portal that streamlines job applications, resume uploads, and lets companies view and manage applications seamlessly.',
      liveUrl: 'https://github.com/Karan2834thakar/job-application-portal.git',
      sourceCodeUrl: 'https://github.com/Karan2834thakar/job-application-portal.git',
    },
    {
      title: 'QP-Predictor: AI-Powered Question Paper Prediction',
      description:
        'A MERN stack-based system that analyzes previous year papers using AI & NLP to predict potential exam questions.',
      liveUrl: 'https://qp-murex.vercel.app/',
      sourceCodeUrl: 'https://github.com/Karan2834thakar/QP.git',
    },
    {
      title: 'CrickBid – Tournament & Scoring System',
      description:
        'A MERN stack-based platform for managing cricket tournaments with team auctions, match scheduling, and live scoring.',
      liveUrl: 'https://github.com/Karan2834thakar/Cricket.git',
      sourceCodeUrl: 'https://github.com/Karan2834thakar/Cricket.git',
    },
    {
      title: 'SOEN: AI-Powered Project Management Platform',
      description:
        'A full-stack platform for project creation, collaboration, AI-assisted coding, and server management.',
      liveUrl: 'https://github.com/Karan2834thakar/SOEN.git',
      sourceCodeUrl: 'https://github.com/Karan2834thakar/SOEN.git',
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
