// import {
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   photoshop,
//   adobexd,
//   github,
//   threejs,
//   home,
//   user,
//   projects,
//   contact,
// } from "../assets";
import backgroundhero from "../assets/michael-saidov-YNlUy_SbjWc-unsplash.jpg";
import home from "../assets/home.png";
import user from "../assets/user.png";
import project from "../assets/projects.png";
import contact from "../assets/contact.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import tailwindcss from "../assets/tailwindcss.png";
import threejs from "../assets/threejs.svg";
import firebase from "../assets/firebase.png";
import photoshop from "../assets/photoshop.png";
import adobexd from "../assets/adobexd.png";
import github from "../assets/github.png";

const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: home,
  },
  {
    id: "about",
    title: "About",
    icon: user,
  },
  {
    id: "projects",
    title: "Projects",
    icon: project,
  },
  {
    id: "contact",
    title: "Contact",
    icon: contact,
  },
];

const hero = {
  name: "Hi, I'm Łukasz Fronia",
  description: "I'm a Frontend Developer",
  backgroundImage: backgroundhero,
  alt: "computer on the table",
};

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe Xd",
    icon: adobexd,
  },
  {
    name: "github",
    icon: github,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { navLinks, hero, projects, technologies };
