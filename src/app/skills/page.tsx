import { HoverEffect } from "../../components/ui/CardHoverEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Skills() {
  return (
    <div className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 z-40">
      {" "}
      <div className="">
        <Spotlight duration={3} />
      </div>
      <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>{" "}
      {/* <Hero /> */}
      <div className="min-h-screen flex flex-col px-5 pt-12 text-slate-200 ">
        <div className="pt-4 flex gap-12 px-20 z-10 items-center">
          <TextGenerateEffect
            className="   max-md:text-xl md:text-3xl lg:text-4xl"
            words="Essential Tools I Use"
          />
        </div>
        <div className="  ">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}

// export const projects = [
//   {
//     title: "HTML",
//     icon: "/techIcons/html.svg",
//     link: "",
//   },
//   {
//     title: "CSS",
//     icon: "/techicons/css.svg",
//   },
//   {
//     title: "JAVASCRIPT",
//     icon: "/techIcons/javascript.svg",
//   },
//   {
//     title: "TYPESCRIPT",
//     icon: "/techIcons/typescript.svg",
//   },
//   {
//     title: "C++",
//     icon: "/techIcons/cpp.svg",
//   },
//   {
//     title: "EXPRESS",
//     icon: "/techIcons/express.svg",
//   },
//   {
//     title: "MATERIAL UI",
//     icon: "/techIcons/material.svg",
//   },
//   { title: "MONGO DB", icon: "/techIcons/mongodb.svg" },
//   { title: "NEXTJS", icon: "/techIcons/nextjs.svg" },
//   { title: "NODEJS", icon: "/techIcons/node.svg" },
//   { title: "PYTHON", icon: "/techIcons/python.svg" },
//   { title: "REACT", icon: "/techIcons/react.svg" },
//   { title: "TAILWIND", icon: "/techIcons/tailwind.svg" },
// ];
export const projects = [
  {
    title: "HTML",
    icon: "/techIcons/html.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    icon: "/techicons/css.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JAVASCRIPT",
    icon: "/techIcons/javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TYPESCRIPT",
    icon: "/techIcons/typescript.svg",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    title: "C++",
    icon: "/techIcons/cpp.svg",
    link: "https://en.cppreference.com/w/",
  },
  {
    title: "EXPRESS",
    icon: "/techIcons/express-js.svg",
    link: "https://expressjs.com/",
  },
  {
    title: "MATERIAL UI",
    icon: "/techIcons/material.svg",
    link: "https://mui.com/material-ui/getting-started/",
  },
  {
    title: "MONGO DB",
    icon: "/techIcons/mongodb.svg",
    link: "https://www.mongodb.com/docs/",
  },
  {
    title: "NEXTJS",
    icon: "/techIcons/next.svg",
    link: "https://nextjs.org/docs",
  },
  {
    title: "NODEJS",
    icon: "/techIcons/node.svg",
    link: "https://nodejs.org/en/docs/",
  },
  {
    title: "PYTHON",
    icon: "/techIcons/python.svg",
    link: "https://docs.python.org/3/",
  },
  {
    title: "REACT",
    icon: "/techIcons/react.svg",
    link: "https://react.dev/",
  },
  {
    title: "TAILWIND",
    icon: "/techIcons/tailwind.svg",
    link: "https://tailwindcss.com/docs",
  },
];
