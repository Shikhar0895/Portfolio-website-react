import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

import { t3 } from "../assets";

const sidebarLinks = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "About",
    id: "AboutSection",
  },
  {
    title: "Projects",
    id: "Projects",
  },

  {
    title: "Exp.",
    id: "Exp",
  },
  {
    title: "Contact",
    id: "Contact",
  },
];

const sidebarLinksforsm = [
  {
    title: "About",
    id: "AboutSection",
  },
  {
    title: "Projects",
    id: "Projects",
  },
  {
    title: "Exp.",
    id: "Exp",
  },
  {
    title: "Contact",
    id: "Contact",
  },
];

const navbarIcons = [
  {
    id: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/codename08_/?hl=en",
  },
  { id: "github", icon: <FaGithub />, link: "https://github.com/Shikhar0895" },
  {
    id: "twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/Cod3name_08",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/contact-shikhars/",
  },
];

const Techtabs = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
];

const ProjectDetails = [
  {
    name: "T3",
    image: t3,
    gitLink:
      "https://github.com/Shikhar0895/Tic-Tac-Toe/tree/master/live%20vanilla%20JS",
    extLink: "https://tic-tic-toe-test.vercel.app/",
    desc: "A simple tic-tac-toe app reinforcing some key learnings like DOM manipulation , MVC architecture, and some CSS transitions",
    techUsed: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    name: "foodDeliveryApp",
    image: t3,
    gitLink: "foodeliveryURL",
    extLink: "foodDeliveryApp",
    desc: "A react based food delivery App clone illustrates product listing, search, adding to cart flow, working with live API etc. ",
    techUsed: ["REACT", "TAILWINDCSS", "REDUX"],
  },
  {
    name: "AdoptPet",
    image: t3,
    gitLink: "https://github.com/Shikhar0895/Adopt_Pet.git",
    extLink: "https://shikhar0895.github.io/Adopt_Pet/",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et quo minus",
    techUsed: ["1", "2", "3"],
  },
];

const exp = {
  company: "Tata Consultancy Services Ltd",
  duration: "2020 - 2022",
  designation: "Asst. Systems Engineer",
  location: "Kolkata",
  desc: [
    "Worked as Java/sql developer where my key responsibility were to manage payroll processing and other solving incidents related to the Pension Domain and Taxation domain for Railway Pensioner managing Client.",
    "Developed Complex sql queries to streamline the weekly payroll process which resulted improved the overall pace of the process by 30%",
  ],
  Tech: ["OracleSQL", "Java", "Git"],
};

export {
  sidebarLinks,
  navbarIcons,
  sidebarLinksforsm,
  Techtabs,
  ProjectDetails,
  exp,
};
