<script setup lang="ts">
const email = ref("")
const subscribed = ref(false)

function onSubscribe(e: Event) {
  e.preventDefault()
  if (!email.value.trim()) return
  subscribed.value = true
  email.value = ""
}
</script>

<template>
  <section class="bg-bg-elevated py-24 lg:py-32">
    <div class="container">
      <UiReveal class="mx-auto max-w-2xl text-center">
        <p class="project-tag mb-4">Stay Informed</p>
        <h2 class="font-display mb-5 text-4xl font-bold leading-tight text-fg lg:text-5xl">
          Stay in the <span class="text-gradient">Loop</span>
        </h2>
        <p class="mb-10 text-base leading-relaxed text-fg-muted">
          Monthly updates on open calls for mobility projects, local and international events, research, and more. We promise — no spam.
        </p>

        <form class="mx-auto flex max-w-md flex-col gap-3 sm:flex-row" @submit="onSubscribe">
          <label for="newsletter-email" class="sr-only">Email address</label>
          <input
            id="newsletter-email"
            v-model="email"
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            class="nl-input flex-1 rounded-xl px-5 py-3.5 text-sm"
          />
          <button
            type="submit"
            class="whitespace-nowrap rounded-xl bg-main px-6 py-3.5 text-sm font-semibold text-on-main transition-all hover:bg-main-hover active:scale-95"
          >
            Subscribe
          </button>
        </form>
        <p v-if="subscribed" class="mt-4 text-sm text-main" role="status">
          Thank you for subscribing!
        </p>
        <p v-else class="mt-4 text-xs text-fg-dim">
          No spam. Unsubscribe anytime.
        </p>
      </UiReveal>
    </div>
  </section>
</template>
