import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  motionViewport,
  reducedSectionReveal,
  sectionBodyReveal,
  sectionHeaderReveal,
  sectionReveal,
} from "@/lib/motion";

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
  const reduceMotion = useReducedMotion();
  const sectionVariants = reduceMotion ? reducedSectionReveal : sectionReveal;
  const headerVariants = reduceMotion ? reducedSectionReveal : sectionHeaderReveal;
  const bodyVariants = reduceMotion ? reducedSectionReveal : sectionBodyReveal;

  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={motionViewport}
      className={cn("relative scroll-mt-24 py-12 md:py-16", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-6", innerClassName)}>
        {(eyebrow || title || description) && (
          <motion.header
            variants={headerVariants}
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
        <motion.div variants={bodyVariants}>{children}</motion.div>
      </div>
    </motion.section>
  );
}
