import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillCategories } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { cardReveal } from "@/lib/motion";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Expertise"
      title="The full AI/ML stack"
      description="Comprehensive technical expertise across the AI/ML stack — from research and prototyping to scalable production deployment."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={cardReveal}
              className={cn(
                "glass-card-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-6 backdrop-blur",
                category.accent,
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105",
                    category.iconBg,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-white/[0.08] hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
