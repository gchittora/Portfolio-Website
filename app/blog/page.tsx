'use client'

import { motion } from 'framer-motion'
import { 
  CalendarDaysIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'My Journey into Platform Engineering at EagleView',
    excerpt: 'Reflecting on my first month as a Platform Engineer Intern and the exciting challenges I\'ve encountered while building scalable cloud solutions.',
    content: 'Week 1-4 update on learning cloud architecture, working with AWS services, and diving deep into infrastructure automation...',
    date: '2024-12-01',
    readTime: '5 min read',
    category: 'Journey',
    tags: ['internship', 'platform-engineering', 'aws', 'learning'],
    featured: true,
    status: 'published'
  },
  {
    id: 2,
    title: 'Building an AI-Powered Resume Screener: Lessons Learned',
    excerpt: 'Deep dive into the technical challenges and solutions while building an intelligent resume screening system that reduced processing time by 75%.',
    content: 'Technical implementation details, machine learning approaches, and the impact on hiring efficiency...',
    date: '2024-11-25',
    readTime: '8 min read',
    category: 'Technical',
    tags: ['ai', 'machine-learning', 'python', 'automation'],
    featured: true,
    status: 'published'
  },
  {
    id: 3,
    title: 'FinOps in Action: Optimizing EC2 Costs at Scale',
    excerpt: 'How I built a cost optimization solution that identified unused EC2 instances and achieved 30% cost reduction across multiple AWS accounts.',
    content: 'Exploring FinOps principles, AWS cost optimization strategies, and building automated solutions...',
    date: '2024-11-18',
    readTime: '6 min read',
    category: 'Cloud',
    tags: ['finops', 'aws', 'cost-optimization', 'automation'],
    featured: false,
    status: 'published'
  },
  {
    id: 4,
    title: 'Learning Kubernetes: From Containers to Orchestration',
    excerpt: 'My experience learning Kubernetes fundamentals and how container orchestration is transforming application deployment.',
    content: 'Kubernetes concepts, practical examples, and real-world applications in platform engineering...',
    date: '2024-11-10',
    readTime: '7 min read',
    category: 'Technical',
    tags: ['kubernetes', 'containers', 'devops', 'learning'],
    featured: false,
    status: 'published'
  },
  {
    id: 5,
    title: 'Infrastructure as Code: My Terraform Journey',
    excerpt: 'Exploring Infrastructure as Code principles and how Terraform is helping me manage cloud resources more efficiently.',
    content: 'Terraform basics, best practices, and practical examples from my internship work...',
    date: '2024-11-03',
    readTime: '5 min read',
    category: 'DevOps',
    tags: ['terraform', 'iac', 'automation', 'best-practices'],
    featured: false,
    status: 'published'
  },
  {
    id: 6,
    title: 'Week 12 Update: Monitoring and Observability',
    excerpt: 'Latest learning on monitoring systems, alerting mechanisms, and building observability into cloud applications.',
    content: 'This week I focused on monitoring and observability solutions...',
    date: '2024-12-08',
    readTime: '4 min read',
    category: 'Journey',
    tags: ['monitoring', 'observability', 'prometheus', 'grafana'],
    featured: false,
    status: 'draft'
  }
]

const categories = ['All', 'Journey', 'Technical', 'Cloud', 'DevOps']

export default function Blog() {
  const publishedPosts = blogPosts.filter(post => post.status === 'published')
  const featuredPosts = publishedPosts.filter(post => post.featured)
  const recentPosts = publishedPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
            My <span className="gradient-text">Learning Blog</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Weekly updates on my journey as a Platform Engineer Intern, sharing insights, 
            challenges, and lessons learned while building scalable cloud solutions.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <NewspaperIcon className="w-8 h-8 text-primary-400" />
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className="glass rounded-2xl overflow-hidden card-hover group"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-800 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-700 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <CalendarDaysIcon className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800 text-gray-700 rounded text-xs border border-gray-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium group"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Recent Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                className="glass rounded-xl p-6 card-hover group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                        post.category === 'Journey' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        post.category === 'Technical' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        post.category === 'Cloud' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' :
                        'bg-purple-500/20 text-purple-400 border-purple-500/30'
                      }`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-4 text-sm text-gray-700">
                        <div className="flex items-center gap-1">
                          <CalendarDaysIcon className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-800 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800 text-gray-700 rounded text-xs border border-gray-700"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <Link
                      href={`/blog/${post.id}`}
                      className="btn-primary group"
                    >
                      Read Post
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-700 mb-6">
              I post weekly updates about my learning journey, technical insights, and project experiences. 
              Follow my blog to stay updated on my growth as a Platform Engineer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Notified
              </Link>
              <Link href="/feed.xml" className="btn-secondary">
                RSS Feed
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
