import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Star, Users, Award, ExternalLink } from 'lucide-react'

const experienceStats = [
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: Award, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Briefcase, value: '3+', label: 'Years Freelancing' },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Freelance
            <span className="gradient-text"> Excellence</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            3+ years of delivering high-quality software solutions to clients worldwide through Fiverr.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {experienceStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50"
            >
              <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-surface-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative p-8 lg:p-12 rounded-2xl bg-surface-900/50 border border-surface-800/50"
        >
          <div className="absolute top-0 left-0 w-full h-1 gradient-bg rounded-t-2xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1dbf73]/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#1dbf73]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Fiverr Top-Rated Seller</h3>
                  <p className="text-surface-400 text-sm">Full-Stack Web Development</p>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {[
                  'Full-stack web application development',
                  'API design and integration',
                  'Database architecture and optimization',
                  'UI/UX implementation with modern frameworks',
                  'Performance optimization and debugging',
                  'Technical consultation and code reviews',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-surface-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700/50">
                <p className="text-surface-300 italic leading-relaxed">
                  "Oladepo delivered an exceptional e-commerce platform ahead of schedule. His attention to detail 
                  and problem-solving skills are outstanding. Highly recommended!"
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-surface-500 text-sm">- E-commerce Client</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-800/50 border border-surface-700/50">
                <p className="text-surface-300 italic leading-relaxed">
                  "The SaaS platform he built for us exceeded all expectations. Clean code, great communication, 
                  and delivered exactly what we needed."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-surface-500 text-sm">- SaaS Startup Founder</span>
                </div>
              </div>

              <a
                href="https://fiverr.com/oladeporokeeb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-[#1dbf73]/10 text-[#1dbf73] font-semibold hover:bg-[#1dbf73]/20 transition-colors border border-[#1dbf73]/20"
              >
                View Fiverr Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
