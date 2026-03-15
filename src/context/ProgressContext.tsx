import { createContext, useContext, useState, useCallback } from "react"
import type { CourseOutcome } from "@/types"

const STORAGE_KEY = "cprog-reviewed-v1"

function loadReviewed(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return new Set(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set()
  }
}

function saveReviewed(set: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]))
}

interface ProgressContextType {
  reviewed: Set<string>
  toggle: (id: string) => void
  isReviewed: (id: string) => boolean
  getProgress: (co: CourseOutcome) => { done: number; total: number }
}

const ProgressContext = createContext<ProgressContextType | null>(null)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [reviewed, setReviewed] = useState<Set<string>>(loadReviewed)

  const toggle = useCallback((id: string) => {
    setReviewed(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      saveReviewed(next)
      return next
    })
  }, [])

  const isReviewed = useCallback((id: string) => reviewed.has(id), [reviewed])

  const getProgress = useCallback(
    (co: CourseOutcome) => ({
      done: co.questions.filter(q => reviewed.has(q.id)).length,
      total: co.questions.length,
    }),
    [reviewed]
  )

  return (
    <ProgressContext.Provider value={{ reviewed, toggle, isReviewed, getProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider")
  return ctx
}
