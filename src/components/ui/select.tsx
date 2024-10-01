import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/cn"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsh-10 tailwind.config.jsw-full tailwind.config.jsitems-center tailwind.config.jsjustify-between tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsborder-zinc-200 tailwind.config.jsbg-white tailwind.config.jspx-3 tailwind.config.jspy-2 tailwind.config.jstext-sm tailwind.config.jsring-offset-white placeholder:tailwind.config.jstext-zinc-500 focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-2 focus:tailwind.config.jsring-zinc-950 focus:tailwind.config.jsring-offset-2 disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50 [&>span]:tailwind.config.jsline-clamp-1 dark:tailwind.config.jsborder-zinc-800 dark:tailwind.config.jsbg-zinc-950 dark:tailwind.config.jsring-offset-zinc-950 dark:placeholder:tailwind.config.jstext-zinc-400 dark:focus:tailwind.config.jsring-zinc-300",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="tailwind.config.jsh-4 tailwind.config.jsw-4 tailwind.config.jsopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jspy-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jspy-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.jsrelative tailwind.config.jsz-50 tailwind.config.jsmax-h-96 tailwind.config.jsmin-w-[8rem] tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsborder-zinc-200 tailwind.config.jsbg-white tailwind.config.jstext-zinc-950 tailwind.config.jsshadow-md data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0 data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-95 data-[side=bottom]:tailwind.config.jsslide-in-from-top-2 data-[side=left]:tailwind.config.jsslide-in-from-right-2 data-[side=right]:tailwind.config.jsslide-in-from-left-2 data-[side=top]:tailwind.config.jsslide-in-from-bottom-2 dark:tailwind.config.jsborder-zinc-800 dark:tailwind.config.jsbg-zinc-950 dark:tailwind.config.jstext-zinc-50",
        position === "popper" &&
          "data-[side=bottom]:tailwind.config.jstranslate-y-1 data-[side=left]:tailwind.config.js-translate-x-1 data-[side=right]:tailwind.config.jstranslate-x-1 data-[side=top]:tailwind.config.js-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "tailwind.config.jsp-1",
          position === "popper" &&
            "tailwind.config.jsh-[var(--radix-select-trigger-height)] tailwind.config.jsw-full tailwind.config.jsmin-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("tailwind.config.jspy-1.5 tailwind.config.jspl-8 tailwind.config.jspr-2 tailwind.config.jstext-sm tailwind.config.jsfont-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jsw-full tailwind.config.jscursor-default tailwind.config.jsselect-none tailwind.config.jsitems-center tailwind.config.jsrounded-sm tailwind.config.jspy-1.5 tailwind.config.jspl-8 tailwind.config.jspr-2 tailwind.config.jstext-sm tailwind.config.jsoutline-none focus:tailwind.config.jsbg-zinc-100 focus:tailwind.config.jstext-zinc-900 data-[disabled]:tailwind.config.jspointer-events-none data-[disabled]:tailwind.config.jsopacity-50 dark:focus:tailwind.config.jsbg-zinc-800 dark:focus:tailwind.config.jstext-zinc-50",
      className
    )}
    {...props}
  >
    <span className="tailwind.config.jsabsolute tailwind.config.jsleft-2 tailwind.config.jsflex tailwind.config.jsh-3.5 tailwind.config.jsw-3.5 tailwind.config.jsitems-center tailwind.config.jsjustify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("tailwind.config.js-mx-1 tailwind.config.jsmy-1 tailwind.config.jsh-px tailwind.config.jsbg-zinc-100 dark:tailwind.config.jsbg-zinc-800", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
