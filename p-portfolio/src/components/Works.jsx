import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../layouts/Projectcard';
import projects from '../data/projects';

const Works = () => {
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
                className="bg-slate-900 py-24 rounded-3xl mx-auto max-w-6xl shadow-lg"
                id="wrks"
                initial={skillsAnimated ? 'hidden' : false}
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <div className="max-w-2xl mx-auto">
                    <p
                        className="-mt-10 lg:text-2xl my-10 text-purple-500 font-semibold text-center text-xl"
                        style={{ fontFamily: 'Montserrat' }}
                    >
                        HERE ARE SOME OF MY PROJECTS
                    </p>
                    <div className="space-y-6">
                        {projects.map((project) => (
                            <div className="mb-6" key={project.title}>
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imageUrl={project.imageUrl}
                                    liveUrl={project.liveUrl}
                                    sourceUrl={project.sourceUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Works;

