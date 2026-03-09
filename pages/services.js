import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const services = [
  {
    icon: '🦷',
    title: 'Teeth Cleaning',
    desc: 'Professional prophylaxis removes plaque, tartar, and surface stains using ultrasonic instruments and polishing. Essential for preventing gum disease and cavities.',
    duration: '45-60 min',
    recovery: 'None',
    price: 'From $150',
    features: ['Deep plaque removal', 'Tartar scaling', 'Polish & floss', 'Fluoride treatment'],
    color: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50',
  },
  {
    icon: '🔧',
    title: 'Root Canal Treatment',
    desc: 'Save your natural tooth with modern, painless root canal therapy. We use rotary instruments and digital X-rays for precise, comfortable treatment.',
    duration: '60-90 min',
    recovery: '1-2 days',
    price: 'From $800',
    features: ['Digital X-ray analysis', 'Painless procedure', 'Rotary endodontics', 'Crown restoration'],
    color: 'from-teal-500 to-green-500',
    bg: 'from-teal-50 to-green-50',
  },
  {
    icon: '😁',
    title: 'Braces & Orthodontics',
    desc: 'Straighten your smile with traditional braces or invisible clear aligners. Our orthodontist creates customized treatment plans for all ages.',
    duration: '12-24 months',
    recovery: 'Gradual',
    price: 'From $3,500',
    features: ['Clear aligners', 'Metal braces', 'Ceramic braces', 'Retainers'],
    color: 'from-sky-500 to-indigo-500',
    bg: 'from-sky-50 to-indigo-50',
  },
  {
    icon: '⚙️',
    title: 'Dental Implants',
    desc: 'Replace missing teeth permanently with titanium implants that look, feel, and function like natural teeth. The gold standard in tooth replacement.',
    duration: '3-6 months',
    recovery: '2 weeks',
    price: 'From $2,500',
    features: ['Titanium post', 'Custom crown', 'Bone grafting if needed', 'Lifetime lasting'],
    color: 'from-violet-500 to-purple-500',
    bg: 'from-violet-50 to-purple-50',
  },
  {
    icon: '✨',
    title: 'Teeth Whitening',
    desc: 'Achieve a dazzling smile up to 8 shades brighter in a single in-office session with our professional-grade whitening system.',
    duration: '60-90 min',
    recovery: 'None',
    price: 'From $350',
    features: ['8 shades brighter', 'Same-day results', 'Safe gel formula', 'LED acceleration'],
    color: 'from-amber-500 to-yellow-500',
    bg: 'from-amber-50 to-yellow-50',
  },
  {
    icon: '💊',
    title: 'Tooth Extraction',
    desc: 'Safe, comfortable tooth removal when necessary. We prioritize patient comfort with modern anesthesia and sedation options.',
    duration: '30-60 min',
    recovery: '3-7 days',
    price: 'From $200',
    features: ['Local anesthesia', 'Gentle technique', 'Post-op care kit', 'Follow-up included'],
    color: 'from-rose-500 to-pink-500',
    bg: 'from-rose-50 to-pink-50',
  },
]

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-block bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-4 border border-white/20">Our Services</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive <span style={{ background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Dental Services</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              From routine cleanings to complex restorations — we provide the full spectrum of dental care under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className={`bg-gradient-to-br ${s.bg} rounded-3xl p-8 border border-white shadow-sm hover:shadow-xl transition-all duration-400 group`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg text-3xl`}>
                    {s.icon}
                  </div>
                  <span className="text-lg font-bold text-gray-700">{s.price}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{s.desc}</p>

                {/* Meta */}
                <div className="flex gap-4 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                    {s.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Recovery: {s.recovery}
                  </div>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0`}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/appointment">
                  <motion.button
                    className={`w-full bg-gradient-to-r ${s.color} text-white py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Treatment
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-gray-900">Why Choose <span className="gradient-text">SmileCare</span>?</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏥', title: 'State-of-art Facility', desc: 'Latest dental technology and sterilized, premium equipment' },
              { icon: '💉', title: 'Pain-Free Treatments', desc: 'Modern anesthesia and sedation for maximum comfort' },
              { icon: '📋', title: 'Personalized Plans', desc: 'Custom treatment plans tailored to your unique needs' },
              { icon: '💳', title: 'Flexible Payments', desc: '0% financing available, all major insurance accepted' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
