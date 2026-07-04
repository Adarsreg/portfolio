import { motion, useReducedMotion } from "framer-motion";
import { SectionHead, ArrowUR } from "./Primitives";
import keysightLogo from "../images/keysight.png";
import ksuLogo from "../images/ksu.png";

const getDynamicPeriod = () => {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  let totalMonths = (currentYear - 2025) * 12 + (currentMonth - 7) + 1;
  if (totalMonths >= 12) {
    const yrs = Math.floor(totalMonths / 12);
    const mos = totalMonths % 12;
    return `Jul 2025 to Present · ${yrs}y${mos > 0 ? ` ${mos}m` : ""}`;
  }
  return `Jul 2025 to Present · ${totalMonths}m`;
};

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Keysight Technologies",
    period: getDynamicPeriod(),
    summary:
      "Building and shipping fullstack features across internal web platforms, owning the work from data model to interface.",
    logo: keysightLogo,
    url: "https://www.linkedin.com/company/keysight-technologies",
  },
  {
    role: "Frontend Developer",
    company: "Keysight Technologies",
    tag: "Internship",
    period: "Jul 2024 to Jun 2025",
    summary:
      "Developed responsive, accessible UI components and improved frontend performance across the product surface.",
    logo: keysightLogo,
    url: "https://www.linkedin.com/company/keysight-technologies",
  },
  {
    role: "Backend Developer",
    company: "Khangchendzonga State University",
    tag: "Internship",
    period: "Jun 2023 to Aug 2023",
    summary:
      "Built backend services and REST APIs supporting internal university systems and data workflows.",
    logo: ksuLogo,
    url: "https://in.linkedin.com/school/vinayaka-missions-sikkim-university-tadong/",
  },
];

const Row = ({ exp, index }) => {
  const reduce = useReducedMotion();
  return (
    <motion.li
      initial={{ opacity: 0, y: reduce ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group border-b border-rule"
    >
      <div className="grid grid-cols-12 gap-y-4 gap-x-8 py-8 md:py-11">
        {/* meta */}
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono text-sm text-ink-2">{exp.period}</div>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-rule bg-white">
              <img src={exp.logo} alt="" className="h-full w-full object-contain p-1" />
            </span>
            <span className="text-sm md:text-base font-semibold text-ink">
              {exp.company}
            </span>
          </div>
          {exp.tag && <span className="label mt-2 block text-accent">{exp.tag}</span>}
        </div>

        {/* main */}
        <div className="col-span-12 md:col-span-8">
          <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
            {exp.role}
          </h3>
          <p className="select-text mt-3 max-w-xl text-sm md:text-base leading-relaxed text-ink-2">
            {exp.summary}
          </p>
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-2 hover:text-ink"
            aria-label={`${exp.company} on LinkedIn (opens in new tab)`}
          >
            LinkedIn <ArrowUR className="text-[0.9em]" />
          </a>
        </div>
      </div>
    </motion.li>
  );
};

const Experience = () => {
  return (
    <section id="log" className="scroll-mt-24" aria-labelledby="log-head">
      <SectionHead title="Experience" meta="Recent first" id="log-head" />
      <ol className="border-t border-rule-2">
        {experiences.map((exp, i) => (
          <Row key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
        ))}
      </ol>
    </section>
  );
};

export default Experience;
