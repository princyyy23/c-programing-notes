import type { CourseOutcome } from "@/types"
import { Sidebar } from "./Sidebar"
import { QuestionList } from "@/components/QuestionList"
import { SearchBar } from "@/components/SearchBar"
import { SearchResultsPage } from "@/components/SearchResultsPage"
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
    <div className="flex h-[100dvh] w-full overflow-hidden bg-background">
      <Sidebar courseOutcomes={courseOutcomes} activeCO={activeCO} onSelectCO={onSelectCO} />

      {/* Main content column */}
      <div className="flex-1 min-w-0 flex flex-col bg-card/60 lg:bg-card/50 pt-[52px] lg:pt-0 relative">

        {/* ── Top bar — WinUI 3 command bar ── */}
        <div className="flex-shrink-0 h-12 border-b border-border bg-card/80 flex items-center gap-3 px-4 z-30 backdrop-blur-sm lg:relative fixed top-[52px] lg:top-0 left-0 right-0 lg:w-auto w-full">
          <SearchBar
            courseOutcomes={courseOutcomes}
            onNavigate={onNavigate}
            onShowAll={onShowSearch}
          />
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="hidden lg:block flex-shrink-0 p-1.5 rounded-[4px] text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark
              ? <IconSunHigh size={16} stroke={1.6} className="text-amber-400" />
              : <IconMoon size={16} stroke={1.6} className="text-indigo-500" />
            }
          </button>
        </div>

        {/* ── Content ── */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {searchQuery ? (
            <SearchResultsPage
              query={searchQuery}
              courseOutcomes={courseOutcomes}
              onNavigate={onNavigate}
              onBack={onCloseSearch}
            />
          ) : (
            <div className="max-w-4xl mx-auto px-3 sm:px-5 md:px-10 py-8 pt-6 pb-24">
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
          )}
        </div>
      </div>
    </div>
  )
}
