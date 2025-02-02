import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 100 }, // Initial state: hidden and below the viewport
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    }, // Visible state: fades in and slides up
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'SOEN: AI-Powered Project Management Platform',
              description:
                'SOEN is a full-stack webapplication designed to simplify project-creation, collaboration, and management,featuring AI-assisted coding,real-time chat, file generation,and server control.',
              link: 'https://github.com/Karan2834thakar/SOEN.git',
            },
            {
              title: 'Quizee: The Ultimate Quiz Platform',
              description:
                'Quizee is an interactive and engaging quiz application that allows users to test their knowledge on a wide range of topics.',
              link: 'https://github.com/Karan2834thakar/Quizee.git',
            },
            {
              title: 'Uber Clone',
              description:
                'A clone of the Uber ride-sharing app, built to provide a similar user experience with features such as booking rides, viewing ride history, and driver/passenger interfaces.',
              link: 'https://github.com/Karan2834thakar/uber.git',
            },
            {
              title: 'CodeCraft',
              description:
                'An application you are developing, though details of the functionality are not specified yet.',
              link: 'https://github.com/Karan2834thakar/QR-code-generator.git',
            },
            {
              title: 'Echo & Essence',
              description:
                'A website offering free ringtones and wallpapers with an easy download functionality. Built using HTML, CSS, JavaScript, Node.js, and MySQL.',
              link: 'https://github.com/Karan2834thakar/Echo-Essence.git',
            },
            {
              title: 'WorkForce Manager',
              description:
                'An Employee Management System (EMS) that manages employee data like personal details, attendance, payroll, and other management functionalities.',
              link: 'https://github.com/Karan2834thakar/EMS.git',
            },
            
          ].map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between rounded-2xl border-4 border-neutral-800 p-4 w-full h-64"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // Triggers animation when in viewport
              viewport={{ once: false, amount: 0.3 }} // Re-triggers animation on re-entry
            >
              <h3 className="text-2xl">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-500 hover:underline"
              >
                Source Code
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
