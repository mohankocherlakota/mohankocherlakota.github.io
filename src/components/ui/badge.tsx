import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/85",
        secondary:
          "border-transparent bg-white/5 text-foreground/80 hover:bg-white/10",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline:
          "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground",
        gradient:
          "border-transparent bg-gradient-to-r from-sky-400/15 to-violet-400/15 text-sky-200 ring-1 ring-inset ring-sky-400/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
