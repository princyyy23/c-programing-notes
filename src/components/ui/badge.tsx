import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" }) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-border text-foreground",
  }
  return (
    <div className={cn("inline-flex items-center rounded-[4px] px-2 py-0.5 text-[11px] font-semibold transition-colors", variants[variant], className)} {...props} />
  )
}

export { Badge }
