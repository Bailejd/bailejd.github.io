import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="scroll-m-10">
      <div className="container mx-auto flex h-screen items-center px-5 py-10 lg:px-40">
        <div className="mb-4 font-medium">
          <h1 className="text-3xl text-white sm:text-4xl">Hey, my name is</h1>
          <h2 className="text-4xl text-green-400 sm:text-5xl">Jacob Bailey.</h2>
          <h3 className="text-xl text-gray-400 sm:text-3xl">
            Software Developer
          </h3>
          <p className="text-xl sm:text-2xl"></p>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit <strong>amet consectetur</strong> adipisicing
            elit. Totam, eaque incidunt nesciunt odio cumque quae architecto,
            minima et repellat ex excepturi, iusto nobis tempore possimus. Illum
            quod fuga porro earum?
          </p>
          <div
            id="buttons"
            className="flex flex-wrap justify-center space-y-2 sm:justify-start sm:space-y-0 sm:space-x-2"
          >
            <a
              href="https://github.com/Bailejd"
              className="inline-flex w-full justify-center rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none sm:w-1/6"
            >
              <div className="pr-1">
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <FaGithub />
                </IconContext.Provider>
              </div>
              <div>GitHub</div>
            </a>
            <a
              href="#"
              className="inline-flex w-full justify-center rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none sm:w-1/6"
            >
              <div className="pr-1">
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </div>
              <div>LinkedIn</div>
            </a>
            <a
              // mailto:example@gmail.com
              href="#"
              className="inline-flex w-full justify-center rounded border-0 bg-green-500 py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none sm:w-1/6"
            >
              <div className="pr-1">
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <FaEnvelope />
                </IconContext.Provider>
              </div>
              <div>Email</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
