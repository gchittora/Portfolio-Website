'use client'

import { motion } from 'framer-motion'

export default function Current() {
  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Current <span className="gradient-text">Focus</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            This page is currently being updated with my latest learning and projects.
          </p>
          <div className="glass rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-gray-700">
              I'm currently focused on my work at EagleView and will be updating this section with my latest learning progress and personal projects soon.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}