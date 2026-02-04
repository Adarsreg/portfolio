
import React from 'react';

const Footer = () => {
    return (
        <div className="text-center p-4">
            <p className="text-gray-500 text-sm font-mono">
                © {new Date().getFullYear()} Adarsh Sharma. Crafted with React & Tailwind.
            </p>
        </div>
    );
};

export default Footer;
