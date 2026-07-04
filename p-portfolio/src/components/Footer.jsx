import CursorField from "./CursorField";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 md:mt-40" aria-label="Site footer">
      <div className="relative -mx-5 overflow-hidden border-t border-rule md:-mx-10">
        {/* interactive texture, sits behind the content */}
        <CursorField />

        <div className="relative px-5 md:px-10">
          <div className="flex min-h-[220px] items-end justify-between gap-6 py-12 md:min-h-[320px]">
            <span className="font-serif text-4xl italic leading-none text-ink md:text-6xl">
              see you around.
            </span>
            <a
              href="#index"
              className="label shrink-0 text-ink transition-colors hover:text-accent"
            >
              ↑ Back to top
            </a>
          </div>

          <div className="flex items-center justify-between border-t border-rule py-6">
            <span className="font-mono text-xs text-ink-2">
              © {year} Adarsh Sharma
            </span>
            <span className="label">Gurgaon, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
