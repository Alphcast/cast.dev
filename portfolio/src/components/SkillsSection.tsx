import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'primary',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'TanStack Router', level: 88 },
      { name: 'TanStack Query', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'Backend',
    color: 'accent',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 },
      { name: 'Authentication', level: 88 },
      { name: 'Socket.io', level: 80 },
    ],
  },
  {
    title: 'Database',
    color: 'primary',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Mongoose', level: 92 },
      { name: 'Prisma', level: 85 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'accent',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'Vercel', level: 90 },
      { name: 'AWS', level: 72 },
      { name: 'CI/CD', level: 80 },
      { name: 'Figma', level: 75 },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Technical
            <span className="gradient-text"> Expertise</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Proficient in modern full-stack technologies with a focus on building scalable, performant applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-surface-900/50 border border-surface-800/50"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-surface-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-surface-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-full rounded-full ${
                          category.color === 'primary'
                            ? 'gradient-bg'
                            : 'bg-gradient-to-r from-accent-600 to-accent-400'
                        }`}
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
