<script setup lang="ts">
import type { SurveyQuestion, SurveyResponse } from "~/types/survey"
import { loadQuestions } from "~/data/questions"
import {
  isAdminAuthenticated,
  loginAdmin,
  logoutAdmin,
} from "~/utils/auth"
import {
  clearStoredResponses,
  exportResponsesToXlsx,
  getStoredResponses,
  importResponsesFromJson,
  mergeResponses,
  STORAGE_KEY,
} from "~/utils/survey"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Javoblarni eksport qilish",
  robots: "noindex, nofollow",
})

const authenticated = ref(false)
const loginValue = ref("")
const passwordValue = ref("")
const loginError = ref<string | null>(null)

const questions = ref<SurveyQuestion[]>([])
const responses = ref<SurveyResponse[]>([])
const loading = ref(true)
const importInput = ref<HTMLInputElement | null>(null)

async function loadAdminData() {
  loading.value = true
  try {
    questions.value = await loadQuestions()
    responses.value = getStoredResponses()
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  authenticated.value = isAdminAuthenticated()
  if (authenticated.value) {
    await loadAdminData()
  } else {
    loading.value = false
  }
})

function handleLogin() {
  loginError.value = null
  if (loginAdmin(loginValue.value, passwordValue.value)) {
    authenticated.value = true
    loginValue.value = ""
    passwordValue.value = ""
    loadAdminData()
  } else {
    loginError.value = "Login yoki parol noto'g'ri"
  }
}

function handleLogout() {
  logoutAdmin()
  authenticated.value = false
  responses.value = []
  questions.value = []
}

function refresh() {
  responses.value = getStoredResponses()
}

function handleExport() {
  if (!questions.value.length || !responses.value.length) return
  exportResponsesToXlsx(questions.value, responses.value)
}

function handleClear() {
  if (!confirm("Barcha saqlangan javoblar o'chirilsinmi?")) return
  clearStoredResponses()
  refresh()
}

async function handleImport(event: Event) {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files ?? [])
  if (!files.length) return

  const imported = await importResponsesFromJson(files)
  const merged = mergeResponses(responses.value, imported)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  refresh()
  input.value = ""
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
              Javoblarni boshqarish
            </h1>
            <p class="text-sm text-fg-muted">
              Barcha mijoz javoblarini Excel faylga yuklab oling yoki JSON fayllarni import qiling.
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
              Har bir qator — bitta mijoz javobi.
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
              <h2 class="text-sm font-semibold text-fg">Import</h2>
            </div>
            <p class="text-sm leading-relaxed text-fg-muted">
              Agar javoblar boshqa qurilmada yig'ilgan bo'lsa, JSON fayllarni shu yerga yuklang va birlashtiring.
            </p>
            <input
              ref="importInput"
              type="file"
              accept=".json,application/json"
              multiple
              class="block w-full text-sm text-fg-muted file:mr-4 file:mb-2 file:cursor-pointer file:rounded-lg file:border-0 file:bg-main file:px-4 file:py-2 file:text-sm file:font-semibold file:text-on-main hover:file:bg-main-hover sm:file:mb-0"
              @change="handleImport"
            />
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
              Brauzerda saqlangan barcha javoblarni o'chirish (eksport qilganingizdan keyin).
            </p>
            <button
              type="button"
              class="w-full rounded-xl border border-red-500/25 px-6 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/5 disabled:opacity-50 sm:w-auto"
              :disabled="!responses.length"
              @click="handleClear"
            >
              Barcha javoblarni o'chirish
            </button>
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
