import React from 'react';

const ProjectCard = ({ title, description, imageUrl, liveUrl, sourceUrl }) => {
    return (
        <div className="rounded-md overflow-hidden border border-gray-800 shadow-lg bg-gray-900">
            <div className="md:flex">
                <div className="md:w-3/5">
                    <img src={imageUrl} className="w-full h-90 object-contain" alt={title} />
                </div>
                <div className="flex flex-col justify-center px-6 py-4 md:w-2/5">
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-white text-center">{title}</h2>
                        <p className="text-gray-300 mt-2">{description}</p>
                    </div>
                    <div className="flex justify-start">
                        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-1 px-2 mr-20 text-gray-300 bg-gray-700 hover:bg-gray-800 rounded-lg text-sm">
                            <i className="fab fa-github mr-1"></i> GitHub
                        </a>
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-1 px-2 text-gray-300 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm">
                            <i className="fas fa-external-link-alt mr-1"></i> Deployed
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
