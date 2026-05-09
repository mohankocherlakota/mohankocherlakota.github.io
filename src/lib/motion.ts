import type { Variants } from "framer-motion";

export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.18,
  margin: "-8% 0px -12% 0px",
} as const;

export const sectionReveal = {
  hidden: { opacity: 0, y: 34, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: smoothEase,
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
} satisfies Variants;

export const sectionHeaderReveal = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.58, ease: smoothEase },
  },
} satisfies Variants;

export const sectionBodyReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.08,
    },
  },
} satisfies Variants;

export const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.975, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.56, ease: smoothEase },
  },
} satisfies Variants;

export const timelineReveal = {
  hidden: { opacity: 0, x: -18, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: smoothEase },
  },
} satisfies Variants;

export const reducedSectionReveal = {
  hidden: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
} satisfies Variants;
