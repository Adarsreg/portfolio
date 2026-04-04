import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-[90vw] md:w-auto mx-auto pointer-events-none">
            {/* Main Pill Navbar */}
            <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                aria-label="Main navigation"
                className="w-full md:w-auto flex items-center justify-between px-6 py-2.5 gap-6 md:gap-8 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md border border-light-border dark:border-dark-border rounded-full shadow-soft transition-all duration-300 pointer-events-auto"
            >
                 <div className="flex items-center gap-2 md:mr-4">
                    <span className="font-mono text-xs font-black tracking-widest uppercase text-light-text-primary dark:text-dark-text-primary select-none" aria-label="A.S. — Adarsh Sharma">A.S.</span>
                </div>
                
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-light-text-secondary dark:text-dark-text-secondary" role="list">
                     <a href="#about" className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors" role="listitem">About</a>
                     <a href="#experience" className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors" role="listitem">Experience</a>
                     <a href="#works" className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors" role="listitem">Works</a>
                     <a href="#skills" className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors" role="listitem">Expertise</a>
                     <a href="#contact" className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors" role="listitem">Contact</a>
                </div>

                <div className="hidden md:block w-px h-3 bg-light-border dark:bg-dark-border mx-2" aria-hidden="true"></div>
                    
                <div className="flex items-center gap-4">
                    <button 
                        onClick={toggleTheme} 
                        className="flex justify-center items-center w-7 h-7 rounded-full bg-light-input dark:bg-dark-elevated text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary hover:bg-light-border dark:hover:bg-dark-border transition-all border border-light-border dark:border-dark-border"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? <FaSun className="text-[12px]" aria-hidden="true" /> : <FaMoon className="text-[12px]" aria-hidden="true" />}
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex justify-center items-center w-7 h-7 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav-menu"
                    >
                        {isOpen ? <FaTimes className="text-[14px]" aria-hidden="true" /> : <FaBars className="text-[14px]" aria-hidden="true" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Dropdown Menu Capsule */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        id="mobile-nav-menu"
                        role="navigation"
                        aria-label="Mobile navigation"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="mt-4 w-full md:hidden flex flex-col items-center py-6 gap-6 bg-light-card/90 dark:bg-dark-card/90 backdrop-blur-xl border border-light-border dark:border-dark-border rounded-3xl shadow-2xl pointer-events-auto"
                    >
                        <div className="flex flex-col items-center gap-6 text-[11px] font-bold tracking-[0.2em] uppercase text-light-text-secondary dark:text-dark-text-secondary">
                            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">About</a>
                            <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">Experience</a>
                            <a href="#works" onClick={() => setIsOpen(false)} className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">Works</a>
                            <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">Expertise</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">Contact</a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;
