import { createError, defineEventHandler, readBody } from "h3"
import type { SurveyResponse } from "~/app/types/survey"
import { appendResponse } from "../../utils/responses-store"

function isValidResponse(body: SurveyResponse | null | undefined) {
  return Boolean(
    body &&
    typeof body.id === "string" &&
    typeof body.submittedAt === "string" &&
    body.answers &&
    typeof body.answers === "object",
  )
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SurveyResponse>(event)

  if (!isValidResponse(body)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Javob formati noto'g'ri",
    })
  }

  const saved = await appendResponse(body)

  return {
    ok: true,
    saved,
  }
})
