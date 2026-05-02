import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { ContactSection } from '../components/ContactSection'
import { useTheme } from '../hooks/useTheme'

export function ContactPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`pt-14 sm:pt-16 md:pt-20 transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6 sm:mb-8">
            <Link to="/" className={`inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base transition-colors ${isDark ? 'text-surface-400 hover:text-primary-400' : 'text-surface-600 hover:text-primary-600'}`}>
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </div>
  )
}
