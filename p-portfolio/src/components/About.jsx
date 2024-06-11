import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="bg-gray-900" id="abt">
      <div className="max-w-3xl mx-auto">
        <motion.p
          ref={ref}
          
          
          className="text-gray-300 text-xl mt-6 leading-8 py-20"
          
        >
          I specialize in creating scalable web applications and have a strong focus on backend development. With a solid foundation in fullstack development, I enjoy leveraging my skills to build robust and efficient solutions.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
