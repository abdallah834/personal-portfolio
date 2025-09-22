"use client";
import AnimatedContent from "@/components/AnimatedContent";

export default function About() {
  return (
    <div className="text-white h-screen flex flex-col justify-center items-center relative z-0 px-4">
      <AnimatedContent
        distance={50}
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
        <div className="overview flex flex-col gap-2 min-[290px]:pt-5 lg:mt-33">
          <span className="text-md md:text-xl font-semibold">
            A quick overview
          </span>
          <ul className="list-disc list-inside space-y-3 text-xs min-[485]:text-sm tracking-wide">
            <li>
              Started as a self taught web developer using udemy frontend web
              development courses and now a current attendant at route academy.
            </li>
            <li>
              Experienced with CSS frameworks such as (Bootstrap), (TailwindCSS)
              library and JS (React) library using (Vite) or (NextJS).
            </li>
            <li>
              Experienced with web tech such as (HTML- CSS - JS - React -
              NextJS) and will be attending backend courses.
            </li>
            <li>
              Experienced with (React) UI libraries such as (ReactBits - Motion
              - Flowbite - ShadcnUI).
            </li>
            <li>
              Cooperative and always listening to new ideas and always respects
              feedback.
            </li>
            <li>Experienced with git and github.</li>
          </ul>
        </div>
      </AnimatedContent>
      <div className="technical-soft-skills-container mt-8 lg:mt-25 flex flex-col lg:flex-row justify-center container mx-auto gap-10">
        <div className="technical flex flex-col gap-2">
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={-0.5}
            delay={0.4}
          >
            <span className="text-xl font-semibold">Technical Skills</span>
          </AnimatedContent>
          <div className="flex flex-wrap gap-4 min-[425px]:w-md text-white font-semibold text-sm sm:text-base">
            {/************ HTML ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={0.6}
            >
              <span className="bg-amber-600 rounded-lg text-center w-fit px-3 opacity-90">
                HTML5
              </span>
            </AnimatedContent>
            {/************ CSS ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={0.8}
            >
              <span className="bg-cyan-600 rounded-lg text-center w-fit px-3 opacity-90">
                CSS3
              </span>
            </AnimatedContent>
            {/************ Bootstrap ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={1}
            >
              <span className="bg-violet-500 rounded-lg text-center w-fit px-3 opacity-90">
                Bootstrap
              </span>
            </AnimatedContent>
            {/************ JS ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={1.2}
            >
              <span className="bg-yellow-300 rounded-lg text-center w-fit px-3 text-black opacity-90">
                JavaScript ES6
              </span>
            </AnimatedContent>

            {/************ React ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={1.4}
            >
              <span className="bg-cyan-400 rounded-lg text-center w-fit px-3 text-black opacity-90">
                React
              </span>
            </AnimatedContent>
            {/************ TS ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={1.6}
            >
              <span className="bg-cyan-600 rounded-lg text-center w-fit px-3 opacity-90">
                TypeScript
              </span>
            </AnimatedContent>
            {/************ TailwindCSS ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={1.8}
            >
              <span className="bg-cyan-600 rounded-lg text-center w-fit px-3 opacity-90">
                TailwindCSS
              </span>
            </AnimatedContent>
            {/************ NextJS ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={1.8}
            >
              <span className="bg-white rounded-lg text-center w-fit px-3 opacity-90 text-black">
                NextJS
              </span>
            </AnimatedContent>
            {/************ API ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={2}
            >
              <span className="bg-white rounded-lg text-center w-fit px-3 text-black opacity-90">
                API Integration
              </span>
            </AnimatedContent>
            {/************ Git ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={2.2}
            >
              <span className="bg-white rounded-lg text-center w-fit px-3 text-black opacity-90">
                Git & Github
              </span>
            </AnimatedContent>
            {/************ SEO ***************/}
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={2.4}
            >
              <span className="bg-white rounded-lg text-center w-fit px-3 text-black opacity-90">
                SEO Basics
              </span>
            </AnimatedContent>
          </div>
        </div>
        <div className="soft flex flex-col gap-2 pb-5 sm:pb-0">
          <AnimatedContent
            distance={50}
            direction="vertical"
            ease={"power3.out"}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={-0.5}
            delay={0.4}
          >
            <span className="text-xl font-semibold">Soft Skills</span>
          </AnimatedContent>
          <ul className="list-disc list-inside flex gap-4 md:gap-8 flex-col md:flex-row font-semibold text-xs min-[485px]:text-sm sm:text-base">
            <AnimatedContent
              distance={50}
              direction="horizontal"
              ease={"power3.out"}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={0.7}
            >
              <div className="flex gap-4 flex-col">
                <li>Effective communication</li>
                <li>Willingness to learn and adapt quickly</li>
                <li>Creative and innovative mindset</li>
                <li>Time management & organization</li>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={50}
              direction="horizontal"
              ease={"power3.out"}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={-0.5}
              delay={0.9}
            >
              <div className="flex gap-4 flex-col">
                <li>Team collaboration</li>
                <li>Attention to detail</li>
                <li>Self Learner</li>
                <li>Passion about new tech</li>
              </div>
            </AnimatedContent>
          </ul>
        </div>
      </div>
    </div>
  );
}
