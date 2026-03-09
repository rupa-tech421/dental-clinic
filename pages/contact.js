import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (f, v) => setForm(p => ({ ...p, [f]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-block bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-4 border border-white/20">Get in Touch</span>
            <h1 className="font-display text-5xl font-bold text-white mb-4">
              Contact <span style={{ background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SmileCare</span>
            </h1>
            <p className="text-white/70 text-lg">We're here to help. Reach out via phone, email, or WhatsApp.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left info column */}
            <div className="lg:col-span-2 space-y-5">
              {[
                { icon: '📍', title: 'Our Location', lines: ['123 Dental Street', 'Medical District', 'New York, NY 10001'] },
                { icon: '📞', title: 'Phone', lines: ['(555) 123-4567', '(555) 987-6543 (Emergency)'] },
                { icon: '✉️', title: 'Email', lines: ['info@smilecare.com', 'appointments@smilecare.com'] },
                { icon: '🕐', title: 'Hours', lines: ['Mon–Fri: 9:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 4:00 PM', 'Sunday: Emergencies Only'] },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-teal-50 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">{item.title}</div>
                    {item.lines.map(l => <p key={l} className="text-gray-500 text-sm">{l}</p>)}
                  </div>
                </motion.div>
              ))}

              {/* Quick action buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl py-3.5 font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                  Click to Call
                </a>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl py-3.5 font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {!submitted ? (
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="John Smith" required className="premium-input" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                        <input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+1 (555) 000-0000" className="premium-input" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="john@example.com" required className="premium-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                      <select value={form.subject} onChange={e => update('subject', e.target.value)} className="premium-input">
                        <option value="">Select a topic</option>
                        <option>General Inquiry</option>
                        <option>Appointment Question</option>
                        <option>Billing & Insurance</option>
                        <option>Emergency</option>
                        <option>Treatment Pricing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                      <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="How can we help you?" rows={5} required className="premium-input resize-none" />
                    </div>
                    <motion.button type="submit" className="w-full shimmer-btn text-white py-4 rounded-xl font-semibold text-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Send Message
                      <svg className="inline ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </motion.button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-xl p-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center mx-auto mb-5">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }) }}
                    className="shimmer-btn text-white px-8 py-3 rounded-xl font-semibold">
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Google Maps embed */}
          <motion.div
            className="mt-10 rounded-3xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-primary-600 to-teal-500 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-semibold">SmileCare Dental Clinic</div>
                  <div className="text-white/70 text-sm">123 Dental Street, New York, NY 10001</div>
                </div>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-xl transition-colors">
                Get Directions →
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731368502!3d40.75889827932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
