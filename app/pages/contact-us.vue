<script setup lang="ts">
import { site } from "~/data/site"

definePageMeta({ layout: "default" })

useSeoMeta({
  title: "Contact Us — eSquare e.V.",
  description:
    "Get in touch with eSquare e.V. — uniting cultures and ideas at the crossroads of innovation and collaboration.",
})

const contactItems = [
  { label: "Phone", value: site.phone, href: site.phoneHref, icon: "phone" as const },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "email" as const },
  { label: "Address", value: site.address, href: "https://maps.google.com/?q=Florastrasse+48,+13187+Berlin", icon: "location" as const },
]
</script>

<template>
  <div>
    <UiPageHero
      eyebrow="Contact"
      title="Contact Us"
      subtitle="eSquare e.V. unites cultures and ideas at the crossroads of innovation and collaboration."
    />

    <UiPageSection>
      <UiReveal>
        <UiSectionHeading tag="Reach Out" title="Get in" accent="Touch" />
      </UiReveal>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <UiReveal v-for="(item, i) in contactItems" :key="item.label" :delay="(i as 0 | 1 | 2)">
          <ContactContactCard v-bind="item" />
        </UiReveal>
      </div>
      <UiReveal :delay="1" class="mt-16">
        <UiSectionHeading tag="Social" title="Follow us on" accent="Social Media" />
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3.5 text-sm font-medium text-fg-muted transition-all hover:border-border-hover hover:text-fg">Facebook</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3.5 text-sm font-medium text-fg-muted transition-all hover:border-border-hover hover:text-fg">LinkedIn</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3.5 text-sm font-medium text-fg-muted transition-all hover:border-border-hover hover:text-fg">Instagram</a>
        </div>
      </UiReveal>
    </UiPageSection>

    <UiOpenCallsBanner />
    <UiNewsletterSection />
  </div>
</template>
