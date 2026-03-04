import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col justify-center p-8 md:p-12 h-full gap-6">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl leading-relaxed text-left font-light"
      >
        I engineer <span className="text-zinc-900 dark:text-white font-medium drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">high-performance systems</span> and craft intuitive digital experiences.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-zinc-500 dark:text-zinc-500 text-md md:text-lg leading-relaxed text-left"
      >
        Bridging the gap between scalable <span className="text-zinc-800 dark:text-zinc-300">backend architectures</span> and pixel-perfect <span className="text-zinc-800 dark:text-zinc-300">frontend interfaces.</span>
      </motion.p>
      
      <div className="mt-4 pt-6 border-t border-zinc-200 dark:border-white/5 flex gap-12">
           <div className="flex flex-col">
               <span className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">1+</span>
               <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-600 font-bold">Years Exp.</span>
           </div>
           <div className="flex flex-col">
               <span className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">10+</span>
               <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-600 font-bold">Projects Contributed</span>
               <span className="text-[10px] md:text-xs font-mono text-zinc-400 dark:text-zinc-400 mt-2 lowercase max-w-[250px] leading-relaxed tracking-tight">
                  involving greenstand org, vercel, nextauth.js & appwrite
               </span>
           </div>
      </div>
    </div>
  );
};

export default About;
