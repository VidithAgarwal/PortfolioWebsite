import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    neu,
    proshop,
    kanbas,
    threejs,
    mitacs,
    pplwork,
    colorgame,
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "API Developer",
      icon: web,
    },
    {
      title: "Cloud Engineer",
      icon: web,
    }
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
      title: "Graduate Teaching Assistant",
      company_name: "Northeastern University",
      icon: neu,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Resolved students’ doubts on Advanced Java concepts, and Object-Oriented Design principles, and monitored student performance for the same.",
        "Facilitated office hours, graded assignments, and assisted students in implementing design patterns like MVC, Command, Adapter, and Builder in Java.",
        "Provided guidance on multithreaded applications and ensured adherence to test-driven development (TDD) practices using JUnit and Mockito.",
        "Debugged student code to resolve errors, enhance understanding, and support successful project implementation.",
      ],
    },
    {
      title: "Mitacs Research Intern",
      company_name: "University INRS",
      icon: mitacs,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Developed a simplified Kalman filter algorithm in Python for enhanced online rating accuracy, leveraging OOP principles and libraries like Pandas and NumPy for data analysis.",
        "Automated sports data extraction and transformation using Selenium and integrated it into a PostgreSQL database for advanced reporting.",
        "Designed a CI/CD pipeline with Docker to streamline data ingestion, automate updates, and deploy models, ensuring efficiency.",
        "Integrated the pipeline with AWS Lambda for scalable cloud-based processing and storage solutions.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "PPLWORK",
      icon: pplwork,
      iconBg: "#383E56",
      date: "Jun 2021 - Sep 2021",
      points: [
        "Built the company's official website using ReactJS, TypeScript, and Material-UI, integrating with RESTful APIs and a microservices architecture for scalability.",
        "Collaborated with design and business teams to align development with business goals, showcasing cross-functional communication skills.",
        "Applied Agile practices to manage the product roadmap and ensure efficient delivery in a dynamic environment.",
        "Delivered a user-friendly, scalable, and visually appealing solution, balancing technical and business priorities effectively.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "ProShop",
      description:
        "A customer facing e-commerce application that allows users to browse products, add them to the cart, and make payments. It also features admin functionality for managing products and orders.",
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
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "palegoldenrod",
        }
      ],
      image: proshop,
      source_code_link: "https://github.com/VidithAgarwal/dlaglobal",
    },
    {
      name: "Kanbas",
      description:
        "Kanbas is a web learning platform, enabling students to access course materials, submit assignments, participate in discussions, and track progress. It features a responsive design for mobile and desktop use.",
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
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "palegoldenrod",
        },
      ],
      image: kanbas,
      source_code_link: "https://github.com/VidithAgarwal/kanbas-react-web-app",
    },
    {
      name: "Color Game",
      description:
        "The Color Game is an interactive web application that challenges users to match colors with their RGB values. It's a fun, engaging way to learn and test color recognition skills.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: colorgame,
      source_code_link: "https://github.com/VidithAgarwal/ColorGame",
    },
  ];
  
  export { services, technologies, experiences, projects };