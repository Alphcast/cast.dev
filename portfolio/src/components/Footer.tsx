import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { WhatsAppIcon } from './icons/WhatsAppIcon'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/Alphcast', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/oladeporokeeb', label: 'LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://wa.me/2349011105681', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:oladeporokeeb203@gmail.com', label: 'Email' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-900/50 border-t border-surface-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">Oladepo.dev</span>
            </Link>
            <p className="text-surface-400 text-sm leading-relaxed">
              Full-Stack Software Engineer building scalable web applications with modern technologies.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-surface-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/30 border border-transparent transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-800/50 text-center">
          <p className="text-surface-500 text-sm">
            &copy; {currentYear} Oladepo Rokeeb Olayinka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
