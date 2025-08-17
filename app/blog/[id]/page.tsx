'use client'

import { motion } from 'framer-motion'
import { 
  ArrowLeftIcon,
  CalendarDaysIcon,
  ClockIcon,
  ShareIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// This would typically come from a CMS or markdown files
const getBlogPost = (id: string) => {
  const posts = {
    '1': {
      id: 1,
      title: 'My Journey into Platform Engineering at EagleView',
      excerpt: 'Reflecting on my first month as a Platform Engineer Intern and the exciting challenges I\'ve encountered while building scalable cloud solutions.',
      date: '2024-12-01',
      readTime: '5 min read',
      category: 'Journey',
      tags: ['internship', 'platform-engineering', 'aws', 'learning'],
      content: `
# My Journey into Platform Engineering at EagleView

Starting my internship at EagleView as a Platform Engineer Intern has been an incredible journey of learning and growth. After three months, I wanted to share some reflections on what I've learned and the exciting challenges I've encountered.

## Week 1-4: Getting My Bearings

The first month was all about understanding the platform architecture and getting familiar with the tech stack. EagleView's infrastructure is built on AWS, and as someone who had theoretical knowledge of cloud services, seeing them in action at scale was eye-opening.

### Key Learning Points:
- **Infrastructure Scale**: Working with production systems handling millions of requests
- **Team Collaboration**: Learning how platform teams support multiple product teams
- **AWS Deep Dive**: Hands-on experience with EC2, Lambda, RDS, and S3
- **Monitoring**: Understanding how to monitor and maintain system health

## The Resume Screener Project

One of my first major projects was building an AI-powered resume screener. This project taught me about:

### Technical Challenges
- Processing and parsing different resume formats
- Implementing natural language processing for skill extraction
- Building scalable APIs that can handle high volumes
- Integrating with existing HR systems

### Impact
The system reduced initial screening time by 75% and improved the quality of candidates reaching the interview stage by 40%. Seeing the real-world impact of the code I wrote was incredibly motivating.

## FinOps: A New Perspective on Cloud Costs

Another significant project was developing a FinOps solution for identifying stopped EC2 instances. This project opened my eyes to the financial aspects of cloud engineering.

### What I Learned:
- **Cost Optimization**: How small inefficiencies can add up to significant costs
- **Automation**: Building systems that continuously monitor and optimize resources
- **Cross-team Collaboration**: Working with finance teams to understand business requirements

The solution achieved a 30% reduction in monthly AWS costs, which translated to substantial savings for the company.

## Challenges and Growth

### Technical Challenges
- Learning to work with legacy systems while implementing modern solutions
- Understanding the balance between innovation and stability
- Debugging issues in distributed systems

### Personal Growth
- Improved communication skills through daily standups and presentations
- Better understanding of how technical decisions impact business outcomes
- Confidence in proposing and implementing solutions

## Looking Ahead

As I continue my internship, I'm excited about:
- Diving deeper into Kubernetes and container orchestration
- Learning more about infrastructure as code with Terraform
- Contributing to architectural decisions for new platform services

## Advice for Future Interns

1. **Don't be afraid to ask questions** - Everyone wants to help you succeed
2. **Document everything** - Your future self will thank you
3. **Seek feedback regularly** - It's the fastest way to improve
4. **Take initiative** - Propose solutions, don't just identify problems

## Conclusion

Three months in, and I can confidently say that choosing platform engineering was the right decision. The combination of technical challenges, business impact, and continuous learning makes every day exciting.

The journey is far from over, and I'm excited to see what the next three months will bring!

---

*This is part of my weekly learning blog where I share insights from my internship journey. Follow along for more updates on platform engineering, cloud technologies, and professional growth.*
      `
    },
    '2': {
      id: 2,
      title: 'Building an AI-Powered Resume Screener: Lessons Learned',
      excerpt: 'Deep dive into the technical challenges and solutions while building an intelligent resume screening system.',
      date: '2024-11-25',
      readTime: '8 min read',
      category: 'Technical',
      tags: ['ai', 'machine-learning', 'python', 'automation'],
      content: `
# Building an AI-Powered Resume Screener: Lessons Learned

One of the most challenging and rewarding projects during my internship at EagleView has been developing an AI-powered resume screening system. This project combined machine learning, natural language processing, and system design to solve a real business problem.

## The Problem

Manual resume screening was becoming a bottleneck in our hiring process. HR teams were spending hours reviewing resumes for initial screening, and the process was:
- Time-intensive (taking 15-20 minutes per resume)
- Inconsistent (different reviewers had different criteria)
- Prone to unconscious bias
- Difficult to scale during high-volume hiring periods

## Technical Approach

### Architecture Overview
\`\`\`
Resume Upload → Document Parser → Text Extraction → NLP Processing → Scoring → Ranking
\`\`\`

### Key Components

#### 1. Document Processing Pipeline
- **Challenge**: Handling multiple formats (PDF, DOC, DOCX, TXT)
- **Solution**: Used a combination of PyPDF2, python-docx, and OCR for image-based PDFs
- **Lesson**: Always have fallback mechanisms for document parsing

#### 2. Natural Language Processing
- **Skill Extraction**: Used spaCy for named entity recognition and custom rule-based matching
- **Education Parsing**: Regular expressions combined with ML models to extract degrees and institutions
- **Experience Analysis**: Timeline construction and role responsibility extraction

#### 3. Scoring Algorithm
\`\`\`python
def calculate_match_score(resume_data, job_requirements):
    scores = {
        'required_skills': weight_required_skills(resume_data.skills, job_requirements.required_skills),
        'preferred_skills': weight_preferred_skills(resume_data.skills, job_requirements.preferred_skills),
        'experience_level': calculate_experience_match(resume_data.experience, job_requirements.min_experience),
        'education': education_match(resume_data.education, job_requirements.education),
        'domain_experience': domain_expertise_score(resume_data.experience, job_requirements.domain)
    }
    return weighted_average(scores, weights)
\`\`\`

## Technical Challenges and Solutions

### Challenge 1: Resume Format Diversity
**Problem**: Resumes come in countless formats, layouts, and styles.
**Solution**: 
- Built a robust parsing pipeline with multiple extraction strategies
- Implemented confidence scoring for extracted data
- Added manual review flags for low-confidence extractions

### Challenge 2: Skill Normalization
**Problem**: The same skill can be written in many ways (e.g., "JavaScript", "JS", "ECMAScript")
**Solution**:
- Created a comprehensive skill taxonomy
- Implemented fuzzy matching with similarity thresholds
- Built skill clustering to group related technologies

### Challenge 3: Bias Reduction
**Problem**: Ensuring the AI doesn't perpetuate existing biases
**Solution**:
- Removed name, age, photo, and address from analysis
- Focused purely on skills, experience, and qualifications
- Regular bias testing with diverse resume datasets

### Challenge 4: Performance at Scale
**Problem**: Processing hundreds of resumes quickly
**Solution**:
- Implemented asynchronous processing with Celery
- Added Redis for caching frequently accessed data
- Optimized ML model inference with batch processing

## Implementation Details

### Tech Stack
- **Backend**: Python with Flask
- **ML/NLP**: spaCy, scikit-learn, transformers
- **Database**: PostgreSQL with full-text search
- **Queue**: Redis with Celery
- **Deployment**: Docker containers on AWS ECS

### Key Metrics
- **Processing Speed**: Reduced from 15-20 minutes to 30 seconds per resume
- **Accuracy**: 92% accuracy in skill extraction, 87% in experience calculation
- **Consistency**: Eliminated variance between human reviewers
- **Scale**: Can process 1000+ resumes per hour

## Results and Impact

### Quantitative Results
- **75% reduction** in initial screening time
- **40% improvement** in candidate quality reaching interviews
- **90% reduction** in screening inconsistency
- **$200k+ annual savings** in HR time costs

### Qualitative Feedback
- HR teams could focus on high-value activities like interviewing
- Hiring managers received more consistent candidate recommendations
- Improved candidate experience with faster response times

## Lessons Learned

### Technical Lessons
1. **Data Quality is King**: The system is only as good as the job requirements data
2. **Incremental Improvement**: Start with simple rules, then add ML complexity
3. **Human in the Loop**: AI augments but doesn't replace human judgment
4. **Monitoring is Critical**: Track model performance and data drift continuously

### Process Lessons
1. **Stakeholder Collaboration**: Regular feedback from HR was crucial
2. **Iterative Development**: Release early, gather feedback, improve rapidly
3. **Documentation**: Comprehensive docs helped with team adoption
4. **Testing Strategy**: Both unit tests and end-to-end resume processing tests

### Business Lessons
1. **Measure Impact**: Clear metrics helped demonstrate value
2. **Change Management**: Training and gradual rollout eased adoption
3. **Feedback Loops**: Continuous improvement based on user feedback

## Future Enhancements

### Short Term
- Multi-language resume support
- Integration with LinkedIn profiles
- Advanced bias detection and mitigation

### Long Term
- Video resume analysis
- Predictive performance modeling
- Integration with employee performance data

## Code Example: Skill Extraction

\`\`\`python
class SkillExtractor:
    def __init__(self):
        self.nlp = spacy.load("en_core_web_sm")
        self.skill_database = self._load_skill_database()
        
    def extract_skills(self, text):
        doc = self.nlp(text)
        extracted_skills = set()
        
        # Rule-based extraction
        for token in doc:
            if self._is_skill_token(token):
                normalized_skill = self._normalize_skill(token.text)
                if normalized_skill:
                    extracted_skills.add(normalized_skill)
        
        # Pattern matching for compound skills
        patterns = [
            {"LOWER": {"IN": ["react", "reactjs"]}, "LOWER": "js", "OP": "?"},
            {"LOWER": "node", "LOWER": {"IN": ["js", "javascript"]}, "OP": "?"},
        ]
        
        matcher = Matcher(self.nlp.vocab)
        for i, pattern in enumerate(patterns):
            matcher.add(f"SKILL_{i}", [pattern])
            
        matches = matcher(doc)
        for match_id, start, end in matches:
            span = doc[start:end]
            skill = self._normalize_skill(span.text)
            if skill:
                extracted_skills.add(skill)
        
        return list(extracted_skills)
\`\`\`

## Conclusion

Building the AI-powered resume screener was an incredible learning experience that combined technical skills with real business impact. The project taught me about the importance of:

- Understanding the problem domain deeply
- Building with stakeholders, not just for them
- Balancing technical sophistication with practical utility
- Measuring and communicating impact

Most importantly, it showed me how AI can augment human capabilities rather than replace them, leading to better outcomes for everyone involved in the hiring process.

---

*Next week, I'll be sharing insights from my FinOps project and how we achieved significant cost savings through automated EC2 optimization.*
      `
    }
  }
  
  return posts[id as keyof typeof posts] || null
}

export default function BlogPost() {
  const params = useParams()
  const post = getBlogPost(params.id as string)

  if (!post) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-700 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                post.category === 'Journey' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                post.category === 'Technical' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                'bg-purple-500/20 text-purple-400 border-purple-500/30'
              }`}>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-800 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <CalendarDaysIcon className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  <ShareIcon className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                  <BookmarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-800 text-gray-700 rounded-lg text-sm border border-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="glass rounded-2xl p-8">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold mb-6 mt-8 first:mt-0">${line.slice(2)}</h1>`
                    } else if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold mb-4 mt-8">${line.slice(3)}</h2>`
                    } else if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold mb-3 mt-6">${line.slice(4)}</h3>`
                    } else if (line.startsWith('#### ')) {
                      return `<h4 class="text-lg font-bold mb-2 mt-4">${line.slice(5)}</h4>`
                    } else if (line.startsWith('- ')) {
                      return `<li class="mb-2">${line.slice(2)}</li>`
                    } else if (line.startsWith('**') && line.endsWith('**')) {
                      return `<p class="font-bold mb-4">${line.slice(2, -2)}</p>`
                    } else if (line.startsWith('*') && line.endsWith('*')) {
                      return `<p class="italic mb-4 text-gray-700">${line.slice(1, -1)}</p>`
                    } else if (line.includes('```')) {
                      return line.replace('```python', '<pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="text-accent-400">').replace('```', '</code></pre>')
                    } else if (line.includes('`') && !line.includes('```')) {
                      return line.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-accent-400 px-2 py-1 rounded">$1</code>')
                    } else if (line.trim() === '') {
                      return '<br>'
                    } else if (line.trim() === '---') {
                      return '<hr class="border-gray-700 my-8">'
                    } else {
                      return `<p class="mb-4 leading-relaxed">${line}</p>`
                    }
                  })
                  .join('')
              }} 
            />
          </div>
        </motion.article>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this post?</h3>
            <p className="text-gray-700 mb-6">
              Follow my journey and get notified about new posts. I share weekly updates 
              about my learning experience as a Platform Engineer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-primary">
                Read More Posts
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
