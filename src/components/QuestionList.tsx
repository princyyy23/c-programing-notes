import type { CourseOutcome } from "@/types"
import { QuestionCard } from "./QuestionCard"
import { cn } from "@/lib/utils"

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

export function QuestionList({ co, focusedQuestionId }: QuestionListProps) {
  const notesCount = co.questions.filter(q => q.notes).length

  return (
    <div>
      {/* Chapter header */}
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
            {co.questions.length} questions
          </span>
          {notesCount > 0 && (
            <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-900/30 px-2 py-0.5 rounded-[4px]">
              💡 {notesCount} with quick notes
            </span>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {co.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            accentColor={co.color}
            focused={focusedQuestionId === question.id}
          />
        ))}
      </div>
    </div>
  )
}
