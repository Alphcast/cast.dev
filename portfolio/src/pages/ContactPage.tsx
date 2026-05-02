import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { ContactSection } from '../components/ContactSection'

export function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-surface-400 hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </div>
  )
}
