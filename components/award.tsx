'use client';

import { motion } from 'framer-motion';

export default function AreaSection() {
  return (
    <section id="awards" className="py-10 max-w-5xl mx-auto px-4">
      {/* Animated Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text"
      >
        Awards
      </motion.h2>

      {/* Award Cards Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Award 1 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
            Indian Council for Cultural Relations Scholarship
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Date:</strong> Nov 2022
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            – Received the Indian Council for Cultural Relations Scholarship for Bachelor's Degree, showcasing recognition of academic excellence.
          </p>
        </div>

        {/* Award 2 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Second Runner’s Up at National Level Mathematical Quiz
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Date:</strong> 2018
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            – Achieved Second Runner’s Up at the National Level Mathematical Quiz, demonstrating strong analytical and problem-solving abilities.
          </p>
        </div>

        {/* Award 3 */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
            First Runner’s Up at Provincial Level Mathematical Quiz
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Date:</strong> 2018
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            – Secured First Runner’s Up at the Provincial Level Mathematical Quiz, highlighting competitive spirit and mathematical skills.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
