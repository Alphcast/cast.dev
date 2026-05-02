import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../hooks/useTheme'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 }, { name: 'TypeScript', level: 90 }, { name: 'TanStack Router', level: 88 },
      { name: 'TanStack Query', level: 92 }, { name: 'Tailwind CSS', level: 95 }, { name: 'Framer Motion', level: 85 },
      { name: 'Next.js', level: 80 }, { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 92 }, { name: 'Express.js', level: 90 }, { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 }, { name: 'Authentication', level: 88 }, { name: 'Socket.io', level: 80 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 90 }, { name: 'PostgreSQL', level: 88 }, { name: 'Mongoose', level: 92 },
      { name: 'Prisma', level: 85 }, { name: 'Redis', level: 70 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git/GitHub', level: 95 }, { name: 'Docker', level: 78 }, { name: 'Vercel', level: 90 },
      { name: 'AWS', level: 72 }, { name: 'CI/CD', level: 80 }, { name: 'Figma', level: 75 },
    ],
  },
]

export function SkillsSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cardClass = `p-4 sm:p-6 lg:p-8 rounded-2xl border transition-colors duration-300 ${
    isDark ? 'bg-surface-900/50 border-surface-800/50' : 'bg-white border-surface-200 shadow-lg'
  }`

  return (
    <section id="skills" className={`py-14 sm:py-20 md:py-24 lg:py-32 transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Technical<span className="gradient-text"> Expertise</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
            Proficient in modern full-stack technologies with a focus on building scalable, performant applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className={cardClass}
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">{category.title}</h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-surface-300' : 'text-surface-700'}`}>{skill.name}</span>
                      <span className={`text-xs sm:text-sm ${isDark ? 'text-surface-500' : 'text-surface-400'}`}>{skill.level}%</span>
                    </div>
                    <div className={`h-1.5 sm:h-2 rounded-full overflow-hidden ${isDark ? 'bg-surface-800' : 'bg-surface-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-600 to-primary-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
