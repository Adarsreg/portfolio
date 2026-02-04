
import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Works = () => {
    return (
        <div className="h-full overflow-y-auto pr-2 scrollbar-hide p-2 mask-gradient-b">
            <div className="grid grid-cols-1 gap-4">
                {projects.map((project) => (
                    <motion.div
                        className="group/work relative h-96 w-full rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/10 transition-all duration-500 ease-expo hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.3)] hover:border-white/20 hover:-translate-y-2"
                        key={project.title}
                        whileHover={{ scale: 1.005 }}
                    >
                        {/* Browser Window Header */}
                        <div className="absolute top-0 inset-x-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20 backdrop-blur-md">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                            {/* Address Bar Mockup */}
                            <div className="ml-4 flex-1 h-4 rounded-full bg-white/5 flex items-center px-3">
                                <span className="text-[10px] text-white/20 font-mono truncate">{project.liveUrl ? new URL(project.liveUrl).hostname : 'localhost:3000'}</span>
                            </div>
                        </div>

                        {/* Image Scroll Effect Container */}
                        <div className="absolute inset-0 top-8 w-full h-full overflow-hidden bg-zinc-950">
                             <img 
                                src={project.imageUrl} 
                                alt={project.title}
                                className="w-full h-auto object-cover transition-transform duration-[5s] ease-in-out group-hover/work:-translate-y-[calc(100%-20rem)]"
                                style={{ transformOrigin: 'top' }}
                                loading="lazy"
                            />
                        </div>
                        
                        {/* Gradient Layer */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover/work:opacity-70 transition-all duration-300 pointer-events-none" />

                        {/* Content Layer - Always Visible */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12">
                             <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-white text-2xl tracking-tight drop-shadow-md">{project.title}</h4>
                                <div className="flex gap-3 text-xs font-bold text-white/90">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors border border-white/10 shadow-lg group-hover/work:bg-white/20">
                                            LIVE
                                        </a>
                                    )}
                                    {project.sourceUrl && (
                                        <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors border border-white/10 shadow-lg group-hover/work:bg-white/20">
                                            CODE
                                        </a>
                                    )}
                                </div>
                             </div>
                             <p className="text-sm text-gray-200 line-clamp-2 leading-relaxed font-medium drop-shadow-sm">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Works;
