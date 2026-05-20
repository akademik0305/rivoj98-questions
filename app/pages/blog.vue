<script setup lang="ts">
import { blogPosts } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Blog — eSquare e.V.",
  description: "News and updates from eSquare e.V.",
})
</script>

<template>
  <div>
    <UiPageHero
      eyebrow="Blog"
      title="News and Updates"
      subtitle="Pioneering research and initiatives in democracy and digital empowerment."
    />

    <UiPageSection>
      <UiReveal class="mb-10">
        <UiSectionHeading tag="Latest" title="All" accent="Posts" />
      </UiReveal>
      <div v-if="blogPosts.length" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <UiReveal
          v-for="(post, i) in blogPosts"
          :key="post.slug"
          :delay="(i % 3) as 0 | 1 | 2"
        >
          <UiPostCard :post="post" base-path="/blog" category="News" />
        </UiReveal>
      </div>
      <UiReveal v-else>
        <p class="surface-card rounded-2xl p-8 text-center text-fg-muted">
          New posts coming soon. Subscribe to our newsletter to stay updated.
        </p>
      </UiReveal>
    </UiPageSection>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
