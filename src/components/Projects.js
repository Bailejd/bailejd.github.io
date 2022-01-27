import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails"
import { projects } from "../data";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0);

  function toggleProject(newId) {
    if(visible === false) {
      setVisible(true);
    }

    setId(newId);
    window.location.href = "#projects";
  }

  function hide(displayedId) {
    setVisible(false);
    window.location.href = "#project" + displayedId;
  }

  return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects / Repositories
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div id="project-details" className={`border-4 border-gray-800 py-5 mb-5 ${visible ? "" : "hidden"}`}>
          <ProjectDetails id={id}/>
          <button className="inline-flex text-white bg-red-500 border-0 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={() => hide(id)}>Less</button>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} id={"project" + project.id} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                  <h1 className="title-font text-2xl font-medium text-white mb-3">{project.title}</h1>
                  <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">{project.primary_language}</h2>
                  <h3 className="title-font text-white">{project.languages.join(' ')}</h3>
                  <h3 className="title-font text-white">{project.other.join(' ')}</h3>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="flex justify-center pt-1 space-x-1">
                    <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={() => toggleProject(project.id)}>More</button>
                    <a href={project.repo} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">GitHub</a>
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