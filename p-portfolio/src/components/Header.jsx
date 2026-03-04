import { motion } from 'framer-motion';
import pfp from '../images/unnamed.png';

const Header = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <div className="h-full flex flex-col items-center justify-center p-6">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center"
            >
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center z-10"
                >
                    <div className="mb-6 px-5 py-2 rounded-full border border-zinc-300 dark:border-white/10 bg-white/90 dark:bg-black/50 backdrop-blur-md flex items-center gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.06)] dark:shadow-none hover:scale-105 transition-transform duration-300">
                        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 tracking-[0.2em] uppercase font-bold">Available For Work</span>
                    </div>
                    
                    <h1 className="text-center text-7xl md:text-9xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.85] select-none">
                        ADARSH<br/>SHARMA
                    </h1>
                     <p className="font-mono text-xs md:text-sm text-zinc-500 dark:text-zinc-500 uppercase tracking-[0.5em] mt-8 select-none font-bold">
                        Fullstack Developer
                    </p>
                </motion.div>

                <motion.div
                    variants={item}
                    className="relative group mt-16 w-32 h-32 md:w-48 md:h-48 select-none"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                >
                     {/* Remove intense glow, use subtle sharp border */}
                     <div className="absolute inset-0 rounded-full border border-zinc-200/80 dark:border-white/10 z-20 group-hover:border-zinc-300 dark:group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500" />
                     <div className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden z-10">
                         <img
                            src={pfp}
                            alt="Adarsh"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                     </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Header;
