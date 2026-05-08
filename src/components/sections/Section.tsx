import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();
  const sectionVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.985 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
            delayChildren: 0.08,
          },
    },
  };
  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18, margin: "-8% 0px -12% 0px" }}
      className={cn("scroll-mt-24 py-12 md:py-16", className)}
    >
      <div className={cn("mx-auto max-w-6xl px-6", innerClassName)}>
        {(eyebrow || title || description) && (
          <motion.header
            variants={itemVariants}
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
        <motion.div variants={itemVariants}>{children}</motion.div>
      </div>
    </motion.section>
  );
}
