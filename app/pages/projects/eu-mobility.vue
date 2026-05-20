<script setup lang="ts">
import { homeActivities } from "~/data/site"

definePageMeta({ layout: "default" })

const activity = homeActivities[0]!

useSeoMeta({
  title: "EU Mobility Projects — eSquare e.V.",
  description:
    "Exploring the European landscape through mobility projects and non-formal education.",
})
</script>

<template>
  <div>
    <UiPageHero
      eyebrow="Projects"
      title="EU Mobility Projects"
      subtitle="Celebrating the rich tapestry of European cultures, EU Mobility Projects offer an unparalleled journey of discovery and learning. Through non-formal education methods, these initiatives provide young individuals with the opportunity to explore diverse European landscapes, immerse themselves in new cultures, and build lasting connections across borders."
    />

    <UiPageSection>
      <UiReveal>
        <p class="max-w-3xl text-sm leading-relaxed text-fg-muted lg:text-base">
          Aimed at fostering mutual understanding and personal growth, these
          projects are gateways to gaining invaluable life experiences, enhancing
          skills, and contributing to the vibrant fabric of European unity.
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <UiButtonLink to="/projects/open-applications">View Open Applications</UiButtonLink>
          <UiButtonLink to="/contact-us" variant="outline">Contact Us</UiButtonLink>
        </div>
      </UiReveal>
    </UiPageSection>

    <UiPageSection elevated>
      <UiReveal class="mb-10">
        <UiSectionHeading tag="Gallery" title="Project" accent="Moments" />
      </UiReveal>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <UiReveal
          v-for="(src, i) in activity.images"
          :key="src"
          :delay="(i % 3) as 0 | 1 | 2"
        >
          <img :src="src" :alt="activity.title" class="h-56 w-full rounded-2xl object-cover lg:h-64" />
        </UiReveal>
      </div>
    </UiPageSection>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
