import { ProjectData } from '../app/models/project-data';

export const PROJECTS: ProjectData[] = [
  {
    id: 0,
    title: "bailejd.github.io",
    primary_language: "TypeScript",
    languages: [],
    other: ["Angular", "Tailwind CSS"],
    short_description:
      "This is the page you are viewing right now. My Angular portfolio \
      hosted with GitHub Pages. With the goal of consistently updating it's \
      content as I gain new experiences and work on new projects.",
    description:
      [
        "This is the page you are viewing right now. My first Angular portfolio \
        hosted with GitHub Pages. With the goal of consistently updating it's \
        content as I gain new experiences and work on new projects. Created using \
        Angular and Tailwind CSS",
      ],
    image: "",
    link: "#",
    repo: "https://github.com/Bailejd/bailejd.github.io",
    repo_available: true,
  },
  {
    id: 1,
    title: "Advent-of-Code",
    primary_language: "Python",
    languages: ["Python", "Java", "C++"],
    other: ["Numpy"],
    short_description:
      "A GitHub repository containing my solutions to the seasonal Advent of Code \
      Challenges. Advent of Code is an advent calendar of programming puzzles \
      created by Eric Wastl.",
    description:
      [
        "Advent of Code is an advent calendar of programming puzzles created by \
        Eric Wastl. Advent of Code challenges people to solve increasingly \
        difficult problems which encourage learning various algorithms and data \
        structures. This repository is a collection of my solutions to each year \
        of Advent of Code. I started in 2020 and participated in the event live in \
        2021. When I have time I will occasionally work on older puzzles for practice \
        with data structures and algorithms.",
      ],
    image: "",
    link: "#",
    repo: "https://github.com/Bailejd/Advent-of-Code",
    repo_available: false,
  },
  {
    id: 2,
    title: "Destiny2-Light-Calculator",
    primary_language: "JavaScript",
    languages: ["Javascript"],
    other: ["React", "Node.js", "Express.js"],
    short_description:
      "My first full-stack React project. \
      A level calculator for the video game Destiny 2. \
      Uses Bungie-net API to collect the user's character data, performs \
      calculations, and displays it in a useful way.",
    description:
      [
        "My first React Project including front-end UI and back-end with API calls. \
        A level calculator for Destiny 2 which uses \
        Bungie-net API to collect the user's character data, performs \
        calculations, and displays it in a way that shows the user what they can \
        do to level more efficiently. Uses React to build the user interface of the \
        single page application with reusable components. The backend uses Express \
        and handles various Bungie-net API calls, formats the responses, then \
        sends data to the client.",
      ],
    image: "",
    link: "#",
    repo: "https://github.com/",
    repo_available: false,
  },
];