<script setup lang="ts">
import { imprintSections, site } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({ title: "Imprint — eSquare e.V." })
</script>

<template>
  <div>
    <UiPageHero eyebrow="Legal" title="Imprint" />

    <section class="border-t border-nav-border bg-bg">
      <UiContentSection
        v-for="(section, i) in imprintSections"
        :key="section.title"
        :title="section.title"
      >
        <UiReveal :delay="(i % 3) as 0 | 1 | 2">
          <p v-for="(line, j) in section.content" :key="j" class="mb-2 last:mb-0">
            <a v-if="line.includes('@')" :href="`mailto:${site.email}`" class="text-main hover:text-main-hover">{{ line }}</a>
            <a v-else-if="line.startsWith('+')" :href="site.phoneHref" class="text-fg hover:text-main">{{ line }}</a>
            <template v-else>{{ line }}</template>
          </p>
        </UiReveal>
      </UiContentSection>
    </section>

    <UiNewsletterSection />
  </div>
</template>
