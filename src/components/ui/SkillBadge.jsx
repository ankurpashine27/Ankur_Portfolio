import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";

export default function SkillBadge({ name, icon, color }) {
  const IconComponent = SiIcons[icon];

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-surface text-slate-700 dark:text-slate-300 text-sm font-medium cursor-default select-none hover:border-primary/40 hover:shadow-md transition-shadow"
    >
      {IconComponent && (
        <IconComponent style={{ color }} size={16} aria-hidden="true" />
      )}
      <span>{name}</span>
    </motion.div>
  );
}
