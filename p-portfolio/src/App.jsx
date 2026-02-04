
import { motion } from 'framer-motion';
import './index.css';
import './font.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Card from './components/Card';


function App() {
  return (
    <div className="min-h-screen bg-obsidian p-4 md:p-8 text-accent-primary selection:bg-white/20 relative overflow-hidden flex flex-col">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-6 w-full flex-1">
        <NavBar />
        
        {/* Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-max">
          
          {/* Base Static Items */}
          <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-center min-h-[320px]">
            <Header />
          </Card>

          <Card className="md:col-span-1 md:row-span-1 flex items-center justify-center group" title="">
             <div className="flex flex-col items-center gap-4 py-2 w-full">
                <div className="flex items-center gap-3 text-emerald-400 bg-emerald-950/30 px-5 py-2 rounded-full border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)] cursor-default">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest font-bold">Available Now</span>
                </div>
             </div>
          </Card>

          <Card className="md:col-span-1 md:row-span-1" title="About Me">
            <About />
          </Card>

          <Card className="md:col-span-2 md:row-span-2" title="Projects">
             <Works />
          </Card>

          <Card className="md:col-span-1 md:row-span-1" title="Tech Stack">
            <Skills />
          </Card>

          <Card className="md:col-span-1 md:row-span-1 flex flex-col justify-center" title="Let's Connect">
            <ContactMe />
          </Card>

           {/* Footer Line */}
           <div className="md:col-span-3 flex justify-center mt-4 opacity-50 hover:opacity-100 transition-opacity">
               <Footer />
           </div>

        </div>
      </div>
    </div>
  );
}

export default App;
