import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("tailwind.config.jsrelative tailwind.config.jsoverflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="tailwind.config.jsh-full tailwind.config.jsw-full tailwind.config.jsrounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jstouch-none tailwind.config.jsselect-none tailwind.config.jstransition-colors",
      orientation === "vertical" &&
        "tailwind.config.jsh-full tailwind.config.jsw-2.5 tailwind.config.jsborder-l tailwind.config.jsborder-l-transparent tailwind.config.jsp-[1px]",
      orientation === "horizontal" &&
        "tailwind.config.jsh-2.5 tailwind.config.jsflex-col tailwind.config.jsborder-t tailwind.config.jsborder-t-transparent tailwind.config.jsp-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="tailwind.config.jsrelative tailwind.config.jsflex-1 tailwind.config.jsrounded-full tailwind.config.jsbg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
