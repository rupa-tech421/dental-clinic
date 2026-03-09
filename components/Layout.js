import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
