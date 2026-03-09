import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
  })
}

const services = [
  { img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80', title: 'Teeth Cleaning', desc: 'Professional deep cleaning for a fresher, healthier smile.', accent: '#0284c7' },
  { img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80', title: 'Root Canal', desc: 'Pain-free treatment to save your natural tooth.', accent: '#0d9488' },
  { img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80', title: 'Braces & Orthodontics', desc: 'Align your teeth with modern invisible aligners.', accent: '#0ea5e9' },
  { img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80', title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacement solutions.', accent: '#06b6d4' },
  { img: 'https://images.unsplash.com/photo-1598256989014-45cc40def8cc?w=600&q=80', title: 'Teeth Whitening', desc: 'Brighten your smile up to 8 shades in one visit.', accent: '#4f46e5' },
  { img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80', title: 'Tooth Extraction', desc: 'Safe, comfortable extractions with minimal downtime.', accent: '#7c3aed' },
]

const testimonials = [
  { name: 'Sarah Johnson', role: 'Marketing Executive', text: 'SmileCare completely transformed my smile! The team is professional, gentle, and truly caring. My teeth whitening results exceeded all expectations.', rating: 5, avatar: 'SJ' },
  { name: 'Michael Chen', role: 'Software Engineer', text: 'Best dental experience of my life. Dr. Williams explained everything clearly. The clinic is spotless, modern, and equipped with the latest technology.', rating: 5, avatar: 'MC' },
  { name: 'Emily Rodriguez', role: 'Teacher', text: 'I was terrified of dental visits until I came here. The staff made me feel so comfortable. My braces treatment is going amazingly well!', rating: 5, avatar: 'ER' },
  { name: 'David Park', role: 'Business Owner', text: 'The dental implants I received are indistinguishable from my natural teeth. The whole process was smooth and the results are incredible.', rating: 5, avatar: 'DP' },
]

const stats = [
  { num: '15+', label: 'Years Experience' },
  { num: '8,500+', label: 'Happy Patients' },
  { num: '98%', label: 'Satisfaction Rate' },
  { num: '25+', label: 'Awards Won' },
]

const faqData = [
  { q: 'How often should I visit the dentist?', a: 'We recommend visiting every 6 months for routine check-ups and cleanings. However, patients with specific dental conditions may need more frequent visits as advised by our dentists.' },
  { q: 'Is teeth whitening safe?', a: 'Yes, professional teeth whitening performed by our certified dentists is completely safe. We use clinically approved whitening agents and customize the treatment to minimize sensitivity.' },
  { q: 'Do you accept dental insurance?', a: 'We accept most major dental insurance plans. Our friendly staff will help you verify your coverage and maximize your benefits before any treatment begins.' },
  { q: 'What should I do in a dental emergency?', a: 'Call us immediately at (555) 123-4567. We offer same-day emergency appointments for urgent dental issues like severe pain, broken teeth, or knocked-out teeth.' },
  { q: 'How long do dental implants last?', a: 'With proper care and maintenance, dental implants can last a lifetime. They are considered the most durable tooth replacement option available today.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-primary-200 bg-primary-50' : 'border-gray-100 bg-white'}`}>
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d={open ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, 80])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3])

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [servRef, servInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [testiRef, testiInView] = useInView()
  const [faqRef, faqInView] = useInView()
  const [blogRef, blogInView] = useInView()

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-teal-900">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #38bdf8, transparent)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #2dd4bf, transparent)' }}
            animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        {/* Floating dental icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { emoji: '🦷', top: '15%', left: '8%', delay: 0, size: 'text-3xl' },
            { emoji: '✨', top: '70%', left: '5%', delay: 1, size: 'text-2xl' },
            { emoji: '💎', top: '40%', right: '5%', delay: 2, size: 'text-2xl' },
            { emoji: '🔬', top: '80%', right: '8%', delay: 0.5, size: 'text-2xl' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.size} select-none`}
              style={{ top: item.top, left: item.left, right: item.right }}
              animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6 + i, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              {item.emoji}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Text Content */}
            <motion.div
              className="relative z-10"
              style={{ opacity: heroOpacity }}
            >
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Now Accepting New Patients</span>
              </motion.div>

              <motion.h1
                className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 hero-title"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Healthy Smile{' '}
                <span className="relative">
                  <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Starts Here
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-400 to-teal-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-white/70 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Experience world-class dental care with cutting-edge technology and a compassionate team dedicated to your beautiful, healthy smile.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/appointment">
                  <motion.button
                    className="shimmer-btn text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-xl flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(2,132,199,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Book Appointment</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl text-base font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span>View Services</span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="flex gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {[{ n: '15+', l: 'Years Exp.' }, { n: '8,500+', l: 'Patients' }, { n: '98%', l: 'Satisfaction' }].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl font-bold text-white">{s.n}</div>
                    <div className="text-white/60 text-xs font-medium mt-0.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 120, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: heroY }}
            >
              {/* Main image card */}
              <div className="relative">
                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(45,212,191,0.2))' }}
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Image placeholder with gradient + dental visual */}
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #ccfbf1 50%, #bae6fd 100%)' }}>

                  {/* Decorative dental illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="80%" height="80%" viewBox="0 0 400 500" fill="none">
                      {/* Tooth shape */}
                      <path d="M200 40 C140 40 100 80 100 140 C100 180 120 220 130 260 C140 300 145 360 160 400 C168 420 180 430 200 430 C220 430 232 420 240 400 C255 360 260 300 270 260 C280 220 300 180 300 140 C300 80 260 40 200 40Z" fill="white" stroke="#0284c7" strokeWidth="3"/>
                      {/* Inner shine */}
                      <path d="M160 80 C145 95 135 115 132 140" stroke="rgba(255,255,255,0.8)" strokeWidth="8" strokeLinecap="round"/>
                      {/* Root split */}
                      <path d="M180 410 L170 460" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M220 410 L230 460" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
                      {/* Sparkles */}
                      <g fill="#2dd4bf">
                        <circle cx="330" cy="80" r="8"/>
                        <circle cx="340" cy="60" r="4"/>
                        <circle cx="315" cy="65" r="5"/>
                      </g>
                      <g fill="#38bdf8">
                        <circle cx="70" cy="200" r="6"/>
                        <circle cx="80" cy="185" r="3"/>
                        <circle cx="60" cy="190" r="4"/>
                      </g>
                    </svg>
                  </div>

                  {/* Floating info cards */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                      <span className="text-green-500 text-xl">✓</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Next Available</div>
                      <div className="text-sm font-bold text-gray-800">Today, 2:00 PM</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-16 left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <div className="flex -space-x-2">
                      {['#0284c7', '#0d9488', '#7c3aed'].map((c, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                          {['S', 'M', 'E'][i]}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i} className="text-xs">{s}</span>)}
                      </div>
                      <div className="text-xs text-gray-500">500+ reviews</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-5 h-9 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-white/60"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="bg-gradient-to-r from-primary-600 to-teal-500 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">{s.num}</div>
                <div className="text-white/80 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section ref={servRef} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Our Services</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Dental <span className="gradient-text">Care</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">From routine cleanings to advanced treatments — we cover every aspect of your oral health.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="service-card rounded-2xl overflow-hidden cursor-pointer group bg-white shadow-md"
                initial={{ opacity: 0, y: 40 }}
                animate={servInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, boxShadow: `0 20px 60px ${s.accent}33` }}
              >
                {/* Background image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* Card content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary-700 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{s.desc}</p>
                  <Link href="/appointment">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:gap-3 transition-all">
                      Book Treatment
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT/DOCTOR PREVIEW */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-50 to-teal-50 aspect-[4/5]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-200 to-teal-200 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-7xl">👨‍⚕️</span>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md px-6 py-4 mx-6">
                      <div className="font-bold text-gray-800 text-lg">Dr. James Williams</div>
                      <div className="text-primary-600 text-sm">BDS, MDS — Chief Dentist</div>
                      <div className="flex justify-center gap-1 mt-2">{'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                    </div>
                  </div>
                </div>
                {/* Decorative badges */}
                <motion.div
                  className="absolute top-6 right-6 bg-white rounded-2xl shadow p-3 flex items-center gap-2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="text-xs font-bold text-gray-700">Top Dentist</div>
                    <div className="text-xs text-gray-400">2024 Award</div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-6 left-6 bg-gradient-to-r from-primary-600 to-teal-500 text-white rounded-2xl px-4 py-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-xs font-medium opacity-80">Experience</div>
                  <div className="font-bold text-lg">15+ Years</div>
                </motion.div>
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-primary-50 -z-10" />
              <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-teal-50 -z-10" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <span className="inline-block bg-teal-50 text-teal-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Meet Your Doctor</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dr. James <span className="gradient-text">Williams</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 15 years of experience, Dr. Williams is a nationally recognized specialist committed to delivering painless, precision dental care.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Qualification', val: 'BDS / MDS' },
                  { label: 'Specialization', val: 'Cosmetic & Implant' },
                  { label: 'Experience', val: '15+ Years' },
                  { label: 'Patients', val: '8,500+ Treated' },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                    <div className="font-semibold text-gray-800 text-sm">{item.val}</div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <motion.button
                  className="shimmer-btn text-white px-8 py-3.5 rounded-2xl font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More About Dr. Williams
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testiRef} className="py-20 lg:py-28 animated-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={testiInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/70 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Testimonials</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="gradient-text">Patients Say</span>
            </h2>
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={testiInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {'⭐⭐⭐⭐⭐'.split('').map((s, j) => <span key={j} className="text-sm">{s}</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-teal-400 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER GALLERY */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-teal-50 text-teal-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Gallery</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Before & <span className="gradient-text">After</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">See the real transformation our treatments deliver to our patients' smiles.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                treatment: 'Teeth Whitening',
                before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
                after: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=400&q=80',
                desc: '8 shades brighter in one session',
              },
              {
                treatment: 'Braces & Orthodontics',
                before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
                after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80',
                desc: 'Perfect alignment in 12 months',
              },
              {
                treatment: 'Dental Implants',
                before: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
                after: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
                desc: 'Natural-looking permanent solution',
              },
            ].map((item, i) => (
              <motion.div
                key={item.treatment}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
              >
                {/* Stacked before/after with divider */}
                <div className="relative h-56 overflow-hidden">
                  {/* Before image — full width background */}
                  <img
                    src={item.before}
                    alt={`${item.treatment} before`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* After image — right half overlay */}
                  <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                    <img
                      src={item.after}
                      alt={`${item.treatment} after`}
                      className="absolute inset-y-0 right-0 w-[200%] h-full object-cover"
                      style={{ right: 0, width: '200%', maxWidth: 'none' }}
                    />
                  </div>
                  {/* Center divider line */}
                  <div className="absolute inset-y-0 left-1/2 -translate-x-px w-0.5 bg-white z-10" />
                  {/* Center divider icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5">
                      <path d="M8 3H5a2 2 0 00-2 2v3M21 8V5a2 2 0 00-2-2h-3M8 21H5a2 2 0 01-2-2v-3M21 16v3a2 2 0 01-2 2h-3" />
                    </svg>
                  </div>
                  {/* Before label */}
                  <div className="absolute bottom-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Before
                  </div>
                  {/* After label */}
                  <div className="absolute bottom-3 right-3 z-10 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    After
                  </div>
                </div>
                {/* Card footer */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{item.treatment}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-full">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-green-700 text-xs font-semibold">Transformed</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">FAQ</span>
            <h2 className="font-display text-4xl font-bold text-gray-900">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </motion.div>
          <div className="space-y-3">
            {faqData.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <FAQItem q={f.q} a={f.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section ref={blogRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-teal-50 text-teal-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Blog</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">Dental Health <span className="gradient-text">Tips</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Prevention', title: '10 Tips for Stronger Teeth', desc: 'Simple daily habits that can dramatically improve your dental health.', date: 'Dec 10, 2024', read: '4 min read', emoji: '🦷' },
              { tag: 'Treatment', title: 'Is Teeth Whitening Safe?', desc: 'Everything you need to know about professional whitening procedures.', date: 'Dec 5, 2024', read: '5 min read', emoji: '✨' },
              { tag: 'Kids', title: 'Children\'s First Dental Visit', desc: 'How to prepare your child for a positive dental experience.', date: 'Nov 28, 2024', read: '3 min read', emoji: '👦' },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={blogInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center group-hover:from-primary-100 group-hover:to-teal-100 transition-all duration-300">
                  <span className="text-7xl">{b.emoji}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">{b.tag}</span>
                  <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-primary-600 transition-colors">{b.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{b.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{b.date}</span>
                    <span className="flex items-center gap-1">📖 {b.read}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-teal-600 overflow-hidden relative">
        {/* BG decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-5xl mb-6">🦷</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Book your appointment today and take the first step toward a healthier, more confident smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <motion.button
                  className="bg-white text-primary-600 px-10 py-4 rounded-2xl text-base font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Appointment Today
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </Link>
              <a href="tel:+15551234567">
                <motion.button
                  className="border-2 border-white/50 text-white px-10 py-4 rounded-2xl text-base font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                  </svg>
                  Call (555) 123-4567
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
