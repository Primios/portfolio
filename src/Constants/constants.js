/*
   Copyright (C), 2023-2024, Valentin Henriques 
   Author: Valentin Henriques
   FileName: SectionTitle.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! ",

		"My name is Valentin, I'm 20 and a junior computer science student based in France. I have a strong passion for the technologies related to WEB Developpement.",
    "Outside of my regular activities, I'm into sport and gaming whenever i've time for it.",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Connect 4",
    description: 'Build in react this game is a classic. The goal is to connect four of your discs in a row, column, or diagonal. The first player to connect four in a row wins! And if you want to spice up the game, you can play with bonuses. The goal of this project was to practice testing with Jest and React Testing Library.',
    image: memoryGame,
    source_code_link: 'https://etulab.univ-amu.fr/h21213497/puissance4',
    demo_link: 'https://primios.github.io/puissance4/',
  },
  {
    name: 'Mazius III',
    description: 'Mazius III is a maze game where the player incarnates a little monkey looking for his banana. The maze are generated randomly and the player can choose the diffilculty of the maze. Developped in Java, this project associates graph theory and oriented object programming. Associated with a database, the player can save his score and the time he took to finish the maze and compare it with other players.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/Primios/maziusIII',
    demo_link: 'https://www.youtube.com/watch?v=HDP2yFcTquQ&feature=youtu.be',
  },
  {
    name: 'Basic Calculator',
    description: 'A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly.',
    image: calculator,
    source_code_link: 'https://github.com/Primios/calculator-app/tree/main',
    demo_link: 'https://primios.github.io/calculator-app/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'C++',
    icon: awsIcon,
    description:
      'I have a strong command of C++, leveraging its capabilities to develop efficient algorithms and data structures. I have also used C++ to build applications for competitive programming.',
  },
  {
    id: 'figma',
    title: 'C#',
    icon: figmaIcon,
    description:
    'During my internship, i used to work with C# to develop a software for the company. I have a good knowledge of the language and i am able to develop a software from scratch.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'MongoDB',
    icon: viteIcon,
    description:
      'I experienced MongoDB, to store and manage datasets in order to build scalable and efficient web applications based API First approach.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'I used Python a lot during my studies for data analysis and machine learning. I have a good knowledge of the language and i am able to develop a software from scratch.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'PHP',
    icon: neoIcon,
    description:
      'I have experience with PHP, where I used it to develop dynamic web pages and interactive web applications. I have a strong command of PHP and have used it to build websites that interact with databases.',
  },
  {
    id: 'raspi',
    title: 'ASM x86',
    icon: raspIcon,
    description:
      'ASM x86 is a low-level programming i\'ve learned during my studies. I\'ve built several program with it.',
  },
  {
    id: 'eslint',
    title: 'Robot Framework',
    icon: eslintIcon,
    description:
      'During my first internship, i was in charge of the testing softwares and different applications. I used Robot Framework to automate the tests.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
