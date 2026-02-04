
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center p-6 text-center">
            <motion.p className="text-zinc-400 mb-8 max-w-xs mx-auto font-light text-sm leading-6">
                Have a vision?<br/>
                <span className="text-indigo-200 font-medium tracking-wide">Let's engineer it into reality.</span>
            </motion.p>
            <div className="flex items-center justify-center gap-6">
                <SocialLink href="mailto:adarshregmi1@gmail.com" icon={<FaEnvelope />} />
                <SocialLink href="https://twitter.com/adarshregmi" icon={<FaTwitter />} />
                <SocialLink href="https://github.com/Adarsreg" icon={<FaGithub />} />
                <SocialLink href="https://www.linkedin.com/in/adarsh-sharma-0635b921a/" icon={<FaLinkedin />} />
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-2xl transition-colors duration-300 bg-white/5 p-3 rounded-full hover:bg-purple-600/20"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
    >
        {icon}
    </motion.a>
);

export default ContactMe;
