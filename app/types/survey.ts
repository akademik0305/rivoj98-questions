export interface SurveyOption {
  id: string
  text: string
  hasCustomInput?: boolean
}

export interface SurveyQuestion {
  id: number
  type: "radio" | "checkbox"
  question: string
  options: SurveyOption[]
}

export interface SurveyAnswer {
  optionId: string
  customText?: string
}

export interface SurveyResponse {
  id: string
  submittedAt: string
  answers: Record<number, SurveyAnswer[]>
}
