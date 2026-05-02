import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Globe, Trophy, Zap } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const highlights = [
  { icon: Brain, title: 'Mathematics Background', description: 'B.Sc. Pure Mathematics with strong analytical and problem-solving skills applied to software engineering.' },
  { icon: Globe, title: 'Remote Work Expert', description: '3+ years delivering high-quality solutions to global clients across different time zones.' },
  { icon: Trophy, title: 'Proven Track Record', description: '50+ successful projects on Fiverr with excellent client ratings and repeat business.' },
  { icon: Zap, title: 'Full-Stack Mastery', description: 'Expertise in MERN, PERN, and TanStack ecosystems for end-to-end application development.' },
]

export function AboutSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cardClass = `group p-5 sm:p-6 lg:p-8 rounded-2xl border hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg ${
    isDark ? 'bg-surface-900/50 border-surface-800/50 hover:shadow-primary-500/5' : 'bg-white border-surface-200 hover:shadow-primary-500/10'
  }`

  return (
    <section id="about" className={`py-14 sm:py-20 md:py-24 lg:py-32 relative transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Passionate About Building
            <span className="gradient-text"> Digital Solutions</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
            I'm Oladepo Rokeeb Olayinka, a Full-Stack Software Engineer with 4+ years of experience
            crafting scalable web applications. My background in Pure Mathematics gives me a unique
            edge in algorithmic thinking and complex problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={cardClass}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary-500/20 transition-colors">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-400" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
