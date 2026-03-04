import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './index.css';
import './font.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden font-sans transition-colors duration-200">
      
      {/* Top subtle gradient for depth - decorative, hidden from screen readers */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-black/[0.02] dark:from-white/[0.02] to-transparent pointer-events-none" aria-hidden="true" />

      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content" className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center" aria-label="Portfolio content">
        
        {/* Section 1: Hero */}
        <section id="home" className="w-full min-h-[90vh] flex flex-col items-center justify-center relative py-32" aria-label="Hero introduction">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="scale-110 md:scale-125 transition-transform duration-[2000ms] cursor-default"
            >
                <Header />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 animate-bounce opacity-50 text-xs font-mono tracking-[0.3em] text-zinc-500 dark:text-zinc-400 uppercase"
                aria-hidden="true"
            >
                Scroll to Explore
            </motion.div>
        </section>

        {/* Section 2: About & Status */}
        <section id="about" className="w-full py-24 md:py-32 flex flex-col md:flex-row gap-16 items-center justify-between" aria-labelledby="about-heading">
           <div className="w-full md:w-[60%] flex flex-col gap-8">
               <motion.div 
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8 }}
               >
                 <Card title="Philosophy" className="min-h-[300px]" headingId="about-heading">
                    <About />
                 </Card>
               </motion.div>
           </div>
           
           <div className="w-full md:w-[35%] flex flex-col gap-8">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="group"
               >
                    {/* SHARPER UI Status Pill */}
                   <div className="flex items-center gap-4 p-8 rounded-[20px] bg-white dark:bg-[#0a0a0a] border border-zinc-200/80 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.03)] hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-500 group-hover:-translate-y-1" role="status" aria-label="Availability status: Online and available for work">
                       <span className="relative flex h-3 w-3 ml-2" aria-hidden="true">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">Availability</span>
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-900 dark:text-white font-bold">Online</span>
                        </div>
                   </div>
               </motion.div>
           </div>
        </section>

        {/* Section 2.5: Experience Timeline */}
        <section id="experience" className="w-full py-24 md:py-32" aria-labelledby="experience-heading">
             <motion.h2 
                 id="experience-heading"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-4xl md:text-5xl font-light tracking-tighter mb-16 text-center text-zinc-500 dark:text-zinc-400 uppercase"
             >
                 Career <span className="text-zinc-900 dark:text-white font-bold">Timeline</span>
             </motion.h2>
             <Card title="Experience Log" className="max-w-4xl mx-auto backdrop-blur-3xl">
                <Experience />
             </Card>
        </section>

        {/* Section 3: Works */}
        <section id="works" className="w-full py-24 md:py-32" aria-labelledby="works-heading">
            <motion.h2 
                id="works-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light tracking-tighter mb-16 text-center text-zinc-500 dark:text-zinc-400 uppercase"
            >
                Selected <span className="text-zinc-900 dark:text-white font-bold">Works</span>
            </motion.h2>
            <Works />
        </section>

        {/* Section 4: Skills */}
        <section id="skills" className="w-full py-24 md:py-32" aria-labelledby="skills-heading">
             <div className="border-t border-zinc-200 dark:border-white/10 w-32 mx-auto mb-16" aria-hidden="true"></div>
             <Card title="Expertise" headingId="skills-heading">
                <Skills />
             </Card>
        </section>

         {/* Section 5: Contact */}
        <section id="contact" className="w-full max-w-5xl min-h-screen py-24 md:py-32 flex flex-col justify-center" aria-labelledby="contact-heading">
            <Card title="Establish Link" className="text-center py-20 bg-transparent blur-none" headingId="contact-heading">
                <ContactMe />
            </Card>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
