import MagicButton from "@/components/ui/MagicButton";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-lg:pb-20 ">
      <div className="">
        <div className="">
          <Spotlight duration={3} />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="min-h-screen flex flex-col px-5 pt-20 text-slate-200 ">
          <div className="pt-4 flex gap-12 px-20 max-xl:px-2 max-md:px-0 items-center max-xl:grid grid-cols-1 z-10">
            <Image
              src="/abdiImageFinal.png"
              width={400}
              height={400}
              alt="my-image"
              className="object-contain rounded-t-full rounded-b-full max-xl:w-64 max-lg:w-32"
            />
            <div className="flex flex-col">
              {" "}
              <TextGenerateEffect
                className=" text-[40px] md:text-3xl lg:text-4xl"
                words="Profile"
              />
              <p className="text-lg xl:max-w-[800px] max-xl:w-full text-slate-300 ">
                I’m Abdi, a Software Engineer and Full-Stack Developer
                passionate about building innovative, scalable, and user-centric
                web applications. With expertise in the MERN stack, Next.js, and
                Python, I specialize in designing and developing efficient
                digital solutions that enhance user experience and performance.
                I have a strong foundation in software engineering principles,
                allowing me to architect robust systems while staying up-to-date
                with modern technologies like TypeScript, Prisma, Tailwind CSS,
                and ShadCN. Whether it&apos;s crafting seamless frontend
                experiences or building powerful backend infrastructures, I
                thrive on solving complex problems and delivering high-quality
                software. Driven by continuous learning and innovation, I aim to
                create impact-driven solutions that bridge technology and
                real-world needs. Let’s build something amazing together!
              </p>
              <div className="flex gap-12 max-lg:pt-10 items-center">
                <MagicButton
                  title="HIRE ME"
                  icon={<FaLocationArrow />}
                  position="right"
                />
                <ShimmerButton title="RESUME" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
