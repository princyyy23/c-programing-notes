import { useState, useEffect, useCallback } from "react"
import type { CourseOutcome } from "@/types"
import { BlockRenderer } from "@/components/blocks/BlockRenderer"
import { NoteHint } from "@/components/blocks/NoteHint"
import { IconChevronLeft, IconChevronRight, IconEye, IconEyeOff, IconCheck } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { useProgress } from "@/context/ProgressContext"

const accentBgMap: Record<string, string> = {
  violet: "bg-violet-500",
  cyan: "bg-cyan-500",
  emerald: "bg-emerald-500",
  rose: "bg-rose-500",
}

const accentTextMap: Record<string, string> = {
  violet: "text-violet-600 dark:text-violet-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  rose: "text-rose-600 dark:text-rose-400",
}

const reviewedBtnMap: Record<string, string> = {
  violet: "text-violet-600 dark:text-violet-400 bg-violet-500/12 border-violet-500/30 hover:bg-violet-500/20",
  cyan: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/12 border-cyan-500/30 hover:bg-cyan-500/20",
  emerald: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/12 border-emerald-500/30 hover:bg-emerald-500/20",
  rose: "text-rose-600 dark:text-rose-400 bg-rose-500/12 border-rose-500/30 hover:bg-rose-500/20",
}

interface StudyViewProps {
  co: CourseOutcome
  initialQuestionId?: string | null
}

export function StudyView({ co, initialQuestionId }: StudyViewProps) {
  const initialIndex = initialQuestionId
    ? Math.max(0, co.questions.findIndex(q => q.id === initialQuestionId))
    : 0

  const [current, setCurrent] = useState(initialIndex)
  const [revealed, setRevealed] = useState(false)
  const { isReviewed, toggle, getProgress } = useProgress()

  const question = co.questions[current]
  const done = isReviewed(question.id)
  const { done: reviewedCount, total } = getProgress(co)
  const positionPct = ((current + 1) / co.questions.length) * 100

  const goNext = useCallback(() => {
    if (current < co.questions.length - 1) {
      setCurrent(c => c + 1)
      setRevealed(false)
    }
  }, [current, co.questions.length])

  const goPrev = useCallback(() => {
    if (current > 0) {
      setCurrent(c => c - 1)
      setRevealed(false)
    }
  }, [current])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't hijack when user is typing in an input
      if ((e.target as HTMLElement).tagName === "INPUT") return
      if (e.key === "ArrowRight" || e.key === "l") goNext()
      else if (e.key === "ArrowLeft" || e.key === "h") goPrev()
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        setRevealed(r => !r)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [goNext, goPrev])

  // Dot window: 7 dots centred on current
  const DOTS = 7
  const half = Math.floor(DOTS / 2)
  const start = Math.max(0, Math.min(current - half, co.questions.length - DOTS))
  const end = Math.min(co.questions.length, start + DOTS)
  const dotSlice = co.questions.slice(start, end)

  return (
    <div className="flex flex-col gap-5">

      {/* ── Top meta bar ── */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-300", accentBgMap[co.color] || "bg-primary")}
            style={{ width: `${positionPct}%` }}
          />
        </div>
        <span className={cn("text-[12px] font-semibold tabular-nums flex-shrink-0", accentTextMap[co.color])}>
          {current + 1} / {co.questions.length}
        </span>
        {reviewedCount > 0 && (
          <span className="text-[11px] text-muted-foreground flex-shrink-0 tabular-nums">
            ✓ {reviewedCount}/{total}
          </span>
        )}
      </div>

      {/* ── Question card ── */}
      <div className={cn(
        "rounded-xl border bg-card shadow-sm flex flex-col transition-all",
        done ? "border-border/40 opacity-90" : "border-border"
      )}>
        {/* Question */}
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className={cn(
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold text-white",
              accentBgMap[co.color] || "bg-primary"
            )}>
              {current + 1}
            </span>
            <div className="flex-1 min-w-0">
              <h2 className="text-[18px] md:text-[20px] font-semibold text-foreground leading-snug">
                {question.title}
              </h2>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-[11px] text-muted-foreground">{question.source}</span>
                {question.marks && (
                  <>
                    <span className="text-muted-foreground/40 text-[10px]">·</span>
                    <span className="text-[11px] text-muted-foreground">{question.marks} marks</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Answer / Reveal */}
        {revealed ? (
          <div className="border-t border-border px-6 md:px-8 py-5">
            <div className="space-y-1">
              {question.blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
              {question.notes && <NoteHint notes={question.notes} />}
            </div>

            {/* Footer row: hide + mark reviewed */}
            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/50 flex-wrap">
              <button
                onClick={() => setRevealed(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-[12px] text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
              >
                <IconEyeOff size={13} stroke={2} />
                Hide answer
              </button>
              <button
                onClick={() => toggle(question.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[12px] font-semibold transition-colors cursor-pointer",
                  done
                    ? reviewedBtnMap[co.color] || "text-primary bg-primary/10 border-primary/30"
                    : "text-muted-foreground border-border hover:bg-accent"
                )}
              >
                <IconCheck size={13} stroke={2.5} />
                {done ? "Reviewed" : "Mark reviewed"}
              </button>

              {/* Shortcut hint - inline */}
              <span className="ml-auto text-[10px] text-muted-foreground/40 hidden sm:block">
                <kbd className="px-1 rounded bg-muted border border-border font-mono">Space</kbd> toggle
              </span>
            </div>
          </div>
        ) : (
          <div className="border-t border-border px-6 md:px-8 py-8 flex flex-col items-center gap-3">
            <button
              onClick={() => setRevealed(true)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              <IconEye size={16} stroke={2} />
              Reveal Answer
            </button>
            <p className="text-[11px] text-muted-foreground/40">
              <kbd className="px-1 rounded bg-muted border border-border font-mono text-[10px]">Space</kbd>{" "}
              or{" "}
              <kbd className="px-1 rounded bg-muted border border-border font-mono text-[10px]">Enter</kbd>{" "}
              to reveal
            </p>
          </div>
        )}
      </div>

      {/* ── Navigation ── */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <IconChevronLeft size={15} stroke={2} />
          Prev
        </button>

        {/* Dot navigator */}
        <div className="flex items-center gap-1.5">
          {dotSlice.map((q, i) => {
            const idx = start + i
            const isCurrent = idx === current
            const isReviewedQ = isReviewed(q.id)
            return (
              <button
                key={q.id}
                onClick={() => { setCurrent(idx); setRevealed(false) }}
                title={`Q${idx + 1}`}
                className={cn(
                  "rounded-full transition-all cursor-pointer",
                  isCurrent
                    ? cn("w-6 h-2.5", accentBgMap[co.color] || "bg-primary")
                    : isReviewedQ
                      ? "w-2 h-2 bg-emerald-400/70 hover:bg-emerald-400"
                      : "w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/50"
                )}
              />
            )
          })}
        </div>

        <button
          onClick={goNext}
          disabled={current === co.questions.length - 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          Next
          <IconChevronRight size={15} stroke={2} />
        </button>
      </div>

      {/* ── Keyboard hint strip ── */}
      <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground/40 select-none">
        <span>
          <kbd className="px-1 rounded bg-muted border border-border font-mono text-[10px]">←</kbd>{" "}
          <kbd className="px-1 rounded bg-muted border border-border font-mono text-[10px]">→</kbd>{" "}
          navigate
        </span>
        <span>
          <kbd className="px-1 rounded bg-muted border border-border font-mono text-[10px]">Space</kbd>{" "}
          reveal / hide
        </span>
      </div>
    </div>
  )
}
