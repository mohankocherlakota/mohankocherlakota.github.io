import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { socials } from "@/content/portfolio";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Let's build something intelligent"
      description="Always open to new opportunities, collaborations, and conversations about AI engineering, multi-agent systems, and production LLM architectures."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_minmax(0,360px)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass-card relative overflow-hidden rounded-3xl p-7 md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/10" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-gradient md:text-3xl">
              Ready to start a conversation?
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              For project enquiries, collaboration proposals, or just to chat
              about agentic AI — head to the full contact page for the form, or
              reach out directly via the channels on the right.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild variant="gradient" size="lg">
                <a href="/contact.html">
                  <Send className="h-4 w-4" />
                  Open full contact page
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="mailto:mohankvsnsk@gmail.com">
                  Email me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-col gap-3"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="glass-card glass-card-hover group flex items-center justify-between rounded-2xl px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                    <Icon className="h-4 w-4 text-foreground/80" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {social.label}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
