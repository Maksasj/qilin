import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/cn"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "tailwind.config.jsz-50 tailwind.config.jsw-64 tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsborder-zinc-200 tailwind.config.jsbg-white tailwind.config.jsp-4 tailwind.config.jstext-zinc-950 tailwind.config.jsshadow-md tailwind.config.jsoutline-none data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0 data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-95 data-[side=bottom]:tailwind.config.jsslide-in-from-top-2 data-[side=left]:tailwind.config.jsslide-in-from-right-2 data-[side=right]:tailwind.config.jsslide-in-from-left-2 data-[side=top]:tailwind.config.jsslide-in-from-bottom-2 dark:tailwind.config.jsborder-zinc-800 dark:tailwind.config.jsbg-zinc-950 dark:tailwind.config.jstext-zinc-50",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
