"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import AnimatedContent from "@/components/AnimatedContent";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <AnimatedContent
      distance={221}
      direction="vertical"
      reverse={false}
      duration={2}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={-0.5}
      delay={0.2}
    >
      <motion.div
        className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar lg:w-[59rem] xl:w-6xl"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-3xl">
            {content.map((item, index) => (
              <div className="my-20 lg:w-sm xl:w-lg" key={index}>
                <AnimatedContent
                  distance={190}
                  direction="vertical"
                  reverse={false}
                  duration={2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={-2}
                  delay={0.2}
                >
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-2xl font-bold text-slate-100"
                  >
                    {item.title}
                  </motion.h2>
                </AnimatedContent>
                <AnimatedContent
                  distance={190}
                  direction="horizontal"
                  reverse={false}
                  duration={2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={-2}
                  delay={0.6}
                >
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-kg mt-10 max-w-lg text-slate-300"
                  >
                    {item.description}
                  </motion.p>
                </AnimatedContent>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          className={cn(
            "sticky top-10 hidden h-fit w-md overflow-hidden rounded-md lg:block",
            contentClassName
          )}
        >
          <AnimatedContent
            distance={190}
            direction="vertical"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={-0.5}
            delay={0.2}
          >
            <div>{content[activeCard].content ?? null}</div>
          </AnimatedContent>
        </div>
      </motion.div>
    </AnimatedContent>
  );
};
