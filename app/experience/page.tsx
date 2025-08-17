'use client'

import { motion } from 'framer-motion'
import { 
  BriefcaseIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  MapPinIcon,
  StarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const timeline = [
    {
    id: 1,
    type: 'work',
    title: 'Platform Engineer Intern',
    company: 'EagleView',
    companyUrl: 'https://www.eagleview.com/',
    location: 'Hybrid',
    period: 'June 2025 - Present',
    duration: '6+ months',
    status: 'current',
    description: 'Building AI-powered recruitment systems, event-driven infrastructure, and container orchestration solutions.',
    achievements: [
      'Architected comprehensive AI-powered Resume Screener with Node.js/React achieving 80% reduction in manual review time',
      'Built full-stack hiring platform with AWS Bedrock Claude 3, PostgreSQL, and Kubernetes deployment serving enterprise recruiting',
      'Implemented RAG-based chatbot with OpenWebUI on EKS providing intelligent document querying capabilities',
      'Designed event-driven architecture with Lambda functions and S3 integration for automated knowledge base updates'
    ],
    technologies: ['AWS', 'Python', 'Flask', 'EKS', 'Lambda', 'Terraform', 'CI/CD', 'Amazon Bedrock'],
    icon: BriefcaseIcon,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    type: 'work',
    title: 'Payments Partnership Intern',
    company: 'TransFi',
    location: 'Remote',
    period: 'Mar 2025 - May 2025',
    duration: '3 months',
    status: 'completed',
    description: 'Focused on partnership development and financial analytics for payment solutions across emerging markets.',
    achievements: [
      'Onboarded payment partners across emerging markets using data-driven analysis',
      'Expanded transaction coverage by 25% through strategic partnership development',
      'Analyzed payment performance using Python/SQL with Agile methodologies',
      'Identified optimization opportunities and improved financial analytics processes'
    ],
    technologies: ['Python', 'SQL', 'Data Analysis', 'Financial Analytics', 'Agile'],
    icon: BriefcaseIcon,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 2,
    type: 'education',
    title: 'B.Tech Computer Science & Engineering',
    company: 'The LNM Institute of Information Technology (LNMIIT)',
    location: 'Jaipur, Rajasthan',
    period: '2021 - 2025',
    duration: '4 years',
    status: 'ongoing',
    description: 'Pursuing Bachelor of Technology in Computer Science with focus on cloud computing, software engineering, and system design.',
    achievements: [
      'Strong foundation in algorithms, data structures, and system design',
      'Coursework in cloud computing, distributed systems, and software engineering',
      'Active participation in coding competitions and technical events',
      'Member of technology clubs and developer communities'
    ],
    technologies: ['Data Structures', 'Algorithms', 'System Design', 'Database Systems', 'Operating Systems'],
    icon: AcademicCapIcon,
    gradient: 'from-purple-500 to-pink-500'
  },

]

const skills = [
  { name: 'Cloud Platforms', level: 85, category: 'Technical' },
  { name: 'Platform Engineering', level: 80, category: 'Technical' },
  { name: 'Problem Solving', level: 95, category: 'Soft Skills' },
  { name: 'Team Collaboration', level: 90, category: 'Soft Skills' },
  { name: 'Communication', level: 85, category: 'Soft Skills' },
  { name: 'Leadership', level: 80, category: 'Soft Skills' },
]

export default function Experience() {
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
            My <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From a curious student to a platform engineer intern - here's my professional and educational timeline.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-600 to-primary-600" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {item.status === 'current' && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass rounded-2xl p-8 card-hover">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Main Info */}
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                          {item.status === 'current' && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-800">
                            <BriefcaseIcon className="w-5 h-5" />
                            {item.companyUrl ? (
                              <a 
                                href={item.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-semibold text-primary-600 hover:text-primary-700 underline"
                              >
                                {item.company}
                              </a>
                            ) : (
                              <span className="font-semibold">{item.company}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <MapPinIcon className="w-5 h-5" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <CalendarDaysIcon className="w-5 h-5" />
                            <span>{item.period}</span>
                            <span className="text-gray-500">({item.duration})</span>
                          </div>
                        </div>

                        <p className="text-gray-800 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary-100 text-primary-800 rounded-lg text-sm font-medium border border-primary-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <TrophyIcon className="w-5 h-5 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-800 text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Skills Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">Technical Skills</h4>
              {skills.filter(skill => skill.category === 'Technical').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                  className="mb-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 1.4 + (index * 0.1) }}
                      className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Soft Skills</h4>
              {skills.filter(skill => skill.category === 'Soft Skills').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                  className="mb-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 1.4 + (index * 0.1) }}
                      className="bg-gradient-to-r from-green-600 to-teal-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
