'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

export default function SkillSection() {
  return (
    <section id="skills" className="py-10 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
      >
        Skills Summary
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto"
      >
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm text-left text-gray-700 dark:text-gray-300">
          <tbody>
            <tr className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700">
              <th className="px-6 py-3 font-semibold text-purple-700 dark:text-purple-400">Languages</th>
              <td className="px-6 py-3">Python, C/C++, JavaScript, SQL, CSS, HTML, R, R-Studio, JAVA</td>
            </tr>
            <tr>
              <th className="px-6 py-3 font-semibold text-green-700 dark:text-green-400">Frameworks</th>
              <td className="px-6 py-3">React, NodeJS</td>
            </tr>
            <tr className="bg-gradient-to-r from-pink-100 to-pink-200 dark:from-gray-800 dark:to-gray-700">
              <th className="px-6 py-3 font-semibold text-pink-700 dark:text-pink-400">Tools</th>
              <td className="px-6 py-3">VS Code, Python IDE, PostgreSQL, MySQL, SQLite, Eclipse, Python Pycharm, Lingo</td>
            </tr>
            <tr>
              <th className="px-6 py-3 font-semibold text-blue-700 dark:text-blue-400">Platforms</th>
              <td className="px-6 py-3">Linux, Web, Windows, IOS</td>
            </tr>
            <tr className="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-gray-800 dark:to-gray-700">
              <th className="px-6 py-3 font-semibold text-yellow-700 dark:text-yellow-400">Area of Interest</th>
              <td className="px-6 py-3">CyberSecurity, Web Design Development, Software Development</td>
            </tr>
            <tr>
              <th className="px-6 py-3 font-semibold text-indigo-700 dark:text-indigo-400">Technical Skills</th>
              <td className="px-6 py-3">Programming Language, Full Stack Development, CyberSecurity, Data Analysis</td>
            </tr>
            <tr className="bg-gradient-to-r from-red-100 to-red-200 dark:from-gray-800 dark:to-gray-700">
              <th className="px-6 py-3 font-semibold text-red-700 dark:text-red-400">Soft Skills</th>
              <td className="px-6 py-3">Leadership, Teamwork, Public Speaking, Time Management, Active Listening</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 text-lg text-gray-700 dark:text-gray-300">
        <a href="https://www.linkedin.com/in/baskaran-vaishnavan-ab764522a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a href="https://github.com/BCS-VAISH" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-800 dark:hover:text-white">
          <FaGithub />
        </a>
        <a href="https://twitter.com/Bcsvaish14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://wa.me/+94773668707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="mailto:bcsvaish0000@gmail.com" className="flex items-center gap-2 hover:text-red-500">
          <MdEmail />
        </a>
        <span className="flex items-center gap-2">
          <MdLocationOn /> Jaffna,Sri Lanka.
        </span>
        <a href="https://www.instagram.com/bcs_vaish?igsh=MWlucXh3bXg3NWNqeg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-600">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
