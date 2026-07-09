import * as XLSX from "xlsx"
import type { SurveyAnswer, SurveyQuestion, SurveyResponse } from "~/types/survey"
import { loadQuestions } from "~/data/questions"

export const LEGACY_STORAGE_KEY = "sorovnoma-javoblar"

export { loadQuestions }

export function createResponseId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function getLegacyStoredResponses(): SurveyResponse[] {
  if (!import.meta.client) return []

  try {
    const raw = localStorage.getItem(LEGACY_STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as SurveyResponse[]
  } catch {
    return []
  }
}

export function clearLegacyStoredResponses() {
  if (!import.meta.client) return
  localStorage.removeItem(LEGACY_STORAGE_KEY)
}

export async function saveResponseToServer(response: SurveyResponse) {
  await $fetch("/api/responses", {
    method: "POST",
    body: response,
  })
}

export async function saveResponsesToServer(responses: SurveyResponse[]) {
  for (const response of responses) {
    await saveResponseToServer(response)
  }
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
