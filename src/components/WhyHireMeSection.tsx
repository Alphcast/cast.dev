import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Shield, Globe, Rocket, Code, Clock } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useTheme } from '../hooks/useTheme'

const valueProps = [
  { icon: Lightbulb, title: 'Problem-Solving Mindset', description: 'My mathematics background gives me a unique approach to breaking down complex problems into elegant, efficient solutions.' },
  { icon: Code, title: 'Clean & Scalable Code', description: 'I write maintainable, well-structured code following industry best practices, making future development seamless.' },
  { icon: Globe, title: 'Remote Work Efficiency', description: '3+ years of remote work experience with excellent communication, time management, and delivery across time zones.' },
  { icon: Rocket, title: 'Proven Delivery Track', description: '50+ successfully delivered projects with a 99% client satisfaction rate. I deliver on time, every time.' },
  { icon: Shield, title: 'Production-Ready Solutions', description: 'Every project includes proper error handling, security measures, testing, and deployment-ready configurations.' },
  { icon: Clock, title: 'Quick Turnaround', description: 'Efficient development workflow enables rapid prototyping and quick iteration without compromising quality.' },
]

export function WhyHireMeSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={`py-14 sm:py-20 md:py-24 lg:py-32 transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Why Me</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Why<span className="gradient-text"> Hire Me</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
            I bring more than just technical skills. I deliver value through dedication, expertise, and a commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group p-4 sm:p-6 rounded-2xl border hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg ${
                isDark ? 'bg-surface-900/50 border-surface-800/50 hover:shadow-primary-500/5' : 'bg-white border-surface-200 hover:shadow-primary-500/10'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-primary-500/20 transition-colors">
                <prop.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3">{prop.title}</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>{prop.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <div className={`inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-8 rounded-2xl border glow ${
            isDark ? 'gradient-border' : 'border-surface-200 bg-white shadow-xl'
          }`}>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg font-semibold px-2">Ready to bring your ideas to life?</p>
              <p className={`text-xs sm:text-sm px-2 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>Let's discuss your project and build something amazing together.</p>
            </div>
            <Link to="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl gradient-bg text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/25 text-center whitespace-nowrap">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
