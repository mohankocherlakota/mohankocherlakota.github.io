import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { writing } from "@/content/portfolio";
import { cardReveal } from "@/lib/motion";

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing & Research"
      title="Thinking in public about production AI"
      description="A concise writing layer that makes the portfolio feel less like a resume and more like a technical point of view."
      className="border-y border-white/5 bg-white/[0.015]"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {writing.map((item) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardReveal}
              className="glass-card glass-card-hover group flex min-h-[250px] flex-col rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-300/10 text-lime-200 ring-1 ring-inset ring-lime-200/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-200/70">
                {item.theme}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-auto pt-6 text-xs font-medium uppercase tracking-[0.22em] text-foreground/70">
                Medium
              </span>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
