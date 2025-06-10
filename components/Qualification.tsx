'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QualificationSection() {
  const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');

  return (
    <section className="py-10">
     <motion.h2
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    scale: [1, 1.1, 1],
    rotate: [0, 2, -2, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatDelay: 3,
    ease: "easeInOut",
  }}
  className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
>
  Qualification
</motion.h2>



      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="block text-center text-gray-500 mb-8"
      >
        My personal journey
      </motion.span>

      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full border transition font-semibold ${
            activeTab === 'education'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>

        <button
          className={`px-6 py-2 rounded-full border transition font-semibold ${
            activeTab === 'work'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              {/* Education Items */}
              {[
                {
                  title: 'B.Tech in Computer Science & Engineering',
                  subtitle: 'National Institute of Technology, Durgapur, India',
                  details: 'CGPA: 8.33/10',
                  date: 'Nov 2022 - Jun 2026',
                },
                {
                  title: 'Bsc(Hons) in Statistic & Operation Research ',
                  subtitle: 'University Of Peradeniya, Sri Lanka',
                  details: 'CGPA : 3.97/4',
                  date: 'Aug 2021 – Nov 2022 ',
                  Note: 'Discontinued upon receiving a scholarship to NIT Durgapur'
                },
                {
                  title: 'GCE Advanced Level',
                  subtitle: 'J/Chavakachcheri Hindu College',
                  details: 'Result: ABC',
                  date: '2017 - 2019',
                },
                {
                  title: 'GCE Ordinary Level',
                  subtitle: 'J/Chavakachcheri Hindu College',
                  details: '8AB',
                  date: '2016',
                },
                {
                  title: 'Diploma in English & ICT',
                  subtitle: 'ICBT Campus',
                  details: 'Merit Pass',
                  date: '2020',
                },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500"
                >
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{edu.subtitle}</p>
                  <p className="text-gray-500 text-sm">{edu.details}</p>
                  <p className="text-sm text-gray-400 mt-2">📅 {edu.date}</p>
                   <p className="text-gray-500 text-sm">{edu.Note}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'work' && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
                {/* Work 2 */}
              <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold">Etruvi, Software Engineering Intern</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Remote internship at Washington, USA<br/>
                  <strong>May 2025 – July 2025</strong>
                </p>
              </motion.div>
           

              {/* Work 1 */}
              <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-semibold">Oasis Infobyte</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AICTE OIB-SIP internship in Python Programming<br />
                  <strong>Aug 2024 – Sep 2024</strong>
                </p>
                <ul className="list-disc pl-5 text-gray-500 mt-2">
                  <li>
                    <strong>BMI Calculator</strong>: Command-line app calculating BMI based on user input.
                  </li>
                  <li>
                    <strong>Password Generator</strong>: Generates strong passwords based on user-defined criteria.
                  </li>
                </ul>
              </motion.div>
             </motion.div>
            
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
