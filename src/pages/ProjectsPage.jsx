import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GuidedFooter, PageFrame, SectionHeading, Surface, cardVariant } from "../components/portfolio-ui";
import { portfolioData } from "../portfolioData";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <PageFrame>
      <Surface className="px-7 py-8 sm:px-8 sm:py-9" bgImage="/projects-sky.jpeg" bgPosition="center">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have built."
          description="A few projects that reflect how I approach problem solving, experimentation, and shipping ideas into something tangible."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,19,26,0.84),rgba(8,10,16,0.94))] p-6 transition hover:border-amber-200/20"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <Sparkles className="shrink-0 text-amber-100" size={18} />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm leading-7 text-amber-50/90">{project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <GuidedFooter nextLabel="Explore My AI Work" nextTo="/ai-innovation" />
      </Surface>
    </PageFrame>
  );
}
