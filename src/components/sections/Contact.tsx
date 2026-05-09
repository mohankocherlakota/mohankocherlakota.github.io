import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { socials } from "@/content/portfolio";
import { cardReveal } from "@/lib/motion";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string).trim();
    const email = (data.get("email") as string).trim();
    const subject = (data.get("subject") as string).trim() || "Portfolio Enquiry";
    const message = (data.get("message") as string).trim();

    const body = encodeURIComponent(
      `Hi Mohan,\n\n${message}\n\n— ${name}\n${email}`
    );
    const mailto = `mailto:mohankvsnsk@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setSent(true);
    formRef.current?.reset();
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Let's build something intelligent"
      description="Always open to new opportunities, collaborations, and conversations about AI engineering, multi-agent systems, and production LLM architectures."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,340px)]">
        {/* Inline contact form */}
        <motion.div
          variants={cardReveal}
          className="glass-card glass-card-hover relative overflow-hidden rounded-3xl p-7 md:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/10" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-gradient">
              Send me a message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form and your email client will open with everything pre-filled.
            </p>

            {sent && (
              <p className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
                Your email client should have opened. Looking forward to connecting!
              </p>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-sky-400/50 focus:bg-white/8"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-sky-400/50 focus:bg-white/8"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-sky-400/50 focus:bg-white/8"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-sky-400/50 focus:bg-white/8"
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={cardReveal}
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
