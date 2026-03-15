import type { SolutionBlock } from "@/types"
import { TextBlock } from "./TextBlock"
import { CodeBlock } from "./CodeBlock"
import { DiagramBlock } from "./DiagramBlock"

interface BlockRendererProps {
  block: SolutionBlock
}

export function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "text":
      return <TextBlock content={block.content} />
    case "code":
      return <CodeBlock code={block.content} language={block.language} title={block.title} />
    case "diagram":
      return <DiagramBlock content={block.content} title={block.title} />
    default:
      return null
  }
}
