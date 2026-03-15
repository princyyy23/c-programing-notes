import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"
import { cn } from "@/lib/utils"

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    fontFamily: '"Segoe UI Variable", "Segoe UI", system-ui, sans-serif',
    fontSize: "13px",
    primaryColor: "#005fb8",
    primaryTextColor: "#ffffff",
    primaryBorderColor: "#0078d4",
    lineColor: "#5b5fc7",
    secondaryColor: "#60cdff",
    tertiaryColor: "#f5f5f5",
  },
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    padding: 12,
    nodeSpacing: 28,
    rankSpacing: 36,
  },
})

let diagramCounter = 0

interface DiagramBlockProps {
  content: string
  title?: string
  className?: string
}

export function DiagramBlock({ content, title, className }: DiagramBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    let cancelled = false
    const id = `mermaid-${++diagramCounter}-${Date.now()}`

    setRendered(false)
    setError(null)

    const renderDiagram = async () => {
      if (!containerRef.current) return
      try {
        const { svg } = await mermaid.render(id, content.trim())
        if (cancelled || !containerRef.current) return
        containerRef.current.innerHTML = svg
        const svgEl = containerRef.current.querySelector("svg")
        if (svgEl) {
          svgEl.style.maxWidth = "100%"
          svgEl.style.height = "auto"
        }
        setRendered(true)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof Error ? err.message : "Failed to render diagram")
      }
    }

    renderDiagram()

    return () => {
      cancelled = true
      // Remove any leftover mermaid sandbox element from the DOM
      document.getElementById(id)?.remove()
    }
  }, [content])

  return (
    <div className={cn("my-3 rounded-lg border border-border overflow-hidden", className)}>
      {title && (
        <div className="px-3 py-1.5 bg-muted/50 border-b border-border">
          <span className="text-[11px] font-medium text-muted-foreground">{title}</span>
        </div>
      )}
      <div className="p-4 bg-white dark:bg-[#1e1e1e] flex justify-center min-h-[80px] items-center">
        {error ? (
          <div className="text-[13px] text-destructive p-3 bg-destructive/10 rounded-[4px]">
            <p className="font-medium">Diagram Error</p>
            <p className="text-[11px] mt-1 opacity-75">{error}</p>
          </div>
        ) : !rendered ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-[13px]">Rendering diagram...</span>
          </div>
        ) : null}
        <div ref={containerRef} className={cn(!rendered && !error && "hidden")} />
      </div>
    </div>
  )
}
