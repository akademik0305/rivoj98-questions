<script setup lang="ts">
import type { PostItem } from "~/data/site"

defineProps<{
  post: PostItem
  basePath: string
  category?: string
}>()

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
</script>

<template>
  <article
    class="activity-card surface-card group flex flex-col rounded-2xl p-6 lg:p-8"
  >
    <p
      v-if="category || post.category"
      class="project-tag"
    >
      {{ category || post.category }}
    </p>
    <time
      class="mt-2 block text-xs text-fg-soft"
      :datetime="post.date"
    >
      {{ formatDate(post.date) }}
    </time>
    <h3
      class="font-display mt-3 text-xl font-bold leading-tight text-fg transition-colors group-hover:text-main"
    >
      {{ post.title }}
    </h3>
    <p class="mt-3 line-clamp-4 text-sm leading-relaxed text-fg-muted">
      {{ post.excerpt }}
    </p>
    <NuxtLink
      :to="`${basePath}/${post.slug}`"
      class="border-animate mt-5 inline-flex w-fit items-center gap-2 pb-0.5 text-sm font-semibold text-main"
    >
      Read more
      <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </NuxtLink>
  </article>
</template>
