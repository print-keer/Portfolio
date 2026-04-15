import { motion } from "framer-motion";
import { GuidedFooter, PageFrame, SectionHeading, Surface, cardVariant } from "../components/portfolio-ui";
import { portfolioData } from "../portfolioData";

export default function BeyondCodePage() {
  const { beyondCode, certifications } = portfolioData;

  return (
    <PageFrame className="space-y-8">
      <Surface className="relative overflow-hidden px-7 py-8 sm:px-8 sm:py-9" bgImage="/beyond-sky.jpeg" bgPosition="center">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_32%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Beyond Code"
            title="What I am like outside work."
            description="The creative side of me matters too, and it definitely affects the way I think and build."
          />
          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">{beyondCode}</p>
          </div>
        </div>
      </Surface>

      <Surface className="px-7 py-8 sm:px-8 sm:py-9">
        <SectionHeading
          eyebrow="Credentials"
          title="Learning and growth."
          description="A few certifications that reflect the areas I have spent time building depth in."
        />
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-6 text-slate-200"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <GuidedFooter nextLabel="Get In Touch" nextTo="/contact" />
      </Surface>
    </PageFrame>
  );
}
