<script setup lang="ts">
defineProps<{
  tag: string
  title: string
  accent?: string
  description?: string
  large?: boolean
}>()
</script>

<template>
  <div>
    <p class="project-tag mb-4">{{ tag }}</p>
    <h2
      class="font-display font-bold leading-tight text-fg"
      :class="large ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'"
    >
      {{ title }}<template v-if="accent"><br /><span class="text-fg-soft">{{ accent }}</span></template>
    </h2>
    <p v-if="description" class="mt-4 max-w-2xl text-sm leading-relaxed text-fg-muted lg:text-base">
      {{ description }}
    </p>
  </div>
</template>
