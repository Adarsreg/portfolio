
import { motion } from 'framer-motion';
import { SiGmail, SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";

const ContactMe = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 pt-4 sm:pt-8 mt-2 sm:mt-4">
            <SocialLink href="mailto:adarshregmi1@gmail.com" icon={<SiGmail />} label="Email" hoverColor="group-hover:text-[#EA4335] dark:group-hover:drop-shadow-[0_0_12px_rgba(234,67,53,0.8)]" />
            <SocialLink href="https://twitter.com/adarshregmi" icon={<SiTwitter />} label="Twitter" hoverColor="group-hover:text-[#1DA1F2]" />
            <SocialLink href="https://github.com/Adarsreg" icon={<SiGithub />} label="GitHub" hoverColor="group-hover:text-black dark:group-hover:text-white" />
            <SocialLink href="https://www.linkedin.com/in/adarsh-sharma-0635b921a/" icon={<SiLinkedin />} label="LinkedIn" hoverColor="group-hover:text-[#0A66C2]" />
        </div>
    );
};

const SocialLink = ({ href, icon, label, hoverColor }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (opens in new tab)`}
        className="group text-3xl sm:text-4xl md:text-5xl text-light-text-secondary dark:text-dark-text-secondary transition-transform duration-300 hover:-translate-y-2 p-2 md:p-0 will-change-transform"
        whileTap={{ scale: 0.90 }}
    >
        <span className={`flex items-center justify-center transition-colors duration-300 ${hoverColor}`} aria-hidden="true">
            {icon}
        </span>
    </motion.a>
);

export default ContactMe;
