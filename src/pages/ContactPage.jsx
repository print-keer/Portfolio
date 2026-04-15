import { ContactCards, PageFrame, SectionHeading, Surface } from "../components/portfolio-ui";
import { portfolioData } from "../portfolioData";

export default function ContactPage() {
  const { contact, education, achievements } = portfolioData;

  return (
    <PageFrame className="space-y-8">
      <Surface className="px-7 py-8 sm:px-8 sm:py-9" bgImage="/contact-sky.jpeg" bgPosition="center">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect."
            description="If you think my work fits your team, project, or opportunity, I’d be happy to talk."
          />
          <ContactCards contact={contact} />
        </div>
      </Surface>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Surface className="px-7 py-8 sm:px-8 sm:py-9">
          <SectionHeading
            eyebrow="Education"
            title="Education."
          />
          <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
            <p className="text-xl font-semibold text-white">{education.degree}</p>
            <p className="mt-2 text-sm leading-6 text-amber-100">{education.institution}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {education.duration} - CGPA {education.cgpa}
            </p>
          </div>
        </Surface>

        <Surface className="px-7 py-8 sm:px-8 sm:py-9">
          <SectionHeading
            eyebrow="Achievements"
            title="A few other things about me."
          />
          <div className="mt-8 space-y-3">
            {achievements.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-6 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </PageFrame>
  );
}
