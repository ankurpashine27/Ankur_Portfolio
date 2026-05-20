import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Monitor, Server, Database } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { aboutData } from '@/data/portfolioData'

const iconMap = { Monitor, Server, Database }

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const num = parseInt(target)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(num / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= num) {
        setCount(num)
        clearInterval(timer)
      } else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, num])

  return (
    <span ref={ref}>
      {count}
      {target.includes('+') ? '+' : ''}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Get to know me" title="About Me" />

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Photo / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Gradient border */}
              <div className="p-1 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-glow-indigo">
                <div className="w-72 h-80 rounded-2xl bg-slate-200 dark:bg-dark-bg overflow-hidden">
                  <div className="w-full h-full relative">
                    <span className="text-7xl font-bold font-heading gradient-text">
                      <img
                        src="/Images/Ankur_pic.jpg"
                        alt="Ankur Pashine"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-2">
                      <p className="text-white text-sm font-medium text-center">Ankur Pashine</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative dot */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {aboutData.bio.map((para, i) => (
              <p
                key={i}
                className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 last:mb-8"
              >
                {para}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 glass-card rounded-xl hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-bold font-heading gradient-text">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* What I do */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {aboutData.whatIDo.map((item) => {
                const Icon = iconMap[item.icon]
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4 }}
                    className="p-4 glass-card rounded-xl hover:border-primary/30 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-3">
                      {Icon && <Icon size={18} className="text-primary" />}
                    </div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1 font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
