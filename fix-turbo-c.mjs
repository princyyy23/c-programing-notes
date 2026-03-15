// Second-pass fix:
// 1. "#include <stdio.h>" (spaced) → "#include<stdio.h>\n#include<conio.h>"  (if conio absent)
// 2. "#include<stdio.h>" without following conio.h → add conio.h
// 3. "void main(){" (no-space brace) → add clrscr() if missing
// 4. Any block with void main() but no clrscr → ensures clrscr is added
import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

const DATA_DIR = "./src/data"
const FILES = [
  "co1.ts", "co2.ts", "co3.ts",
  "module1.ts", "module2.ts", "module3.ts",
  "sir.ts", "sir-notes.ts",
]

function transformCCode(code) {
  if (!code.includes("void main()")) return code

  // ── 1. Normalize #include <X> → #include<X> ─────────────────────────────
  code = code.replace(/#include </g, "#include<")

  // ── 2. Add #include<conio.h> after #include<stdio.h> if absent ──────────
  if (code.includes("#include<stdio.h>") && !code.includes("#include<conio.h>")) {
    code = code.replace("#include<stdio.h>", "#include<stdio.h>\n#include<conio.h>")
  }

  // ── 3. Add clrscr() after void main() opening brace if absent ────────────
  if (!code.includes("clrscr()")) {
    // handles: "void main() {\n" and "void main(){\n"
    code = code.replace(/void main\(\)\s*\{\n/, "void main() {\n    clrscr();\n")
    // handles: "void main()\n{\n"
    code = code.replace(/void main\(\)\n\{\n/, "void main()\n{\n    clrscr();\n")
  }

  // ── 4. Add getch() before last bare "}" if absent ───────────────────────
  if (!code.includes("getch()")) {
    const lines = code.split("\n")
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i] === "}") {
        lines.splice(i, 0, "    getch();")
        break
      }
    }
    code = lines.join("\n")
  }

  return code
}

function processFile(filepath) {
  const content = readFileSync(filepath, "utf-8")
  let result = ""
  let i = 0

  while (i < content.length) {
    if (content[i] === "`") {
      let j = i + 1
      while (j < content.length) {
        if (content[j] === "\\") {
          j += 2
        } else if (content[j] === "`") {
          break
        } else {
          j++
        }
      }
      const raw = content.slice(i + 1, j)
      result += "`" + transformCCode(raw) + "`"
      i = j + 1
    } else {
      result += content[i]
      i++
    }
  }

  return result
}

let totalFixed = 0
for (const filename of FILES) {
  const filepath = join(DATA_DIR, filename)
  const original = readFileSync(filepath, "utf-8")
  const transformed = processFile(filepath)

  if (transformed !== original) {
    writeFileSync(filepath, transformed, "utf-8")
    console.log(`✓ ${filename.padEnd(18)} — fixed`)
    totalFixed++
  } else {
    console.log(`  ${filename.padEnd(18)} — already clean`)
  }
}
console.log(`\n${totalFixed} files updated`)
