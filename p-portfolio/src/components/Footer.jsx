
const Footer = () => {
    return (
        <footer className="w-full text-center py-8">
            <p className="text-zinc-600 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] hover:text-zinc-400 transition-colors cursor-default">
                &copy; {new Date().getFullYear()} Adarsh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
