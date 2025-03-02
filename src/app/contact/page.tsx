import { ContactForm } from "@/components/ContactForm";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Contact() {
  return (
    <div className="min-h-screen relative bg-black-100 flex  items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 max-md:pt-20 ">
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
        className=" text-[40px] md:text-3xl lg:text-4xl pt-4 max-md:text-center max-md:text-2xl"
        words="Get In Touch"
      />
      {/* <div className="text-base text-slate-200 dark:text-slate-100 z-10 font-serif pt-4"> */}
      <TextGenerateEffect
        className=" text-[40px]  text-base pt-4 text-center"
        words="Have a project you'd like to discuss? Just leave me a message and
        I'll get back to you within 24 hours."
      />
      <div className="max-w-[800px] z-10  bg-gradient-to-t from-black to-transparent mt-12 p-12 rounded-2xl max-md:w-full max-md:p-0">
        <ContactForm />
      </div>
      {/* </div> */}
      {/* <h1 className="text-base text-slate-200 dark:text-slate-100 z-10 font-serif pt-4">
        Have a project you&apos;d like to discuss? Just leave me a message and
        I&apos;ll get back to you within 24 hours.
      </h1> */}
    </div>
  );
}
