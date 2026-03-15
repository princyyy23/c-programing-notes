import { cn } from "@/lib/utils"
import { CodeBlock } from "./CodeBlock"

interface TextBlockProps {
  content: string
  className?: string
}

export function TextBlock({ content, className }: TextBlockProps) {
  return (
    <div className={cn("max-w-none text-foreground", className)}>
      <MarkdownRenderer content={content} />
    </div>
  )
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Fenced code blocks: ```lang ... ```
    if (line.startsWith("```")) {
      const language = line.slice(3).trim() || "text"
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i])
        i++
      }
      if (i < lines.length && lines[i].startsWith("```")) {
        i++
      }
      elements.push(
        <CodeBlock
          key={key++}
          code={codeLines.join("\n")}
          language={language}
          className="my-2"
        />
      )
      continue
    }

    // Table detection
    if (line.includes("|") && i + 1 < lines.length && lines[i + 1]?.match(/^\|[\s-:|]+\|$/)) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].includes("|")) {
        tableLines.push(lines[i])
        i++
      }
      elements.push(<MarkdownTable key={key++} lines={tableLines} />)
      continue
    }

    // Headers
    if (line.startsWith("### ")) {
      elements.push(<h4 key={key++} className="text-[13px] font-semibold text-foreground mt-3 mb-1">{parseInline(line.slice(4))}</h4>)
      i++
      continue
    }
    if (line.startsWith("## ")) {
      elements.push(<h3 key={key++} className="text-[14px] font-semibold text-foreground mt-3 mb-1">{parseInline(line.slice(3))}</h3>)
      i++
      continue
    }

    // Unordered lists
    if (line.match(/^[-*]\s/)) {
      const items: string[] = []
      while (i < lines.length && lines[i].match(/^[-*]\s/)) {
        items.push(lines[i].replace(/^[-*]\s/, ""))
        i++
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-0.5 my-2 text-[13px] text-foreground/90">
          {items.map((item, j) => <li key={j}>{parseInline(item)}</li>)}
        </ul>
      )
      continue
    }

    // Ordered lists
    if (line.match(/^\d+\.\s/)) {
      const items: string[] = []
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        items.push(lines[i].replace(/^\d+\.\s/, ""))
        i++
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-0.5 my-2 text-[13px] text-foreground/90">
          {items.map((item, j) => <li key={j}>{parseInline(item)}</li>)}
        </ol>
      )
      continue
    }

    // Empty line
    if (line.trim() === "") {
      i++
      continue
    }

    // Paragraph
    elements.push(<p key={key++} className="text-[13px] leading-relaxed text-foreground/90 my-1.5">{parseInline(line)}</p>)
    i++
  }

  return <>{elements}</>
}

function parseInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = []
  // Match **bold**, `code`, *italic*
  const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)|(\*(.+?)\*)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let k = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1]) {
      parts.push(<strong key={k++} className="font-semibold text-foreground">{match[2]}</strong>)
    } else if (match[3]) {
      parts.push(<code key={k++} className="px-1 py-0.5 rounded-[3px] bg-muted text-primary text-[12px] font-mono">{match[4]}</code>)
    } else if (match[5]) {
      parts.push(<em key={k++}>{match[6]}</em>)
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length === 1 ? parts[0] : <>{parts}</>
}

function MarkdownTable({ lines }: { lines: string[] }) {
  const parseRow = (line: string) =>
    line.split("|").filter((_, i, arr) => i > 0 && i < arr.length - 1).map(cell => cell.trim())

  const headers = parseRow(lines[0])
  const rows = lines.slice(2).map(parseRow)

  return (
    <div className="my-3 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-muted/50">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-1.5 text-left font-semibold text-foreground border-b border-border">{parseInline(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-1.5 text-foreground/90">{parseInline(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
