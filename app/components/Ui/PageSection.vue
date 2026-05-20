<script setup lang="ts">
defineProps<{
  elevated?: boolean
  narrow?: boolean
}>()
</script>

<template>
  <section
    class="py-16 lg:py-24"
    :class="elevated ? 'border-t border-nav-border bg-bg-elevated' : 'bg-bg'"
  >
    <div class="container" :class="narrow ? 'max-w-3xl' : ''">
      <slot />
    </div>
  </section>
</template>
