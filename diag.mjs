import { readFileSync } from "fs"

const FILES = ["co1.ts","co2.ts","co3.ts","module1.ts","module2.ts","module3.ts","sir.ts"]

for (const filename of FILES) {
  const content = readFileSync(`./src/data/${filename}`, "utf-8")
  let i = 0
  while (i < content.length) {
    if (content[i] === "`") {
      let j = i + 1
      while (j < content.length) {
        if (content[j] === "\\") j += 2
        else if (content[j] === "`") break
        else j++
      }
      const block = content.slice(i + 1, j)
      if (block.includes("void main()")) {
        const issues = []
        if (!block.includes("getch()")) issues.push("NO_GETCH")
        if (!block.includes("clrscr()")) issues.push("NO_CLRSCR")
        if (!block.includes("#include<conio.h>")) issues.push("NO_CONIO")
        if (issues.length) {
          console.log(`\n[${filename} @${i}] ${issues.join(" ")}`)
          console.log(block.slice(0, 350))
          console.log("===")
        }
      }
      i = j + 1
    } else i++
  }
}
console.log("\nDiagnostic done")
