import { useState, useRef, useEffect, useCallback } from "react"
import { IconSearch, IconX, IconArrowRight } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import type { CourseOutcome } from "@/types"
import { searchQuestions, type SearchResult } from "@/utils/searchUtils"

const coColorBadge: Record<string, string> = {
  violet: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  emerald: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
}

const fieldLabel: Record<SearchResult["matchField"], string> = {
  title: "Question",
  notes: "Notes",
  content: "Answer",
}

interface SearchBarProps {
  courseOutcomes: CourseOutcome[]
  onNavigate: (coId: string, questionId: string) => void
  onShowAll: (query: string) => void
}

export function SearchBar({ courseOutcomes, onNavigate, onShowAll }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const PREVIEW_COUNT = 5

  const runSearch = useCallback(
    (q: string) => {
      if (!q.trim()) { setResults([]); setOpen(false); return }
      const found = searchQuestions(courseOutcomes, q)
      setResults(found)
      setOpen(true)
    },
    [courseOutcomes]
  )

  useEffect(() => {
    const timer = setTimeout(() => runSearch(query), 150)
    return () => clearTimeout(timer)
  }, [query, runSearch])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const handleSelect = (result: SearchResult) => {
    setOpen(false)
    setQuery("")
    onNavigate(result.coId, result.questionId)
  }

  const handleShowAll = () => {
    if (!query.trim()) return
    setOpen(false)
    onShowAll(query)
  }

  const preview = results.slice(0, PREVIEW_COUNT)
  const extra = results.length - PREVIEW_COUNT

  return (
    <div className="relative w-full max-w-xl">
      {/* Input */}
      <div className={cn(
        "flex items-center gap-2 h-8 px-3 rounded-[4px] border bg-card transition-all",
        open
          ? "border-ring ring-1 ring-ring/30"
          : "border-border hover:border-ring/50"
      )}>
        <IconSearch size={14} stroke={2} className="flex-shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => query && setOpen(true)}
          onKeyDown={e => {
            if (e.key === "Escape") { setOpen(false); setQuery(""); inputRef.current?.blur() }
            if (e.key === "Enter" && query) handleShowAll()
          }}
          placeholder="Search questions, answers, notes..."
          className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground outline-none min-w-0"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); setOpen(false) }}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <IconX size={13} stroke={2} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 z-50 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
          style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
        >
          {preview.map(result => (
            <button
              key={result.questionId}
              onClick={() => handleSelect(result)}
              className="w-full text-left px-3 py-2.5 hover:bg-accent transition-colors cursor-pointer border-b border-border/50 last:border-0 group"
            >
              <div className="flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={cn(
                      "text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px]",
                      coColorBadge[result.coColor] || "bg-primary/10 text-primary"
                    )}>
                      {result.coShortTitle}
                    </span>
                    <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-[3px]">
                      {fieldLabel[result.matchField]}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{result.source}</span>
                  </div>
                  <p className="text-[13px] font-medium text-foreground truncate">{result.questionTitle}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{result.matchSnippet}</p>
                </div>
                <IconArrowRight size={13} stroke={2} className="flex-shrink-0 text-muted-foreground/40 group-hover:text-muted-foreground mt-1 transition-colors" />
              </div>
            </button>
          ))}

          {extra > 0 && (
            <button
              onClick={handleShowAll}
              className="w-full text-left px-3 py-2 bg-muted/30 hover:bg-muted/60 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <IconSearch size={12} stroke={2} className="text-muted-foreground" />
              <span className="text-[12px] text-muted-foreground">
                View all <span className="font-semibold text-foreground">{results.length}</span> results for "{query}"
              </span>
              <IconArrowRight size={12} stroke={2} className="ml-auto text-muted-foreground" />
            </button>
          )}

          {results.length > 0 && extra <= 0 && (
            <div className="px-3 py-1.5 bg-muted/20 border-t border-border/50">
              <span className="text-[11px] text-muted-foreground">{results.length} result{results.length !== 1 ? "s" : ""} found</span>
            </div>
          )}
        </div>
      )}

      {open && query && results.length === 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 z-50 bg-card border border-border rounded-lg shadow-lg px-3 py-4 text-center"
        >
          <IconSearch size={20} stroke={1.5} className="mx-auto text-muted-foreground/40 mb-1" />
          <p className="text-[13px] text-muted-foreground">No results for "{query}"</p>
          <p className="text-[11px] text-muted-foreground/60 mt-0.5">Try different keywords</p>
        </div>
      )}
    </div>
  )
}
