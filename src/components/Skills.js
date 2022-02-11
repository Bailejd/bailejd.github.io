import React from "react";
import { IconContext } from "react-icons";
import { FaBook, FaCode } from "react-icons/fa";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiJava,
  SiGit,
  SiReact,
  SiDjango,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="scroll-m-10">
      <div className="container mx-auto px-5 py-10">
        <div className="mb-20 text-center">
          <IconContext.Provider value={{ size: "2em" }}>
            <FaBook className="mx-auto mb-4 inline-block w-20" />
          </IconContext.Provider>
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl">
            Skills
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            distinctio expedita quasi fuga sapiente consequuntur dicta
            consectetur exercitationem voluptatem at veniam fugit aperiam ullam,
            labore minima in, totam, cupiditate quidem!
          </p>
        </div>
        <h2 className="mb-4 text-center text-2xl font-medium text-white sm:text-3xl">
          Languages
        </h2>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-2/5">
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <SiPython className="" />
                </IconContext.Provider>
                <span className="font-medium text-white">Python</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <SiCplusplus className="" />
                </IconContext.Provider>
                <span className="font-medium text-white">C++</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <SiJavascript className="" />
                </IconContext.Provider>
                <span className="font-medium text-white">JavaScript</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <SiJava className="" />
                </IconContext.Provider>
                <span className="font-medium text-white">Java</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-4 text-center text-2xl font-medium text-white sm:text-3xl">
          Other
        </h2>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-2/5">
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <SiGit className="" />
                </IconContext.Provider>
                <span className="pr-1 font-medium text-white">Git</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <SiReact className="" />
                </IconContext.Provider>
                <span className="font-medium text-white">React</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <SiDjango className="" />
                </IconContext.Provider>
                <span className="font-medium text-white">Django</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-2">
            <div className="flex h-full justify-center rounded bg-gray-800 p-4 text-center">
              <div className="flex flex-col items-center">
                <IconContext.Provider value={{ size: "2em" }}>
                  <FaCode className="" />
                </IconContext.Provider>
                <span className="font-medium text-white">Boost Test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
