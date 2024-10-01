import { cn } from "@/lib/cn"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("tailwind.config.jsanimate-pulse tailwind.config.jsrounded-md tailwind.config.jsbg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
