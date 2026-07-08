<script setup lang="ts">
import { assets } from "~/data/site"

const route = useRoute()
const navShadow = ref(false)

const onScroll = () => {
  navShadow.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<template>
  <header
    class="nav-glass fixed top-0 right-0 left-0 z-50 transition-shadow duration-300"
    :style="navShadow ? { boxShadow: `0 4px 40px var(--theme-shadow)` } : {}"
  >
    <div class="container">
      <div class="flex h-14 items-center justify-between sm:h-16 lg:h-20">
        <NuxtLink to="/" class="group flex shrink-0 items-center">
          <img
            :src="assets.logo"
            alt="Rivoj 98"
            class="h-9 w-auto transition-opacity group-hover:opacity-90 sm:h-10 lg:h-11"
            width="180"
            height="44"
            fetchpriority="high"
          />
        </NuxtLink>

        <div class="flex items-center gap-2">
          <LayoutThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>
