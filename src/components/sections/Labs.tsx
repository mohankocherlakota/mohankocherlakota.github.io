import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { projects } from "@/content/portfolio";
import { cardReveal } from "@/lib/motion";

export function Labs() {
  return (
    <Section
      id="labs"
      eyebrow="Labs & Experiments"
      title="Focused experiments across retrieval, audio, vision, and finance"
      description="The broader project set stays visible, but framed as experiments that demonstrate range without competing with the selected AI systems."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              variants={cardReveal}
              className="glass-card glass-card-hover group relative rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lime-300/10 to-sky-400/10 text-lime-200 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-lime-200/75">
                        {project.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-md px-2 py-0.5 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        More implementation work on{" "}
        <a
          href="https://github.com/mohankocherlakota"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded font-medium text-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d7ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          GitHub
        </a>
      </p>
    </Section>
  );
}
