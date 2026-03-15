import type { CourseOutcome } from "@/types"
import { Sidebar } from "./Sidebar"
import { QuestionList } from "@/components/QuestionList"
import { SearchBar } from "@/components/SearchBar"
import { SearchResultsPage } from "@/components/SearchResultsPage"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTheme } from "@/context/ThemeContext"
import { IconMoon, IconSunHigh } from "@tabler/icons-react"

interface LayoutProps {
  courseOutcomes: CourseOutcome[]
  activeCO: string
  focusedQuestionId: string | null
  searchQuery: string | null
  onSelectCO: (id: string) => void
  onNavigate: (coId: string, questionId: string) => void
  onShowSearch: (query: string) => void
  onCloseSearch: () => void
}

export function Layout({
  courseOutcomes,
  activeCO,
  focusedQuestionId,
  searchQuery,
  onSelectCO,
  onNavigate,
  onShowSearch,
  onCloseSearch,
}: LayoutProps) {
  const currentCO = courseOutcomes.find(co => co.id === activeCO)
  const { isDark, toggle } = useTheme()

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar courseOutcomes={courseOutcomes} activeCO={activeCO} onSelectCO={onSelectCO} />

      {/* Main content column */}
      <div className="flex-1 min-w-0 flex flex-col bg-card/60 lg:bg-card/50">

        {/* ── Top bar — WinUI 3 command bar ── */}
        <div className="flex-shrink-0 h-12 border-b border-border bg-card/80 flex items-center gap-3 px-4 sticky top-0 z-30 backdrop-blur-sm">
          <SearchBar
            courseOutcomes={courseOutcomes}
            onNavigate={onNavigate}
            onShowAll={onShowSearch}
          />
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="flex-shrink-0 p-1.5 rounded-[4px] text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark
              ? <IconSunHigh size={16} stroke={1.6} className="text-amber-400" />
              : <IconMoon size={16} stroke={1.6} className="text-indigo-500" />
            }
          </button>
        </div>

        {/* ── Content ── */}
        {searchQuery ? (
          <SearchResultsPage
            query={searchQuery}
            courseOutcomes={courseOutcomes}
            onNavigate={onNavigate}
            onBack={onCloseSearch}
          />
        ) : (
          <ScrollArea className="flex-1 h-[calc(100vh-3rem)]">
            <div className="max-w-4xl mx-auto px-5 md:px-10 py-8 pt-6 pb-16">
              {currentCO ? (
                <QuestionList
                  co={currentCO}
                  focusedQuestionId={focusedQuestionId}
                />
              ) : (
                <div className="text-center py-20 text-muted-foreground">
                  <p className="text-[13px]">Select a course outcome from the sidebar</p>
                </div>
              )}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  )
}
