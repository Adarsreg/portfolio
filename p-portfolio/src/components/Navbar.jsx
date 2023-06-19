import React, { useState } from "react";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="bg-gray-900 p-2 text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <i className="fas fa-code text-purple-500 text-2xl"></i>
                </div>

                <ul
                    className={[
                        "flex flex-col items-center md:flex-row md:space-x-4 md:ml-4 text-center md:text-left",
                        click ? "flex" : "hidden md:flex",
                    ].join(" ")}
                >
                    <li className="p-4 cursor-pointer transition-colors duration-200 relative">
                        <a
                            href="#"
                            className="hover:text-purple-500"
                        >
                            Home
                            <span className="absolute left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-200 origin-left"></span>
                        </a>
                    </li>
                    <li className="p-4 cursor-pointer transition-colors duration-200 relative">
                        <a href="#abt" className="hover:text-purple-500">
                            About
                            <span className="absolute left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-200 origin-left"></span>
                        </a>
                    </li>
                    <li className="p-4  cursor-pointer transition-colors duration-200 relative">
                        <a href="#wrks" className="hover:text-purple-500">
                            Works
                            <span className="absolute left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-200 origin-left"></span>
                        </a>
                    </li>
                    <li className="p-4 cursor-pointer transition-colors duration-200 relative">
                        <a href="#contact" className="hover:text-purple-500">
                            Contact Me
                            <span className="absolute left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-200 origin-left"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
