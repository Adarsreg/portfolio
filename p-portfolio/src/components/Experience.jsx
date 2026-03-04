import { motion } from 'framer-motion';
import { FaGraduationCap, FaBuilding } from 'react-icons/fa';

import myndLogo from '../images/mynd.png';
import keysightLogo from '../images/keysight.png';
import ksuLogo from '../images/ksu.png';

const getDynamicPeriod = () => {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentMonth = now.getMonth() + 1; // 1-12
    const currentYear = now.getFullYear();
    
    // July is month 7
    let totalMonths = (currentYear - 2025) * 12 + (currentMonth - 7) + 1;
    
    if (totalMonths >= 12) {
        const yrs = Math.floor(totalMonths / 12);
        const mos = totalMonths % 12;
        return `Jul 2025 - Present (${yrs} yr${mos > 0 ? ` ${mos} mos` : ''})`;
    }
    return `Jul 2025 - Present (${totalMonths} mos)`;
};

const experiences = [
    {
        id: 1,
        role: "Fullstack Developer",
        company: "Mynd Integrated Solutions",
        client: "Client: Keysight Technologies",
        period: getDynamicPeriod(),
        logo: myndLogo,
        url: "https://in.linkedin.com/company/mynd-solutions-private-ltd",
        icon: <FaBuilding />
    },
    {
        id: 2,
        role: "Frontend Developer (Internship)",
        company: "Keysight Technologies",
        period: "Jul 2024 - Jun 2025",
        logo: keysightLogo,
        url: "https://www.linkedin.com/company/keysight-technologies",
        icon: <FaBuilding />
    },
    {
        id: 3,
        role: "Backend Developer (Internship)",
        company: "Khangchendzonga State University",
        period: "Jun 2023 - Aug 2023",
        logo: ksuLogo,
        url: "https://in.linkedin.com/school/vinayaka-missions-sikkim-university-tadong/",
        icon: <FaGraduationCap />
    }
];

const Experience = () => {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 relative">
             {/* Vertical Timeline Line - decorative */}
             <div className="absolute left-[20px] sm:left-[28px] top-6 bottom-6 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true"></div>

            <ol className="flex flex-col gap-12 sm:gap-16" aria-label="Career history">
            {experiences.map((exp, index) => (
                <motion.li 
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start gap-6 sm:gap-10 group list-none"
                >
                    {/* Icon Node */}
                    <div
                        className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-black border border-zinc-200/50 dark:border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-zinc-300 dark:group-hover:border-white/30 group-hover:scale-105 shadow-[0_2px_10px_rgb(0,0,0,0.02)]"
                        aria-hidden="true"
                    >
                        {exp.logo ? (
                            <img src={exp.logo} alt="" className="w-full h-full object-contain p-1 rounded-full bg-white object-center" />
                        ) : (
                             <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 text-sm sm:text-xl">
                                {exp.icon}
                             </span>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-grow pt-1.5 sm:pt-2">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1 sm:gap-3 mb-2">
                             <div className="flex flex-col">
                                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">{exp.role}</h3>
                                {exp.client && (
                                    <span className="text-xs font-mono font-bold tracking-[0.1em] uppercase text-emerald-600 dark:text-emerald-400 mt-1">
                                        {exp.client}
                                    </span>
                                )}
                             </div>
                             <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 xl:whitespace-nowrap bg-zinc-100 dark:bg-white/5 w-fit px-3 py-1 rounded-full border border-black/5 dark:border-white/5 mt-2 xl:mt-0" aria-label={`Period: ${exp.period}`}>
                                 {exp.period}
                             </span>
                        </div>
                        
                        {exp.url ? (
                            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium hover:text-black dark:hover:text-white hover:translate-x-1 transition-all w-fit cursor-pointer" aria-label={`${exp.company} (opens in new tab)`}>
                                {exp.company}
                            </a>
                        ) : (
                             <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium">{exp.company}</span>
                        )}
                    </div>
                </motion.li>
            ))}
            </ol>
        </div>
    );
};

export default Experience;
