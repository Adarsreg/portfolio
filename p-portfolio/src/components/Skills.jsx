import {
  FaNodeJs,
  FaReact,
  FaAws,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiTailwindcss,
  SiSpringboot,
} from "react-icons/si";
import { SectionHead, Reveal } from "./Primitives";

// `hover` holds a literal Tailwind class (kept whole so JIT can see it) that
// reveals each technology's real brand colour on hover.
const GROUPS = [
  {
    label: "Frontend",
    items: [
      { icon: <SiNextdotjs />, name: "Next.js", hover: "group-hover:text-ink" },
      { icon: <FaReact />, name: "React", hover: "group-hover:text-[#61DAFB]" },
      { icon: <SiTypescript />, name: "TypeScript", hover: "group-hover:text-[#3178C6]" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", hover: "group-hover:text-[#06B6D4]" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: <FaJava />, name: "Java", hover: "group-hover:text-[#E76F00]" },
      { icon: <SiSpringboot />, name: "Spring Boot", hover: "group-hover:text-[#6DB33F]" },
      { icon: <FaNodeJs />, name: "Node.js", hover: "group-hover:text-[#5FA04E]" },
      { icon: <SiExpress />, name: "Express", hover: "group-hover:text-ink" },
    ],
  },
  {
    label: "Data & Infra",
    items: [
      { icon: <SiMongodb />, name: "MongoDB", hover: "group-hover:text-[#47A248]" },
      { icon: <SiPostgresql />, name: "PostgreSQL", hover: "group-hover:text-[#4169E1]" },
      { icon: <SiRedis />, name: "Redis", hover: "group-hover:text-[#DC382D]" },
      { icon: <FaAws />, name: "AWS", hover: "group-hover:text-[#FF9900]" },
      { icon: <FaDocker />, name: "Docker", hover: "group-hover:text-[#2496ED]" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="stack" className="scroll-mt-24" aria-labelledby="stack-head">
      <SectionHead title="Stack" meta="Tools & frameworks" id="stack-head" />

      <div className="border-t border-rule-2">
        {GROUPS.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.06}>
            <div className="grid grid-cols-12 items-start gap-y-6 border-b border-rule py-8 md:py-10">
              <div className="col-span-12 md:col-span-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="font-mono text-lg md:text-xl font-light leading-none text-accent"
                    aria-hidden="true"
                  >
                    +
                  </span>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-ink">
                    {g.label}
                  </h3>
                </div>
              </div>

              <ul
                className="col-span-12 md:col-span-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4"
                role="list"
              >
                {g.items.map((it) => (
                  <li key={it.name} className="group flex items-center gap-3">
                    <span
                      className={`text-xl text-ink-3 transition-colors duration-300 ${it.hover}`}
                      aria-hidden="true"
                    >
                      {it.icon}
                    </span>
                    <span className="text-base md:text-lg font-semibold tracking-tight text-ink-2 transition-colors duration-300 group-hover:text-ink">
                      {it.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
