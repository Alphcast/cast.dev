import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { GitHubReposSection } from '../components/GitHubReposSection'

const allProjects = [
  {
    title: 'AI Document Research Platform',
    description: 'An intelligent platform that leverages AI to analyze, summarize, and extract insights from research documents. Features semantic search, automatic tagging, collaborative annotation, and citation management.',
    fullDescription: 'Built a comprehensive document analysis platform that uses advanced AI models to process and understand research papers. The platform supports PDF uploads, automatic summarization, key insight extraction, and semantic search across uploaded documents. Features include collaborative workspaces, annotation tools, citation export, and integration with academic databases.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'TanStack Query', 'Tailwind CSS'],
    challenges: 'Handling large document processing while maintaining response times under 2 seconds. Implemented chunking and caching strategies for efficient AI API usage.',
    image: 'gradient-bg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'PrintPress SaaS Platform',
    description: 'A comprehensive SaaS solution for print-on-demand businesses with order management, design tools, payment processing, and real-time tracking.',
    fullDescription: 'Developed a full-featured SaaS platform enabling print businesses to manage their entire workflow. Features include a drag-and-drop design editor, automated pricing calculations, multi-vendor support, inventory management, shipping integration, and a real-time analytics dashboard for business insights.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS', 'Redis'],
    challenges: 'Building a real-time design editor with canvas manipulation and ensuring consistent print quality across different product types.',
    image: 'bg-gradient-to-br from-accent-600 to-primary-600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI CBT Exam System',
    description: 'Computer-based testing platform with AI-powered question generation, adaptive difficulty, anti-cheating measures, and detailed analytics.',
    fullDescription: 'Created an advanced examination system that uses AI to generate questions dynamically based on subject matter and difficulty level. Features include adaptive testing that adjusts question difficulty based on student performance, real-time proctoring with webcam monitoring, plagiarism detection, and comprehensive analytics for educators.',
    tech: ['React', 'Express', 'MongoDB', 'TensorFlow.js', 'Socket.io', 'WebRTC'],
    challenges: 'Implementing real-time proctoring while maintaining student privacy and ensuring fair assessment. Built custom algorithms for adaptive difficulty scaling.',
    image: 'bg-gradient-to-br from-primary-600 to-success',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Alphast Collection E-Commerce',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, secure checkout, inventory management, and admin dashboard.',
    fullDescription: 'Built a complete e-commerce solution from scratch including product catalog with advanced filtering, shopping cart with persistent state, secure payment processing via Stripe, inventory management system, order tracking, customer accounts, and a comprehensive admin dashboard with sales analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    challenges: 'Optimizing product search and filtering for large catalogs while maintaining fast page loads. Implemented Redis caching and database indexing strategies.',
    image: 'bg-gradient-to-br from-warning to-accent-600',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export function ProjectsPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-surface-400 hover:text-primary-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-surface-400 text-lg max-w-2xl">
              A comprehensive showcase of projects demonstrating expertise in full-stack development, AI integration, and scalable architecture.
            </p>
          </motion.div>

          <div className="space-y-12">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-surface-900/50 border border-surface-800/50 overflow-hidden hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`h-64 lg:h-auto ${project.image} relative`}>
                    <div className="absolute inset-0 bg-surface-950/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <p className="text-surface-400 leading-relaxed mb-6">{project.fullDescription}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Key Challenge</h4>
                      <p className="text-surface-500 text-sm">{project.challenges}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
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
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-800/50 text-surface-300 text-sm font-medium hover:bg-surface-700/50 transition-colors border border-surface-700"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GitHubReposSection />
    </div>
  )
}
