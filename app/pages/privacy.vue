<script setup lang="ts">
import { privacyIntro, privacySections } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({ title: "Data Privacy Policy — eSquare e.V." })
</script>

<template>
  <div>
    <UiPageHero eyebrow="Legal" title="Data Privacy Policy" />

    <UiPageSection narrow>
      <UiReveal>
        <p class="text-sm leading-relaxed text-fg-muted lg:text-base">{{ privacyIntro }}</p>
      </UiReveal>
    </UiPageSection>

    <section class="border-t border-nav-border bg-bg">
      <UiContentSection
        v-for="(section, i) in privacySections"
        :key="section.title"
        :title="section.title"
      >
        <UiReveal :delay="(i % 3) as 0 | 1 | 2">
          <p
            v-for="(paragraph, j) in section.content.split('\n\n')"
            :key="j"
            class="mb-4 whitespace-pre-line last:mb-0"
          >
            {{ paragraph }}
          </p>
        </UiReveal>
      </UiContentSection>
    </section>

    <UiNewsletterSection />
  </div>
</template>
