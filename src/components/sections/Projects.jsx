import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData, personalInfo } from "@/data/portfolioData";

const filters = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "opensource", label: "Open Source" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 dark:bg-dark-surface"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Things I've Built"
          title="Featured Projects"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f.id
                  ? "bg-primary text-white shadow-glow-indigo"
                  : "border border-slate-200 dark:border-dark-border text-slate-600 dark:text-slate-400 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-xl transition-all"
          >
            <FiGithub size={18} />
            View All on GitHub
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
