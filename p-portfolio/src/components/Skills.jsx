import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiMongodb, DiNodejsSmall } from 'react-icons/di';
import { RiNextjsFill } from 'react-icons/ri';
const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px', // Adjust the root margin as needed
    });
    const [skillsAnimated, setSkillsAnimated] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, x: '-100%' },
        visible: {
            opacity: 1,
            x: '0%',
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    useEffect(() => {
        if (inView) {
            setSkillsAnimated(true);
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <motion.div
                className="py-24 px-4 lg:px-8 bg-gray-800"
                id="skls"
                initial={skillsAnimated ? 'hidden' : false}
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <p
                    className="text-white text-2xl lg:text-3xl text-center mb-6 py-20"
                    style={{ fontFamily: 'Montserrat' }}
                >
                    Here are some of the technologies I love working with...
                </p>
                <div className="flex flex-wrap justify-center">
                     <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <RiNextjsFill className="text-4xl lg:text-6xl text-white mr-2" title="Next.js" />
                        <span className="text-white text-base lg:text-xl font-semibold">Next.js</span>
                    </motion.div> 
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <FaReact className="text-4xl lg:text-6xl text-blue-500 mr-2" title="React" />
                        <span className="text-white text-base lg:text-xl font-semibold">React</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <FaNodeJs className="text-4xl lg:text-6xl text-green-500 mr-2" title="Node.js" />
                        <span className="text-white text-base lg:text-xl font-semibold">Node.js</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <DiNodejsSmall className="text-4xl lg:text-6xl text-green-500 mr-2" title="Express" />
                        <span className="text-white text-base lg:text-xl font-semibold">Express</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <FaDatabase className="text-4xl lg:text-6xl text-purple-500 mr-2" title="Database" />
                        <span className="text-white text-base lg:text-xl font-semibold">Database</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <FaHtml5 className="text-4xl lg:text-6xl text-red-500 mr-2" title="HTML5" />
                        <span className="text-white text-base lg:text-xl font-semibold">HTML5</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <FaCss3 className="text-4xl lg:text-6xl text-blue-500 mr-2" title="CSS3" />
                        <span className="text-white text-base lg:text-xl font-semibold">CSS3</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <SiTypescript className="text-4xl lg:text-6xl text-blue-500 mr-2" title="TypeScript" />
                        <span className="text-white text-base lg:text-xl font-semibold">TypeScript</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center mx-4 my-2 lg:my-0"
                        whileHover={{ scale: 1.1 }}
                    >
                        <DiMongodb className="text-4xl lg:text-6xl text-green-500 mr-2" title="MongoDB" />
                        <span className="text-white text-base lg:text-xl font-semibold">MongoDB</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;

