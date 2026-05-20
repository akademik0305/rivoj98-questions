<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="border-b border-nav-border last:border-b-0">
    <div class="container py-10 lg:py-14">
      <h2 class="font-display text-lg font-bold text-main">
        {{ title }}
      </h2>
      <div class="prose-site mt-4 space-y-3 text-sm leading-relaxed text-fg-muted">
        <slot />
      </div>
    </div>
  </section>
</template>
