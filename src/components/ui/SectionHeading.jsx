import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <motion.div
      className={`mb-14 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span className="text-sm font-medium tracking-widest uppercase text-primary mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
        {title}
      </h2>
      <div
        className={`h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
