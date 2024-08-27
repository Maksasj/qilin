import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsh-full tailwind.config.jsw-full tailwind.config.jsflex-col tailwind.config.jsoverflow-hidden tailwind.config.jsrounded-md tailwind.config.jsbg-popover tailwind.config.jstext-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="tailwind.config.jsoverflow-hidden tailwind.config.jsp-0 tailwind.config.jsshadow-lg">
        <Command className="[&_[cmdk-group-heading]]:tailwind.config.jspx-2 [&_[cmdk-group-heading]]:tailwind.config.jsfont-medium [&_[cmdk-group-heading]]:tailwind.config.jstext-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:tailwind.config.jspt-0 [&_[cmdk-group]]:tailwind.config.jspx-2 [&_[cmdk-input-wrapper]_svg]:tailwind.config.jsh-5 [&_[cmdk-input-wrapper]_svg]:tailwind.config.jsw-5 [&_[cmdk-input]]:tailwind.config.jsh-12 [&_[cmdk-item]]:tailwind.config.jspx-2 [&_[cmdk-item]]:tailwind.config.jspy-3 [&_[cmdk-item]_svg]:tailwind.config.jsh-5 [&_[cmdk-item]_svg]:tailwind.config.jsw-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="tailwind.config.jsflex tailwind.config.jsitems-center tailwind.config.jsborder-b tailwind.config.jspx-3" cmdk-input-wrapper="">
    <Search className="tailwind.config.jsmr-2 tailwind.config.jsh-4 tailwind.config.jsw-4 tailwind.config.jsshrink-0 tailwind.config.jsopacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "tailwind.config.jsflex tailwind.config.jsh-11 tailwind.config.jsw-full tailwind.config.jsrounded-md tailwind.config.jsbg-transparent tailwind.config.jspy-3 tailwind.config.jstext-sm tailwind.config.jsoutline-none placeholder:tailwind.config.jstext-muted-foreground disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("tailwind.config.jsmax-h-[300px] tailwind.config.jsoverflow-y-auto tailwind.config.jsoverflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="tailwind.config.jspy-6 tailwind.config.jstext-center tailwind.config.jstext-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "tailwind.config.jsoverflow-hidden tailwind.config.jsp-1 tailwind.config.jstext-foreground [&_[cmdk-group-heading]]:tailwind.config.jspx-2 [&_[cmdk-group-heading]]:tailwind.config.jspy-1.5 [&_[cmdk-group-heading]]:tailwind.config.jstext-xs [&_[cmdk-group-heading]]:tailwind.config.jsfont-medium [&_[cmdk-group-heading]]:tailwind.config.jstext-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("tailwind.config.js-mx-1 tailwind.config.jsh-px tailwind.config.jsbg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jscursor-default tailwind.config.jsselect-none tailwind.config.jsitems-center tailwind.config.jsrounded-sm tailwind.config.jspx-2 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsoutline-none data-[disabled=true]:tailwind.config.jspointer-events-none data-[selected='true']:tailwind.config.jsbg-accent data-[selected=true]:tailwind.config.jstext-accent-foreground data-[disabled=true]:tailwind.config.jsopacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "tailwind.config.jsml-auto tailwind.config.jstext-xs tailwind.config.jstracking-widest tailwind.config.jstext-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
