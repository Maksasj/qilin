import * as React from "react"

import { cn } from "@/lib/cn"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "tailwind.config.jsflex tailwind.config.jsmin-h-[80px] tailwind.config.jsw-full tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsborder-zinc-200 tailwind.config.jsbg-white tailwind.config.jspx-3 tailwind.config.jspy-2 tailwind.config.jstext-sm tailwind.config.jsring-offset-white placeholder:tailwind.config.jstext-zinc-500 focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-zinc-950 focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50 dark:tailwind.config.jsborder-zinc-800 dark:tailwind.config.jsbg-zinc-950 dark:tailwind.config.jsring-offset-zinc-950 dark:placeholder:tailwind.config.jstext-zinc-400 dark:focus-visible:tailwind.config.jsring-zinc-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
