import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { experience } from "@/content/portfolio";

function CompanyLogo({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  return (
    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="h-8 w-8 object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <Briefcase className="h-4 w-4 text-muted-foreground" />
      )}
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      title="5+ years building enterprise AI"
      description="From legacy modernisation at Capgemini to ML risk analytics at Traxidy and multi-agent SDLC automation at Altimetrik — a continuous push from research into production."
    >
      <ol className="relative space-y-8 border-l border-white/10 pl-6 md:pl-10">
        {experience.map((role, i) => (
          <motion.li
            key={`${role.title}-${role.company}-${role.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[calc(1.5rem+9px)] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-sky-400/70 md:-left-[calc(2.5rem+9px)]">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
            </span>

            <article className="glass-card glass-card-hover rounded-2xl p-6">
              <header className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <CompanyLogo src={role.logo} alt={role.company} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm text-sky-300/90">
                      {role.company}
                      <span className="text-muted-foreground/60">·</span>
                      <span className="text-muted-foreground">{role.location}</span>
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-full px-3 py-1 text-[11px]"
                >
                  {role.period}
                </Badge>
              </header>

              <ul className="mt-5 space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-300/70" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-md px-2 py-0.5 text-[11px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
