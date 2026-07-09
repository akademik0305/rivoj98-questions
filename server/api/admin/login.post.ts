import { createError, defineEventHandler, readBody } from "h3"
import { setAdminSession } from "../../utils/admin-auth"

export default defineEventHandler(async (event) => {
  const body = await readBody<{ login?: string, password?: string }>(event)
  const config = useRuntimeConfig(event)

  if (
    body?.login?.trim() !== config.adminLogin ||
    body?.password !== config.adminPassword
  ) {
    throw createError({
      statusCode: 401,
      statusMessage: "Login yoki parol noto'g'ri",
    })
  }

  setAdminSession(event)

  return { ok: true }
})
