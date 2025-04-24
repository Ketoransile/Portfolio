// import React from "react";
// import { FaLocationArrow } from "react-icons/fa6";
// // import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/text-generate-effect";
// import Link from "next/link";
// import MagicButton from "./ui/MagicButton";
// import { TypewriterEffect } from "./ui/TypewriterEffect";

// const Hero = () => {
//   return (
//     <div className="">
//       <div className="flex justify-center relative  my-20  ">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <TypewriterEffect
//             words={[
//               { text: "Crafting" },
//               { text: "Scalable" },
//               { text: "&" },
//               { text: "Innovative" },
//               { text: "Digital" },
//               { text: "Solution" },
//             ]}
//             className="max-md:text-xs md:text-sm lg:text-sm  text-slate-400 font-serif"
//           />
//           <TextGenerateEffect
//             className="text-center  text-3xl lg:text-4xl"
//             words="Abdi Sileshi"
//           />
//           <TextGenerateEffect
//             className="text-center  text-5xl lg:text-5xl"
//             words="Software Engineer | Full-Stack Developer"
//           />

//           <Link href="/projects" className="max-md:pt-32">
//             <MagicButton
//               title="Show My Work"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// const Hero = () => {
//   return (
//     <div className="">
//       <div className="flex justify-center relative my-20">
//         <motion.div
//           className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
//           variants={container}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={item}>
//             <TypewriterEffect
//               words={[
//                 { text: "Crafting" },
//                 { text: "Scalable" },
//                 { text: "&" },
//                 { text: "Innovative" },
//                 { text: "Digital" },
//                 { text: "Solution" },
//               ]}
//               className="max-md:text-xs md:text-sm lg:text-sm text-slate-400 font-serif"
//             />
//           </motion.div>

//           <motion.div variants={item}>
//             <TextGenerateEffect
//               className="text-center text-3xl lg:text-4xl"
//               words="Abdi Sileshi Worku"
//             />
//           </motion.div>

//           <motion.div variants={item}>
//             <TextGenerateEffect
//               className="text-center text-2xl lg:text-5xl mt-4"
//               words="Software Engineer || Full-Stack Developer"
//             />
//           </motion.div>

//           <motion.div
//             variants={item}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="max-md:pt-32"
//           >
//             <Link href="/projects">
//               <MagicButton
//                 title="Show My Work"
//                 icon={<FaLocationArrow />}
//                 position="right"
//               />
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
const Hero = () => {
  return (
    <div className="px-4">
      {" "}
      {/* Add padding for mobile */}
      <div className="flex justify-center relative my-20">
        <motion.div
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Typewriter Intro */}
          <motion.div variants={item}>
            <TypewriterEffect
              words={[
                { text: "Crafting" },
                { text: "Scalable" },
                { text: "&" },
                { text: "Innovative" },
                { text: "Digital" },
                { text: "Solutions" },
              ]}
              className="max-md:text-xs md:text-sm lg:text-sm text-slate-400 font-serif"
            />
          </motion.div>

          {/* Name */}
          <motion.div variants={item}>
            <TextGenerateEffect
              className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4"
              words="Abdi Sileshi Worku"
            />
          </motion.div>

          {/* Role + Style Boosted + Mobile Friendly */}
          <motion.div variants={item}>
            <TextGenerateEffect
              className="text-xl md:text-2xl lg:text-4xl mt-4 leading-snug"
              words="💡 Software Engineer | Full-Stack Developer ⚙️"
            />
            <p className="text-sm md:text-base mt-2 text-gray-400 max-w-xs mx-auto">
              Turning coffee ☕ into code — building clean, scalable web apps
              that solve real problems 🚀.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="max-md:pt-24 md:pt-12"
          >
            <Link href="/projects">
              <MagicButton
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
