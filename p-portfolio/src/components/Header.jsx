import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import pfp from '../images/pfpp.jpg';

const Header = () => {
    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
    };

    const avatarVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeOut' } },
    };

    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    return (
        <div className="bg-gray-900 py-1">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.h1
                    className="text-center text-4xl md:text-5xl font-bold text-purple-500 tracking-tight mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                    
                >
                    Hi, I'm Adarsh Sharma
                </motion.h1>
                <motion.p
                    className="text-center text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    FullStack Developer | OpenSource Enthusiast
                </motion.p>
                <motion.div
                    className="flex justify-center"
                    transition={{ duration: 0.2, ease: 'easeIn' }}
                    
                    whileHover={{ scale: 1.05 }}
                    
                    
                >
                    <div className="rounded-full border-4 border-white overflow-hidden mt-10">
                        <motion.img
                            src={pfp}
                            alt="Avatar"
                            className="object-center h-60 md:h-80"
                            style={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0, scale: 1 }}
                            transition={{ duration: 0.5, ease: 'easeIn' }}

                            
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Header;
