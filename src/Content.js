// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import fusion from "./assets/images/Skills/360.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";
import services_logo5 from "./assets/images/Services/logo5.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
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
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiProjectorLine,
    },
    {
      link: "#projects",
      icon: RiServiceLine,
    },
  ],
  hero: {
    title: "Designer",
    firstName: "Aditya",
    LastName: "Chaudhari",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "Undergrad @ DoD, IIT Delhi",
      },
      // {
      //   count: "20+",
      //   text: "Projects Worked in my career",
      // },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Fusion 360",
        para: "Lorem ipsum text  dummy",
        logo: fusion,
      },

      {
        name: "Adobe Illustrator",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Assignments",
    subtitle: "",
    service_content: [
      {
        title: "Makey Makey",
        para: "Keytar using Makey Makey",
        logo: services_logo1,
        link: "https://www.behance.net/gallery/169010189/Makey-Makey",
      },
      {
        title: "Website",
        para: "Portfolio website using Reactjs, vite, Tailwind CSS",
        logo: services_logo5,
        link: "https://www.behance.net/gallery/168985845/Website-Design",
      },
      {
        title: "Scratch",
        para: "Dino Game using Scratch",
        logo: services_logo2,
        link: "https://www.behance.net/gallery/168225927/dino-game",
      },
      {
        title: "Arduino",
        para: "Microcontroller Programming",
        logo: services_logo4,
        link: "https://www.behance.net/gallery/169004253/Microcontroller-programming",
      },
      {
        title: "Arduino",
        para: "Input and Output Devices",
        logo: services_logo3,
        link: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "",
    image: person_project,
    project_content: [
      {
        title: "Project 1",
        image: project1,
      },
      {
        title: "Project 2",
        image: project2,
      },
      {
        title: "Project 3",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "About Me",
    subtitle: "",
    social_media: [
      {
        text: "adityachaudhari911@gmail.com",
        icon: GrMail,
        link: "mailto:aditychaudhari911@gmail.com",
      },
      {
        text: "+91 8826745856",
        icon: MdCall,
        link: "https://wa.me/+918826745856",
      },
      {
        text: "Aditya Chaudhari",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/aditya-chaudhari-876676148/",
      },
      {
        text: "__adityachaudhari__",
        icon: BsInstagram,
        link: "https://www.instagram.com/__adityachaudhari__/",
      },
    ],
  },
};
