import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useTheme } from '../hooks/useTheme'

const projects = [
  {
    title: 'AI Document Research Platform',
    description: 'An intelligent platform that leverages AI to analyze, summarize, and extract insights from research documents. Features semantic search, automatic tagging, and collaborative annotation.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'TanStack Query'],
    image: 'gradient-bg',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
    featured: true,
  },
  {
    title: 'PrintPress SaaS Platform',
    description: 'A comprehensive SaaS solution for print-on-demand businesses. Includes order management, design tools, payment processing, and real-time tracking dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS'],
    image: 'bg-gradient-to-br from-accent-600 to-primary-600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
    featured: true,
  },
  {
    title: 'AI CBT Exam System',
    description: 'Computer-based testing platform with AI-powered question generation, adaptive difficulty, anti-cheating measures, and detailed analytics for educators.',
    tech: ['React', 'Express', 'MongoDB', 'TensorFlow.js', 'Socket.io'],
    image: 'bg-gradient-to-br from-primary-600 to-success',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
    featured: true,
  },
  {
    title: 'Alphast Collection E-Commerce',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, secure checkout, inventory management, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    image: 'bg-gradient-to-br from-warning to-accent-600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group relative rounded-2xl border overflow-hidden hover:border-primary-500/30 transition-all duration-300 ${
        isDark ? 'bg-surface-900/50 border-surface-800/50' : 'bg-white border-surface-200 shadow-lg hover:shadow-xl'
      }`}
    >
      <div className={`h-40 sm:h-48 ${project.image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-surface-950/20 group-hover:bg-surface-950/10 transition-colors" />
        {project.featured && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary-500/90 text-white text-[10px] sm:text-xs font-semibold">Featured</span>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <h3 className={`text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary-400 transition-colors ${isDark ? 'text-white' : 'text-surface-900'}`}>{project.title}</h3>
        <p className={`text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tech.map((tech) => (
            <span key={tech} className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border ${isDark ? 'bg-surface-800/50 text-surface-300 border-surface-700/50' : 'bg-surface-100 text-surface-700 border-surface-200'}`}>{tech}</span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${isDark ? 'bg-primary-500/10 text-primary-400 hover:bg-primary-500/20' : 'bg-primary-50 text-primary-600 hover:bg-primary-100'}`}>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${isDark ? 'bg-surface-800/50 text-surface-300 hover:bg-surface-700/50' : 'bg-surface-100 text-surface-700 hover:bg-surface-200'}`}>
            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className={`py-14 sm:py-20 md:py-24 lg:py-32 relative transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Featured<span className="gradient-text"> Projects</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
            A selection of projects that demonstrate my expertise in building scalable, production-ready applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8 sm:mt-12">
          <Link to="/projects" className={`inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold border transition-all ${
            isDark ? 'bg-surface-800/50 text-white border-surface-700 hover:border-primary-500/50' : 'bg-white text-surface-900 border-surface-300 hover:border-primary-500 hover:shadow-lg'
          }`}>
            View All Projects<ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
