import { motion } from 'framer-motion';

const Card = ({ children, className = '', title, headingId }) => {
  return (
    <motion.div
      whileHover={{}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative bg-light-card dark:bg-dark-card backdrop-blur-2xl border border-light-border dark:border-dark-border p-6 sm:p-8 md:p-12 rounded-[24px] shadow-soft dark:shadow-none dark:hover:dark-card-glow hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-500 ${className}`}
    >
      {title && headingId ? (
        <h2 id={headingId} className="mb-6 text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary">{title}</h2>
      ) : title ? (
        <h3 className="mb-6 text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary">{title}</h3>
      ) : null}
      {children}
    </motion.div>
  );
};

export default Card;
