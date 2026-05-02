import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Globe, Trophy, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Mathematics Background',
    description: 'B.Sc. Pure Mathematics with strong analytical and problem-solving skills applied to software engineering.',
  },
  {
    icon: Globe,
    title: 'Remote Work Expert',
    description: '3+ years delivering high-quality solutions to global clients across different time zones.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description: '50+ successful projects on Fiverr with excellent client ratings and repeat business.',
  },
  {
    icon: Zap,
    title: 'Full-Stack Mastery',
    description: 'Expertise in MERN, PERN, and TanStack ecosystems for end-to-end application development.',
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Passionate About Building
            <span className="gradient-text"> Digital Solutions</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm Oladepo Rokeeb Olayinka, a Full-Stack Software Engineer with 4+ years of experience
            crafting scalable web applications. My background in Pure Mathematics gives me a unique
            edge in algorithmic thinking and complex problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-surface-900/50 border border-surface-800/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-surface-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
