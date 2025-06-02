// import MagicButton from "@/components/ui/MagicButton";
// import ShimmerButton from "@/components/ui/ShimmerButton";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import Image from "next/image";
// import Link from "next/link";
// import { FaLocationArrow } from "react-icons/fa";

// export default function About() {
//   return (
//     <div className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-lg:pb-20 ">
//       <div className="">
//         <Spotlight duration={3} />
//       </div>

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.5] bg-grid-black/[0.4] flex items-center justify-center absolute top-0 left-0 z-0">
//         <div className="min-h-screen absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
//       </div>
//       <div className="min-h-screen flex flex-col px-5 pt-20 text-slate-200 ">
//         <div className="pt-4 flex gap-12 px-20 max-xl:px-2 max-md:px-0 items-center max-xl:grid grid-cols-1 z-10">
//           <Image
//             src="/abdiImageFinal.png"
//             width={400}
//             height={400}
//             alt="my-image"
//             className="object-contain rounded-t-full rounded-b-full max-xl:w-64 max-lg:w-32"
//           />
//           <div className="flex flex-col">
//             {" "}
//             <TextGenerateEffect
//               className=" text-[40px] md:text-3xl lg:text-4xl"
//               words="Profile"
//             />
//             <p className="text-lg xl:max-w-[800px] max-xl:w-full text-slate-300 ">
//               I’m Abdi, a Software Engineer and Full-Stack Developer passionate
//               about building innovative, scalable, and user-centric web
//               applications. With expertise in the MERN stack, Next.js, and
//               Python, I specialize in designing and developing efficient digital
//               solutions that enhance user experience and performance. I have a
//               strong foundation in software engineering principles, allowing me
//               to architect robust systems while staying up-to-date with modern
//               technologies like TypeScript, Prisma, Tailwind CSS, and ShadCN.
//               Whether it&apos;s crafting seamless frontend experiences or
//               building powerful backend infrastructures, I thrive on solving
//               complex problems and delivering high-quality software. Driven by
//               continuous learning and innovation, I aim to create impact-driven
//               solutions that bridge technology and real-world needs. Let’s build
//               something amazing together!
//             </p>
//             <div className="flex gap-12 max-lg:pt-10 items-center">
//               <Link href="/contact">
//                 <MagicButton
//                   title="HIRE ME"
//                   icon={<FaLocationArrow />}
//                   position="right"
//                 />
//               </Link>
//               <Link
//                 href="https://drive.google.com/file/d/1mniTWSivoSO-FwA5lKHXx58UY_bewirH/view?usp=sharing"
//                 target="_blank"
//               >
//                 <ShimmerButton title="RESUME" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import MagicButton from "@/components/ui/MagicButton";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-lg:pb-20 ">
      <div className="">
        <Spotlight duration={3} />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.5] bg-grid-black/[0.4] flex items-center justify-center absolute top-0 left-0 z-0">
        <div className="min-h-screen absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      </div>

      <div className="min-h-screen flex flex-col px-5 pt-20 text-slate-200">
        <motion.div
          className="pt-4 flex gap-12 px-20 max-xl:px-2 max-md:px-0 items-center max-xl:grid grid-cols-1 z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Image
              src="/updatedAbdi.png"
              width={400}
              height={400}
              alt="my-image"
              className="object-contain rounded-t-full rounded-b-full max-xl:w-64 max-lg:w-32"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <TextGenerateEffect
              className=" text-[40px] md:text-3xl lg:text-4xl"
              words="Profile"
            />

            <motion.p
              className="text-lg xl:max-w-[800px] max-xl:w-full text-slate-500 dark:text-slate-300 mt-4"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 0.2 }}
            >
              I’m Abdi, a Software Engineer and Full-Stack Developer passionate
              about building innovative, scalable, and user-centric web
              applications. With expertise in the MERN stack, Next.js, and
              Python, I specialize in designing and developing efficient digital
              solutions that enhance user experience and performance. I have a
              strong foundation in software engineering principles, allowing me
              to architect robust systems while staying up-to-date with modern
              technologies like TypeScript, Prisma, Tailwind CSS, and ShadCN.
              Whether it&apos;s crafting seamless frontend experiences or
              building powerful backend infrastructures, I thrive on solving
              complex problems and delivering high-quality software. Driven by
              continuous learning and innovation, I aim to create impact-driven
              solutions that bridge technology and real-world needs. Let’s build
              something amazing together!
            </motion.p>

            <motion.div
              className="flex gap-12 max-lg:pt-10 items-center mt-6"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/contact">
                <MagicButton
                  title="HIRE ME"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1Hc4LC_umofwsPIa1ElXqOuc2A6FjCQ2F/view?usp=drive_link"
                target="_blank"
              >
                <ShimmerButton title="RESUME" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
