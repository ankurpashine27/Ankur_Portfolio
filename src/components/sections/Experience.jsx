import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-dark-bg"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          subtitle="Where I've Worked"
          title="Work Experience"
          centered
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line — desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />
          {/* Vertical left line — mobile */}
          <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />

          {experienceData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
