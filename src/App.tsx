import { useState, useCallback, useEffect } from "react"
import { useNavigate, useLocation, useSearchParams } from "react-router-dom"
import { ThemeProvider } from "@/context/ThemeContext"
import { Layout } from "@/components/layout/Layout"
import { courseOutcomes } from "@/data"

const DEFAULT_CO = courseOutcomes[0]?.id ?? "co1"

function AppInner() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  // Parse path: /co/:coId or /co/:coId/:questionId or /search
  const parts = location.pathname.split("/").filter(Boolean)
  const isCO = parts[0] === "co"
  const isSearch = parts[0] === "search"
  const coId = isCO ? parts[1] : undefined
  const questionId = isCO && parts.length >= 3 ? parts[2] : undefined
  const searchQuery = isSearch ? searchParams.get("q") : null

  // Track last active CO so "Close search" returns to correct CO
  const [lastActiveCO, setLastActiveCO] = useState(coId ?? DEFAULT_CO)
  const activeCO = coId ?? lastActiveCO

  useEffect(() => {
    if (coId) setLastActiveCO(coId)
  }, [coId])

  // Redirect bare / to default CO
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      navigate(`/co/${DEFAULT_CO}`, { replace: true })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleNavigate = useCallback((co: string, qId: string) => {
    setLastActiveCO(co)
    navigate(`/co/${co}/${qId}`)
  }, [navigate])

  const handleSelectCO = useCallback((id: string) => {
    setLastActiveCO(id)
    navigate(`/co/${id}`)
  }, [navigate])

  const handleShowSearch = useCallback((query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }, [navigate])

  const handleCloseSearch = useCallback(() => {
    navigate(`/co/${lastActiveCO}`)
  }, [navigate, lastActiveCO])

  return (
    <Layout
      courseOutcomes={courseOutcomes}
      activeCO={activeCO}
      focusedQuestionId={questionId ?? null}
      searchQuery={searchQuery}
      onSelectCO={handleSelectCO}
      onNavigate={handleNavigate}
      onShowSearch={handleShowSearch}
      onCloseSearch={handleCloseSearch}
    />
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

export default App
