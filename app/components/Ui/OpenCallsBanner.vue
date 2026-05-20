<template>
  <UiReveal>
    <section class="bg-main-dim py-10">
      <div class="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex items-center gap-4">
          <span class="text-2xl" aria-hidden="true">📢</span>
          <div>
            <p class="font-display text-lg font-bold text-on-main">Open Applications Now Live</p>
            <p class="text-sm text-on-main/85">New EU mobility project openings for 2025 — apply before slots fill up.</p>
          </div>
        </div>
        <NuxtLink
          to="/projects/open-applications"
          class="shrink-0 rounded-xl bg-bg px-6 py-3 text-sm font-semibold text-fg transition-all hover:bg-bg-elevated"
        >
          See Open Calls →
        </NuxtLink>
      </div>
    </section>
  </UiReveal>
</template>
