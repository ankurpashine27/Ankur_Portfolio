import { motion } from "framer-motion";

export default function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start gap-8 mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-white dark:ring-dark-bg" />
      </div>

      {/* Mobile dot */}
      <div className="md:hidden absolute left-0 top-6 z-10">
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-white dark:ring-dark-bg" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="w-full md:w-[calc(50%-2rem)] ml-6 md:ml-0 glass-card p-6 hover:border-primary/30 transition-colors"
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
            <span className="text-xs text-slate-500 dark:text-slate-400">
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

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}
