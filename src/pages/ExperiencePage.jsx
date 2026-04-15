import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { GuidedFooter, PageFrame, SectionHeading, Surface, cardVariant } from "../components/portfolio-ui";
import { portfolioData } from "../portfolioData";

export default function ExperiencePage() {
  const { experience, skillsIntro, skills } = portfolioData;
  const skillGroups = Object.values(skills);

  return (
    <PageFrame className="space-y-8">
      <Surface className="px-7 py-8 sm:px-8 sm:py-9" bgImage="/experience-sky.jpeg" bgPosition="center">
        <SectionHeading
          eyebrow="Experience"
          title="What I do."
          description="This is the work I have done so far across product engineering, automation, backend systems, and practical AI use."
        />
        <div className="relative mt-10 space-y-6 before:absolute before:left-5 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-white/60 before:via-amber-200/40 before:to-transparent sm:before:left-7">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="relative rounded-[1.7rem] border border-white/10 bg-white/5 p-6 pl-14 sm:pl-16"
            >
              <div className="absolute left-[0.8rem] top-7 h-4 w-4 rounded-full border-4 border-slate-950 bg-amber-200 shadow-[0_0_20px_rgba(217,179,103,0.75)] sm:left-[1.3rem]" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-2xl font-semibold text-white">{item.role}</p>
                  <p className="mt-1 text-base font-medium text-amber-100">{item.company}</p>
                </div>
                <div className="text-sm leading-6 text-slate-400">
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {item.description.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/35 p-4">
                    <BriefcaseBusiness className="mt-1 shrink-0 text-amber-100" size={16} />
                    <p className="text-sm leading-7 text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Surface>

      <Surface className="px-7 py-8 sm:px-8 sm:py-9">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit organized around how I solve problems, not how keywords are listed."
          description={skillsIntro}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200/80">{group.label}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{group.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-amber-200/12 bg-amber-200/8 px-3 py-1.5 text-sm text-amber-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <GuidedFooter nextLabel="View My Work" nextTo="/projects" />
      </Surface>
    </PageFrame>
  );
}
