import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Shield, Globe, Rocket, Code, Clock } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const valueProps = [
  {
    icon: Lightbulb,
    title: 'Problem-Solving Mindset',
    description: 'My mathematics background gives me a unique approach to breaking down complex problems into elegant, efficient solutions.',
  },
  {
    icon: Code,
    title: 'Clean & Scalable Code',
    description: 'I write maintainable, well-structured code following industry best practices, making future development seamless.',
  },
  {
    icon: Globe,
    title: 'Remote Work Efficiency',
    description: '3+ years of remote work experience with excellent communication, time management, and delivery across time zones.',
  },
  {
    icon: Rocket,
    title: 'Proven Delivery Track',
    description: '50+ successfully delivered projects with a 99% client satisfaction rate. I deliver on time, every time.',
  },
  {
    icon: Shield,
    title: 'Production-Ready Solutions',
    description: 'Every project includes proper error handling, security measures, testing, and deployment-ready configurations.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Efficient development workflow enables rapid prototyping and quick iteration without compromising quality.',
  },
]

export function WhyHireMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Why Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Why
            <span className="gradient-text"> Hire Me</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            I bring more than just technical skills. I deliver value through dedication, expertise, and a commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors">
                <prop.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{prop.title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl gradient-border glow">
            <div className="text-center sm:text-left">
              <p className="text-white text-lg font-semibold">Ready to bring your ideas to life?</p>
              <p className="text-surface-400 text-sm">Let's discuss your project and build something amazing together.</p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl gradient-bg text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/25 whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
