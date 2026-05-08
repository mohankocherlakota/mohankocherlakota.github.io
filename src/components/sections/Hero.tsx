import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/portfolio";

type BlurTextProps = {
  text: string;
  delay?: number;
  by?: "letters" | "words";
  className?: string;
  reduceMotion?: boolean;
};

function BlurText({
  text,
  delay = 70,
  by = "letters",
  className = "",
  reduceMotion = false,
}: BlurTextProps) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLParagraphElement>(null);

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
    <p ref={ref} className={className} aria-label={text}>
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
    </p>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 flex-col overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

      <main className="relative min-h-screen flex-1">
        <div className="absolute left-1/2 top-[47%] w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:top-[49%]">
          <motion.div
            initial={false}
            animate={reduceMotion ? undefined : { opacity: [0.92, 1], y: [10, 0], scale: [0.99, 1] }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-[1120px] text-center"
          >
            <BlurText
              text="MOHAN"
              delay={82}
              reduceMotion={Boolean(reduceMotion)}
              className="font-display text-[clamp(3.3rem,17vw,13.75rem)] font-black uppercase leading-[0.76] tracking-normal text-[#d7ff00] drop-shadow-[0_0_30px_rgba(215,255,0,0.12)]"
            />

            <div className="absolute left-1/2 top-1/2 z-10 h-[118px] w-[72px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-zinc-950 shadow-2xl ring-1 ring-black/50 transition-transform duration-300 hover:scale-105 sm:h-[150px] sm:w-[90px] md:h-[186px] md:w-[112px] lg:h-[216px] lg:w-[130px]">
              <motion.div
                initial={false}
                animate={reduceMotion ? undefined : { opacity: [0.9, 1], scale: [0.94, 1], y: [8, 0] }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
                className="h-full w-full"
              >
                <img
                  src="/pic.jpg"
                  alt={hero.name}
                  className="h-full w-full origin-top scale-[2.25] object-cover object-[58%_16%]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-1/2 w-full -translate-x-1/2 px-6 text-center md:bottom-24 lg:bottom-32">
          <motion.div
            initial={false}
            animate={reduceMotion ? undefined : { opacity: [0.82, 1], y: [10, 0] }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.45 }}
          >
            <BlurText
              text="Building production-grade agentic AI systems."
              by="words"
              delay={140}
              reduceMotion={Boolean(reduceMotion)}
              className="justify-center font-caption text-[15px] leading-relaxed text-neutral-500 transition-colors hover:text-white sm:text-lg md:text-xl"
            />
          </motion.div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-neutral-500 transition-colors hover:text-white md:bottom-10"
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
      </main>
    </section>
  );
}
