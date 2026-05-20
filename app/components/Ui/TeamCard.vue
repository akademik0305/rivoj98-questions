<script setup lang="ts">
defineProps<{
  name: string
  role: string
  bio: string
}>()
</script>

<template>
  <article
    class="activity-card surface-card rounded-2xl p-6 lg:p-8"
  >
    <h3 class="font-display text-lg font-bold text-fg">
      {{ name }}
    </h3>
    <p class="mt-1 text-xs font-medium tracking-wide text-main uppercase">
      {{ role }}
    </p>
    <p class="mt-4 text-sm leading-relaxed text-fg-muted">
      {{ bio }}
    </p>
  </article>
</template>
