import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { credentials, skillCategories } from "@/content/portfolio";
import { cardReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Technology() {
  return (
    <Section
      id="technology"
      eyebrow="Technology & Credibility"
      title="Agents, RAG, MLOps, and enterprise delivery"
      description="A compact view of the stack, certifications, and signals that support the production AI narrative."
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {credentials.map((credential) => {
          const Icon = credential.icon;
          const card = (
            <motion.div
              variants={cardReveal}
              className="glass-card glass-card-hover group flex min-h-[170px] flex-col rounded-2xl p-5"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-lime-200 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                {credential.href ? (
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                ) : null}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {credential.issuer}
              </p>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {credential.title}
              </h3>
              <p className="mt-auto pt-5 text-xs text-lime-200/70">
                {credential.status}
              </p>
            </motion.div>
          );

          return credential.href ? (
            <a
              key={credential.title}
              href={credential.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {card}
            </a>
          ) : (
            <div key={credential.title}>{card}</div>
          );
        })}
      </div>
    </Section>
  );
}
