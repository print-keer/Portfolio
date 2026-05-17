import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { GuidedFooter, PageFrame, SectionHeading, Surface, cardVariant } from "../components/portfolio-ui";
import { portfolioData } from "../portfolioData";

export default function AIInnovationPage() {
  const { aiInnovation, skillsIntro, skills } = portfolioData;
  const skillGroups = Object.values(skills);

  return (
    <PageFrame className="space-y-8">
      <Surface className="px-7 py-8 sm:px-8 sm:py-9" bgImage="/ai-sky.jpeg" bgPosition="center">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I work with."
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
      </Surface>

      <Surface className="px-7 py-8 sm:px-8 sm:py-9" bgImage="/ai-sky.jpeg" bgPosition="center">
        <SectionHeading
          eyebrow="AI"
          title={aiInnovation.title}
          description={aiInnovation.intro}
        />
        <div className="mt-8 grid gap-4">
          {aiInnovation.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
            >
              <div className="flex gap-3">
                <div className="rounded-2xl border border-amber-200/12 bg-amber-200/8 p-3 text-amber-100">
                  <BrainCircuit size={18} />
                </div>
                <div>
                  <p className="text-lg font-medium text-white">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{pillar.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <GuidedFooter nextLabel="Beyond Code" nextTo="/beyond-code" />
      </Surface>
    </PageFrame>
  );
}
