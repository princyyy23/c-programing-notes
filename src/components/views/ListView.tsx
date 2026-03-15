import { useState, useRef, useEffect } from "react"
import type { CourseOutcome, Question } from "@/types"
import { BlockRenderer } from "@/components/blocks/BlockRenderer"
import { NoteHint } from "@/components/blocks/NoteHint"
import { IconChevronDown, IconChevronUp, IconCheck } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { useProgress } from "@/context/ProgressContext"

const numberColorMap: Record<string, string> = {
  violet: "bg-violet-500 text-white",
  cyan: "bg-cyan-500 text-white",
  emerald: "bg-emerald-500 text-white",
  rose: "bg-rose-500 text-white",
}

const reviewedBtnMap: Record<string, string> = {
  violet: "text-violet-600 dark:text-violet-400 bg-violet-500/12 hover:bg-violet-500/20",
  cyan: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/12 hover:bg-cyan-500/20",
  emerald: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/12 hover:bg-emerald-500/20",
  rose: "text-rose-600 dark:text-rose-400 bg-rose-500/12 hover:bg-rose-500/20",
}

function ListRow({
  q,
  index,
  color,
  focused,
}: {
  q: Question
  index: number
  color: string
  focused?: boolean
}) {
  const [open, setOpen] = useState(!!focused)
  const rowRef = useRef<HTMLDivElement>(null)
  const { isReviewed, toggle } = useProgress()
  const done = isReviewed(q.id)

  useEffect(() => {
    if (focused) {
      setOpen(true)
      setTimeout(() => rowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80)
    }
  }, [focused])

  return (
    <div ref={rowRef} className={cn("border-b border-border last:border-0", done && "bg-muted/20")}>
      {/* Row header */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 cursor-pointer select-none hover:bg-accent/50 transition-colors"
        onMouseDown={e => e.preventDefault()}
        onClick={() => setOpen(!open)}
      >
        <span className={cn(
          "flex-shrink-0 w-5 h-5 rounded-[3px] flex items-center justify-center text-[10px] font-bold",
          numberColorMap[color] || "bg-primary text-white"
        )}>
          {index + 1}
        </span>
        <span className={cn(
          "flex-1 text-[13px] font-medium leading-snug",
          done ? "text-foreground/50 line-through decoration-muted-foreground/30" : "text-foreground"
        )}>
          {q.title}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          {q.marks && (
            <span className="text-[10px] text-muted-foreground/60 tabular-nums">{q.marks}m</span>
          )}
          {q.notes && (
            <span className="text-[11px]" title="Has quick notes">💡</span>
          )}
          {done && (
            <IconCheck size={12} stroke={2.5} className="text-emerald-500" />
          )}
          {open
            ? <IconChevronUp size={13} stroke={2} className="text-muted-foreground/60" />
            : <IconChevronDown size={13} stroke={2} className="text-muted-foreground/40" />
          }
        </div>
      </div>

      {/* Expanded answer */}
      {open && (
        <div className="px-4 pb-4 pt-2 border-t border-border/50 bg-card/40 ml-0">
          <div className="ml-8 space-y-1">
            {q.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
            {q.notes && <NoteHint notes={q.notes} />}
          </div>
          <div className="ml-8 mt-3">
            <button
              onClick={e => { e.stopPropagation(); toggle(q.id) }}
              className={cn(
                "flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[11px] font-semibold transition-colors cursor-pointer",
                done
                  ? reviewedBtnMap[color] || "text-primary bg-primary/10"
                  : "text-muted-foreground/50 hover:text-muted-foreground hover:bg-accent"
              )}
            >
              <IconCheck size={11} stroke={2.5} />
              {done ? "Done" : "Mark done"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

interface ListViewProps {
  co: CourseOutcome
  focusedQuestionId?: string | null
}

export function ListView({ co, focusedQuestionId }: ListViewProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      {co.questions.map((q, i) => (
        <ListRow
          key={q.id}
          q={q}
          index={i}
          color={co.color}
          focused={focusedQuestionId === q.id}
        />
      ))}
    </div>
  )
}
