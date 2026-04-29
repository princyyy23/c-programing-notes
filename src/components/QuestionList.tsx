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

// const accentBorderMap: Record<string, string> = {
//   violet: "border-violet-500",
//   cyan: "border-cyan-500",
//   emerald: "border-emerald-500",
//   rose: "border-rose-500",
// }

const accentTextMap: Record<string, string> = {
  violet: "text-violet-600 dark:text-violet-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  rose: "text-rose-600 dark:text-rose-400",
}

// const accentBgMap: Record<string, string> = {
//   violet: "bg-violet-500/10 dark:bg-violet-500/15",
//   cyan: "bg-cyan-500/10 dark:bg-cyan-500/15",
//   emerald: "bg-emerald-500/10 dark:bg-emerald-500/15",
//   rose: "bg-rose-500/10 dark:bg-rose-500/15",
// }

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
      {/* ── Awesome Hero Header ── */}
      <div className="relative mb-10 overflow-hidden rounded-[20px] border border-border/50 bg-card/30 p-6 sm:p-8 md:p-10 shadow-sm backdrop-blur-sm">
        {/* Glowing background meshes */}
        <div className={cn(
          "absolute -top-24 -right-24 w-64 h-64 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 dark:opacity-20 pointer-events-none",
          progressBarMap[co.color] || "bg-primary"
        )} />
        <div className={cn(
          "absolute -bottom-24 -left-24 w-80 h-80 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-10 pointer-events-none",
          progressBarMap[co.color] || "bg-primary"
        )} />

        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className={cn(
                "text-[11px] font-bold tracking-[0.2em] uppercase",
                accentTextMap[co.color] || "text-primary"
              )}>
                MODULE {co.id.replace(/[^0-9]/g, '') || co.id.slice(-1).toUpperCase()}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest">
                Question Bank
              </span>
            </div>

            <h1 className="text-[28px] sm:text-[34px] font-extrabold tracking-tight text-foreground mb-4 leading-[1.15]">
              {co.title}
            </h1>

            <p className="text-[14px] sm:text-[15px] text-muted-foreground max-w-2xl leading-relaxed">
              {co.description}
            </p>

            <div className="flex items-center gap-3 mt-6 flex-wrap">
              <div className="flex items-center gap-1.5 bg-background/60 backdrop-blur-md border border-border/50 px-3.5 py-1.5 rounded-full text-[12px] font-medium text-foreground shadow-sm">
                <span className={cn("w-2 h-2 rounded-full", progressBarMap[co.color] || "bg-primary")} />
                {total} Questions
              </div>

              {notesCount > 0 && (
                <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full text-[12px] font-medium text-amber-600 dark:text-amber-400 shadow-sm">
                  💡 {notesCount} Quick Notes
                </div>
              )}
            </div>
          </div>

          {/* Right side - Progress Ring */}
          {total > 0 && (
            <div className="flex-shrink-0 flex items-center bg-background/50 backdrop-blur-md border border-border/50 rounded-[18px] p-5 shadow-sm">
              <div className="relative w-[72px] h-[72px] flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" className="stroke-muted/40" strokeWidth="8" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className={cn(
                      "transition-all duration-1000 ease-out",
                      accentTextMap[co.color]?.replace('text-', 'stroke-').replace('dark:text-', 'dark:stroke-') || "stroke-primary"
                    )}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * pct) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[16px] font-bold text-foreground leading-none">{pct}%</span>
                </div>
              </div>
              <div className="ml-5 flex flex-col pr-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1">Progress</span>
                <span className="text-[15px] font-bold text-foreground leading-none mb-0.5">{done} <span className="text-muted-foreground font-medium text-[13px]">/ {total}</span></span>
                <span className="text-[11px] text-muted-foreground font-medium">Reviewed</span>
              </div>
            </div>
          )}
        </div>
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
