import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (anchor) => {
    if (isOpen) {
      setIsOpen(false);
    }

    // Since closing the mobile navbar and moving to anchor point happen
    //  on the same click it goes to the anchor and then moves the page
    //  when the navbar closes.
    // One way to handle the difference in anchor position before and after
    //  closing the mobile navbar is to have a short delay (let nav close first).
    setTimeout(() => {
      window.location.href = "#" + anchor;
    }, 100);
  };

  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex">
                <a
                  href="#top"
                  className="ml-3 text-xl font-medium text-white hover:text-green-400"
                >
                  <span>Bailejd</span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#about"
                    className="rounded-md px-3 py-2 text-md font-medium text-white hover:text-green-400"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="rounded-md px-3 py-2 text-md font-medium text-white hover:text-green-400"
                  >
                    Projects
                  </a>
                  <a
                    href="#experience"
                    className="rounded-md px-3 py-2 text-md font-medium text-white hover:text-green-400"
                  >
                    Experience
                  </a>
                  <a
                    href="#skills"
                    className="rounded-md px-3 py-2 text-md font-medium text-white hover:text-green-400"
                  >
                    Skills
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a
                  href="https://github.com/Bailejd"
                  className="text-white hover:text-green-400"
                >
                  <IconContext.Provider value={{ size: "2em" }}>
                    <FaGithub />
                  </IconContext.Provider>
                </a>
                <a href="/" className="text-white hover:text-green-400">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <FaLinkedin />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-white hover:bg-gray-800 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <button
                  href="#about"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-green-400"
                  onClick={() => handleClick("about")}
                >
                  About
                </button>
                <button
                  href="#projects"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-green-400"
                  onClick={() => handleClick("projects")}
                >
                  Projects
                </button>
                <button
                  href="#experience"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-green-400"
                  onClick={() => handleClick("experience")}
                >
                  Experience
                </button>
                <button
                  href="#skills"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-green-400"
                  onClick={() => handleClick("skills")}
                >
                  Skills
                </button>
              </div>
              <div className="flex items-baseline justify-center space-x-4 py-2">
                <a
                  href="https://github.com/Bailejd"
                  className="text-white hover:text-green-400"
                >
                  <IconContext.Provider value={{ size: "2em" }}>
                    <FaGithub />
                  </IconContext.Provider>
                </a>
                <a href="/" className="text-white hover:text-green-400">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <FaLinkedin />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
