
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiSalesforce, SiRedis, SiJest, SiPostgresql, SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

const Skills = () => {
    return (
        <div className="h-full flex flex-col justify-center p-4 overflow-y-auto scrollbar-hide mask-gradient-b">
             <div className="grid grid-cols-3 gap-3">
                 <SkillItem icon={<RiNextjsFill />} name="Next.js" color="text-white" />
                 <SkillItem icon={<SiTypescript />} name="TypeScript" color="text-blue-400" />
                 <SkillItem icon={<FaNodeJs />} name="Node.js" color="text-green-500" />
                 <SkillItem icon={<SiExpress />} name="Express" color="text-white" />
                 <SkillItem icon={<SiSalesforce />} name="Salesforce" color="text-blue-500" />
                 <SkillItem icon={<FaReact />} name="React" color="text-cyan-400" />
                 <SkillItem icon={<FaAws />} name="AWS" color="text-orange-500" />
                 <SkillItem icon={<SiMongodb />} name="MongoDB" color="text-green-500" />
                 <SkillItem icon={<SiRedis />} name="Redis" color="text-red-500" />
                 <SkillItem icon={<SiPostgresql />} name="Postgres" color="text-blue-300" />
                 <SkillItem icon={<FaDocker />} name="Docker" color="text-blue-500" />
                 <SkillItem icon={<SiJest />} name="Jest" color="text-red-600" />
                 <SkillItem icon={<SiTailwindcss />} name="Tailwind" color="text-cyan-300" />
                 <SkillItem icon={<SiJavascript />} name="JavaScript" color="text-yellow-400" />
            </div>
        </div>
    );
};

const SkillItem = ({ icon, name, color }) => (
    <motion.div
        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
        whileHover={{ scale: 1.05 }}
    >
        <div className={`text-3xl ${color} opacity-100 drop-shadow-sm`}>{icon}</div>
        <span className="text-xs text-zinc-300 font-medium uppercase tracking-wider group-hover:text-white transition-colors">{name}</span>
    </motion.div>
);

export default Skills;
