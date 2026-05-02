import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileText, Mail } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { downloadCV } from '../services/cvDownload'
import { useTheme } from '../hooks/useTheme'

const stats = [
  { value: '4+', label: 'Frontend Exp.' },
  { value: '2+', label: 'Full-Stack Exp.' },
  { value: '50+', label: 'Projects' },
  { value: '99%', label: 'Satisfaction' },
]

export function HeroSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const socialBtnClass = `w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all ${
    isDark
      ? 'bg-surface-800/50 text-surface-400 hover:text-white hover:bg-primary-500/20 border border-surface-700 hover:border-primary-500/30'
      : 'bg-surface-100 text-surface-600 hover:text-white hover:bg-primary-500 border border-surface-200 hover:border-primary-500'
  }`

  const ctaPrimaryClass = 'w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl gradient-bg text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-xl shadow-primary-500/25'
  const ctaSecondaryClass = `w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
    isDark
      ? 'bg-surface-800/50 text-white border border-surface-700 hover:border-primary-500/50 hover:bg-surface-800'
      : 'bg-white text-surface-900 border border-surface-300 hover:border-primary-500 hover:shadow-lg'
  }`

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-success animate-pulse" />
            Available for remote work
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mb-6 sm:mb-8 relative"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 mx-auto">
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
              <div className={`absolute inset-2 rounded-full ${isDark ? 'bg-surface-950' : 'bg-surface-50'}`} />
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
                className="absolute -inset-1 sm:-inset-2 rounded-full bg-primary-500/20 blur-xl"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2"
          >
            Full-Stack Software
            <br />
            <span className="gradient-text">Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}
          >
            Building scalable web applications with MERN, PERN & TanStack.
            Transforming complex problems into elegant, user-friendly solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`text-sm sm:text-base max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed italic px-4 ${isDark ? 'text-surface-500' : 'text-surface-500'}`}
          >
            "I craft pixel-perfect, high-performance applications that bridge the gap between beautiful design and robust engineering — delivering solutions that scale."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
          >
            <Link to="/projects" className={ctaPrimaryClass}>
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
            <Link to="/contact" className={ctaSecondaryClass}>Hire Me</Link>
            <button onClick={downloadCV} className={ctaSecondaryClass}>
              <FileText className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            <a href="https://github.com/Alphcast" target="_blank" rel="noopener noreferrer" className={socialBtnClass} aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/oladepo-rokeeb-113392302" target="_blank" rel="noopener noreferrer" className={socialBtnClass} aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="https://wa.me/2349011105681" target="_blank" rel="noopener noreferrer" className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-surface-800/50 text-surface-400 hover:text-white hover:bg-success/20 border border-surface-700 hover:border-success/30' : 'bg-surface-100 text-surface-600 hover:text-white hover:bg-success border border-surface-200 hover:border-success'}`} aria-label="WhatsApp"><WhatsAppIcon className="w-5 h-5" /></a>
            <a href="mailto:oladeporokeeb203@gmail.com" className={socialBtnClass} aria-label="Email"><Mail className="w-5 h-5" /></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
