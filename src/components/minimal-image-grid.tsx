import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import type { PropsWithChildren } from "react";
import "aos/dist/aos.css";
import QuickLinks from "./QuickLinks";
import Marquee from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: string;

  title: string;
  subtitle?: string;
  description: string;
  bullets: string[];
  imageClass: string;
  link: string;
};

const services: Service[] = [
  {
    id: "nasia-portfolio",

    title: "Digital Portfolio",
    subtitle: "nasia-adam.com",

    description:
      "A custom-designed digital portfolio created to showcase personal branding, visual identity, and creative work.",
    bullets: [
      "Custom UI & layout design",
      "Strong typographic hierarchy",
      "Responsive on all devices",
    ],
    imageClass: "bg-[url('./assets/NasiaScreenshot.png')]",
    link: "https://nasia-adam.com",
  },
  {
    id: "do-the-work-bootcamp",

    title: " Brand Landing Page & Registration ",
    subtitle: "dotheworkintensive.com",
    description:
      "A high-impact landing page designed for the “Do The Work” intensive bootcamp.",
    bullets: [
      "Conversion-oriented layout",
      "Strong call-to-action sections",
      "Responsive & performance-optimized",
    ],
    imageClass: "bg-[url('./assets/DotheworkScreenshot.png')]",
    link: "https://dotheworkintensive.com",
  },
  {
    id: "eshop-stolesergasias",

    title: "E-Commerce",

    subtitle: "stolesergasias.gr",
    description:
      "A full-featured e-shop , focused on usability, and a seamless shopping experience. ",
    bullets: [
      "Optimized for SEO and performance",
      "Product catalog & filtering system",
      "Responive on all devices",
    ],
    imageClass: "bg-[url('./assets/GeorgantonisScreenshot.png')]",
    link: "https://stolesergasias.gr",
  },
  {
    id: "Brewcycle",

    title: "Brand Landing Page & Dashboard Analytics",
    subtitle: "brewcycle.at ",

    description:
      "A brand-focused landing page designed for a sustainability-driven startup.",
    bullets: [
      "Responsive design with performance optimization",
      "Structured content hierarchy for clarity",
      "Self-hosted analytics dashboard ",
    ],
    imageClass: "bg-[url('./assets/BrewcycleScreenshot.jpg')] bg-cover",
    link: "https://brewcycle.at/",
  },
];

type GlitchTextProps = PropsWithChildren<{
  className?: string;
  glitchEveryMs?: number; // burst frequency
  intensity?: "medium" | "hard"; // strength preset
  scanlines?: boolean; // adds CRT-ish scanline flash
  disableReducedMotion?: boolean;
}>;

export function GlitchText({
  children,
  className = "",
  glitchEveryMs = 12000,
  intensity = "hard",
  scanlines = true,
  disableReducedMotion = false,
}: GlitchTextProps) {
  const reduce = useReducedMotion();
  const shouldReduce = reduce && !disableReducedMotion;

  const red = useAnimationControls();
  const cyan = useAnimationControls();
  const mag = useAnimationControls();
  const flash = useAnimationControls();
  const scan = useAnimationControls();

  const cfg =
    intensity === "hard"
      ? {
          rgbX: 10,
          rgbY: 3,
          flashOpacity: 0.7,
          blur: 1.2,
        }
      : {
          rgbX: 6,
          rgbY: 2,
          flashOpacity: 0.5,
          blur: 0.8,
        };

  useEffect(() => {
    if (shouldReduce) return;

    let alive = true;

    const burstOnce = async () => {
      const times5 = [0, 0.18, 0.45, 0.78, 1];

      // Make clip slices jump around more aggressively
      const sliceA = [
        "inset(0 0 82% 0)",
        "inset(12% 0 58% 0)",
        "inset(38% 0 34% 0)",
        "inset(62% 0 12% 0)",
        "inset(0 0 82% 0)",
      ];

      const sliceB = [
        "inset(78% 0 0 0)",
        "inset(55% 0 10% 0)",
        "inset(30% 0 42% 0)",
        "inset(8% 0 66% 0)",
        "inset(78% 0 0 0)",
      ];

      await Promise.all([
        red.start({
          opacity: [0, 1, 0.25, 1, 0],
          x: [0, -cfg.rgbX, cfg.rgbX * 0.6, -cfg.rgbX * 0.35, 0],
          y: [0, cfg.rgbY, -cfg.rgbY, cfg.rgbY, 0],
          clipPath: sliceA,
          filter: ["blur(0px)", `blur(${cfg.blur}px)`, "blur(0px)"],
          transition: {
            duration: 0.18,
            ease: "linear",
            times: times5,
          },
        }),

        cyan.start({
          opacity: [0, 1, 0.25, 1, 0],
          x: [0, cfg.rgbX, -cfg.rgbX * 0.6, cfg.rgbX * 0.35, 0],
          y: [0, -cfg.rgbY, cfg.rgbY, -cfg.rgbY, 0],
          clipPath: sliceB,
          filter: ["blur(0px)", `blur(${cfg.blur}px)`, "blur(0px)"],
          transition: {
            duration: 0.18,
            ease: "linear",
            times: times5,
          },
        }),

        // Extra channel for more “digital tearing”
        mag.start({
          opacity: [0, 0.85, 0.15, 0.85, 0],
          x: [0, cfg.rgbX * 0.75, -cfg.rgbX * 0.4, cfg.rgbX * 0.2, 0],
          clipPath: [
            "inset(22% 0 62% 0)",
            "inset(46% 0 38% 0)",
            "inset(10% 0 74% 0)",
            "inset(66% 0 8% 0)",
            "inset(22% 0 62% 0)",
          ],
          transition: {
            duration: 0.5,
            ease: "linear",
            times: times5,
          },
        }),

        flash.start({
          opacity: [0, cfg.flashOpacity, 0.15, cfg.flashOpacity, 0],
          x: [0, -2, 3, -1, 0],
          filter: [
            "none",
            "contrast(1.7) brightness(1.35)",
            "none",
            "none",
            "none",
          ],
          transition: { duration: 0.14, ease: "linear", times: times5 },
        }),

        scanlines
          ? scan.start({
              opacity: [0, 0.35, 0],
              y: [0, 6, 0],
              transition: { duration: 0.14, ease: "linear" },
            })
          : Promise.resolve(),
      ]);
    };

    const burst = async () => {
      // Single burst
      await burstOnce();

      // 35% chance of a second burst immediately after (stronger, more chaotic)
      if (Math.random() < 0.35) {
        await new Promise((r) => setTimeout(r, 90));
        await burstOnce();
      }
    };

    burst(); // immediate so you see it instantly

    const id = window.setInterval(() => {
      if (!alive) return;
      burst();
    }, glitchEveryMs);

    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, [shouldReduce, glitchEveryMs, scanlines, red, cyan, mag, flash, scan]);

  if (shouldReduce) {
    return <span className={`text-white ${className}`}>{children}</span>;
  }

  return (
    <motion.span
      className={`relative inline-block select-none ${className}`}
      style={{ willChange: "transform" }}
      // Keep a subtle continuous presence so it never looks static
      animate={{
        opacity: [1, 0.93, 1],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* base */}
      <span className="relative z-10 text-white">{children}</span>

      {/* RGB split layers */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 text-[#ff2a2a] mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={red}
      >
        {children}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 text-[#26e6ff] mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={cyan}
      >
        {children}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-20 text-[#ff4dff] mix-blend-screen"
        initial={{ opacity: 0 }}
        animate={mag}
      >
        {children}
      </motion.span>

      {/* flash */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 z-30 text-white"
        initial={{ opacity: 0 }}
        animate={flash}
      >
        {children}
      </motion.span>

      {/* scanlines (optional) */}
      {scanlines ? (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-40 opacity-0"
          style={{
            background:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.18) 1px, rgba(0,0,0,0) 3px, rgba(0,0,0,0) 7px)",
            mixBlendMode: "overlay",
          }}
          initial={{ opacity: 0 }}
          animate={scan}
        />
      ) : null}
    </motion.span>
  );
}

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const welcome = sectionRef.current;
    const next = nextSectionRef.current;
    if (!welcome || !next) return;

    // This is the heaviest motion on the page: a pinned, scrubbed scale from
    // 0.7 to 1.3. Reduced motion gets the same content, stacked and static.
    if (reduceMotion) {
      gsap.set(next, {
        scale: 1,
        opacity: 1,
        zIndex: 100,
        pointerEvents: "auto",
      });
      return;
    }

    // initial state for next section (behind)
    gsap.set(next, {
      scale: 0.7,
      opacity: 0,
      yPercent: 0,
      zIndex: 0,
      pointerEvents: "none",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: welcome,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(welcome, {
      scale: 1.3,
      opacity: 0,
      ease: "power2.inOut",
    });

    tl.to(
      next,
      {
        scale: 1,
        opacity: 1,
        zIndex: 100,
        pointerEvents: "auto",
        ease: "power2.out",
      },
      "<",
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([welcome, next]);
    };
  }, [reduceMotion]);

  return (
    <div className="flex flex-col relative overflow-x-hidden items-center">
      <div className="relative w-screen overflow-hidden bg-black">
        {/* WELCOME / HERO */}
        <div
          ref={sectionRef}
          // Changed to min-h-[100dvh] and w-full for better mobile handling and no horizontal scroll
          className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[url('./assets/somebackground.jpg')] bg-cover bg-center bg-no-repeat font-Montserrat font-semibold z-10"
        >
          {/* Background overlays */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          <div className="absolute inset-0 pointer-events-none opacity-20 [background-image:radial-gradient(circle_at_20%_20%,rgba(99,102,241,.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,.25),transparent_40%)]" />
          {/* Main Content Wrapper - Removed hard margins, using flex layout for better centering */}
          <div className="relative flex flex-col gap-5 items-center justify-center z-10 w-11/12 max-w-5xl text-center text-white">
            {/* Role and location: the two things a visitor scans for first. */}
            <p className="text-[#EE7319] text-xs md:text-sm uppercase tracking-[0.25em] font-Manrope">
              Web Developer &middot; Athens, Greece
            </p>

            {/* The H1 is the strongest signal this page sends to both readers
                and search engines, so it carries the name, not a greeting. */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              <GlitchText glitchEveryMs={1000} intensity="medium">
                Michalis Bafaloukos
              </GlitchText>
            </h1>

            <p className="max-w-2xl text-sm md:text-lg font-Manrope font-light leading-relaxed text-white/70">
              A decade spent teaching maths and physics, now spent building
              fast, intuitive websites and web apps &mdash; four of them in
              production today.
            </p>

            <p className="mt-2 text-xs md:text-sm text-white/50">Scroll for more</p>

            {/* Subheadline - Constrained width and adjusted text color for subtle hierarchy */}

            {/* Added Call to Action & Scroll Indicator */}
          </div>

          {/* MARQUEE - Fixed nesting so it inherits the absolute positioning */}
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-6 lg:px-10">
            <Marquee />
          </div>
        </div>

        {/* NEXT SECTION (SERVICES + CONTACT) */}
        <div
          ref={nextSectionRef}
          className="flex flex-col items-center w-full min-h-screen font-semibold bg-transparent py-12"
        >
          {/* --- NEW PROJECTS HEADER --- */}
          <div className="w-full mb-12 px-4 flex flex-col items-start md:items-center md:text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Selected <span className="text-[#EE7319]">Projects</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light max-w-2xl font-Manrope">
              A showcase of recent web applications.
            </p>
          </div>

          <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12 my-6">
            {/* CSS GRID: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={s.link}
                  className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 active:scale-[0.99] [transition:background-color_300ms_ease,transform_150ms_cubic-bezier(0.23,1,0.32,1)]"
                >
                  {/* 1. The Scrolling Mockup (Top Half) */}
                  <div className="w-full h-[280px] sm:h-[320px] relative overflow-hidden bg-gray-900">
                    <div
                      className={[
                        "w-full h-full bg-cover bg-top bg-no-repeat",
                        // Desktop hover scroll. The base duration is what plays
                        // on hover-OUT, so the image snaps back instead of
                        // crawling for six seconds; the long one only applies
                        // while hovered.
                        "md:transition-[background-position] md:duration-300 md:ease-out",
                        "md:group-hover:bg-bottom md:group-hover:duration-[6000ms] md:group-hover:ease-in-out",
                        // Mobile tap-and-hold scroll
                        "active:bg-bottom active:transition-[background-position] active:duration-[4000ms] active:ease-in-out",
                        s.imageClass,
                      ].join(" ")}
                    />

                    {/* Dark gradient fade at the bottom (matches your reference image) */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent pointer-events-none" />
                  </div>

                  {/* 2. The Text Content (Bottom Half) */}
                  <div className="p-6 flex flex-col flex-1 font-Manrope">
                    <h3 className="text-white text-xl uppercase tracking-widest font-bold mb-2">
                      {s.title}
                    </h3>

                    {s.subtitle && (
                      <p className="text-[#EE7319] text-xs font-medium mb-3">
                        {s.subtitle}
                      </p>
                    )}

                    <p className="text-white/60 text-sm leading-relaxed font-light mb-6 flex-1">
                      {s.description}
                    </p>

                    {/* Bullets section pushed to the bottom */}
                    {s.bullets && s.bullets.length > 0 && (
                      <div className="mt-auto">
                        <hr className="border-white/10 mb-4" />
                        <ul className="grid grid-cols-1 gap-2 font-light">
                          {s.bullets.map((b) => (
                            <li
                              key={b}
                              className="text-white/80 text-xs flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#EE7319]" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <QuickLinks />
      </div>
    </div>
  );
}

export default Portfolio;
