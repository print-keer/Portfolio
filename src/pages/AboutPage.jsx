import { motion } from "framer-motion";
import { GuidedFooter, PageFrame, SectionHeading, Surface, cardVariant } from "../components/portfolio-ui";
import { portfolioData } from "../portfolioData";

export default function AboutPage() {
  const { about, philosophy, education, achievements } = portfolioData;

  return (
    <PageFrame>
      <Surface className="px-7 py-8 sm:px-8 sm:py-9" bgImage="/about-sky.jpeg" bgPosition="center">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="About"
            title="A little more about me."
            description="The technical side matters, but so does how I think, what I care about, and the kind of work I enjoy doing."
          />
          <div className="space-y-5">
            {about.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariant}
                className="text-base leading-8 text-slate-300 sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.34em] text-amber-200/70">Philosophy</p>
            <div className="mt-5 space-y-3">
              {philosophy.map((line, index) => (
                <motion.div
                  key={line}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariant}
                  className="rounded-2xl border border-white/8 bg-slate-950/35 px-5 py-4 text-sm leading-7 text-slate-200"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-amber-200/70">Education</p>
              <p className="mt-4 text-2xl font-semibold text-white">{education.degree}</p>
              <p className="mt-2 text-sm leading-6 text-amber-100">{education.institution}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {education.duration} - CGPA {education.cgpa}
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.34em] text-amber-200/70">Beyond Work</p>
              <div className="mt-4 space-y-3">
                {achievements.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/35 p-4 text-sm leading-6 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <GuidedFooter nextLabel="See What I Do" nextTo="/experience" />
      </Surface>
    </PageFrame>
  );
}
