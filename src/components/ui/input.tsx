import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "tailwind.config.jsflex tailwind.config.jsh-10 tailwind.config.jsw-full tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsborder-input tailwind.config.jsbg-background tailwind.config.jspx-3 tailwind.config.jspy-2 tailwind.config.jstext-sm tailwind.config.jsring-offset-background file:tailwind.config.jsborder-0 file:tailwind.config.jsbg-transparent file:tailwind.config.jstext-sm file:tailwind.config.jsfont-medium placeholder:tailwind.config.jstext-muted-foreground focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
