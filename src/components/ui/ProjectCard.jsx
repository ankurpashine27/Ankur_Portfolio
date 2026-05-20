import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    techStack,
    color,
    borderColor,
    shadowColor,
    liveUrl,
    githubUrl,
  } = project;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group glass-card overflow-hidden transition-all duration-300 ${borderColor} ${shadowColor}`}
    >
      {/* Gradient header bar */}
      <div className={`h-2 w-full bg-gradient-to-r ${color}`} />

      <div className="p-6">
        {/* Title + links */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 ml-4 shrink-0">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label={`${title} GitHub repository`}
            >
              <FiGithub size={18} />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-primary transition-colors"
              aria-label={`${title} live demo`}
            >
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-dark-border text-slate-600 dark:text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
