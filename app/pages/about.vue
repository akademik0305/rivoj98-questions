<script setup lang="ts">
import { teamMembers } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "About Us — eSquare e.V.",
  description:
    "eSquare e.V. unites cultures and ideas at the crossroads of innovation and collaboration.",
})
</script>

<template>
  <div>
    <UiPageHero
      eyebrow="About Us"
      title="Uniting cultures and ideas at the crossroads of innovation and collaboration"
    />

    <UiPageSection>
      <UiReveal>
        <UiSectionHeading tag="Our Mission" title="Civic" accent="Participation" />
      </UiReveal>
      <UiReveal :delay="1">
        <div class="mt-10 max-w-3xl space-y-5 text-sm leading-relaxed text-fg-muted lg:text-base">
          <p>eSquare e.V. is a non-profit, non-governmental organization based in Berlin, founded in 2018 and run by young professionals and volunteers, who are developing projects to engage citizens in the democratic process and empower civic participation online and offline.</p>
          <p>The organization implements projects locally in Germany and globally in several countries across the world and is open for partnerships with organizations working in the same field.</p>
          <p>At eSquare, we believe in the transformative power of education and digital proficiency. Our initiatives are tailored to empower the younger generation, equipping them with essential digital skills and fostering their active participation in society.</p>
          <p>Our efforts extend into various projects focused on strengthening democracy, particularly in Europe and the Middle East — including media fact-checking and tools that contribute to a pluralistic and transparent media landscape.</p>
          <p>eSquare e.V. aims to be more than just an NGO; we are a hub of innovation and collaboration, committed to creating a world where every young individual is empowered to make a positive difference.</p>
        </div>
      </UiReveal>
    </UiPageSection>

    <UiPageSection elevated>
      <UiReveal>
        <UiSectionHeading tag="Team" title="Our" accent="Team" />
      </UiReveal>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <UiReveal
          v-for="(member, i) in teamMembers"
          :key="member.name"
          :delay="(i % 3) as 0 | 1 | 2"
        >
          <UiTeamCard v-bind="member" />
        </UiReveal>
      </div>
    </UiPageSection>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
