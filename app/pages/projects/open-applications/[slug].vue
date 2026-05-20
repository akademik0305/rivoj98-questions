<script setup lang="ts">
import { openApplications } from "~/data/site"

definePageMeta({ layout: "default" })

const route = useRoute()
const slug = route.params.slug as string
const post = computed(() => openApplications.find((p) => p.slug === slug))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Application not found" })
}

useSeoMeta({
  title: () => `${post.value!.title} — eSquare e.V.`,
  description: () => post.value!.excerpt,
})
</script>

<template>
  <div>
    <UiPageHero eyebrow="Open Applications" :title="post!.title" />
    <UiArticleContent>
      <p class="project-tag">Apply Now</p>
      <time class="mt-2 block text-xs text-fg-soft" :datetime="post!.date">
        {{
          new Date(post!.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        }}
      </time>
      <p class="mt-6 text-base leading-relaxed text-fg-muted">{{ post!.excerpt }}</p>
      <NuxtLink
        to="/contact-us"
        class="mt-8 inline-flex rounded-xl bg-main px-6 py-3.5 text-sm font-semibold text-on-main transition-all hover:bg-main-hover active:scale-95"
      >
        Apply via Contact
      </NuxtLink>
      <NuxtLink to="/projects/open-applications" class="border-animate mt-6 block w-fit pb-0.5 text-sm font-semibold text-main">
        ← Back to Open Applications
      </NuxtLink>
    </UiArticleContent>
    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
