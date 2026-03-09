import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/appointment', label: 'Appointment' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-teal-500 flex items-center justify-center shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2C8.5 2 5 5 5 9c0 2.5 1 4.5 2.5 6L12 22l4.5-7c1.5-1.5 2.5-3.5 2.5-6 0-4-3.5-7-7-7z" />
                  <circle cx="12" cy="9" r="2" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-gray-900 leading-none">SmileCare</div>
                <div className="text-xs text-primary-600 font-medium tracking-wide">Dental Clinic</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    router.pathname === link.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+15551234567" className="flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                </svg>
              </div>
              (555) 123-4567
            </a>
            <Link href="/appointment">
              <motion.button
                className="shimmer-btn text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Appointment
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block h-0.5 bg-gray-700 rounded-full"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                className="block h-0.5 bg-gray-700 rounded-full"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block h-0.5 bg-gray-700 rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link href={link.href}>
                    <span
                      onClick={() => setMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                        router.pathname === link.href
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link href="/appointment">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="w-full mt-3 shimmer-btn text-white px-6 py-3 rounded-xl text-sm font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Appointment
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
