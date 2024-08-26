import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "tailwind.config.jsinline-flex tailwind.config.jsh-10 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-md tailwind.config.jsbg-muted tailwind.config.jsp-1 tailwind.config.jstext-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwind.config.jsinline-flex tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jswhitespace-nowrap tailwind.config.jsrounded-sm tailwind.config.jspx-3 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsfont-medium tailwind.config.jsring-offset-background tailwind.config.jstransition-all focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jspointer-events-none disabled:tailwind.config.jsopacity-50 data-[state=active]:tailwind.config.jsbg-background data-[state=active]:tailwind.config.jstext-foreground data-[state=active]:tailwind.config.jsshadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "tailwind.config.jsmt-2 tailwind.config.jsring-offset-background focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
