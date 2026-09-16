import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { aiSystems } from "@/content/portfolio";
import { cardReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

function ArchitectureDiagram({ steps, compact = false }: { steps: string[]; compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-2 rounded-2xl border border-lime-300/15 bg-black/30 p-3",
        compact ? "grid-cols-1 sm:grid-cols-5" : "grid-cols-1 md:grid-cols-5",
      )}
      aria-label={`Architecture: ${steps.join(" to ")}`}
    >
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex min-h-14 flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-lime-100/90">
            {step}
          </div>
          {index < steps.length - 1 ? (
            <ArrowRight className="hidden h-4 w-4 shrink-0 text-lime-300/70 md:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function AISystems() {
  const [featured, ...secondary] = aiSystems;
  const FeaturedIcon = featured.icon;

  return (
    <Section
      id="systems"
      eyebrow="Selected AI Systems"
      title="Production AI with architecture, control, and impact"
      description="Three representative systems that show how I think about agentic workflows, enterprise knowledge, and reliable AI delivery."
      className="border-t border-white/5 bg-[radial-gradient(circle_at_20%_0%,rgba(215,255,0,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]"
    >
      <motion.article
        variants={cardReveal}
        className="glass-card glass-card-hover group overflow-hidden rounded-2xl p-6 md:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-300/10 text-lime-200 ring-1 ring-inset ring-lime-200/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                <FeaturedIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {featured.title}
                </h3>
                <p className="text-sm text-lime-200/80">{featured.subtitle}</p>
              </div>
            </div>

            <div className="grid gap-4 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
                  Problem
                </p>
                <p>{featured.problem}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
                  Approach
                </p>
                <p>{featured.approach}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
                  Impact
                </p>
                <p>{featured.impact}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
                  Lessons
                </p>
                <p>{featured.lessons}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {featured.stack.map((item) => (
                <Badge key={item} variant="outline" className="rounded-md px-2 py-0.5 text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <ArchitectureDiagram steps={featured.architecture} />
        </div>
      </motion.article>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {secondary.map((system) => {
          const Icon = system.icon;
          return (
            <motion.article
              key={system.title}
              variants={cardReveal}
              className="glass-card glass-card-hover group rounded-2xl p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-lime-200 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {system.title}
                    </h3>
                    <p className="text-xs text-lime-200/75">{system.subtitle}</p>
                  </div>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              <ArchitectureDiagram steps={system.architecture} compact />

              <div className="mt-5 grid gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-foreground/80">Problem: </span>
                  {system.problem}
                </p>
                <p>
                  <span className="text-foreground/80">Approach: </span>
                  {system.approach}
                </p>
                <p>
                  <span className="text-foreground/80">Impact: </span>
                  {system.impact}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {system.stack.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-md px-2 py-0.5 text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
