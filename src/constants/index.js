import {
  backend,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
];

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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Self-study",
    company_name: "Self-study",
    icon: backend,
    date: "Internship Period",
    points: [
      "Learned fundamental web development concepts and technologies, including HTML, CSS, and JavaScript.",
      "Completed training modules and participated in coding exercises to build basic web applications.",
    ],
  },
  {
    title: "Self-study",
    company_name: "Self-study",
    icon: creator,
    date: "Training Period",
    points: [
      "Studied React.js fundamentals and practiced building small-scale projects.",
      "Collaborated with peers on group projects to develop interactive web applications.",
      "Received feedback on code quality and performance to enhance coding abilities.",
    ],
  },
  {
    title: "Student Web Developer",
    company_name: "University College of Information Technology",
    icon: mobile,
    date: "Internship Duration",
    points: [
      "Assisted in website maintenance tasks and content updates using HTML and CSS.",
      "Learned about website responsiveness and cross-browser compatibility.",
      "Participated in team meetings and workshops to gain insights into industry best practices.",
    ],
  },
  {
    title: "Entry-Level Web Developer",
    company_name: "Personal Projects",
    icon: web,
    date: "Personal Learning Journey",
    points: [
      "Explored various web development tutorials and online resources to build personal projects.",
      "Focused on understanding core concepts of front-end development.",
      "Continuously practiced coding and sought feedback from online communities to improve skills.",
    ],
  },
];

const projects = [
  {
    name: "ZustandShop",
    description:
      "Simple web application, practice of the Zustand. It Simple web game shop",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React-Router-DOM",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/LiRiK000/ZustandShop",
  },
  {
    name: "CollaboraHub",
    description:
      "CollaboraHub is a web application that allows users to create, manage and share their projects",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React-DND",
        color: "green-text-gradient",
      },
      {
        name: "Chakra-UI",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/LiRiK000/CollaboraHub",
  },
  {
    name: "RecipeBook",
    description: "The web application was created to practice RTK",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RTK",
        color: "green-text-gradient",
      },
      {
        name: "Chakra-UI",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/LiRiK000/RecipeBook",
  },
];

export { services, technologies, experiences, projects };
