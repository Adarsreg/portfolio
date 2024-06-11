import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Adjust the root margin as needed
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <div ref={ref}>
            <motion.div
                className="bg-gray-900 flex items-center justify-center text-center py-24"
                id="contact"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <motion.div
                    className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 rounded-lg shadow-lg py-20"
                    whileHover={{ scale: 1.1 }}
                     
                     transition={{ duration: 0.25, ease: 'easeIn' }}
                >
                    <motion.h2
                        className="text-4xl font-bold text-purple-500 mb-4"
                        style={{ fontFamily: 'Montserrat' }}
                        variants={iconVariants}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.p className="text-gray-400 mb-8" variants={iconVariants}>
                        Feel free to reach me out! I'll try to get back to you as soon as possible.
                    </motion.p>

                    <div className="flex items-center justify-center space-x-8 mb-8">
                        <motion.a
                            href="mailto:adarshregmi1@gmail.com"
                            className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                            variants={iconVariants}
                        >
                            <FaEnvelope className="w-10 h-10" />
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/adarshregmi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                            variants={iconVariants}
                        >
                            <FaTwitter className="w-10 h-10" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Adarsreg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                            variants={iconVariants}
                        >
                            <FaGithub className="w-10 h-10" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/adarsh-sharma-0635b921a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                            variants={iconVariants}
                        >
                            <FaLinkedin className="w-10 h-10" />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactMe;
