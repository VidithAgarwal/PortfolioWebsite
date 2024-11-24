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
    meta,
    neu,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mitacs,
    pplwork,
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
  
  export { services, technologies, experiences, projects };