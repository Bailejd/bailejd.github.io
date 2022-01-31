import React from "react";
import { IconContext }  from "react-icons";
import { FaBook } from "react-icons/fa";
import { languages, others } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-m-10">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <IconContext.Provider value={{ size: "2em"}}>
            <FaBook className="mx-auto inline-block w-20 mb-4"/>
          </IconContext.Provider>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio expedita quasi fuga sapiente consequuntur dicta consectetur exercitationem voluptatem at veniam fugit aperiam ullam, labore minima in, totam, cupiditate quidem!
          </p>
        </div>
        <h2 className="text-center mb-4 sm:text-3xl text-2xl font-medium title-font text-white">
          Languages
        </h2>
        <div className="flex flex-wrap lg:w-2/5 sm:mx-auto sm:mb-2 -mx-2">
          {languages.map((language) => (
            <div key={language} className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded p-4 h-full text-center">
                <span className="title-font font-medium text-white">
                  {language}
                </span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-center mb-4 sm:text-3xl text-2xl font-medium title-font text-white">
          Other
        </h2>
        <div className="flex flex-wrap lg:w-2/5 sm:mx-auto sm:mb-2 -mx-2">
          {others.map((other) => (
            <div key={other} className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded p-4 h-full text-center">
                <span className="title-font font-medium text-white">
                  {other}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}