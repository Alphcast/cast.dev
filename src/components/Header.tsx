import { useState, useEffect } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const pathname = useLocation({ select: (location) => location.pathname })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isDark = theme === 'dark'

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-surface-950/90 backdrop-blur-xl border-b border-surface-800/50 shadow-lg shadow-primary-500/5'
              : 'bg-white/90 backdrop-blur-xl border-b border-surface-200 shadow-lg shadow-primary-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/dev.png" alt="Cast.dev" className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl group-hover:scale-110 transition-transform" />
              <span className="text-base sm:text-lg font-bold gradient-text">Cast.dev</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isDark
                      ? pathname === link.to
                        ? 'text-primary-400'
                        : 'text-surface-300 hover:text-white hover:bg-surface-800/50'
                      : pathname === link.to
                        ? 'text-primary-600'
                        : 'text-surface-600 hover:text-primary-600 hover:bg-surface-100'
                  }`}
                  activeProps={{ className: isDark ? 'text-primary-400' : 'text-primary-600' }}
                >
                  {link.label}
                  {pathname === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-surface-400 hover:text-white hover:bg-surface-800/50'
                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200/50'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link
                to="/contact"
                className="hidden sm:inline-flex px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/25"
              >
                Hire Me
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-surface-400 hover:text-white hover:bg-surface-800/50'
                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200/50'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 z-50 md:hidden ${
                isDark ? 'bg-surface-950 border-l border-surface-800/50' : 'bg-white border-l border-surface-200'
              }`}
            >
              <div className="flex items-center justify-between p-4 border-b ${isDark ? 'border-surface-800/50' : 'border-surface-200'}">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <img src="/dev.png" alt="Cast.dev" className="w-8 h-8 rounded-xl" />
                  <span className="text-base font-bold gradient-text">Cast.dev</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-lg ${isDark ? 'text-surface-400 hover:text-white' : 'text-surface-600 hover:text-surface-900'}`}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === link.to
                        ? 'bg-primary-500/10 text-primary-400'
                        : isDark
                          ? 'text-surface-300 hover:text-white hover:bg-surface-800/50'
                          : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl gradient-bg text-white text-center font-semibold mt-4"
                >
                  Hire Me
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
