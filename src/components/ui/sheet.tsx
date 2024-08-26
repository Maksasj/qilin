import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "tailwind.config.jsfixed tailwind.config.jsinset-0 tailwind.config.jsz-50 tailwind.config.jsbg-black/80 tailwind.config.js data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsfade-out-0 data-[state=open]:tailwind.config.jsfade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "tailwind.config.jsfixed tailwind.config.jsz-50 tailwind.config.jsgap-4 tailwind.config.jsbg-background tailwind.config.jsp-6 tailwind.config.jsshadow-lg tailwind.config.jstransition tailwind.config.jsease-in-out data-[state=open]:tailwind.config.jsanimate-in data-[state=closed]:tailwind.config.jsanimate-out data-[state=closed]:tailwind.config.jsduration-300 data-[state=open]:tailwind.config.jsduration-500",
  {
    variants: {
      side: {
        top: "tailwind.config.jsinset-x-0 tailwind.config.jstop-0 tailwind.config.jsborder-b data-[state=closed]:tailwind.config.jsslide-out-to-top data-[state=open]:tailwind.config.jsslide-in-from-top",
        bottom:
          "tailwind.config.jsinset-x-0 tailwind.config.jsbottom-0 tailwind.config.jsborder-t data-[state=closed]:tailwind.config.jsslide-out-to-bottom data-[state=open]:tailwind.config.jsslide-in-from-bottom",
        left: "tailwind.config.jsinset-y-0 tailwind.config.jsleft-0 tailwind.config.jsh-full tailwind.config.jsw-3/4 tailwind.config.jsborder-r data-[state=closed]:tailwind.config.jsslide-out-to-left data-[state=open]:tailwind.config.jsslide-in-from-left sm:tailwind.config.jsmax-w-sm",
        right:
          "tailwind.config.jsinset-y-0 tailwind.config.jsright-0 tailwind.config.jsh-full tailwind.config.jsw-3/4 tailwind.config.js tailwind.config.jsborder-l data-[state=closed]:tailwind.config.jsslide-out-to-right data-[state=open]:tailwind.config.jsslide-in-from-right sm:tailwind.config.jsmax-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="tailwind.config.jsabsolute tailwind.config.jsright-4 tailwind.config.jstop-4 tailwind.config.jsrounded-sm tailwind.config.jsopacity-70 tailwind.config.jsring-offset-background tailwind.config.jstransition-opacity hover:tailwind.config.jsopacity-100 focus:tailwind.config.jsoutline-none focus:tailwind.config.jsring-2 focus:tailwind.config.jsring-ring focus:tailwind.config.jsring-offset-2 disabled:tailwind.config.jspointer-events-none data-[state=open]:tailwind.config.jsbg-secondary">
        <X className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
        <span className="tailwind.config.jssr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tailwind.config.jsflex tailwind.config.jsflex-col tailwind.config.jsspace-y-2 tailwind.config.jstext-center sm:tailwind.config.jstext-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
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
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("tailwind.config.jstext-lg tailwind.config.jsfont-semibold tailwind.config.jstext-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("tailwind.config.jstext-sm tailwind.config.jstext-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
