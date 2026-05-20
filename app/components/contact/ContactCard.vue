<script setup lang="ts">
defineProps<{
  label: string
  value: string
  href?: string
  icon: "phone" | "email" | "location"
}>()
</script>

<template>
  <article
    class="activity-card surface-card group flex flex-col rounded-2xl p-6 lg:p-8"
  >
    <span
      class="mb-5 flex size-12 items-center justify-center rounded-xl border border-border bg-main/10 text-main transition-colors group-hover:border-border-hover"
      aria-hidden="true"
    >
      <svg
        v-if="icon === 'phone'"
        class="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else-if="icon === 'email'"
        class="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M22 6l-10 7L2 6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg
        v-else
        class="size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </span>

    <p class="project-tag">
      {{ label }}
    </p>

    <component
      :is="href ? 'a' : 'p'"
      :href="href"
      class="mt-2 text-lg font-medium leading-snug text-fg transition-colors"
      :class="href ? 'hover:text-main' : ''"
    >
      {{ value }}
    </component>
  </article>
</template>
