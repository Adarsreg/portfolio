
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
                ease: [0.16, 1, 0.3, 1] // Apple-style ease-out-expo
            }
        }
    };

    return (
        <div className="h-full flex flex-col items-center justify-center p-8">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center"
            >
                <motion.h1
                    className="text-center text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4 leading-tight"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    variants={item}
                >
                    Adarsh Sharma
                </motion.h1>
                <motion.p
                    className="text-center text-xs md:text-sm text-zinc-300 mb-8 font-medium uppercase tracking-[0.25em] border-y border-white/5 py-3 px-6 bg-white/5 backdrop-blur-sm rounded-full"
                    variants={item}
                >
                    Building Scalable Systems
                </motion.p>
                
                <motion.div
                    variants={item}
                    className="relative group mt-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                     <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-50 animate-pulse group-hover:opacity-75 transition-opacity duration-700" />
                    <div className="relative rounded-full border border-white/10 p-2 bg-black/20 backdrop-blur-md">
                         <div className="rounded-full overflow-hidden w-48 h-48 md:w-56 md:h-56 grayscale-0 group-hover:grayscale-0 transition-all duration-700 ease-expo">
                            <img
                                src={pfp}
                                alt="Avatar"
                                className="object-cover object-[50%_15%] w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-expo"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Header;
