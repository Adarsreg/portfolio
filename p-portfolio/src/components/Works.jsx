import React from 'react';
import ProjectCard from '../layouts/Projectcard';
import projects from '../data/projects';

const Works = () => {
    return (
        <div className="bg-slate-900 py-10 rounded-3xl mx-auto max-w-6xl shadow-lg">
            <div className="max-w-2xl mx-auto">
                <p className="-mt-15 lg:text-2xl my-20 text-purple-500 mt-10 font-semibold text-center text-2xl">
                    Here are some of my projects...
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
        </div>
    );
};

export default Works;
