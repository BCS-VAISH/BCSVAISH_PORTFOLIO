'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectSection() {
  return (
    <section id="projects" className="py-10 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Personal Portfolio (Web Development)
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Tech:</strong> HTML, CSS, JavaScript, Node.js, React
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
            <li>Developed a personal portfolio website to showcase web development skills, with a focus on responsive design and performance optimization.</li>
            <li>Utilized React for the front-end interface and integrated Node.js.</li>
            <li>Collaborated with designers and front-end developers to ensure a seamless and interactive user experience.</li>
            <li><strong>Year:</strong> 2024</li>
          </ul>
           <div className="mt-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-cyan-500 mb-2">Portfolio</h4>
              <Image
                src="/Portfolio.jpg"
                alt="Porfolio pic`"
                width={1200}
                height={500}
                className="rounded-lg shadow-md"
              />
            </motion.div>
            </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Railway Reservation System (Socket Programming)
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Tech:</strong> C
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
            <li>Implemented Socket Programming.</li>
            <li>Defined reservation policies to allocate seats based on user needs (e.g., elderly passengers get priority for front-row seats).</li>
            <li>Implemented dynamic pricing for tickets based on demand, availability, and special offers.</li>
            <li>Designed a user-friendly, text-based interface for seamless interaction.</li>
            <li>Utilized multithreading to handle concurrent user requests, ensuring system performance and scalability.</li>
            <li>Enabled user authentication with passwords for secure login and registration.</li>
            <li><strong>Year:</strong> 2024, NIT Durgapur</li>
          </ul>

          <div className="mt-4 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-pink-500 mb-2">Terminal Based UI - Login, Reservation, Seat Availability</h4>
              <Image
                src="/railway_project_2.jpg"
                alt="Terminal UI Part 1"
                width={1200}
                height={500}
                className="rounded-lg shadow-md"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-green-500 mb-2">Terminal Based UI - Reservation Status & Cancellation</h4>
              <Image
                src="/railway_project.jpg"
                alt="Terminal UI Part 2"
                width={1200}
                height={500}
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
