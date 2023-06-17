import { useState } from "react";

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
                    <li className="p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                        Home
                    </li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                        About
                    </li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                        Works
                    </li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                        Contact Me
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
