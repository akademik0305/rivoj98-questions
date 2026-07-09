<script setup lang="ts">
import type { SurveyQuestion, SurveyResponse } from "~/types/survey"
import { loadQuestions } from "~/data/questions"
import {
  clearLegacyStoredResponses,
  exportResponsesToXlsx,
  formatAnswerValue,
  getLegacyStoredResponses,
  saveResponsesToServer,
} from "~/utils/survey"
import {
  isAdminAuthenticated,
  loginAdmin,
  logoutAdmin,
} from "~/utils/auth"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Javoblarni ko'rish",
  robots: "noindex, nofollow",
})

const authenticated = ref(false)
const loginValue = ref("")
const passwordValue = ref("")
const loginError = ref<string | null>(null)

const questions = ref<SurveyQuestion[]>([])
const responses = ref<SurveyResponse[]>([])
const loading = ref(true)
const actionLoading = ref(false)
const legacyResponses = ref<SurveyResponse[]>([])

async function loadAdminData() {
  loading.value = true
  try {
    questions.value = await loadQuestions()
    responses.value = await $fetch<SurveyResponse[]>("/api/responses")
    legacyResponses.value = getLegacyStoredResponses()
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  authenticated.value = await isAdminAuthenticated()
  if (authenticated.value) {
    await loadAdminData()
  } else {
    loading.value = false
  }
})

const responseItems = computed(() =>
  [...responses.value].sort((a, b) =>
    new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
  ),
)

function formatSubmittedAt(value: string) {
  return new Date(value).toLocaleString("uz-UZ")
}

function getAnswerText(response: SurveyResponse, question: SurveyQuestion) {
  return formatAnswerValue(question, response.answers[question.id] ?? [])
}

async function handleLogin() {
  loginError.value = null
  try {
    await loginAdmin(loginValue.value, passwordValue.value)
    authenticated.value = true
    loginValue.value = ""
    passwordValue.value = ""
    await loadAdminData()
  } catch {
    loginError.value = "Login yoki parol noto'g'ri"
  }
}

async function handleLogout() {
  await logoutAdmin()
  authenticated.value = false
  responses.value = []
  questions.value = []
}

function handleExport() {
  if (!questions.value.length || !responses.value.length) return
  exportResponsesToXlsx(questions.value, responses.value)
}

async function handleClear() {
  if (!confirm("Barcha saqlangan javoblar o'chirilsinmi?")) return
  actionLoading.value = true
  try {
    await $fetch("/api/responses", { method: "DELETE" })
    responses.value = []
  } finally {
    actionLoading.value = false
  }
}

async function migrateLegacyResponses() {
  if (!legacyResponses.value.length) return

  actionLoading.value = true
  try {
    await saveResponsesToServer(legacyResponses.value)
    clearLegacyStoredResponses()
    legacyResponses.value = []
    await loadAdminData()
  } finally {
    actionLoading.value = false
  }
}
</script>

<template>
  <section class="relative overflow-hidden bg-bg pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-24">
    <div
      class="hero-glow -top-32 left-1/2 hidden size-[400px] -translate-x-1/2 bg-main/8 sm:block"
      aria-hidden="true"
    />

    <div class="container relative z-10 max-w-2xl">
      <!-- Login -->
      <div v-if="!authenticated" class="mx-auto max-w-sm">
        <div class="mb-8 text-center">
          <p class="badge mb-4 inline-flex">
            <span class="badge-dot" />
            Admin
          </p>
          <h1 class="font-display mb-2 text-xl font-bold text-fg sm:text-2xl">
            Kirish
          </h1>
          <p class="text-sm text-fg-muted">
            Javoblar paneliga kirish uchun login va parolni kiriting.
          </p>
        </div>

        <form class="survey-card space-y-4" @submit.prevent="handleLogin">
          <div class="space-y-2">
            <label class="block text-xs font-medium text-fg-dim" for="admin-login">
              Login
            </label>
            <input
              id="admin-login"
              v-model="loginValue"
              type="text"
              autocomplete="username"
              class="survey-input"
              placeholder="Login"
            />
          </div>
          <div class="space-y-2">
            <label class="block text-xs font-medium text-fg-dim" for="admin-password">
              Parol
            </label>
            <input
              id="admin-password"
              v-model="passwordValue"
              type="password"
              autocomplete="current-password"
              class="survey-input"
              placeholder="Parol"
            />
          </div>

          <div
            v-if="loginError"
            class="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-500"
          >
            {{ loginError }}
          </div>

          <button type="submit" class="btn-primary w-full py-3.5">
            Kirish
          </button>
        </form>
      </div>

      <!-- Admin panel -->
      <template v-else>
        <div class="mb-8 flex flex-wrap items-start justify-between gap-4 sm:mb-10">
          <div>
            <p class="badge mb-4 inline-flex sm:mb-5">
              <span class="badge-dot" />
              Admin
            </p>
            <h1 class="font-display mb-2 text-xl font-bold text-fg sm:text-2xl lg:text-3xl">
              Barcha javoblar
            </h1>
            <p class="text-sm text-fg-muted">
              Dunyoning istalgan joyidan yuborilgan barcha javoblar shu yerda jamlanadi.
            </p>
          </div>
          <button
            type="button"
            class="rounded-xl border border-border px-4 py-2 text-sm text-fg-muted transition-colors hover:bg-hover hover:text-fg"
            @click="handleLogout"
          >
            Chiqish
          </button>
        </div>

        <div v-if="loading" class="flex flex-col items-center gap-4 py-20">
          <div class="size-8 animate-spin rounded-full border-2 border-main border-t-transparent" />
          <p class="text-sm text-fg-dim">Yuklanmoqda...</p>
        </div>

        <div v-else class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div class="survey-card">
              <p class="text-xl font-bold text-main sm:text-2xl">{{ responses.length }}</p>
              <p class="mt-1 text-xs text-fg-dim">Saqlangan javoblar</p>
            </div>
            <div class="survey-card">
              <p class="text-xl font-bold text-main sm:text-2xl">{{ questions.length }}</p>
              <p class="mt-1 text-xs text-fg-dim">Savollar soni</p>
            </div>
          </div>

          <div
            v-if="legacyResponses.length"
            class="survey-card space-y-4 border-amber-500/20 bg-amber-500/5"
          >
            <div class="flex items-center gap-2">
              <div class="flex size-8 items-center justify-center rounded-lg bg-amber-500/10">
                <svg class="size-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 8v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-sm font-semibold text-fg">Eski javoblar topildi</h2>
            </div>
            <p class="text-sm leading-relaxed text-fg-muted">
              Shu brauzerda eski usulda saqlangan {{ legacyResponses.length }} ta javob bor. Ularni ham serverga ko'chirib qo'ysangiz, umumiy ro'yxatda chiqadi.
            </p>
            <button
              type="button"
              class="w-full rounded-xl border border-amber-500/25 px-6 py-3 text-sm font-medium text-amber-500 transition-colors hover:bg-amber-500/5 disabled:opacity-50 sm:w-auto"
              :disabled="actionLoading"
              @click="migrateLegacyResponses"
            >
              Serverga ko'chirish
            </button>
          </div>

          <div class="survey-card space-y-4">
            <div class="flex items-center gap-2">
              <div class="flex size-8 items-center justify-center rounded-lg bg-main/10">
                <svg class="size-4 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h2 class="text-sm font-semibold text-fg">Eksport</h2>
            </div>
            <p class="text-sm leading-relaxed text-fg-muted">
              Barcha javoblarni <strong class="font-medium text-fg">javoblar.xlsx</strong> fayliga yuklab oling.
              Birinchi qatorda savol matnlari, keyingi qatorlarda — har bir mijoz javobi.
            </p>
            <button
              type="button"
              class="btn-primary w-full sm:w-auto"
              :disabled="!responses.length"
              @click="handleExport"
            >
              Excel faylga yuklab olish
            </button>
          </div>

          <div class="survey-card space-y-4">
            <div class="flex items-center gap-2">
              <div class="flex size-8 items-center justify-center rounded-lg bg-main/10">
                <svg class="size-4 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h2 class="text-sm font-semibold text-fg">Jonli ro'yxat</h2>
            </div>
            <p class="text-sm leading-relaxed text-fg-muted">
              Yangi javoblar serverda saqlanadi va shu sahifada umumiy ro'yxatda ko'rinadi.
            </p>
            <button
              type="button"
              class="w-full rounded-xl border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:bg-hover disabled:opacity-50 sm:w-auto"
              :disabled="loading"
              @click="loadAdminData"
            >
              Yangilash
            </button>
          </div>

          <div class="survey-card space-y-4 border-red-500/15">
            <div class="flex items-center gap-2">
              <div class="flex size-8 items-center justify-center rounded-lg bg-red-500/10">
                <svg class="size-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h2 class="text-sm font-semibold text-fg">Tozalash</h2>
            </div>
            <p class="text-sm leading-relaxed text-fg-muted">
              Serverda saqlangan barcha javoblarni o'chirish (eksport qilganingizdan keyin).
            </p>
            <button
              type="button"
              class="w-full rounded-xl border border-red-500/25 px-6 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/5 disabled:opacity-50 sm:w-auto"
              :disabled="!responses.length || actionLoading"
              @click="handleClear"
            >
              {{ actionLoading ? "Tozalanmoqda..." : "Barcha javoblarni o'chirish" }}
            </button>
          </div>

          <div class="space-y-3">
            <div
              v-for="response in responseItems"
              :key="response.id"
              class="survey-card"
            >
              <div class="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
                <div>
                  <h2 class="text-sm font-semibold text-fg">Javob #{{ response.id }}</h2>
                  <p class="mt-1 text-xs text-fg-dim">{{ formatSubmittedAt(response.submittedAt) }}</p>
                </div>
              </div>

              <div class="space-y-4">
                <div
                  v-for="(question, index) in questions"
                  :key="`${response.id}-${question.id}`"
                  class="rounded-xl border border-border/70 bg-bg-elevated/40 p-4"
                >
                  <p class="text-xs font-medium text-fg-dim">{{ index + 1 }}-savol</p>
                  <p class="mt-1 text-sm font-medium leading-relaxed text-fg">
                    {{ question.question }}
                  </p>
                  <p class="mt-2 text-sm leading-relaxed text-fg-muted">
                    {{ getAnswerText(response, question) || "Javob topilmadi" }}
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="!responseItems.length"
              class="survey-card text-center text-sm text-fg-muted"
            >
              Hozircha javoblar yo'q.
            </div>
          </div>

          <NuxtLink
            to="/"
            class="inline-flex items-center gap-1.5 pt-2 text-sm text-main transition-colors hover:text-main-hover"
          >
            <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            So'rovnomaga qaytish
          </NuxtLink>
        </div>
      </template>
    </div>
  </section>
</template>
