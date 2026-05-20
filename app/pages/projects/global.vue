<script setup lang="ts">
import { globalProjects } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Global Projects — eSquare e.V.",
  description:
    "Collaborating beyond Europe with partners in Egypt, Azerbaijan and worldwide.",
})
</script>

<template>
  <div>
    <UiPageHero
      eyebrow="Projects"
      title="Global Projects"
      subtitle="We are always looking and working with partners from all over the world. Collaborating beyond Europe and the near horizons is part of our mission. Currently we are partnering in Egypt and Azerbaijan."
    />

    <UiPageSection>
      <UiReveal class="mb-10">
        <UiSectionHeading
          tag="Worldwide"
          title="Our Global"
          accent="Partnerships"
          description="Building cross-cultural bridges through education, research, and civic engagement beyond Europe."
        />
      </UiReveal>
      <div class="grid gap-5">
        <UiReveal v-for="(project, i) in globalProjects" :key="project.title" :delay="(i % 3) as 0 | 1 | 2">
          <article class="activity-card surface-card rounded-2xl p-6 lg:p-8">
            <h3 class="font-display text-xl font-bold text-fg">{{ project.title }}</h3>
            <dl class="mt-4 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt class="project-tag">Location</dt>
                <dd class="mt-1 text-fg">{{ project.location }}</dd>
              </div>
              <div>
                <dt class="project-tag">Topic</dt>
                <dd class="mt-1 text-fg">{{ project.topic }}</dd>
              </div>
            </dl>
            <a
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              class="border-animate mt-6 inline-flex w-fit items-center gap-2 pb-0.5 text-sm font-semibold text-main"
            >
              Learn more
              <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </article>
        </UiReveal>
      </div>
    </UiPageSection>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
