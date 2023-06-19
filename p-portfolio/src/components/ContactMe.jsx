import React, { useState } from 'react';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {


    return (

        <div className="  bg-gray-900 flex items-center justify-center  text-center py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-purple-600 mb-4" style={{ fontFamily: 'Montserrat' }}>Contact Me</h2>
                <p className="text-gray-400 mb-8">
                    Feel free to reach me out! I'll try to get back to you as soon as possible.
                </p>

                <div className="flex items-center justify-center space-x-8 mb-8">
                    <a
                        href="mailto:adarshregmi1@gmail.com"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaEnvelope className="w-10 h-10" />
                    </a>
                    <a
                        href="https://twitter.com/adarshregmi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaTwitter className="w-10 h-10" />
                    </a>
                    <a
                        href="https://github.com/Adarsreg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaGithub className="w-10 h-10" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adarsh-sharma-0635b921a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaLinkedin className="w-10 h-10" />
                    </a>
                </div>

            </div>
        </div>

    );
}

export default ContactMe;
