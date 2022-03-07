import React from "react";
import { projects } from "../data";

export default function ProjectDetails({ id }) {
  return (
    <div id={"project-details" + id}>
      <h1 className="mb-3 text-2xl font-medium text-white">
        {projects[id].title}
      </h1>
      <h2 className="mb-1 text-lg font-medium tracking-widest text-green-400">
        {projects[id].primary_language}
      </h2>
      <h3 className="text-white">{projects[id].languages.join(", ")}</h3>
      <h3 className="text-white">{projects[id].other.join(", ")}</h3>
      {projects[id].description.map((paragraph) => (
        <p className="mt-1 mb-2 px-10 leading-relaxed">{paragraph}</p>
      ))}
    </div>
  );
}
