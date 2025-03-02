import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <main className="min-h-screen">
        <div className="">
          <Spotlight duration={3} />
        </div>
        <div className="min-h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>{" "}
        <Hero />
      </main>
    </div>
  );
}
