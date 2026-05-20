<script setup lang="ts">
import {
  assets,
  homeAboutFeatures,
  homeAboutImages,
  homeActivityCards,
  site,
} from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "eSquare e.V. — Empowering Democracy",
  description:
    "A dynamic non-profit dedicated to fostering civic participation and democratic processes in Germany and globally.",
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="noise relative flex min-h-screen items-center overflow-hidden bg-bg pt-20">
      <div
        class="pointer-events-none absolute inset-0 opacity-20"
        style="background-image: linear-gradient(var(--theme-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--theme-grid-line) 1px, transparent 1px); background-size: 60px 60px;"
        aria-hidden="true"
      />
      <div class="pointer-events-none absolute top-1/4 left-1/3 size-96 rounded-full opacity-10 blur-3xl" style="background: radial-gradient(circle, var(--color-main) 0%, transparent 70%)" aria-hidden="true" />
      <div class="pointer-events-none absolute bottom-1/3 right-1/4 size-64 rounded-full opacity-[0.08] blur-3xl" style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" aria-hidden="true" />

      <div class="container relative z-10 w-full py-20">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <UiReveal>
            <div class="badge mb-8">
              <span class="badge-dot" />
              Berlin, Germany · Founded {{ site.founded }}
            </div>
            <h1 class="font-display mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              Empowering<br />
              <span class="text-gradient">Democracy</span><br />
              <span class="text-fg-muted">Through People</span>
            </h1>
            <p class="mb-10 max-w-lg text-lg leading-relaxed text-fg-muted">
              A dynamic non-profit dedicated to fostering civic participation and democratic processes both in Germany and globally. Join our mission.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#activities" class="inline-flex items-center gap-2 rounded-xl bg-main px-6 py-3.5 text-sm font-semibold text-on-main transition-all hover:bg-main-hover active:scale-95">
                Explore Projects
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#about" class="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-medium text-fg transition-all hover:border-border-hover hover:bg-hover">
                Learn More
              </a>
            </div>
            <div class="mt-14 flex gap-10 border-t border-nav-border pt-10">
              <div><p class="stat-number">6+</p><p class="mt-1 text-sm text-fg-muted">Years Active</p></div>
              <div class="w-px bg-border" />
              <div><p class="stat-number">30+</p><p class="mt-1 text-sm text-fg-muted">Projects</p></div>
              <div class="w-px bg-border" />
              <div><p class="stat-number">15+</p><p class="mt-1 text-sm text-fg-muted">Countries</p></div>
            </div>
          </UiReveal>

          <UiReveal :delay="2" class="hidden lg:block">
            <div class="relative">
              <div class="hero-img-wrap ml-auto aspect-4/5 max-w-sm overflow-hidden rounded-2xl">
                <img :src="assets.heroBg" alt="eSquare team" class="relative z-10 size-full object-cover" />
                <div class="absolute inset-0 z-20" style="background: linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)" aria-hidden="true" />
              </div>
              <div class="absolute top-16 -left-12 max-w-[180px] rounded-2xl border border-border bg-bg-card p-4 shadow-2xl">
                <p class="font-display text-2xl font-bold text-main">48+</p>
                <p class="mt-0.5 text-xs leading-snug text-fg-muted">Youth exchange participants in 2024</p>
              </div>
              <div class="absolute -right-6 bottom-20 max-w-[160px] rounded-2xl border border-border bg-bg-card p-4 shadow-2xl">
                <div class="mb-2 flex gap-1">
                  <span class="size-2 rounded-full bg-main" />
                  <span class="size-2 rounded-full bg-main opacity-60" />
                  <span class="size-2 rounded-full bg-main opacity-30" />
                </div>
                <p class="text-xs font-medium leading-snug text-fg">Non-formal education programs active now</p>
              </div>
            </div>
          </UiReveal>
        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fg-dim">
        <p class="text-xs tracking-widest uppercase">Scroll</p>
        <div class="h-10 w-px bg-linear-to-b from-fg-dim to-transparent" />
      </div>
    </section>

    <!-- Activities -->
    <section id="activities" class="relative bg-bg-elevated py-24 lg:py-32">
      <div class="container">
        <UiReveal class="mb-16">
          <p class="project-tag mb-4">What We Do</p>
          <div class="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 class="font-display max-w-lg text-4xl font-bold leading-tight text-fg lg:text-5xl">
              Our Core <br /><span class="text-fg-muted">Activities</span>
            </h2>
            <p class="max-w-sm text-sm leading-relaxed text-fg-muted">
              From local workshops to international exchanges, we build bridges between communities through education and dialogue.
            </p>
          </div>
        </UiReveal>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <UiReveal v-for="(card, i) in homeActivityCards" :key="card.number" :delay="(i as 0 | 1 | 2)">
            <article
              class="activity-card group flex min-h-[320px] flex-col justify-between rounded-2xl p-7"
              :class="card.featured ? 'relative overflow-hidden border border-main/20' : 'border border-border bg-bg-card'"
              :style="card.featured ? 'background: linear-gradient(135deg, var(--color-main-dark) 0%, var(--color-navy) 100%)' : undefined"
            >
              <div v-if="card.featured" class="pointer-events-none absolute top-0 right-0 size-48 opacity-20" style="background: radial-gradient(circle, var(--color-main), transparent 70%)" aria-hidden="true" />
              <div :class="card.featured ? 'relative z-10' : ''">
                <span class="card-number font-display text-5xl font-extrabold transition-colors" :class="card.featured ? 'text-on-main/40' : 'text-fg-soft'">{{ card.number }}</span>
                <div class="mt-5 mb-4 flex size-12 items-center justify-center rounded-xl" :class="card.featured ? 'bg-main/20' : 'bg-main/10'">
                  <svg v-if="card.number === '01'" class="size-6 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  <svg v-else-if="card.number === '02'" class="size-6 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <svg v-else class="size-6 text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                </div>
                <h3 class="font-display mb-3 text-xl font-bold text-fg">{{ card.title }}</h3>
                <p class="text-sm leading-relaxed" :class="card.featured ? 'text-on-main/90' : 'text-fg-muted'">{{ card.description }}</p>
              </div>
              <NuxtLink :to="card.to" class="border-animate mt-6 inline-flex w-fit items-center gap-2 pb-0.5 text-sm font-semibold text-main" :class="card.featured ? 'relative z-10' : ''">
                {{ card.cta }}
                <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </NuxtLink>
            </article>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="bg-bg py-24 lg:py-32">
      <div class="container">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <UiReveal class="order-2 lg:order-1">
            <div class="grid grid-cols-2 gap-4">
              <img v-for="(src, i) in homeAboutImages" :key="src" :src="src" alt="eSquare activities" class="w-full rounded-2xl object-cover" :class="i === 1 ? 'mt-8 h-52' : i === 2 ? 'h-44' : i === 3 ? '-mt-8 h-44' : 'h-52'" />
            </div>
          </UiReveal>
          <UiReveal :delay="1" class="order-1 lg:order-2">
            <UiSectionHeading tag="About Us" title="A Non-Profit Built" accent="for Active Citizens" />
            <p class="mb-6 leading-relaxed text-fg-muted">
              Founded in {{ site.founded }} and based in Berlin, {{ site.name }} is dedicated to fostering civic participation and democratic processes across Germany and globally.
            </p>
            <p class="mb-10 leading-relaxed text-fg-muted">
              Our projects span from local to international levels, using innovative methods that unite communities, promote mutual understanding, and build the civic infrastructure of tomorrow.
            </p>
            <div class="space-y-4">
              <div v-for="feature in homeAboutFeatures" :key="feature" class="flex items-start gap-3">
                <div class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-main/20">
                  <div class="size-2 rounded-full bg-main" />
                </div>
                <p class="text-sm text-fg-muted">{{ feature }}</p>
              </div>
            </div>
            <NuxtLink to="/about" class="mt-10 inline-flex items-center gap-2 rounded-xl border border-border bg-hover px-6 py-3.5 text-sm font-semibold text-fg transition-all hover:border-border-hover">
              Full Story
              <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </NuxtLink>
          </UiReveal>
        </div>
      </div>
    </section>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
