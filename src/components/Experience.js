import React from "react";
import { IconContext } from "react-icons";
import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-m-10">
      <div className="container mx-auto px-5 py-10 text-center lg:px-40">
        <div className="mb-20 flex w-full flex-col">
          <IconContext.Provider value={{ size: "2em" }}>
            <FaBriefcase className="mx-auto mb-4 inline-block w-20" />
          </IconContext.Provider>
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl">
            Experience
          </h1>
        </div>
        <div className="-m-4 flex flex-wrap font-medium">
          {experiences.map((experience) => (
            <div key={experience.title} className="p-4 sm:w-full">
              <div className="relative flex">
                <div className="relative w-full border-4 border-gray-800 bg-gray-900 px-4 py-10">
                  <h1 className="mb-3 text-2xl font-medium text-white">
                    {experience.title}
                  </h1>
                  <h2 className="mb-1 text-lg font-medium tracking-widest text-green-400">
                    {experience.position}
                  </h2>
                  <p className="pb-2">{experience.description}</p>
                  <div className="mx-auto px-10 text-left sm:w-1/2">
                    <ul className="list-disc">
                      {experience.points.map((point) => (
                        <li>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
