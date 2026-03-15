import { useState, useEffect, useRef } from "react"
import type { Question } from "@/types"
import { Card } from "@/components/ui/card"
import { BlockRenderer } from "@/components/blocks/BlockRenderer"
import { NoteHint } from "@/components/blocks/NoteHint"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: Question
  index: number
  accentColor: string
  focused?: boolean
}

const numberColorMap: Record<string, string> = {
  violet: "bg-violet-500 text-white",
  cyan: "bg-cyan-500 text-white",
  emerald: "bg-emerald-500 text-white",
  rose: "bg-rose-500 text-white",
}

const ctaActiveMap: Record<string, string> = {
  violet: "text-violet-700 dark:text-violet-300 bg-violet-500/8",
  cyan: "text-cyan-700 dark:text-cyan-300 bg-cyan-500/8",
  emerald: "text-emerald-700 dark:text-emerald-300 bg-emerald-500/8",
  rose: "text-rose-700 dark:text-rose-300 bg-rose-500/8",
}

const dividerColorMap: Record<string, string> = {
  violet: "text-violet-600/60 dark:text-violet-400/60",
  cyan: "text-cyan-600/60 dark:text-cyan-400/60",
  emerald: "text-emerald-600/60 dark:text-emerald-400/60",
  rose: "text-rose-600/60 dark:text-rose-400/60",
}

export function QuestionCard({ question, index, accentColor, focused }: QuestionCardProps) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (focused) {
      setExpanded(true)
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 80)
    }
  }, [focused])

  return (
    <div ref={cardRef} data-question-id={question.id}>
      <Card className={cn(
        "group overflow-hidden transition-all duration-150",
        expanded && "ring-1 ring-primary/20",
        focused && "ring-2 ring-primary/50"
      )}>
        {/* Clickable header */}
        <div
          className="px-5 pt-4 pb-4 cursor-pointer select-none"
          onMouseDown={e => e.preventDefault()}
          onClick={() => setExpanded(!expanded)}
        >
          {/* Meta row */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className={cn(
              "flex-shrink-0 w-6 h-6 rounded-[4px] flex items-center justify-center text-[11px] font-bold",
              numberColorMap[accentColor] || "bg-primary text-primary-foreground"
            )}>
              {index + 1}
            </span>
            <span className="text-[11px] text-muted-foreground/80 font-medium">{question.source}</span>
            {question.marks && (
              <>
                <span className="text-muted-foreground/40 text-[10px]">·</span>
                <span className="text-[11px] text-muted-foreground/80">{question.marks} marks</span>
              </>
            )}
            {question.notes && (
              <span className="ml-auto flex-shrink-0 text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/30 px-1.5 py-0.5 rounded-[3px]">
                💡 notes
              </span>
            )}
          </div>

          {/* Question title — hero */}
          <h3 className="text-[15.5px] font-semibold text-foreground leading-snug mb-3.5 pr-2">
            {question.title}
          </h3>

          {/* Show / Hide Answer CTA */}
          <div className="flex justify-end">
            <span className={cn(
              "inline-flex items-center gap-1.5 text-[12px] font-semibold px-2.5 py-1 rounded-[4px] transition-colors",
              expanded
                ? ctaActiveMap[accentColor] || "text-primary bg-primary/10"
                : "text-muted-foreground group-hover:text-foreground group-hover:bg-accent"
            )}>
              {expanded
                ? <><IconChevronUp size={13} stroke={2.2} /> Hide Answer</>
                : <><IconChevronDown size={13} stroke={2.2} /> Show Answer</>
              }
            </span>
          </div>
        </div>

        {/* Answer section */}
        {expanded && (
          <div className="border-t border-border px-5 pt-0 pb-5">
            {/* "Answer" divider */}
            <div className="flex items-center gap-2.5 py-3">
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest",
                dividerColorMap[accentColor] || "text-muted-foreground/50"
              )}>
                Answer
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-1">
              {question.blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
              {question.notes && <NoteHint notes={question.notes} />}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
