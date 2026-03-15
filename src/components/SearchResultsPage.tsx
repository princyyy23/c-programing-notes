import { useMemo, useState } from "react"
import { IconSearch, IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import type { CourseOutcome } from "@/types"
import { searchQuestions, type SearchResult } from "@/utils/searchUtils"
import { ScrollArea } from "@/components/ui/scroll-area"

const coColorBadge: Record<string, string> = {
  violet: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  emerald: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
}

const fieldLabel: Record<SearchResult["matchField"], string> = {
  title: "Question title",
  notes: "Quick notes",
  content: "Answer content",
}

const fieldColor: Record<SearchResult["matchField"], string> = {
  title: "bg-primary/10 text-primary",
  notes: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  content: "bg-muted text-muted-foreground",
}

interface SearchResultsPageProps {
  query: string
  courseOutcomes: CourseOutcome[]
  onNavigate: (coId: string, questionId: string) => void
  onBack: () => void
}

export function SearchResultsPage({ query, courseOutcomes, onNavigate, onBack }: SearchResultsPageProps) {
  const [activeFilter, setActiveFilter] = useState<SearchResult["matchField"] | "all">("all")

  const allResults = useMemo(
    () => searchQuestions(courseOutcomes, query),
    [courseOutcomes, query]
  )

  const filtered = activeFilter === "all"
    ? allResults
    : allResults.filter(r => r.matchField === activeFilter)

  const counts = useMemo(() => ({
    all: allResults.length,
    title: allResults.filter(r => r.matchField === "title").length,
    notes: allResults.filter(r => r.matchField === "notes").length,
    content: allResults.filter(r => r.matchField === "content").length,
  }), [allResults])

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="flex-shrink-0 border-b border-border bg-card px-5 py-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex-shrink-0 flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <IconArrowLeft size={15} stroke={2} />
          <span>Back</span>
        </button>
        <div className="flex-1 flex items-center gap-2 h-8 px-3 rounded-[4px] border border-border bg-background">
          <IconSearch size={14} stroke={2} className="text-muted-foreground" />
          <span className="text-[13px] text-foreground flex-1">{query}</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="max-w-4xl mx-auto px-5 py-6">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-[22px] font-semibold text-foreground">
              Search Results
            </h1>
            <p className="text-[13px] text-muted-foreground mt-0.5">
              {allResults.length} result{allResults.length !== 1 ? "s" : ""} for{" "}
              <span className="font-medium text-foreground">"{query}"</span>
            </p>
          </div>

          {/* Filter tabs */}
          {allResults.length > 0 && (
            <div className="flex items-center gap-1 mb-5 flex-wrap">
              {(["all", "title", "notes", "content"] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    "px-3 py-1 rounded-[4px] text-[12px] font-medium transition-colors cursor-pointer border",
                    activeFilter === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:bg-accent"
                  )}
                >
                  {f === "all" ? "All" : fieldLabel[f]}
                  <span className={cn(
                    "ml-1.5 text-[10px]",
                    activeFilter === f ? "opacity-70" : "opacity-50"
                  )}>
                    {counts[f]}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Results list */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <IconX size={32} stroke={1.5} className="mx-auto text-muted-foreground/30 mb-3" />
              <p className="text-[14px] text-muted-foreground">No results for this filter</p>
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map(result => (
                <button
                  key={result.questionId}
                  onClick={() => onNavigate(result.coId, result.questionId)}
                  className="w-full text-left rounded-lg border border-border bg-card hover:border-ring/50 hover:bg-accent/30 transition-all cursor-pointer group p-4"
                  style={{ boxShadow: "0 0 0 0.5px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.05)" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                        <span className={cn(
                          "text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px]",
                          coColorBadge[result.coColor] || "bg-primary/10 text-primary"
                        )}>
                          {result.coShortTitle}
                        </span>
                        <span className={cn(
                          "text-[10px] font-medium px-1.5 py-0.5 rounded-[3px]",
                          fieldColor[result.matchField]
                        )}>
                          {fieldLabel[result.matchField]}
                        </span>
                        <span className="text-[11px] text-muted-foreground">{result.source}</span>
                      </div>
                      <p className="text-[14px] font-semibold text-foreground leading-snug">
                        {result.questionTitle}
                      </p>
                      <p className="text-[12px] text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                        {result.matchSnippet}
                      </p>
                    </div>
                    <IconArrowRight
                      size={16}
                      stroke={2}
                      className="flex-shrink-0 text-muted-foreground/30 group-hover:text-muted-foreground mt-1 transition-colors"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
