import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  className?: string
}

// ─── Turbo C IDE color theme ────────────────────────────────────────────────
// Background : #0000AA (CGA blue)
// Keywords   : #55FFFF (bright cyan)
// Strings    : #FFFF55 (bright yellow)
// Comments   : #55FF55 (bright green)
// Preprocessor: #FF5555 (bright red)
// Default text: #FFFFFF (white)
// Punctuation : #AAAAAA (light gray)
const turboCTheme: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': {
    color: "#FFFFFF",
    background: "none",
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: "13px",
    lineHeight: "1.55",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#FFFFFF",
    background: "#0000AA",
    overflow: "auto",
  },
  // Comments → bright green
  comment:  { color: "#55FF55" },
  prolog:   { color: "#55FF55" },
  doctype:  { color: "#55FF55" },
  cdata:    { color: "#55FF55" },
  // Punctuation → gray
  punctuation: { color: "#AAAAAA" },
  // Keywords → bright cyan
  keyword:    { color: "#55FFFF" },
  builtin:    { color: "#55FFFF" },
  "class-name": { color: "#55FFFF" },
  // Preprocessor directives → bright red
  "directive-hash": { color: "#FF5555" },
  directive:  { color: "#FF5555" },
  macro:      { color: "#55FFFF" },
  // Strings / chars → bright yellow
  string:  { color: "#FFFF55" },
  char:    { color: "#FFFF55" },
  regex:   { color: "#FFFF55" },
  "attr-value": { color: "#FFFF55" },
  // Numbers → white
  number:   { color: "#FFFFFF" },
  boolean:  { color: "#FFFFFF" },
  constant: { color: "#FFFFFF" },
  // Functions, operators, variables → white
  function:  { color: "#FFFFFF" },
  operator:  { color: "#FFFFFF" },
  variable:  { color: "#FFFFFF" },
  property:  { color: "#FFFFFF" },
  symbol:    { color: "#FFFF55" },
  // Misc
  important: { color: "#FF5555", fontWeight: "bold" },
  bold:      { fontWeight: "bold" },
  italic:    { fontStyle: "italic" },
  inserted:  { color: "#55FF55" },
  deleted:   { color: "#FF5555" },
  entity:    { color: "#FF5555", cursor: "help" },
  url:       { color: "#55FFFF" },
  namespace: { opacity: "0.7" },
}

// Non-focusable <pre> — prevents auto-scroll to code on card expand
function NonFocusablePre({ children, style, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre {...props} tabIndex={-1} style={{ ...style, outline: "none" }}>
      {children}
    </pre>
  )
}

export function CodeBlock({ code, language, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Derive display filename from title or language
  const fileExt = language === "c" ? "C" : language.toUpperCase()
  const displayName = title
    ? title.toUpperCase()
    : `NONAME00.${fileExt}`

  return (
    <div
      className={cn("my-3 overflow-hidden", className)}
      style={{
        border: "2px solid #AAAAAA",
        fontFamily: '"Courier New", Courier, monospace',
      }}
    >
      {/* ── Title bar ─────────────────────────────────────── */}
      <div
        style={{
          background: "#AAAAAA",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 8px",
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: "12px",
          borderBottom: "2px solid #AAAAAA",
          userSelect: "none",
        }}
      >
        {/* Left: language badge + filename */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              background: "#0000AA",
              color: "#FFFFFF",
              padding: "0 6px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              fontSize: "11px",
            }}
          >
            {fileExt}
          </span>
          <span style={{ fontWeight: "bold", letterSpacing: "0.3px" }}>
            {displayName}
          </span>
        </div>

        {/* Right: copy button styled as Turbo C button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          style={{
            background: copied ? "#0000AA" : "#555555",
            color: copied ? "#55FF55" : "#FFFFFF",
            border: "1px solid #000000",
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: "11px",
            padding: "0 6px",
            cursor: "pointer",
            letterSpacing: "0.2px",
            outline: "none",
            boxShadow: copied ? "none" : "1px 1px 0 #000",
          }}
        >
          {copied ? "✓ Copied" : "[ Copy ]"}
        </button>
      </div>

      {/* ── Code area ─────────────────────────────────────── */}
      <SyntaxHighlighter
        language={language}
        style={turboCTheme}
        PreTag={NonFocusablePre}
        codeTagProps={{ style: { backgroundColor: "transparent" } }}
        customStyle={{
          margin: 0,
          padding: "10px 14px",
          fontSize: "13px",
          lineHeight: "1.55",
          background: "#0000AA",
          borderRadius: 0,
          fontFamily: '"Courier New", Courier, monospace',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>

      {/* ── Status bar ────────────────────────────────────── */}
      <div
        style={{
          background: "#AAAAAA",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          gap: "2px",
          padding: "2px 0",
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: "11px",
          borderTop: "2px solid #AAAAAA",
          userSelect: "none",
          flexWrap: "wrap",
        }}
      >
        {[
          ["F1", "Help"],
          ["F2", "Save"],
          ["F5", "Zoom"],
          ["F9", "Make"],
          ["F10", "Menu"],
        ].map(([key, label]) => (
          <span key={key} style={{ display: "inline-flex", gap: "0" }}>
            <span
              style={{
                background: "#000000",
                color: "#AAAAAA",
                padding: "0 4px",
                fontWeight: "bold",
                letterSpacing: "0.2px",
              }}
            >
              {key}
            </span>
            <span style={{ padding: "0 8px 0 2px" }}>{label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
