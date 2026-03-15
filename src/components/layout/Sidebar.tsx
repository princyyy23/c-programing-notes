import type { CourseOutcome } from "@/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  IconBook2,
  IconCodeAsterisk,
  IconLayersIntersect,
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftCollapse,
  IconMoon,
  IconRefresh,
  IconStar,
  IconSunHigh,
} from "@tabler/icons-react"
import { useState } from "react"
import { useTheme } from "@/context/ThemeContext"

const iconMap: Record<string, React.ReactNode> = {
  GitBranch: <IconCodeAsterisk size={16} stroke={1.6} />,
  Repeat: <IconRefresh size={16} stroke={1.6} />,
  Layers: <IconLayersIntersect size={16} stroke={1.6} />,
  Star: <IconStar size={16} stroke={1.6} />,
}

const sidebarColorMap: Record<string, string> = {
  violet: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
  cyan: "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300",
  emerald: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
  rose: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
}

const indicatorColorMap: Record<string, string> = {
  violet: "bg-violet-500",
  cyan: "bg-cyan-500",
  emerald: "bg-emerald-500",
  rose: "bg-rose-500",
}

const countColorMap: Record<string, string> = {
  violet: "text-violet-600/70 dark:text-violet-400/70",
  cyan: "text-cyan-600/70 dark:text-cyan-400/70",
  emerald: "text-emerald-600/70 dark:text-emerald-400/70",
  rose: "text-rose-600/70 dark:text-rose-400/70",
}

interface SidebarProps {
  courseOutcomes: CourseOutcome[]
  activeCO: string
  onSelectCO: (id: string) => void
}

function QuestionBankTab({
  co,
  isActive,
  onClick,
}: {
  co: CourseOutcome
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-9 rounded-[6px] text-[12px] font-semibold border transition-colors cursor-pointer",
        isActive
          ? sidebarColorMap[co.color] || "bg-primary/10 text-primary border-primary/30"
          : "bg-card/60 text-muted-foreground border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-foreground"
      )}
    >
      {co.shortTitle}
    </button>
  )
}

function NavItem({
  co,
  isActive,
  onClick,
}: {
  co: CourseOutcome
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 h-10 rounded-[6px] px-2.5 text-left transition-colors cursor-pointer relative",
        isActive
          ? sidebarColorMap[co.color] || "bg-primary/10 text-primary"
          : "text-sidebar-foreground hover:bg-sidebar-accent active:bg-sidebar-accent/80"
      )}
    >
      {/* WinUI 3 selected indicator pill */}
      {isActive && (
        <span className={cn(
          "absolute left-0.5 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full",
          indicatorColorMap[co.color] || "bg-primary"
        )} />
      )}
      <span className={cn("flex-shrink-0 ml-1", !isActive && "opacity-50")}>
        {iconMap[co.icon] || <IconBook2 size={16} stroke={1.6} />}
      </span>
      <span className="flex-1 text-[13px] font-medium truncate">{co.shortTitle}</span>
      <span className={cn(
        "flex-shrink-0 text-[11px] font-semibold tabular-nums",
        isActive ? countColorMap[co.color] : "text-muted-foreground/50"
      )}>
        {co.questions.length}
      </span>
    </button>
  )
}

export function Sidebar({ courseOutcomes, activeCO, onSelectCO }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  const total = courseOutcomes.reduce((sum, co) => sum + co.questions.length, 0)
  const questionBankCOs = courseOutcomes.filter(co => co.id.startsWith("qb-"))
  const examCOs = courseOutcomes.filter(co => co.id !== "sir" && !co.id.startsWith("qb-"))
  const refCOs = courseOutcomes.filter(co => co.id === "sir")

  const navContent = (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="px-4 h-14 flex items-center gap-3 flex-shrink-0">
        <div className="w-7 h-7 rounded-[4px] bg-primary flex items-center justify-center flex-shrink-0">
          <IconBook2 size={15} stroke={1.8} className="text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-[13.5px] font-semibold text-foreground leading-none">CP Solutions</h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">BSC205</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-1">

        <p className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60 select-none">
          Exam Questions
        </p>
        <div className="space-y-0.5 mb-4">
          {examCOs.map(co => (
            <NavItem
              key={co.id}
              co={co}
              isActive={activeCO === co.id}
              onClick={() => { onSelectCO(co.id); setMobileOpen(false) }}
            />
          ))}
        </div>

        {questionBankCOs.length > 0 && (
          <>
            <div className="border-t border-sidebar-border/60 mb-3" />
            <p className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60 select-none">
              Question Bank
            </p>
            <div className="grid grid-cols-3 gap-1.5 mb-4 px-0.5">
              {questionBankCOs.map(co => (
                <QuestionBankTab
                  key={co.id}
                  co={co}
                  isActive={activeCO === co.id}
                  onClick={() => { onSelectCO(co.id); setMobileOpen(false) }}
                />
              ))}
            </div>
          </>
        )}

        {refCOs.length > 0 && (
          <>
            <div className="border-t border-sidebar-border/60 mb-3" />
            <p className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60 select-none">
              Reference
            </p>
            <div className="space-y-0.5">
              {refCOs.map(co => (
                <NavItem
                  key={co.id}
                  co={co}
                  isActive={activeCO === co.id}
                  onClick={() => { onSelectCO(co.id); setMobileOpen(false) }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 px-4 h-12 border-t border-sidebar-border flex items-center justify-between">
        <span className="text-[12px] text-muted-foreground">
          <span className="font-semibold text-foreground">{total}</span> questions
        </span>
        <button
          onClick={toggle}
          className="p-1.5 rounded-[4px] text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {isDark
            ? <IconSunHigh size={16} stroke={1.6} className="text-amber-400" />
            : <IconMoon size={16} stroke={1.6} className="text-indigo-500" />
          }
        </button>
      </div>

    </div>
  )

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[4px] bg-primary flex items-center justify-center">
              <IconBook2 size={14} stroke={1.6} className="text-primary-foreground" />
            </div>
            <span className="text-[13px] font-semibold text-foreground">CP Solutions</span>
          </div>
          <div className="flex items-center gap-0.5">
            <button
              onClick={toggle}
              className="p-1.5 rounded-[4px] text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark
                ? <IconSunHigh size={16} stroke={1.6} className="text-amber-400" />
                : <IconMoon size={16} stroke={1.6} className="text-indigo-500" />
              }
            </button>
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen
                ? <IconLayoutSidebarLeftCollapse size={18} stroke={1.6} />
                : <IconLayoutSidebarLeftExpand size={18} stroke={1.6} />
              }
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/30" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile sidebar */}
      <aside className={cn(
        "lg:hidden fixed top-0 left-0 bottom-0 z-40 w-72 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200",
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {navContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-[260px] lg:flex-shrink-0 bg-sidebar border-r border-sidebar-border lg:h-screen lg:sticky lg:top-0">
        {navContent}
      </aside>
    </>
  )
}
