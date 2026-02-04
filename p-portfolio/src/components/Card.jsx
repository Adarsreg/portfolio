
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Card = ({ children, className = '', title }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ scale: 1.005, translateY: -2 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2rem] bg-glass p-8 backdrop-blur-3xl border border-white/5 shadow-2xl hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-transform ${className}`}
    >
        {/* Spotlight Effect */}
        <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(99, 102, 241, 0.1),
                        transparent 80%
                    )
                `,
            }}
        />
        
        {/* Spotlight Border */}
         <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(99, 102, 241, 0.4),
                        transparent 40%
                    )
                `,
            }}
            aria-hidden="true"
        />

        {/* Previous Border Shine (Static fallback/compliment) */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-expo" />


      {title && (
        <h3 className="mb-6 text-base font-bold font-mono uppercase tracking-[0.2em] text-white drop-shadow-md">{title}</h3>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
