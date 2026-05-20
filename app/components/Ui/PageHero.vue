<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  large?: boolean
}>()
</script>

<template>
  <section class="relative border-b border-nav-border bg-bg pt-28 pb-16 lg:pt-32 lg:pb-20">
    <div
      class="pointer-events-none absolute inset-0 opacity-10"
      style="background-image: linear-gradient(var(--theme-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--theme-grid-line) 1px, transparent 1px); background-size: 60px 60px;"
      aria-hidden="true"
    />
    <div class="container relative">
      <p v-if="eyebrow" class="project-tag mb-4">
        {{ eyebrow }}
      </p>
      <h1
        class="font-display font-bold leading-[1.05] tracking-tight text-fg"
        :class="[
          large
            ? 'text-4xl sm:text-5xl lg:text-6xl'
            : 'text-3xl sm:text-4xl lg:text-5xl',
        ]"
      >
        <slot name="title">{{ title }}</slot>
      </h1>
      <p
        v-if="subtitle"
        class="mt-6 max-w-3xl text-base leading-relaxed text-fg-muted lg:text-lg"
      >
        {{ subtitle }}
      </p>
      <slot />
    </div>
  </section>
</template>
