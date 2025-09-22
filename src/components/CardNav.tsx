"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/compat/router";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgImg?: string;
  textColor: string;
  link?: string;
  links?: CardNavLink[];
};

export interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items?: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimatingRef = useRef(false);

  const router = useRouter();

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  }, [ease, calculateHeight]);

  // Close menu function
  const closeMenu = useCallback(() => {
    if (isAnimatingRef.current) return;

    const tl = tlRef.current;
    if (!tl || !isExpanded) return;

    isAnimatingRef.current = true;
    setIsHamburgerOpen(false);

    tl.eventCallback("onReverseComplete", () => {
      setIsExpanded(false);
      isAnimatingRef.current = false;
    });
    tl.reverse();
  }, [isExpanded]);

  // Toggle menu function
  const toggleMenu = useCallback(
    (e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (isAnimatingRef.current) return;

      const tl = tlRef.current;
      if (!tl) return;

      isAnimatingRef.current = true;

      if (!isExpanded) {
        setIsHamburgerOpen(true);
        setIsExpanded(true);
        tl.eventCallback("onComplete", () => {
          isAnimatingRef.current = false;
        });
        tl.play(0);
      } else {
        setIsHamburgerOpen(false);
        tl.eventCallback("onReverseComplete", () => {
          setIsExpanded(false);
          isAnimatingRef.current = false;
        });
        tl.reverse();
      }
    },
    [isExpanded]
  );

  // Handle card click
  const handleCardClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    },
    [closeMenu]
  );

  // Initialize timeline
  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline]);

  // Handle resize - but only update height if expanded
  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current || isAnimatingRef.current) return;

      // Only recalculate if menu is currently expanded
      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });
      }
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [isExpanded, calculateHeight]);

  // Handle route changes - close menu when navigating
  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (isExpanded && !isAnimatingRef.current) {
        closeMenu();
      }
    };

    router?.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router?.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router, closeMenu, isExpanded]);

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${
          isExpanded ? "open" : ""
        } block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] backdrop-blur-sm bg-linear-160 from-white/20 from-50% to-[#0496eb]/70 to-80% border-2 border-white/45`}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            className={`hamburger-menu ${
              isHamburgerOpen ? "open" : ""
            } group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none text-white`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleMenu();
              }
            }}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75 transition-all duration-200`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75 transition-all duration-200`}
            />
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-[12px]`}
          inert={!isExpanded}
        >
          {items?.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className={`nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%] *:text-white font-[Bebas_Neue] overflow-hidden`}
              ref={setCardRef(idx)}
              onClick={handleCardClick}
            >
              <Link href={`${item.link}`} className="block w-full h-full">
                <Image
                  src={item?.bgImg || `/img-1.png`}
                  width={370}
                  height={200}
                  alt="personal pic"
                  className="absolute top-[-7px] left-0 z-[-4]"
                />
                <div className="w-full h-full absolute top-0 bottom-0 left-0 bg-black/40 transition-all duration-300 z-[-2] hover:bg-black/20" />
                <div className="nav-card-label font-normal text-[18px] md:text-[22px] tracking-wider w-fit">
                  {item.label}
                </div>
                <div className="nav-card-links mt-auto flex flex-col gap-[2px] w-fit">
                  {item.links?.map((lnk, i) => (
                    <span
                      key={`${lnk.label}-${i}`}
                      className="nav-card-link flex items-center gap-[6px] no-underline cursor-pointer transition-all duration-200 text-[15px] md:text-[16px] hover:bg-black rounded-lg py-0.5 px-2"
                      aria-label={lnk.ariaLabel}
                    >
                      {lnk.label}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
