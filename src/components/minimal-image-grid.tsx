import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PropsWithChildren } from "react";
import nasiaShot from "../assets/NasiaScreenshot.webp";
import dotheworkShot from "../assets/DotheworkScreenshot.webp";
import stolesShot from "../assets/GeorgantonisScreenshot.webp";
import brewcycleShot from "../assets/BrewcycleScreenshot.webp";
import QuickLinks from "./QuickLinks";
import SiteNav from "./SiteNav";
import About from "./About";
import Contact from "./Contact";
import Marquee from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  id: string;

  title: string;
  subtitle?: string;
  role: string;
  stack: string[];
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  link: string;
};

const services: Service[] = [
  {
    id: "nasia-portfolio",

    title: "Digital Portfolio",
    subtitle: "nasia-adam.com",
    role: "Design & build",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    description:
      "A portfolio for a dance instructor and choreographer, built to put her own visual identity first rather than a template's.",
    bullets: [
      "Bespoke layout, no theme underneath",
      "Image-led hero kept light enough for mobile",
      "Single page on her own domain",
    ],
    image: nasiaShot,
    imageAlt: "The nasia-adam.com home page, scrolled from top to bottom",
    link: "https://nasia-adam.com",
  },
  {
    id: "do-the-work-bootcamp",

    title: "Brand Landing Page & Registration",
    subtitle: "dotheworkintensive.com",
    role: "Rebuild off WordPress",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    description:
      "A landing page for the “Do The Work” heels intensive, rebuilt from a WordPress site into a static front end.",
    bullets: [
      "Migrated off WordPress to a static build",
      "Registration flow for a dated, limited-seat course",
      "Structured around one clear call to action",
    ],
    image: dotheworkShot,
    imageAlt: "The dotheworkintensive.com landing page, top to bottom",
    link: "https://dotheworkintensive.com",
  },
  {
    id: "eshop-stolesergasias",

    title: "E-Commerce",
    subtitle: "stolesergasias.gr",
    role: "Maintenance & platform migration",
    stack: ["WooCommerce", "ASP.NET Core", "Angular", "Postgres"],
    description:
      "A work-uniform e-shop running on WooCommerce, which I maintain while moving it onto a platform I can actually tune.",
    bullets: [
      "Product catalogue with filtering across sizes and trades",
      "Card payments through Nexi, plus cash on delivery",
      "Mid-migration to ASP.NET Core and Angular SSR",
    ],
    image: stolesShot,
    imageAlt: "The stolesergasias.gr storefront, top to bottom",
    link: "https://stolesergasias.gr",
  },
  {
    id: "Brewcycle",

    title: "Landing Page & Analytics Dashboard",
    subtitle: "brewcycle.at",
    role: "Full-stack build",
    stack: ["Next.js", "Supabase", "Prisma", "Recharts"],
    description:
      "A marketing site for a sustainability startup, plus a private dashboard so the team can read their own traffic without a third-party tool.",
    bullets: [
      "Public landing page and an authenticated dashboard",
      "Metrics pulled from the Google Analytics Data API",
      "Postgres through Supabase and Prisma, hosted on Vercel",
    ],
    image: brewcycleShot,
    imageAlt: "The brewcycle.at landing page, top to bottom",
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
    <span className={`relative inline-block select-none ${className}`}>
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
    </span>
  );
}

function Portfolio() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
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
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(welcome, {
      scale: 1.3,
      opacity: 0,
      ease: "none",
    });

    tl.to(
      next,
      {
        scale: 1,
        opacity: 1,
        zIndex: 100,
        pointerEvents: "auto",
        ease: "none",
      },
      "<",
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([welcome, next]);
    };
  }, [reduceMotion]);

  // Entrance stagger for the card group. Deliberately an IntersectionObserver
  // rather than a ScrollTrigger: the hero above is pinned, and a ScrollTrigger
  // created while that pin's spacer is still being inserted resolves its start
  // against a stale document height and never fires. The observer reads live
  // geometry, so the pin cannot throw it off.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || reduceMotion) return;

    const cards = Array.from(grid.children);
    gsap.set(cards, { opacity: 0, y: 12 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.06, // 60ms: inside the 30-80ms band, reads as one gesture
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(grid);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(cards);
      gsap.set(cards, { clearProps: "opacity,transform" });
    };
  }, [reduceMotion]);

  return (
    <div className="flex flex-col relative overflow-x-hidden items-center">
      <SiteNav />
      <main className="relative w-screen overflow-hidden bg-black">
        {/* WELCOME / HERO */}
        <div
          ref={sectionRef}
          // Changed to min-h-[100dvh] and w-full for better mobile handling and no horizontal scroll
          className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[url('./assets/somebackground.webp')] bg-cover bg-center bg-no-repeat font-Montserrat font-semibold z-10"
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
              <GlitchText glitchEveryMs={8000} intensity="medium">
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

        {/* PROJECTS */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          ref={nextSectionRef}
          className="flex flex-col items-center w-full min-h-screen scroll-mt-24 font-semibold bg-transparent py-12"
        >
          {/* --- NEW PROJECTS HEADER --- */}
          <div className="w-full mb-12 px-4 flex flex-col items-start md:items-center md:text-center">
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Selected <span className="text-[#EE7319]">Projects</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light max-w-2xl font-Manrope">
              A showcase of recent web applications.
            </p>
          </div>

          <div className="w-full max-w-7xl px-4 md:px-8 lg:px-12 my-6">
            {/* CSS GRID: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {services.map((s) => (
                <a
                  key={s.id}
                  href={s.link}
                  className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 active:scale-[0.99] [transition:background-color_300ms_ease,transform_150ms_cubic-bezier(0.23,1,0.32,1)]"
                >
                  {/* 1. The Scrolling Mockup (Top Half) */}
                  <div className="w-full h-[280px] sm:h-[320px] relative overflow-hidden bg-gray-900">
                    {/* The screenshot is far taller than its window, so the
                        reveal slides the image itself. translateY composites on
                        the GPU; the background-position this replaced repainted
                        the whole image on every frame of a six-second hover.
                        Percentages are relative to the image's own height, so
                        -100% + the window height lands exactly on its bottom
                        edge whatever the screenshot's proportions. */}
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className={[
                        "absolute inset-x-0 top-0 w-full",
                        // The base duration is what plays on release, so the
                        // image returns in 300ms instead of crawling back.
                        "transition-transform duration-300 ease-out",
                        "md:group-hover:translate-y-[calc(-100%+320px)] md:group-hover:duration-[6000ms] md:group-hover:ease-in-out",
                        // Touch: press and hold to scrub through the page.
                        "active:translate-y-[calc(-100%+280px)] active:duration-[4000ms] active:ease-in-out",
                        "sm:active:translate-y-[calc(-100%+320px)]",
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

                    {/* What I actually did on it, and what it is built with:
                        the two questions a card like this has to answer. */}
                    <p className="mb-3 text-xs font-light uppercase tracking-[0.15em] text-white/40">
                      {s.role}
                    </p>

                    <p className="text-white/60 text-sm leading-relaxed font-light mb-5 flex-1">
                      {s.description}
                    </p>

                    <ul className="mb-5 flex flex-wrap gap-1.5">
                      {s.stack.map((t) => (
                        <li
                          key={t}
                          className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-light text-white/70"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

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
        </section>

        <About />
        <Contact />

        <footer className="w-full border-t border-white/10 px-4 pb-28 pt-8 md:px-8 lg:px-12 2xl:pb-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 font-Manrope text-xs font-light text-white/40 sm:flex-row sm:items-center">
            <span>&copy; {new Date().getFullYear()} Michalis Bafaloukos</span>
            <span>Athens, Greece</span>
          </div>
        </footer>

        <QuickLinks />
      </main>
    </div>
  );
}

export default Portfolio;
