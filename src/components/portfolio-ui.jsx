import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, House, Linkedin, Mail, Moon, Phone, SunMedium } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { guidedPages, routeSequence, getStepIndex } from "../site";

export const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const starField = [
  { top: "8%", left: "10%", size: "h-1.5 w-1.5", delay: 0.2 },
  { top: "18%", left: "78%", size: "h-1 w-1", delay: 1.4 },
  { top: "24%", left: "54%", size: "h-1.5 w-1.5", delay: 2.2 },
  { top: "37%", left: "84%", size: "h-1 w-1", delay: 0.8 },
  { top: "44%", left: "16%", size: "h-1.5 w-1.5", delay: 1.8 },
  { top: "58%", left: "67%", size: "h-1 w-1", delay: 2.8 },
  { top: "72%", left: "22%", size: "h-1.5 w-1.5", delay: 1.1 },
  { top: "80%", left: "90%", size: "h-1 w-1", delay: 2.5 },
];

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-amber-200/70">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-none tracking-[0.04em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function Surface({ children, className = "", bgImage = "", bgPosition = "center" }) {
  return (
    <div
      className={`relative rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,13,21,0.60),rgba(5,8,16,0.70))] shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-md ${className}`}
    >
      {bgImage ? (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-cover bg-no-repeat opacity-30 z-0"
          style={{ backgroundImage: `url('${bgImage}')`, backgroundPosition: bgPosition }}
        />
      ) : null}
      {bgImage ? (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(10,13,21,0.30),rgba(5,8,16,0.50))] z-0" />
      ) : null}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_78%_20%,_rgba(217,179,103,0.10),transparent_22%)] z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function PageFrame({ children, className = "" }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 18, transition: { duration: 0.25 } }}
      variants={sectionVariant}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function AppShell({ children, theme, onToggleTheme, contact }) {
  const location = useLocation();
  const currentStep = getStepIndex(location.pathname);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,_rgba(2,4,10,0.96)_0%,_rgba(4,7,14,0.98)_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-amber-200/5 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-white/4 blur-3xl" />
        {starField.map((star) => (
          <motion.span
            key={`${star.top}-${star.left}`}
            className={`absolute rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.7)] ${star.size}`}
            style={{ top: star.top, left: star.left }}
            animate={{ opacity: [0.25, 1, 0.35], scale: [1, 1.35, 1] }}
            transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, delay: star.delay }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-50 mb-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <Link to="/" className="min-w-0">
              <p className="font-display text-xs uppercase tracking-[0.38em] text-amber-200/65">Portfolio</p>
              <p className="truncate font-display text-xl font-semibold tracking-[0.08em] text-white">
                Keerthi Manoja
              </p>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {guidedPages.map((page) => (
                <NavLink
                  key={page.path}
                  to={page.path}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm transition ${
                      isActive
                        ? "border border-amber-200/25 bg-white/8 text-white"
                        : "text-slate-300 hover:text-white"
                    }`
                  }
                >
                  {page.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={contact.github !== "ADD_LINK" ? contact.github : "#"}
                target="_blank"
                rel="noreferrer"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-amber-200/35 hover:text-white sm:inline-flex"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={contact.linkedin !== "ADD_LINK" ? contact.linkedin : "#"}
                target="_blank"
                rel="noreferrer"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-amber-200/35 hover:text-white sm:inline-flex"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-amber-200/40 hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </header>

        {currentStep >= 0 ? <ProgressDots currentStep={currentStep} /> : null}

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

function ProgressDots({ currentStep }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
        {currentStep + 1} / {guidedPages.length}
      </span>
      <div className="flex items-center gap-2">
        {guidedPages.map((page, index) => (
          <span
            key={page.path}
            className={`h-1.5 rounded-full transition-all ${
              index === currentStep ? "w-8 bg-amber-200" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function GuidedFooter({ nextLabel, nextTo, showHome = true }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = routeSequence.indexOf(location.pathname);

  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        {showHome ? (
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-200/35 hover:text-white"
          >
            <House size={15} />
            Home
          </Link>
        ) : null}
        {currentIndex > 1 ? (
          <button
            type="button"
            onClick={() => navigate(routeSequence[currentIndex - 1])}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-200/35 hover:text-white"
          >
            <ArrowLeft size={15} />
            Back
          </button>
        ) : null}
      </div>

      <Link
        to={nextTo}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-100/20 bg-[#9f7a2a] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(159,122,42,0.28)] transition hover:scale-[1.01] hover:bg-[#b3892f]"
      >
        {nextLabel}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export function ContactCards({ contact }) {
  return (
    <div className="grid gap-4">
      <a
        href={`mailto:${contact.email}`}
        className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-amber-200/35"
      >
        <div className="flex items-center gap-3">
          <Mail className="text-amber-100" />
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
            <p className="mt-1 text-sm text-slate-100">{contact.email}</p>
          </div>
        </div>
        <ArrowRight size={18} className="text-slate-400" />
      </a>

      <a
        href={`tel:${contact.phone.replace(/\s+/g, "")}`}
        className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-amber-200/35"
      >
        <div className="flex items-center gap-3">
          <Phone className="text-amber-100" />
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Phone</p>
            <p className="mt-1 text-sm text-slate-100">{contact.phone}</p>
          </div>
        </div>
        <ArrowRight size={18} className="text-slate-400" />
      </a>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={contact.github !== "ADD_LINK" ? contact.github : "#"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-amber-200/35"
        >
          <Github className="text-white" />
          <div>
            <p className="text-sm font-medium text-white">GitHub</p>
            <p className="text-xs text-slate-400">
              {contact.github !== "ADD_LINK" ? "Open profile" : "Add link in data file"}
            </p>
          </div>
        </a>
        <a
          href={contact.linkedin !== "ADD_LINK" ? contact.linkedin : "#"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-amber-200/35"
        >
          <Linkedin className="text-white" />
          <div>
            <p className="text-sm font-medium text-white">LinkedIn</p>
            <p className="text-xs text-slate-400">
              {contact.linkedin !== "ADD_LINK" ? "Open profile" : "Add link in data file"}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
