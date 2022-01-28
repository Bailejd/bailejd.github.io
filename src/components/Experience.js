import React from "react";
import { IconContext } from "react-icons";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <IconContext.Provider value={{ size: "2em"}}>
            <FaBriefcase className="mx-auto inline-block w-20 mb-4"/>
          </IconContext.Provider>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {experiences.map((experience) => (
            <div key={experience.title} className="sm:w-full w-100 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                  <h1 className="title-font text-lg font-medium text-white mb-3">{experience.title}</h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{experience.position}</h2>
                  <p className="leading-relaxed">{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}