'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon,
  LightBulbIcon,
  UserIcon,
  MapPinIcon,
  TrophyIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const skills = [
  { name: 'Cloud Platforms', level: 85, category: 'cloud' },
  { name: 'AWS Services', level: 80, category: 'cloud' },
  { name: 'Docker & Kubernetes', level: 75, category: 'devops' },
  { name: 'Python', level: 90, category: 'programming' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'programming' },
  { name: 'Infrastructure as Code', level: 70, category: 'devops' },
  { name: 'CI/CD Pipelines', level: 75, category: 'devops' },
  { name: 'Monitoring & Logging', level: 65, category: 'devops' },
]

const interests = [
  { icon: CodeBracketIcon, title: 'Cloud Architecture', description: 'Designing scalable and resilient cloud solutions' },
  { icon: LightBulbIcon, title: 'Automation', description: 'Building tools that eliminate manual processes' },
  { icon: BriefcaseIcon, title: 'DevOps Practices', description: 'Implementing efficient development workflows' },
  { icon: UserIcon, title: 'Problem Solving', description: 'Finding innovative solutions to complex challenges' },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get to know the person behind the code - my journey, passions, and what drives me forward.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-2xl p-8 text-center">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                <UserIcon className="w-24 h-24 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Garvit Chittora</h3>
              <p className="text-primary-400 mb-4">Platform Engineer Intern</p>
              
              <div className="flex items-center justify-center gap-2 text-gray-700 mb-6">
                <MapPinIcon className="w-5 h-5" />
                <span>Bangalore, Karnataka, India</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AcademicCapIcon className="w-6 h-6 text-primary-400" />
                  <div className="text-left">
                    <p className="font-semibold">B.Tech CSE</p>
                    <p className="text-sm text-gray-700">LNMIIT, Jaipur</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <BriefcaseIcon className="w-6 h-6 text-accent-400" />
                  <div className="text-left">
                    <p className="font-semibold">Platform Engineer Intern</p>
                    <p className="text-sm text-gray-700">EagleView</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CodeBracketIcon className="w-6 h-6 text-orange-400" />
                  <div className="text-left">
                    <p className="font-semibold">LeetCode Profile</p>
                    <a 
                      href="https://leetcode.com/u/GarvitChittora/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      @GarvitChittora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <div className="prose prose-lg text-gray-800">
                  <p className="mb-4">
                    I'm currently a B.Tech Computer Science student at The LNM Institute of Information Technology (LNMIIT), 
                    Jaipur, with a graduation year of 2025. My passion lies in building scalable cloud solutions and 
                    automating complex processes.
                  </p>
                  
                  <p className="mb-4">
                    Currently, I'm 6 months into my 6-month internship at <a href="https://www.eagleview.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:text-primary-700 underline">EagleView</a> as a Platform Engineer Intern. This experience has been incredible, allowing me to work on real-world 
                    challenges and contribute to meaningful projects that impact the company's infrastructure.
                  </p>
                  
                  <p className="mb-4">
                    My work focuses on cloud optimization, automation tools, and building efficient systems. I've had the 
                    opportunity to work on projects like a resume screening system and FinOps solutions for identifying 
                    stopped EC2 instances, which have taught me valuable lessons about cost optimization and resource management.
                  </p>
                  
                  <p>
                    I'm always eager to learn new technologies and take on challenging problems. My goal is to become a 
                    skilled platform engineer who can design and implement robust, scalable solutions that make a real difference.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass rounded-lg p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-gray-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Coding & Problem Solving</h3>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-center">
              {/* LeetCode Stats */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CodeBracketIcon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-3">LeetCode</h4>
              <p className="text-gray-700 text-base mb-6">Regular problem solving practice to strengthen algorithmic thinking</p>
              
              <a 
                href="https://leetcode.com/u/GarvitChittora/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 text-orange-700 border border-orange-500/30 rounded-lg text-sm font-medium hover:bg-orange-500/30 transition-colors"
              >
                <span>View Profile</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">What I'm Passionate About</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="glass rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                  <p className="text-gray-400 text-sm">{interest.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
