import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (anchor) => {
    if(isOpen) {
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
  }

  return (
    <div className="top-0 z-10 sticky">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex">
                <a href="https://github.com/Bailejd" className="title-font font-medium text-white ml-3 text-xl hover:text-green-400">
                  <div className="flex">
                    <span className="pr-1">
                      <IconContext.Provider value={{ size: "1.5em" }}>
                        <FaGithub />
                      </IconContext.Provider>
                    </span>
                    <span>
                      Bailejd
                    </span>
                  </div>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#about" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                  <a href="#projects" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                  </a>
                  <a href="#experience" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                    Experience
                  </a>
                  <a href="#skills" className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium">
                    Skills
                  </a>
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
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
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button href="#about" className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleClick("about")}>
                  About
                </button>
                <button href="#projects" className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleClick("projects")}>
                  Projects
                </button>
                <button href="#experience" className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleClick("experience")}>
                  Experience
                </button>
                <button href="#skills" className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleClick("skills")}>
                  Skills
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}