import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { IconContext } from "react-icons";
import { FaCode } from "react-icons/fa";
import { projects } from "../data";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0);

  function toggleProject(newId) {
    if (visible === false) {
      setVisible(true);
    }

    setId(newId);

    setTimeout(() => {
      window.location.href = "#project-details";
    }, 1);
  }

  function hide(displayedId) {
    setVisible(false);

    setTimeout(() => {
      window.location.href = "#project" + displayedId;
    }, 1);
  }

  return (
    <section id="projects" className="scroll-m-10">
      <div className="container mx-auto px-5 py-10 text-center lg:px-40">
        <div className="mb-20 flex w-full flex-col">
          <IconContext.Provider value={{ size: "2em" }}>
            <FaCode className="mx-auto mb-4 inline-block w-20" />
          </IconContext.Provider>
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl">
            My Projects / Repositories
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div
          id="project-details"
          className={`mb-5 scroll-m-20 border-4 border-gray-800 py-5 ${
            visible ? "" : "hidden"
          }`}
        >
          <ProjectDetails id={id} />
          <div className="flex justify-center space-x-1 pt-1">
            <button
              className="inline-flex rounded border-0 bg-red-500 px-6 text-lg text-white hover:bg-red-600 focus:outline-none"
              onClick={() => hide(id)}
            >
              Less
            </button>
            {projects[id].repo_available ? (
              <a
                href={projects[id].repo}
                className="inline-flex rounded border-0 bg-green-500 px-6 text-lg text-white hover:bg-green-600 focus:outline-none"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          {projects.map((project) => (
            <div
              key={project.title}
              id={"project" + project.id}
              className="scroll-m-16 p-4 sm:w-1/2"
            >
              <div className="relative flex">
                <div className="relative w-full border-4 border-gray-800 bg-gray-900">
                  <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover object-center brightness-50" />
                  <div className="px-8 py-10 relative w-full">
                    <h1 className="mb-3 text-2xl font-medium text-white">
                      {project.title}
                    </h1>
                    <h2 className="mb-1 text-lg font-medium tracking-widest text-green-400">
                      {project.primary_language}
                    </h2>
                    <p className="leading-relaxed text-white">{project.short_description}</p>
                    <div className="flex justify-center space-x-1 pt-1">
                      <button
                        className="inline-flex rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none"
                        onClick={() => toggleProject(project.id)}
                      >
                        More
                      </button>
                      {project.repo_available ? (
                        <a
                          href={project.repo}
                          className="inline-flex rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
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
