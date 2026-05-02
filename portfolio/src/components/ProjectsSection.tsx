import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const projects = [
  {
    title: 'AI Document Research Platform',
    description: 'An intelligent platform that leverages AI to analyze, summarize, and extract insights from research documents. Features semantic search, automatic tagging, and collaborative annotation.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'TanStack Query'],
    image: 'gradient-bg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'PrintPress SaaS Platform',
    description: 'A comprehensive SaaS solution for print-on-demand businesses. Includes order management, design tools, payment processing, and real-time tracking dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS'],
    image: 'bg-gradient-to-br from-accent-600 to-primary-600',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'AI CBT Exam System',
    description: 'Computer-based testing platform with AI-powered question generation, adaptive difficulty, anti-cheating measures, and detailed analytics for educators.',
    tech: ['React', 'Express', 'MongoDB', 'TensorFlow.js', 'Socket.io'],
    image: 'bg-gradient-to-br from-primary-600 to-success',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Alphast Collection E-Commerce',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, secure checkout, inventory management, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    image: 'bg-gradient-to-br from-warning to-accent-600',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-surface-900/50 border border-surface-800/50 overflow-hidden hover:border-primary-500/30 transition-all duration-300"
    >
      <div className={`h-48 ${project.image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-surface-950/20 group-hover:bg-surface-950/10 transition-colors" />
        {project.featured && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-500/90 text-white text-xs font-semibold">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-surface-400 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-surface-800/50 text-surface-300 text-xs font-medium border border-surface-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 text-sm font-medium hover:bg-primary-500/20 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800/50 text-surface-300 text-sm font-medium hover:bg-surface-700/50 transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in building scalable, production-ready applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-800/50 text-white font-semibold border border-surface-700 hover:border-primary-500/50 transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
