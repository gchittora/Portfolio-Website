'use client'

import { motion } from 'framer-motion'
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon,
  StarIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Resume Screener',
    description: 'Enterprise-grade hiring platform with AWS Bedrock Claude 3 AI achieving 80% reduction in manual review time. Full-stack solution with PostgreSQL, Kubernetes deployment, and comprehensive analytics.',
    category: 'AI/ML',
    technologies: ['Node.js', 'Express.js', 'React', 'Bootstrap', 'PostgreSQL', 'AWS Bedrock', 'AWS S3', 'AWS Lambda', 'Docker', 'Kubernetes', 'AWS EKS', 'Python', 'Claude 3 Haiku', 'RESTful APIs', 'JWT Authentication', 'Axios', 'CORS', 'Environment Variables', 'Git', 'CI/CD'],
    features: [
      'AWS Bedrock Claude 3 AI integration for intelligent resume analysis',
      'Full-stack development with React frontend and Node.js backend',
      'Enterprise PostgreSQL database with optimized queries',
      'Kubernetes deployment with auto-scaling and load balancing'
    ],
    status: 'In Production',
    isInternship: true,
    icon: CpuChipIcon,
    gradient: 'from-primary-500 to-primary-600',
    impact: '80% reduction in manual resume review time with enterprise-scale deployment'
  },

  {
    id: 2,
    title: 'OpenWebUI RAG Chatbot Platform',
    description: 'Production-ready AI chatbot with Retrieval-Augmented Generation on Amazon EKS. Terraform-managed infrastructure serving intelligent document queries with enterprise reliability.',
    category: 'AI/DevOps',
    technologies: ['Amazon EKS', 'Kubernetes', 'Terraform', 'HCL', 'RAG', 'OpenWebUI', 'AWS S3', 'Vector Database', 'Docker', 'Helm Charts', 'YAML', 'Load Balancers', 'AWS IAM', 'CI/CD Pipelines', 'Infrastructure as Code', 'Cloud Architecture', 'DevOps', 'Container Orchestration'],
    features: [
      'Amazon EKS cluster orchestration with auto-scaling',
      'RAG implementation with vector database integration',
      'Infrastructure as Code using Terraform',
      'High-availability deployment with load balancers'
    ],
    status: 'In Production',
    isInternship: true,
    icon: ChartBarIcon,
    gradient: 'from-primary-400 to-primary-500',
    impact: 'Enterprise-grade AI platform with scalable Kubernetes infrastructure'
  },
  {
    id: 3,
    title: 'Course Schedule Management System',
    description: 'Engineered DFS backtracking algorithm in microservices architecture for conflict-free timetables serving 500+ users with 99% constraint satisfaction.',
    category: 'Full-Stack',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'EJS Templating', 'Passport.js', 'JavaScript', 'HTML5', 'CSS3', 'DFS Algorithm', 'Backtracking', 'Microservices Architecture', 'RESTful APIs', 'Session Management', 'Authentication', 'Data Structures', 'Algorithm Design', 'Database Design', 'MVC Pattern'],
    features: [
      'DFS backtracking algorithm implementation',
      'Conflict-free timetable generation',
      'Microservices architecture',
      'MongoDB database with EJS templating',
      'Passport.js authentication'
    ],
    status: 'Completed',
    icon: ChartBarIcon,
    gradient: 'from-accent-500 to-accent-600',
    impact: 'Served 500+ users with 99% constraint satisfaction and automated scheduling'
  },
  {
    id: 4,
    title: 'NexStore E-Commerce Platform',
    description: 'Built comprehensive e-commerce platform with React.js frontend, Node.js/MongoDB backend, and JWT-based authentication with secure payment integration.',
    category: 'Full-Stack',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM', 'JWT', 'bcrypt', 'RESTful APIs', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'Payment Gateway Integration', 'Stripe API', 'React Router', 'Axios', 'State Management', 'Component Architecture', 'Responsive Design', 'Cross-browser Compatibility'],
    features: [
      'React.js responsive frontend',
      'Node.js/MongoDB backend',
      'JWT-based authentication',
      'Secure payment gateway integration',
      'Real-time inventory management'
    ],
    status: 'Completed',
    icon: ChartBarIcon,
    gradient: 'from-primary-600 to-accent-500',
    impact: 'Full-featured e-commerce solution with secure transactions and inventory management'
  }
]

const categories = ['All', 'AI/ML', 'Cloud/FinOps', 'DevOps/Monitoring']

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Here are some of the projects I've been working on during my internship at EagleView. 
            Each project showcases different aspects of platform engineering and cloud solutions.
          </p>
        </motion.div>

        {/* Projects Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="relative group"
              >
                {/* Star decoration for internship projects */}
                {project.isInternship && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                    <StarIcon className="w-3 h-3 text-white" />
                  </div>
                )}
                
                <div className="glass rounded-2xl p-5 card-hover h-full flex flex-col text-center">
                  {/* Icon */}
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-800 border border-gray-600/50 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    {project.isInternship && (
                      <a 
                        href="https://www.eagleview.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-primary-500/20 text-primary-700 border border-primary-500/30 rounded-full text-xs font-medium hover:bg-primary-500/30 transition-colors"
                      >
                        EagleView
                      </a>
                    )}
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description.length > 120 
                      ? project.description.substring(0, 120) + '...'
                      : project.description
                    }
                  </p>
                  
                  {/* Top Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap justify-center gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs border border-primary-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Impact */}
                  <div className={`bg-gradient-to-r ${
                    project.isInternship 
                      ? 'from-primary-500/10 to-accent-500/10 border-primary-500/20'
                      : 'from-primary-500/10 to-accent-500/10 border-primary-500/20'
                  } border rounded-lg p-3 mb-4`}>
                    <p className={`text-xs font-medium ${
                      project.isInternship ? 'text-primary-700' : 'text-primary-700'
                    }`}>
                      {project.impact.length > 80 
                        ? project.impact.substring(0, 80) + '...'
                        : project.impact
                      }
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-auto">
                    {!project.isInternship ? (
                      <Link
                        href={`/projects/${project.id}`}
                        className="w-full text-center py-2 px-4 rounded-lg text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300"
                      >
                        View Details
                      </Link>
                    ) : (
                      <div className="w-full p-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-lg text-center text-primary-700 text-xs font-medium flex items-center justify-center gap-2">
                        <BoltIcon className="w-3 h-3" />
                        Professional Project
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-gray-700 mb-6">
              I'm always working on new projects and learning new technologies. 
              Feel free to reach out if you'd like to discuss any of these projects in detail.
            </p>
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
