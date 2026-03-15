import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism"
import { IconCheck, IconCopy } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  className?: string
}

// Non-focusable <pre> — prevents the browser from auto-selecting code text
// when the card expands and focus lands on the newly revealed element.
function NonFocusablePre({ children, style, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      {...props}
      tabIndex={-1}
      style={{ ...style, outline: "none" }}
    >
      {children}
    </pre>
  )
}

export function CodeBlock({ code, language, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { isDark } = useTheme()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("rounded-lg overflow-hidden border border-border my-3", className)}>
      {/* Toolbar — WinUI 3 command bar style */}
      <div
        className={cn(
          "flex items-center justify-between px-3 py-1.5 border-b",
          isDark ? "border-white/8" : "border-black/6"
        )}
        style={{ background: isDark ? "#252525" : "#f5f5f5" }}
      >
        <div className="flex items-center gap-2">
          {title && (
            <span className={cn("text-[11px] font-medium", isDark ? "text-zinc-400" : "text-zinc-500")}>
              {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <span className={cn("text-[10px] uppercase font-medium tracking-wide", isDark ? "text-zinc-500" : "text-zinc-400")}>
            {language}
          </span>
          <button
            onClick={handleCopy}
            className={cn(
              "p-1 rounded-[3px] transition-colors cursor-pointer",
              isDark
                ? "text-zinc-400 hover:text-zinc-200 hover:bg-white/8"
                : "text-zinc-400 hover:text-zinc-600 hover:bg-black/6"
            )}
            aria-label="Copy code"
          >
            {copied
              ? <IconCheck size={13} stroke={2} className="text-green-500" />
              : <IconCopy size={13} stroke={2} />
            }
          </button>
        </div>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        PreTag={NonFocusablePre}
        codeTagProps={{ style: { backgroundColor: "transparent" } }}
        customStyle={{
          margin: 0,
          padding: "0.875rem 1rem",
          fontSize: "12.5px",
          lineHeight: "1.65",
          background: isDark ? "#1e1e1e" : "#ffffff",
          borderRadius: 0,
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
