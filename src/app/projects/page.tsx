import { PinContainer } from "@/components/ui/3d-pin";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

type projectProps = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[]; // Fixed typo to match the prop name
  link: string;
};
export default function Proejcts() {
  return (
    <>
      <div className="min-h-screen relative bg-black-100 flex  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-lg:pb-20 ">
        <div className="">
          <Spotlight duration={3} />
        </div>
        <div className="min-h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>{" "}
        {/* // </div> */}
        {/* <div className="text-center  px-5 pt-20 text-slate-200 "> */}
        {/* <div className="pt-4 flex gap-12 px-20 z-10 items-center"> */}
        <TextGenerateEffect
          // className=" text-[40px] md:text-3xl lg:text-4xl pt-4"
          className="max-md:text-xl md:text-3xl lg:text-4xl pt-12 pb-0"
          words="Things I've Built"
        />
        {/* <div className="flex flex-wrap justify-center gap-8 p-4 z-10">
          {projects.map(
            ({ id, title, des, img, iconLists, link }: projectProps) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw]"
                key={id}
              >
                <PinContainer title={title} href={link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                      <img
                        src={img}
                        alt={title}
                        className="z-10 absolute bottom-0"
                        // width={32}
                        // height={32}
                      />
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {title}
                    </h1>
                  </div>
                </PinContainer>
              </div>
            )
          )}
        </div> */}
        <div className="flex flex-wrap items-center justify-center p-4 pt-0  gap-16 ">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.link} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    {/* <img src="/bg.png" alt="bgimg" /> */}
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    des: "A modern, responsive food delivery web application built with Next.js, offering seamless user experiences with server-side rendering (SSR) and static site generation (SSG). The app features a user-friendly interface for browsing restaurants, viewing menus, and placing orders.",
    img: "/projectsPictures/foodDelivery.png",
    iconLists: [
      "/techIcons/next.svg",
      "/techIcons/tailwind.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/typescript.svg",
      // "/fm.svg",
    ],
    link: "https://food-delivery-nextjs-gamma.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "MindQuest Quiz App",
  //   des: "A full-stack quiz management platform that allows administrators to create, manage, and categorize quizzes efficiently.The app features an intuitive admin dashboard for quiz management, seamless API communication with Axios, and efficient state management with Zustand",
  //   img: "/projectsPictures/mindQuest.png",
  //   iconLists: [
  //     "/techIcons/react.svg",
  //     "/techIcons/tailwind.svg",
  //     "/techIcons/node.svg",
  //     "/techIcons/mongodb.svg",
  //     "/techIcons/express-js.svg",
  //     "/techIcons/javascript.svg",
  //   ],
  //   link: "https://mindquestmernonrender.onrender.com",
  // },
  {
    id: 3,
    title: "Bet Real Estate Platform",
    des: "A modern real estate web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to connect buyers, sellers, and renters with properties seamlessly.",
    img: "/projectsPictures/betRealEstate.png",
    iconLists: [
      "/techIcons/react.svg",
      "/techIcons/tailwind.svg",
      // "/techIcons/node.svg",
      "/techIcons/mongodb.svg",
      "/techIcons/express-js.svg",
      "/techIcons/javascript.svg",
    ],
    link: "https://bet-real-estate.vercel.app/",
  },
];
