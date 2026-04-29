import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-7"
        >
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-xs font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-foreground/80">{hero.availability}</span>
          </Badge>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-gradient block">{hero.headline.line1}</span>
            <span className="text-gradient-brand block">
              {hero.headline.line2}
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {hero.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="gradient">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#contact">
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {hero.badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="rounded-full px-3 py-1">
                {badge}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Right column — profile card */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-sky-400/10 via-indigo-400/5 to-transparent blur-2xl" />
          <div className="glass-card relative rounded-3xl p-7 md:p-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-400 to-violet-400 opacity-60 blur-md" />
                <img
                  src="/pic.jpg"
                  alt="Mohan Kocherlakota"
                  className="relative h-16 w-16 rounded-2xl border border-white/15 object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <h2 className="truncate font-display text-lg font-semibold text-foreground">
                  {hero.name}
                </h2>
                <p className="text-sm text-sky-300/90">{hero.role}</p>
                <p className="text-xs text-muted-foreground">
                  {hero.company} · {hero.location}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {hero.expertise.map((tag) => (
                  <Badge
                    key={tag}
                    variant="gradient"
                    className="rounded-full px-3 py-1 text-[11px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-white/5 pt-5">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Sparkles className="h-4 w-4 text-sky-300" />
                Key Achievements
              </p>
              <ul className="space-y-2">
                {hero.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-300/70" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4"
      >
        {hero.stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card glass-card-hover rounded-2xl p-5 text-center"
          >
            <p className="font-display text-3xl font-bold text-gradient md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
