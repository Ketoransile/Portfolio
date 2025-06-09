import { ProjectsCard } from "@/components/ProjectsCard";
import { PinContainer } from "@/components/ui/3d-pin";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
  iconLists: string[];
  liveLink: string;
  githubLink: string;
  backend_githubLink?: string;
};

const projects: Project[] = [
  {
    id: 1, // Assign a new unique ID
    title: "AI-Powered Resume Analyzer",
    description:
      "An innovative web application that leverages AI (GPT-4.1) to analyze resumes against job descriptions, providing instant fit scores and actionable feedback to optimize job applications.",
    img: "/projectsPictures/resumeAnalyzer.png", // **Suggesting a new image path here, you'll need to create or use an appropriate image.**
    iconLists: [
      "/techIcons/next.svg",
      "/techIcons/typescript.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg", // Assuming MongoDB for the backend, adjust if different
      "/techIcons/node.svg", // Assuming Node.js for backend, adjust if different
      "/techIcons/express.svg", // Assuming Express for backend, adjust if different
      "/techIcons/openai.svg", // Representing the AI aspect (GPT-4.1)
    ],
    liveLink: "https://resume-analyzer-frontend-delta.vercel.app/",
    githubLink: "https://github.com/Ketoransile/ResumeAnalyzerFrontend", // This is the frontend link
    // Consider adding a backend_githubLink if you have a separate backend repo
    backend_githubLink: "https://github.com/Ketoransile/ResumeAnalyzerBackend", // Example if you have a separate backend repo
  },
  {
    id: 2,
    title: "Ethio Shop Ecommerce",
    description:
      "A sleek and scalable ecommerce app built with modern tools like Next.js and Stripe. Features include product browsing, secure checkout, and responsive performance for a smooth shopping experience.",
    img: "/projectsPictures/ethioShop.png",
    iconLists: [
      "/techIcons/next.svg",
      "/techIcons/typescript.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/stripe.png",
      "/techIcons/mongodb.svg",
    ],
    liveLink: "https://ethio-shop.vercel.app/",
    githubLink: "https://github.com/Ketoransile/EthioShop",
  },
  {
    id: 3,
    title: "NextJobs",
    description:
      "A modern job application platform built with Next.js and a Node.js/Express backend. Users can browse job listings, filter by category or location, and apply directly with an intuitive and responsive interface.",
    img: "/projectsPictures/nextJobs.png", // You might want to change this image to something job-related
    iconLists: [
      "/techIcons/next.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/typescript.svg",
      "/techIcons/node.svg",
      "/techIcons/javascript.svg",
      "/techIcons/express.svg",
    ],
    liveLink: "https://job-portal-omega-flame.vercel.app/", // Update if you have a new deployment link for the job platform
    githubLink: "https://github.com/Ketoransile/JobPortal", // Update if repo name changes
  },
  {
    id: 4,
    title: "Food Delivery App",
    description:
      "A modern food delivery platform using Next.js with SSR and SSG. Users can browse restaurants, view menus, and place orders through a smooth and responsive interface designed for performance.",
    img: "/projectsPictures/foodDelivery.png",
    iconLists: [
      "/techIcons/next.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/typescript.svg",
    ],
    liveLink: "https://food-delivery-nextjs-gamma.vercel.app/",
    githubLink: "https://github.com/Ketoransile/FoodDeliveryNextjs",
  },
  {
    id: 5,
    title: "Bet Real Estate Platform",
    description:
      "A dynamic real estate platform built with the MERN stack. Enables users to explore properties, connect with agents, and manage listings through a clean, responsive interface and robust backend.",
    img: "/projectsPictures/betRealEstate.png",
    iconLists: [
      "/techIcons/react.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/express-js.svg",
      "/techIcons/javascript.svg",
    ],
    liveLink: "https://bet-real-estate.vercel.app/",
    githubLink: "https://github.com/Ketoransile/Bet-Real-EstateProject",
  },
  {
    id: 6,
    title: "YourNote - Note Taking Web App",
    description:
      "YourNote is a sleek, responsive web app for creating and managing notes effortlessly, backed by a reliable and robust backend",
    img: "/projectsPictures/yourNote.png",
    iconLists: [
      "/techIcons/react.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/express-js.svg",
      "/techIcons/javascript.svg",
    ],
    liveLink: "https://yournote-3pnr.onrender.com",
    githubLink: "https://github.com/Ketoransile/YourNote",
  },

  // {
  //   id: 4,
  //   title: "YourNote note taking web app",
  //   description:
  //     "A fast and responsive note-taking app built with the MERN stack (MongoDB, Express, React, Node.js), offering seamless organization, real-time syncing, and a user-friendly interface.",
  //   img: "/projectsPictures/yourNote.png",
  //   iconLists: [
  //     "/techIcons/react.svg",
  //     "/techIcons/tailwind.svg",
  //     "/techIcons/mongodb.svg",
  //     "/techIcons/express-js.svg",
  //     "/techIcons/javascript.svg",
  //   ],
  //   liveLink: "https://yournote-3pnr.onrender.com/",
  //   githubLink: "https://github.com/Ketoransile/EthioShop",
  // },
];

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className="relative bg-black-100 flex items-center overflow-hidden flex-col mx-auto sm:px-10 px-5 max-lg:pb-20 pb-20">
        <Spotlight duration={3} />

        <div className="w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.6] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 h-full">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] h-full" />
        </div>

        <TextGenerateEffect
          className="max-md:text-xl md:text-3xl lg:text-4xl pt-12 pb-0"
          words="Code in Action"
        />

        <div className="z-10 grid items-center justify-center gap-12 lg:grid-cols-2 xl:grid-cols-3 pt-20 pb-20">
          {projects.map((project, index) => (
            <ProjectsCard project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
