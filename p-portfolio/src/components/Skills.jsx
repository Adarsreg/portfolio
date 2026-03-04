import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpress, SiSalesforce, SiMongodb, SiRedis, SiPostgresql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
             <div className="flex flex-col justify-center items-center text-center mb-12">
                 <p className="font-mono text-xs md:text-sm text-zinc-900 dark:text-zinc-500 uppercase tracking-[0.3em] font-bold">
                    System Architecture
                </p>
                <div className="h-1 w-16 bg-zinc-300 dark:bg-zinc-800 mt-6 rounded-full" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl">
                {/* Frontend */}
                <SkillItem icon={<SiNextdotjs />} name="Next.js" hoverColor="group-hover:text-black dark:group-hover:text-white" />
                <SkillItem icon={<SiTypescript />} name="TypeScript" hoverColor="group-hover:text-[#3178C6]" />
                <SkillItem icon={<FaReact />} name="React" hoverColor="group-hover:text-[#61DAFB]" />
                <SkillItem icon={<SiTailwindcss />} name="Tailwind" hoverColor="group-hover:text-[#06B6D4]" />
                
                {/* Backend */}
                <SkillItem icon={<FaNodeJs />} name="Node.js" hoverColor="group-hover:text-[#339933]" />
                <SkillItem icon={<SiExpress />} name="Express" hoverColor="group-hover:text-black dark:group-hover:text-white" />
                <SkillItem icon={<SiSalesforce />} name="Salesforce" hoverColor="group-hover:text-[#00A1E0]" />
                <SkillItem icon={<FaAws />} name="AWS" hoverColor="group-hover:text-[#FF9900]" />
                <SkillItem icon={<SiMongodb />} name="MongoDB" hoverColor="group-hover:text-[#47A248]" />

                {/* DevOps/Tools */}
                <SkillItem icon={<SiRedis />} name="Redis" hoverColor="group-hover:text-[#DC382D]" />
                <SkillItem icon={<SiPostgresql />} name="Postgres" hoverColor="group-hover:text-[#4169E1]" />
                 <SkillItem icon={<FaDocker />} name="Docker" hoverColor="group-hover:text-[#2496ED]" />
            </div>
        </div>
    );
};

const SkillItem = ({ icon, name, hoverColor }) => (
    <motion.div
        className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3.5 md:py-4 bg-white dark:bg-[#050505] border border-zinc-200 dark:border-white/10 rounded-full hover:bg-zinc-50 dark:hover:bg-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 shadow-sm cursor-default group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
    >
        <span className={`text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 transition-colors duration-300 ${hoverColor}`}>
            {icon}
        </span>
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-200 transition-colors duration-300">
            {name}
        </span>
    </motion.div>
);

export default Skills;
