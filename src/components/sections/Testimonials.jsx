import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonialsData } from "@/data/portfolioData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-slate-50 dark:bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What People Say"
          title="Recommendations"
          centered
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 hover:border-primary/30 hover:shadow-glow-indigo transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                <FiMessageSquare size={18} className="text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <AiFillStar key={j} size={16} className="text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
