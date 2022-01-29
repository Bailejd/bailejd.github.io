import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="bg-gray-800 top-0 z-10 md:sticky">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="https://github.com/Bailejd" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl hover:text-green-400">
                    <div className="flex">
                        <span className="pr-1">
                            <IconContext.Provider value={{ size: "1.5em" }}>
                                <FaGithub />
                            </IconContext.Provider>
                        </span>
                        <span>
                            Bailejd
                        </span>
                    </div>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 hover:text-green-400">
                        About
                    </a>
                    <a href="#projects" className="mr-5 hover:text-green-400">
                        Projects
                    </a>
                    <a href="#experience" className="mr-5 hover:text-green-400">
                        Experience
                    </a>
                    <a href="#skills" className="mr-5 hover:text-green-400 md:pr-4 md:border-r md:border-gray-700">
                        Skills
                    </a>
                </nav>
            </div>
        </header>
    );
}