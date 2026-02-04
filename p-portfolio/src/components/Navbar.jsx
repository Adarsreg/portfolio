
import { motion } from 'framer-motion';

const NavBar = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center px-4 py-2"
        >
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2">
                 <div className="h-[2px] w-2 bg-emerald-500 animate-pulse"></div>
                 <div className="text-xs md:text-sm text-emerald-500 font-mono tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                    Digital Identity
                 </div>
            </div>
        </motion.div>
    );
};

export default NavBar;
