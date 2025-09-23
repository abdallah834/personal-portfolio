"use client";

import AnimatedContent from "@/components/AnimatedContent";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const content = [
    {
      title: "NextJs e-commerce web app",
      description:
        "An e-commerce app made using nextAuth for register and login along with jwt, zod, react hook form, middleware for protected routing, for UI it was made with shadCn, tailwindCSS and reactBits library it mainly focuses on displaying products data from the backend using APIs provided by route academy and then an option for adding, removing or to wishlist a certain product after signing in and adding the desired products the user is then able to checkout using a master card or cash on delivery.",
      content: (
        <AnimatedContent
          distance={220}
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
          <div className="flex h-full lg:w-sm xl:w-md items-center justify-center text-white">
            <Link
              href={"https://next-js-e-commerce-omega-rouge.vercel.app/"}
              className="hover:*:scale-105 w-lg"
              target="_blank"
            >
              <Image
                src={"/p-img-1.png"}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 rounded-xl"
                alt="e-commerce project image"
              />
            </Link>
          </div>
        </AnimatedContent>
      ),
    },
    {
      title: "React social app",
      description:
        "A functional social app made using Vite, React router, TanStackQuery and for UI it uses Flowbite react along with custom components and it has a dark & white theme using tailwindCSS based on the user's preferred theme, the app uses APIs provided by route academy in order to post comments, create posts, view all comments on a certain post view personal profile along with it's post's and comments and it has pagination buttons to navigate between older and newer posts.",
      content: (
        <AnimatedContent
          distance={220}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0}
          delay={0.2}
        >
          <div className="flex h-full w-full items-center justify-center text-white lg:w-sm xl:w-md">
            <Link
              href={"https://route-social-app.vercel.app/"}
              className="hover:*:scale-105 w-lg"
              target="_blank"
            >
              <Image
                src="/p-img-2.png"
                width={300}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 rounded-xl"
                alt="social app project image"
              />
            </Link>
          </div>
        </AnimatedContent>
      ),
    },
    {
      title: "JS weather app",
      description:
        "A functional weather app made with vanilla JS using geolocation API to mainly get the weather condition for the user's current location and then a weather API is used to get the specific condition for the next 3 days based on the location, there's also an option to search for any location and getting it's weather info.",
      content: (
        <AnimatedContent
          distance={220}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0}
          delay={0.21}
        >
          <div className="flex h-full w-full items-center justify-center text-white lg:w-sm xl:w-md">
            <Link
              href={"https://abdallah834.github.io/weather-app/"}
              className="hover:*:scale-105 w-lg"
              target="_blank"
            >
              <Image
                src="/p-img-3.png"
                width={300}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 rounded-xl"
                alt="weather app project image"
              />
            </Link>
          </div>
        </AnimatedContent>
      ),
    },
    {
      title: "Mealify landing page",
      description:
        "A fully responsive light and dark landing page made using HTML, CSS, JS that's for a restaurant showcasing their menu along with their own chefs, gallery, location and their contact info.",
      content: (
        <AnimatedContent
          distance={220}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0}
          delay={0.22}
        >
          <div className="flex h-full w-full items-center justify-center text-white lg:w-sm xl:w-md">
            <Link
              href={"https://abdallah834.github.io/Mealify-landing-page/"}
              className="hover:*:scale-105 w-lg"
              target="_blank"
            >
              <Image
                src="/p-img-4.png"
                width={300}
                height={300}
                className="h-full w-full object-cover transition-all duration-300 rounded-xl"
                alt="mealify project image"
              />
            </Link>
          </div>
        </AnimatedContent>
      ),
    },
  ];
  return (
    <>
      <div className="hidden lg:flex w-full py-4 h-screen items-center justify-center">
        <StickyScroll content={content} />
      </div>
      <div className="lg:hidden w-full py-4 h-screen flex justify-center items-center relative z-3 overflow-hidden">
        <div className="container mx-auto h-[490px] flex flex-col gap-8 justify-center text-white items-center text-center overflow-y-visible overflow-hidden scrollbar">
          <div className="sm:w-lg sm:mt-20 md:w-2xl relative top-130 bot-0 translate-y-50 flex flex-col items-center justify-center gap-35 sm:gap-22.5">
            <div className="flex flex-col items-center gap-7">
              <Link
                href={"https://next-js-e-commerce-omega-rouge.vercel.app/"}
                className="hover:*:scale-105 min-[400px]:w-sm sm:w-lg overflow-hidden rounded-lg"
                target="_blank"
              >
                <Image
                  src={"/p-img-1.png"}
                  alt="e-commerce project image"
                  width={510}
                  height={500}
                  className="rounded-xl transition-all duration-300"
                />
              </Link>
              <p className="project-description text-sm min-[570px]:text-base">
                An e-commerce app made using nextAuth for register and login
                along with jwt, zod, react hook form, middleware for protected
                routing, for UI it was made with shadCn, tailwindCSS and
                reactBits library it mainly focuses on displaying products data
                from the backend using APIs provided by route academy and then
                an option for adding, removing or to wishlist a certain product
                after signing in and adding the desired products the user is
                then able to checkout using a master card or cash on delivery.
              </p>
            </div>
            <div className="flex flex-col items-center gap-7">
              <Link
                href={"https://route-social-app.vercel.app/"}
                className="hover:*:scale-105 min-[400px]:w-sm sm:w-lg overflow-hidden rounded-lg"
                target="_blank"
              >
                <Image
                  src={"/p-img-2.png"}
                  alt="e-commerce project image"
                  width={510}
                  height={500}
                  className="rounded-xl transition-all duration-300"
                />
              </Link>
              <p className="project-description text-sm min-[570px]:text-base">
                A functional social app made using Vite, React router,
                TanStackQuery and for UI it uses Flowbite react along with
                custom components and it has a dark & white theme using
                tailwindCSS based on the user's preferred theme, the app uses
                APIs provided by route academy in order to post comments, create
                posts, view all comments on a certain post view personal profile
                along with it's post's and comments and it has pagination
                buttons to navigate between older and newer postsl.
              </p>
            </div>
            <div className="flex flex-col items-center gap-7">
              <Link
                href={"https://abdallah834.github.io/weather-app/"}
                className="hover:*:scale-105 min-[400px]:w-sm sm:w-lg overflow-hidden rounded-lg"
                target="_blank"
              >
                <Image
                  src={"/p-img-3.png"}
                  alt="e-commerce project image"
                  width={510}
                  height={500}
                  className="rounded-xl transition-all duration-300"
                />
              </Link>
              <p className="project-description text-sm min-[570px]:text-base">
                A functional weather app made with vanilla JS using geolocation
                API to mainly get the weather condition for the user's current
                location and then a weather API is used to get the specific
                condition for the next 3 days based on the location, there's
                also an option to search for any location and getting it's
                weather info.
              </p>
            </div>
            <div className="flex flex-col items-center gap-7 mb-20">
              <Link
                href={"https://abdallah834.github.io/Mealify-landing-page/"}
                className="hover:*:scale-105 min-[400px]:w-sm sm:w-lg overflow-hidden rounded-lg"
                target="_blank"
              >
                <Image
                  src={"/p-img-4.png"}
                  alt="e-commerce project image"
                  width={510}
                  height={500}
                  className="rounded-xl transition-all duration-300"
                />
              </Link>
              <p className="project-description text-sm min-[570px]:text-base">
                A fully responsive light and dark landing page made using HTML,
                CSS, JS that's for a restaurant showcasing their menu along with
                their own chefs, gallery, location and their contact info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
