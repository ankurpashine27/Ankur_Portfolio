import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

import PageLoader from '@/components/ui/PageLoader'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      <CustomCursor />
      <ScrollProgressBar />

      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
      <SpeedInsights />
      <Analytics />
    </>
  )
}
