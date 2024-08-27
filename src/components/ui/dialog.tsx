import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "tailwind.config.jsfixed tailwind.config.jsinset-0 tailwind.config.jsz-50 tailwind.config.jsbg-black/80 tailwind.config.js data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.jsfixed tailwind.config.jsleft-[50%] tailwind.config.jstop-[50%] tailwind.config.jsz-50 tailwind.config.jsgrid tailwind.config.jsw-full tailwind.config.jsmax-w-lg tailwind.config.jstranslate-x-[-50%] tailwind.config.jstranslate-y-[-50%] tailwind.config.jsgap-4 tailwind.config.jsborder tailwind.config.jsbg-background tailwind.config.jsp-6 tailwind.config.jsshadow-lg tailwind.config.jsduration-200 data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0 data-[state=closed]:tailwind.config.jszoom-out-95 data-[state=open]:tailwind.config.jszoom-in-95 data-[state=closed]:tailwind.config.jsslide-out-to-left-1/2 data-[state=closed]:tailwind.config.jsslide-out-to-top-[48%] data-[state=open]:tailwind.config.jsslide-in-from-left-1/2 data-[state=open]:tailwind.config.jsslide-in-from-top-[48%] sm:tailwind.config.jsrounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="tailwind.config.jsabsolute tailwind.config.jsright-4 tailwind.config.jstop-4 tailwind.config.jsrounded-sm tailwind.config.jsopacity-70 tailwind.config.jsring-offset-background tailwind.config.jstransition-opacity hover:tailwind.config.jsopacity-100 focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-2 focus:tailwind.config.jsring-ring focus:tailwind.config.jsring-offset-2 disabled:tailwind.config.jspointer-events-none data-[state=open]:tailwind.config.jsbg-accent data-[state=open]:tailwind.config.jstext-muted-foreground">
        <X className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
        <span className="tailwind.config.jssr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsflex-col tailwind.config.jsspace-y-1.5 tailwind.config.jstext-center sm:tailwind.config.jstext-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsflex-col-reverse sm:tailwind.config.jsflex-row sm:tailwind.config.jsjustify-end sm:tailwind.config.jsspace-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "tailwind.config.jstext-lg tailwind.config.jsfont-semibold tailwind.config.jsleading-none tailwind.config.jstracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("tailwind.config.jstext-sm tailwind.config.jstext-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
