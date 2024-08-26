import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "tailwind.config.jsinline-flex tailwind.config.jsitems-center tailwind.config.jsrounded-full tailwind.config.jsborder tailwind.config.jspx-2.5 tailwind.config.jspy-0.5 tailwind.config.jstext-xs tailwind.config.jsfont-semibold tailwind.config.jstransition-colors focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-2 focus:tailwind.config.jsring-ring focus:tailwind.config.jsring-offset-2",
  {
    variants: {
      variant: {
        default:
          "tailwind.config.jsborder-transparent tailwind.config.jsbg-primary tailwind.config.jstext-primary-foreground hover:tailwind.config.jsbg-primary/80",
        secondary:
          "tailwind.config.jsborder-transparent tailwind.config.jsbg-secondary tailwind.config.jstext-secondary-foreground hover:tailwind.config.jsbg-secondary/80",
        destructive:
          "tailwind.config.jsborder-transparent tailwind.config.jsbg-destructive tailwind.config.jstext-destructive-foreground hover:tailwind.config.jsbg-destructive/80",
        outline: "tailwind.config.jstext-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
