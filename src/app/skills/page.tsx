// import { HoverEffect } from "../../components/ui/CardHoverEffect";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// export default function Skills() {
//   return (
//     <div className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 z-40">
//       {" "}
//       <div className="">
//         <Spotlight duration={3} />
//       </div>
//       <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>{" "}
//       {/* <Hero /> */}
//       <div className="min-h-screen flex flex-col px-5 pt-12 text-slate-200 ">
//         <div className="pt-4 flex gap-12 px-20 z-10 items-center">
//           <TextGenerateEffect
//             className=" text-center  max-md:text-xl md:text-3xl lg:text-4xl"
//             words="Essential Tools I Use"
//           />
//         </div>
//         <div className="  ">
//           <HoverEffect items={projects} />
//         </div>
//       </div>
//     </div>
//   );
// }

// const projects = [
//   {
//     title: "HTML",
//     icon: "/techIcons/html.svg",
//     link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
//   },
//   {
//     title: "CSS",
//     icon: "/techIcons/css.svg",
//     link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
//   },
//   {
//     title: "JAVASCRIPT",
//     icon: "/techIcons/javascript.svg",
//     link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//   },
//   {
//     title: "TYPESCRIPT",
//     icon: "/techIcons/typescript.svg",
//     link: "https://www.typescriptlang.org/docs/",
//   },
//   {
//     title: "C++",
//     icon: "/techIcons/cpp.svg",
//     link: "https://en.cppreference.com/w/",
//   },
//   {
//     title: "EXPRESS",
//     icon: "/techIcons/express-js.svg",
//     link: "https://expressjs.com/",
//   },
//   {
//     title: "MATERIAL UI",
//     icon: "/techIcons/material.svg",
//     link: "https://mui.com/material-ui/getting-started/",
//   },
//   {
//     title: "MONGO DB",
//     icon: "/techIcons/mongodb.svg",
//     link: "https://www.mongodb.com/docs/",
//   },
//   {
//     title: "NEXTJS",
//     icon: "/techIcons/next.svg",
//     link: "https://nextjs.org/docs",
//   },
//   {
//     title: "NODEJS",
//     icon: "/techIcons/node.svg",
//     link: "https://nodejs.org/en/docs/",
//   },
//   {
//     title: "PYTHON",
//     icon: "/techIcons/python.svg",
//     link: "https://docs.python.org/3/",
//   },
//   {
//     title: "REACT",
//     icon: "/techIcons/react.svg",
//     link: "https://react.dev/",
//   },
//   {
//     title: "TAILWIND",
//     icon: "/techIcons/tailwind.svg",
//     link: "https://tailwindcss.com/docs",
//   },
// ];
"use client";
import { SkillsList } from "@/components/SkillsList";
import { HoverEffect } from "../../components/ui/CardHoverEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

const frontend = [
  {
    title: "HTML",
    icon: "/techIcons/html.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    icon: "/techIcons/css.svg",
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
    title: "MATERIAL UI",
    icon: "/techIcons/material.svg",
    link: "https://mui.com/material-ui/getting-started/",
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
  {
    title: "NEXTJS",
    icon: "/techIcons/next.svg",
    link: "https://nextjs.org/docs",
  },
];
const backend = [
  {
    title: "EXPRESS",
    icon: "/techIcons/express-js.svg",
    link: "https://expressjs.com/",
  },

  {
    title: "MONGO DB",
    icon: "/techIcons/mongodb.svg",
    link: "https://www.mongodb.com/docs/",
  },

  {
    title: "NODEJS",
    icon: "/techIcons/node.svg",
    link: "https://nodejs.org/en/docs/",
  },
  {
    title: "POSTGRESQL",
    icon: "/techIcons/postgresql.svg", // You'll need to source this SVG icon
    link: "https://www.postgresql.org/docs/",
  },
];
const tools = [
  {
    title: "FIGMA",
    icon: "/toolsImage/figma.svg",
    link: "https://www.figma.com/",
  },
  {
    title: "GIT",
    icon: "/toolsImage/git.svg",
    link: "https://git-scm.com/doc",
  },
  {
    title: "GITHUB",
    icon: "/toolsImage/github.svg",
    link: "https://docs.github.com/en",
  },
  {
    title: "NETLIFY",
    icon: "/toolsImage/netlify.svg",
    link: "https://docs.netlify.com/",
  },
  {
    title: "VERCEL",
    icon: "/toolsImage/vercel.svg",
    link: "https://vercel.com/docs",
  },
  {
    title: "NPM",
    icon: "/toolsImage/npm.svg",
    link: "https://docs.npmjs.com/",
  },
  {
    title: "VITE", // Corrected 'vit' to 'Vite'
    icon: "/toolsImage/vite.svg",
    link: "https://vitejs.dev/guide/",
  },
  {
    title: "VS CODE",
    icon: "/toolsImage/vscode.svg",
    link: "https://code.visualstudio.com/docs",
  },
];
const programming = [
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
    title: "PYTHON",
    icon: "/techIcons/python.svg",
    link: "https://docs.python.org/3/",
  },
];
export default function Skills() {
  return (
    <div className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 z-40 mb-20">
      <Spotlight duration={3} />

      <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="min-h-screen flex flex-col items-center  px-5 pt-12 text-slate-200 z-10">
        <motion.div
          className="pt-4 flex gap-12 px-20 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TextGenerateEffect
            className="text-center max-md:text-xl md:text-3xl lg:text-4xl"
            words="<Tech Stack/>"
          />
        </motion.div>
        <div className="grid max-lg:grid-cols-1 grid-cols-2 items-start gap-y-6 gap-x-48">
          <motion.div
            className="mt-12 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <TextGenerateEffect
              className="text-center max-md:text-md md:text-xl lg:text-2xl"
              words="Front-End ()"
            />
            <SkillsList skills={frontend} />
            {/* <HoverEffect items={projects} /> */}
          </motion.div>
          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {" "}
            <TextGenerateEffect
              className="text-center max-md:text-md md:text-xl lg:text-2xl"
              words="Back-End ()"
            />
            <SkillsList skills={backend} />
            {/* <HoverEffect items={projects} /> */}
          </motion.div>
          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {" "}
            <TextGenerateEffect
              className="text-center max-md:text-md md:text-xl lg:text-2xl"
              words="Programming ()"
            />
            <SkillsList skills={programming} />
            {/* <HoverEffect items={projects} /> */}
          </motion.div>
          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.9,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {" "}
            <TextGenerateEffect
              className="text-center max-md:text-md md:text-xl lg:text-2xl"
              words="Tech & Tools ()"
            />
            <SkillsList skills={tools} />
            {/* <HoverEffect items={projects} /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
