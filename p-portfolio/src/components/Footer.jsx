
const Footer = () => {
    return (
        <footer className="w-full text-center py-8">
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors cursor-default">
                &copy; {new Date().getFullYear()} Adarsh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
