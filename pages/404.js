import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <div className="text-center px-4">
          <div className="text-8xl mb-6">🦷</div>
          <h1 className="font-display text-6xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="font-display text-2xl font-bold text-slate-700 mb-3">Page Not Found</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like this page needs a check-up! Let's get you back to our homepage.</p>
          <Link href="/" className="btn-primary">Back to Homepage</Link>
        </div>
      </div>
    </Layout>
  )
}
