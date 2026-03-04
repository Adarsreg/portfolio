
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';

const Works = () => {
    return (
        <ul className="flex flex-col gap-24" aria-label="Featured projects">
            {projects.map((project, index) => (
                <motion.li
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 lg:gap-16 items-center group list-none`}
                    key={project.title}
                >
                     {/* Visual Anchor - Flat border, subtle lift, 3D zoom OUTWARD */}
                     <div className="w-full md:w-3/5 relative [perspective:1200px]">
                          <div className="relative overflow-hidden rounded-[20px] z-20 aspect-[16/10] bg-zinc-50 dark:bg-black border border-zinc-200/50 dark:border-white/10 transition-all duration-700 ease-out shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-none dark:group-hover:shadow-[0_30px_60px_rgba(255,255,255,0.08)] md:group-hover:[transform:rotateX(-2deg)_scale(1.03)] group-hover:scale-[1.02] origin-center">
                              {/* Overlay Shadow - decorative */}
                              <div className="absolute inset-0 bg-black/5 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-20 pointer-events-none" aria-hidden="true" />
                              {/* 3D Glass Shine - decorative */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none blend-overlay transform-gpu translate-z-0" aria-hidden="true" />
                              
                              <img
                                 src={project.imageUrl}
                                 alt={`Screenshot of ${project.title}`}
                                 className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-[object-position] duration-[5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:object-bottom transform-gpu translate-z-0 will-change-[object-position]"
                             />
                          </div>
                     </div>

                    {/* Narrative Anchor */}
                    <div className="w-full md:w-2/5 flex flex-col gap-6 z-20">
                         <div className="flex flex-col">
                             <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 tracking-[0.2em] uppercase mb-4" aria-hidden="true">0{index + 1} &mdash; Featured</span>
                             <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-zinc-300 transition-colors duration-300">
                                 {project.title}
                             </h3>
                         </div>
                         
                         <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg font-light">
                             {project.description}
                         </p>

                         <div className="flex gap-4 pt-6">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-zinc-200 transition-all duration-300 text-xs font-bold tracking-[0.15em] uppercase shadow-sm" aria-label={`View ${project.title} live demo (opens in new tab)`}>
                                    <FaExternalLinkAlt aria-hidden="true" /> Live
                                </a>
                            )}
                            {project.sourceUrl && (
                                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-md bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 text-xs font-bold tracking-[0.15em] uppercase shadow-[0_2px_10px_rgb(0,0,0,0.02)]" aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}>
                                    <FaGithub className="text-lg" aria-hidden="true" /> Source
                                </a>
                            )}
                         </div>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
};

export default Works;
