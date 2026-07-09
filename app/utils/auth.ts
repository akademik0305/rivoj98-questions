export async function isAdminAuthenticated() {
  const response = await $fetch<{ authenticated: boolean }>("/api/admin/session")
  return response.authenticated
}

export async function loginAdmin(login: string, password: string) {
  await $fetch("/api/admin/login", {
    method: "POST",
    body: { login, password },
  })
}

export async function logoutAdmin() {
  await $fetch("/api/admin/logout", {
    method: "POST",
  })
}
