import { defineEventHandler } from "h3"
import { requireAdmin } from "../../utils/admin-auth"
import { clearResponses } from "../../utils/responses-store"

export default defineEventHandler(async (event) => {
  requireAdmin(event)
  await clearResponses()
  return { ok: true }
})
