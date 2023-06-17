import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Skills = () => {
    return (
        <div className="py-10 bg-gray-800">
            <p className="text-white text-3xl text-center mb-8">Here are some of the technologies I've worked with:</p>
            <div className="flex justify-center">
                <div className="flex items-center mx-8">
                    <FaReact className="text-6xl text-blue-500 mr-2" title="React" />
                    <span className="text-white text-xl font-semibold">React</span>
                </div>
                <div className="flex items-center mx-8">
                    <FaNodeJs className="text-6xl text-green-500 mr-2" title="Node.js" />
                    <span className="text-white text-xl font-semibold">Node.js</span>
                </div>
                <div className="flex items-center mx-8">
                    <FaDatabase className="text-6xl text-purple-500 mr-2" title="Database" />
                    <span className="text-white text-xl font-semibold">Database</span>
                </div>
                <div className="flex items-center mx-8">
                    <FaHtml5 className="text-6xl text-red-500 mr-2" title="HTML5" />
                    <span className="text-white text-xl font-semibold">HTML5</span>
                </div>
                <div className="flex items-center mx-8">
                    <FaCss3 className="text-6xl text-blue-500 mr-2" title="CSS3" />
                    <span className="text-white text-xl font-semibold">CSS3</span>
                </div>
                <div className="flex items-center mx-8">
                    <SiTypescript className="text-6xl text-blue-500 mr-2" title="TypeScript" />
                    <span className="text-white text-xl font-semibold">TypeScript</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
