import React, { useState } from 'react';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any necessary actions with the form data
        console.log(formData);

        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="bg-gray-900 flex items-center justify-center min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-purple-600 mb-4">Contact Me</h2>
                <p className="text-gray-400 mb-8">
                    If you'd like to get in touch with me, feel free to use the contact information below or fill out the contact form.
                </p>

                <div className="flex items-center justify-center space-x-8 mb-8">
                    <a
                        href="mailto:adarshregmi1@gmail.com"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaEnvelope className="w-10 h-10" />
                    </a>
                    <a
                        href="https://twitter.com/your_twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaTwitter className="w-10 h-10" />
                    </a>
                    <a
                        href="https://github.com/your_github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaGithub className="w-10 h-10" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your_linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon text-gray-400 hover:text-purple-500 transform hover:scale-110 transition duration-300"
                    >
                        <FaLinkedin className="w-10 h-10" />
                    </a>
                </div>

                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap justify-center -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block text-gray-400 text-sm font-medium mb-1"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="appearance-none bg-gray-700 border border-gray-600 rounded w-full py-2 px-3 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-purple-500"
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block text-gray-400 text-sm font-medium mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="appearance-none bg-gray-700 border border-gray-600 rounded w-full py-2 px-3 text-gray-300 placeholder-gray-400 focus:outline-none focus:border-purple-500"
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block text-gray-400 text-sm font-medium mb-1"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                className="appearance-none bg-gray-700 border border-gray-600 rounded w-full py-2 px-3 text-gray-300 placeholder-gray-400 h-40 resize-none focus:outline-none focus:border-purple-500"
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleChange}
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
