
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="h-full flex items-center justify-center p-6">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-zinc-400 text-sm md:text-base leading-relaxed text-center font-light max-w-lg mx-auto"
      >
        I craft <span className="text-white font-medium">high-performance digital experiences</span> with a focus on scalability and user-centric design. <span className="block mt-4">Specializing in <span className="text-indigo-300 font-medium tracking-wide">Full Stack</span> development to transform complex challenges into elegant, production-ready solutions.</span>
      </motion.p>
    </div>
  );
};

export default About;
