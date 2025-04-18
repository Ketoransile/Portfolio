// import { PinContainer } from "@/components/ui/3d-pin";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import Image from "next/image";
// import { FaLocationArrow } from "react-icons/fa";

// type Project = {
//   id: number;
//   title: string;
//   description: string;
//   img: string;
//   iconLists: string[]; // Fixed typo to match the prop name
//   link: string;
// };
// interface ProjectsComponentProps {
//   projects: Project[]; // Array of ProjectProps
// }
// const ProjectsPage: React.FC<ProjectsComponentProps> = () => {
//   const projects: Project[] = [
//     {
//       id: 1,
//       title: "Food Delivery App",
//       description: "A modern, responsive food delivery web application built with Next.js, offering seamless user experiences with server-side rendering (SSR) and static site generation (SSG). The app features a user-friendly interface for browsing restaurants, viewing menus, and placing orders.",
//       img: "/projectsPictures/foodDelivery.png",
//       iconLists: [
//         "/techIcons/next.svg",
//         "/techIcons/tailwind.svg",
//         "/techIcons/mongodb.svg",
//         "/techIcons/typescript.svg",
//         // "/fm.svg",
//       ],
//       link: "https://food-delivery-nextjs-gamma.vercel.app/",
//     },
//     // {
//     //   id: 2,
//     //   title: "MindQuest Quiz App",
//     //   description: "A full-stack quiz management platform that allows administrators to create, manage, and categorize quizzes efficiently.The app features an intuitive admin dashboard for quiz management, seamless API communication with Axios, and efficient state management with Zustand",
//     //   img: "/projectsPictures/mindQuest.png",
//     //   iconLists: [
//     //     "/techIcons/react.svg",
//     //     "/techIcons/tailwind.svg",
//     //     "/techIcons/node.svg",
//     //     "/techIcons/mongodb.svg",
//     //     "/techIcons/express-js.svg",
//     //     "/techIcons/javascript.svg",
//     //   ],
//     //   link: "https://mindquestmernonrender.onrender.com",
//     // },
//     {
//       id: 3,
//       title: "Bet Real Estate Platform",
//       description: "A modern real estate web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to connect buyers, sellers, and renters with properties seamlessly.",
//       img: "/projectsPictures/betRealEstate.png",
//       iconLists: [
//         "/techIcons/react.svg",
//         "/techIcons/tailwind.svg",
//         // "/techIcons/node.svg",
//         "/techIcons/mongodb.svg",
//         "/techIcons/express-js.svg",
//         "/techIcons/javascript.svg",
//       ],
//       link: "https://bet-real-estate.vercel.app/",
//     },
//   ];
//   return (
//     <>
//       <div className="min-h-screen relative bg-black-100 flex  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-lg:pb-20 ">
//         <div className="">
//           <Spotlight duration={3} />
//         </div>
//         <div className="min-h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
//           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//         </div>{" "}
//         <TextGenerateEffect
//           className="max-md:text-xl md:text-3xl lg:text-4xl pt-12 pb-0"
//           words="Things I've Built"
//         />
//         <div className="flex flex-wrap items-center justify-center p-4 pt-0  gap-16 ">
//           {projects.map((item) => (
//             <div
//               className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
//               key={item.id}
//             >
//               <PinContainer title={item.link} href={item.link}>
//                 <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
//                   <div
//                     className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                     style={{ backgroundColor: "#13162D" }}
//                   ></div>
//                   <Image
//                     src={item.img}
//                     alt="cover"
//                     className="z-10 absolute bottom-0"
//                     width={800}
//                     height={800}
//                   />
//                 </div>

//                 <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                   {item.title}
//                 </h1>

//                 <p
//                   className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//                   style={{
//                     color: "#BEC1DD",
//                     margin: "1vh 0",
//                   }}
//                 >
//                   {item.description}
//                 </p>

//                 <div className="flex items-center justify-between mt-7 mb-3">
//                   <div className="flex items-center">
//                     {item.iconLists.map((icon, index) => (
//                       <div
//                         key={index}
//                         className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                         style={{
//                           transform: `translateX(-${5 * index + 2}px)`,
//                         }}
//                       >
//                         <Image
//                           src={icon}
//                           alt="icon5"
//                           className="p-2"
//                           width={64}
//                           height={64}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex justify-center items-center">
//                     <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//                       Check Live Site
//                     </p>
//                     <FaLocationArrow className="ms-3" color="#CBACF9" />
//                   </div>
//                 </div>
//               </PinContainer>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectsPage;

import { SkillsCard } from "@/components/SkillsCard";
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
};

const projects: Project[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
      <div className="relative bg-black-100 flex items-center overflow-hidden flex-col mx-auto sm:px-10 px-5 max-lg:pb-20">
        <Spotlight duration={3} />

        <div className="w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.6] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 h-full">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] h-full" />
        </div>

        <TextGenerateEffect
          className="max-md:text-xl md:text-3xl lg:text-4xl pt-12 pb-0"
          words="Things I've Built"
        />

        <div className="z-10 grid items-center justify-center gap-12 sm:grid-cols-2 lg:grid-cols-3 pt-20 pb-20">
          {projects.map((project, index) => (
            <SkillsCard project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
