import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificatesData } from "@/data/portfolioData";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="section-padding bg-white dark:bg-dark-bg"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Certifications & Achievements"
          title="My Certificates"
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, i) => {
            const IconComponent = SiIcons[cert.icon];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 hover:border-primary/40 hover:shadow-glow-indigo transition-all duration-300"
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-dark-border flex items-center justify-center">
                    {IconComponent ? (
                      <IconComponent
                        size={24}
                        style={{ color: cert.iconColor }}
                      />
                    ) : (
                      <FiAward size={24} className="text-primary" />
                    )}
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    ✓ Completed
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 dark:text-white font-heading text-sm leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Issuer + date */}
                <p className="text-xs text-primary font-medium mb-0.5">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {cert.date}
                </p>

                {/* Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  View Certificate
                  <FiExternalLink size={12} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
