import { useState } from "react"
import { IconBulb, IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { TextBlock } from "./TextBlock"

interface NoteHintProps {
  notes: string
  className?: string
}

export function NoteHint({ notes, className }: NoteHintProps) {
  const [open, setOpen] = useState(true)

  return (
    <div className={cn("mt-3 rounded-lg overflow-hidden border border-amber-200/70 dark:border-amber-800/40", className)}>
      {/* Header — always visible, click to expand */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2 bg-amber-50/80 dark:bg-amber-950/30 hover:bg-amber-100/80 dark:hover:bg-amber-950/50 transition-colors cursor-pointer text-left"
      >
        <IconBulb size={14} stroke={2} className="flex-shrink-0 text-amber-500 dark:text-amber-400" />
        <span className="text-[12px] font-semibold text-amber-700 dark:text-amber-400 flex-1">
          Quick Notes & Tips
        </span>
        <span className="text-amber-400 dark:text-amber-600">
          {open
            ? <IconChevronUp size={13} stroke={2} />
            : <IconChevronDown size={13} stroke={2} />
          }
        </span>
      </button>

      {/* Content — shown when expanded */}
      {open && (
        <div className="px-4 py-3 bg-amber-50/40 dark:bg-amber-950/15 border-t border-amber-200/60 dark:border-amber-800/30">
          <TextBlock
            content={notes}
            className="[&_p]:text-amber-900/90 dark:[&_p]:text-amber-200/90 [&_li]:text-amber-900/90 dark:[&_li]:text-amber-200/90 [&_h3]:text-amber-800 dark:[&_h3]:text-amber-300 [&_h4]:text-amber-800 dark:[&_h4]:text-amber-300"
          />
        </div>
      )}
    </div>
  )
}
