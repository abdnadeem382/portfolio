import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  git,
  reactQuery,
  docker,
  emumba,
  nova,
  carrent,
  jobit,
  tripguide,
  threejs,
  sass,
  andy,
  james,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "react query",
    icon: reactQuery,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "Front-end Web Developer",
    company_name: "Emumba",
    icon: emumba,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      "Developed and maintained large applications using cutting-edge technologies",
      "Implemented responsive and pixel perfect UI while ensuring cross-browser compatibility.",
      "Wrote clean and reusable code using DRY principle.",
      "Worked with a mentor to work on self learning and achieving weekly or quarterly goals. ",
      "Reviewed merge requests to ensure better code quality and suggested better approaches to solve problems",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "We Are Nova",
    icon: nova,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Oct 2022",
    points: [
      "Developed and maintained web applications using multiple technologies including React, React Native, NextJS and ASP .NET",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products in an agile environment",
      "Implemented responsive and pixel perfect UI while ensuring cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
      "Wrote reusable code and unit tests.",
      "Performed R&Ds to implement features in an optimal way.",
      "Worked in a Scrum or Kanban and attending BLRs, Retrospectives and Daily Standups.",
      "Occasionally held small sessions on different technologies for colleagues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abdullah joined Nova a year ago as part of our internship programme. I worked with him directly on a number of internal projects, and I was impressed by his willingness to take on new challenges and learn new skills in order to solve a problem. He is a quick learner and excellent communicator, and would be a great addition to any software engineering department. I have no hesitation in recommending him.",
    name: "Andrew Speakman",
    designation: "CTO",
    company: "We Are Nova",
    image: andy,
  },
  {
    testimonial:
      "Abdullah is a problem solver, great communicator and overall brilliant software engineer. He's been on my team for while and he's brought solid ideas to the table, whilst being able to work towards tight deadlines. He's never been afraid to reach out if he comes across blockers and he's always been on time for meetings. I would highly recommend him.",
    name: "James Hutchinson",
    designation: "Ex Product Manager",
    company: "We Are Nova",
    image: james,
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
