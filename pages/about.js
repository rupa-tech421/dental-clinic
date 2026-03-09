import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const timeline = [
  { year: '2009', title: 'BDS Degree', desc: 'Graduated with honors from New York University College of Dentistry.', icon: '🎓' },
  { year: '2011', title: 'MDS Specialization', desc: "Completed Master's in Dental Surgery, specializing in Cosmetic Dentistry.", icon: '📚' },
  { year: '2012', title: 'Founded SmileCare', desc: 'Established SmileCare Dental Clinic with a mission to transform smiles.', icon: '🏥' },
  { year: '2016', title: 'Best Dentist Award', desc: 'Recognized as Top Cosmetic Dentist by the Dental Excellence Foundation.', icon: '🏆' },
  { year: '2019', title: 'Advanced Training', desc: 'Completed advanced implantology training in Zurich, Switzerland.', icon: '🌍' },
  { year: '2024', title: '8,500+ Patients', desc: 'Crossed the milestone of 8,500 successfully treated patients.', icon: '⭐' },
]

const teamMembers = [
  { name: 'Dr. James Williams', role: 'Chief Dentist & Founder', spec: 'Cosmetic & Implant Dentistry', exp: '15 years', emoji: '👨‍⚕️' },
  { name: 'Dr. Sarah Mitchell', role: 'Orthodontist', spec: 'Braces & Aligners', exp: '10 years', emoji: '👩‍⚕️' },
  { name: 'Dr. Kevin Park', role: 'Endodontist', spec: 'Root Canal Specialist', exp: '8 years', emoji: '👨‍⚕️' },
  { name: 'Dr. Lisa Chen', role: 'Pediatric Dentist', spec: 'Children\'s Dentistry', exp: '7 years', emoji: '👩‍⚕️' },
]

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-4 border border-white/20">About Us</span>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
              Dedicated to Your <span style={{ background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Perfect Smile</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              For over 15 years, SmileCare has been the trusted choice for families seeking exceptional dental care in New York.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="inline-block bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Our Mission</span>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                Transforming Smiles, <span className="gradient-text">Changing Lives</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                At SmileCare, we believe every person deserves a healthy, confident smile. Our mission is to provide outstanding dental care in a warm, welcoming environment using the latest technology.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded in 2012 by Dr. James Williams, our clinic was built on three core principles: excellence, compassion, and innovation. We invest in continuous education and cutting-edge equipment so you always receive the best care available.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '💡', label: 'Innovation First' },
                  { icon: '❤️', label: 'Patient Care' },
                  { icon: '🔬', label: 'Latest Tech' },
                ].map((v) => (
                  <div key={v.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{v.icon}</div>
                    <div className="text-xs font-semibold text-gray-700">{v.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Doctor Profile */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-3xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-200 to-teal-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-1">Dr. James Williams</h3>
                    <p className="text-primary-600 font-semibold mb-2">BDS, MDS — Chief Dentist</p>
                    <div className="flex gap-1">{'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Qualification', val: 'BDS, MDS' },
                    { label: 'Specialization', val: 'Cosmetic & Implants' },
                    { label: 'Experience', val: '15+ Years' },
                    { label: 'Languages', val: 'English, Spanish' },
                    { label: 'Patients Treated', val: '8,500+' },
                    { label: 'Awards', val: '25+ Recognition' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-3">
                      <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                      <div className="text-sm font-semibold text-gray-800">{item.val}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-gray-600 text-sm leading-relaxed italic">
                  "My goal is to make every patient feel at home and leave with a smile they're proud of. Great dental care starts with genuine compassion."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-teal-50 text-teal-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Career Journey</span>
            <h2 className="font-display text-4xl font-bold text-gray-900">Dr. Williams' <span className="gradient-text">Professional Journey</span></h2>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-teal-400 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                >
                  {/* Card */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <span className="inline-block bg-primary-50 text-primary-600 text-xs font-bold px-3 py-1 rounded-full mb-2">{item.year}</span>
                      <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 border-4 border-white shadow-md flex-shrink-0 relative z-10 mx-auto" />

                  {/* Empty side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">Our Team</span>
            <h2 className="font-display text-4xl font-bold text-gray-900">Meet Our <span className="gradient-text">Expert Dentists</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m, i) => (
              <motion.div
                key={m.name}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-teal-100 flex items-center justify-center mx-auto mb-4 group-hover:from-primary-200 group-hover:to-teal-200 transition-all">
                  <span className="text-4xl">{m.emoji}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-0.5">{m.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-1">{m.role}</p>
                <p className="text-gray-500 text-xs mb-2">{m.spec}</p>
                <span className="inline-block bg-white text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-100">{m.exp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-14 bg-gradient-to-r from-primary-600 to-teal-500">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-3">We Accept Most Major Insurance Plans</h3>
            <p className="text-white/80 mb-6">We work with your insurance to maximize your benefits and minimize out-of-pocket costs.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Delta Dental', 'Cigna', 'Aetna', 'BlueCross', 'MetLife', 'United'].map((ins) => (
                <span key={ins} className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-5 py-2 rounded-full border border-white/30">
                  {ins}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
