import { Reveal, SectionHead } from "./Primitives";

const INFO = [
  ["Role", "Fullstack Developer"],
  ["Focus", "Systems · Interfaces"],
  ["Experience", "1+ Years"],
  ["Based in", "Gurgaon, India"],
];

const About = () => {
  return (
    <section id="statement" className="scroll-mt-24" aria-labelledby="statement-head">
      <SectionHead title="About" meta="Profile" id="statement-head" />

      <div className="grid grid-cols-12 gap-y-12 gap-x-8">
        {/* Lead essay */}
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <p className="select-text text-[clamp(1.6rem,3.4vw,2.9rem)] font-medium leading-[1.12] tracking-tight text-ink">
              I build the parts people see and the parts they don&apos;t. From{" "}
              <span className="font-serif italic font-normal text-accent">
                scalable backend architectures
              </span>{" "}
              to{" "}
              <span className="font-serif italic font-normal">
                pixel perfect frontends
              </span>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="select-text mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink-2">
              Currently a fullstack developer working across the stack on high
              performance systems. I care about the details that don&apos;t show
              up in a screenshot: latency budgets, sensible data models, and
              interfaces that feel obvious. I&apos;m comfortable owning a feature
              from schema all the way to shipped.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="select-text mt-4 max-w-xl font-mono text-xs leading-relaxed text-ink-3">
              Contributions across Greenstand (org), Vercel, NextAuth.js &amp; Appwrite.
            </p>
          </Reveal>
        </div>

        {/* Details */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.12} x={16}>
            <dl className="border-t border-rule-2">
              {INFO.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 border-b border-rule py-3.5"
                >
                  <dt className="label">{k}</dt>
                  <dd className="select-text text-right font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
