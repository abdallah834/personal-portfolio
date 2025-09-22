"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import AnimatedContent from "@/components/AnimatedContent";
export default function Home() {
  const words = ["React JS.", "Next JS.", "TailwindCSS.", "BootstrapCSS."];
  const personalGmail = "abdallahayman834@gmail.com";
  return (
    <main>
      <div className="flex flex-col lg:flex-row h-screen justify-center items-center pt-15 text-center lg:text-start gap-10 lg:gap-10 xl:gap-20 pb-20 lg:pb-0 container mx-auto">
        <AnimatedContent
          distance={190}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.2}
        >
          <div className="img-container relative overflow-hidden before:absolute before:top-0 before:bottom-0 before:left-[-150px] before:content-[''] before:w-1/2 before:h-full before:bg-zinc-300/35 before:backdrop-blur-xs before:rounded-l-2xl after:absolute after:top-0 after:bottom-0 after:right-[-150px] after:content-[''] after:w-1/2 after:h-full after:bg-zinc-300/35 after:backdrop-blur-xs after:rounded-r-2xl hover:before:left-0 hover:after:right-0 before:transition-all after:transition-all before:duration-300  after:duration-300 after:delay-200 before:delay-200 min-[1028px]:w-3xs min-[1150px]:w-2xs">
            <div className="flex flex-row items-center justify-center absolute top-0 bottom-0 left-[50%] translate-x-[-50%] z-[1] w-full gap-4 hover:*:blur-none">
              <Link
                href={`https://mail.google.com/mail/u/0/?to=${personalGmail}&fs=1&tf=cm`}
                className="blur-xl transition-all duration-600 delay-100 hover:scale-115"
                target="_blank"
              >
                <Icon icon="logos:google-gmail" className="text-3xl" />
              </Link>
              <Link
                href={"https://github.com/abdallah834?tab=repositories"}
                className="blur-xl transition-all duration-600 delay-100 hover:scale-115"
                target="_blank"
              >
                <Icon icon="mdi:github" className="text-4xl" />
              </Link>
            </div>
            <Image
              src={"/img-0.png"}
              alt="personal photo"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={190}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0}
          delay={0.7}
        >
          <div className="sm:w-md md:w-2xl lg:w-2xl text-white ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 font-[Roboto Condensed] font-bold">
              I am Abdullah Ayman.
            </h2>
            <span className="break-all flex flex-col items-center text-[15px] min-[395px]:text-lg min-[500px]:inline-block sm:text-2xl font-[Roboto Condensed] text-center lg:text-start">
              I create frontend websites and web apps using{" "}
              <FlipWords words={words} className="p-0 text-white font-bold" />
            </span>
          </div>
        </AnimatedContent>
      </div>
    </main>
  );
}
