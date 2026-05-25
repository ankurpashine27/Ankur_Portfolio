import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { heroData, personalInfo } from '@/data/portfolioData'

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1))
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseMs)
          }
        } else {
          setText(current.slice(0, text.length - 1))
          if (text.length - 1 === 0) {
            setIsDeleting(false)
            setWordIndex((i) => (i + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs])

  return text
}

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Hero() {
  const typedText = useTypingEffect(heroData.roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark-bg dot-grid"
    >
      {/* Background blobs — kept inside bounds so they don't cause horizontal overflow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-0 w-64 h-64 md:w-80 md:h-80 md:right-1/4 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.span
              variants={itemVariants}
              className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4"
            >
              {heroData.greeting}
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-4"
            >
              <span className="gradient-text">{heroData.name}</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div variants={itemVariants} className="h-10 mb-6">
              <span className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
                {typedText}
                <span className="animate-cursor-blink text-primary ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mb-8"
            >
              {heroData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <Link
                to={heroData.ctaPrimary.target}
                smooth
                offset={-80}
                duration={700}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-glow-indigo transition-shadow cursor-pointer select-none"
              >
                {heroData.ctaPrimary.label}
              </Link>
              <a
                href={heroData.ctaSecondary.href}
                download
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                <FiDownload size={17} />
                {heroData.ctaSecondary.label}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/40 transition-all"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: geometric animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Rotating rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 12 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 rounded-full border border-indigo-500/20"
                  style={{
                    inset: `${i * 28}px`,
                    borderStyle: i === 1 ? 'dashed' : 'solid',
                    borderColor:
                      i === 0
                        ? 'rgba(99,102,241,0.3)'
                        : i === 1
                          ? 'rgba(168,85,247,0.2)'
                          : 'rgba(236,72,153,0.15)',
                  }}
                />
              ))}
              {/* Center avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] animate-float shadow-2xl shadow-purple-500/20">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-dark-surface">
                    <img
                      src="/Images/Ankur_pic.jpg"
                      alt="Ankur Pashine"
                      className="w-full h-full object-cover object-top scale-105"
                    />
                  </div>
                </div>
              </div>
              {/* Floating tags */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 -right-6 px-3 py-1.5 glass rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                React ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-8 -left-6 px-3 py-1.5 glass rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                Java ☕
              </motion.div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-10 -left-8 px-3 py-1.5 glass rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                Python 🐍
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 -right-4 px-3 py-1.5 glass rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                AI 🤖
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FiArrowDown className="animate-bounce-arrow" size={18} />
      </div>
    </section>
  )
}
