import type { SurveyAnswer, SurveyQuestion, SurveyResponse } from "~/types/survey"
import { loadQuestions } from "~/data/questions"
import {
  createResponseId,
  getStoredResponses,
  saveResponse,
} from "~/utils/survey"

export function useSurvey() {
  const questions = ref<SurveyQuestion[]>([])
  const loading = ref(true)
  const error = ref<string | null>(null)
  const submitted = ref(false)

  const answers = reactive<Record<number, SurveyAnswer[]>>({})

  function initAnswers(list: SurveyQuestion[]) {
    for (const q of list) {
      answers[q.id] = []
    }
  }

  async function fetchQuestions() {
    loading.value = true
    error.value = null

    try {
      const list = await loadQuestions()
      questions.value = list
      initAnswers(list)
    } catch (e) {
      error.value =
        e instanceof Error ? e.message : "Savollar yuklanmadi"
    } finally {
      loading.value = false
    }
  }

  function getAnswers(questionId: number): SurveyAnswer[] {
    return answers[questionId] ?? []
  }

  function isSelected(questionId: number, optionId: string) {
    return getAnswers(questionId).some((a) => a.optionId === optionId)
  }

  function getCustomText(questionId: number, optionId: string) {
    return (
      getAnswers(questionId).find((a) => a.optionId === optionId)?.customText ??
      ""
    )
  }

  function setRadioAnswer(questionId: number, optionId: string) {
    const prev = getAnswers(questionId).find((a) => a.optionId === optionId)
    answers[questionId] = [
      {
        optionId,
        customText: prev?.customText ?? "",
      },
    ]
  }

  function toggleCheckboxAnswer(questionId: number, optionId: string) {
    const current = getAnswers(questionId)
    const existing = current.find((a) => a.optionId === optionId)

    if (existing) {
      answers[questionId] = current.filter((a) => a.optionId !== optionId)
    } else {
      answers[questionId] = [...current, { optionId, customText: "" }]
    }
  }

  function setCustomText(
    questionId: number,
    optionId: string,
    customText: string,
  ) {
    const current = getAnswers(questionId)
    const index = current.findIndex((a) => a.optionId === optionId)
    if (index === -1) return

    const next = [...current]
    next[index] = { ...next[index]!, customText }
    answers[questionId] = next
  }

  function isQuestionAnswered(question: SurveyQuestion) {
    const questionAnswers = getAnswers(question.id)
    if (!questionAnswers.length) return false

    for (const answer of questionAnswers) {
      const option = question.options.find((o) => o.id === answer.optionId)
      if (option?.hasCustomInput && !answer.customText?.trim()) {
        return false
      }
    }

    return true
  }

  function validate(): string | null {
    for (const question of questions.value) {
      const questionAnswers = getAnswers(question.id)

      if (!questionAnswers.length) {
        return `Savol ${question.id}: javob tanlang`
      }

      for (const answer of questionAnswers) {
        const option = question.options.find((o) => o.id === answer.optionId)
        if (option?.hasCustomInput && !answer.customText?.trim()) {
          return `"${option.text}" uchun qo'shimcha javob yozing`
        }
      }
    }

    return null
  }

  const canSubmit = computed(() =>
    questions.value.length > 0 &&
    questions.value.every((q) => isQuestionAnswered(q)),
  )

  const progress = computed(() => {
    if (!questions.value.length) return 0
    const answered = questions.value.filter((q) => isQuestionAnswered(q)).length
    return Math.round((answered / questions.value.length) * 100)
  })

  function submit() {
    const validationError = validate()
    if (validationError) return validationError

    const response: SurveyResponse = {
      id: createResponseId(),
      submittedAt: new Date().toISOString(),
      answers: JSON.parse(JSON.stringify(answers)),
    }

    saveResponse(response)
    submitted.value = true
    return null
  }

  function reset() {
    submitted.value = false
    initAnswers(questions.value)
  }

  return {
    questions,
    loading,
    error,
    submitted,
    answers,
    canSubmit,
    progress,
    fetchQuestions,
    isSelected,
    getCustomText,
    setRadioAnswer,
    toggleCheckboxAnswer,
    setCustomText,
    isQuestionAnswered,
    submit,
    reset,
    getStoredResponses,
  }
}
