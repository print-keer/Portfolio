import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  BrainCircuit,
  BriefcaseBusiness,
  Download,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sparkles,
  SunMedium,
} from "lucide-react";
import { portfolioData } from "./portfolioData";

const sectionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const skillGroups = [
  { label: "Programming", key: "programming" },
  { label: "AI / ML", key: "ml_ai" },
  { label: "Testing", key: "testing" },
  { label: "Tools", key: "tools" },
  { label: "AI Toolkit", key: "ai_tools" },
  { label: "Systems", key: "other" },
];

const recruiterHighlights = [
  "Production-focused AI engineer with hands-on ML, automation, and platform tooling experience",
  "Builds internal productivity systems using Claude, GitHub Copilot, AI agents, and MCP integrations",
  "Comfortable across testing, backend systems, web delivery, and practical AI deployment",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  const { name, title, location, contact, about, skills, experience, projects, aiWork, education, certifications, achievements } =
    portfolioData;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.14),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_48%,_#f8fafc_100%)] text-slate-900 transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.12),_transparent_24%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#020617_100%)] dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-4 z-50 mx-auto mb-10 flex max-w-6xl items-center justify-between rounded-full border border-white/50 bg-white/70 px-4 py-3 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/20"
        >
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Portfolio
            </p>
            <p className="font-display text-base font-semibold text-slate-900 dark:text-white">{name}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-slate-300/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 sm:inline-flex"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/60 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -45, scale: 0.85 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </motion.header>

        <main className="space-y-8">
          <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 px-6 py-10 shadow-2xl shadow-slate-300/25 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20 sm:px-10 sm:py-14"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200"
                >
                  <Sparkles size={16} />
                  AI, Automation, and Developer Productivity
                </motion.div>
                <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                  Building intelligent systems that make engineering teams faster and products smarter.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  {title} based in {location}. I work across machine learning, automation testing, internal tooling,
                  and applied AI to deliver practical, recruiter-ready business impact.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-300"
                  >
                    View Projects
                    <ArrowDownRight size={16} />
                  </a>
                  <a
                    href="/Keerthi-Manoja-Potluri-Resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 dark:border-slate-800 dark:bg-slate-950/50">
                    <MapPin size={15} />
                    {location}
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:text-cyan-300"
                  >
                    <Mail size={15} />
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariant}
                  className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-300">
                      <BrainCircuit size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Recruiter Snapshot
                      </p>
                      <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">AI + Impact + Delivery</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {recruiterHighlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariant}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      Specialties
                    </p>
                    <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">ML, NLP, Automation</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Experience across test automation, ML-driven features, AI agents, and internal productivity systems.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-orange-400/20 bg-orange-500/10 p-5 dark:border-orange-300/15 dark:bg-orange-300/10">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-200">
                      Education
                    </p>
                    <p className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{education.degree}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {education.institution} - CGPA {education.cgpa}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20">
              <SectionHeading
                eyebrow="About"
                title="A product-minded engineer shaping modern software with AI."
              />
            </div>
            <div className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20">
              <p className="text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{about}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Current Focus", value: "Applied AI and workflow automation" },
                  { label: "Preferred Impact", value: "Improving engineering speed and system quality" },
                  { label: "Domain Strength", value: "Automation testing, intelligent tooling, machine learning" },
                  { label: "Team Value", value: "Bridging product delivery with practical AI adoption" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/50"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariant}
            className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20"
          >
            <SectionHeading
              eyebrow="Skills"
              title="A balanced toolkit across engineering, machine learning, and delivery."
              description="This stack reflects the blend of production software work, intelligent automation, and practical AI integration that hiring teams look for in modern engineering roles."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.key}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariant}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/50"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    {group.label}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills[group.key].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-500/15 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="experience"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariant}
            className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20"
          >
            <SectionHeading
              eyebrow="Experience"
              title="A timeline of growing ownership across engineering, ML, and product delivery."
            />
            <div className="relative mt-10 space-y-6 before:absolute before:left-5 before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-gradient-to-b before:from-cyan-500 before:to-orange-400 sm:before:left-7">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.role}`}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariant}
                  className="relative ml-0 rounded-[1.6rem] border border-slate-200/80 bg-slate-50/80 p-6 pl-14 dark:border-slate-800 dark:bg-slate-950/55 sm:pl-16"
                >
                  <div className="absolute left-[0.82rem] top-7 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 shadow dark:border-slate-900 sm:left-[1.32rem]" />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">{item.role}</p>
                      <p className="mt-1 text-base font-semibold text-cyan-700 dark:text-cyan-300">{item.company}</p>
                    </div>
                    <div className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                      <p>{item.duration}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {item.description.map((point) => (
                      <div
                        key={point}
                        className="flex gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
                      >
                        <BriefcaseBusiness className="mt-1 shrink-0 text-cyan-600 dark:text-cyan-300" size={16} />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariant}
            className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20"
          >
            <SectionHeading
              eyebrow="Projects"
              title="Selected projects that translate AI and engineering concepts into visible outcomes."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariant}
                  className="group rounded-[1.6rem] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900/80"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
                    <Lightbulb className="shrink-0 text-orange-500 dark:text-orange-300" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-300/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="ai-work"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariant}
            className="rounded-[2rem] border border-cyan-400/20 bg-slate-950 p-7 text-white shadow-xl shadow-cyan-950/20"
          >
            <SectionHeading
              eyebrow="AI Work"
              title={aiWork.title}
              description="This is the part of the profile that differentiates the portfolio: practical use of AI tools to improve delivery, code quality, validation workflows, and engineering throughput."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-4">
                {aiWork.description.map((point, index) => (
                  <motion.div
                    key={point}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariant}
                    className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex gap-3">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <BrainCircuit size={18} />
                      </div>
                      <p className="text-sm leading-7 text-slate-200">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="rounded-[1.7rem] border border-orange-300/15 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">Why It Matters</p>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
                  <p>
                    This work shows more than tool usage. It demonstrates the ability to identify workflow friction,
                    operationalize AI responsibly, and turn experimentation into repeatable engineering leverage.
                  </p>
                  <p>
                    For recruiters and hiring managers, it signals readiness for roles spanning applied AI, platform
                    engineering, automation, quality engineering, and intelligent product development.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.section
              id="certifications"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={sectionVariant}
              className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20"
            >
              <SectionHeading
                eyebrow="Certifications"
                title="Credentials that support the engineering and AI narrative."
              />
              <div className="mt-8 space-y-3">
                {certifications.map((item, index) => (
                  <motion.div
                    key={item}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariant}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={sectionVariant}
              className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20"
            >
              <SectionHeading
                eyebrow="Education & Achievements"
                title="Academic foundation backed by competitive and creative discipline."
              />
              <div className="mt-8 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/50">
                <p className="text-xl font-bold text-slate-900 dark:text-white">{education.degree}</p>
                <p className="mt-2 text-sm leading-6 text-cyan-700 dark:text-cyan-300">{education.institution}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {education.duration} - CGPA {education.cgpa}
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariant}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-4 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionVariant}
            className="rounded-[2rem] border border-white/60 bg-white/75 p-7 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/20"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Let's build modern products, AI workflows, and better engineering systems."
                  description="This portfolio is designed to make it easy for recruiters and teams to see practical AI experience, software depth, and delivery readiness at a glance."
                />
              </div>
              <div className="grid gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-between rounded-[1.5rem] border border-slate-200/80 bg-slate-50/70 p-5 transition hover:border-cyan-400/50 dark:border-slate-800 dark:bg-slate-950/50"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="text-cyan-600 dark:text-cyan-300" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Email
                      </p>
                      <p className="mt-1 text-sm text-slate-800 dark:text-slate-200">{contact.email}</p>
                    </div>
                  </div>
                  <ArrowDownRight size={18} className="text-slate-400" />
                </a>

                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-between rounded-[1.5rem] border border-slate-200/80 bg-slate-50/70 p-5 transition hover:border-cyan-400/50 dark:border-slate-800 dark:bg-slate-950/50"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="text-cyan-600 dark:text-cyan-300" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        Phone
                      </p>
                      <p className="mt-1 text-sm text-slate-800 dark:text-slate-200">{contact.phone}</p>
                    </div>
                  </div>
                  <ArrowDownRight size={18} className="text-slate-400" />
                </a>

                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={contact.github !== "ADD_LINK" ? contact.github : "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/70 p-5 transition hover:border-cyan-400/50 dark:border-slate-800 dark:bg-slate-950/50"
                  >
                    <Github className="text-slate-900 dark:text-white" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">GitHub</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {contact.github !== "ADD_LINK" ? "View profile" : "Add link in data file"}
                      </p>
                    </div>
                  </a>
                  <a
                    href={contact.linkedin !== "ADD_LINK" ? contact.linkedin : "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/70 p-5 transition hover:border-cyan-400/50 dark:border-slate-800 dark:bg-slate-950/50"
                  >
                    <Linkedin className="text-slate-900 dark:text-white" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {contact.linkedin !== "ADD_LINK" ? "View profile" : "Add link in data file"}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

export default App;
