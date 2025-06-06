// import { ContactForm } from "@/components/ContactForm";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// export default function Contact() {
//   return (
//     <div className="min-h-screen relative bg-black-100 flex  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-md:pt-20 ">
//       <div className="">
//         <Spotlight duration={3} />
//       </div>
//       <div className="min-h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>{" "}
//       <TextGenerateEffect
//         className=" text-[40px] md:text-3xl lg:text-4xl pt-4 max-md:text-center max-md:text-2xl"
//         words="Get In Touch"
//       />
//       <TextGenerateEffect
//         className=" text-[40px]  text-base pt-4 text-center"
//         words="Have a project you'd like to discuss? Just leave me a message and
//         I'll get back to you within 24 hours."
//       />
//       <div className="max-w-[800px] z-10  bg-gradient-to-t from-black to-transparent mt-12 p-12 rounded-2xl max-md:w-full max-md:p-0">
//         <ContactForm />
//       </div>
//     </div>
//   );
// }
"use client";
import { ContactForm } from "@/components/ContactForm";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    // <div className="min-h-screen relative dark:bg-black-100 flex items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-md:pt-20 pb-20">
    <div className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 z-40 pb-20">
      <Spotlight duration={3} />

      <div className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TextGenerateEffect
          className="text-[40px] md:text-3xl lg:text-4xl pt-12 max-md:text-center max-md:text-2xl"
          words="Get In Touch"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <TextGenerateEffect
          className="text-[40px] text-base pt-4 text-center"
          words="Have a project you'd like to discuss? Just leave me a message and I'll get back to you within 24 hours."
        />
      </motion.div>

      <motion.div
        className="max-w-[800px] z-10 border dark:border-none shadow-xl  border-muted transition-shadow duration-300 dark:bg-gradient-to-t from-black to-transparent mt-12 p-12 rounded-2xl max-md:w-full max-md:p-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
