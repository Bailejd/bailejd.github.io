import React from "react";

export default function About() {
  return (
    <section id="about" className="scroll-m-10">
      <div className="container mx-auto px-5 py-10 text-center lg:px-40">
        <div className="">
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl">
            About
          </h1>
          <div className="space-y-3 font-medium">
            <p className="mx-auto text-left text-base sm:text-xl lg:w-2/3">
              Hello! My name is <strong>Jacob</strong>, since a relatively early
              age I have been fascinated by computers, whether hardware or
              software. I have always been interested in how computers work and
              what they can do for us.
            </p>
            <p className="mx-auto text-left text-base sm:text-xl lg:w-2/3">
              My interest in Software Development started more recently than my
              childhood interest in computers. My first Experience programming
              was in high school when I took an Introduction to Web Development
              course. In this class we made the most basic of webpages using
              HTML, CSS, and a minimal amount of JavaScript. But it was enough
              to get me thinking about getting a Computer Science degree in
              college. I graduated with a{" "}
              <strong>Bachelor of Science in Computer Science</strong> from
              Bowling Green State University in 2021.
            </p>
            <p className="mx-auto text-left text-base sm:text-xl lg:w-2/3">
              Currently I spend most of my time continuing to learn some of my
              favorite programming languages and technologies. In my free time I
              participate in fun programming challenges, mainly{" "}
              <a
                href="https://adventofcode.com"
                className="text-green-400 underline hover:text-green-500"
              >
                Advent of Code
              </a>
              , where I can continue to learn algorithms and data structure in a
              fun and competitive way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
