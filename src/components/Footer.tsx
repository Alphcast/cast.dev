import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Mail } from 'lucide-react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'
import { useTheme } from '../hooks/useTheme'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Alphcast', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/oladepo-rokeeb-113392302', label: 'LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://wa.me/2349011105681', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:oladeporokeeb203@gmail.com', label: 'Email' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-surface-900/50 border-t border-surface-800/50' : 'bg-surface-100/50 border-t border-surface-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/dev.png" alt="Cast.dev" className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl group-hover:scale-110 transition-transform" />
              <span className="text-base sm:text-lg font-bold gradient-text">Cast.dev</span>
            </Link>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-surface-400' : 'text-surface-600'}`}>
              Full-Stack Software Engineer building scalable web applications with modern technologies.
            </p>
          </div>

          <div>
            <h3 className={`text-sm sm:text-base font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>Quick Links</h3>
            <nav className="space-y-1 sm:space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm transition-colors ${
                    isDark ? 'text-surface-400 hover:text-primary-400' : 'text-surface-600 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className={`text-sm sm:text-base font-semibold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>Connect</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-surface-800/50 text-surface-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/30 border border-transparent'
                      : 'bg-surface-200/50 text-surface-600 hover:text-primary-600 hover:bg-primary-500/20 hover:border-primary-500/30 border border-transparent'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t text-center ${
          isDark ? 'border-surface-800/50' : 'border-surface-200'
        }`}>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-surface-500' : 'text-surface-600'}`}>
            &copy; {currentYear} Oladepo Rokeeb Olayinka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
