import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navItems } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SectionRail() {
  const [activeId, setActiveId] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.08, 0.2, 0.4, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section progress"
      className="fixed right-7 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      <span className="absolute bottom-2 top-2 w-px bg-white/10" aria-hidden="true" />
      {navItems.map((item) => {
        const active = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={`Scroll to ${item.label}`}
            aria-current={active ? "location" : undefined}
            className="group relative flex h-6 w-6 items-center justify-center"
          >
            <motion.span
              layout={!reduceMotion}
              className={cn(
                "relative z-10 block rounded-full border transition-colors duration-300",
                active
                  ? "h-3.5 w-3.5 border-[#d7ff00] bg-[#d7ff00] shadow-[0_0_18px_rgba(215,255,0,0.55)]"
                  : "h-2 w-2 border-white/25 bg-white/20 group-hover:border-white/60 group-hover:bg-white/60",
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
