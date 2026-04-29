import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  innerClassName?: string;
}>;

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 md:py-28", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-6", innerClassName)}>
        {(eyebrow || title || description) && (
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl font-bold tracking-tight text-gradient md:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            ) : null}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
