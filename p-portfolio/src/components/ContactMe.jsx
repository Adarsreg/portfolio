import { SectionHead, MaskText, Reveal, ArrowUR } from "./Primitives";

const SOCIALS = [
  { label: "Email", handle: "adarshregmi1@gmail.com", href: "mailto:adarshregmi1@gmail.com" },
  { label: "GitHub", handle: "@Adarsreg", href: "https://github.com/Adarsreg" },
  { label: "LinkedIn", handle: "in/adarsh-sharma", href: "https://www.linkedin.com/in/adarsh-sharma-0635b921a/" },
  { label: "Twitter / X", handle: "@adarshregmi", href: "https://twitter.com/adarshregmi" },
];

const ContactMe = () => {
  return (
    <section id="link" className="scroll-mt-24" aria-labelledby="link-head">
      <SectionHead title="Contact" id="link-head" />

      <div className="grid grid-cols-12 gap-y-14 gap-x-8">
        {/* CTA */}
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-ink text-[clamp(2.6rem,8vw,7rem)] font-black leading-[0.86] tracking-tightest">
            <MaskText lines={["LET'S WORK", "TOGETHER"]} />
          </h2>

          <Reveal delay={0.15}>
            <p className="select-text mt-8 max-w-md text-base md:text-lg leading-relaxed text-ink-2">
              Have a project in mind, or just want to say hello? Drop a line. I
              read every message and usually reply the same day.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <a
              href="mailto:adarshregmi1@gmail.com"
              className="group mt-8 inline-flex items-center gap-3 border-b-2 border-ink pb-2 text-lg font-medium text-ink transition-colors hover:border-accent hover:text-accent md:text-2xl"
            >
              <span className="select-text">adarshregmi1@gmail.com</span>
              <ArrowUR className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>

        {/* Social ledger */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <span className="label mb-4 block">Elsewhere</span>
          <ul className="border-t border-rule-2">
            {SOCIALS.map((s) => (
              <li key={s.label} className="border-b border-rule">
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4"
                  aria-label={`${s.label} (opens in new tab)`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className="font-mono text-base font-light leading-none text-accent"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="text-base md:text-lg font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-accent">
                      {s.label}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="hidden font-mono text-xs text-ink-3 sm:block">
                      {s.handle}
                    </span>
                    <ArrowUR className="text-ink-3 transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
