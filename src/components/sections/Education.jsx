import { motion } from "framer-motion";
import { FiBook, FiCalendar, FiMapPin } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { educationData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-slate-50 dark:bg-dark-surface"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          subtitle="My Education"
          title="Academic Background"
          centered
        />

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-7 hover:border-primary/30 hover:shadow-glow-indigo transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <FiBook size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white font-heading leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {edu.field}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <FiMapPin size={14} className="shrink-0" />
                  <span>
                    {edu.institution}, {edu.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <FiCalendar size={14} className="shrink-0" />
                  <span>{edu.duration}</span>
                </div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${edu.gradeColor}`}
                >
                  {edu.grade}
                </span>
              </div>

              {/* Coursework */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 dark:bg-dark-border text-slate-600 dark:text-slate-400"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                  Activities
                </h4>
                <ul className="space-y-1">
                  {edu.activities.map((a) => (
                    <li
                      key={a}
                      className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
