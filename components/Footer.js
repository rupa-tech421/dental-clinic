import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-teal-500 to-primary-400" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2C8.5 2 5 5 5 9c0 2.5 1 4.5 2.5 6L12 22l4.5-7c1.5-1.5 2.5-3.5 2.5-6 0-4-3.5-7-7-7z" />
                  <circle cx="12" cy="9" r="2" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">SmileCare</div>
                <div className="text-xs text-primary-400 font-medium">Dental Clinic</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Award-winning dental care with a commitment to your smile and overall oral health. Trusted by thousands of patients.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-xs font-bold text-gray-300">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/appointment', label: 'Book Appointment' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-sm text-gray-400 hover:text-primary-400 transition-colors cursor-pointer flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary-500" />
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {['Teeth Cleaning', 'Root Canal Treatment', 'Braces & Orthodontics', 'Dental Implants', 'Teeth Whitening', 'Tooth Extraction'].map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="text-sm text-gray-400 hover:text-primary-400 transition-colors cursor-pointer flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-teal-500" />
                      {s}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400">123 Dental Street, Medical District, New York, NY 10001</p>
              </div>
              <a href="tel:+15551234567" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-primary-400 transition-colors">(555) 123-4567</span>
              </a>
              <a href="mailto:info@smilecare.com" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-teal-400 transition-colors">info@smilecare.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2024 SmileCare Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((t) => (
              <a key={t} href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
