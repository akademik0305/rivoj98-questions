export const ADMIN_AUTH_KEY = "sorovnoma-admin-auth"
export const ADMIN_LOGIN = "rivoj98"
export const ADMIN_PASSWORD = "mavlonjon"

export function isAdminAuthenticated() {
  if (!import.meta.client) return false
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === "1"
}

export function loginAdmin(login: string, password: string) {
  if (login.trim() === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_AUTH_KEY, "1")
    return true
  }
  return false
}

export function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_AUTH_KEY)
}
