import { defineEventHandler } from "h3"
import { isAdminRequest } from "../../utils/admin-auth"

export default defineEventHandler((event) => {
  return { authenticated: isAdminRequest(event) }
})
