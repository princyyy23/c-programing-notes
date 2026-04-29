import { useState, useRef, useEffect, useCallback } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  className?: string
}

// ─── Turbo C IDE color theme ────────────────────────────────────────────────
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
  comment:  { color: "#55FF55" },
  prolog:   { color: "#55FF55" },
  doctype:  { color: "#55FF55" },
  cdata:    { color: "#55FF55" },
  punctuation: { color: "#AAAAAA" },
  keyword:    { color: "#55FFFF" },
  builtin:    { color: "#55FFFF" },
  "class-name": { color: "#55FFFF" },
  "directive-hash": { color: "#FF5555" },
  directive:  { color: "#FF5555" },
  macro:      { color: "#55FFFF" },
  string:  { color: "#FFFF55" },
  char:    { color: "#FFFF55" },
  regex:   { color: "#FFFF55" },
  "attr-value": { color: "#FFFF55" },
  number:   { color: "#FFFFFF" },
  boolean:  { color: "#FFFFFF" },
  constant: { color: "#FFFFFF" },
  function:  { color: "#FFFFFF" },
  operator:  { color: "#FFFFFF" },
  variable:  { color: "#FFFFFF" },
  property:  { color: "#FFFFFF" },
  symbol:    { color: "#FFFF55" },
  important: { color: "#FF5555", fontWeight: "bold" },
  bold:      { fontWeight: "bold" },
  italic:    { fontStyle: "italic" },
  inserted:  { color: "#55FF55" },
  deleted:   { color: "#FF5555" },
  entity:    { color: "#FF5555", cursor: "help" },
  url:       { color: "#55FFFF" },
  namespace: { opacity: "0.7" },
}

// ─── Piston API ─────────────────────────────────────────────────────────────
// ─── Wandbox API (free, no API key) ─────────────────────────────────────────
const WANDBOX_API = "https://wandbox.org/api/compile.json"

interface WandboxResponse {
  program_message?: string
  program_output?: string
  program_error?: string
  compiler_message?: string
  compiler_error?: string
  status?: string
}

async function executeCode(source: string, stdin: string): Promise<{ output: string; error: string; exitCode: number }> {
  // Fix: Template literals in TS turn \n inside C strings into real newlines.
  // We must restore them to \n escape sequences before sending to the compiler.
  // Match double-quoted C strings and replace actual newlines inside them with \n
  let cleanedSource = source.replace(/"[^"]*"/g, (match) => {
    return match.replace(/\n/g, "\\n")
  })

  // Strip Turbo C specific headers and functions that won't work on modern compilers
  cleanedSource = cleanedSource
    .replace(/#include\s*<conio\.h>/g, "// conio.h removed for online compiler")
    .replace(/\bclrscr\s*\(\s*\)\s*;/g, "// clrscr() removed")
    .replace(/\bgetch\s*\(\s*\)\s*;/g, "// getch() removed")
    .replace(/\bvoid\s+main\s*\(/g, "int main(")

  // Replace gets(var) with fgets(var, sizeof(var), stdin) — gets is removed in C11
  cleanedSource = cleanedSource.replace(
    /\bgets\s*\(\s*(\w+)\s*\)/g,
    "fgets($1, sizeof($1), stdin)"
  )

  // If fgets is used, we need to strip the trailing newline — add a helper
  if (cleanedSource.includes("fgets(")) {
    // Add string.h if not already included (needed for strlen in newline stripping)
    if (!cleanedSource.includes("<string.h>")) {
      cleanedSource = cleanedSource.replace(
        /(#include\s*<stdio\.h>)/,
        "$1\n#include<string.h>"
      )
    }
    // Add a newline-stripping macro after the last #include
    const lastInclude = cleanedSource.lastIndexOf("#include")
    const lineEnd = cleanedSource.indexOf("\n", lastInclude)
    if (lineEnd !== -1) {
      cleanedSource =
        cleanedSource.substring(0, lineEnd + 1) +
        "#define STRIP_NL(s) { size_t _l = strlen(s); if(_l > 0 && s[_l-1]=='\\n') s[_l-1]='\\0'; }\n" +
        cleanedSource.substring(lineEnd + 1)
    }
    // Add STRIP_NL call after each fgets
    cleanedSource = cleanedSource.replace(
      /fgets\((\w+),\s*sizeof\(\1\),\s*stdin\)\s*;/g,
      "fgets($1, sizeof($1), stdin); STRIP_NL($1);"
    )
  }

  // Add strrev polyfill if code uses strrev (Turbo C specific, not in standard C)
  if (/\bstrrev\s*\(/.test(cleanedSource)) {
    // Ensure string.h is included
    if (!cleanedSource.includes("<string.h>")) {
      cleanedSource = cleanedSource.replace(
        /(#include\s*<stdio\.h>)/,
        "$1\n#include<string.h>"
      )
    }
    // Insert polyfill after the last #include
    const lastInc = cleanedSource.lastIndexOf("#include")
    const lineEnd2 = cleanedSource.indexOf("\n", lastInc)
    if (lineEnd2 !== -1) {
      const polyfill = `
char* strrev(char* s) {
    size_t len = strlen(s);
    size_t i;
    for (i = 0; i < len / 2; i++) {
        char t = s[i]; s[i] = s[len-1-i]; s[len-1-i] = t;
    }
    return s;
}
`
      cleanedSource =
        cleanedSource.substring(0, lineEnd2 + 1) +
        polyfill +
        cleanedSource.substring(lineEnd2 + 1)
    }
  }
  
  // If we converted void main to int main, add return 0
  if (cleanedSource.includes("int main(")) {
    const lastBrace = cleanedSource.lastIndexOf("}")
    if (lastBrace !== -1) {
      const beforeBrace = cleanedSource.substring(0, lastBrace)
      if (!beforeBrace.includes("return 0")) {
        cleanedSource = beforeBrace + "\n    return 0;\n}"
      }
    }
  }

  const response = await fetch(WANDBOX_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      compiler: "gcc-head-c",
      code: cleanedSource,
      options: "warning",
      stdin: stdin,
      save: false,
    }),
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  const data: WandboxResponse = await response.json()

  // Check compile errors
  const compileError = data.compiler_error || ""
  const compileMsg = data.compiler_message || ""
  const programOutput = data.program_output || data.program_message || ""
  const programError = data.program_error || ""
  const exitCode = data.status === "0" ? 0 : 1

  // If there's a compile error and no program output, it's a compilation failure
  if (compileError && !programOutput) {
    return {
      output: "",
      error: compileError || compileMsg,
      exitCode: 1,
    }
  }

  return {
    output: programOutput || "(No output)",
    error: programError || (compileMsg && exitCode !== 0 ? compileMsg : ""),
    exitCode,
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Detect if code has scanf/gets/fgets — needs stdin input */
function codeNeedsInput(code: string): boolean {
  return /\b(scanf|gets|fgets|getchar|getc)\s*\(/.test(code)
}

/** Count expected scanf calls (rough heuristic) */
function guessInputHint(code: string): string {
  const scanfMatches = code.match(/scanf\s*\(/g)
  const getsMatches = code.match(/\b(gets|fgets)\s*\(/g)
  const count = (scanfMatches?.length || 0) + (getsMatches?.length || 0)

  // Check for loops around scanf
  const loopScanf = /for\s*\([^)]*;\s*[^;]*(?:10|n)\s*;/.test(code) && scanfMatches
  if (loopScanf) {
    return "This program reads input in a loop.\nEnter each value on a new line."
  }
  if (count > 1) {
    return `This program expects ~${count} input(s).\nEnter each value on a new line.`
  }
  if (count === 1) {
    return "Enter input value(s), one per line."
  }
  return "Enter input (if needed):"
}

// Non-focusable <pre> — prevents auto-scroll to code on card expand
function NonFocusablePre({ children, style, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre {...props} tabIndex={-1} style={{ ...style, outline: "none" }}>
      {children}
    </pre>
  )
}

// ─── Component ──────────────────────────────────────────────────────────────

type RunState = "idle" | "input" | "running" | "done" | "error"

// Check if user has already dismissed the editor notice
const EDITOR_NOTICE_KEY = "cprog-editor-notice-dismissed"
function isNoticeDismissed(): boolean {
  try { return localStorage.getItem(EDITOR_NOTICE_KEY) === "1" } catch { return false }
}
function dismissNotice(): void {
  try { localStorage.setItem(EDITOR_NOTICE_KEY, "1") } catch { /* ignore */ }
}

export function CodeBlock({ code, language, title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [runState, setRunState] = useState<RunState>("idle")
  const [stdin, setStdin] = useState("")
  const [output, setOutput] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [editedCode, setEditedCode] = useState(code)
  const [isEditing, setIsEditing] = useState(false)
  const [showNotice, setShowNotice] = useState(false)
  const outputRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const highlighterRef = useRef<HTMLDivElement>(null)

  const isC = language === "c"
  const needsInput = isC && codeNeedsInput(editedCode)
  const isModified = editedCode !== code

  // Auto-scroll to output when it appears
  useEffect(() => {
    if ((runState === "done" || runState === "error" || runState === "input") && outputRef.current) {
      outputRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }
  }, [runState])

  // Auto-focus input field
  useEffect(() => {
    if (runState === "input" && inputRef.current) {
      inputRef.current.focus()
    }
  }, [runState])

  // Sync scroll between editor textarea and syntax highlighter
  const handleEditorScroll = useCallback(() => {
    if (editorRef.current && highlighterRef.current) {
      const pre = highlighterRef.current.querySelector("pre")
      if (pre) {
        pre.scrollTop = editorRef.current.scrollTop
        pre.scrollLeft = editorRef.current.scrollLeft
      }
    }
  }, [])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(editedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleResetCode = () => {
    setEditedCode(code)
    setIsEditing(false)
  }

  const toggleEditing = () => {
    setIsEditing(!isEditing)
    if (!isEditing) {
      // Focus editor when entering edit mode
      setTimeout(() => editorRef.current?.focus(), 50)
      // Show one-time notice
      if (!isNoticeDismissed()) {
        setShowNotice(true)
      }
    }
  }

  const handleDismissNotice = () => {
    setShowNotice(false)
    dismissNotice()
  }

  const handleRunClick = () => {
    if (runState === "running") return
    if (needsInput) {
      // Show input panel first
      setRunState("input")
      setOutput("")
      setErrorMsg("")
    } else {
      // Run directly
      doRun("")
    }
  }

  const doRun = async (inputStr: string) => {
    setRunState("running")
    setOutput("")
    setErrorMsg("")
    try {
      const result = await executeCode(editedCode, inputStr)
      if (result.error && !result.output) {
        setErrorMsg(result.error)
        setRunState("error")
      } else {
        setOutput(result.output || "(No output)")
        if (result.error) setErrorMsg(result.error)
        setRunState("done")
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to execute code")
      setRunState("error")
    }
  }

  const handleSubmitInput = () => {
    doRun(stdin)
  }

  const handleReset = () => {
    setRunState("idle")
    setStdin("")
    setOutput("")
    setErrorMsg("")
  }

  // Derive display filename from title or language
  const fileExt = language === "c" ? "C" : language.toUpperCase()
  const displayName = title
    ? title.toUpperCase()
    : `NONAME00.${fileExt}`

  return (
    <div
      className={cn("my-3 overflow-hidden", className)}
      data-code-block
      style={{
        border: "2px solid #AAAAAA",
        maxWidth: "100%",
        overflow: "hidden",
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
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {/* Left: language badge + filename */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
          <span
            style={{
              background: "#0000AA",
              color: "#FFFFFF",
              padding: "0 6px",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              fontSize: "11px",
              flexShrink: 0,
            }}
          >
            {fileExt}
          </span>
          <span style={{
            fontWeight: "bold",
            letterSpacing: "0.3px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            {displayName}
          </span>
        </div>

        {/* Right: Edit + Run + Reset + Copy buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
          {isC && (
            <button
              onClick={toggleEditing}
              aria-label={isEditing ? "Stop editing" : "Edit code"}
              style={{
                background: isEditing ? "#884400" : "#444488",
                color: "#FFFFFF",
                border: "1px solid #000000",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "11px",
                padding: "0 6px",
                cursor: "pointer",
                letterSpacing: "0.2px",
                outline: "none",
                boxShadow: "1px 1px 0 #000",
              }}
            >
              {isEditing ? "✓ Done" : "✎ Edit"}
            </button>
          )}
          {isC && isModified && (
            <button
              onClick={handleResetCode}
              aria-label="Reset code"
              style={{
                background: "#663300",
                color: "#FFAA55",
                border: "1px solid #000000",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "11px",
                padding: "0 6px",
                cursor: "pointer",
                letterSpacing: "0.2px",
                outline: "none",
                boxShadow: "1px 1px 0 #000",
              }}
            >
              ↺ Reset
            </button>
          )}
          {isC && (
            <button
              onClick={handleRunClick}
              disabled={runState === "running"}
              aria-label="Run code"
              style={{
                background: runState === "running" ? "#333333" : "#006600",
                color: "#FFFFFF",
                border: "1px solid #000000",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "11px",
                padding: "0 6px",
                cursor: runState === "running" ? "wait" : "pointer",
                letterSpacing: "0.2px",
                outline: "none",
                boxShadow: "1px 1px 0 #000",
                opacity: runState === "running" ? 0.7 : 1,
              }}
            >
              {runState === "running" ? "⏳ Running..." : "▶ Run"}
            </button>
          )}
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
      </div>

      {/* ── Code area (editable overlay) ────────────────── */}
      <div style={{ position: "relative" }}>
        {/* Syntax highlighted layer (background) */}
        <div ref={highlighterRef}>
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
              ...(isEditing ? { minHeight: "120px" } : {}),
            }}
          >
            {editedCode.trim()}
          </SyntaxHighlighter>
        </div>

        {/* Editable textarea overlay (only when editing) */}
        {isEditing && (
          <textarea
            ref={editorRef}
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
            onScroll={handleEditorScroll}
            spellCheck={false}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              margin: 0,
              padding: "10px 14px",
              fontSize: "13px",
              lineHeight: "1.55",
              fontFamily: '"Courier New", Courier, monospace',
              background: "transparent",
              color: "transparent",
              caretColor: "#FFFFFF",
              border: "none",
              outline: "none",
              resize: "none",
              overflow: "auto",
              whiteSpace: "pre",
              wordBreak: "normal",
              boxSizing: "border-box",
              zIndex: 1,
            }}
          />
        )}

        {/* Edit mode indicator */}
        {isEditing && (
          <div
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              background: "rgba(136, 68, 0, 0.85)",
              color: "#FFDD88",
              fontSize: "9px",
              padding: "1px 6px",
              fontFamily: '"Courier New", Courier, monospace',
              letterSpacing: "0.3px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            EDITING
          </div>
        )}

        {/* Modified indicator */}
        {isModified && !isEditing && (
          <div
            style={{
              position: "absolute",
              top: "4px",
              right: "4px",
              background: "rgba(100, 50, 0, 0.8)",
              color: "#FFAA55",
              fontSize: "9px",
              padding: "1px 6px",
              fontFamily: '"Courier New", Courier, monospace',
              letterSpacing: "0.3px",
              pointerEvents: "none",
            }}
          >
            MODIFIED
          </div>
        )}
      </div>

      {/* ── One-time editor notice ────────────────────────── */}
      {isEditing && showNotice && (
        <div
          style={{
            background: "#1a1a00",
            borderTop: "2px solid #AAAAAA",
            padding: "6px 10px",
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: "11px",
            color: "#FFDD88",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <span style={{ flex: 1, minWidth: 0 }}>
            ℹ️ Changes are for experimentation only — your edits are <b>not saved</b>. Click <b>↺ Reset</b> to restore original.
          </span>
          <button
            onClick={handleDismissNotice}
            style={{
              background: "#444400",
              color: "#FFDD88",
              border: "1px solid #666600",
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: "10px",
              padding: "0 8px",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            Got it
          </button>
        </div>
      )}

      {/* ── Input Panel (shown when code needs stdin) ───── */}
      {runState === "input" && (
        <div
          ref={outputRef}
          style={{
            background: "#001133",
            borderTop: "2px solid #AAAAAA",
            padding: "8px 10px",
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: "12px",
          }}
        >
          <div style={{
            color: "#55FFFF",
            marginBottom: "6px",
            fontSize: "11px",
            fontWeight: "bold",
            lineHeight: "1.4",
          }}>
            ⌨ INPUT — {guessInputHint(editedCode)}
          </div>
          <textarea
            ref={inputRef}
            value={stdin}
            onChange={e => setStdin(e.target.value)}
            placeholder={"Enter values here, one per line...\nExample:\n5\n10\n15"}
            onKeyDown={e => {
              // Ctrl+Enter or Cmd+Enter to run
              if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                e.preventDefault()
                handleSubmitInput()
              }
            }}
            style={{
              width: "100%",
              minHeight: "70px",
              maxHeight: "200px",
              background: "#000033",
              color: "#FFFFFF",
              border: "1px solid #335588",
              padding: "6px 8px",
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: "13px",
              lineHeight: "1.5",
              resize: "vertical",
              outline: "none",
              borderRadius: "2px",
              boxSizing: "border-box",
            }}
          />
          <div style={{
            display: "flex",
            gap: "6px",
            marginTop: "6px",
            flexWrap: "wrap",
            alignItems: "center",
          }}>
            <button
              onClick={handleSubmitInput}
              style={{
                background: "#006600",
                color: "#FFFFFF",
                border: "1px solid #000000",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "11px",
                padding: "2px 10px",
                cursor: "pointer",
                boxShadow: "1px 1px 0 #000",
              }}
            >
              ▶ Run with Input
            </button>
            <button
              onClick={() => doRun("")}
              style={{
                background: "#555555",
                color: "#FFFFFF",
                border: "1px solid #000000",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "11px",
                padding: "2px 10px",
                cursor: "pointer",
                boxShadow: "1px 1px 0 #000",
              }}
            >
              Run without Input
            </button>
            <button
              onClick={handleReset}
              style={{
                background: "#660000",
                color: "#FFFFFF",
                border: "1px solid #000000",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "11px",
                padding: "2px 10px",
                cursor: "pointer",
                boxShadow: "1px 1px 0 #000",
              }}
            >
              ✕ Cancel
            </button>
            <span style={{
              color: "#558899",
              fontSize: "10px",
              marginLeft: "auto",
            }}>
              Ctrl+Enter to run
            </span>
          </div>
        </div>
      )}

      {/* ── Running indicator ────────────────────────────── */}
      {runState === "running" && (
        <div
          ref={outputRef}
          style={{
            background: "#000033",
            borderTop: "2px solid #AAAAAA",
            padding: "12px 14px",
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: "12px",
            color: "#55FFFF",
            textAlign: "center",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <span className="animate-pulse">⏳</span>
            Compiling and running...
          </div>
        </div>
      )}

      {/* ── Output Panel ─────────────────────────────────── */}
      {(runState === "done" || runState === "error") && (
        <div
          ref={outputRef}
          style={{
            background: "#000000",
            borderTop: "2px solid #AAAAAA",
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: "12px",
          }}
        >
          {/* Output header */}
          <div style={{
            background: "#333333",
            color: "#AAAAAA",
            padding: "2px 10px",
            fontSize: "11px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "4px",
          }}>
            <span style={{ fontWeight: "bold" }}>
              {runState === "error" ? "⚠ COMPILATION/RUNTIME ERROR" : "✓ OUTPUT"}
            </span>
            <div style={{ display: "flex", gap: "4px" }}>
              <button
                onClick={handleRunClick}
                style={{
                  background: "#006600",
                  color: "#FFFFFF",
                  border: "1px solid #000000",
                  fontFamily: '"Courier New", Courier, monospace',
                  fontSize: "10px",
                  padding: "0 6px",
                  cursor: "pointer",
                }}
              >
                ↻ Re-run
              </button>
              <button
                onClick={handleReset}
                style={{
                  background: "#555555",
                  color: "#FFFFFF",
                  border: "1px solid #000000",
                  fontFamily: '"Courier New", Courier, monospace',
                  fontSize: "10px",
                  padding: "0 6px",
                  cursor: "pointer",
                }}
              >
                ✕ Close
              </button>
            </div>
          </div>

          {/* Output content */}
          <div style={{
            padding: "8px 12px",
            maxHeight: "300px",
            overflowY: "auto",
            overflowX: "auto",
          }}>
            {output && (
              <pre style={{
                color: "#FFFFFF",
                margin: 0,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "13px",
                lineHeight: "1.5",
              }}>
                {output}
              </pre>
            )}
            {errorMsg && (
              <pre style={{
                color: "#FF5555",
                margin: output ? "8px 0 0 0" : 0,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontFamily: '"Courier New", Courier, monospace',
                fontSize: "12px",
                lineHeight: "1.4",
              }}>
                {errorMsg}
              </pre>
            )}
          </div>
        </div>
      )}

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
