import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const treatments = [
  'Teeth Cleaning', 'Root Canal Treatment', 'Braces / Orthodontics',
  'Dental Implants', 'Teeth Whitening', 'Tooth Extraction',
  'Dental Crown', 'Veneers', 'Emergency Dental', 'Consultation Only'
]

const timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM']

export default function Appointment() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '', treatment: '', message: '', insurance: ''
  })
  const [errors, setErrors] = useState({})

  const update = (field, val) => {
    setForm(f => ({ ...f, [field]: val }))
    setErrors(e => ({ ...e, [field]: '' }))
  }

  const validateStep = () => {
    const e = {}
    if (step === 1) {
      if (!form.name) e.name = 'Name is required'
      if (!form.phone) e.phone = 'Phone is required'
      if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    }
    if (step === 2) {
      if (!form.date) e.date = 'Date is required'
      if (!form.time) e.time = 'Please select a time'
      if (!form.treatment) e.treatment = 'Please select a treatment'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const nextStep = () => { if (validateStep()) setStep(s => s + 1) }
  const prevStep = () => setStep(s => s - 1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep()) setSubmitted(true)
  }

  const InputField = ({ label, name, type = 'text', placeholder, required }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        value={form[name]}
        onChange={e => update(name, e.target.value)}
        placeholder={placeholder}
        min={type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
        className={`premium-input ${errors[name] ? 'border-red-300 bg-red-50' : ''}`}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  )

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-block bg-white/10 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-4 border border-white/20">Book Online</span>
            <h1 className="font-display text-5xl font-bold text-white mb-4">Book Your <span style={{ background: 'linear-gradient(135deg, #38bdf8, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Appointment</span></h1>
            <p className="text-white/70 text-lg">Schedule your visit in just a few steps. We'll confirm within 2 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Progress bar */}
              <div className="bg-gradient-to-r from-primary-600 to-teal-500 p-6">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3].map(s => (
                    <div key={s} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? 'bg-white text-primary-600' : 'bg-white/20 text-white'}`}>
                        {step > s ? '✓' : s}
                      </div>
                      {s < 3 && <div className={`flex-1 h-0.5 w-16 sm:w-24 mx-2 transition-all ${step > s ? 'bg-white' : 'bg-white/30'}`} />}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-white/80 text-xs font-medium">
                  <span>Personal Info</span>
                  <span>Schedule</span>
                  <span>Confirm</span>
                </div>
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1 */}
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="space-y-5">
                      <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                      <InputField label="Full Name" name="name" placeholder="John Smith" required />
                      <InputField label="Phone Number" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                      <InputField label="Email Address" name="email" type="email" placeholder="john@example.com" required />
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance Provider (Optional)</label>
                        <select value={form.insurance} onChange={e => update('insurance', e.target.value)} className="premium-input">
                          <option value="">Select insurance or self-pay</option>
                          {['Self-Pay', 'Delta Dental', 'Cigna', 'Aetna', 'BlueCross', 'MetLife', 'United', 'Other'].map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="space-y-5">
                      <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Schedule Your Visit</h2>
                      <InputField label="Preferred Date" name="date" type="date" required />
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time <span className="text-red-400">*</span></label>
                        <div className="grid grid-cols-5 gap-2">
                          {timeSlots.map(t => (
                            <button key={t} type="button" onClick={() => update('time', t)}
                              className={`py-2 px-1 rounded-xl text-xs font-medium border-2 transition-all ${form.time === t ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-primary-200'}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                        {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Treatment <span className="text-red-400">*</span></label>
                        <select value={form.treatment} onChange={e => update('treatment', e.target.value)} className={`premium-input ${errors.treatment ? 'border-red-300' : ''}`}>
                          <option value="">Select a treatment</option>
                          {treatments.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.treatment && <p className="text-red-500 text-xs mt-1">{errors.treatment}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                        <textarea value={form.message} onChange={e => update('message', e.target.value)}
                          placeholder="Tell us about your concerns, symptoms, or any special requirements..."
                          rows={4} className="premium-input resize-none" />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
                      <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Confirm Your Appointment</h2>
                      <div className="bg-gradient-to-br from-primary-50 to-teal-50 rounded-2xl p-6 space-y-4 mb-6">
                        {[
                          { label: 'Patient Name', val: form.name, icon: '👤' },
                          { label: 'Phone', val: form.phone, icon: '📞' },
                          { label: 'Email', val: form.email, icon: '✉️' },
                          { label: 'Date', val: form.date, icon: '📅' },
                          { label: 'Time', val: form.time, icon: '⏰' },
                          { label: 'Treatment', val: form.treatment, icon: '🦷' },
                          { label: 'Insurance', val: form.insurance || 'Self-Pay', icon: '💳' },
                        ].map(item => (
                          <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/50 last:border-0">
                            <span className="text-gray-500 text-sm flex items-center gap-2">
                              <span>{item.icon}</span> {item.label}
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">{item.val}</span>
                          </div>
                        ))}
                      </div>
                      {form.message && (
                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                          <div className="text-xs text-gray-500 mb-1">Your Notes:</div>
                          <div className="text-gray-700 text-sm">{form.message}</div>
                        </div>
                      )}
                      <p className="text-gray-500 text-sm text-center">
                        By confirming, you agree to our <a href="#" className="text-primary-600">cancellation policy</a>. We'll call to confirm within 2 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  {step > 1 ? (
                    <button onClick={prevStep} className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                      Back
                    </button>
                  ) : <div />}
                  {step < 3 ? (
                    <motion.button onClick={nextStep} className="shimmer-btn text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Next Step
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </motion.button>
                  ) : (
                    <motion.button onClick={handleSubmit} className="shimmer-btn text-white px-10 py-3 rounded-xl font-semibold flex items-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Confirm Appointment ✓
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="bg-white rounded-3xl shadow-xl p-12 text-center"
            >
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Appointment Requested!</h2>
              <p className="text-gray-500 text-lg mb-2">Thank you, <strong>{form.name}</strong>!</p>
              <p className="text-gray-500 mb-8">We'll confirm your <strong>{form.treatment}</strong> appointment on <strong>{form.date} at {form.time}</strong> within 2 hours via email and phone.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'',phone:'',email:'',date:'',time:'',treatment:'',message:'',insurance:'' })}}
                  className="shimmer-btn text-white px-8 py-3 rounded-xl font-semibold"
                  whileHover={{ scale: 1.02 }}
                >
                  Book Another Appointment
                </motion.button>
                <a href="tel:+15551234567" className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                  Call Us Now
                </a>
              </div>
            </motion.div>
          )}

          {/* Info cards */}
          {!submitted && (
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { icon: '⏱️', title: '2-Hour Confirmation', desc: 'We confirm all bookings quickly' },
                { icon: '🔄', title: 'Easy Rescheduling', desc: 'Change anytime with 24hr notice' },
                { icon: '🔒', title: 'Secure & Private', desc: 'Your data is fully protected' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs font-bold text-gray-700 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
