import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Star, Users, Award, ExternalLink } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const experienceStats = [
  { icon: Star, value: '4.9/5', label: 'Avg. Rating' },
  { icon: Award, value: '50+', label: 'Projects' },
  { icon: Users, value: '30+', label: 'Clients' },
  { icon: Briefcase, value: '3+', label: 'Years' },
]

export function ExperienceSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={`py-14 sm:py-20 md:py-24 lg:py-32 relative transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent pointer-events-none" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-accent-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Freelance<span className="gradient-text"> Excellence</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
            3+ years of delivering high-quality software solutions to clients worldwide through Fiverr.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {experienceStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`p-4 sm:p-6 rounded-2xl border text-center transition-colors duration-300 ${
                isDark ? 'bg-surface-900/50 border-surface-800/50' : 'bg-white border-surface-200 shadow-lg'
              }`}
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400 mx-auto mb-2 sm:mb-3" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`relative p-5 sm:p-8 lg:p-12 rounded-2xl border ${isDark ? 'bg-surface-900/50 border-surface-800/50' : 'bg-white border-surface-200 shadow-xl'}`}
        >
          <div className="absolute top-0 left-0 w-full h-1 gradient-bg rounded-t-2xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1dbf73]/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#1dbf73]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-semibold">Fiverr Top-Rated Seller</h3>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>Full-Stack Web Development</p>
                </div>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                {['Full-stack web application development', 'API design and integration', 'Database architecture and optimization', 'UI/UX implementation with modern frameworks', 'Performance optimization and debugging', 'Technical consultation and code reviews'].map((item, index) => (
                  <li key={index} className={`flex items-start gap-2 sm:gap-3 text-sm sm:text-base ${isDark ? 'text-surface-300' : 'text-surface-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className={`p-3 sm:p-4 rounded-xl border ${isDark ? 'bg-surface-800/50 border-surface-700/50' : 'bg-surface-50 border-surface-200'}`}>
                <p className={`text-xs sm:text-sm italic leading-relaxed ${isDark ? 'text-surface-300' : 'text-surface-700'}`}>
                  "Oladepo delivered an exceptional e-commerce platform ahead of schedule. His attention to detail and problem-solving skills are outstanding. Highly recommended!"
                </p>
                <div className="mt-2 sm:mt-3 flex items-center gap-2">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />))}
                  </div>
                  <span className={`text-xs sm:text-sm ${isDark ? 'text-surface-500' : 'text-surface-500'}`}>- E-commerce Client</span>
                </div>
              </div>

              <div className={`p-3 sm:p-4 rounded-xl border ${isDark ? 'bg-surface-800/50 border-surface-700/50' : 'bg-surface-50 border-surface-200'}`}>
                <p className={`text-xs sm:text-sm italic leading-relaxed ${isDark ? 'text-surface-300' : 'text-surface-700'}`}>
                  "The SaaS platform he built for us exceeded all expectations. Clean code, great communication, and delivered exactly what we needed."
                </p>
                <div className="mt-2 sm:mt-3 flex items-center gap-2">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />))}
                  </div>
                  <span className={`text-xs sm:text-sm ${isDark ? 'text-surface-500' : 'text-surface-500'}`}>- SaaS Startup Founder</span>
                </div>
              </div>

              <a
                href="https://fiverr.com/oladeporokeeb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#1dbf73]/10 text-[#1dbf73] text-sm sm:text-base font-semibold hover:bg-[#1dbf73]/20 transition-colors border border-[#1dbf73]/20"
              >
                View Fiverr Profile
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
