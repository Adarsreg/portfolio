import { motion } from 'framer-motion';

const Card = ({ children, className = '', title }) => {
  return (
    <motion.div
      whileHover={{}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative bg-white dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-zinc-300 dark:border-white/10 p-6 sm:p-8 md:p-12 rounded-[24px] shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.04)] hover:border-zinc-400 dark:hover:border-white/20 transition-all duration-500 ${className}`}
    >
      {title && (
        <h3 className="mb-6 text-[11px] font-bold font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">{title}</h3>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
