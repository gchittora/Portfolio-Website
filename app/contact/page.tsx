'use client'

import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  MapPinIcon,
  UserIcon,
  BuildingOfficeIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'
const contactMethods = [
  {
    name: 'Email',
    value: 'gchittora123@gmail.com',
    href: 'mailto:gchittora123@gmail.com',
    icon: EnvelopeIcon,
    description: 'Send me an email for professional inquiries'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/garvitchittora',
    href: 'https://linkedin.com/in/garvitchittora',
    icon: UserIcon,
    description: 'Connect with me on LinkedIn'
  },
  {
    name: 'GitHub',
    value: 'github.com/gchittora',
    href: 'https://github.com/gchittora',
    icon: CodeBracketIcon,
    description: 'Check out my code and projects'
  },
  {
    name: 'Location',
    value: 'Bangalore, Karnataka, India',
    href: '#',
    icon: MapPinIcon,
    description: 'Currently based in Bangalore'
  }
]

export default function Contact() {

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
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            I'm always open to discussing software engineering roles, new opportunities, collaborations, or just having a
            conversation about technology and platform engineering.
          </p>
        </motion.div>

        {/* Contact Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.name}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="glass rounded-2xl p-6 card-hover text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${index === 0 ? 'from-red-500 to-orange-500' :
                  index === 1 ? 'from-blue-500 to-indigo-500' :
                    index === 2 ? 'from-gray-700 to-gray-900' :
                      'from-green-500 to-emerald-500'
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors">
                  {method.name}
                </h3>

                <p className="text-gray-700 text-sm mb-3 break-all">
                  {method.value}
                </p>

                <p className="text-gray-600 text-xs">
                  {method.description}
                </p>
              </motion.a>
            )
          })}
        </div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-semibold text-lg">Available for Software Engineering Roles</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center justify-center gap-3">
                <BuildingOfficeIcon className="w-6 h-6 text-primary-400" />
                <span className="text-gray-800">Platform Engineer Intern at EagleView</span>
              </div>

              <div className="flex items-center justify-center gap-3">
                <MapPinIcon className="w-6 h-6 text-accent-400" />
                <span className="text-gray-800">Based in Bangalore, India</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-6">
              <p className="text-gray-800 leading-relaxed">
                I'm currently completing my internship at EagleView and will be graduating in 2025.
                I'm actively looking for full-time <span className="text-primary-400 font-medium">software engineering roles</span>, particularly in <span className="text-primary-400 font-medium">platform engineering</span>,
                <span className="text-accent-400 font-medium"> cloud architecture</span>, and <span className="text-primary-400 font-medium">DevOps</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
