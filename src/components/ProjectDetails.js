import React from "react";
import { projects } from "../data"

export default function ProjectDetails({ id }) {
  return (
    <div id={"project-details" + id}>
      <h1 className="title-font text-2xl font-medium text-white mb-3">{projects[id].title}</h1>
      <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">{projects[id].primary_language}</h2>
      <p className="leading-relaxed mb-2">{projects[id].description}</p>
    </div>
  );
}