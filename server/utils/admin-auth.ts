import {
  createError,
  deleteCookie,
  getCookie,
  setCookie,
} from "h3"
import type { H3Event } from "h3"

const ADMIN_COOKIE = "sorovnoma_admin"

export function isAdminRequest(event: H3Event) {
  return getCookie(event, ADMIN_COOKIE) === "1"
}

export function requireAdmin(event: H3Event) {
  if (!isAdminRequest(event)) {
    throw createError({
      statusCode: 401,
      statusMessage: "Admin kirishi talab qilinadi",
    })
  }
}

export function setAdminSession(event: H3Event) {
  setCookie(event, ADMIN_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  })
}

export function clearAdminSession(event: H3Event) {
  deleteCookie(event, ADMIN_COOKIE, {
    path: "/",
  })
}
