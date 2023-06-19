import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { DiMongodb, DiNodejsSmall } from 'react-icons/di';

const Skills = () => {
    return (
        <div className="py-24 px-4 lg:px-8 bg-gray-800" id="skls">
            <p className="text-white text-2xl lg:text-3xl text-center mb-6 py-20" style={{ fontFamily: 'Montserrat' }}>Here are some of the technologies I love working with...</p>
            <div className="flex flex-wrap justify-center">
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <FaReact className="text-4xl lg:text-6xl text-blue-500 mr-2" title="React" />
                    <span className="text-white text-base lg:text-xl font-semibold">React</span>
                </div>
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <FaNodeJs className="text-4xl lg:text-6xl text-green-500 mr-2" title="Node.js" />
                    <span className="text-white text-base lg:text-xl font-semibold">Node.js</span>
                </div>
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <DiNodejsSmall className="text-4xl lg:text-6xl text-green-500 mr-2" title="Express" />
                    <span className="text-white text-base lg:text-xl font-semibold">Express</span>
                </div>
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <FaDatabase className="text-4xl lg:text-6xl text-purple-500 mr-2" title="Database" />
                    <span className="text-white text-base lg:text-xl font-semibold">Database</span>
                </div>
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <FaHtml5 className="text-4xl lg:text-6xl text-red-500 mr-2" title="HTML5" />
                    <span className="text-white text-base lg:text-xl font-semibold">HTML5</span>
                </div>
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <FaCss3 className="text-4xl lg:text-6xl text-blue-500 mr-2" title="CSS3" />
                    <span className="text-white text-base lg:text-xl font-semibold">CSS3</span>
                </div>
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <SiTypescript className="text-4xl lg:text-6xl text-blue-500 mr-2" title="TypeScript" />
                    <span className="text-white text-base lg:text-xl font-semibold">TypeScript</span>
                </div>
                <div className="flex items-center mx-4 my-2 lg:my-0">
                    <DiMongodb className="text-4xl lg:text-6xl text-green-500 mr-2" title="MongoDB" />
                    <span className="text-white text-base lg:text-xl font-semibold">MongoDB</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
