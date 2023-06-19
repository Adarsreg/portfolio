import React from 'react';
import ProjectCard from '../layouts/Projectcard';
import projects from '../data/projects';

const Works = () => {
    return (
        <div className="bg-slate-900 py-24 rounded-3xl mx-auto max-w-6xl shadow-lg" id='wrks'>
            <div className="max-w-2xl mx-auto">
                <p className="-mt-10 lg:text-2xl my-10 text-purple-500 font-semibold text-center text-xl" style={{ fontFamily: 'Montserrat' }}>
                    HERE ARE SOME OF MY PROJECTS
                </p>
                <div className="space-y-6">
                    {projects.map((project) => (
                        <div className="mb-6">
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
        </div>
    );
};

export default Works;
