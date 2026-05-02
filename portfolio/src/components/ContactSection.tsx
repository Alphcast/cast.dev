import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Send, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

interface FormState {
  name: string
  email: string
  message: string
}

export function ContactSection() {
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
    { icon: Linkedin, href: 'https://linkedin.com/in/oladeporokeeb', label: 'LinkedIn' },
    { icon: WhatsAppIcon, href: 'https://wa.me/2349011105681', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:oladeporokeeb203@gmail.com', label: 'Email' },
  ]

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Let's Work
            <span className="gradient-text"> Together</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50">
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <a
                href="mailto:oladeporokeeb203@gmail.com"
                className="flex items-center gap-3 text-surface-400 hover:text-primary-400 transition-colors mb-3"
              >
                <Mail className="w-5 h-5" />
                oladeporokeeb203@gmail.com
              </a>
              <a
                href="https://wa.me/2349011105681"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-surface-400 hover:text-success transition-colors mb-3"
              >
                <WhatsAppIcon className="w-5 h-5" />
                +234 901 110 5681
              </a>
              <p className="text-surface-500 text-sm">
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50">
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-surface-400 hover:text-primary-400 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-surface-900/50 border border-surface-800/50">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-surface-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700 text-white placeholder-surface-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-surface-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700 text-white placeholder-surface-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-surface-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-surface-800/50 border border-surface-700 text-white placeholder-surface-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-4 rounded-xl gradient-bg text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg shadow-primary-500/25"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Failed. Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
