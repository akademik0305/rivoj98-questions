import { defineEventHandler } from "h3"
import { requireAdmin } from "../../utils/admin-auth"
import { readResponses } from "../../utils/responses-store"

export default defineEventHandler(async (event) => {
  requireAdmin(event)
  return await readResponses()
})
