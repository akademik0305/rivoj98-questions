import * as XLSX from "xlsx"
import type { SurveyAnswer, SurveyQuestion, SurveyResponse } from "~/types/survey"
import { loadQuestions } from "~/data/questions"

export const STORAGE_KEY = "sorovnoma-javoblar"

export { loadQuestions }

export function getStoredResponses(): SurveyResponse[] {
  if (!import.meta.client) return []

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as SurveyResponse[]
  } catch {
    return []
  }
}

export function saveResponse(response: SurveyResponse) {
  const existing = getStoredResponses()
  existing.push(response)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
}

export function clearStoredResponses() {
  localStorage.removeItem(STORAGE_KEY)
}

export function createResponseId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function formatAnswerValue(
  question: SurveyQuestion,
  answers: SurveyAnswer[],
) {
  if (!answers.length) return ""

  return answers
    .map((answer) => {
      const option = question.options.find((o) => o.id === answer.optionId)
      const label = option?.text ?? answer.optionId
      const custom = answer.customText?.trim()
      return custom ? `${label}: ${custom}` : label
    })
    .join(" | ")
}

export function exportResponsesToXlsx(
  questions: SurveyQuestion[],
  responses: SurveyResponse[],
  filename = "javoblar.xlsx",
) {
  const headers = [
    "ID",
    "Sana",
    ...questions.map((q, i) => `${i + 1}. ${q.question}`),
  ]

  const rows = responses.map((response) => {
    const row: string[] = [
      response.id,
      new Date(response.submittedAt).toLocaleString("uz-UZ"),
    ]

    for (const question of questions) {
      const questionAnswers = response.answers[question.id] ?? []
      row.push(formatAnswerValue(question, questionAnswers))
    }

    return row
  })

  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows])
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, "Javoblar")
  XLSX.writeFile(workbook, filename)
}

export function importResponsesFromJson(files: File[]): Promise<SurveyResponse[]> {
  return Promise.all(
    files.map(async (file) => {
      const text = await file.text()
      return JSON.parse(text) as SurveyResponse
    }),
  )
}

export function mergeResponses(
  existing: SurveyResponse[],
  incoming: SurveyResponse[],
) {
  const ids = new Set(existing.map((r) => r.id))
  const merged = [...existing]

  for (const response of incoming) {
    if (!ids.has(response.id)) {
      merged.push(response)
      ids.add(response.id)
    }
  }

  return merged
}
