import { useState } from "react"
import type { CourseOutcome } from "@/types"
import { QuestionCard } from "./QuestionCard"
import { ListView } from "@/components/views/ListView"
import { StudyView } from "@/components/views/StudyView"
import { cn } from "@/lib/utils"
import { useProgress } from "@/context/ProgressContext"
import { IconChevronsDown, IconChevronsUp, IconCards, IconList, IconBrain } from "@tabler/icons-react"

type ViewMode = "card" | "list" | "study"

const VIEW_KEY = "cprog-view-mode"

function loadViewMode(): ViewMode {
  try {
    const v = localStorage.getItem(VIEW_KEY)
    if (v === "card" || v === "list" || v === "study") return v
  } catch { /* ignore */ }
  return "card"
}

interface QuestionListProps {
  co: CourseOutcome
  focusedQuestionId?: string | null
}

const accentBorderMap: Record<string, string> = {
  violet: "border-violet-500",
  cyan: "border-cyan-500",
  emerald: "border-emerald-500",
  rose: "border-rose-500",
}

const accentTextMap: Record<string, string> = {
  violet: "text-violet-600 dark:text-violet-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  rose: "text-rose-600 dark:text-rose-400",
}

const accentBgMap: Record<string, string> = {
  violet: "bg-violet-500/10 dark:bg-violet-500/15",
  cyan: "bg-cyan-500/10 dark:bg-cyan-500/15",
  emerald: "bg-emerald-500/10 dark:bg-emerald-500/15",
  rose: "bg-rose-500/10 dark:bg-rose-500/15",
}

const progressBarMap: Record<string, string> = {
  violet: "bg-violet-500",
  cyan: "bg-cyan-500",
  emerald: "bg-emerald-500",
  rose: "bg-rose-500",
}

const viewButtons: { mode: ViewMode; icon: React.ReactNode; label: string }[] = [
  { mode: "card",  icon: <IconCards size={14} stroke={1.8} />,  label: "Cards" },
  { mode: "list",  icon: <IconList  size={14} stroke={1.8} />,  label: "List"  },
  { mode: "study", icon: <IconBrain size={14} stroke={1.8} />,  label: "Study" },
]

export function QuestionList({ co, focusedQuestionId }: QuestionListProps) {
  const { getProgress } = useProgress()
  const { done, total } = getProgress(co)
  const notesCount = co.questions.filter(q => q.notes).length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  const [viewMode, setViewMode] = useState<ViewMode>(loadViewMode)
  // null = no force, true = expand all, false = collapse all
  const [forceExpand, setForceExpand] = useState<boolean | null>(null)

  const handleSetView = (mode: ViewMode) => {
    setViewMode(mode)
    setForceExpand(null)
    try { localStorage.setItem(VIEW_KEY, mode) } catch { /* ignore */ }
  }

  return (
    <div>
      {/* ── Chapter header ── */}
      <div className={cn(
        "mb-8 pl-4 border-l-[3px]",
        accentBorderMap[co.color] || "border-primary"
      )}>
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-widest mb-1 block",
          accentTextMap[co.color] || "text-primary"
        )}>
          {co.id.toUpperCase()}
        </span>
        <h1 className="text-[22px] font-bold text-foreground leading-tight">
          {co.title}
        </h1>
        <p className="text-[13px] text-muted-foreground mt-1 leading-relaxed">
          {co.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <span className={cn(
            "text-[11px] font-semibold px-2 py-0.5 rounded-[4px]",
            accentBgMap[co.color] || "bg-primary/10",
            accentTextMap[co.color] || "text-primary"
          )}>
            {total} questions
          </span>
          {notesCount > 0 && (
            <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/30 px-2 py-0.5 rounded-[4px]">
              💡 {notesCount} with quick notes
            </span>
          )}
          {done > 0 && (
            <span className={cn(
              "text-[11px] font-semibold px-2 py-0.5 rounded-[4px]",
              accentTextMap[co.color] || "text-primary",
              accentBgMap[co.color] || "bg-primary/10"
            )}>
              ✓ {done}/{total} reviewed
            </span>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1.5 rounded-full bg-border overflow-hidden w-full max-w-xs">
          <div
            className={cn("h-full rounded-full transition-all duration-500", progressBarMap[co.color] || "bg-primary")}
            style={{ width: `${pct}%` }}
          />
        </div>
        {done > 0 && (
          <p className="text-[11px] text-muted-foreground mt-1">{pct}% complete</p>
        )}
      </div>

      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        {/* View mode toggle */}
        <div className="flex items-center gap-0.5 p-0.5 rounded-lg border border-border bg-muted/40">
          {viewButtons.map(({ mode, icon, label }) => (
            <button
              key={mode}
              onClick={() => handleSetView(mode)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] text-[12px] font-medium transition-all cursor-pointer",
                viewMode === mode
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              title={label}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Expand / Collapse — only useful in card view */}
        {viewMode === "card" && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setForceExpand(prev => prev === true ? null : true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer border border-border"
            >
              <IconChevronsDown size={13} stroke={2} />
              Expand all
            </button>
            <button
              onClick={() => setForceExpand(prev => prev === false ? null : false)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer border border-border"
            >
              <IconChevronsUp size={13} stroke={2} />
              Collapse all
            </button>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      {viewMode === "card" && (
        <div className="space-y-3">
          {co.questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              accentColor={co.color}
              focused={focusedQuestionId === question.id}
              forceExpand={forceExpand}
            />
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <ListView co={co} focusedQuestionId={focusedQuestionId} />
      )}

      {viewMode === "study" && (
        <StudyView co={co} initialQuestionId={focusedQuestionId} />
      )}
    </div>
  )
}
