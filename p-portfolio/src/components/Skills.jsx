import { motion } from 'framer-motion';
import { FaNodeJs, FaReact, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpress, SiSalesforce, SiMongodb, SiRedis, SiPostgresql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
             <div className="flex flex-col justify-center items-center text-center mb-12">
                 <p className="font-mono text-xs md:text-sm text-light-text-primary dark:text-dark-text-secondary uppercase tracking-[0.3em] font-bold">
                    Skills
                </p>
                <div className="h-1 w-16 bg-light-border dark:bg-dark-border mt-6 rounded-full" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl" role="list" aria-label="Technical skills">
                {/* Frontend */}
                <SkillItem icon={<SiNextdotjs aria-hidden="true" />} name="Next.js" hoverColor="group-hover:text-black dark:group-hover:text-white" />
                <SkillItem icon={<SiTypescript aria-hidden="true" />} name="TypeScript" hoverColor="group-hover:text-[#3178C6]" />
                <SkillItem icon={<FaReact aria-hidden="true" />} name="React" hoverColor="group-hover:text-[#61DAFB]" />
                <SkillItem icon={<SiTailwindcss aria-hidden="true" />} name="Tailwind" hoverColor="group-hover:text-[#06B6D4]" />
                
                {/* Backend */}
                <SkillItem icon={<FaNodeJs aria-hidden="true" />} name="Node.js" hoverColor="group-hover:text-[#339933]" />
                <SkillItem icon={<SiExpress aria-hidden="true" />} name="Express" hoverColor="group-hover:text-black dark:group-hover:text-white" />
                <SkillItem icon={<SiSalesforce aria-hidden="true" />} name="Salesforce" hoverColor="group-hover:text-[#00A1E0]" />
                <SkillItem icon={<FaAws aria-hidden="true" />} name="AWS" hoverColor="group-hover:text-[#FF9900]" />
                <SkillItem icon={<SiMongodb aria-hidden="true" />} name="MongoDB" hoverColor="group-hover:text-[#47A248]" />

                {/* DevOps/Tools */}
                <SkillItem icon={<SiRedis aria-hidden="true" />} name="Redis" hoverColor="group-hover:text-[#DC382D]" />
                <SkillItem icon={<SiPostgresql aria-hidden="true" />} name="Postgres" hoverColor="group-hover:text-[#4169E1]" />
                 <SkillItem icon={<FaDocker aria-hidden="true" />} name="Docker" hoverColor="group-hover:text-[#2496ED]" />
            </div>
        </div>
    );
};

const SkillItem = ({ icon, name, hoverColor }) => (
    <motion.div
        className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3.5 md:py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-full hover:bg-light-input dark:hover:bg-white/5 hover:border-zinc-400 dark:hover:border-white/20 shadow-soft hover:shadow-[0_4px_14px_rgba(0,0,0,0.09)] transition-all duration-300 cursor-default group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        role="listitem"
        aria-label={name}
    >
        <span className={`text-2xl md:text-3xl text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-300 ${hoverColor}`} aria-hidden="true">
            {icon}
        </span>
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-text-primary dark:group-hover:text-dark-text-primary transition-colors duration-300" aria-hidden="true">
            {name}
        </span>
    </motion.div>
);

export default Skills;
