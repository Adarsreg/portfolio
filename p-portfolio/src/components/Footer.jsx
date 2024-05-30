import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10" id='foot'>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full sm:w-auto order-2 sm:order-1 text-center sm:text-left mb-4 sm:mb-0">
                        <p className="text-gray-400">© 2024 Adarsh Sharma. All rights reserved.</p>
                    </div>
                    <div className="w-full sm:w-auto order-1 sm:order-2 text-center sm:text-right">

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
