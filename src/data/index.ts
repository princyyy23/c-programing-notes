import { co1 } from "./co1"
import { co2 } from "./co2"
import { co3 } from "./co3"
import { module1 } from "./module1"
import { module2 } from "./module2"
import { module3 } from "./module3"
import { module4 } from "./module4"
import { module5 } from "./module5"
import { module6 } from "./module6"
import { sir } from "./sir"
import { questionNotes } from "./notes"
import { sirNotes } from "./sir-notes"
import type { CourseOutcome } from "@/types"

const allNotes: Record<string, string> = { ...questionNotes, ...sirNotes }

function mergeNotes(cos: CourseOutcome[]): CourseOutcome[] {
  return cos.map(co => ({
    ...co,
    questions: co.questions.map(q => ({
      ...q,
      notes: allNotes[q.id] ?? q.notes,
    })),
  }))
}

export const courseOutcomes: CourseOutcome[] = mergeNotes([
  co1,
  co2,
  co3,
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  sir,
])
