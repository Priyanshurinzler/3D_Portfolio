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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "System Engineer",
      company_name: "Cerner",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2021 - Oct 2023",
      points: [
        "Worked on IBM Message Queue upgrade for OEL servers, IBM WAS Fix pack for reliability and performance enhancements.",
        "DR Activations - Disaster Recovery Server sets for every client group are activated, tested, deployed, and deactivated every year for maintenance and sustainability.",
        "Executed activities like Migration, Upgrade, Installation, and Administration",
        "Led a Change Management team, responsible for auditing and reporting Change Requests (CRQs) in BMC Remedy.",
      ],
    },
    {
      title: "System Analyst",
      company_name: "Oracle Cerner",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "Performed AWS Deployment and On-Prem Deployments for clients in US, UK, Australia, Canada and Sweden regions and monitoring, testing and maintain servers and troubleshooting error.",
        "Working on cloud technologies such as AWS, Jenkins, Spinnaker, Chef and GitHub along with Linux, OEL OS and other tools for Deployment.",
        "Worked in 12*7 on-call support role for critical healthcare solutions, showcasing expertise in urgent issue resolution and healthcare technology.",
        "Analyzing applications for their performances before and after deployments, during abnormal behaviors.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Self Employed",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Exploring the world of Web Development, acquiring and honing new skills all the while.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "The zeal to learn & improve on a regular basis, grasping new concepts promptly are some of the key qualities displayed by Priyanshu.",
      name: "ABC",
      designation: "Tech Arch",
      company: "Oracle Cerner",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Priyanshu has always made it a point to be available at a moment's notice whenever he's called upon.",
      name: "XYZ",
      designation: "SI",
      company: "Oracle Cerner",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Production Upgrades performed by Priyanshu have always been carried out with the utmost care and precision. ",
      name: "PQR",
      designation: "IT Supervisor",
      company: "Oracle Cerner",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "typeScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Priyanshurinzler/car_head",
    },
    {
      name: "IT DashBoard",
      description:
        "Web application that enables users to view and interact with a real world functional dashboard containing all functionality one might come across in the professional world.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Priyanshurinzler/react-dashboard",
    },
    {
      name: "Fit Zone",
      description:
        "A comprehensive exercise platform that is a One-Stop shop for all fitness enthusiasts out there, providing a detailed overview on exercises for all body parts.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialUI",
          color: "green-text-gradient",
        },
        {
          name: "rapidAPI",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://exercisept.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };