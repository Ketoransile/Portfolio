import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
// import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
  return (
    <div className="">
      {/* <div className="">
        <Spotlight duration={3} />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div> */}

      <div className="flex justify-center relative  my-20  ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Crafting Scalable & Innovative Digital Solutions
          </h2> */}
          <TypewriterEffect
            words={[
              { text: "Crafting" },
              { text: "Scalable" },
              { text: "&" },
              { text: "Innovative" },
              { text: "Digital" },
              { text: "Solution" },
            ]}
            className="max-md:text-xs md:text-sm lg:text-sm  text-slate-400 font-serif"
          />
          <TextGenerateEffect
            className="text-center  text-3xl lg:text-4xl"
            words="Abdi Sileshi"
          />
          <TextGenerateEffect
            className="text-center  text-5xl lg:text-5xl"
            words="Software Engineer | Full-Stack Developer"
          />

          <Link href="/projects" className="max-md:pt-32">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
