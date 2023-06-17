import React from 'react';
import ProjectCard from '../layouts/Projectcard';
import notegpt from '../images/notegpt.png';

const Works = () => {
    return (
        <div className="bg-slate-900 py-10 rounded-3xl mx-auto max-w-6xl shadow-lg">
            <div className="max-w-2xl mx-auto">
                <p className="-mt-15 lg:text-2xl my-20 text-purple-500 mt-10 font-semibold text-center text-2xl">Here are some of my projects...</p>

                <ProjectCard
                    title="NOTEGPT"
                    description="Notes app integrated with ChatGPT's API"
                    imageUrl={notegpt}
                    liveUrl=""
                    sourceUrl="https://github.com/Adarsreg/Notegpt"
                />
            </div>
        </div>
    );
};

export default Works;
