import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileText, Mail } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { downloadCV } from '../services/cvDownload'

const stats = [
  { value: '4+', label: 'Frontend Experience' },
  { value: '2+', label: 'Full-Stack Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for remote work
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mb-8 relative"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-warning"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-1 rounded-full bg-gradient-to-r from-accent-500 via-primary-500 to-primary-700"
              />
              <div className="absolute inset-2 rounded-full bg-surface-950" />
              <motion.img
                src="/G1.png"
                alt="Oladepo Rokeeb Olayinka"
                className="absolute inset-3 rounded-full object-cover w-[calc(100%-24px)] h-[calc(100%-24px)]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 rounded-full bg-primary-500/20 blur-xl"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Full-Stack Software
            <br />
            <span className="gradient-text">Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Building scalable web applications with MERN, PERN & TanStack.
            Transforming complex problems into elegant, user-friendly solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base text-surface-500 max-w-xl mx-auto mb-10 leading-relaxed italic"
          >
            "I craft pixel-perfect, high-performance applications that bridge the gap between beautiful design and robust engineering — delivering solutions that scale."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/projects"
              className="group px-8 py-4 rounded-xl gradient-bg text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-xl shadow-primary-500/25"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-surface-800/50 text-white font-semibold border border-surface-700 hover:border-primary-500/50 hover:bg-surface-800 transition-all"
            >
              Hire Me
            </Link>
            <button
              onClick={downloadCV}
              className="px-8 py-4 rounded-xl bg-surface-800/50 text-white font-semibold border border-surface-700 hover:border-accent-500/50 hover:bg-surface-800 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-surface-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://github.com/Alphcast"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-primary-500/20 border border-surface-700 hover:border-primary-500/30 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/oladeporokeeb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-primary-500/20 border border-surface-700 hover:border-primary-500/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/2349011105681"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-success/20 border border-surface-700 hover:border-success/30 transition-all"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:oladeporokeeb203@gmail.com"
              className="w-12 h-12 rounded-xl bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-primary-500/20 border border-surface-700 hover:border-primary-500/30 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
