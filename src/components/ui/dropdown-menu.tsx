import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsselect-none tailwind.config.jsitems-center tailwind.config.jsrounded-sm tailwind.config.jspx-2 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsoutline-none focus:tailwind.config.jsbg-accent data-[state=open]:tailwind.config.jsbg-accent",
      inset && "tailwind.config.jspl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="tailwind.config.jsml-auto tailwind.config.jsh-4 tailwind.config.jsw-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "tailwind.config.jsz-50 tailwind.config.jsmin-w-[8rem] tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsbg-popover tailwind.config.jsp-1 tailwind.config.jstext-popover-foreground tailwind.config.jsshadow-lg data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0 data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-95 data-[side=bottom]:tailwind.config.jsslide-in-from-top-2 data-[side=left]:tailwind.config.jsslide-in-from-right-2 data-[side=right]:tailwind.config.jsslide-in-from-left-2 data-[side=top]:tailwind.config.jsslide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "tailwind.config.jsz-50 tailwind.config.jsmin-w-[8rem] tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-md tailwind.config.jsborder tailwind.config.jsbg-popover tailwind.config.jsp-1 tailwind.config.jstext-popover-foreground tailwind.config.jsshadow-md data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0 data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-95 data-[side=bottom]:tailwind.config.jsslide-in-from-top-2 data-[side=left]:tailwind.config.jsslide-in-from-right-2 data-[side=right]:tailwind.config.jsslide-in-from-left-2 data-[side=top]:tailwind.config.jsslide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsselect-none tailwind.config.jsitems-center tailwind.config.jsrounded-sm tailwind.config.jspx-2 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsoutline-none tailwind.config.jstransition-colors focus:tailwind.config.jsbg-accent focus:tailwind.config.jstext-accent-foreground data-[disabled]:tailwind.config.jspointer-events-none data-[disabled]:tailwind.config.jsopacity-50",
      inset && "tailwind.config.jspl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsselect-none tailwind.config.jsitems-center tailwind.config.jsrounded-sm tailwind.config.jspy-1.5 tailwind.config.jspl-8 tailwind.config.jspr-2 tailwind.config.jstext-sm tailwind.config.jsoutline-none tailwind.config.jstransition-colors focus:tailwind.config.jsbg-accent focus:tailwind.config.jstext-accent-foreground data-[disabled]:tailwind.config.jspointer-events-none data-[disabled]:tailwind.config.jsopacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="tailwind.config.jsabsolute tailwind.config.jsleft-2 tailwind.config.jsflex tailwind.config.jsh-3.5 tailwind.config.jsw-3.5 tailwind.config.jsitems-center tailwind.config.jsjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsselect-none tailwind.config.jsitems-center tailwind.config.jsrounded-sm tailwind.config.jspy-1.5 tailwind.config.jspl-8 tailwind.config.jspr-2 tailwind.config.jstext-sm tailwind.config.jsoutline-none tailwind.config.jstransition-colors focus:tailwind.config.jsbg-accent focus:tailwind.config.jstext-accent-foreground data-[disabled]:tailwind.config.jspointer-events-none data-[disabled]:tailwind.config.jsopacity-50",
      className
    )}
    {...props}
  >
    <span className="tailwind.config.jsabsolute tailwind.config.jsleft-2 tailwind.config.jsflex tailwind.config.jsh-3.5 tailwind.config.jsw-3.5 tailwind.config.jsitems-center tailwind.config.jsjustify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="tailwind.config.jsh-2 tailwind.config.jsw-2 tailwind.config.jsfill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "tailwind.config.jspx-2 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsfont-semibold",
      inset && "tailwind.config.jspl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("tailwind.config.js-mx-1 tailwind.config.jsmy-1 tailwind.config.jsh-px tailwind.config.jsbg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("tailwind.config.jsml-auto tailwind.config.jstext-xs tailwind.config.jstracking-widest tailwind.config.jsopacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
