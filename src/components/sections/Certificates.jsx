import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import { certificatesData } from "@/data/portfolioData";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="section-padding bg-slate-50 dark:bg-dark-surface"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          subtitle="Certifications & Achievements"
          title="My Certificates"
          centered
        />

        <div className="grid md:grid-cols-2 gap-3">
          {certificatesData.map((cert, i) => {
            const IconComponent = SiIcons[cert.icon];
            const hasLink = cert.link && cert.link !== "#";

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white dark:bg-dark-bg border border-slate-200 dark:border-dark-border border-l-[3px] hover:shadow-md transition-all duration-200 group"
                style={{ borderLeftColor: cert.iconColor }}
              >
                {/* Icon box */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${cert.iconColor}18` }}
                >
                  {IconComponent ? (
                    <IconComponent size={20} style={{ color: cert.iconColor }} />
                  ) : (
                    <FiAward size={20} style={{ color: cert.iconColor }} />
                  )}
                </div>

                {/* Title + issuer */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug truncate">
                    {cert.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {cert.issuer}
                  </p>
                </div>

                {/* Year */}
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 shrink-0">
                  {cert.date}
                </span>

                {/* View link */}
                {hasLink ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.title} certificate`}
                    className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-dark-border transition-colors"
                  >
                    <FiExternalLink size={14} />
                  </a>
                ) : (
                  <div className="w-8 shrink-0" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
