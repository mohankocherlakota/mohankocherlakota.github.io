import { useEffect, useMemo, useRef, useState, type ElementType } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/portfolio";

type BlurTextProps = {
  text: string;
  delay?: number;
  by?: "letters" | "words";
  className?: string;
  reduceMotion?: boolean;
  as?: "p" | "h1";
};

function BlurText({
  text,
  delay = 70,
  by = "letters",
  className = "",
  reduceMotion = false,
  as = "p",
}: BlurTextProps) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const frame = window.requestAnimationFrame(() => setVisible(true));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [reduceMotion]);

  const segments = useMemo(
    () => (by === "words" ? text.split(" ") : text.split("")),
    [by, text],
  );

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {segments.map((segment, index) => (
        <span
          aria-hidden="true"
          key={`${segment}-${index}`}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            filter: visible ? "blur(0)" : "blur(12px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(-18px) scale(0.98)",
            transitionDelay: reduceMotion ? "0ms" : `${index * delay}ms`,
          }}
        >
          {segment}
          {by === "words" && index < segments.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </Tag>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollOpacity = useSpring(useTransform(scrollYProgress, [0, 0.58, 1], [1, 0.88, 0.22]), {
    stiffness: 120,
    damping: 26,
  });
  const scrollScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.9]), {
    stiffness: 120,
    damping: 26,
  });
  const scrollY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -90]), {
    stiffness: 120,
    damping: 26,
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen scroll-mt-24 flex-col overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

      <div className="relative flex min-h-screen flex-1 flex-col items-center justify-center px-5 pb-[min(7rem,12vh)] pt-[max(5.5rem,min(7rem,14vh))]">
        <motion.div
          style={
            reduceMotion
              ? undefined
              : { opacity: scrollOpacity, scale: scrollScale, y: scrollY }
          }
          className="flex w-full max-w-[1120px] flex-col items-center text-center"
        >
          <motion.div
            initial={false}
            animate={reduceMotion ? undefined : { opacity: [0.9, 1], scale: [0.94, 1], y: [8, -4, 0] }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
            className="mb-[min(2rem,4vh)] h-[min(7rem,26vh)] w-[min(7rem,26vh)] overflow-hidden rounded-full bg-zinc-950 shadow-2xl ring-1 ring-white/15 transition-transform duration-300 hover:scale-105 sm:h-[min(9rem,26vh)] sm:w-[min(9rem,26vh)] md:h-[min(11rem,30vh)] md:w-[min(11rem,30vh)] lg:h-[min(13rem,32vh)] lg:w-[min(13rem,32vh)]"
          >
            <img
              src="/pic.jpg"
              alt={hero.name}
              className="h-full w-full origin-[53%_16%] scale-[3.4] object-cover object-[58%_10%]"
            />
          </motion.div>

          <motion.div
            initial={false}
            animate={reduceMotion ? undefined : { opacity: [0.92, 1], y: [10, 0], scale: [0.99, 1] }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <BlurText
              as="h1"
              text={hero.headline.line1}
              delay={82}
              reduceMotion={Boolean(reduceMotion)}
              className="font-display text-[min(clamp(3rem,15vw,12rem),24vh)] font-black uppercase leading-[0.8] tracking-normal text-[#d7ff00] drop-shadow-[0_0_34px_rgba(215,255,0,0.18)]"
            />
          </motion.div>

          <motion.div
            initial={false}
            animate={reduceMotion ? undefined : { opacity: [0.82, 1], y: [10, 0] }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
            className="mt-[min(2.25rem,5vh)] max-w-3xl"
          >
            <p className="mb-3 font-display text-lg font-semibold text-white sm:text-xl md:text-2xl">
              {hero.positioning}
            </p>
            <BlurText
              text={hero.tagline}
              by="words"
              delay={40}
              reduceMotion={Boolean(reduceMotion)}
              className="justify-center font-caption text-base leading-relaxed text-neutral-300 transition-colors hover:text-white sm:text-lg md:text-xl"
            />
            <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-[#d7ff00]/90 sm:text-sm">
              {hero.proof}
            </p>
          </motion.div>
        </motion.div>

        <a
          href="#systems"
          aria-label="Scroll to selected AI systems"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full p-2 text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:bottom-7"
        >
          <motion.span
            initial={false}
            animate={reduceMotion ? undefined : { opacity: [0.7, 1], y: [-6, 0] }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.72 }}
            className="block"
          >
            <ChevronDown className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.4} />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
