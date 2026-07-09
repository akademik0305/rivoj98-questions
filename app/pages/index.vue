<script setup lang="ts">
definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Rivoj 98 — Mijozlar so'rovnomasi",
  description:
    "Xizmatimiz sifati haqida fikringizni bildiring. Rivoj 98 mijozlar so'rovnomasi.",
})

const {
  questions,
  loading,
  error,
  submitted,
  submitting,
  canSubmit,
  progress,
  fetchQuestions,
  isSelected,
  getCustomText,
  setRadioAnswer,
  toggleCheckboxAnswer,
  setCustomText,
  submit,
  reset,
} = useSurvey()

const formError = ref<string | null>(null)
const showStickyProgress = ref(false)
const progressSentinel = ref<HTMLElement | null>(null)
let progressObserver: IntersectionObserver | null = null

function setupProgressObserver() {
  progressObserver?.disconnect()
  progressObserver = null
  showStickyProgress.value = false

  nextTick(() => {
    if (!progressSentinel.value) return

    progressObserver = new IntersectionObserver(
      ([entry]) => {
        showStickyProgress.value = !entry?.isIntersecting
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    )

    progressObserver.observe(progressSentinel.value)
  })
}

onMounted(() => {
  fetchQuestions()
})

watch(
  () => !loading.value && !error.value && !submitted.value && questions.value.length > 0,
  (ready) => {
    if (ready) setupProgressObserver()
    else {
      progressObserver?.disconnect()
      showStickyProgress.value = false
    }
  },
)

onUnmounted(() => {
  progressObserver?.disconnect()
})

async function handleSubmit() {
  formError.value = await submit()
}

function handleNewResponse() {
  reset()
  formError.value = null
}

function onOptionSelect(
  questionId: number,
  optionId: string,
  type: "radio" | "checkbox",
) {
  if (type === "radio") {
    setRadioAnswer(questionId, optionId)
  } else {
    toggleCheckboxAnswer(questionId, optionId)
  }
  formError.value = null
}
</script>

<template>
  <div>
    <Teleport to="body">
      <div
        v-if="!loading && !error && !submitted && questions.length && showStickyProgress"
        class="progress-sticky"
      >
        <div class="container max-w-2xl">
          <div class="flex items-center justify-between text-xs text-fg-dim">
            <span>Jarayon</span>
            <span>{{ progress }}%</span>
          </div>
          <div class="mt-1.5 h-1 overflow-hidden rounded-full bg-bg-elevated">
            <div
              class="h-full rounded-full bg-main transition-all duration-500 ease-out"
              :style="{ width: `${progress}%` }"
            />
          </div>
        </div>
      </div>
    </Teleport>

    <section class="relative overflow-hidden bg-bg pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-24">
      <div
        class="hero-glow -top-32 left-1/2 hidden size-[500px] -translate-x-1/2 bg-main/10 sm:block"
        aria-hidden="true"
      />
      <div
        class="hero-glow top-20 -right-32 hidden size-80 bg-main/5 sm:block"
        aria-hidden="true"
      />

      <div class="container relative z-10 max-w-2xl">
        <div class="mb-8 text-center sm:mb-12">
          <p class="badge mb-4 inline-flex sm:mb-5">
            <span class="badge-dot" />
            Rivoj 98
          </p>
          <h1 class="font-display mb-3 text-2xl font-bold tracking-tight text-fg sm:mb-4 sm:text-3xl lg:text-4xl">
            Fikringiz <span class="text-gradient">muhim</span>
          </h1>
          <p class="mx-auto max-w-md text-sm leading-relaxed text-fg-muted sm:text-base">
            Mahsulot sifati va xizmatimiz haqida fikr-mulohazangizni bildiring.
            Barcha ma'lumotlar maxfiy saqlanadi.
          </p>
        </div>

        <div v-if="loading" class="flex flex-col items-center gap-4 py-20 sm:py-24">
          <div class="size-8 animate-spin rounded-full border-2 border-main border-t-transparent" />
          <p class="text-sm text-fg-dim">Savollar yuklanmoqda...</p>
        </div>

        <div
          v-else-if="error"
          class="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-5 text-center text-sm text-red-500 sm:px-6"
        >
          {{ error }}
        </div>

        <div v-else-if="submitted" class="survey-card text-center">
          <div class="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-main/10">
            <svg class="size-7 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="font-display mb-2 text-xl font-bold text-fg">Rahmat!</h2>
          <p class="mb-8 text-sm text-fg-muted">
            Javoblaringiz muvaffaqiyatli qabul qilindi.
          </p>
          <button type="button" class="btn-primary w-full sm:w-auto" @click="handleNewResponse">
            Yangi javob yuborish
          </button>
        </div>

        <form v-else class="space-y-4 sm:space-y-5" @submit.prevent="handleSubmit">
          <div ref="progressSentinel" class="mb-2">
            <div class="mb-2 flex items-center justify-between text-xs text-fg-dim">
              <span>Jarayon</span>
              <span>{{ progress }}%</span>
            </div>
            <div class="h-1 overflow-hidden rounded-full bg-bg-elevated">
              <div
                class="h-full rounded-full bg-main transition-all duration-500 ease-out"
                :style="{ width: `${progress}%` }"
              />
            </div>
          </div>

          <article
            v-for="(question, qi) in questions"
            :key="question.id"
            class="survey-card"
          >
            <div class="mb-4 flex items-start gap-2.5 sm:mb-5 sm:gap-3">
              <span
                class="flex size-6 shrink-0 items-center justify-center rounded-full bg-main text-[11px] font-semibold text-on-main sm:size-7 sm:text-xs"
              >
                {{ qi + 1 }}
              </span>
              <div class="min-w-0 flex-1">
                <h2 class="pt-0.5 text-[13px] font-medium leading-relaxed text-fg sm:text-sm lg:text-base">
                  {{ question.question }}
                </h2>
                <p
                  v-if="question.type === 'checkbox'"
                  class="mt-1 text-xs text-fg-dim"
                >
                  Bir nechta variant tanlash mumkin
                </p>
              </div>
            </div>

            <div class="space-y-2 sm:pl-10">
              <div
                v-for="option in question.options"
                :key="option.id"
                class="space-y-2"
              >
                <label
                  class="survey-option"
                  :class="isSelected(question.id, option.id) ? 'selected' : ''"
                >
                  <input
                    :type="question.type === 'radio' ? 'radio' : 'checkbox'"
                    :name="`q-${question.id}`"
                    :checked="isSelected(question.id, option.id)"
                    class="sr-only"
                    @change="onOptionSelect(question.id, option.id, question.type)"
                  />
                  <span
                    class="survey-option-indicator"
                    :class="question.type === 'checkbox' ? 'is-checkbox' : ''"
                  />
                  <span class="min-w-0 flex-1 text-[13px] leading-snug text-fg-muted sm:text-sm">
                    {{ option.text }}
                  </span>
                </label>

                <div
                  v-if="option.hasCustomInput && isSelected(question.id, option.id)"
                  class="pl-0 sm:pl-1"
                >
                  <input
                    type="text"
                    :value="getCustomText(question.id, option.id)"
                    placeholder="Javobingizni yozing..."
                    class="survey-input"
                    @input="
                      setCustomText(
                        question.id,
                        option.id,
                        ($event.target as HTMLInputElement).value,
                      )
                    "
                  />
                </div>
              </div>
            </div>
          </article>

          <div
            v-if="formError"
            class="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-500"
          >
            {{ formError }}
          </div>

          <button
            type="submit"
            class="btn-primary w-full py-3.5 sm:py-4"
            :disabled="!canSubmit || submitting"
          >
            {{ submitting ? "Yuborilmoqda..." : "Javoblarni yuborish" }}
          </button>
          <p v-if="!canSubmit && !submitting" class="text-center text-xs text-fg-dim">
            Barcha savollarga javob bering
          </p>
        </form>
      </div>
    </section>
  </div>
</template>
