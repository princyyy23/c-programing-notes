import type { CourseOutcome } from "@/types"

export interface SearchResult {
  questionId: string
  questionTitle: string
  coId: string
  coTitle: string
  coShortTitle: string
  coColor: string
  source: string
  matchSnippet: string
  matchField: "title" | "notes" | "content"
}

function extractText(blocks: CourseOutcome["questions"][number]["blocks"]): string {
  return blocks
    .map(block => {
      if (block.type === "text") return block.content
      if (block.type === "code") return `${block.title ?? ""} ${block.content}`
      return block.title ?? ""
    })
    .join(" ")
    .replace(/[`*#|_\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function buildSnippet(haystack: string, query: string, contextLen = 80): string {
  const lower = haystack.toLowerCase()
  const idx = lower.indexOf(query.toLowerCase())
  if (idx === -1) return haystack.slice(0, contextLen * 2).replace(/\n/g, " ").trim()
  const start = Math.max(0, idx - contextLen)
  const end = Math.min(haystack.length, idx + query.length + contextLen)
  let snippet = haystack.slice(start, end).replace(/\n/g, " ").trim()
  if (start > 0) snippet = "..." + snippet
  if (end < haystack.length) snippet = snippet + "..."
  return snippet
}

export function searchQuestions(
  courseOutcomes: CourseOutcome[],
  query: string
): SearchResult[] {
  if (!query.trim()) return []
  const q = query.toLowerCase().trim()

  const results: SearchResult[] = []

  for (const co of courseOutcomes) {
    for (const question of co.questions) {
      const titleLower = question.title.toLowerCase()
      const notesText = question.notes ?? ""
      const notesLower = notesText.toLowerCase()
      const bodyText = extractText(question.blocks)
      const bodyLower = bodyText.toLowerCase()

      let matchField: SearchResult["matchField"] | null = null

      if (titleLower.includes(q)) {
        matchField = "title"
      } else if (notesLower.includes(q)) {
        matchField = "notes"
      } else if (bodyLower.includes(q)) {
        matchField = "content"
      }

      if (matchField) {
        const sourceText =
          matchField === "title"
            ? question.title
            : matchField === "notes"
            ? notesText
            : bodyText

        results.push({
          questionId: question.id,
          questionTitle: question.title,
          coId: co.id,
          coTitle: co.title,
          coShortTitle: co.shortTitle,
          coColor: co.color,
          source: question.source,
          matchSnippet: buildSnippet(sourceText, q),
          matchField,
        })
      }
    }
  }

  // Sort: title matches first, then notes, then body content
  const fieldOrder: Record<SearchResult["matchField"], number> = { title: 0, notes: 1, content: 2 }
  results.sort((a, b) => fieldOrder[a.matchField] - fieldOrder[b.matchField])

  return results
}
