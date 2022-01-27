import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
