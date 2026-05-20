import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillsData } from "@/data/portfolioData";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="What I Work With"
          title="Skills & Technologies"
        />

        {/* Categories */}
        <div className="space-y-10 mb-16">
          {skillsData.categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-4">
                {cat.name}
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {cat.skills.map((skill) => (
                  <motion.div key={skill.name} variants={badgeVariants}>
                    <SkillBadge {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-6">
            Core Proficiencies
          </h3>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {skillsData.topSkills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {skill.name}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-dark-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
