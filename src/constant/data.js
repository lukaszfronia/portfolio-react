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
import visualstudiocode from "../assets/visualstudiocode.png";
import firebase from "../assets/firebase.png";
import photoshop from "../assets/photoshop.png";
import adobexd from "../assets/adobexd.png";
import github from "../assets/github.png";
import userImage from "../assets/About.png";

import Bankist from "../assets/Bankist.png";
import Omnifood from "../assets/Omnifood.png";
import Portfolio from "../assets/Portfolio.png";
import Weather from "../assets/Weather.png";
import MathQuiz from "../assets/MathQuiz.png";
import CalculatorApple from "../assets/CalculatorApple.png";
import CreditCard from "../assets/CreditCard.png";
import QuizApp from "../assets/QuizApp.png";
import ClothingApp from "../assets/ClothingApp.png";

import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/telephone.png";

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

const about = {
  title: "I'm Łukasz",
  description:
    "I graduated from the Opole University of Technology with an engineering degree in Computer Science. I'm interested in computer games and volleyball. I'm currently looking for a job where I can use my skills and improve them as a Front-end Developer.",
  image: userImage,
  alt: "Author profil image",
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
    name: "Three JS",
    icon: visualstudiocode,
  },
  {
    name: "github",
    icon: github,
  },
];

const projects = [
  {
    name: "MathQuiz",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
    ],
    image: MathQuiz,
    source_code_link: "https://github.com/",
  },
  {
    name: "Clothing App",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
    ],
    image: ClothingApp,
    source_code_link: "https://github.com/lukaszfronia/clothing-app",
  },
  {
    name: "Bankist App",
    tags: [
      {
        name: "html",
        color: "text-orange-500",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "javascript",
        color: "text-yellow-400",
      },
    ],
    image: Bankist,
    source_code_link: "https://github.com/lukaszfronia/Bankist-App",
  },
  {
    name: "Omnifood",
    tags: [
      {
        name: "html",
        color: "text-orange-500",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
    ],
    image: Omnifood,
    source_code_link: "https://github.com/lukaszfronia/Omnifood",
  },
  {
    name: "Portfolio",
    tags: [
      {
        name: "html",
        color: "text-orange-500",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "javascript",
        color: "text-yellow-400",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/lukaszfronia/Portfolio",
  },

  {
    name: "Quiz App",
    tags: [
      {
        name: "TypeScript",
        color: "text-sky-500",
      },
      {
        name: "scss",
        color: "text-pink-500",
      },
      {
        name: "html",
        color: "text-orange-500",
      },
    ],
    image: QuizApp,
    source_code_link: "https://github.com/lukaszfronia/Quiz",
  },
  {
    name: "Weather App",
    tags: [
      {
        name: "html",
        color: "text-orange-500",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
      {
        name: "javascript",
        color: "text-yellow-400",
      },
    ],
    image: Weather,
    source_code_link: "https://github.com/lukaszfronia/Weather",
  },
  {
    name: "Calculator Apple",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "css",
        color: "text-blue-600",
      },
    ],
    image: CalculatorApple,

    source_code_link: "https://github.com/lukaszfronia/calculator-react",
  },
  {
    name: "Credit Card",
    tags: [
      {
        name: "html",
        color: "text-orange-500",
      },
      {
        name: "scss",
        color: "text-pink-500",
      },
    ],
    image: CreditCard,
    source_code_link: "https://github.com/lukaszfronia/creditCard",
  },
];

const contacts = [
  {
    id: 1,
    title: "Address",
    data: "Chabrów 19/10 45-221 Opole",
    icon: location,
  },
  {
    id: 2,
    title: "E-mail",
    data: "lukaszfronia99@gmail.com",
    icon: mail,
  },
  {
    id: 3,
    title: "Phone",
    data: 696129815,
    icon: phone,
  },
];

export { navLinks, hero, about, projects, technologies, contacts };
