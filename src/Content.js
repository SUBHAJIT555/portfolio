// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import scss from "./assets/images/Skills/scss.png";
import vite from "./assets/images/Skills/vite.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import java from "./assets/images/Skills/java.png";
import git from "./assets/images/Skills/git.png";
import github from "./assets/images/Skills/github.png";

import university from "./assets/images/Educations/university.png";
import school from "./assets/images/Educations/school.png";

import project1 from "./assets/images/Projects/golf.png";
import project2 from "./assets/images/projects/e-commerce.png";
import project3 from "./assets/images/projects/tictaktoe.png";
import project4 from "./assets/images/projects/notes.png";
import project5 from "./assets/images/projects/weather.png";
import project6 from "./assets/images/projects/calculator.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { RiBallPenLine } from "react-icons/ri";
import { RiBook2Line } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: RiBallPenLine,
    },
    {
      link: "#services",
      icon: RiBook2Line,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SUBHAJIT",
    LastName: "DHALI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1",
        text: "Years of Experinse in Web development",
      },
      {
        count: "6+",
        text: "Projects hosted by me",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "HTML is the foundational markup language for creating and structuring web content.",
        logo: html,
      },
      {
        name: "CSS",
        para: "CSS is used to style and layout web pages, controlling the appearance of HTML elements.",
        logo: css,
      },
      {
        name: "Tailwind CSS",
        para: "Tailwind CSS offers a utility-first approach for building custom designs quickly. With a focus on flexibility and efficiency, it streamlines the process of creating responsive, modern layouts.",
        logo: tailwind,
      },
      {
        name: "SCSS",
        para: "SCSS extends CSS with powerful features like variables, nesting, and mixins for more maintainable and modular styles.",
        logo: scss,
      },
      {
        name: "React js",
        para: "React JS simplifies building dynamic user interfaces with its component-based architecture and efficient state management.",
        logo: reactjs,
      },
      {
        name: "Vite",
        para: "Vite provides a fast and modern build tool for web development, offering instant server start and lightning-fast hot module replacement.",
        logo: vite,
      },
      {
        name: "Node js",
        para:"Node.js enables scalable server-side applications with its non-blocking, event-driven architecture and JavaScript runtime.",
        logo: nodejs,
      },
      {
        name: "Java",
        para: "Java is a versatile, object-oriented programming language known for its portability across platforms through the Java Virtual Machine (JVM).",
        logo: java,
      },
      {
        name: "Git",
        para: "Git is a distributed version control system that tracks changes in source code, enabling collaboration and efficient management of codebases.",
        logo: git,
      },
      {
        name: "GitHub",
        para: "GitHub is a platform for hosting and collaborating on Git repositories, providing tools for version control, issue tracking, and code review.",
        logo: github,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Education",
    subtitle: "MY QUALIFICATIONS",
    service_content: [
      {
        title: "Master of Technology",
        para: "I completed my M.Tech in Computer Science and Engineering with a CGPA of 9.17 from 2021 to 2023. This academic achievement reflects my strong grasp of advanced computing concepts and dedication to excellence throughout my studies.",
        logo: university,
      },
      {
        title: "Bachelor of Technology",
        para: "I earned my B.Tech in Computer Science and Engineering with a CGPA of 8.0 from 2018 to 2021. This foundational education equipped me with essential technical skills and a solid understanding of the field.",
        logo: university,
      },
      {
        title: "Higher Secondary",
        para: "I completed my 10+2 education with a percentage of 67.33, passout in 2017. My studies focused on pure sciences, including Physics, Chemistry, and Mathematics, providing a strong foundation for my future in technology.",
        logo: school,
      },
      {
        title: "Secondary",
        para: "I completed my 10th grade with a percentage of 89.33, passout in 2015. My coursework included a broad range of subjects such as Science, Social Science, and languages like English and Hindi, which laid a strong academic foundation for my future studies.",
        logo: school,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Golf Family",
        image: project1,
        
      },
      {
        title: "E-commerce",
        image: project2,
      },
      {
        title: "TicTacToe Game",
        image: project3,
      },
      {
        title: "Skicky Notes",
        image: project4,
      },
      {
        title: "Weather App",
        image: project5,
      },
      {
        title: "Calculator App",
        image: project6,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Absolutely impressed with SUBHAJIT DHALI's work! Their front-end development skills are top-notch, creating sleek, user-friendly websites that stand out. Highly recommend!”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“SUBHAJIT DHALI consistently delivers exceptional front-end designs that are both visually stunning and highly functional. A true professional in the field!”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“SUBHAJIT DHALI creates flawless, engaging front-end designs with remarkable skill and precision. Highly recommended!”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“SUBHAJIT DHALI crafts beautiful, responsive websites with exceptional skill. Highly recommended!”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "for your projects...",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "As a front-end developer, I excel at building interactive, responsive webpages with engaging animations. My skills in HTML, CSS, JavaScript, ReactJs ensure that I deliver visually appealing and functional designs that enhance user experiences. I’m eager to bring my expertise and creativity to your team to create impactful web solutions.",
    btnText:  "Hire Me",
    
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Subhajit Dhali",
        icon: GrMail,
        link: "mailto:subhajitdhali0@gmail.com",
      },
      {
        text: "WhatsApp",
        icon: MdCall,
        link: "https://wa.me/8436464937",
      },
      {
        text: "SUBHAJIT555",
        icon: GrGithub,
        link: "https://github.com/SUBHAJIT555",
      },
      {
        text: "_ig.exe",
        icon: BsInstagram,
        link: "https://www.instagram.com/_ig.exe/",
      },
      {
        text: "Subhajit Dhali",
        icon: GrFacebook,
        link: "https://www.facebook.com/subhajit.dhali.7",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
