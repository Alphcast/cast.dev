import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Send, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { useTheme } from '../hooks/useTheme'

interface FormState {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch('https://formsubmit.co/ajax/oladeporokeeb203@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (response.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Alphcast', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/oladepo-rokeeb-113392302', label: 'LinkedIn' },
    { icon: WhatsAppIcon, href: 'https://wa.me/2349011105681', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:oladeporokeeb203@gmail.com', label: 'Email' },
  ]

  const cardClass = `p-4 sm:p-6 rounded-2xl border transition-colors duration-300 ${isDark ? 'bg-surface-900/50 border-surface-800/50' : 'bg-white border-surface-200 shadow-lg'}`
  const headingClass = `text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`
  const textClass = `text-sm sm:text-base ${isDark ? 'text-surface-400' : 'text-surface-600'}`
  const inputClass = `w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-sm sm:text-base transition-colors duration-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 ${isDark ? 'bg-surface-800/50 border-surface-700 text-white placeholder-surface-500' : 'bg-surface-50 border-surface-300 text-surface-900 placeholder-surface-400'}`
  const labelClass = `block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 ${isDark ? 'text-surface-300' : 'text-surface-700'}`

  return (
    <section className={`py-14 sm:py-20 md:py-24 lg:py-32 relative transition-colors duration-300 ${isDark ? 'text-surface-100' : 'text-surface-900'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6 px-2">
            Let's Work<span className="gradient-text"> Together</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
            Have a project in mind? Send me a message and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 space-y-5 sm:space-y-6 lg:space-y-8"
          >
            <div className={cardClass}>
              <h3 className={headingClass}>Get in Touch</h3>
              <a href="mailto:oladeporokeeb203@gmail.com" className={`flex items-center gap-2 sm:gap-3 transition-colors mb-2 sm:mb-3 text-sm sm:text-base ${textClass} hover:text-primary-400`}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="break-all">oladeporokeeb203@gmail.com</span>
              </a>
              <a href="https://wa.me/2349011105681" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 sm:gap-3 transition-colors mb-2 sm:mb-3 text-sm sm:text-base ${textClass} hover:text-success`}>
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>+234 901 110 5681</span>
              </a>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-surface-500' : 'text-surface-500'}`}>I typically respond within 24 hours.</p>
            </div>

            <div className={cardClass}>
              <h3 className={headingClass}>Connect</h3>
              <div className="space-y-2 sm:space-y-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 sm:gap-3 transition-colors text-sm sm:text-base ${textClass} hover:text-primary-400`}>
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className={`p-4 sm:p-6 lg:p-8 rounded-2xl border transition-colors duration-300 ${isDark ? 'bg-surface-900/50 border-surface-800/50' : 'bg-white border-surface-200 shadow-lg'}`}>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className={labelClass}>Your Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} className={`${inputClass} resize-none`} placeholder="Tell me about your project..." />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl gradient-bg text-white text-sm sm:text-base font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg shadow-primary-500/25"
                >
                  {status === 'loading' ? (<><Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />Sending...</>) : status === 'success' ? (<><CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />Message Sent!</>) : status === 'error' ? (<><AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />Failed. Try Again</>) : (<><Send className="w-4 h-4 sm:w-5 sm:h-5" />Send Message</>)}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
