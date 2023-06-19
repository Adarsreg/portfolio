import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-900" id="abt">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="text-white text-3xl lg:text-4xl font-semibold text-center py-8"
          style={{ fontFamily: 'Montserrat' }}
        >
          Fullstack Developer with a Passion for Backend Development
        </motion.p>
        <div>
          <p className="text-gray-300 text-xl mt-6 leading-8 py-20">
            I specialize in creating scalable web applications and have a strong focus on backend development. With a solid foundation in fullstack development, I enjoy leveraging my skills to build robust and efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
