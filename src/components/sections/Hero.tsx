import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/portfolio";

type BlurTextProps = {
  text: string;
  delay?: number;
  by?: "letters" | "words";
  className?: string;
};

function BlurText({ text, delay = 70, by = "letters", className = "" }: BlurTextProps) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
            transform: visible ? "translateY(0)" : "translateY(-18px)",
            transitionDelay: `${index * delay}ms`,
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
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 flex-col overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

      <main className="relative min-h-screen flex-1">
        <div className="absolute left-1/2 top-[51%] w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative mx-auto max-w-[1120px] text-center">
            <BlurText
              text="MOHAN"
              delay={82}
              className="font-display text-[clamp(3.15rem,16vw,13.25rem)] font-black uppercase leading-[0.76] tracking-normal text-[#d7ff00] drop-shadow-[0_0_28px_rgba(215,255,0,0.11)]"
            />
            <BlurText
              text="KOCHER"
              delay={82}
              className="font-display text-[clamp(3.15rem,16vw,13.25rem)] font-black uppercase leading-[0.76] tracking-normal text-[#d7ff00] drop-shadow-[0_0_28px_rgba(215,255,0,0.11)]"
            />

            <div className="absolute left-1/2 top-1/2 z-10 h-[128px] w-[76px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-zinc-950 shadow-2xl ring-1 ring-black/50 transition-transform duration-300 hover:scale-105 sm:h-[156px] sm:w-[92px] md:h-[188px] md:w-[112px] lg:h-[222px] lg:w-[132px]">
              <img
                src="/pic.jpg"
                alt={hero.name}
                className="h-full w-full origin-top scale-[2.15] object-cover object-[58%_18%]"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 w-full -translate-x-1/2 px-6 text-center md:bottom-24 lg:bottom-32">
          <BlurText
            text="Building production-grade agentic AI systems."
            by="words"
            delay={140}
            className="justify-center font-caption text-[15px] leading-relaxed text-neutral-500 transition-colors hover:text-white sm:text-lg md:text-xl"
          />
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-neutral-500 transition-colors hover:text-white md:bottom-10"
        >
          <ChevronDown className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.4} />
        </a>
      </main>
    </section>
  );
}
