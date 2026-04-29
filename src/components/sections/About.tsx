import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  corePrinciples,
  education,
  educationIcon as EducationIcon,
  recognition,
  recognitionIcon as RecognitionIcon,
} from "@/content/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="From research to production AI"
      description="Hello, I'm Mohan — an AI Engineer specialising in multi-agent systems, RAG pipelines, and production-grade LLM architectures, with a Master's in Applied Machine Intelligence from Northeastern University. Currently at Altimetrik, I design and deliver agentic AI systems that operate at enterprise scale across the full SDLC lifecycle."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {corePrinciples.map((principle, i) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6"
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/15 to-violet-400/15 text-sky-300 ring-1 ring-inset ring-white/10">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold">
            <EducationIcon className="h-5 w-5 text-sky-300" />
            Education
          </h3>
          <ul className="space-y-4">
            {education.map((edu) => (
              <li
                key={edu.school}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <p className="font-display text-sm font-semibold text-foreground">
                  {edu.school}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{edu.degree}</p>
                <p className="mt-1 text-xs text-muted-foreground/70">{edu.dates}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold">
            <RecognitionIcon className="h-5 w-5 text-amber-300" />
            Certifications & Recognition
          </h3>
          <ul className="space-y-2">
            {recognition.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300/60" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
