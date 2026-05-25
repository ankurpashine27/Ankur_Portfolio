import { motion } from "framer-motion";

export default function TimelineItem({ item, index }) {
  return (
    <div className="relative flex items-start mb-14">

      {/* ── Desktop: date label in left column ── */}
      <div className="hidden md:flex w-1/4 shrink-0 flex-col items-end pr-8 pt-5">
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-right leading-snug">
          {item.duration}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 text-right mt-1">
          {item.location}
        </p>
      </div>

      {/* ── Desktop: dot centered on the vertical line + horizontal connector ── */}
      {/* Dot is -ml-2 so its center sits exactly at left-1/4 in the parent */}
      <div className="hidden md:flex items-center mt-5 shrink-0 z-10">
        <div className="-ml-2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-white dark:ring-dark-bg" />
        <div className="w-6 h-0.5 bg-gradient-to-r from-indigo-400/60 to-transparent" />
      </div>

      {/* ── Mobile: dot on the left ── */}
      <div className="md:hidden absolute left-0 top-5 z-10">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-white dark:ring-dark-bg" />
      </div>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex-1 ml-6 md:ml-0 glass-card p-6 hover:border-primary/30 transition-colors"
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-lg ${item.companyColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}
          >
            {item.companyInitials}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white font-heading">
              {item.role}
            </h3>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-primary font-medium text-sm">
                {item.company}
              </span>
              {item.current && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium">
                  Current
                </span>
              )}
            </div>
            {/* Duration shown on mobile only (desktop shows in left column) */}
            <span className="md:hidden text-xs text-slate-500 dark:text-slate-400">
              {item.duration} · {item.location}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {item.bullets.map((b, i) => (
            <li
              key={i}
              className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs rounded-md bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
