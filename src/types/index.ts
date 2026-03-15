export interface TextBlock {
  type: "text"
  content: string
}

export interface CodeBlock {
  type: "code"
  language: string
  title?: string
  content: string
}

export interface DiagramBlock {
  type: "diagram"
  title?: string
  content: string
}

export type SolutionBlock = TextBlock | CodeBlock | DiagramBlock

export interface Question {
  id: string
  title: string
  source: string
  marks?: number
  blocks: SolutionBlock[]
  notes?: string
}

export interface CourseOutcome {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: string
  color: string
  questions: Question[]
}
