import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { projects } from "@/content/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Production-ready AI systems"
      description="A selection of GenAI, RAG, and ML projects delivering measurable impact — from multi-agent orchestration to multimodal retrieval, audio AI, and predictive analytics."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.05 }}
              className="glass-card glass-card-hover group relative rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/15 to-violet-400/15 text-sky-300 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-sky-300/80">
                        {project.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-md px-2 py-0.5 text-[11px]"
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
        All projects on{" "}
        <a
          href="https://github.com/mohankocherlakota"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white"
        >
          github.com/mohankocherlakota
        </a>
      </p>
    </Section>
  );
}
