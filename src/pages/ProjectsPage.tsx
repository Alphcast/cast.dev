import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { GitHubReposSection } from '../components/GitHubReposSection'
import { useTheme } from '../hooks/useTheme'

const allProjects = [
  {
    title: 'AI Document Research Platform',
    fullDescription: 'Built a comprehensive document analysis platform that uses advanced AI models to process and understand research papers. The platform supports PDF uploads, automatic summarization, key insight extraction, and semantic search across uploaded documents.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'TanStack Query', 'Tailwind CSS'],
    challenges: 'Handling large document processing while maintaining response times under 2 seconds.',
    image: 'gradient-bg',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
  },
  {
    title: 'PrintPress SaaS Platform',
    fullDescription: 'Developed a full-featured SaaS platform enabling print businesses to manage their entire workflow. Features include a drag-and-drop design editor, automated pricing calculations, multi-vendor support, and real-time analytics dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS', 'Redis'],
    challenges: 'Building a real-time design editor with canvas manipulation and ensuring consistent print quality.',
    image: 'bg-gradient-to-br from-accent-600 to-primary-600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
  },
  {
    title: 'AI CBT Exam System',
    fullDescription: 'Created an advanced examination system that uses AI to generate questions dynamically. Features include adaptive testing, real-time proctoring with webcam monitoring, plagiarism detection, and comprehensive analytics for educators.',
    tech: ['React', 'Express', 'MongoDB', 'TensorFlow.js', 'Socket.io', 'WebRTC'],
    challenges: 'Implementing real-time proctoring while maintaining student privacy and ensuring fair assessment.',
    image: 'bg-gradient-to-br from-primary-600 to-success',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
  },
  {
    title: 'Alphcast Collection E-Commerce',
    fullDescription: 'Built a complete e-commerce solution from scratch including product catalog with advanced filtering, shopping cart with persistent state, secure payment processing via Stripe, inventory management system, and a comprehensive admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    challenges: 'Optimizing product search and filtering for large catalogs while maintaining fast page loads.',
    image: 'bg-gradient-to-br from-warning to-accent-600',
    liveUrl: '#',
    githubUrl: 'https://github.com/Alphcast',
  },
]

export function ProjectsPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`pt-14 sm:pt-16 md:pt-20 transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10 sm:mb-14 lg:mb-16">
            <Link to="/" className={`inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base transition-colors ${isDark ? 'text-surface-400 hover:text-primary-400' : 'text-surface-600 hover:text-primary-600'}`}>
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Back to Home
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 px-2">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className={`text-sm sm:text-base lg:text-lg max-w-2xl px-2 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
              A comprehensive showcase of projects demonstrating expertise in full-stack development, AI integration, and scalable architecture.
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative rounded-2xl border overflow-hidden hover:border-primary-500/30 transition-all duration-300 ${
                  isDark ? 'bg-surface-900/50 border-surface-800/50' : 'bg-white border-surface-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`h-48 sm:h-56 lg:h-auto ${project.image} relative`}>
                    <div className="absolute inset-0 bg-surface-950/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 lg:p-10">
                    <p className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>{project.fullDescription}</p>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className={`text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 ${isDark ? 'text-white' : 'text-surface-900'}`}>Key Challenge</h4>
                      <p className={`text-xs sm:text-sm ${isDark ? 'text-surface-500' : 'text-surface-500'}`}>{project.challenges}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border ${isDark ? 'bg-surface-800/50 text-surface-300 border-surface-700/50' : 'bg-surface-100 text-surface-700 border-surface-200'}`}>{tech}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg gradient-bg text-white text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity">
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Live Demo
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors border ${isDark ? 'bg-surface-800/50 text-surface-300 hover:bg-surface-700/50 border-surface-700' : 'bg-surface-100 text-surface-700 hover:bg-surface-200 border-surface-300'}`}>
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Source Code
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
