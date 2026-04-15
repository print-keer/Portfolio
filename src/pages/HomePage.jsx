import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { PageFrame } from "../components/portfolio-ui";
import { portfolioData } from "../portfolioData";

const tags = ["AI", "Automation", "Backend", "ML", "Testing", "Creative Thinking"];

export default function HomePage() {
  const { name, title, location, hero } = portfolioData;

  return (
    <PageFrame className="flex min-h-[78vh] items-center">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,13,21,0.56),rgba(5,8,16,0.86))] px-6 py-14 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-18">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,10,0.38),rgba(2,4,10,0.82)),url('/hero-sky.jpeg')] bg-cover bg-center opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_78%_20%,_rgba(217,179,103,0.10),transparent_22%)]" />
        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm font-medium text-amber-100 backdrop-blur-md"
          >
            {hero.badge}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-5xl font-semibold tracking-[0.08em] text-white sm:text-7xl"
          >
            {name}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mx-auto mt-8 max-w-4xl font-display text-3xl leading-tight text-stone-100 sm:text-5xl"
          >
            {hero.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {title} based in {location}. {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/8 bg-black/20 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-100/20 bg-[#9f7a2a] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(159,122,42,0.28)] transition hover:scale-[1.01] hover:bg-[#b3892f]"
            >
              Explore
              <ArrowRight size={16} />
            </Link>
            <a
              href="/Keerthi-Manoja-Potluri-Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-200/35 hover:bg-white/8"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </PageFrame>
  );
}
