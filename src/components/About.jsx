"use client";

import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import Image from "next/image";
import { aboutData, aboutText, donwloadIcon, arrowleftIcon } from "@/assets";

const About = () => {
  return (
    <div className="min-h-screen px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64 flex flex-col items-center justify-center">
      <Heading text={"About Me"} />
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-8">
        {/* For smaller screens */}
        <Image
          src={"/my-pfp.webp"}
          width={400}
          height={400}
          alt="Fei-Software Engineer"
          className="w-[300px] lg:w-[200px] md:hidden"
        />

        {/* For medium and larger screens */}
        <Image
          src={"/my-pfp.webp"}
          width={400}
          height={400}
          alt="Fei-Software Engineer"
          className="hidden md:block w-[200px] lg:w-[300px] rounded-3xl"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">
            {arrowleftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[24px]">
            {aboutText}
          </p>
          <a
            href="/fei-resume.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-blue-300 
            px-3 py-2 font-light text-gray-700 hover:bg-blue-200 transition-colors"
          >
            <span>Download Resume</span>
            <span className="text-xl">{donwloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10 ">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
