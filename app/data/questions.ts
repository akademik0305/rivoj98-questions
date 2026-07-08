import type { SurveyQuestion } from "~/types/survey"

export async function loadQuestions(
  url = "/savollar/questions.json",
): Promise<SurveyQuestion[]> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Savollar yuklanmadi")
  }
  return (await response.json()) as SurveyQuestion[]
}
