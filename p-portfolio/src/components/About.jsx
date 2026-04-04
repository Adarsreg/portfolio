import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col justify-center p-8 md:p-12 h-full gap-6">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-light-text-secondary dark:text-dark-text-secondary text-lg md:text-2xl leading-relaxed text-left font-light"
      >
        I engineer <span className="text-light-text-primary dark:text-dark-text-primary font-medium drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">high-performance systems</span> and craft intuitive digital experiences.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-light-text-secondary dark:text-dark-text-secondary text-md md:text-lg leading-relaxed text-left"
      >
        Bridging the gap between scalable <span className="text-light-text-primary dark:text-dark-text-primary">backend architectures</span> and pixel-perfect <span className="text-light-text-primary dark:text-dark-text-primary">frontend interfaces.</span>
      </motion.p>
      
      <div className="mt-4 pt-6 border-t border-light-border dark:border-dark-border flex gap-12">
           <div className="flex flex-col">
               <span className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-1">1+</span>
               <span className="text-xs font-mono uppercase tracking-widest text-light-text-secondary dark:text-dark-text-secondary font-bold">Years Exp.</span>
           </div>
           <div className="flex flex-col">
               <span className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-1">10+</span>
               <span className="text-xs font-mono uppercase tracking-widest text-light-text-secondary dark:text-dark-text-secondary font-bold">Projects Contributed</span>
               <span className="text-[10px] md:text-xs font-mono text-light-text-secondary dark:text-dark-text-secondary mt-2 lowercase max-w-[250px] leading-relaxed tracking-tight">
                  involving greenstand org, vercel, nextauth.js & appwrite
               </span>
           </div>
      </div>
    </div>
  );
};

export default About;
